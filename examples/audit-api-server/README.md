# k8s api clientの開発をする際のTips

## 1. 開発用のクラスタを立ち上げる

```sh
just up
```

## 2. kubectlで実行したい操作を実施し、verboseを有効化する

kubectlには `-v` オプションが設定できます.
-vオプションには現在1~10の値を設定でき、それによってログの詳細度を変更できます.

例:

```sh
kubectl run nginx --image=nginx --restart=Never -v=9
```

ただし、kubectlはRequestのBodyや一部のHeaderを表示しません.

### 例

こちら一部カットしています.

```sh
$ kubectl run nginx --image=nginx --restart=Never --dry-run=client -o yaml | kubectl apply -v=9 --server-side -f -
I1026 12:24:46.952410    5903 round_trippers.go:466] curl -v -XPATCH  -H "Accept: application/json" -H "Content-Type: application/apply-patch+yaml" -H "User-Agent: kubectl/v1.27.2 (darwin/arm64) kubernetes/7f6f68f" 'https://127.0.0.1:56107/api/v1/namespaces/default/pods/nginx?fieldManager=kubectl&fieldValidation=Strict&force=false'
I1026 12:24:46.957478    5903 round_trippers.go:553] PATCH https://127.0.0.1:56107/api/v1/namespaces/default/pods/nginx?fieldManager=kubectl&fieldValidation=Strict&force=false 200 OK in 5 milliseconds
I1026 12:24:46.957498    5903 round_trippers.go:570] HTTP Statistics: GetConnection 0 ms ServerProcessing 4 ms Duration 5 ms
I1026 12:24:46.957502    5903 round_trippers.go:577] Response Headers:
I1026 12:24:46.957510    5903 round_trippers.go:580]     Audit-Id: 0cd0b452-82a8-4ef1-a367-5032d359e385
I1026 12:24:46.957515    5903 round_trippers.go:580]     Cache-Control: no-cache, private
I1026 12:24:46.957523    5903 round_trippers.go:580]     Content-Type: application/json
I1026 12:24:46.957527    5903 round_trippers.go:580]     X-Kubernetes-Pf-Flowschema-Uid: 2e13337a-75ba-4aac-af5a-2a9cf67e0927
I1026 12:24:46.957533    5903 round_trippers.go:580]     X-Kubernetes-Pf-Prioritylevel-Uid: 22f98f24-dcd3-49c6-81bc-ff90c1d5754e
I1026 12:24:46.957536    5903 round_trippers.go:580]     Date: Thu, 26 Oct 2023 03:24:46 GMT
I1026 12:24:46.957574    5903 request.go:1188] Response Body: {"kind":"Pod","apiVersion":"v1","metadata":{"name":"nginx","namespace":"default","uid":"2c5e7503-d9a8-43d2-8281-4d186e552c37","resourceVersion":"7520","creationTimestamp":"2023-10-26T03:22:48Z","labels":{"run":"nginx"},"annotations":{"kubectl.kubernetes.io/last-applied-configuration":"{\"apiVersion\":\"v1\",\"kind\":\"Pod\",\"metadata\":{\"creationTimestamp\":null,\"labels\":{\"run\":\"nginx\"},\"name\":\"nginx\",\"namespace\":\"default\"},\"spec\":{\"containers\":[{\"image\":\"nginx\",\"name\":\"nginx\",\"resources\":{}}],\"dnsPolicy\":\"ClusterFirst\",\"restartPolicy\":\"Never\"},\"status\":{}}\n"},"managedFields":[{"manager":"kubectl-last-applied","operation":"Apply","apiVersion":"v1","fieldsType":"FieldsV1","fieldsV1":{"f:metadata":{"f:annotations":{"f:kubectl.kubernetes.io/last-applied-configuration":{}}}}},{"manager":"kubectl","operation":"Apply","apiVersion":"v1","time":"2023-10-26T03:24:46Z","fieldsType":"FieldsV1","fieldsV1":{"f:metadata":{"f:labels":{"f:run":{}}},"f:spec":{"f:containers":{"k:{\"name\":\"nginx\"}":{".":{},"f:image":{},"f:name":{},"f:resources":{}}},"f:dnsPolicy":{},"f:restartPolicy":{}}}},{"manager":"kubectl-run","operation":"Update","apiVersion":"v1","time":"2023-10-26T03:22:48Z","fieldsType":"FieldsV1","fieldsV1":{"f:metadata":{"f:labels":{".":{},"f:run":{}}},"f:spec":{"f:containers":{"k:{\"name\":\"nginx\"}":{".":{},"f:image":{},"f:imagePullPolicy":{},"f:name":{},"f:resources":{},"f:terminationMessagePath":{},"f:terminationMessagePolicy":{}}},"f:dnsPolicy":{},"f:enableServiceLinks":{},"f:restartPolicy":{},"f:schedulerName":{},"f:securityContext":{},"f:terminationGracePeriodSeconds":{}}}},{"manager":"kubelet","operation":"Update","apiVersion":"v1","time":"2023-10-26T03:22:51Z","fieldsType":"FieldsV1","fieldsV1":{"f:status":{"f:conditions":{"k:{\"type\":\"ContainersReady\"}":{".":{},"f:lastProbeTime":{},"f:lastTransitionTime":{},"f:status":{},"f:type":{}},"k:{\"type\":\"Initialized\"}":{".":{},"f:lastProbeTime":{},"f:lastTransitionTime":{},"f:status":{},"f:type":{}},"k:{\"type\":\"Ready\"}":{".":{},"f:lastProbeTime":{},"f:lastTransitionTime":{},"f:status":{},"f:type":{}}},"f:containerStatuses":{},"f:hostIP":{},"f:phase":{},"f:podIP":{},"f:podIPs":{".":{},"k:{\"ip\":\"10.244.0.8\"}":{".":{},"f:ip":{}}},"f:startTime":{}}},"subresource":"status"}]},"spec":{"volumes":[{"name":"kube-api-access-j6ndf","projected":{"sources":[{"serviceAccountToken":{"expirationSeconds":3607,"path":"token"}},{"configMap":{"name":"kube-root-ca.crt","items":[{"key":"ca.crt","path":"ca.crt"}]}},{"downwardAPI":{"items":[{"path":"namespace","fieldRef":{"apiVersion":"v1","fieldPath":"metadata.namespace"}}]}}],"defaultMode":420}}],"containers":[{"name":"nginx","image":"nginx","resources":{},"volumeMounts":[{"name":"kube-api-access-j6ndf","readOnly":true,"mountPath":"/var/run/secrets/kubernetes.io/serviceaccount"}],"terminationMessagePath":"/dev/termination-log","terminationMessagePolicy":"File","imagePullPolicy":"Always"}],"restartPolicy":"Never","terminationGracePeriodSeconds":30,"dnsPolicy":"ClusterFirst","serviceAccountName":"default","serviceAccount":"default","nodeName":"playground-control-plane","securityContext":{},"schedulerName":"default-scheduler","tolerations":[{"key":"node.kubernetes.io/not-ready","operator":"Exists","effect":"NoExecute","tolerationSeconds":300},{"key":"node.kubernetes.io/unreachable","operator":"Exists","effect":"NoExecute","tolerationSeconds":300}],"priority":0,"enableServiceLinks":true,"preemptionPolicy":"PreemptLowerPriority"},"status":{"phase":"Running","conditions":[{"type":"Initialized","status":"True","lastProbeTime":null,"lastTransitionTime":"2023-10-26T03:22:48Z"},{"type":"Ready","status":"True","lastProbeTime":null,"lastTransitionTime":"2023-10-26T03:22:51Z"},{"type":"ContainersReady","status":"True","lastProbeTime":null,"lastTransitionTime":"2023-10-26T03:22:51Z"},{"type":"PodScheduled","status":"True","lastProbeTime":null,"lastTransitionTime":"2023-10-26T03:22:48Z"}],"hostIP":"172.20.0.2","podIP":"10.244.0.8","podIPs":[{"ip":"10.244.0.8"}],"startTime":"2023-10-26T03:22:48Z","containerStatuses":[{"name":"nginx","state":{"running":{"startedAt":"2023-10-26T03:22:50Z"}},"lastState":{},"ready":true,"restartCount":0,"image":"docker.io/library/nginx:latest","imageID":"docker.io/library/nginx@sha256:add4792d930c25dd2abf2ef9ea79de578097a1c175a16ab25814332fe33622de","containerID":"containerd://63fcc8b25fb5010ac625a468387d69d40ba60fd742eec23f8f7ef606ec73b697","started":true}],"qosClass":"BestEffort"}}
pod/nginx serverside-applied
I1026 12:24:46.958314    5903 apply.go:534] Running apply post-processor function
```

