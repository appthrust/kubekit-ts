import ts from 'typescript';
import { factory } from './utils/factory';

const defaultEndpointBuilder = factory.createIdentifier('build');

export type ObjectPropertyDefinitions = Record<string, ts.Expression | undefined>;
export function generateObjectProperties(obj: ObjectPropertyDefinitions) {
  return Object.entries(obj)
    .filter(([_, v]) => v)
    .map(([k, v]) => factory.createPropertyAssignment(factory.createIdentifier(k), v as ts.Expression));
}

export function generateImportNode(pkg: string, namedImports: Record<string, string>, defaultImportName?: string) {
  return factory.createImportDeclaration(
    undefined,
    undefined,
    factory.createImportClause(
      false,
      defaultImportName !== undefined ? factory.createIdentifier(defaultImportName) : undefined,
      factory.createNamedImports(
        Object.entries(namedImports).map(([propertyName, name]) =>
          factory.createImportSpecifier(
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
        [
          factory.createParameterDeclaration(
            undefined,
            undefined,
            undefined,
            endpointBuilder,
            undefined,
            undefined,
            undefined
          ),
        ],
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
}: {
  operationName: string;
  Response: ts.TypeReferenceNode;
  QueryArg: ts.TypeReferenceNode;
  queryFn: ts.ObjectLiteralExpression;
}) {
  return factory.createVariableStatement(
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
              factory.createParameterDeclaration(
                undefined,
                undefined,
                undefined,
                factory.createIdentifier('args'),
                undefined,
                QueryArg,
                undefined
              ),
            ],
            factory.createTypeReferenceNode(factory.createIdentifier('Promise'), [Response]),
            factory.createToken(ts.SyntaxKind.EqualsGreaterThanToken),
            factory.createBlock(
              [
                factory.createReturnStatement(
                  factory.createCallExpression(factory.createIdentifier('apiClient'), undefined, [queryFn])
                ),
              ],
              true
            )
          )
        ),
      ],
      ts.NodeFlags.Const
    )
  );
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
