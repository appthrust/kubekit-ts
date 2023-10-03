import type { ConfigFile } from 'kahirokunn/kubernetes-typescript-client-codegen-openapi';

const config: ConfigFile = {
  schemaFile: '/Users/kahiro/Documents/appthrust/openapi/api/openapi-spec/v3/apis/appthrust.dev/v1/swagger.json',
  apiFile: './fixtures/emptyApi.ts',
  outputFile: './tmp/example.ts',
};

export default config;
