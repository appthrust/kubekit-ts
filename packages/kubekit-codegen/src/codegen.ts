import ts from 'typescript';
import { factory } from './utils/factory';

const defaultEndpointBuilder = factory.createIdentifier('build');

export type ObjectPropertyDefinitions = Record<string, ts.Expression | undefined>;
export function generateObjectProperties(obj: ObjectPropertyDefinitions) {
  return Object.entries(obj)
    .filter(([_, v]) => v)
    .map(([k, v]) => factory.createPropertyAssignment(factory.createIdentifier(k), v as ts.Expression));
}

export function generateImportNode(
  pkg: string,
  namedImports: Record<
    string,
    {
      name: string;
      isTypeOnly: boolean;
    }
  >,
  defaultImportName?: string
) {
  return factory.createImportDeclaration(
    undefined,
    factory.createImportClause(
      false,
      defaultImportName !== undefined ? factory.createIdentifier(defaultImportName) : undefined,
      factory.createNamedImports(
        Object.entries(namedImports).map(([propertyName, { name, isTypeOnly }]) =>
          factory.createImportSpecifier(
            isTypeOnly,
            name === propertyName ? undefined : factory.createIdentifier(propertyName),
            factory.createIdentifier(name)
          )
        )
      )
    ),
    factory.createStringLiteral(pkg)
  );
}

export function generateCreateApiCall({
  endpointBuilder = defaultEndpointBuilder,
  endpointDefinitions,
}: {
  endpointBuilder?: ts.Identifier;
  endpointDefinitions: ts.ObjectLiteralExpression;
}) {
  const injectEndpointsObjectLiteralExpression = factory.createObjectLiteralExpression(
    generateObjectProperties({
      endpoints: factory.createArrowFunction(
        undefined,
        undefined,
        [factory.createParameterDeclaration(undefined, undefined, endpointBuilder, undefined, undefined, undefined)],
        undefined,
        factory.createToken(ts.SyntaxKind.EqualsGreaterThanToken),
        factory.createParenthesizedExpression(endpointDefinitions)
      ),
      overrideExisting: factory.createFalse(),
    }),
    true
  );

  return factory.createCallExpression(
    factory.createPropertyAccessExpression(
      factory.createIdentifier('api'),
      factory.createIdentifier('injectEndpoints')
    ),
    undefined,
    [injectEndpointsObjectLiteralExpression]
  );
}

