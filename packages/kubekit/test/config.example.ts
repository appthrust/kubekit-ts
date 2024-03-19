import type { ConfigFile } from 'appthrust/kubekit';

const config: ConfigFile = {
  schemaFile: './fixtures/api-openapi-spec-v3-api-v1-swagger.json',
  apiFile: './fixtures/k8sApiClient.ts',
  outputFile: './tmp/example.ts',
};

export default config;
