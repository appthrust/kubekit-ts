import { apiClient, type Options } from '../../client'
export const getAuthenticationV1ApiResources = (
  args: GetAuthenticationV1ApiResourcesApiArg,
  options?: Options
) => {
  return apiClient<GetAuthenticationV1ApiResourcesApiResponse>(
    { path: `/apis/authentication.k8s.io/v1/` },
    options
  )
}
export const createAuthenticationV1TokenReview = (
  args: CreateAuthenticationV1TokenReviewApiArg,
  options?: Options
) => {
  return apiClient<CreateAuthenticationV1TokenReviewApiResponse>(
    {
      path: `/apis/authentication.k8s.io/v1/tokenreviews`,
      method: 'POST',
      body: args.ioK8SApiAuthenticationV1TokenReview,
      params: {
        dryRun: args.dryRun,
        fieldManager: args.fieldManager,
        fieldValidation: args.fieldValidation,
        pretty: args.pretty,
      },
    },
    options
  )
}
export type GetAuthenticationV1ApiResourcesApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1ApiResourceList
export type GetAuthenticationV1ApiResourcesApiArg = void
export type CreateAuthenticationV1TokenReviewApiResponse = /** status 200 OK */
  | IoK8SApiAuthenticationV1TokenReview
  | /** status 201 Created */ IoK8SApiAuthenticationV1TokenReview
  | /** status 202 Accepted */ IoK8SApiAuthenticationV1TokenReview
export type CreateAuthenticationV1TokenReviewApiArg = {
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  ioK8SApiAuthenticationV1TokenReview: IoK8SApiAuthenticationV1TokenReview
}
export type IoK8SApimachineryPkgApisMetaV1ApiResource = {
  categories?: string[] | undefined
  group?: string | undefined
  kind: string
  name: string
  namespaced: boolean
  shortNames?: string[] | undefined
  singularName: string
  storageVersionHash?: string | undefined
  verbs: string[]
  version?: string | undefined
}
export type IoK8SApimachineryPkgApisMetaV1ApiResourceList = {
  apiVersion?: string | undefined
  groupVersion: string
  kind?: string | undefined
  resources: IoK8SApimachineryPkgApisMetaV1ApiResource[]
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
export type IoK8SApiAuthenticationV1TokenReviewSpec = {
  audiences?: string[] | undefined
  token?: string | undefined
}
export type IoK8SApiAuthenticationV1UserInfo = {
  extra?:
    | {
        [key: string]: string[]
      }
    | undefined
  groups?: string[] | undefined
  uid?: string | undefined
  username?: string | undefined
}
export type IoK8SApiAuthenticationV1TokenReviewStatus = {
  audiences?: string[] | undefined
  authenticated?: boolean | undefined
  error?: string | undefined
  user?: IoK8SApiAuthenticationV1UserInfo | undefined
}
export type IoK8SApiAuthenticationV1TokenReview = {
  apiVersion?: string | undefined
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ObjectMeta | undefined
  spec: IoK8SApiAuthenticationV1TokenReviewSpec
  status?: IoK8SApiAuthenticationV1TokenReviewStatus | undefined
}
