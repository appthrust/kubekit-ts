# Introduction

The `@kubekit/openapi-gen` project is a tool that generates a JSON file of OpenAPI specifications that describe operations that can be executed based on the permissions of Kubernetes ServiceAccount. This tool is particularly useful for application developers who use Kubernetes API. The generated `openapi.json` file is used as a schema file to generate client code in the `@kubekit/client-gen` project.

## Key Features

- **Minimalist**: Generates only the Kubernetes clients that have the necessary permissions. No unnecessary APIs are included.
- **Most Strict Type Definitions**: Provides more strict and accurate type definitions than the standard Kubernetes OpenAPI.
- **Simple and Intuitive Interface**: Offers a simple and intuitive interface for ease of use.
- **Customizable**: Can be customized to meet user needs.
- **Code Splitting Support**: Generates code that supports code splitting for efficient load times and performance.
- **Web Standards Compliant**: Utilizes native fetch API for web-standard compliant communications and ensures testability with tools like msw.
- **Fast Generation**: `@kubekit/openapi-gen` generates the OpenAPI specifications in approximately 2 seconds, and `@kubekit/client-gen` generates the client code in about 1.5 seconds, making the total generation time around 3.5 seconds.

## Feature Table

The table below shows the implementation status of features in the `@kubekit/openapi-gen` project.

| Feature         | :----: |
| --------------- | :----: |
| ServiceAccount  |   ✅   |
| Group           |   ✅   |
| User            |   ✅   |
| Role            |   ✅   |
| ClusterRole     |   ✅   |
| aggregationRule |   ❌   |

This table has been prepared to clarify the features currently supported and the future development plans.

## Feature Comparison Table

The table below compares the size of the generated code by different Kubernetes client generation tools, specifying the API versions they support. For `@kubekit/openapi-gen + @kubekit/client-gen`, the client is generated with the following permissions:

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  namespace: default
  name: example
rules:
  - apiGroups: ['']
    resources: ['pods']
    verbs: ['create']
  - apiGroups: ['']
    resources: ['serviceaccounts']
    verbs: ['get']
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: example
rules:
  - apiGroups: ['']
    resources: ['configmaps']
    verbs: ['*']
```

| Tool                                       | core v1 (ts) | core v1 (js) | core v1 (compressed js) |
| ------------------------------------------ | :----------: | :----------: | :---------------------: |
| @kubernetes-client/javascript              |     1.3M     |     1.1M     |          396K           |
| @kubekit/sync + @kubekit/client-gen        |     964K     |     128K     |          88K            |
| @kubekit/openapi-gen + @kubekit/client-gen |     72K      |     8K       |          4K             |

This comparison shows that `@kubekit/openapi-gen` efficiently provides only the necessary features, significantly reducing the size of the generated code. However, unlike `@kubernetes-client/javascript`, which supports complex operations like Pod exec, these are not yet implemented in kubekit. Implementation of these features will be considered based on user demand.

## Complete Example for Existing ServiceAccount

1. **OpenAPI Configuration**:
   Configure the `openapi.ts` to specify the service account and output file for the OpenAPI specifications.

   ```typescript:gen-config/openapi.ts
   import type { ConfigFile } from "@kubekit/openapi-gen"

   const config: ConfigFile = {
     kind: 'ServiceAccount',
     name: 'coredns',
     namespace: 'kube-system',
     outputFile: '../generated-openapi.json,'
   }

   export default config
   ```

   Generate the OpenAPI JSON file:

   ```bash
   npx @kubekit/openapi-gen gen-config/openapi.ts;
   ```

2. **Client Code Generation**:
   Use the generated OpenAPI specifications to configure the client code generation in `k8s-client.ts`.

   ```typescript:gen-config/k8s-client.ts
   import type { ConfigFile } from '@kubekit/client-gen'

   const config: ConfigFile = {
     schemaFile: '../generated-openapi.json',
     apiFile: '@kubekit/client',
     outputFile: '../src/k8s-client.ts',
   }

   export default config
   ```

   Generate the Kubernetes client code:

   ```bash
   npx @kubekit/client-gen gen-config/k8s-client.ts
   ```

## Complete Example for Initial Setup and Code Generation

Here is a complete example of how to configure and use the `@kubekit/openapi-gen` to generate client code using the `@kubekit/client-gen`.

1. **Create a Kubernetes Cluster**:
   If you don't already have a Kubernetes cluster, create one using kind or k3d:

   ```bash
   kind create cluster -n kubekit;
   ```

2. **Service Account Configuration**:
   Define the service account and permissions in `sa.yaml`.

   ```yaml:gen-config/sa.yaml
   apiVersion: v1
   kind: ServiceAccount
   metadata:
     name: kubekit-openapi-gen
     namespace: default
   ---
   apiVersion: rbac.authorization.k8s.io/v1
   kind: ClusterRole
   metadata:
     name: kubekit-openapi-gen
     namespace: default
   rules:
     - apiGroups:
         - ''
       resources:
         - serviceaccounts
       verbs:
         - get
     - apiGroups:
         - rbac.authorization.k8s.io
       resources:
         - clusterroles
         - roles
       verbs:
         - get
         - list
     - apiGroups:
         - rbac.authorization.k8s.io
       resources:
         - rolebindings
         - clusterrolebindings
       verbs:
         - list
   ---
   apiVersion: rbac.authorization.k8s.io/v1
   kind: ClusterRoleBinding
   metadata:
     name: kubekit-openapi-gen-binding
   roleRef:
     apiGroup: rbac.authorization.k8s.io
     kind: ClusterRole
     name: kubekit-openapi-gen
   subjects:
     - kind: ServiceAccount
       name: kubekit-openapi-gen
       namespace: default
   ```

   Apply the Service Account and permissions:

   ```bash
   kubectl apply -f sa.yaml;
   ```

3. **OpenAPI Configuration**:
   Configure the `openapi.ts` to specify the service account and output file for the OpenAPI specifications.

   ```typescript:gen-config/openapi.ts
   import type { ConfigFile } from '@kubekit/openapi-gen'

   const config: ConfigFile = {
     kind: 'ServiceAccount',
     name: 'kubekit-openapi-gen',
     namespace: 'default',
     outputFile: '../generated-openapi.json',
   }

   export default config
   ```

   Generate the OpenAPI JSON file:

   ```bash
   npx @kubekit/openapi-gen gen-config/openapi.ts;
   ```

4. **Client Code Generation**:
   Use the generated OpenAPI specifications to configure the client code generation in `k8s-client.ts`.

   ```typescript:gen-config/k8s-client.ts
   import type { ConfigFile } from '@kubekit/client-gen'

   const config: ConfigFile = {
     schemaFile: '../generated-openapi.json',
     apiFile: '@kubekit/client',
     outputFile: '../src/k8s-client.ts',
   }

   export default config
   ```

   Generate the Kubernetes client code:

   ```bash
   npx @kubekit/client-gen gen-config/k8s-client.ts
   ```

   The generated client code can be found at [./src/k8s-client.ts](src/k8s-client.ts)