その為、これだけだと模倣するのに必要な情報が足りない場合があります.
その際には、以下のステップで解決できます.

## 3. Apiサーバーのログを流す

> kubectlはRequest Bodyや一部のRequest Headerを表示しません.

この問題を解決する為に、api serverのaudit logを以下のコマンドを実行し、流しっぱなしにします.

```sh
just log
```

ここではRequestの内容が全て確認できます.

```yaml
kind: Event
apiVersion: audit.k8s.io/v1
level: RequestResponse
auditID: 35822dde-9c00-487a-b503-022c082313ad
stage: ResponseComplete
requestURI: /api/v1/namespaces/default/pods/nginx?fieldManager=kubectl&fieldValidation=Strict&force=false
verb: patch
user:
  username: kubernetes-admin
  groups:
    - system:masters
    - system:authenticated
sourceIPs:
  - 172.20.0.1
userAgent: kubectl/v1.27.2 (darwin/arm64) kubernetes/7f6f68f
objectRef:
  resource: pods
  namespace: default
  name: nginx
  apiVersion: v1
responseStatus:
  metadata: {}
  code: 200
requestObject:
  apiVersion: v1
  kind: Pod
  metadata:
    creationTimestamp: null
    labels:
      run: nginx
    name: nginx
    namespace: default
  spec:
    containers:
      - image: nginx
        name: nginx
        resources: {}
    dnsPolicy: ClusterFirst
    restartPolicy: Never
  status: {}
responseObject:
  kind: Pod
  apiVersion: v1
  metadata:
    name: nginx
    namespace: default
    uid: 2c5e7503-d9a8-43d2-8281-4d186e552c37
    resourceVersion: "7817"
    creationTimestamp: "2023-10-26T03:22:48Z"
    labels:
      run: nginx
    annotations:
      kubectl.kubernetes.io/last-applied-configuration: |
        {"apiVersion":"v1","kind":"Pod","metadata":{"creationTimestamp":null,"labels":{"run":"nginx"},"name":"nginx","namespace":"default"},"spec":{"containers":[{"image":"nginx","name":"nginx","resources":{}}],"dnsPolicy":"ClusterFirst","restartPolicy":"Never"},"status":{}}
    managedFields:
      - manager: kubectl-last-applied
        operation: Apply
        apiVersion: v1
        fieldsType: FieldsV1
        fieldsV1:
          f:metadata:
            f:annotations:
              f:kubectl.kubernetes.io/last-applied-configuration: {}
      - manager: kubectl
        operation: Apply
        apiVersion: v1
        time: "2023-10-26T03:28:36Z"
        fieldsType: FieldsV1
        fieldsV1:
          f:metadata:
            f:labels:
              f:run: {}
          f:spec:
            f:containers:
              k:{"name":"nginx"}:
                .: {}
                f:image: {}
                f:name: {}
                f:resources: {}
            f:dnsPolicy: {}
            f:restartPolicy: {}
      - manager: kubectl-run
        operation: Update
        apiVersion: v1
        time: "2023-10-26T03:22:48Z"
        fieldsType: FieldsV1
        fieldsV1:
          f:metadata:
            f:labels:
              .: {}
              f:run: {}
          f:spec:
            f:containers:
              k:{"name":"nginx"}:
                .: {}
                f:image: {}
                f:imagePullPolicy: {}
                f:name: {}
                f:resources: {}
                f:terminationMessagePath: {}
                f:terminationMessagePolicy: {}
            f:dnsPolicy: {}
            f:enableServiceLinks: {}
            f:restartPolicy: {}
            f:schedulerName: {}
            f:securityContext: {}
            f:terminationGracePeriodSeconds: {}
      - manager: kubelet
        operation: Update
        apiVersion: v1
        time: "2023-10-26T03:22:51Z"
        fieldsType: FieldsV1
        fieldsV1:
          f:status:
            f:conditions:
              k:{"type":"ContainersReady"}:
                .: {}
                f:lastProbeTime: {}
                f:lastTransitionTime: {}
                f:status: {}
                f:type: {}
              k:{"type":"Initialized"}:
                .: {}
                f:lastProbeTime: {}
                f:lastTransitionTime: {}
                f:status: {}
                f:type: {}
              k:{"type":"Ready"}:
                .: {}
                f:lastProbeTime: {}
                f:lastTransitionTime: {}
                f:status: {}
                f:type: {}
            f:containerStatuses: {}
            f:hostIP: {}
            f:phase: {}
            f:podIP: {}
            f:podIPs:
              .: {}
              k:{"ip":"10.244.0.8"}:
                .: {}
                f:ip: {}
            f:startTime: {}
        subresource: status
  spec:
    volumes:
      - name: kube-api-access-j6ndf
        projected:
          sources:
            - serviceAccountToken:
                expirationSeconds: 3607
                path: token
            - configMap:
                name: kube-root-ca.crt
                items:
                  - key: ca.crt
                    path: ca.crt
            - downwardAPI:
                items:
                  - path: namespace
                    fieldRef:
                      apiVersion: v1
                      fieldPath: metadata.namespace
          defaultMode: 420
    containers:
      - name: nginx
        image: nginx
        resources: {}
        volumeMounts:
          - name: kube-api-access-j6ndf
            readOnly: true
            mountPath: /var/run/secrets/kubernetes.io/serviceaccount
        terminationMessagePath: /dev/termination-log
        terminationMessagePolicy: File
        imagePullPolicy: Always
    restartPolicy: Never
    terminationGracePeriodSeconds: 30
    dnsPolicy: ClusterFirst
    serviceAccountName: default
    serviceAccount: default
    nodeName: playground-control-plane
    securityContext: {}
    schedulerName: default-scheduler
    tolerations:
      - key: node.kubernetes.io/not-ready
        operator: Exists
        effect: NoExecute
        tolerationSeconds: 300
      - key: node.kubernetes.io/unreachable
        operator: Exists
        effect: NoExecute
        tolerationSeconds: 300
    priority: 0
    enableServiceLinks: true
    preemptionPolicy: PreemptLowerPriority
  status:
    phase: Running
    conditions:
      - type: Initialized
        status: "True"
        lastProbeTime: null
        lastTransitionTime: "2023-10-26T03:22:48Z"
      - type: Ready
        status: "True"
        lastProbeTime: null
        lastTransitionTime: "2023-10-26T03:22:51Z"
      - type: ContainersReady
        status: "True"
        lastProbeTime: null
        lastTransitionTime: "2023-10-26T03:22:51Z"
      - type: PodScheduled
        status: "True"
        lastProbeTime: null
        lastTransitionTime: "2023-10-26T03:22:48Z"
    hostIP: 172.20.0.2
    podIP: 10.244.0.8
    podIPs:
      - ip: 10.244.0.8
    startTime: "2023-10-26T03:22:48Z"
    containerStatuses:
      - name: nginx
        state:
          running:
            startedAt: "2023-10-26T03:22:50Z"
        lastState: {}
        ready: true
        restartCount: 0
        image: docker.io/library/nginx:latest
        imageID: docker.io/library/nginx@sha256:add4792d930c25dd2abf2ef9ea79de578097a1c175a16ab25814332fe33622de
        containerID: containerd://63fcc8b25fb5010ac625a468387d69d40ba60fd742eec23f8f7ef606ec73b697
        started: true
    qosClass: BestEffort
requestReceivedTimestamp: "2023-10-26T03:28:36.350508Z"
stageTimestamp: "2023-10-26T03:28:36.354447Z"
annotations:
  authorization.k8s.io/decision: allow
  authorization.k8s.io/reason: ""
  pod-security.kubernetes.io/enforce-policy: privileged:latest
```

