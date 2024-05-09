# Introduction

The `@kubekit/prepare` project is a tool that generates a JSON file of OpenAPI specifications that describe operations that can be executed based on the permissions of Kubernetes ServiceAccount. This tool is particularly useful for application developers who use Kubernetes API. The generated `openapi.json` file is used as a schema file to generate client code in the `@kubekit/codegen` project.

## Key Features

- **Accurate Permission Checks**: Generates OpenAPI specifications that only include API operations that can be executed based on the permissions of the ServiceAccount.
- **Scalability**: Currently, only `ServiceAccount` is supported, but support for `User` and `Group` is also planned in the future.
- **Strict Type Definitions**: Provides more strict type definitions than the standard Swagger definitions of Kubernetes, promoting safer API usage.

## Configuration

To use the project, you need to configure the `config.ts` file. The following example shows how to configure a [ServiceAccount](file:///Users/kahiro/Documents/appthrust/kubekit-ts/packages/kubekit-prepare/README.md#3%2C22-3%2C22).

```typescript:config.ts
import { ConfigFile } from "./config"

const config: ConfigFile = {
  kind: 'ServiceAccount',
  name: 'replicaset-controller',
  namespace: 'kube-system',
  outputFile: './replicaset-controller.openapi.json',
}

export default config
```

## Execution Method

After creating the configuration file, execute the following command to generate `replicaset-controller.openapi.json`.

```bash
npx @kubekit/prepare config.ts
```

## Future Prospects

This project is currently under development and plans to add support for `User` and `Group`, as well as further feature enhancements. This is aimed at enabling more users to effectively utilize Kubernetes API.
