import ts from 'typescript';
import * as path from 'path';
import { camelCase } from 'lodash';
import ApiGenerator, {
  getOperationName as _getOperationName,
  getReferenceName,
  isReference,
  supportDeepObjects,
} from '@rtk-query/oazapfts-patched/lib/codegen/generate';
import {
  createQuestionToken,
  keywordType,
  createPropertyAssignment,
  isValidIdentifier,
} from '@rtk-query/oazapfts-patched/lib/codegen/tscodegen';
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
    argSuffix = 'ApiArg',
    responseSuffix = 'ApiResponse',
    outputFile,
    isDataResponse = defaultIsDataResponse,
    filterEndpoints,
    unionUndefined = true,
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
        generateImportNode(apiFile, { [apiImport]: 'apiClient' }),
        ...operationDefinitions.map((operationDefinition) =>
          generateRequester({
            operationDefinition,
          })
        ),
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
          undefined,
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

      const name = isPureSnakeCase && !allNames.includes(camelCaseName) ? camelCaseName : param.name;

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
      let name = schemaName in queryArg ? 'body' : schemaName;

      while (name in queryArg) {
        name = '_' + name;
      }

      queryArg[name] = {
        origin: 'body',
        name,
        originalName: schemaName,
        type: apiGen.getTypeFromSchema(schema),
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

    const QueryArg = factory.createTypeReferenceNode(
      registerInterface(
        factory.createTypeAliasDeclaration(
          undefined,
          [factory.createModifier(ts.SyntaxKind.ExportKeyword)],
          capitalize(operationName + argSuffix),
          undefined,
          queryArgValues.length > 0
            ? factory.createTypeLiteralNode(
                queryArgValues.map((def) =>
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
              )
            : factory.createKeywordTypeNode(ts.SyntaxKind.VoidKeyword)
        )
      ).name
    );

    return generateEndpointDefinition({
      operationName,
      Response: ResponseTypeName,
      QueryArg,
      queryFn: generateQueryFn({ operationDefinition, queryArg }),
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
                (param) =>
                  createPropertyAssignment(
                    param.originalName,
                    accessProperty(rootObject, param.name)
                  ),
                true
              )
            )
          );
    }

    return factory.createObjectLiteralExpression(
      [
        factory.createPropertyAssignment(
          factory.createIdentifier('path'),
          generatePathExpression(path, pickParams('path'), rootObject)
        ),
        verb.toUpperCase() === 'GET'
          ? undefined
          : factory.createPropertyAssignment(
              factory.createIdentifier('method'),
              factory.createStringLiteral(verb.toUpperCase())
            ),
        bodyParameter === undefined
          ? undefined
          : factory.createPropertyAssignment(
              factory.createIdentifier('body'),
              factory.createPropertyAccessExpression(rootObject, factory.createIdentifier(bodyParameter.name))
            ),
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
  rootObject: ts.Identifier
) {
  const expressions: Array<[string, string]> = [];

  const head = path.replace(/\{(.*?)\}(.*?)(?=\{|$)/g, (_, expression, literal) => {
    const param = pathParameters.find((p) => p.originalName === expression);
    if (!param) {
      throw new Error(`path parameter ${expression} does not seem to be defined in '${path}'!`);
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
  type: ts.TypeNode;
  required?: boolean;
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
