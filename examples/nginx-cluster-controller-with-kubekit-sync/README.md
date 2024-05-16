# Node.js + @kubekit/sync + @kubekit/client-gen Example

This example demonstrates how to set up a Node.js application using [@kubekit/sync](../../packages/kubekit-sync) and [@kubekit/client-gen](../../packages/kubekit-client-gen) for managing Kubernetes resources and generating code.

## Prerequisites

- Node.js installed
- Kubernetes cluster (e.g., Minikube, EKS, GKE)
- kubectl configured to interact with your Kubernetes cluster

## Usage

yarn install
kind create cluster -n nodejs-sync
kubectl apply -f config/crds/nginxcluster.yaml

```yaml
cat <<EOF | kubectl apply -f -
apiVersion: kubekit.com/v1
kind: NginxCluster
metadata:
  name: my-nginx-cluster1
  namespace: default
spec:
  replicas: 5
  resources:
    limits:
      cpu: "500m"
      memory: "512Mi"
    requests:
      cpu: "250m"
      memory: "256Mi"
---
apiVersion: kubekit.com/v1
kind: NginxCluster
metadata:
  name: my-nginx-cluster2
  namespace: default
spec:
  replicas: 2
  resources:
    limits:
      cpu: "500m"
      memory: "512Mi"
    requests:
      cpu: "250m"
      memory: "256Mi"
EOF
```

npm run dev

kind delete cluster -n nodejs-sync