requestObjectの中身が全て書いてありますね.

## 模倣してみる

```sh
curl -v -XPATCH  -H "Accept: application/json" -H "Content-Type: application/apply-patch+yaml" -H "User-Agent: kubectl/v1.27.2 (darwin/arm64) kubernetes/7f6f68f" 'https://127.0.0.1:56107/api/v1/namespaces/default/pods/nginx?fieldManager=kubectl&fieldValidation=Strict&force=false'
```

```yaml
requestObject:
  apiVersion: v1
  kind: Pod
  metadata:
    creationTimestamp: null
    labels:
      run: nginx
    name: nginx
    namespace: default
  spec:
    containers:
      - image: nginx
        name: nginx
        resources: {}
    dnsPolicy: ClusterFirst
    restartPolicy: Never
  status: {}
```

の2つの部分を参考に組み立てると、server-side applyを生成したclientで実行するには、以下の様になります

```ts
import { patchCoreV1NamespacedPod } from './k8s-client/generated/client/api-v1'

async function main() {
  await patchCoreV1NamespacedPod(
    {
      namespace: 'default',
      name: 'nginx',
      fieldManager: 'server-side-apply',
      fieldValidation: 'Strict',
      ioK8SApimachineryPkgApisMetaV1Patch: {
        apiVersion: "v1",
        kind: "Pod",
        metadata: {
          creationTimestamp: null,
          labels: {
            run: "nginx"
          },
          name: "nginx",
          namespace: "default"
        },
        spec: {
          containers: [
            {
              image: "nginx",
              name: "nginx",
              resources: {}
            }
          ],
          dnsPolicy: "ClusterFirst",
          restartPolicy: "Never"
        },
        status: {}
      },
    },
    {
      headers: {
        'Content-Type': 'application/apply-patch+yaml',
      },
    }
  )
}
main()
```

## 開発用のクラスタを破棄する

```sh
just down
```
