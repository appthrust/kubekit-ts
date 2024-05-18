import {
  apiClient,
  type Options,
  type WatchExtraOptions,
} from '@kubekit/client'
type Id<T> = {
  [K in keyof T]: T[K]
} & {}
type NoWatch<T> = Omit<T, 'watch'> & {
  watch?: false
}
type RequiredAndDefined<T> = {
  [P in keyof T]-?: Exclude<T[P], null | undefined>
}
type PartialRequired<T, K extends keyof T> = Id<
  RequiredAndDefined<Pick<T, K>> & Omit<T, K>
>
type MinimumRequiredGet<T> = Id<
  T extends {
    metadata?: any
    apiVersion?: any
    kind?: any
  }
    ? Omit<
        PartialRequired<T, 'metadata' | 'apiVersion' | 'kind'>,
        'metadata'
      > & {
        metadata: PartialRequired<
          RequiredAndDefined<T>['metadata'],
          'name' | 'namespace' | 'creationTimestamp' | 'resourceVersion'
        >
      }
    : T
>
type MinimumRequiredList<T> = Id<
  T extends {
    items: {
      metadata?: any
      apiVersion?: any
      kind?: any
    }[]
  }
    ? Omit<T, 'items'> & {
        items: MinimumRequiredGet<T['items'][number]>[]
      }
    : T
>
export const createCoreV1NamespacedPod = (
  args: CreateCoreV1NamespacedPodApiArg,
  options?: Options
) => {
  return apiClient<MinimumRequiredGet<CreateCoreV1NamespacedPodApiResponse>>(
    {
      path: `/api/v1/namespaces/${args['namespace']}/pods`,
      method: 'POST',
      body: args.body,
      contentType: args.contentType,
      params: {
        pretty: args.pretty,
        dryRun: args.dryRun,
        fieldManager: args.fieldManager,
        fieldValidation: args.fieldValidation,
      },
    },
    options
  )
}
export const readCoreV1NamespacedServiceAccount = (
  args: ReadCoreV1NamespacedServiceAccountApiArg,
  options?: Options
) => {
  return apiClient<
    MinimumRequiredGet<ReadCoreV1NamespacedServiceAccountApiResponse>
  >(
    {
      path: `/api/v1/namespaces/${args['namespace']}/serviceaccounts/${args.name}`,
      params: { pretty: args.pretty },
    },
    options
  )
}
export type CreateCoreV1NamespacedPodApiResponse = /** status 200 OK */
  | IoK8SApiCoreV1Pod
  | /** status 201 Created */ IoK8SApiCoreV1Pod
  | /** status 202 Accepted */ IoK8SApiCoreV1Pod
export type CreateCoreV1NamespacedPodApiArg = {
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
} & {
  contentType?: string
  body: IoK8SApiCoreV1Pod
}
export type ReadCoreV1NamespacedServiceAccountApiResponse =
  /** status 200 OK */ IoK8SApiCoreV1ServiceAccount
