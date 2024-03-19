import type { ConfigFile } from 'appthrust/kubekit';

const config: ConfigFile = {
  schemaFile: './fixtures/invalid-petstore.json',
  apiFile: './fixtures/k8sApiClient.ts',
  outputFile: './tmp/example.ts',
  strict: false,
};

export default config;
