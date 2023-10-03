import type { ConfigFile } from 'kahirokunn/kubernetes-typescript-client-codegen-openapi';

const config: ConfigFile = {
  schemaFile: './fixtures/petstore.yaml',
  apiFile: './fixtures/emptyApi.ts',
  outputFile: './tmp/example.ts',
};

export default config;
