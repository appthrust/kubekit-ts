import ts from 'typescript';
import * as path from 'path';
import { camelCase } from 'lodash';
import ApiGenerator, {
  getOperationName as _getOperationName,
  getReferenceName,
  isReference,
  supportDeepObjects,
} from '@kahirokunn/oazapfts-patched/lib/codegen/generate';
import {
  createQuestionToken,
  keywordType,
  createPropertyAssignment,
  isValidIdentifier,
} from '@kahirokunn/oazapfts-patched/lib/codegen/tscodegen';
import type { OpenAPIV3 } from 'openapi-types';
import type { EndpointMatcher, GenerationOptions, OperationDefinition, TextMatcher } from './types';
import { capitalize, getOperationDefinitions, getV3Doc, removeUndefined } from './utils';
import { generateEndpointDefinition, generateImportNode } from './codegen';
import { factory } from './utils/factory';

function defaultIsDataResponse(code: string) {
  const parsedCode = Number(code);
  return !Number.isNaN(parsedCode) && parsedCode >= 200 && parsedCode < 300;
}

function getOperationName({ verb, path, operation }: Pick<OperationDefinition, 'verb' | 'path' | 'operation'>) {
  return _getOperationName(verb, path, operation.operationId);
}

function patternMatches(pattern?: TextMatcher) {
  const filters = Array.isArray(pattern) ? pattern : [pattern];
  return function matcher(operationName: string) {
    if (!pattern) return true;
    return filters.some((filter) =>
      typeof filter === 'string' ? filter === operationName : filter?.test(operationName)
    );
  };
}

function operationMatches(pattern?: EndpointMatcher) {
  const checkMatch = typeof pattern === 'function' ? pattern : patternMatches(pattern);
  return function matcher(operationDefinition: OperationDefinition) {
    if (!pattern) return true;
    const operationName = getOperationName(operationDefinition);
    return checkMatch(operationName, operationDefinition);
  };
}

function withQueryComment<T extends ts.Node>(node: T, def: QueryArgDefinition, hasTrailingNewLine: boolean): T {
  const comment = def.origin === 'param' ? def.param.description : def.body.description;
  if (comment) {
    return ts.addSyntheticLeadingComment(
      node,
      ts.SyntaxKind.MultiLineCommentTrivia,
      `* ${comment} `,
      hasTrailingNewLine
    );
  }
  return node;
}

