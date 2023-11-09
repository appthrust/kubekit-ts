import { apiClient, type Options } from '../../client'
export const getAuthorizationV1ApiResources = (
  args: GetAuthorizationV1ApiResourcesApiArg,
  options?: Options
) => {
  return apiClient<GetAuthorizationV1ApiResourcesApiResponse>(
    { path: `/apis/authorization.k8s.io/v1/` },
    options
  )
}
export const createAuthorizationV1NamespacedLocalSubjectAccessReview = (
  args: CreateAuthorizationV1NamespacedLocalSubjectAccessReviewApiArg,
  options?: Options
) => {
  return apiClient<CreateAuthorizationV1NamespacedLocalSubjectAccessReviewApiResponse>(
    {
      path: `/apis/authorization.k8s.io/v1/namespaces/${args['namespace']}/localsubjectaccessreviews`,
      method: 'POST',
      body: args.body,
      contentType: args.contentType,
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
export const createAuthorizationV1SelfSubjectAccessReview = (
  args: CreateAuthorizationV1SelfSubjectAccessReviewApiArg,
  options?: Options
) => {
  return apiClient<CreateAuthorizationV1SelfSubjectAccessReviewApiResponse>(
    {
      path: `/apis/authorization.k8s.io/v1/selfsubjectaccessreviews`,
      method: 'POST',
      body: args.body,
      contentType: args.contentType,
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
export const createAuthorizationV1SelfSubjectRulesReview = (
  args: CreateAuthorizationV1SelfSubjectRulesReviewApiArg,
  options?: Options
) => {
  return apiClient<CreateAuthorizationV1SelfSubjectRulesReviewApiResponse>(
    {
      path: `/apis/authorization.k8s.io/v1/selfsubjectrulesreviews`,
      method: 'POST',
      body: args.body,
      contentType: args.contentType,
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
export const createAuthorizationV1SubjectAccessReview = (
  args: CreateAuthorizationV1SubjectAccessReviewApiArg,
  options?: Options
) => {
  return apiClient<CreateAuthorizationV1SubjectAccessReviewApiResponse>(
    {
      path: `/apis/authorization.k8s.io/v1/subjectaccessreviews`,
      method: 'POST',
      body: args.body,
      contentType: args.contentType,
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
export type GetAuthorizationV1ApiResourcesApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1ApiResourceList
export type GetAuthorizationV1ApiResourcesApiArg = void
export type CreateAuthorizationV1NamespacedLocalSubjectAccessReviewApiResponse =
  /** status 200 OK */
    | IoK8SApiAuthorizationV1LocalSubjectAccessReview
    | /** status 201 Created */ IoK8SApiAuthorizationV1LocalSubjectAccessReview
    | /** status 202 Accepted */ IoK8SApiAuthorizationV1LocalSubjectAccessReview
export type CreateAuthorizationV1NamespacedLocalSubjectAccessReviewApiArg = {
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
} & {
  contentType?: string
  body: IoK8SApiAuthorizationV1LocalSubjectAccessReview
}
export type CreateAuthorizationV1SelfSubjectAccessReviewApiResponse =
  /** status 200 OK */
    | IoK8SApiAuthorizationV1SelfSubjectAccessReview
    | /** status 201 Created */ IoK8SApiAuthorizationV1SelfSubjectAccessReview
    | /** status 202 Accepted */ IoK8SApiAuthorizationV1SelfSubjectAccessReview
export type CreateAuthorizationV1SelfSubjectAccessReviewApiArg = {
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
} & {
  contentType?: string
  body: IoK8SApiAuthorizationV1SelfSubjectAccessReview
}
export type CreateAuthorizationV1SelfSubjectRulesReviewApiResponse =
  /** status 200 OK */
    | IoK8SApiAuthorizationV1SelfSubjectRulesReview
    | /** status 201 Created */ IoK8SApiAuthorizationV1SelfSubjectRulesReview
    | /** status 202 Accepted */ IoK8SApiAuthorizationV1SelfSubjectRulesReview
export type CreateAuthorizationV1SelfSubjectRulesReviewApiArg = {
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
} & {
  contentType?: string
  body: IoK8SApiAuthorizationV1SelfSubjectRulesReview
}
export type CreateAuthorizationV1SubjectAccessReviewApiResponse =
  /** status 200 OK */
    | IoK8SApiAuthorizationV1SubjectAccessReview
    | /** status 201 Created */ IoK8SApiAuthorizationV1SubjectAccessReview
    | /** status 202 Accepted */ IoK8SApiAuthorizationV1SubjectAccessReview
export type CreateAuthorizationV1SubjectAccessReviewApiArg = {
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
} & {
  contentType?: string
  body: IoK8SApiAuthorizationV1SubjectAccessReview
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
export type IoK8SApiAuthorizationV1NonResourceAttributes = {
  path?: string | undefined
  verb?: string | undefined
}
export type IoK8SApiAuthorizationV1ResourceAttributes = {
  group?: string | undefined
  name?: string | undefined
  namespace?: string | undefined
  resource?: string | undefined
  subresource?: string | undefined
  verb?: string | undefined
  version?: string | undefined
}
export type IoK8SApiAuthorizationV1SubjectAccessReviewSpec = {
  extra?:
    | {
        [key: string]: string[]
      }
    | undefined
  groups?: string[] | undefined
  nonResourceAttributes?:
    | IoK8SApiAuthorizationV1NonResourceAttributes
    | undefined
  resourceAttributes?: IoK8SApiAuthorizationV1ResourceAttributes | undefined
  uid?: string | undefined
  user?: string | undefined
}
export type IoK8SApiAuthorizationV1SubjectAccessReviewStatus = {
  allowed: boolean
  denied?: boolean | undefined
  evaluationError?: string | undefined
  reason?: string | undefined
}
export type IoK8SApiAuthorizationV1LocalSubjectAccessReview = {
  apiVersion?: string | undefined
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ObjectMeta | undefined
  spec: IoK8SApiAuthorizationV1SubjectAccessReviewSpec
  status?: IoK8SApiAuthorizationV1SubjectAccessReviewStatus | undefined
}
export type IoK8SApiAuthorizationV1SelfSubjectAccessReviewSpec = {
  nonResourceAttributes?:
    | IoK8SApiAuthorizationV1NonResourceAttributes
    | undefined
  resourceAttributes?: IoK8SApiAuthorizationV1ResourceAttributes | undefined
}
export type IoK8SApiAuthorizationV1SelfSubjectAccessReview = {
  apiVersion?: string | undefined
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ObjectMeta | undefined
  spec: IoK8SApiAuthorizationV1SelfSubjectAccessReviewSpec
  status?: IoK8SApiAuthorizationV1SubjectAccessReviewStatus | undefined
}
export type IoK8SApiAuthorizationV1SelfSubjectRulesReviewSpec = {
  namespace?: string | undefined
}
export type IoK8SApiAuthorizationV1NonResourceRule = {
  nonResourceURLs?: string[] | undefined
  verbs: string[]
}
export type IoK8SApiAuthorizationV1ResourceRule = {
  apiGroups?: string[] | undefined
  resourceNames?: string[] | undefined
  resources?: string[] | undefined
  verbs: string[]
}
export type IoK8SApiAuthorizationV1SubjectRulesReviewStatus = {
  evaluationError?: string | undefined
  incomplete: boolean
  nonResourceRules: IoK8SApiAuthorizationV1NonResourceRule[]
  resourceRules: IoK8SApiAuthorizationV1ResourceRule[]
}
export type IoK8SApiAuthorizationV1SelfSubjectRulesReview = {
  apiVersion?: string | undefined
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ObjectMeta | undefined
  spec: IoK8SApiAuthorizationV1SelfSubjectRulesReviewSpec
  status?: IoK8SApiAuthorizationV1SubjectRulesReviewStatus | undefined
}
export type IoK8SApiAuthorizationV1SubjectAccessReview = {
  apiVersion?: string | undefined
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ObjectMeta | undefined
  spec: IoK8SApiAuthorizationV1SubjectAccessReviewSpec
  status?: IoK8SApiAuthorizationV1SubjectAccessReviewStatus | undefined
}
