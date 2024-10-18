# kubekit

kubekit is developed to provide a simple, fast, and customizable TypeScript Kubernetes client and controller runtime. It is designed with type safety and efficiency in mind, and is optimized for Tree Shaking compatibility. It supports Next.js and Node.js, with planned future support for Bun and Deno.

## Features

- **Simple**: Intuitive API that is easy to use
- **Fast**: Optimized performance
- **Slim**: Minimal dependencies and lean implementation
- **Customizable**: A variety of configuration options
- **Type-Safe**: Fully leverages TypeScript
- **Tree Shaking Compatibility**: Does not include any unused code
- **Support**: Next.js, Node.js

## Components

### [@kubekit/client](https://github.com/appthrust/kubekit-ts/tree/main/packages/kubekit-client)

A TypeScript Kubernetes client and controller runtime.

### [@kubekit/openapi-gen](https://github.com/appthrust/kubekit-ts/tree/main/packages/kubekit-openapi-gen)

The `@kubekit/openapi-gen` project is a tool that generates a JSON file of OpenAPI specifications that describe operations that can be executed based on the permissions of Kubernetes ServiceAccount. This tool is particularly useful for application developers who use Kubernetes API. The generated `openapi.json` file is used as a schema file to generate client code in the `@kubekit/client-gen` project.

### [@kubekit/client-gen](https://github.com/appthrust/kubekit-ts/tree/main/packages/kubekit-client-gen)

TypeScript Kubernetes client CodeGenerator.

## Origin

kubekit was inspired by `RTK Query` and `RTK Query Codegen`, and the creator of kubekit, [kahirokunn](https://github.com/kahirokunn), was an early contributor to [rtk-query-codegen-openapi](https://github.com/reduxjs/redux-toolkit/tree/master/packages/rtk-query-codegen-openapi). This project began by [forking the code](https://github.com/reduxjs/redux-toolkit/commit/52ab548c55198f2c5cacb2be9a8dbae235d4443c) of `RTK Query` and `RTK Query Codegen`, aiming to incorporate the best features of both while adapting to the unique characteristics of Kubernetes. As a result, `@kubekit/client` and `@kubekit/codegen` were developed.

## Support and Contributions

kubekit is an open-source project that welcomes feedback and contributions from the community. Please refer to the [Contribution Guide](https://github.com/appthrust/kubekit-ts/blob/main/CONTRIBUTING.md).