export async function generateApi(
  spec: string,
  {
    apiFile,
    apiImport = 'apiClient',
    optionsImport = 'Options',
    watchExtraOptions = 'WatchExtraOptions',
    argSuffix = 'ApiArg',
    responseSuffix = 'ApiResponse',
    outputFile,
    isDataResponse = defaultIsDataResponse,
    filterEndpoints,
    unionUndefined = true,
    strict = true,
  }: GenerationOptions
) {
  const v3Doc = await getV3Doc(spec);

  const apiGen = new ApiGenerator(v3Doc, {
    unionUndefined,
  });

  const operationDefinitions = getOperationDefinitions(v3Doc).filter(operationMatches(filterEndpoints));

  const resultFile = ts.createSourceFile(
    'someFileName.ts',
    '',
    ts.ScriptTarget.Latest,
    /*setParentNodes*/ false,
    ts.ScriptKind.TS
  );
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });

  const interfaces: Record<string, ts.InterfaceDeclaration | ts.TypeAliasDeclaration> = {};
  function registerInterface(declaration: ts.InterfaceDeclaration | ts.TypeAliasDeclaration) {
    const name = declaration.name.escapedText.toString();
    if (name in interfaces) {
      throw new Error(`interface/type alias ${name} already registered`);
    }
    interfaces[name] = declaration;
    return declaration;
  }

  if (outputFile) {
    outputFile = path.resolve(process.cwd(), outputFile);
    if (apiFile.startsWith('.')) {
      apiFile = path.relative(path.dirname(outputFile), apiFile);
      apiFile = apiFile.replace(/\\/g, '/');
      if (!apiFile.startsWith('.')) apiFile = './' + apiFile;
    }
  }
  apiFile = apiFile.replace(/\.[jt]sx?$/, '');

  const sourceCode = printer.printNode(
    ts.EmitHint.Unspecified,
    factory.createSourceFile(
      [
        generateImportNode(apiFile, {
          [apiImport]: { isTypeOnly: false, name: 'apiClient' },
          [optionsImport]: { isTypeOnly: true, name: 'Options' },
          [watchExtraOptions]: { isTypeOnly: true, name: 'WatchExtraOptions' },
        }),
        ...buildInTypes,
        ...operationDefinitions
          .map((operationDefinition) =>
            generateRequester({
              operationDefinition,
            })
          )
          .flat(),
        ...Object.values(interfaces),
        ...apiGen['aliases'],
      ],
      factory.createToken(ts.SyntaxKind.EndOfFileToken),
      ts.NodeFlags.None
    ),
    resultFile
  );

  return sourceCode;

  function generateRequester({ operationDefinition }: { operationDefinition: OperationDefinition }) {
    const {
      verb,
      path,
      pathItem,
      operation,
      operation: { responses, requestBody },
    } = operationDefinition;
    const operationName = getOperationName({ verb, path, operation });

    const returnsJson = apiGen.getResponseType(responses) === 'json';
    let ResponseType: ts.TypeNode = factory.createKeywordTypeNode(ts.SyntaxKind.UnknownKeyword);
    if (returnsJson) {
      const returnTypes = Object.entries(responses || {})
        .map(
          ([code, response]) =>
            [
              code,
              apiGen.resolve(response),
              apiGen.getTypeFromResponse(response) || factory.createKeywordTypeNode(ts.SyntaxKind.UndefinedKeyword),
            ] as const
        )
        .filter(([status, response]) => isDataResponse(status, apiGen.resolve(response), responses || {}))
        .map(([code, response, type]) =>
          ts.addSyntheticLeadingComment(
            { ...type },
            ts.SyntaxKind.MultiLineCommentTrivia,
            `* status ${code} ${response.description} `,
            false
          )
        )
        .filter((type) => type !== keywordType.void);
      if (returnTypes.length > 0) {
        ResponseType = factory.createUnionTypeNode(returnTypes);
      }
    }

    const ResponseTypeName = factory.createTypeReferenceNode(
      registerInterface(
        factory.createTypeAliasDeclaration(
          [factory.createModifier(ts.SyntaxKind.ExportKeyword)],
          capitalize(operationName + responseSuffix),
          undefined,
          ResponseType
        )
      ).name
    );

    const parameters = supportDeepObjects([
      ...apiGen.resolveArray(pathItem.parameters),
      ...apiGen.resolveArray(operation.parameters),
    ]);

    const allNames = parameters.map((p) => p.name);
    const queryArg: QueryArgDefinitions = {};
    for (const param of parameters) {
      const isPureSnakeCase = /^[a-zA-Z][a-zA-Z0-9_]*$/.test(param.name);
      const camelCaseName = camelCase(param.name);

      let name = isPureSnakeCase && !allNames.includes(camelCaseName) ? camelCaseName : param.name;

      if (name in queryArg) {
        let duplicatedNewName = `${queryArg[name].param?.in}_${name}`;
        duplicatedNewName =
          isPureSnakeCase && !allNames.includes(duplicatedNewName) ? camelCase(duplicatedNewName) : duplicatedNewName;
        while (duplicatedNewName in queryArg) {
          duplicatedNewName = '_' + duplicatedNewName;
        }
        queryArg[duplicatedNewName] = queryArg[name];
        queryArg[duplicatedNewName].name = duplicatedNewName;
        delete queryArg[name];

        name = `${param.in}_${name}`;
        name = isPureSnakeCase && !allNames.includes(name) ? camelCase(name) : name;
      }
      while (name in queryArg) {
        name = '_' + name;
      }

      queryArg[name] = {
        origin: 'param',
        name,
        originalName: param.name,
        type: apiGen.getTypeFromSchema(isReference(param) ? param : param.schema),
        required: param.required,
        param,
      };
    }

    if (requestBody) {
      const body = apiGen.resolve(requestBody);
      const schema = apiGen.getSchemaFromContent(body.content);
      const type = apiGen.getTypeFromSchema(schema);
      const schemaName = camelCase((type as any).name || getReferenceName(schema) || 'body');
      let name = 'body';

      while (name in queryArg) {
        name = '_' + name;
      }

      for (let media in body.content) {
        body.content[media];
      }

      queryArg[name] = {
        origin: 'body',
        name,
        originalName: schemaName,
        type: getBodyNode(
          Object.fromEntries(
            Object.keys(body.content).map((mediaType) => [
              mediaType,
              apiGen.getTypeFromSchema(body.content[mediaType].schema),
            ])
          )
        ),
        required: true,
        body,
      };
    }

    const propertyName = (name: string | ts.PropertyName): ts.PropertyName => {
      if (typeof name === 'string') {
        return isValidIdentifier(name) ? factory.createIdentifier(name) : factory.createStringLiteral(name);
      }
      return name;
    };

    const queryArgValues = Object.values(queryArg);
    const isListOrWatch =
      operationName.startsWith("list") || operationName.startsWith("watch")
    const isListWatch =
      !path.includes('/watch/') &&
      verb.toUpperCase() === 'GET' &&
      queryArgValues.findIndex(
        (queryArg) => queryArg.origin === 'param' && queryArg.param.name === 'watch' && queryArg.param.in === 'query'
      ) !== -1;

    const bodyType = queryArgValues.find((def) => def.origin === 'body')?.type;

    const getType = () => {
      if (queryArgValues.length === 0) {
        return factory.createKeywordTypeNode(ts.SyntaxKind.VoidKeyword);
      }
      const queryNode = factory.createTypeLiteralNode(
        queryArgValues
          .filter((def) => def.origin === 'param')
          .map((def) =>
            withQueryComment(
              factory.createPropertySignature(
                undefined,
                propertyName(def.name),
                createQuestionToken(!def.required),
                def.type
              ),
              def,
              true
            )
          )
      );
      if (bodyType) {
        return factory.createIntersectionTypeNode([queryNode, factory.createParenthesizedType(bodyType)]);
      }
      return queryNode;
    };

    const QueryArg = factory.createTypeReferenceNode(
      registerInterface(
        factory.createTypeAliasDeclaration(
          [factory.createModifier(ts.SyntaxKind.ExportKeyword)],
          capitalize(operationName + argSuffix),
          undefined,
          getType()
        )
      ).name
    );

    return generateEndpointDefinition({
      operationName,
      Response: ResponseTypeName,
      QueryArg,
      queryFn: generateQueryFn({ operationDefinition, queryArg }),
      isListWatch,
      isListOrWatch,
    });
  }

  function generateQueryFn({
    operationDefinition,
    queryArg,
  }: {
    operationDefinition: OperationDefinition;
    queryArg: QueryArgDefinitions;
  }) {
    const { path, verb } = operationDefinition;

    const bodyParameter = Object.values(queryArg).find((def) => def.origin === 'body');

    const rootObject = factory.createIdentifier('args');

    function pickParams(paramIn: string) {
      return Object.values(queryArg).filter((def) => def.origin === 'param' && def.param.in === paramIn);
    }

    function createObjectLiteralProperty(parameters: QueryArgDefinition[], propertyName: string) {
      return parameters.length === 0
        ? undefined
        : factory.createPropertyAssignment(
            factory.createIdentifier(propertyName),
            factory.createObjectLiteralExpression(
              parameters.map(
                (param) => createPropertyAssignment(param.originalName, accessProperty(rootObject, param.name)),
                true
              )
            )
          );
    }

    return factory.createObjectLiteralExpression(
      [
        factory.createPropertyAssignment(
          factory.createIdentifier('path'),
          generatePathExpression(path, pickParams('path'), rootObject, strict)
        ),
        verb.toUpperCase() === 'GET'
          ? undefined
          : factory.createPropertyAssignment(
              factory.createIdentifier('method'),
              factory.createStringLiteral(verb.toUpperCase())
            ),
        ...(bodyParameter === undefined
          ? []
          : [
              factory.createPropertyAssignment(
                factory.createIdentifier('body'),
                factory.createPropertyAccessExpression(rootObject, factory.createIdentifier(bodyParameter.name))
              ),
              factory.createPropertyAssignment(
                factory.createIdentifier('contentType'),
                factory.createPropertyAccessExpression(rootObject, factory.createIdentifier('contentType'))
              ),
            ]),
        createObjectLiteralProperty(pickParams('cookie'), 'cookies'),
        createObjectLiteralProperty(pickParams('header'), 'headers'),
        createObjectLiteralProperty(pickParams('query'), 'params'),
      ].filter(removeUndefined),
      false
    );
  }
}