export function generateEndpointDefinition({
  operationName,
  Response,
  QueryArg,
  queryFn,
  isListWatch,
  isListOrWatch,
  isUnusedArgs,
}: {
  operationName: string;
  Response: ts.TypeReferenceNode;
  QueryArg: ts.TypeReferenceNode;
  queryFn: ts.ObjectLiteralExpression;
  isListWatch: boolean;
  isListOrWatch: boolean;
  isUnusedArgs: boolean;
}) {
  const CustomizedResponse = factory.createTypeReferenceNode(
    factory.createIdentifier(isListOrWatch ? 'MinimumRequiredList' : 'MinimumRequiredGet'),
    [Response]
  );
  if (!isListWatch) {
    return [
      factory.createVariableStatement(
        [factory.createToken(ts.SyntaxKind.ExportKeyword)],
        factory.createVariableDeclarationList(
          [
            factory.createVariableDeclaration(
              factory.createIdentifier(operationName),
              undefined,
              undefined,
              factory.createArrowFunction(
                undefined,
                undefined,
                [
                  ...(isUnusedArgs
                    ? []
                    : [
                        factory.createParameterDeclaration(
                          undefined,
                          undefined,
                          factory.createIdentifier('args'),
                          undefined,
                          QueryArg,
                          undefined
                        ),
                      ]),
                  factory.createParameterDeclaration(
                    undefined,
                    undefined,
                    factory.createIdentifier('options'),
                    factory.createToken(ts.SyntaxKind.QuestionToken),
                    factory.createTypeReferenceNode(factory.createIdentifier('Options'), undefined),
                    undefined
                  ),
                ],
                undefined,
                factory.createToken(ts.SyntaxKind.EqualsGreaterThanToken),
                factory.createBlock(
                  [
                    factory.createReturnStatement(
                      factory.createCallExpression(
                        factory.createIdentifier('apiClient'),
                        [CustomizedResponse],
                        [queryFn, factory.createIdentifier('options')]
                      )
                    ),
                  ],
                  true
                )
              )
            ),
          ],
          ts.NodeFlags.Const
        )
      ),
    ];
  }
  return [
    factory.createFunctionDeclaration(
      [factory.createToken(ts.SyntaxKind.ExportKeyword)],
      undefined,
      factory.createIdentifier(operationName),
      undefined,
      [
        factory.createParameterDeclaration(
          undefined,
          undefined,
          factory.createIdentifier('args'),
          undefined,
          factory.createTypeReferenceNode(factory.createIdentifier('NoWatch'), [QueryArg]),
          undefined
        ),
        factory.createParameterDeclaration(
          undefined,
          undefined,
          factory.createIdentifier('options'),
          factory.createToken(ts.SyntaxKind.QuestionToken),
          factory.createTypeReferenceNode(factory.createIdentifier('Options'), undefined),
          undefined
        ),
      ],
      factory.createTypeReferenceNode(factory.createIdentifier('Promise'), [CustomizedResponse]),
      undefined
    ),
    factory.createFunctionDeclaration(
      [factory.createToken(ts.SyntaxKind.ExportKeyword)],
      undefined,
      factory.createIdentifier(operationName),
      undefined,
      [
        factory.createParameterDeclaration(
          undefined,
          undefined,
          factory.createIdentifier('args'),
          undefined,
          factory.createIntersectionTypeNode([
            QueryArg,
            factory.createTypeLiteralNode([
              factory.createPropertySignature(
                undefined,
                factory.createIdentifier('watch'),
                undefined,
                factory.createLiteralTypeNode(factory.createTrue())
              ),
            ]),
          ]),
          undefined
        ),
        factory.createParameterDeclaration(
          undefined,
          undefined,
          factory.createIdentifier('options'),
          undefined,
          factory.createIntersectionTypeNode([
            factory.createTypeReferenceNode(factory.createIdentifier('Options'), undefined),
            factory.createTypeReferenceNode(factory.createIdentifier('WatchExtraOptions'), [CustomizedResponse]),
          ]),
          undefined
        ),
      ],
      factory.createTypeReferenceNode(factory.createIdentifier('Promise'), [
        factory.createKeywordTypeNode(ts.SyntaxKind.VoidKeyword),
      ]),
      undefined
    ),
    factory.createFunctionDeclaration(
      [factory.createToken(ts.SyntaxKind.ExportKeyword)],
      undefined,
      factory.createIdentifier(operationName),
      undefined,
      [
        factory.createParameterDeclaration(
          undefined,
          undefined,
          factory.createIdentifier('args'),
          undefined,
          factory.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword),
          undefined
        ),
        factory.createParameterDeclaration(
          undefined,
          undefined,
          factory.createIdentifier('options'),
          undefined,
          factory.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword),
          undefined
        ),
      ],
      factory.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword),
      factory.createBlock(
        [
          factory.createReturnStatement(
            factory.createCallExpression(
              factory.createIdentifier('apiClient'),
              [CustomizedResponse],
              [queryFn, factory.createIdentifier('options')]
            )
          ),
        ],
        true
      )
    ),
  ];
}

export function generateTagTypes({ addTagTypes }: { addTagTypes: string[] }) {
  return factory.createVariableStatement(
    [factory.createModifier(ts.SyntaxKind.ExportKeyword)],
    factory.createVariableDeclarationList(
      [
        factory.createVariableDeclaration(
          factory.createIdentifier('addTagTypes'),
          undefined,
          undefined,
          factory.createAsExpression(
            factory.createArrayLiteralExpression(
              addTagTypes.map((tagType) => factory.createStringLiteral(tagType)),
              true
            ),
            factory.createTypeReferenceNode(factory.createIdentifier('const'), undefined)
          )
        ),
      ],
      ts.NodeFlags.Const
    )
  );
}