export type ReadCoreV1NamespacedServiceAccountApiArg = {
  /** name of the ServiceAccount */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
}
export type IoK8SApimachineryPkgApisMetaV1Time = string
export type IoK8SApimachineryPkgApisMetaV1FieldsV1 = object
export type IoK8SApimachineryPkgApisMetaV1ManagedFieldsEntry = {
  apiVersion?: string | undefined
  fieldsType?: string | undefined
  fieldsV1?: IoK8SApimachineryPkgApisMetaV1FieldsV1 | undefined
  manager?: string | undefined
  operation?: string | undefined
  subresource?: string | undefined
  time?: IoK8SApimachineryPkgApisMetaV1Time | undefined
}
export type IoK8SApimachineryPkgApisMetaV1OwnerReference = {
  apiVersion: string
  blockOwnerDeletion?: boolean | undefined
  controller?: boolean | undefined
  kind: string
  name: string
  uid: string
}
export type IoK8SApimachineryPkgApisMetaV1ObjectMeta = {
  annotations?:
    | {
        [key: string]: string
      }
    | undefined
  creationTimestamp?: IoK8SApimachineryPkgApisMetaV1Time | undefined
  deletionGracePeriodSeconds?: number | undefined
  deletionTimestamp?: IoK8SApimachineryPkgApisMetaV1Time | undefined
  finalizers?: string[] | undefined
  generateName?: string | undefined
  generation?: number | undefined
  labels?:
    | {
        [key: string]: string
      }
    | undefined
  managedFields?: IoK8SApimachineryPkgApisMetaV1ManagedFieldsEntry[] | undefined
  name?: string | undefined
  namespace?: string | undefined
  ownerReferences?: IoK8SApimachineryPkgApisMetaV1OwnerReference[] | undefined
  resourceVersion?: string | undefined
  selfLink?: string | undefined
  uid?: string | undefined
}
export type IoK8SApiCoreV1NodeSelectorRequirement = {
  key: string
  operator: 'DoesNotExist' | 'Exists' | 'Gt' | 'In' | 'Lt' | 'NotIn'
  values?: string[] | undefined
}
export type IoK8SApiCoreV1NodeSelectorTerm = {
  matchExpressions?: IoK8SApiCoreV1NodeSelectorRequirement[] | undefined
  matchFields?: IoK8SApiCoreV1NodeSelectorRequirement[] | undefined
}
export type IoK8SApiCoreV1PreferredSchedulingTerm = {
  preference: IoK8SApiCoreV1NodeSelectorTerm
  weight: number
}
export type IoK8SApiCoreV1NodeSelector = {
  nodeSelectorTerms: IoK8SApiCoreV1NodeSelectorTerm[]
}
export type IoK8SApiCoreV1NodeAffinity = {
  preferredDuringSchedulingIgnoredDuringExecution?:
    | IoK8SApiCoreV1PreferredSchedulingTerm[]
    | undefined
  requiredDuringSchedulingIgnoredDuringExecution?:
    | IoK8SApiCoreV1NodeSelector
    | undefined
}
export type IoK8SApimachineryPkgApisMetaV1LabelSelectorRequirement = {
  key: string
  operator: string
  values?: string[] | undefined
}
export type IoK8SApimachineryPkgApisMetaV1LabelSelector = {
  matchExpressions?:
    | IoK8SApimachineryPkgApisMetaV1LabelSelectorRequirement[]
    | undefined
  matchLabels?:
    | {
        [key: string]: string
      }
    | undefined
}
export type IoK8SApiCoreV1PodAffinityTerm = {
  labelSelector?: IoK8SApimachineryPkgApisMetaV1LabelSelector | undefined
  namespaceSelector?: IoK8SApimachineryPkgApisMetaV1LabelSelector | undefined
  namespaces?: string[] | undefined
  topologyKey: string
}
export type IoK8SApiCoreV1WeightedPodAffinityTerm = {
  podAffinityTerm: IoK8SApiCoreV1PodAffinityTerm
  weight: number
}
export type IoK8SApiCoreV1PodAffinity = {
  preferredDuringSchedulingIgnoredDuringExecution?:
    | IoK8SApiCoreV1WeightedPodAffinityTerm[]
    | undefined
  requiredDuringSchedulingIgnoredDuringExecution?:
    | IoK8SApiCoreV1PodAffinityTerm[]
    | undefined
}
export type IoK8SApiCoreV1PodAntiAffinity = {
  preferredDuringSchedulingIgnoredDuringExecution?:
    | IoK8SApiCoreV1WeightedPodAffinityTerm[]
    | undefined
  requiredDuringSchedulingIgnoredDuringExecution?:
    | IoK8SApiCoreV1PodAffinityTerm[]
    | undefined
}
export type IoK8SApiCoreV1Affinity = {
  nodeAffinity?: IoK8SApiCoreV1NodeAffinity | undefined
  podAffinity?: IoK8SApiCoreV1PodAffinity | undefined
  podAntiAffinity?: IoK8SApiCoreV1PodAntiAffinity | undefined
}
export type IoK8SApiCoreV1ConfigMapKeySelector = {
  key: string
  name?: string | undefined
  optional?: boolean | undefined
}
export type IoK8SApiCoreV1ObjectFieldSelector = {
  apiVersion?: string | undefined
  fieldPath: string
}
export type IoK8SApimachineryPkgApiResourceQuantity = string | number
export type IoK8SApiCoreV1ResourceFieldSelector = {
  containerName?: string | undefined
  divisor?: IoK8SApimachineryPkgApiResourceQuantity | undefined
  resource: string
}
export type IoK8SApiCoreV1SecretKeySelector = {
  key: string
  name?: string | undefined
  optional?: boolean | undefined
}
export type IoK8SApiCoreV1EnvVarSource = {
  configMapKeyRef?: IoK8SApiCoreV1ConfigMapKeySelector | undefined
  fieldRef?: IoK8SApiCoreV1ObjectFieldSelector | undefined
  resourceFieldRef?: IoK8SApiCoreV1ResourceFieldSelector | undefined
  secretKeyRef?: IoK8SApiCoreV1SecretKeySelector | undefined
}
export type IoK8SApiCoreV1EnvVar = {
  name: string
  value?: string | undefined
  valueFrom?: IoK8SApiCoreV1EnvVarSource | undefined
}
export type IoK8SApiCoreV1ConfigMapEnvSource = {
  name?: string | undefined
  optional?: boolean | undefined
}
export type IoK8SApiCoreV1SecretEnvSource = {
  name?: string | undefined
  optional?: boolean | undefined
}
export type IoK8SApiCoreV1EnvFromSource = {
  configMapRef?: IoK8SApiCoreV1ConfigMapEnvSource | undefined
  prefix?: string | undefined
  secretRef?: IoK8SApiCoreV1SecretEnvSource | undefined
}
export type IoK8SApiCoreV1ExecAction = {
  command?: string[] | undefined
}
export type IoK8SApiCoreV1HttpHeader = {
  name: string
  value: string
}
export type IoK8SApimachineryPkgUtilIntstrIntOrString = number | string
export type IoK8SApiCoreV1HttpGetAction = {
  host?: string | undefined
  httpHeaders?: IoK8SApiCoreV1HttpHeader[] | undefined
  path?: string | undefined
  port: IoK8SApimachineryPkgUtilIntstrIntOrString
  scheme?: ('HTTP' | 'HTTPS') | undefined
}
export type IoK8SApiCoreV1TcpSocketAction = {
  host?: string | undefined
  port: IoK8SApimachineryPkgUtilIntstrIntOrString
}
export type IoK8SApiCoreV1LifecycleHandler = {
  exec?: IoK8SApiCoreV1ExecAction | undefined
  httpGet?: IoK8SApiCoreV1HttpGetAction | undefined
  tcpSocket?: IoK8SApiCoreV1TcpSocketAction | undefined
}
export type IoK8SApiCoreV1Lifecycle = {
  postStart?: IoK8SApiCoreV1LifecycleHandler | undefined
  preStop?: IoK8SApiCoreV1LifecycleHandler | undefined
}
export type IoK8SApiCoreV1GrpcAction = {
  port: number
  service?: string | undefined
}
export type IoK8SApiCoreV1Probe = {
  exec?: IoK8SApiCoreV1ExecAction | undefined
  failureThreshold?: number | undefined
  grpc?: IoK8SApiCoreV1GrpcAction | undefined
  httpGet?: IoK8SApiCoreV1HttpGetAction | undefined
  initialDelaySeconds?: number | undefined
  periodSeconds?: number | undefined
  successThreshold?: number | undefined
  tcpSocket?: IoK8SApiCoreV1TcpSocketAction | undefined
  terminationGracePeriodSeconds?: number | undefined
  timeoutSeconds?: number | undefined
}
export type IoK8SApiCoreV1ContainerPort = {
  containerPort: number
  hostIP?: string | undefined
  hostPort?: number | undefined
  name?: string | undefined
  protocol?: ('SCTP' | 'TCP' | 'UDP') | undefined
}
export type IoK8SApiCoreV1ContainerResizePolicy = {
  resourceName: string
  restartPolicy: string
}
export type IoK8SApiCoreV1ResourceClaim = {
  name: string
}
export type IoK8SApiCoreV1ResourceRequirements = {
  claims?: IoK8SApiCoreV1ResourceClaim[] | undefined
  limits?:
    | {
        [key: string]: IoK8SApimachineryPkgApiResourceQuantity
      }
    | undefined
  requests?:
    | {
        [key: string]: IoK8SApimachineryPkgApiResourceQuantity
      }
    | undefined
}
export type IoK8SApiCoreV1Capabilities = {
  add?: string[] | undefined
  drop?: string[] | undefined
}
export type IoK8SApiCoreV1SeLinuxOptions = {
  level?: string | undefined
  role?: string | undefined
  type?: string | undefined
  user?: string | undefined
}
export type IoK8SApiCoreV1SeccompProfile = {
  localhostProfile?: string | undefined
  type: 'Localhost' | 'RuntimeDefault' | 'Unconfined'
}
export type IoK8SApiCoreV1WindowsSecurityContextOptions = {
  gmsaCredentialSpec?: string | undefined
  gmsaCredentialSpecName?: string | undefined
  hostProcess?: boolean | undefined
  runAsUserName?: string | undefined
}
export type IoK8SApiCoreV1SecurityContext = {
  allowPrivilegeEscalation?: boolean | undefined
  capabilities?: IoK8SApiCoreV1Capabilities | undefined
  privileged?: boolean | undefined
  procMount?: ('Default' | 'Unmasked') | undefined
  readOnlyRootFilesystem?: boolean | undefined
  runAsGroup?: number | undefined
  runAsNonRoot?: boolean | undefined
  runAsUser?: number | undefined
  seLinuxOptions?: IoK8SApiCoreV1SeLinuxOptions | undefined
  seccompProfile?: IoK8SApiCoreV1SeccompProfile | undefined
  windowsOptions?: IoK8SApiCoreV1WindowsSecurityContextOptions | undefined
}
export type IoK8SApiCoreV1VolumeDevice = {
  devicePath: string
  name: string
}
export type IoK8SApiCoreV1VolumeMount = {
  mountPath: string
  mountPropagation?: ('Bidirectional' | 'HostToContainer' | 'None') | undefined
  name: string
  readOnly?: boolean | undefined
  subPath?: string | undefined
  subPathExpr?: string | undefined
}
export type IoK8SApiCoreV1Container = {
  args?: string[] | undefined
  command?: string[] | undefined
  env?: IoK8SApiCoreV1EnvVar[] | undefined
  envFrom?: IoK8SApiCoreV1EnvFromSource[] | undefined
  image?: string | undefined
  imagePullPolicy?: ('Always' | 'IfNotPresent' | 'Never') | undefined
  lifecycle?: IoK8SApiCoreV1Lifecycle | undefined
  livenessProbe?: IoK8SApiCoreV1Probe | undefined
  name: string
  ports?: IoK8SApiCoreV1ContainerPort[] | undefined
  readinessProbe?: IoK8SApiCoreV1Probe | undefined
  resizePolicy?: IoK8SApiCoreV1ContainerResizePolicy[] | undefined
  resources?: IoK8SApiCoreV1ResourceRequirements | undefined
  restartPolicy?: string | undefined
  securityContext?: IoK8SApiCoreV1SecurityContext | undefined
  startupProbe?: IoK8SApiCoreV1Probe | undefined
  stdin?: boolean | undefined
  stdinOnce?: boolean | undefined
  terminationMessagePath?: string | undefined
  terminationMessagePolicy?: ('FallbackToLogsOnError' | 'File') | undefined
  tty?: boolean | undefined
  volumeDevices?: IoK8SApiCoreV1VolumeDevice[] | undefined
  volumeMounts?: IoK8SApiCoreV1VolumeMount[] | undefined
  workingDir?: string | undefined
}
export type IoK8SApiCoreV1PodDnsConfigOption = {
  name?: string | undefined
  value?: string | undefined
}
export type IoK8SApiCoreV1PodDnsConfig = {
  nameservers?: string[] | undefined
  options?: IoK8SApiCoreV1PodDnsConfigOption[] | undefined
  searches?: string[] | undefined
}
export type IoK8SApiCoreV1EphemeralContainer = {
  args?: string[] | undefined
  command?: string[] | undefined
  env?: IoK8SApiCoreV1EnvVar[] | undefined
  envFrom?: IoK8SApiCoreV1EnvFromSource[] | undefined
  image?: string | undefined
  imagePullPolicy?: ('Always' | 'IfNotPresent' | 'Never') | undefined
  lifecycle?: IoK8SApiCoreV1Lifecycle | undefined
  livenessProbe?: IoK8SApiCoreV1Probe | undefined
  name: string
  ports?: IoK8SApiCoreV1ContainerPort[] | undefined
  readinessProbe?: IoK8SApiCoreV1Probe | undefined
  resizePolicy?: IoK8SApiCoreV1ContainerResizePolicy[] | undefined
  resources?: IoK8SApiCoreV1ResourceRequirements | undefined
  restartPolicy?: string | undefined
  securityContext?: IoK8SApiCoreV1SecurityContext | undefined
  startupProbe?: IoK8SApiCoreV1Probe | undefined
  stdin?: boolean | undefined
  stdinOnce?: boolean | undefined
  targetContainerName?: string | undefined
  terminationMessagePath?: string | undefined
  terminationMessagePolicy?: ('FallbackToLogsOnError' | 'File') | undefined
  tty?: boolean | undefined
  volumeDevices?: IoK8SApiCoreV1VolumeDevice[] | undefined
  volumeMounts?: IoK8SApiCoreV1VolumeMount[] | undefined
  workingDir?: string | undefined
}
export type IoK8SApiCoreV1HostAlias = {
  hostnames?: string[] | undefined
  ip?: string | undefined
}
export type IoK8SApiCoreV1LocalObjectReference = {
  name?: string | undefined
}
export type IoK8SApiCoreV1PodOs = {
  name: string
}
export type IoK8SApiCoreV1PodReadinessGate = {
  conditionType: string
}
export type IoK8SApiCoreV1ClaimSource = {
  resourceClaimName?: string | undefined
  resourceClaimTemplateName?: string | undefined
}
export type IoK8SApiCoreV1PodResourceClaim = {
  name: string
  source?: IoK8SApiCoreV1ClaimSource | undefined
}
export type IoK8SApiCoreV1PodSchedulingGate = {
  name: string
}
export type IoK8SApiCoreV1Sysctl = {
  name: string
  value: string
}
export type IoK8SApiCoreV1PodSecurityContext = {
  fsGroup?: number | undefined
  fsGroupChangePolicy?: ('Always' | 'OnRootMismatch') | undefined
  runAsGroup?: number | undefined
  runAsNonRoot?: boolean | undefined
  runAsUser?: number | undefined
  seLinuxOptions?: IoK8SApiCoreV1SeLinuxOptions | undefined
  seccompProfile?: IoK8SApiCoreV1SeccompProfile | undefined
  supplementalGroups?: number[] | undefined
  sysctls?: IoK8SApiCoreV1Sysctl[] | undefined
  windowsOptions?: IoK8SApiCoreV1WindowsSecurityContextOptions | undefined
}
export type IoK8SApiCoreV1Toleration = {
  effect?: ('NoExecute' | 'NoSchedule' | 'PreferNoSchedule') | undefined
  key?: string | undefined
  operator?: ('Equal' | 'Exists') | undefined
  tolerationSeconds?: number | undefined
  value?: string | undefined
}
export type IoK8SApiCoreV1TopologySpreadConstraint = {
  labelSelector?: IoK8SApimachineryPkgApisMetaV1LabelSelector | undefined
  matchLabelKeys?: string[] | undefined
  maxSkew: number
  minDomains?: number | undefined
  nodeAffinityPolicy?: ('Honor' | 'Ignore') | undefined
  nodeTaintsPolicy?: ('Honor' | 'Ignore') | undefined
  topologyKey: string
  whenUnsatisfiable: 'DoNotSchedule' | 'ScheduleAnyway'
}
export type IoK8SApiCoreV1AwsElasticBlockStoreVolumeSource = {
  fsType?: string | undefined
  partition?: number | undefined
  readOnly?: boolean | undefined
  volumeID: string
}
export type IoK8SApiCoreV1AzureDiskVolumeSource = {
  cachingMode?: ('None' | 'ReadOnly' | 'ReadWrite') | undefined
  diskName: string
  diskURI: string
  fsType?: string | undefined
  kind?: ('Dedicated' | 'Managed' | 'Shared') | undefined
  readOnly?: boolean | undefined
}
export type IoK8SApiCoreV1AzureFileVolumeSource = {
  readOnly?: boolean | undefined
  secretName: string
  shareName: string
}
export type IoK8SApiCoreV1CephFsVolumeSource = {
  monitors: string[]
  path?: string | undefined
  readOnly?: boolean | undefined
  secretFile?: string | undefined
  secretRef?: IoK8SApiCoreV1LocalObjectReference | undefined
  user?: string | undefined
}
export type IoK8SApiCoreV1CinderVolumeSource = {
  fsType?: string | undefined
  readOnly?: boolean | undefined
  secretRef?: IoK8SApiCoreV1LocalObjectReference | undefined
  volumeID: string
}
export type IoK8SApiCoreV1KeyToPath = {
  key: string
  mode?: number | undefined
  path: string
}
export type IoK8SApiCoreV1ConfigMapVolumeSource = {
  defaultMode?: number | undefined
  items?: IoK8SApiCoreV1KeyToPath[] | undefined
  name?: string | undefined
  optional?: boolean | undefined
}
export type IoK8SApiCoreV1CsiVolumeSource = {
  driver: string
  fsType?: string | undefined
  nodePublishSecretRef?: IoK8SApiCoreV1LocalObjectReference | undefined
  readOnly?: boolean | undefined
  volumeAttributes?:
    | {
        [key: string]: string
      }
    | undefined
}
export type IoK8SApiCoreV1DownwardApiVolumeFile = {
  fieldRef?: IoK8SApiCoreV1ObjectFieldSelector | undefined
  mode?: number | undefined
  path: string
  resourceFieldRef?: IoK8SApiCoreV1ResourceFieldSelector | undefined
}
export type IoK8SApiCoreV1DownwardApiVolumeSource = {
  defaultMode?: number | undefined
  items?: IoK8SApiCoreV1DownwardApiVolumeFile[] | undefined
}
export type IoK8SApiCoreV1EmptyDirVolumeSource = {
  medium?: string | undefined
  sizeLimit?: IoK8SApimachineryPkgApiResourceQuantity | undefined
}
export type IoK8SApiCoreV1TypedLocalObjectReference = {
  apiGroup?: string | undefined
  kind: string
  name: string
}
export type IoK8SApiCoreV1TypedObjectReference = {
  apiGroup?: string | undefined
  kind: string
  name: string
  namespace?: string | undefined
}
export type IoK8SApiCoreV1PersistentVolumeClaimSpec = {
  accessModes?: string[] | undefined
  dataSource?: IoK8SApiCoreV1TypedLocalObjectReference | undefined
  dataSourceRef?: IoK8SApiCoreV1TypedObjectReference | undefined
  resources?: IoK8SApiCoreV1ResourceRequirements | undefined
  selector?: IoK8SApimachineryPkgApisMetaV1LabelSelector | undefined
  storageClassName?: string | undefined
  volumeMode?: ('Block' | 'Filesystem') | undefined
  volumeName?: string | undefined
}
export type IoK8SApiCoreV1PersistentVolumeClaimTemplate = {
  metadata?: IoK8SApimachineryPkgApisMetaV1ObjectMeta | undefined
  spec: IoK8SApiCoreV1PersistentVolumeClaimSpec
}
export type IoK8SApiCoreV1EphemeralVolumeSource = {
  volumeClaimTemplate?: IoK8SApiCoreV1PersistentVolumeClaimTemplate | undefined
}
export type IoK8SApiCoreV1FcVolumeSource = {
  fsType?: string | undefined
  lun?: number | undefined
  readOnly?: boolean | undefined
  targetWWNs?: string[] | undefined
  wwids?: string[] | undefined
}
export type IoK8SApiCoreV1FlexVolumeSource = {
  driver: string
  fsType?: string | undefined
  options?:
    | {
        [key: string]: string
      }
    | undefined
  readOnly?: boolean | undefined
  secretRef?: IoK8SApiCoreV1LocalObjectReference | undefined
}
export type IoK8SApiCoreV1FlockerVolumeSource = {
  datasetName?: string | undefined
  datasetUUID?: string | undefined
}
export type IoK8SApiCoreV1GcePersistentDiskVolumeSource = {
  fsType?: string | undefined
  partition?: number | undefined
  pdName: string
  readOnly?: boolean | undefined
}
export type IoK8SApiCoreV1GitRepoVolumeSource = {
  directory?: string | undefined
  repository: string
  revision?: string | undefined
}
export type IoK8SApiCoreV1GlusterfsVolumeSource = {
  endpoints: string
  path: string
  readOnly?: boolean | undefined
}
export type IoK8SApiCoreV1HostPathVolumeSource = {
  path: string
  type?:
    | (
        | ''
        | 'BlockDevice'
        | 'CharDevice'
        | 'Directory'
        | 'DirectoryOrCreate'
        | 'File'
        | 'FileOrCreate'
        | 'Socket'
      )
    | undefined
}
export type IoK8SApiCoreV1IscsiVolumeSource = {
  chapAuthDiscovery?: boolean | undefined
  chapAuthSession?: boolean | undefined
  fsType?: string | undefined
  initiatorName?: string | undefined
  iqn: string
  iscsiInterface?: string | undefined
  lun: number
  portals?: string[] | undefined
  readOnly?: boolean | undefined
  secretRef?: IoK8SApiCoreV1LocalObjectReference | undefined
  targetPortal: string
}
export type IoK8SApiCoreV1NfsVolumeSource = {
  path: string
  readOnly?: boolean | undefined
  server: string
}
export type IoK8SApiCoreV1PersistentVolumeClaimVolumeSource = {
  claimName: string
  readOnly?: boolean | undefined
}
export type IoK8SApiCoreV1PhotonPersistentDiskVolumeSource = {
  fsType?: string | undefined
  pdID: string
}
export type IoK8SApiCoreV1PortworxVolumeSource = {
  fsType?: string | undefined
  readOnly?: boolean | undefined
  volumeID: string
}
export type IoK8SApiCoreV1ConfigMapProjection = {
  items?: IoK8SApiCoreV1KeyToPath[] | undefined
  name?: string | undefined
  optional?: boolean | undefined
}
export type IoK8SApiCoreV1DownwardApiProjection = {
  items?: IoK8SApiCoreV1DownwardApiVolumeFile[] | undefined
}
export type IoK8SApiCoreV1SecretProjection = {
  items?: IoK8SApiCoreV1KeyToPath[] | undefined
  name?: string | undefined
  optional?: boolean | undefined
}
export type IoK8SApiCoreV1ServiceAccountTokenProjection = {
  audience?: string | undefined
  expirationSeconds?: number | undefined
  path: string
}
export type IoK8SApiCoreV1VolumeProjection = {
  configMap?: IoK8SApiCoreV1ConfigMapProjection | undefined
  downwardAPI?: IoK8SApiCoreV1DownwardApiProjection | undefined
  secret?: IoK8SApiCoreV1SecretProjection | undefined
  serviceAccountToken?: IoK8SApiCoreV1ServiceAccountTokenProjection | undefined
}
export type IoK8SApiCoreV1ProjectedVolumeSource = {
  defaultMode?: number | undefined
  sources?: IoK8SApiCoreV1VolumeProjection[] | undefined
}
export type IoK8SApiCoreV1QuobyteVolumeSource = {
  group?: string | undefined
  readOnly?: boolean | undefined
  registry: string
  tenant?: string | undefined
  user?: string | undefined
  volume: string
}
export type IoK8SApiCoreV1RbdVolumeSource = {
  fsType?: string | undefined
  image: string
  keyring?: string | undefined
  monitors: string[]
  pool?: string | undefined
  readOnly?: boolean | undefined
  secretRef?: IoK8SApiCoreV1LocalObjectReference | undefined
  user?: string | undefined
}
export type IoK8SApiCoreV1ScaleIoVolumeSource = {
  fsType?: string | undefined
  gateway: string
  protectionDomain?: string | undefined
  readOnly?: boolean | undefined
  secretRef: IoK8SApiCoreV1LocalObjectReference
  sslEnabled?: boolean | undefined
  storageMode?: string | undefined
  storagePool?: string | undefined
  system: string
  volumeName?: string | undefined
}
export type IoK8SApiCoreV1SecretVolumeSource = {
  defaultMode?: number | undefined
  items?: IoK8SApiCoreV1KeyToPath[] | undefined
  optional?: boolean | undefined
  secretName?: string | undefined
}
export type IoK8SApiCoreV1StorageOsVolumeSource = {
  fsType?: string | undefined
  readOnly?: boolean | undefined
  secretRef?: IoK8SApiCoreV1LocalObjectReference | undefined
  volumeName?: string | undefined
  volumeNamespace?: string | undefined
}
export type IoK8SApiCoreV1VsphereVirtualDiskVolumeSource = {
  fsType?: string | undefined
  storagePolicyID?: string | undefined
  storagePolicyName?: string | undefined
  volumePath: string
}
export type IoK8SApiCoreV1Volume = {
  awsElasticBlockStore?:
    | IoK8SApiCoreV1AwsElasticBlockStoreVolumeSource
    | undefined
  azureDisk?: IoK8SApiCoreV1AzureDiskVolumeSource | undefined
  azureFile?: IoK8SApiCoreV1AzureFileVolumeSource | undefined
  cephfs?: IoK8SApiCoreV1CephFsVolumeSource | undefined
  cinder?: IoK8SApiCoreV1CinderVolumeSource | undefined
  configMap?: IoK8SApiCoreV1ConfigMapVolumeSource | undefined
  csi?: IoK8SApiCoreV1CsiVolumeSource | undefined
  downwardAPI?: IoK8SApiCoreV1DownwardApiVolumeSource | undefined
  emptyDir?: IoK8SApiCoreV1EmptyDirVolumeSource | undefined
  ephemeral?: IoK8SApiCoreV1EphemeralVolumeSource | undefined
  fc?: IoK8SApiCoreV1FcVolumeSource | undefined
  flexVolume?: IoK8SApiCoreV1FlexVolumeSource | undefined
  flocker?: IoK8SApiCoreV1FlockerVolumeSource | undefined
  gcePersistentDisk?: IoK8SApiCoreV1GcePersistentDiskVolumeSource | undefined
  gitRepo?: IoK8SApiCoreV1GitRepoVolumeSource | undefined
  glusterfs?: IoK8SApiCoreV1GlusterfsVolumeSource | undefined
  hostPath?: IoK8SApiCoreV1HostPathVolumeSource | undefined
  iscsi?: IoK8SApiCoreV1IscsiVolumeSource | undefined
  name: string
  nfs?: IoK8SApiCoreV1NfsVolumeSource | undefined
  persistentVolumeClaim?:
    | IoK8SApiCoreV1PersistentVolumeClaimVolumeSource
    | undefined
  photonPersistentDisk?:
    | IoK8SApiCoreV1PhotonPersistentDiskVolumeSource
    | undefined
  portworxVolume?: IoK8SApiCoreV1PortworxVolumeSource | undefined
  projected?: IoK8SApiCoreV1ProjectedVolumeSource | undefined
  quobyte?: IoK8SApiCoreV1QuobyteVolumeSource | undefined
  rbd?: IoK8SApiCoreV1RbdVolumeSource | undefined
  scaleIO?: IoK8SApiCoreV1ScaleIoVolumeSource | undefined
  secret?: IoK8SApiCoreV1SecretVolumeSource | undefined
  storageos?: IoK8SApiCoreV1StorageOsVolumeSource | undefined
  vsphereVolume?: IoK8SApiCoreV1VsphereVirtualDiskVolumeSource | undefined
}
export type IoK8SApiCoreV1PodSpec = {
  activeDeadlineSeconds?: number | undefined
  affinity?: IoK8SApiCoreV1Affinity | undefined
  automountServiceAccountToken?: boolean | undefined
  containers: IoK8SApiCoreV1Container[]
  dnsConfig?: IoK8SApiCoreV1PodDnsConfig | undefined
  dnsPolicy?:
    | ('ClusterFirst' | 'ClusterFirstWithHostNet' | 'Default' | 'None')
    | undefined
  enableServiceLinks?: boolean | undefined
  ephemeralContainers?: IoK8SApiCoreV1EphemeralContainer[] | undefined
  hostAliases?: IoK8SApiCoreV1HostAlias[] | undefined
  hostIPC?: boolean | undefined
  hostNetwork?: boolean | undefined
  hostPID?: boolean | undefined
  hostUsers?: boolean | undefined
  hostname?: string | undefined
  imagePullSecrets?: IoK8SApiCoreV1LocalObjectReference[] | undefined
  initContainers?: IoK8SApiCoreV1Container[] | undefined
  nodeName?: string | undefined
  nodeSelector?:
    | {
        [key: string]: string
      }
    | undefined
  os?: IoK8SApiCoreV1PodOs | undefined
  overhead?:
    | {
        [key: string]: IoK8SApimachineryPkgApiResourceQuantity
      }
    | undefined
  preemptionPolicy?: ('Never' | 'PreemptLowerPriority') | undefined
  priority?: number | undefined
  priorityClassName?: string | undefined
  readinessGates?: IoK8SApiCoreV1PodReadinessGate[] | undefined
  resourceClaims?: IoK8SApiCoreV1PodResourceClaim[] | undefined
  restartPolicy?: ('Always' | 'Never' | 'OnFailure') | undefined
  runtimeClassName?: string | undefined
  schedulerName?: string | undefined
  schedulingGates?: IoK8SApiCoreV1PodSchedulingGate[] | undefined
  securityContext?: IoK8SApiCoreV1PodSecurityContext | undefined
  serviceAccount?: string | undefined
  serviceAccountName?: string | undefined
  setHostnameAsFQDN?: boolean | undefined
  shareProcessNamespace?: boolean | undefined
  subdomain?: string | undefined
  terminationGracePeriodSeconds?: number | undefined
  tolerations?: IoK8SApiCoreV1Toleration[] | undefined
  topologySpreadConstraints?:
    | IoK8SApiCoreV1TopologySpreadConstraint[]
    | undefined
  volumes?: IoK8SApiCoreV1Volume[] | undefined
}
export type IoK8SApiCoreV1PodCondition = {
  lastProbeTime?: IoK8SApimachineryPkgApisMetaV1Time | undefined
  lastTransitionTime?: IoK8SApimachineryPkgApisMetaV1Time | undefined
  message?: string | undefined
  reason?: string | undefined
  status: string
  type: string
}
export type IoK8SApiCoreV1ContainerStateRunning = {
  startedAt?: IoK8SApimachineryPkgApisMetaV1Time | undefined
}
export type IoK8SApiCoreV1ContainerStateTerminated = {
  containerID?: string | undefined
  exitCode: number
  finishedAt?: IoK8SApimachineryPkgApisMetaV1Time | undefined
  message?: string | undefined
  reason?: string | undefined
  signal?: number | undefined
  startedAt?: IoK8SApimachineryPkgApisMetaV1Time | undefined
}
export type IoK8SApiCoreV1ContainerStateWaiting = {
  message?: string | undefined
  reason?: string | undefined
}
export type IoK8SApiCoreV1ContainerState = {
  running?: IoK8SApiCoreV1ContainerStateRunning | undefined
  terminated?: IoK8SApiCoreV1ContainerStateTerminated | undefined
  waiting?: IoK8SApiCoreV1ContainerStateWaiting | undefined
}
export type IoK8SApiCoreV1ContainerStatus = {
  allocatedResources?:
    | {
        [key: string]: IoK8SApimachineryPkgApiResourceQuantity
      }
    | undefined
  containerID?: string | undefined
  image: string
  imageID: string
  lastState?: IoK8SApiCoreV1ContainerState | undefined
  name: string
  ready: boolean
  resources?: IoK8SApiCoreV1ResourceRequirements | undefined
  restartCount: number
  started?: boolean | undefined
  state?: IoK8SApiCoreV1ContainerState | undefined
}
export type IoK8SApiCoreV1HostIp = {
  ip?: string | undefined
}
export type IoK8SApiCoreV1PodIp = {
  ip?: string | undefined
}
export type IoK8SApiCoreV1PodResourceClaimStatus = {
  name: string
  resourceClaimName?: string | undefined
}
export type IoK8SApiCoreV1PodStatus = {
  conditions?: IoK8SApiCoreV1PodCondition[] | undefined
  containerStatuses?: IoK8SApiCoreV1ContainerStatus[] | undefined
  ephemeralContainerStatuses?: IoK8SApiCoreV1ContainerStatus[] | undefined
  hostIP?: string | undefined
  hostIPs?: IoK8SApiCoreV1HostIp[] | undefined
  initContainerStatuses?: IoK8SApiCoreV1ContainerStatus[] | undefined
  message?: string | undefined
  nominatedNodeName?: string | undefined
  phase?:
    | ('Failed' | 'Pending' | 'Running' | 'Succeeded' | 'Unknown')
    | undefined
  podIP?: string | undefined
  podIPs?: IoK8SApiCoreV1PodIp[] | undefined
  qosClass?: ('BestEffort' | 'Burstable' | 'Guaranteed') | undefined
  reason?: string | undefined
  resize?: string | undefined
  resourceClaimStatuses?: IoK8SApiCoreV1PodResourceClaimStatus[] | undefined
  startTime?: IoK8SApimachineryPkgApisMetaV1Time | undefined
}
export type IoK8SApiCoreV1Pod = {
  apiVersion?: 'v1' | undefined
  kind?: 'Pod' | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ObjectMeta | undefined
  spec?: IoK8SApiCoreV1PodSpec | undefined
  status?: IoK8SApiCoreV1PodStatus | undefined
}
export type IoK8SApiCoreV1ObjectReference = {
  apiVersion?: string | undefined
  fieldPath?: string | undefined
  kind?: string | undefined
  name?: string | undefined
  namespace?: string | undefined
  resourceVersion?: string | undefined
  uid?: string | undefined
}
export type IoK8SApiCoreV1ServiceAccount = {
  apiVersion?: 'v1' | undefined
  automountServiceAccountToken?: boolean | undefined
  imagePullSecrets?: IoK8SApiCoreV1LocalObjectReference[] | undefined
  kind?: 'ServiceAccount' | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ObjectMeta | undefined
  secrets?: IoK8SApiCoreV1ObjectReference[] | undefined
}