function accessProperty(rootObject: ts.Identifier, propertyName: string) {
  return isValidIdentifier(propertyName)
    ? factory.createPropertyAccessExpression(rootObject, factory.createIdentifier(propertyName))
    : factory.createElementAccessExpression(rootObject, factory.createStringLiteral(propertyName));
}

function generatePathExpression(
  path: string,
  pathParameters: QueryArgDefinition[],
  rootObject: ts.Identifier,
  strict: boolean
) {
  const expressions: Array<[string, string]> = [];

  const head = path.replace(/\{(.*?)\}(.*?)(?=\{|$)/g, (_, expression, literal) => {
    let param = pathParameters.find((p) => p.originalName === expression);
    if (!param) {
      if (strict) {
        throw new Error(`path parameter ${expression} does not seem to be defined in '${path}'!`);
      }
      param = {
        origin: 'param',
        name: expression,
        originalName: expression,
        type: factory.createToken(ts.SyntaxKind.StringKeyword),
        required: true,
        param: {
          name: expression,
          in: 'path',
          description: 'The name that needs to be deleted',
          required: true,
          schema: { type: 'string' },
        },
      };
      pathParameters.push(param);
    }
    expressions.push([param.name, literal]);
    return '';
  });

  return expressions.length
    ? factory.createTemplateExpression(
        factory.createTemplateHead(head),
        expressions.map(([prop, literal], index) =>
          factory.createTemplateSpan(
            accessProperty(rootObject, prop),
            index === expressions.length - 1
              ? factory.createTemplateTail(literal)
              : factory.createTemplateMiddle(literal)
          )
        )
      )
    : factory.createNoSubstitutionTemplateLiteral(head);
}

type QueryArgDefinition = {
  name: string;
  originalName: string;
  required?: boolean;
  param?: OpenAPIV3.ParameterObject;
  type: ts.TypeNode;
} & (
  | {
      origin: 'param';
      param: OpenAPIV3.ParameterObject;
    }
  | {
      origin: 'body';
      body: OpenAPIV3.RequestBodyObject;
    }
);
type QueryArgDefinitions = Record<string, QueryArgDefinition>;

function getBodyNode(bodies: { [contentType: string]: ts.TypeNode }): ts.TypeNode {
  return factory.createParenthesizedType(
    factory.createUnionTypeNode(
      Object.keys(bodies).map((contentType) =>
        factory.createTypeLiteralNode([
          factory.createPropertySignature(
            undefined,
            factory.createIdentifier('contentType'),
            contentType === '*/*' ? factory.createToken(ts.SyntaxKind.QuestionToken) : undefined,
            contentType === '*/*'
              ? factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword)
              : factory.createLiteralTypeNode(factory.createStringLiteral(contentType))
          ),
          factory.createPropertySignature(undefined, factory.createIdentifier('body'), undefined, bodies[contentType]),
        ])
      )
    )
  );
}

