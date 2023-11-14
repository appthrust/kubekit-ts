import type { ConfigFile } from 'kahirokunn/kubernetes-typescript-client-codegen-openapi';

const config: ConfigFile = {
  schemaFile: './fixtures/invalid-petstore.json',
  apiFile: './fixtures/k8sApiClient.ts',
  outputFile: './tmp/example.ts',
  strict: false,
};

export default config;
