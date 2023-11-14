import type { ConfigFile } from 'kubernetes-typescript-client-codegen-openapi'

const config: ConfigFile = {
  schemaFile: './swagger.json',
  apiFile: './api-client/client.ts',
  outputFile: './generated/vercel.ts',
  strict: false,
}

export default config