// type Id<T> = { [K in keyof T]: T[K] } & {};
// type NoWatch<T> = Omit<T, "watch"> & {
// 	watch?: false;
// };
// type PartialRequired<T, K extends keyof T> = Id<Required<Pick<T, K>> & Omit<T, K>>;
// type MinimumRequiredGet<T> = Id<T extends {
// 	metadata?: any;
// 	apiVersion?: any;
// 	kind?: any;
// }
// 	? Omit<PartialRequired<T, "metadata" | "apiVersion" | "kind">, "metadata"> & {
// 			metadata: PartialRequired<
// 				Required<T>["metadata"],
// 				"name" | "namespace" | "creationTimestamp" | "resourceVersion"
// 			>;
// 	  }
// 	: T>;
// type MinimumRequiredList<T> = Id<T extends {
// 	items: {
// 		metadata?: any;
// 		apiVersion?: any;
// 		kind?: any;
// 	}[];
// }
// 	? Omit<T, "items"> & {
// 			items: MinimumRequiredGet<T["items"][number]>[];
// 	  }
// 	: T>;
const buildInTypes = [
  factory.createTypeAliasDeclaration(
    undefined,
    factory.createIdentifier("Id"),
    [factory.createTypeParameterDeclaration(
      undefined,
      factory.createIdentifier("T"),
      undefined,
      undefined
    )],
    factory.createIntersectionTypeNode([
      factory.createMappedTypeNode(
        undefined,
        factory.createTypeParameterDeclaration(
          undefined,
          factory.createIdentifier("K"),
          factory.createTypeOperatorNode(
            ts.SyntaxKind.KeyOfKeyword,
            factory.createTypeReferenceNode(
              factory.createIdentifier("T"),
              undefined
            )
          ),
          undefined
        ),
        undefined,
        undefined,
        factory.createIndexedAccessTypeNode(
          factory.createTypeReferenceNode(
            factory.createIdentifier("T"),
            undefined
          ),
          factory.createTypeReferenceNode(
            factory.createIdentifier("K"),
            undefined
          )
        ),
        undefined,
      ),
      factory.createTypeLiteralNode([])
    ])
  ),
  factory.createTypeAliasDeclaration(
    undefined,
    factory.createIdentifier("NoWatch"),
    [factory.createTypeParameterDeclaration(
      undefined,
      factory.createIdentifier("T"),
      undefined,
      undefined
    )],
    factory.createIntersectionTypeNode([
      factory.createTypeReferenceNode(
        factory.createIdentifier("Omit"),
        [
          factory.createTypeReferenceNode(
            factory.createIdentifier("T"),
            undefined
          ),
          factory.createLiteralTypeNode(factory.createStringLiteral("watch"))
        ]
      ),
      factory.createTypeLiteralNode([factory.createPropertySignature(
        undefined,
        factory.createIdentifier("watch"),
        factory.createToken(ts.SyntaxKind.QuestionToken),
        factory.createLiteralTypeNode(factory.createFalse())
      )])
    ])
  ),
  factory.createTypeAliasDeclaration(
    undefined,
    factory.createIdentifier("PartialRequired"),
    [
      factory.createTypeParameterDeclaration(
        undefined,
        factory.createIdentifier("T"),
        undefined,
        undefined
      ),
      factory.createTypeParameterDeclaration(
        undefined,
        factory.createIdentifier("K"),
        factory.createTypeOperatorNode(
          ts.SyntaxKind.KeyOfKeyword,
          factory.createTypeReferenceNode(
            factory.createIdentifier("T"),
            undefined
          )
        ),
        undefined
      )
    ],
    factory.createTypeReferenceNode(
      factory.createIdentifier("Id"),
      [factory.createIntersectionTypeNode([
        factory.createTypeReferenceNode(
          factory.createIdentifier("Required"),
          [factory.createTypeReferenceNode(
            factory.createIdentifier("Pick"),
            [
              factory.createTypeReferenceNode(
                factory.createIdentifier("T"),
                undefined
              ),
              factory.createTypeReferenceNode(
                factory.createIdentifier("K"),
                undefined
              )
            ]
          )]
        ),
        factory.createTypeReferenceNode(
          factory.createIdentifier("Omit"),
          [
            factory.createTypeReferenceNode(
              factory.createIdentifier("T"),
              undefined
            ),
            factory.createTypeReferenceNode(
              factory.createIdentifier("K"),
              undefined
            )
          ]
        )
      ])]
    )
  ),
  factory.createTypeAliasDeclaration(
    undefined,
    factory.createIdentifier("MinimumRequiredGet"),
    [factory.createTypeParameterDeclaration(
      undefined,
      factory.createIdentifier("T"),
      undefined,
      undefined
    )],
    factory.createTypeReferenceNode(
      factory.createIdentifier("Id"),
      [factory.createConditionalTypeNode(
        factory.createTypeReferenceNode(
          factory.createIdentifier("T"),
          undefined
        ),
        factory.createTypeLiteralNode([
          factory.createPropertySignature(
            undefined,
            factory.createIdentifier("metadata"),
            factory.createToken(ts.SyntaxKind.QuestionToken),
            factory.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword)
          ),
          factory.createPropertySignature(
            undefined,
            factory.createIdentifier("apiVersion"),
            factory.createToken(ts.SyntaxKind.QuestionToken),
            factory.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword)
          ),
          factory.createPropertySignature(
            undefined,
            factory.createIdentifier("kind"),
            factory.createToken(ts.SyntaxKind.QuestionToken),
            factory.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword)
          )
        ]),
        factory.createIntersectionTypeNode([
          factory.createTypeReferenceNode(
            factory.createIdentifier("Omit"),
            [
              factory.createTypeReferenceNode(
                factory.createIdentifier("PartialRequired"),
                [
                  factory.createTypeReferenceNode(
                    factory.createIdentifier("T"),
                    undefined
                  ),
                  factory.createUnionTypeNode([
                    factory.createLiteralTypeNode(factory.createStringLiteral("metadata")),
                    factory.createLiteralTypeNode(factory.createStringLiteral("apiVersion")),
                    factory.createLiteralTypeNode(factory.createStringLiteral("kind"))
                  ])
                ]
              ),
              factory.createLiteralTypeNode(factory.createStringLiteral("metadata"))
            ]
          ),
          factory.createTypeLiteralNode([factory.createPropertySignature(
            undefined,
            factory.createIdentifier("metadata"),
            undefined,
            factory.createTypeReferenceNode(
              factory.createIdentifier("PartialRequired"),
              [
                factory.createIndexedAccessTypeNode(
                  factory.createTypeReferenceNode(
                    factory.createIdentifier("Required"),
                    [factory.createTypeReferenceNode(
                      factory.createIdentifier("T"),
                      undefined
                    )]
                  ),
                  factory.createLiteralTypeNode(factory.createStringLiteral("metadata"))
                ),
                factory.createUnionTypeNode([
                  factory.createLiteralTypeNode(factory.createStringLiteral("name")),
                  factory.createLiteralTypeNode(factory.createStringLiteral("namespace")),
                  factory.createLiteralTypeNode(factory.createStringLiteral("creationTimestamp")),
                  factory.createLiteralTypeNode(factory.createStringLiteral("resourceVersion"))
                ])
              ]
            )
          )])
        ]),
        factory.createTypeReferenceNode(
          factory.createIdentifier("T"),
          undefined
        )
      )]
    )
  ),
  factory.createTypeAliasDeclaration(
    undefined,
    factory.createIdentifier("MinimumRequiredList"),
    [factory.createTypeParameterDeclaration(
      undefined,
      factory.createIdentifier("T"),
      undefined,
      undefined
    )],
    factory.createTypeReferenceNode(
      factory.createIdentifier("Id"),
      [factory.createConditionalTypeNode(
        factory.createTypeReferenceNode(
          factory.createIdentifier("T"),
          undefined
        ),
        factory.createTypeLiteralNode([factory.createPropertySignature(
          undefined,
          factory.createIdentifier("items"),
          undefined,
          factory.createArrayTypeNode(factory.createTypeLiteralNode([
            factory.createPropertySignature(
              undefined,
              factory.createIdentifier("metadata"),
              factory.createToken(ts.SyntaxKind.QuestionToken),
              factory.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword)
            ),
            factory.createPropertySignature(
              undefined,
              factory.createIdentifier("apiVersion"),
              factory.createToken(ts.SyntaxKind.QuestionToken),
              factory.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword)
            ),
            factory.createPropertySignature(
              undefined,
              factory.createIdentifier("kind"),
              factory.createToken(ts.SyntaxKind.QuestionToken),
              factory.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword)
            )
          ]))
        )]),
        factory.createIntersectionTypeNode([
          factory.createTypeReferenceNode(
            factory.createIdentifier("Omit"),
            [
              factory.createTypeReferenceNode(
                factory.createIdentifier("T"),
                undefined
              ),
              factory.createLiteralTypeNode(factory.createStringLiteral("items"))
            ]
          ),
          factory.createTypeLiteralNode([factory.createPropertySignature(
            undefined,
            factory.createIdentifier("items"),
            undefined,
            factory.createArrayTypeNode(factory.createTypeReferenceNode(
              factory.createIdentifier("MinimumRequiredGet"),
              [factory.createIndexedAccessTypeNode(
                factory.createIndexedAccessTypeNode(
                  factory.createTypeReferenceNode(
                    factory.createIdentifier("T"),
                    undefined
                  ),
                  factory.createLiteralTypeNode(factory.createStringLiteral("items"))
                ),
                factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword)
              )]
            ))
          )])
        ]),
        factory.createTypeReferenceNode(
          factory.createIdentifier("T"),
          undefined
        )
      )]
    )
  )
];
