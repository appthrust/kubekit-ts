/**
 * @type {import("kahirokunn/kubernetes-typescript-client-codegen-openapi").ConfigFile}
 */
module.exports = {
  schemaFile: './fixtures/api-openapi-spec-v3-api-v1-swagger.json',
  apiFile: './fixtures/k8sApiClient.ts',
  outputFile: './tmp/example.ts',
};
