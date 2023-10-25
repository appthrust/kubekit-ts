import { apiClient, type Options } from '../../client'
export const listKafkaStrimziIoV1Beta2KafkaBridgeForAllNamespaces = (
  args: ListKafkaStrimziIoV1Beta2KafkaBridgeForAllNamespacesApiArg,
  options?: Options
) => {
  return apiClient<ListKafkaStrimziIoV1Beta2KafkaBridgeForAllNamespacesApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/kafkabridges`,
      params: {
        allowWatchBookmarks: args.allowWatchBookmarks,
        continue: args['continue'],
        fieldSelector: args.fieldSelector,
        labelSelector: args.labelSelector,
        limit: args.limit,
        pretty: args.pretty,
        resourceVersion: args.resourceVersion,
        resourceVersionMatch: args.resourceVersionMatch,
        sendInitialEvents: args.sendInitialEvents,
        timeoutSeconds: args.timeoutSeconds,
        watch: args.watch,
      },
    },
    options
  )
}
export const listKafkaStrimziIoV1Beta2KafkaConnectorForAllNamespaces = (
  args: ListKafkaStrimziIoV1Beta2KafkaConnectorForAllNamespacesApiArg,
  options?: Options
) => {
  return apiClient<ListKafkaStrimziIoV1Beta2KafkaConnectorForAllNamespacesApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/kafkaconnectors`,
      params: {
        allowWatchBookmarks: args.allowWatchBookmarks,
        continue: args['continue'],
        fieldSelector: args.fieldSelector,
        labelSelector: args.labelSelector,
        limit: args.limit,
        pretty: args.pretty,
        resourceVersion: args.resourceVersion,
        resourceVersionMatch: args.resourceVersionMatch,
        sendInitialEvents: args.sendInitialEvents,
        timeoutSeconds: args.timeoutSeconds,
        watch: args.watch,
      },
    },
    options
  )
}
export const listKafkaStrimziIoV1Beta2KafkaConnectForAllNamespaces = (
  args: ListKafkaStrimziIoV1Beta2KafkaConnectForAllNamespacesApiArg,
  options?: Options
) => {
  return apiClient<ListKafkaStrimziIoV1Beta2KafkaConnectForAllNamespacesApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/kafkaconnects`,
      params: {
        allowWatchBookmarks: args.allowWatchBookmarks,
        continue: args['continue'],
        fieldSelector: args.fieldSelector,
        labelSelector: args.labelSelector,
        limit: args.limit,
        pretty: args.pretty,
        resourceVersion: args.resourceVersion,
        resourceVersionMatch: args.resourceVersionMatch,
        sendInitialEvents: args.sendInitialEvents,
        timeoutSeconds: args.timeoutSeconds,
        watch: args.watch,
      },
    },
    options
  )
}
export const listKafkaStrimziIoV1Beta2KafkaMirrorMaker2ForAllNamespaces = (
  args: ListKafkaStrimziIoV1Beta2KafkaMirrorMaker2ForAllNamespacesApiArg,
  options?: Options
) => {
  return apiClient<ListKafkaStrimziIoV1Beta2KafkaMirrorMaker2ForAllNamespacesApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/kafkamirrormaker2s`,
      params: {
        allowWatchBookmarks: args.allowWatchBookmarks,
        continue: args['continue'],
        fieldSelector: args.fieldSelector,
        labelSelector: args.labelSelector,
        limit: args.limit,
        pretty: args.pretty,
        resourceVersion: args.resourceVersion,
        resourceVersionMatch: args.resourceVersionMatch,
        sendInitialEvents: args.sendInitialEvents,
        timeoutSeconds: args.timeoutSeconds,
        watch: args.watch,
      },
    },
    options
  )
}
export const listKafkaStrimziIoV1Beta2KafkaMirrorMakerForAllNamespaces = (
  args: ListKafkaStrimziIoV1Beta2KafkaMirrorMakerForAllNamespacesApiArg,
  options?: Options
) => {
  return apiClient<ListKafkaStrimziIoV1Beta2KafkaMirrorMakerForAllNamespacesApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/kafkamirrormakers`,
      params: {
        allowWatchBookmarks: args.allowWatchBookmarks,
        continue: args['continue'],
        fieldSelector: args.fieldSelector,
        labelSelector: args.labelSelector,
        limit: args.limit,
        pretty: args.pretty,
        resourceVersion: args.resourceVersion,
        resourceVersionMatch: args.resourceVersionMatch,
        sendInitialEvents: args.sendInitialEvents,
        timeoutSeconds: args.timeoutSeconds,
        watch: args.watch,
      },
    },
    options
  )
}
export const listKafkaStrimziIoV1Beta2KafkaRebalanceForAllNamespaces = (
  args: ListKafkaStrimziIoV1Beta2KafkaRebalanceForAllNamespacesApiArg,
  options?: Options
) => {
  return apiClient<ListKafkaStrimziIoV1Beta2KafkaRebalanceForAllNamespacesApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/kafkarebalances`,
      params: {
        allowWatchBookmarks: args.allowWatchBookmarks,
        continue: args['continue'],
        fieldSelector: args.fieldSelector,
        labelSelector: args.labelSelector,
        limit: args.limit,
        pretty: args.pretty,
        resourceVersion: args.resourceVersion,
        resourceVersionMatch: args.resourceVersionMatch,
        sendInitialEvents: args.sendInitialEvents,
        timeoutSeconds: args.timeoutSeconds,
        watch: args.watch,
      },
    },
    options
  )
}
export const listKafkaStrimziIoV1Beta2KafkaForAllNamespaces = (
  args: ListKafkaStrimziIoV1Beta2KafkaForAllNamespacesApiArg,
  options?: Options
) => {
  return apiClient<ListKafkaStrimziIoV1Beta2KafkaForAllNamespacesApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/kafkas`,
      params: {
        allowWatchBookmarks: args.allowWatchBookmarks,
        continue: args['continue'],
        fieldSelector: args.fieldSelector,
        labelSelector: args.labelSelector,
        limit: args.limit,
        pretty: args.pretty,
        resourceVersion: args.resourceVersion,
        resourceVersionMatch: args.resourceVersionMatch,
        sendInitialEvents: args.sendInitialEvents,
        timeoutSeconds: args.timeoutSeconds,
        watch: args.watch,
      },
    },
    options
  )
}
export const listKafkaStrimziIoV1Beta2KafkaTopicForAllNamespaces = (
  args: ListKafkaStrimziIoV1Beta2KafkaTopicForAllNamespacesApiArg,
  options?: Options
) => {
  return apiClient<ListKafkaStrimziIoV1Beta2KafkaTopicForAllNamespacesApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/kafkatopics`,
      params: {
        allowWatchBookmarks: args.allowWatchBookmarks,
        continue: args['continue'],
        fieldSelector: args.fieldSelector,
        labelSelector: args.labelSelector,
        limit: args.limit,
        pretty: args.pretty,
        resourceVersion: args.resourceVersion,
        resourceVersionMatch: args.resourceVersionMatch,
        sendInitialEvents: args.sendInitialEvents,
        timeoutSeconds: args.timeoutSeconds,
        watch: args.watch,
      },
    },
    options
  )
}
export const listKafkaStrimziIoV1Beta2KafkaUserForAllNamespaces = (
  args: ListKafkaStrimziIoV1Beta2KafkaUserForAllNamespacesApiArg,
  options?: Options
) => {
  return apiClient<ListKafkaStrimziIoV1Beta2KafkaUserForAllNamespacesApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/kafkausers`,
      params: {
        allowWatchBookmarks: args.allowWatchBookmarks,
        continue: args['continue'],
        fieldSelector: args.fieldSelector,
        labelSelector: args.labelSelector,
        limit: args.limit,
        pretty: args.pretty,
        resourceVersion: args.resourceVersion,
        resourceVersionMatch: args.resourceVersionMatch,
        sendInitialEvents: args.sendInitialEvents,
        timeoutSeconds: args.timeoutSeconds,
        watch: args.watch,
      },
    },
    options
  )
}
export const listKafkaStrimziIoV1Beta2NamespacedKafkaBridge = (
  args: ListKafkaStrimziIoV1Beta2NamespacedKafkaBridgeApiArg,
  options?: Options
) => {
  return apiClient<ListKafkaStrimziIoV1Beta2NamespacedKafkaBridgeApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkabridges`,
      params: {
        pretty: args.pretty,
        allowWatchBookmarks: args.allowWatchBookmarks,
        continue: args['continue'],
        fieldSelector: args.fieldSelector,
        labelSelector: args.labelSelector,
        limit: args.limit,
        resourceVersion: args.resourceVersion,
        resourceVersionMatch: args.resourceVersionMatch,
        sendInitialEvents: args.sendInitialEvents,
        timeoutSeconds: args.timeoutSeconds,
        watch: args.watch,
      },
    },
    options
  )
}
export const createKafkaStrimziIoV1Beta2NamespacedKafkaBridge = (
  args: CreateKafkaStrimziIoV1Beta2NamespacedKafkaBridgeApiArg,
  options?: Options
) => {
  return apiClient<CreateKafkaStrimziIoV1Beta2NamespacedKafkaBridgeApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkabridges`,
      method: 'POST',
      body: args.ioStrimziKafkaV1Beta2KafkaBridge,
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
export const deleteKafkaStrimziIoV1Beta2CollectionNamespacedKafkaBridge = (
  args: DeleteKafkaStrimziIoV1Beta2CollectionNamespacedKafkaBridgeApiArg,
  options?: Options
) => {
  return apiClient<DeleteKafkaStrimziIoV1Beta2CollectionNamespacedKafkaBridgeApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkabridges`,
      method: 'DELETE',
      params: {
        pretty: args.pretty,
        allowWatchBookmarks: args.allowWatchBookmarks,
        continue: args['continue'],
        fieldSelector: args.fieldSelector,
        labelSelector: args.labelSelector,
        limit: args.limit,
        resourceVersion: args.resourceVersion,
        resourceVersionMatch: args.resourceVersionMatch,
        sendInitialEvents: args.sendInitialEvents,
        timeoutSeconds: args.timeoutSeconds,
        watch: args.watch,
      },
    },
    options
  )
}
export const readKafkaStrimziIoV1Beta2NamespacedKafkaBridge = (
  args: ReadKafkaStrimziIoV1Beta2NamespacedKafkaBridgeApiArg,
  options?: Options
) => {
  return apiClient<ReadKafkaStrimziIoV1Beta2NamespacedKafkaBridgeApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkabridges/${args.name}`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceKafkaStrimziIoV1Beta2NamespacedKafkaBridge = (
  args: ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaBridgeApiArg,
  options?: Options
) => {
  return apiClient<ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaBridgeApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkabridges/${args.name}`,
      method: 'PUT',
      body: args.ioStrimziKafkaV1Beta2KafkaBridge,
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
export const deleteKafkaStrimziIoV1Beta2NamespacedKafkaBridge = (
  args: DeleteKafkaStrimziIoV1Beta2NamespacedKafkaBridgeApiArg,
  options?: Options
) => {
  return apiClient<DeleteKafkaStrimziIoV1Beta2NamespacedKafkaBridgeApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkabridges/${args.name}`,
      method: 'DELETE',
      body: args.ioK8SApimachineryPkgApisMetaV1DeleteOptions,
      params: {
        pretty: args.pretty,
        dryRun: args.dryRun,
        gracePeriodSeconds: args.gracePeriodSeconds,
        orphanDependents: args.orphanDependents,
        propagationPolicy: args.propagationPolicy,
      },
    },
    options
  )
}
export const patchKafkaStrimziIoV1Beta2NamespacedKafkaBridge = (
  args: PatchKafkaStrimziIoV1Beta2NamespacedKafkaBridgeApiArg,
  options?: Options
) => {
  return apiClient<PatchKafkaStrimziIoV1Beta2NamespacedKafkaBridgeApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkabridges/${args.name}`,
      method: 'PATCH',
      body: args.ioK8SApimachineryPkgApisMetaV1Patch,
      params: {
        pretty: args.pretty,
        dryRun: args.dryRun,
        fieldManager: args.fieldManager,
        fieldValidation: args.fieldValidation,
        force: args.force,
      },
    },
    options
  )
}
export const readKafkaStrimziIoV1Beta2NamespacedKafkaBridgeScale = (
  args: ReadKafkaStrimziIoV1Beta2NamespacedKafkaBridgeScaleApiArg,
  options?: Options
) => {
  return apiClient<ReadKafkaStrimziIoV1Beta2NamespacedKafkaBridgeScaleApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkabridges/${args.name}/scale`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceKafkaStrimziIoV1Beta2NamespacedKafkaBridgeScale = (
  args: ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaBridgeScaleApiArg,
  options?: Options
) => {
  return apiClient<ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaBridgeScaleApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkabridges/${args.name}/scale`,
      method: 'PUT',
      body: args.ioK8SApiAutoscalingV1Scale,
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
export const patchKafkaStrimziIoV1Beta2NamespacedKafkaBridgeScale = (
  args: PatchKafkaStrimziIoV1Beta2NamespacedKafkaBridgeScaleApiArg,
  options?: Options
) => {
  return apiClient<PatchKafkaStrimziIoV1Beta2NamespacedKafkaBridgeScaleApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkabridges/${args.name}/scale`,
      method: 'PATCH',
      body: args.ioK8SApimachineryPkgApisMetaV1Patch,
      params: {
        pretty: args.pretty,
        dryRun: args.dryRun,
        fieldManager: args.fieldManager,
        fieldValidation: args.fieldValidation,
        force: args.force,
      },
    },
    options
  )
}
export const readKafkaStrimziIoV1Beta2NamespacedKafkaBridgeStatus = (
  args: ReadKafkaStrimziIoV1Beta2NamespacedKafkaBridgeStatusApiArg,
  options?: Options
) => {
  return apiClient<ReadKafkaStrimziIoV1Beta2NamespacedKafkaBridgeStatusApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkabridges/${args.name}/status`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceKafkaStrimziIoV1Beta2NamespacedKafkaBridgeStatus = (
  args: ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaBridgeStatusApiArg,
  options?: Options
) => {
  return apiClient<ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaBridgeStatusApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkabridges/${args.name}/status`,
      method: 'PUT',
      body: args.ioStrimziKafkaV1Beta2KafkaBridge,
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
export const patchKafkaStrimziIoV1Beta2NamespacedKafkaBridgeStatus = (
  args: PatchKafkaStrimziIoV1Beta2NamespacedKafkaBridgeStatusApiArg,
  options?: Options
) => {
  return apiClient<PatchKafkaStrimziIoV1Beta2NamespacedKafkaBridgeStatusApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkabridges/${args.name}/status`,
      method: 'PATCH',
      body: args.ioK8SApimachineryPkgApisMetaV1Patch,
      params: {
        pretty: args.pretty,
        dryRun: args.dryRun,
        fieldManager: args.fieldManager,
        fieldValidation: args.fieldValidation,
        force: args.force,
      },
    },
    options
  )
}
export const listKafkaStrimziIoV1Beta2NamespacedKafkaConnector = (
  args: ListKafkaStrimziIoV1Beta2NamespacedKafkaConnectorApiArg,
  options?: Options
) => {
  return apiClient<ListKafkaStrimziIoV1Beta2NamespacedKafkaConnectorApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkaconnectors`,
      params: {
        pretty: args.pretty,
        allowWatchBookmarks: args.allowWatchBookmarks,
        continue: args['continue'],
        fieldSelector: args.fieldSelector,
        labelSelector: args.labelSelector,
        limit: args.limit,
        resourceVersion: args.resourceVersion,
        resourceVersionMatch: args.resourceVersionMatch,
        sendInitialEvents: args.sendInitialEvents,
        timeoutSeconds: args.timeoutSeconds,
        watch: args.watch,
      },
    },
    options
  )
}
export const createKafkaStrimziIoV1Beta2NamespacedKafkaConnector = (
  args: CreateKafkaStrimziIoV1Beta2NamespacedKafkaConnectorApiArg,
  options?: Options
) => {
  return apiClient<CreateKafkaStrimziIoV1Beta2NamespacedKafkaConnectorApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkaconnectors`,
      method: 'POST',
      body: args.ioStrimziKafkaV1Beta2KafkaConnector,
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
export const deleteKafkaStrimziIoV1Beta2CollectionNamespacedKafkaConnector = (
  args: DeleteKafkaStrimziIoV1Beta2CollectionNamespacedKafkaConnectorApiArg,
  options?: Options
) => {
  return apiClient<DeleteKafkaStrimziIoV1Beta2CollectionNamespacedKafkaConnectorApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkaconnectors`,
      method: 'DELETE',
      params: {
        pretty: args.pretty,
        allowWatchBookmarks: args.allowWatchBookmarks,
        continue: args['continue'],
        fieldSelector: args.fieldSelector,
        labelSelector: args.labelSelector,
        limit: args.limit,
        resourceVersion: args.resourceVersion,
        resourceVersionMatch: args.resourceVersionMatch,
        sendInitialEvents: args.sendInitialEvents,
        timeoutSeconds: args.timeoutSeconds,
        watch: args.watch,
      },
    },
    options
  )
}
export const readKafkaStrimziIoV1Beta2NamespacedKafkaConnector = (
  args: ReadKafkaStrimziIoV1Beta2NamespacedKafkaConnectorApiArg,
  options?: Options
) => {
  return apiClient<ReadKafkaStrimziIoV1Beta2NamespacedKafkaConnectorApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkaconnectors/${args.name}`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceKafkaStrimziIoV1Beta2NamespacedKafkaConnector = (
  args: ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaConnectorApiArg,
  options?: Options
) => {
  return apiClient<ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaConnectorApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkaconnectors/${args.name}`,
      method: 'PUT',
      body: args.ioStrimziKafkaV1Beta2KafkaConnector,
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
export const deleteKafkaStrimziIoV1Beta2NamespacedKafkaConnector = (
  args: DeleteKafkaStrimziIoV1Beta2NamespacedKafkaConnectorApiArg,
  options?: Options
) => {
  return apiClient<DeleteKafkaStrimziIoV1Beta2NamespacedKafkaConnectorApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkaconnectors/${args.name}`,
      method: 'DELETE',
      body: args.ioK8SApimachineryPkgApisMetaV1DeleteOptions,
      params: {
        pretty: args.pretty,
        dryRun: args.dryRun,
        gracePeriodSeconds: args.gracePeriodSeconds,
        orphanDependents: args.orphanDependents,
        propagationPolicy: args.propagationPolicy,
      },
    },
    options
  )
}
export const patchKafkaStrimziIoV1Beta2NamespacedKafkaConnector = (
  args: PatchKafkaStrimziIoV1Beta2NamespacedKafkaConnectorApiArg,
  options?: Options
) => {
  return apiClient<PatchKafkaStrimziIoV1Beta2NamespacedKafkaConnectorApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkaconnectors/${args.name}`,
      method: 'PATCH',
      body: args.ioK8SApimachineryPkgApisMetaV1Patch,
      params: {
        pretty: args.pretty,
        dryRun: args.dryRun,
        fieldManager: args.fieldManager,
        fieldValidation: args.fieldValidation,
        force: args.force,
      },
    },
    options
  )
}
export const readKafkaStrimziIoV1Beta2NamespacedKafkaConnectorScale = (
  args: ReadKafkaStrimziIoV1Beta2NamespacedKafkaConnectorScaleApiArg,
  options?: Options
) => {
  return apiClient<ReadKafkaStrimziIoV1Beta2NamespacedKafkaConnectorScaleApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkaconnectors/${args.name}/scale`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceKafkaStrimziIoV1Beta2NamespacedKafkaConnectorScale = (
  args: ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaConnectorScaleApiArg,
  options?: Options
) => {
  return apiClient<ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaConnectorScaleApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkaconnectors/${args.name}/scale`,
      method: 'PUT',
      body: args.ioK8SApiAutoscalingV1Scale,
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
export const patchKafkaStrimziIoV1Beta2NamespacedKafkaConnectorScale = (
  args: PatchKafkaStrimziIoV1Beta2NamespacedKafkaConnectorScaleApiArg,
  options?: Options
) => {
  return apiClient<PatchKafkaStrimziIoV1Beta2NamespacedKafkaConnectorScaleApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkaconnectors/${args.name}/scale`,
      method: 'PATCH',
      body: args.ioK8SApimachineryPkgApisMetaV1Patch,
      params: {
        pretty: args.pretty,
        dryRun: args.dryRun,
        fieldManager: args.fieldManager,
        fieldValidation: args.fieldValidation,
        force: args.force,
      },
    },
    options
  )
}
export const readKafkaStrimziIoV1Beta2NamespacedKafkaConnectorStatus = (
  args: ReadKafkaStrimziIoV1Beta2NamespacedKafkaConnectorStatusApiArg,
  options?: Options
) => {
  return apiClient<ReadKafkaStrimziIoV1Beta2NamespacedKafkaConnectorStatusApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkaconnectors/${args.name}/status`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceKafkaStrimziIoV1Beta2NamespacedKafkaConnectorStatus = (
  args: ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaConnectorStatusApiArg,
  options?: Options
) => {
  return apiClient<ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaConnectorStatusApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkaconnectors/${args.name}/status`,
      method: 'PUT',
      body: args.ioStrimziKafkaV1Beta2KafkaConnector,
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
export const patchKafkaStrimziIoV1Beta2NamespacedKafkaConnectorStatus = (
  args: PatchKafkaStrimziIoV1Beta2NamespacedKafkaConnectorStatusApiArg,
  options?: Options
) => {
  return apiClient<PatchKafkaStrimziIoV1Beta2NamespacedKafkaConnectorStatusApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkaconnectors/${args.name}/status`,
      method: 'PATCH',
      body: args.ioK8SApimachineryPkgApisMetaV1Patch,
      params: {
        pretty: args.pretty,
        dryRun: args.dryRun,
        fieldManager: args.fieldManager,
        fieldValidation: args.fieldValidation,
        force: args.force,
      },
    },
    options
  )
}
export const listKafkaStrimziIoV1Beta2NamespacedKafkaConnect = (
  args: ListKafkaStrimziIoV1Beta2NamespacedKafkaConnectApiArg,
  options?: Options
) => {
  return apiClient<ListKafkaStrimziIoV1Beta2NamespacedKafkaConnectApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkaconnects`,
      params: {
        pretty: args.pretty,
        allowWatchBookmarks: args.allowWatchBookmarks,
        continue: args['continue'],
        fieldSelector: args.fieldSelector,
        labelSelector: args.labelSelector,
        limit: args.limit,
        resourceVersion: args.resourceVersion,
        resourceVersionMatch: args.resourceVersionMatch,
        sendInitialEvents: args.sendInitialEvents,
        timeoutSeconds: args.timeoutSeconds,
        watch: args.watch,
      },
    },
    options
  )
}
export const createKafkaStrimziIoV1Beta2NamespacedKafkaConnect = (
  args: CreateKafkaStrimziIoV1Beta2NamespacedKafkaConnectApiArg,
  options?: Options
) => {
  return apiClient<CreateKafkaStrimziIoV1Beta2NamespacedKafkaConnectApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkaconnects`,
      method: 'POST',
      body: args.ioStrimziKafkaV1Beta2KafkaConnect,
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
export const deleteKafkaStrimziIoV1Beta2CollectionNamespacedKafkaConnect = (
  args: DeleteKafkaStrimziIoV1Beta2CollectionNamespacedKafkaConnectApiArg,
  options?: Options
) => {
  return apiClient<DeleteKafkaStrimziIoV1Beta2CollectionNamespacedKafkaConnectApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkaconnects`,
      method: 'DELETE',
      params: {
        pretty: args.pretty,
        allowWatchBookmarks: args.allowWatchBookmarks,
        continue: args['continue'],
        fieldSelector: args.fieldSelector,
        labelSelector: args.labelSelector,
        limit: args.limit,
        resourceVersion: args.resourceVersion,
        resourceVersionMatch: args.resourceVersionMatch,
        sendInitialEvents: args.sendInitialEvents,
        timeoutSeconds: args.timeoutSeconds,
        watch: args.watch,
      },
    },
    options
  )
}
export const readKafkaStrimziIoV1Beta2NamespacedKafkaConnect = (
  args: ReadKafkaStrimziIoV1Beta2NamespacedKafkaConnectApiArg,
  options?: Options
) => {
  return apiClient<ReadKafkaStrimziIoV1Beta2NamespacedKafkaConnectApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkaconnects/${args.name}`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceKafkaStrimziIoV1Beta2NamespacedKafkaConnect = (
  args: ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaConnectApiArg,
  options?: Options
) => {
  return apiClient<ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaConnectApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkaconnects/${args.name}`,
      method: 'PUT',
      body: args.ioStrimziKafkaV1Beta2KafkaConnect,
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
export const deleteKafkaStrimziIoV1Beta2NamespacedKafkaConnect = (
  args: DeleteKafkaStrimziIoV1Beta2NamespacedKafkaConnectApiArg,
  options?: Options
) => {
  return apiClient<DeleteKafkaStrimziIoV1Beta2NamespacedKafkaConnectApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkaconnects/${args.name}`,
      method: 'DELETE',
      body: args.ioK8SApimachineryPkgApisMetaV1DeleteOptions,
      params: {
        pretty: args.pretty,
        dryRun: args.dryRun,
        gracePeriodSeconds: args.gracePeriodSeconds,
        orphanDependents: args.orphanDependents,
        propagationPolicy: args.propagationPolicy,
      },
    },
    options
  )
}
export const patchKafkaStrimziIoV1Beta2NamespacedKafkaConnect = (
  args: PatchKafkaStrimziIoV1Beta2NamespacedKafkaConnectApiArg,
  options?: Options
) => {
  return apiClient<PatchKafkaStrimziIoV1Beta2NamespacedKafkaConnectApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkaconnects/${args.name}`,
      method: 'PATCH',
      body: args.ioK8SApimachineryPkgApisMetaV1Patch,
      params: {
        pretty: args.pretty,
        dryRun: args.dryRun,
        fieldManager: args.fieldManager,
        fieldValidation: args.fieldValidation,
        force: args.force,
      },
    },
    options
  )
}
export const readKafkaStrimziIoV1Beta2NamespacedKafkaConnectScale = (
  args: ReadKafkaStrimziIoV1Beta2NamespacedKafkaConnectScaleApiArg,
  options?: Options
) => {
  return apiClient<ReadKafkaStrimziIoV1Beta2NamespacedKafkaConnectScaleApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkaconnects/${args.name}/scale`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceKafkaStrimziIoV1Beta2NamespacedKafkaConnectScale = (
  args: ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaConnectScaleApiArg,
  options?: Options
) => {
  return apiClient<ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaConnectScaleApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkaconnects/${args.name}/scale`,
      method: 'PUT',
      body: args.ioK8SApiAutoscalingV1Scale,
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
export const patchKafkaStrimziIoV1Beta2NamespacedKafkaConnectScale = (
  args: PatchKafkaStrimziIoV1Beta2NamespacedKafkaConnectScaleApiArg,
  options?: Options
) => {
  return apiClient<PatchKafkaStrimziIoV1Beta2NamespacedKafkaConnectScaleApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkaconnects/${args.name}/scale`,
      method: 'PATCH',
      body: args.ioK8SApimachineryPkgApisMetaV1Patch,
      params: {
        pretty: args.pretty,
        dryRun: args.dryRun,
        fieldManager: args.fieldManager,
        fieldValidation: args.fieldValidation,
        force: args.force,
      },
    },
    options
  )
}
export const readKafkaStrimziIoV1Beta2NamespacedKafkaConnectStatus = (
  args: ReadKafkaStrimziIoV1Beta2NamespacedKafkaConnectStatusApiArg,
  options?: Options
) => {
  return apiClient<ReadKafkaStrimziIoV1Beta2NamespacedKafkaConnectStatusApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkaconnects/${args.name}/status`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceKafkaStrimziIoV1Beta2NamespacedKafkaConnectStatus = (
  args: ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaConnectStatusApiArg,
  options?: Options
) => {
  return apiClient<ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaConnectStatusApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkaconnects/${args.name}/status`,
      method: 'PUT',
      body: args.ioStrimziKafkaV1Beta2KafkaConnect,
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
export const patchKafkaStrimziIoV1Beta2NamespacedKafkaConnectStatus = (
  args: PatchKafkaStrimziIoV1Beta2NamespacedKafkaConnectStatusApiArg,
  options?: Options
) => {
  return apiClient<PatchKafkaStrimziIoV1Beta2NamespacedKafkaConnectStatusApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkaconnects/${args.name}/status`,
      method: 'PATCH',
      body: args.ioK8SApimachineryPkgApisMetaV1Patch,
      params: {
        pretty: args.pretty,
        dryRun: args.dryRun,
        fieldManager: args.fieldManager,
        fieldValidation: args.fieldValidation,
        force: args.force,
      },
    },
    options
  )
}
export const listKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMaker2 = (
  args: ListKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMaker2ApiArg,
  options?: Options
) => {
  return apiClient<ListKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMaker2ApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkamirrormaker2s`,
      params: {
        pretty: args.pretty,
        allowWatchBookmarks: args.allowWatchBookmarks,
        continue: args['continue'],
        fieldSelector: args.fieldSelector,
        labelSelector: args.labelSelector,
        limit: args.limit,
        resourceVersion: args.resourceVersion,
        resourceVersionMatch: args.resourceVersionMatch,
        sendInitialEvents: args.sendInitialEvents,
        timeoutSeconds: args.timeoutSeconds,
        watch: args.watch,
      },
    },
    options
  )
}
export const createKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMaker2 = (
  args: CreateKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMaker2ApiArg,
  options?: Options
) => {
  return apiClient<CreateKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMaker2ApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkamirrormaker2s`,
      method: 'POST',
      body: args.ioStrimziKafkaV1Beta2KafkaMirrorMaker2,
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
export const deleteKafkaStrimziIoV1Beta2CollectionNamespacedKafkaMirrorMaker2 =
  (
    args: DeleteKafkaStrimziIoV1Beta2CollectionNamespacedKafkaMirrorMaker2ApiArg,
    options?: Options
  ) => {
    return apiClient<DeleteKafkaStrimziIoV1Beta2CollectionNamespacedKafkaMirrorMaker2ApiResponse>(
      {
        path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkamirrormaker2s`,
        method: 'DELETE',
        params: {
          pretty: args.pretty,
          allowWatchBookmarks: args.allowWatchBookmarks,
          continue: args['continue'],
          fieldSelector: args.fieldSelector,
          labelSelector: args.labelSelector,
          limit: args.limit,
          resourceVersion: args.resourceVersion,
          resourceVersionMatch: args.resourceVersionMatch,
          sendInitialEvents: args.sendInitialEvents,
          timeoutSeconds: args.timeoutSeconds,
          watch: args.watch,
        },
      },
      options
    )
  }
export const readKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMaker2 = (
  args: ReadKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMaker2ApiArg,
  options?: Options
) => {
  return apiClient<ReadKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMaker2ApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkamirrormaker2s/${args.name}`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMaker2 = (
  args: ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMaker2ApiArg,
  options?: Options
) => {
  return apiClient<ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMaker2ApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkamirrormaker2s/${args.name}`,
      method: 'PUT',
      body: args.ioStrimziKafkaV1Beta2KafkaMirrorMaker2,
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
export const deleteKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMaker2 = (
  args: DeleteKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMaker2ApiArg,
  options?: Options
) => {
  return apiClient<DeleteKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMaker2ApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkamirrormaker2s/${args.name}`,
      method: 'DELETE',
      body: args.ioK8SApimachineryPkgApisMetaV1DeleteOptions,
      params: {
        pretty: args.pretty,
        dryRun: args.dryRun,
        gracePeriodSeconds: args.gracePeriodSeconds,
        orphanDependents: args.orphanDependents,
        propagationPolicy: args.propagationPolicy,
      },
    },
    options
  )
}
export const patchKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMaker2 = (
  args: PatchKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMaker2ApiArg,
  options?: Options
) => {
  return apiClient<PatchKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMaker2ApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkamirrormaker2s/${args.name}`,
      method: 'PATCH',
      body: args.ioK8SApimachineryPkgApisMetaV1Patch,
      params: {
        pretty: args.pretty,
        dryRun: args.dryRun,
        fieldManager: args.fieldManager,
        fieldValidation: args.fieldValidation,
        force: args.force,
      },
    },
    options
  )
}
export const readKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMaker2Scale = (
  args: ReadKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMaker2ScaleApiArg,
  options?: Options
) => {
  return apiClient<ReadKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMaker2ScaleApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkamirrormaker2s/${args.name}/scale`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMaker2Scale = (
  args: ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMaker2ScaleApiArg,
  options?: Options
) => {
  return apiClient<ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMaker2ScaleApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkamirrormaker2s/${args.name}/scale`,
      method: 'PUT',
      body: args.ioK8SApiAutoscalingV1Scale,
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
export const patchKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMaker2Scale = (
  args: PatchKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMaker2ScaleApiArg,
  options?: Options
) => {
  return apiClient<PatchKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMaker2ScaleApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkamirrormaker2s/${args.name}/scale`,
      method: 'PATCH',
      body: args.ioK8SApimachineryPkgApisMetaV1Patch,
      params: {
        pretty: args.pretty,
        dryRun: args.dryRun,
        fieldManager: args.fieldManager,
        fieldValidation: args.fieldValidation,
        force: args.force,
      },
    },
    options
  )
}
export const readKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMaker2Status = (
  args: ReadKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMaker2StatusApiArg,
  options?: Options
) => {
  return apiClient<ReadKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMaker2StatusApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkamirrormaker2s/${args.name}/status`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMaker2Status = (
  args: ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMaker2StatusApiArg,
  options?: Options
) => {
  return apiClient<ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMaker2StatusApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkamirrormaker2s/${args.name}/status`,
      method: 'PUT',
      body: args.ioStrimziKafkaV1Beta2KafkaMirrorMaker2,
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
export const patchKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMaker2Status = (
  args: PatchKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMaker2StatusApiArg,
  options?: Options
) => {
  return apiClient<PatchKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMaker2StatusApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkamirrormaker2s/${args.name}/status`,
      method: 'PATCH',
      body: args.ioK8SApimachineryPkgApisMetaV1Patch,
      params: {
        pretty: args.pretty,
        dryRun: args.dryRun,
        fieldManager: args.fieldManager,
        fieldValidation: args.fieldValidation,
        force: args.force,
      },
    },
    options
  )
}
export const listKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMaker = (
  args: ListKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMakerApiArg,
  options?: Options
) => {
  return apiClient<ListKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMakerApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkamirrormakers`,
      params: {
        pretty: args.pretty,
        allowWatchBookmarks: args.allowWatchBookmarks,
        continue: args['continue'],
        fieldSelector: args.fieldSelector,
        labelSelector: args.labelSelector,
        limit: args.limit,
        resourceVersion: args.resourceVersion,
        resourceVersionMatch: args.resourceVersionMatch,
        sendInitialEvents: args.sendInitialEvents,
        timeoutSeconds: args.timeoutSeconds,
        watch: args.watch,
      },
    },
    options
  )
}
export const createKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMaker = (
  args: CreateKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMakerApiArg,
  options?: Options
) => {
  return apiClient<CreateKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMakerApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkamirrormakers`,
      method: 'POST',
      body: args.ioStrimziKafkaV1Beta2KafkaMirrorMaker,
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
export const deleteKafkaStrimziIoV1Beta2CollectionNamespacedKafkaMirrorMaker = (
  args: DeleteKafkaStrimziIoV1Beta2CollectionNamespacedKafkaMirrorMakerApiArg,
  options?: Options
) => {
  return apiClient<DeleteKafkaStrimziIoV1Beta2CollectionNamespacedKafkaMirrorMakerApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkamirrormakers`,
      method: 'DELETE',
      params: {
        pretty: args.pretty,
        allowWatchBookmarks: args.allowWatchBookmarks,
        continue: args['continue'],
        fieldSelector: args.fieldSelector,
        labelSelector: args.labelSelector,
        limit: args.limit,
        resourceVersion: args.resourceVersion,
        resourceVersionMatch: args.resourceVersionMatch,
        sendInitialEvents: args.sendInitialEvents,
        timeoutSeconds: args.timeoutSeconds,
        watch: args.watch,
      },
    },
    options
  )
}
export const readKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMaker = (
  args: ReadKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMakerApiArg,
  options?: Options
) => {
  return apiClient<ReadKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMakerApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkamirrormakers/${args.name}`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMaker = (
  args: ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMakerApiArg,
  options?: Options
) => {
  return apiClient<ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMakerApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkamirrormakers/${args.name}`,
      method: 'PUT',
      body: args.ioStrimziKafkaV1Beta2KafkaMirrorMaker,
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
export const deleteKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMaker = (
  args: DeleteKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMakerApiArg,
  options?: Options
) => {
  return apiClient<DeleteKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMakerApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkamirrormakers/${args.name}`,
      method: 'DELETE',
      body: args.ioK8SApimachineryPkgApisMetaV1DeleteOptions,
      params: {
        pretty: args.pretty,
        dryRun: args.dryRun,
        gracePeriodSeconds: args.gracePeriodSeconds,
        orphanDependents: args.orphanDependents,
        propagationPolicy: args.propagationPolicy,
      },
    },
    options
  )
}
export const patchKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMaker = (
  args: PatchKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMakerApiArg,
  options?: Options
) => {
  return apiClient<PatchKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMakerApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkamirrormakers/${args.name}`,
      method: 'PATCH',
      body: args.ioK8SApimachineryPkgApisMetaV1Patch,
      params: {
        pretty: args.pretty,
        dryRun: args.dryRun,
        fieldManager: args.fieldManager,
        fieldValidation: args.fieldValidation,
        force: args.force,
      },
    },
    options
  )
}
export const readKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMakerScale = (
  args: ReadKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMakerScaleApiArg,
  options?: Options
) => {
  return apiClient<ReadKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMakerScaleApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkamirrormakers/${args.name}/scale`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMakerScale = (
  args: ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMakerScaleApiArg,
  options?: Options
) => {
  return apiClient<ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMakerScaleApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkamirrormakers/${args.name}/scale`,
      method: 'PUT',
      body: args.ioK8SApiAutoscalingV1Scale,
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
export const patchKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMakerScale = (
  args: PatchKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMakerScaleApiArg,
  options?: Options
) => {
  return apiClient<PatchKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMakerScaleApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkamirrormakers/${args.name}/scale`,
      method: 'PATCH',
      body: args.ioK8SApimachineryPkgApisMetaV1Patch,
      params: {
        pretty: args.pretty,
        dryRun: args.dryRun,
        fieldManager: args.fieldManager,
        fieldValidation: args.fieldValidation,
        force: args.force,
      },
    },
    options
  )
}
export const readKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMakerStatus = (
  args: ReadKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMakerStatusApiArg,
  options?: Options
) => {
  return apiClient<ReadKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMakerStatusApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkamirrormakers/${args.name}/status`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMakerStatus = (
  args: ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMakerStatusApiArg,
  options?: Options
) => {
  return apiClient<ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMakerStatusApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkamirrormakers/${args.name}/status`,
      method: 'PUT',
      body: args.ioStrimziKafkaV1Beta2KafkaMirrorMaker,
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
export const patchKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMakerStatus = (
  args: PatchKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMakerStatusApiArg,
  options?: Options
) => {
  return apiClient<PatchKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMakerStatusApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkamirrormakers/${args.name}/status`,
      method: 'PATCH',
      body: args.ioK8SApimachineryPkgApisMetaV1Patch,
      params: {
        pretty: args.pretty,
        dryRun: args.dryRun,
        fieldManager: args.fieldManager,
        fieldValidation: args.fieldValidation,
        force: args.force,
      },
    },
    options
  )
}
export const listKafkaStrimziIoV1Beta2NamespacedKafkaRebalance = (
  args: ListKafkaStrimziIoV1Beta2NamespacedKafkaRebalanceApiArg,
  options?: Options
) => {
  return apiClient<ListKafkaStrimziIoV1Beta2NamespacedKafkaRebalanceApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkarebalances`,
      params: {
        pretty: args.pretty,
        allowWatchBookmarks: args.allowWatchBookmarks,
        continue: args['continue'],
        fieldSelector: args.fieldSelector,
        labelSelector: args.labelSelector,
        limit: args.limit,
        resourceVersion: args.resourceVersion,
        resourceVersionMatch: args.resourceVersionMatch,
        sendInitialEvents: args.sendInitialEvents,
        timeoutSeconds: args.timeoutSeconds,
        watch: args.watch,
      },
    },
    options
  )
}
export const createKafkaStrimziIoV1Beta2NamespacedKafkaRebalance = (
  args: CreateKafkaStrimziIoV1Beta2NamespacedKafkaRebalanceApiArg,
  options?: Options
) => {
  return apiClient<CreateKafkaStrimziIoV1Beta2NamespacedKafkaRebalanceApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkarebalances`,
      method: 'POST',
      body: args.ioStrimziKafkaV1Beta2KafkaRebalance,
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
export const deleteKafkaStrimziIoV1Beta2CollectionNamespacedKafkaRebalance = (
  args: DeleteKafkaStrimziIoV1Beta2CollectionNamespacedKafkaRebalanceApiArg,
  options?: Options
) => {
  return apiClient<DeleteKafkaStrimziIoV1Beta2CollectionNamespacedKafkaRebalanceApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkarebalances`,
      method: 'DELETE',
      params: {
        pretty: args.pretty,
        allowWatchBookmarks: args.allowWatchBookmarks,
        continue: args['continue'],
        fieldSelector: args.fieldSelector,
        labelSelector: args.labelSelector,
        limit: args.limit,
        resourceVersion: args.resourceVersion,
        resourceVersionMatch: args.resourceVersionMatch,
        sendInitialEvents: args.sendInitialEvents,
        timeoutSeconds: args.timeoutSeconds,
        watch: args.watch,
      },
    },
    options
  )
}
export const readKafkaStrimziIoV1Beta2NamespacedKafkaRebalance = (
  args: ReadKafkaStrimziIoV1Beta2NamespacedKafkaRebalanceApiArg,
  options?: Options
) => {
  return apiClient<ReadKafkaStrimziIoV1Beta2NamespacedKafkaRebalanceApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkarebalances/${args.name}`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceKafkaStrimziIoV1Beta2NamespacedKafkaRebalance = (
  args: ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaRebalanceApiArg,
  options?: Options
) => {
  return apiClient<ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaRebalanceApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkarebalances/${args.name}`,
      method: 'PUT',
      body: args.ioStrimziKafkaV1Beta2KafkaRebalance,
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
export const deleteKafkaStrimziIoV1Beta2NamespacedKafkaRebalance = (
  args: DeleteKafkaStrimziIoV1Beta2NamespacedKafkaRebalanceApiArg,
  options?: Options
) => {
  return apiClient<DeleteKafkaStrimziIoV1Beta2NamespacedKafkaRebalanceApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkarebalances/${args.name}`,
      method: 'DELETE',
      body: args.ioK8SApimachineryPkgApisMetaV1DeleteOptions,
      params: {
        pretty: args.pretty,
        dryRun: args.dryRun,
        gracePeriodSeconds: args.gracePeriodSeconds,
        orphanDependents: args.orphanDependents,
        propagationPolicy: args.propagationPolicy,
      },
    },
    options
  )
}
export const patchKafkaStrimziIoV1Beta2NamespacedKafkaRebalance = (
  args: PatchKafkaStrimziIoV1Beta2NamespacedKafkaRebalanceApiArg,
  options?: Options
) => {
  return apiClient<PatchKafkaStrimziIoV1Beta2NamespacedKafkaRebalanceApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkarebalances/${args.name}`,
      method: 'PATCH',
      body: args.ioK8SApimachineryPkgApisMetaV1Patch,
      params: {
        pretty: args.pretty,
        dryRun: args.dryRun,
        fieldManager: args.fieldManager,
        fieldValidation: args.fieldValidation,
        force: args.force,
      },
    },
    options
  )
}
export const readKafkaStrimziIoV1Beta2NamespacedKafkaRebalanceStatus = (
  args: ReadKafkaStrimziIoV1Beta2NamespacedKafkaRebalanceStatusApiArg,
  options?: Options
) => {
  return apiClient<ReadKafkaStrimziIoV1Beta2NamespacedKafkaRebalanceStatusApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkarebalances/${args.name}/status`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceKafkaStrimziIoV1Beta2NamespacedKafkaRebalanceStatus = (
  args: ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaRebalanceStatusApiArg,
  options?: Options
) => {
  return apiClient<ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaRebalanceStatusApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkarebalances/${args.name}/status`,
      method: 'PUT',
      body: args.ioStrimziKafkaV1Beta2KafkaRebalance,
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
export const patchKafkaStrimziIoV1Beta2NamespacedKafkaRebalanceStatus = (
  args: PatchKafkaStrimziIoV1Beta2NamespacedKafkaRebalanceStatusApiArg,
  options?: Options
) => {
  return apiClient<PatchKafkaStrimziIoV1Beta2NamespacedKafkaRebalanceStatusApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkarebalances/${args.name}/status`,
      method: 'PATCH',
      body: args.ioK8SApimachineryPkgApisMetaV1Patch,
      params: {
        pretty: args.pretty,
        dryRun: args.dryRun,
        fieldManager: args.fieldManager,
        fieldValidation: args.fieldValidation,
        force: args.force,
      },
    },
    options
  )
}
export const listKafkaStrimziIoV1Beta2NamespacedKafka = (
  args: ListKafkaStrimziIoV1Beta2NamespacedKafkaApiArg,
  options?: Options
) => {
  return apiClient<ListKafkaStrimziIoV1Beta2NamespacedKafkaApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkas`,
      params: {
        pretty: args.pretty,
        allowWatchBookmarks: args.allowWatchBookmarks,
        continue: args['continue'],
        fieldSelector: args.fieldSelector,
        labelSelector: args.labelSelector,
        limit: args.limit,
        resourceVersion: args.resourceVersion,
        resourceVersionMatch: args.resourceVersionMatch,
        sendInitialEvents: args.sendInitialEvents,
        timeoutSeconds: args.timeoutSeconds,
        watch: args.watch,
      },
    },
    options
  )
}
export const createKafkaStrimziIoV1Beta2NamespacedKafka = (
  args: CreateKafkaStrimziIoV1Beta2NamespacedKafkaApiArg,
  options?: Options
) => {
  return apiClient<CreateKafkaStrimziIoV1Beta2NamespacedKafkaApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkas`,
      method: 'POST',
      body: args.ioStrimziKafkaV1Beta2Kafka,
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
export const deleteKafkaStrimziIoV1Beta2CollectionNamespacedKafka = (
  args: DeleteKafkaStrimziIoV1Beta2CollectionNamespacedKafkaApiArg,
  options?: Options
) => {
  return apiClient<DeleteKafkaStrimziIoV1Beta2CollectionNamespacedKafkaApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkas`,
      method: 'DELETE',
      params: {
        pretty: args.pretty,
        allowWatchBookmarks: args.allowWatchBookmarks,
        continue: args['continue'],
        fieldSelector: args.fieldSelector,
        labelSelector: args.labelSelector,
        limit: args.limit,
        resourceVersion: args.resourceVersion,
        resourceVersionMatch: args.resourceVersionMatch,
        sendInitialEvents: args.sendInitialEvents,
        timeoutSeconds: args.timeoutSeconds,
        watch: args.watch,
      },
    },
    options
  )
}
export const readKafkaStrimziIoV1Beta2NamespacedKafka = (
  args: ReadKafkaStrimziIoV1Beta2NamespacedKafkaApiArg,
  options?: Options
) => {
  return apiClient<ReadKafkaStrimziIoV1Beta2NamespacedKafkaApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkas/${args.name}`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceKafkaStrimziIoV1Beta2NamespacedKafka = (
  args: ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaApiArg,
  options?: Options
) => {
  return apiClient<ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkas/${args.name}`,
      method: 'PUT',
      body: args.ioStrimziKafkaV1Beta2Kafka,
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
export const deleteKafkaStrimziIoV1Beta2NamespacedKafka = (
  args: DeleteKafkaStrimziIoV1Beta2NamespacedKafkaApiArg,
  options?: Options
) => {
  return apiClient<DeleteKafkaStrimziIoV1Beta2NamespacedKafkaApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkas/${args.name}`,
      method: 'DELETE',
      body: args.ioK8SApimachineryPkgApisMetaV1DeleteOptions,
      params: {
        pretty: args.pretty,
        dryRun: args.dryRun,
        gracePeriodSeconds: args.gracePeriodSeconds,
        orphanDependents: args.orphanDependents,
        propagationPolicy: args.propagationPolicy,
      },
    },
    options
  )
}
export const patchKafkaStrimziIoV1Beta2NamespacedKafka = (
  args: PatchKafkaStrimziIoV1Beta2NamespacedKafkaApiArg,
  options?: Options
) => {
  return apiClient<PatchKafkaStrimziIoV1Beta2NamespacedKafkaApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkas/${args.name}`,
      method: 'PATCH',
      body: args.ioK8SApimachineryPkgApisMetaV1Patch,
      params: {
        pretty: args.pretty,
        dryRun: args.dryRun,
        fieldManager: args.fieldManager,
        fieldValidation: args.fieldValidation,
        force: args.force,
      },
    },
    options
  )
}
export const readKafkaStrimziIoV1Beta2NamespacedKafkaStatus = (
  args: ReadKafkaStrimziIoV1Beta2NamespacedKafkaStatusApiArg,
  options?: Options
) => {
  return apiClient<ReadKafkaStrimziIoV1Beta2NamespacedKafkaStatusApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkas/${args.name}/status`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceKafkaStrimziIoV1Beta2NamespacedKafkaStatus = (
  args: ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaStatusApiArg,
  options?: Options
) => {
  return apiClient<ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaStatusApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkas/${args.name}/status`,
      method: 'PUT',
      body: args.ioStrimziKafkaV1Beta2Kafka,
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
export const patchKafkaStrimziIoV1Beta2NamespacedKafkaStatus = (
  args: PatchKafkaStrimziIoV1Beta2NamespacedKafkaStatusApiArg,
  options?: Options
) => {
  return apiClient<PatchKafkaStrimziIoV1Beta2NamespacedKafkaStatusApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkas/${args.name}/status`,
      method: 'PATCH',
      body: args.ioK8SApimachineryPkgApisMetaV1Patch,
      params: {
        pretty: args.pretty,
        dryRun: args.dryRun,
        fieldManager: args.fieldManager,
        fieldValidation: args.fieldValidation,
        force: args.force,
      },
    },
    options
  )
}
export const listKafkaStrimziIoV1Beta2NamespacedKafkaTopic = (
  args: ListKafkaStrimziIoV1Beta2NamespacedKafkaTopicApiArg,
  options?: Options
) => {
  return apiClient<ListKafkaStrimziIoV1Beta2NamespacedKafkaTopicApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkatopics`,
      params: {
        pretty: args.pretty,
        allowWatchBookmarks: args.allowWatchBookmarks,
        continue: args['continue'],
        fieldSelector: args.fieldSelector,
        labelSelector: args.labelSelector,
        limit: args.limit,
        resourceVersion: args.resourceVersion,
        resourceVersionMatch: args.resourceVersionMatch,
        sendInitialEvents: args.sendInitialEvents,
        timeoutSeconds: args.timeoutSeconds,
        watch: args.watch,
      },
    },
    options
  )
}
export const createKafkaStrimziIoV1Beta2NamespacedKafkaTopic = (
  args: CreateKafkaStrimziIoV1Beta2NamespacedKafkaTopicApiArg,
  options?: Options
) => {
  return apiClient<CreateKafkaStrimziIoV1Beta2NamespacedKafkaTopicApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkatopics`,
      method: 'POST',
      body: args.ioStrimziKafkaV1Beta2KafkaTopic,
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
export const deleteKafkaStrimziIoV1Beta2CollectionNamespacedKafkaTopic = (
  args: DeleteKafkaStrimziIoV1Beta2CollectionNamespacedKafkaTopicApiArg,
  options?: Options
) => {
  return apiClient<DeleteKafkaStrimziIoV1Beta2CollectionNamespacedKafkaTopicApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkatopics`,
      method: 'DELETE',
      params: {
        pretty: args.pretty,
        allowWatchBookmarks: args.allowWatchBookmarks,
        continue: args['continue'],
        fieldSelector: args.fieldSelector,
        labelSelector: args.labelSelector,
        limit: args.limit,
        resourceVersion: args.resourceVersion,
        resourceVersionMatch: args.resourceVersionMatch,
        sendInitialEvents: args.sendInitialEvents,
        timeoutSeconds: args.timeoutSeconds,
        watch: args.watch,
      },
    },
    options
  )
}
export const readKafkaStrimziIoV1Beta2NamespacedKafkaTopic = (
  args: ReadKafkaStrimziIoV1Beta2NamespacedKafkaTopicApiArg,
  options?: Options
) => {
  return apiClient<ReadKafkaStrimziIoV1Beta2NamespacedKafkaTopicApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkatopics/${args.name}`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceKafkaStrimziIoV1Beta2NamespacedKafkaTopic = (
  args: ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaTopicApiArg,
  options?: Options
) => {
  return apiClient<ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaTopicApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkatopics/${args.name}`,
      method: 'PUT',
      body: args.ioStrimziKafkaV1Beta2KafkaTopic,
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
export const deleteKafkaStrimziIoV1Beta2NamespacedKafkaTopic = (
  args: DeleteKafkaStrimziIoV1Beta2NamespacedKafkaTopicApiArg,
  options?: Options
) => {
  return apiClient<DeleteKafkaStrimziIoV1Beta2NamespacedKafkaTopicApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkatopics/${args.name}`,
      method: 'DELETE',
      body: args.ioK8SApimachineryPkgApisMetaV1DeleteOptions,
      params: {
        pretty: args.pretty,
        dryRun: args.dryRun,
        gracePeriodSeconds: args.gracePeriodSeconds,
        orphanDependents: args.orphanDependents,
        propagationPolicy: args.propagationPolicy,
      },
    },
    options
  )
}
export const patchKafkaStrimziIoV1Beta2NamespacedKafkaTopic = (
  args: PatchKafkaStrimziIoV1Beta2NamespacedKafkaTopicApiArg,
  options?: Options
) => {
  return apiClient<PatchKafkaStrimziIoV1Beta2NamespacedKafkaTopicApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkatopics/${args.name}`,
      method: 'PATCH',
      body: args.ioK8SApimachineryPkgApisMetaV1Patch,
      params: {
        pretty: args.pretty,
        dryRun: args.dryRun,
        fieldManager: args.fieldManager,
        fieldValidation: args.fieldValidation,
        force: args.force,
      },
    },
    options
  )
}
export const readKafkaStrimziIoV1Beta2NamespacedKafkaTopicStatus = (
  args: ReadKafkaStrimziIoV1Beta2NamespacedKafkaTopicStatusApiArg,
  options?: Options
) => {
  return apiClient<ReadKafkaStrimziIoV1Beta2NamespacedKafkaTopicStatusApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkatopics/${args.name}/status`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceKafkaStrimziIoV1Beta2NamespacedKafkaTopicStatus = (
  args: ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaTopicStatusApiArg,
  options?: Options
) => {
  return apiClient<ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaTopicStatusApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkatopics/${args.name}/status`,
      method: 'PUT',
      body: args.ioStrimziKafkaV1Beta2KafkaTopic,
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
export const patchKafkaStrimziIoV1Beta2NamespacedKafkaTopicStatus = (
  args: PatchKafkaStrimziIoV1Beta2NamespacedKafkaTopicStatusApiArg,
  options?: Options
) => {
  return apiClient<PatchKafkaStrimziIoV1Beta2NamespacedKafkaTopicStatusApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkatopics/${args.name}/status`,
      method: 'PATCH',
      body: args.ioK8SApimachineryPkgApisMetaV1Patch,
      params: {
        pretty: args.pretty,
        dryRun: args.dryRun,
        fieldManager: args.fieldManager,
        fieldValidation: args.fieldValidation,
        force: args.force,
      },
    },
    options
  )
}
export const listKafkaStrimziIoV1Beta2NamespacedKafkaUser = (
  args: ListKafkaStrimziIoV1Beta2NamespacedKafkaUserApiArg,
  options?: Options
) => {
  return apiClient<ListKafkaStrimziIoV1Beta2NamespacedKafkaUserApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkausers`,
      params: {
        pretty: args.pretty,
        allowWatchBookmarks: args.allowWatchBookmarks,
        continue: args['continue'],
        fieldSelector: args.fieldSelector,
        labelSelector: args.labelSelector,
        limit: args.limit,
        resourceVersion: args.resourceVersion,
        resourceVersionMatch: args.resourceVersionMatch,
        sendInitialEvents: args.sendInitialEvents,
        timeoutSeconds: args.timeoutSeconds,
        watch: args.watch,
      },
    },
    options
  )
}
export const createKafkaStrimziIoV1Beta2NamespacedKafkaUser = (
  args: CreateKafkaStrimziIoV1Beta2NamespacedKafkaUserApiArg,
  options?: Options
) => {
  return apiClient<CreateKafkaStrimziIoV1Beta2NamespacedKafkaUserApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkausers`,
      method: 'POST',
      body: args.ioStrimziKafkaV1Beta2KafkaUser,
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
export const deleteKafkaStrimziIoV1Beta2CollectionNamespacedKafkaUser = (
  args: DeleteKafkaStrimziIoV1Beta2CollectionNamespacedKafkaUserApiArg,
  options?: Options
) => {
  return apiClient<DeleteKafkaStrimziIoV1Beta2CollectionNamespacedKafkaUserApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkausers`,
      method: 'DELETE',
      params: {
        pretty: args.pretty,
        allowWatchBookmarks: args.allowWatchBookmarks,
        continue: args['continue'],
        fieldSelector: args.fieldSelector,
        labelSelector: args.labelSelector,
        limit: args.limit,
        resourceVersion: args.resourceVersion,
        resourceVersionMatch: args.resourceVersionMatch,
        sendInitialEvents: args.sendInitialEvents,
        timeoutSeconds: args.timeoutSeconds,
        watch: args.watch,
      },
    },
    options
  )
}
export const readKafkaStrimziIoV1Beta2NamespacedKafkaUser = (
  args: ReadKafkaStrimziIoV1Beta2NamespacedKafkaUserApiArg,
  options?: Options
) => {
  return apiClient<ReadKafkaStrimziIoV1Beta2NamespacedKafkaUserApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkausers/${args.name}`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceKafkaStrimziIoV1Beta2NamespacedKafkaUser = (
  args: ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaUserApiArg,
  options?: Options
) => {
  return apiClient<ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaUserApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkausers/${args.name}`,
      method: 'PUT',
      body: args.ioStrimziKafkaV1Beta2KafkaUser,
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
export const deleteKafkaStrimziIoV1Beta2NamespacedKafkaUser = (
  args: DeleteKafkaStrimziIoV1Beta2NamespacedKafkaUserApiArg,
  options?: Options
) => {
  return apiClient<DeleteKafkaStrimziIoV1Beta2NamespacedKafkaUserApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkausers/${args.name}`,
      method: 'DELETE',
      body: args.ioK8SApimachineryPkgApisMetaV1DeleteOptions,
      params: {
        pretty: args.pretty,
        dryRun: args.dryRun,
        gracePeriodSeconds: args.gracePeriodSeconds,
        orphanDependents: args.orphanDependents,
        propagationPolicy: args.propagationPolicy,
      },
    },
    options
  )
}
export const patchKafkaStrimziIoV1Beta2NamespacedKafkaUser = (
  args: PatchKafkaStrimziIoV1Beta2NamespacedKafkaUserApiArg,
  options?: Options
) => {
  return apiClient<PatchKafkaStrimziIoV1Beta2NamespacedKafkaUserApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkausers/${args.name}`,
      method: 'PATCH',
      body: args.ioK8SApimachineryPkgApisMetaV1Patch,
      params: {
        pretty: args.pretty,
        dryRun: args.dryRun,
        fieldManager: args.fieldManager,
        fieldValidation: args.fieldValidation,
        force: args.force,
      },
    },
    options
  )
}
export const readKafkaStrimziIoV1Beta2NamespacedKafkaUserStatus = (
  args: ReadKafkaStrimziIoV1Beta2NamespacedKafkaUserStatusApiArg,
  options?: Options
) => {
  return apiClient<ReadKafkaStrimziIoV1Beta2NamespacedKafkaUserStatusApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkausers/${args.name}/status`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceKafkaStrimziIoV1Beta2NamespacedKafkaUserStatus = (
  args: ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaUserStatusApiArg,
  options?: Options
) => {
  return apiClient<ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaUserStatusApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkausers/${args.name}/status`,
      method: 'PUT',
      body: args.ioStrimziKafkaV1Beta2KafkaUser,
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
export const patchKafkaStrimziIoV1Beta2NamespacedKafkaUserStatus = (
  args: PatchKafkaStrimziIoV1Beta2NamespacedKafkaUserStatusApiArg,
  options?: Options
) => {
  return apiClient<PatchKafkaStrimziIoV1Beta2NamespacedKafkaUserStatusApiResponse>(
    {
      path: `/apis/kafka.strimzi.io/v1beta2/namespaces/${args['namespace']}/kafkausers/${args.name}/status`,
      method: 'PATCH',
      body: args.ioK8SApimachineryPkgApisMetaV1Patch,
      params: {
        pretty: args.pretty,
        dryRun: args.dryRun,
        fieldManager: args.fieldManager,
        fieldValidation: args.fieldValidation,
        force: args.force,
      },
    },
    options
  )
}
export type ListKafkaStrimziIoV1Beta2KafkaBridgeForAllNamespacesApiResponse =
  /** status 200 OK */ IoStrimziKafkaV1Beta2KafkaBridgeList
export type ListKafkaStrimziIoV1Beta2KafkaBridgeForAllNamespacesApiArg = {
  /** allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
  allowWatchBookmarks?: boolean
  /** The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
    
    This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. */
  continue?: string
  /** A selector to restrict the list of returned objects by their fields. Defaults to everything. */
  fieldSelector?: string
  /** A selector to restrict the list of returned objects by their labels. Defaults to everything. */
  labelSelector?: string
  /** limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
    
    The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. */
  limit?: number
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
  /** resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersionMatch?: string
  /** `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
    
    When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
      is interpreted as "data at least as new as the provided `resourceVersion`"
      and the bookmark event is send when the state is synced
      to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
      If `resourceVersion` is unset, this is interpreted as "consistent read" and the
      bookmark event is send when the state is synced at least to the moment
      when request started being processed.
    - `resourceVersionMatch` set to any other value or unset
      Invalid error is returned.
    
    Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise. */
  sendInitialEvents?: boolean
  /** Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
  timeoutSeconds?: number
  /** Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
  watch?: boolean
}
export type ListKafkaStrimziIoV1Beta2KafkaConnectorForAllNamespacesApiResponse =
  /** status 200 OK */ IoStrimziKafkaV1Beta2KafkaConnectorList
export type ListKafkaStrimziIoV1Beta2KafkaConnectorForAllNamespacesApiArg = {
  /** allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
  allowWatchBookmarks?: boolean
  /** The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
    
    This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. */
  continue?: string
  /** A selector to restrict the list of returned objects by their fields. Defaults to everything. */
  fieldSelector?: string
  /** A selector to restrict the list of returned objects by their labels. Defaults to everything. */
  labelSelector?: string
  /** limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
    
    The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. */
  limit?: number
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
  /** resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersionMatch?: string
  /** `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
    
    When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
      is interpreted as "data at least as new as the provided `resourceVersion`"
      and the bookmark event is send when the state is synced
      to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
      If `resourceVersion` is unset, this is interpreted as "consistent read" and the
      bookmark event is send when the state is synced at least to the moment
      when request started being processed.
    - `resourceVersionMatch` set to any other value or unset
      Invalid error is returned.
    
    Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise. */
  sendInitialEvents?: boolean
  /** Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
  timeoutSeconds?: number
  /** Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
  watch?: boolean
}
export type ListKafkaStrimziIoV1Beta2KafkaConnectForAllNamespacesApiResponse =
  /** status 200 OK */ IoStrimziKafkaV1Beta2KafkaConnectList
export type ListKafkaStrimziIoV1Beta2KafkaConnectForAllNamespacesApiArg = {
  /** allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
  allowWatchBookmarks?: boolean
  /** The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
    
    This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. */
  continue?: string
  /** A selector to restrict the list of returned objects by their fields. Defaults to everything. */
  fieldSelector?: string
  /** A selector to restrict the list of returned objects by their labels. Defaults to everything. */
  labelSelector?: string
  /** limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
    
    The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. */
  limit?: number
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
  /** resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersionMatch?: string
  /** `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
    
    When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
      is interpreted as "data at least as new as the provided `resourceVersion`"
      and the bookmark event is send when the state is synced
      to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
      If `resourceVersion` is unset, this is interpreted as "consistent read" and the
      bookmark event is send when the state is synced at least to the moment
      when request started being processed.
    - `resourceVersionMatch` set to any other value or unset
      Invalid error is returned.
    
    Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise. */
  sendInitialEvents?: boolean
  /** Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
  timeoutSeconds?: number
  /** Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
  watch?: boolean
}
export type ListKafkaStrimziIoV1Beta2KafkaMirrorMaker2ForAllNamespacesApiResponse =
  /** status 200 OK */ IoStrimziKafkaV1Beta2KafkaMirrorMaker2List
export type ListKafkaStrimziIoV1Beta2KafkaMirrorMaker2ForAllNamespacesApiArg = {
  /** allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
  allowWatchBookmarks?: boolean
  /** The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
    
    This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. */
  continue?: string
  /** A selector to restrict the list of returned objects by their fields. Defaults to everything. */
  fieldSelector?: string
  /** A selector to restrict the list of returned objects by their labels. Defaults to everything. */
  labelSelector?: string
  /** limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
    
    The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. */
  limit?: number
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
  /** resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersionMatch?: string
  /** `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
    
    When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
      is interpreted as "data at least as new as the provided `resourceVersion`"
      and the bookmark event is send when the state is synced
      to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
      If `resourceVersion` is unset, this is interpreted as "consistent read" and the
      bookmark event is send when the state is synced at least to the moment
      when request started being processed.
    - `resourceVersionMatch` set to any other value or unset
      Invalid error is returned.
    
    Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise. */
  sendInitialEvents?: boolean
  /** Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
  timeoutSeconds?: number
  /** Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
  watch?: boolean
}
export type ListKafkaStrimziIoV1Beta2KafkaMirrorMakerForAllNamespacesApiResponse =
  /** status 200 OK */ IoStrimziKafkaV1Beta2KafkaMirrorMakerList
export type ListKafkaStrimziIoV1Beta2KafkaMirrorMakerForAllNamespacesApiArg = {
  /** allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
  allowWatchBookmarks?: boolean
  /** The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
    
    This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. */
  continue?: string
  /** A selector to restrict the list of returned objects by their fields. Defaults to everything. */
  fieldSelector?: string
  /** A selector to restrict the list of returned objects by their labels. Defaults to everything. */
  labelSelector?: string
  /** limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
    
    The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. */
  limit?: number
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
  /** resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersionMatch?: string
  /** `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
    
    When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
      is interpreted as "data at least as new as the provided `resourceVersion`"
      and the bookmark event is send when the state is synced
      to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
      If `resourceVersion` is unset, this is interpreted as "consistent read" and the
      bookmark event is send when the state is synced at least to the moment
      when request started being processed.
    - `resourceVersionMatch` set to any other value or unset
      Invalid error is returned.
    
    Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise. */
  sendInitialEvents?: boolean
  /** Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
  timeoutSeconds?: number
  /** Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
  watch?: boolean
}
export type ListKafkaStrimziIoV1Beta2KafkaRebalanceForAllNamespacesApiResponse =
  /** status 200 OK */ IoStrimziKafkaV1Beta2KafkaRebalanceList
export type ListKafkaStrimziIoV1Beta2KafkaRebalanceForAllNamespacesApiArg = {
  /** allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
  allowWatchBookmarks?: boolean
  /** The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
    
    This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. */
  continue?: string
  /** A selector to restrict the list of returned objects by their fields. Defaults to everything. */
  fieldSelector?: string
  /** A selector to restrict the list of returned objects by their labels. Defaults to everything. */
  labelSelector?: string
  /** limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
    
    The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. */
  limit?: number
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
  /** resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersionMatch?: string
  /** `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
    
    When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
      is interpreted as "data at least as new as the provided `resourceVersion`"
      and the bookmark event is send when the state is synced
      to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
      If `resourceVersion` is unset, this is interpreted as "consistent read" and the
      bookmark event is send when the state is synced at least to the moment
      when request started being processed.
    - `resourceVersionMatch` set to any other value or unset
      Invalid error is returned.
    
    Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise. */
  sendInitialEvents?: boolean
  /** Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
  timeoutSeconds?: number
  /** Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
  watch?: boolean
}
export type ListKafkaStrimziIoV1Beta2KafkaForAllNamespacesApiResponse =
  /** status 200 OK */ IoStrimziKafkaV1Beta2KafkaList
export type ListKafkaStrimziIoV1Beta2KafkaForAllNamespacesApiArg = {
  /** allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
  allowWatchBookmarks?: boolean
  /** The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
    
    This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. */
  continue?: string
  /** A selector to restrict the list of returned objects by their fields. Defaults to everything. */
  fieldSelector?: string
  /** A selector to restrict the list of returned objects by their labels. Defaults to everything. */
  labelSelector?: string
  /** limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
    
    The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. */
  limit?: number
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
  /** resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersionMatch?: string
  /** `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
    
    When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
      is interpreted as "data at least as new as the provided `resourceVersion`"
      and the bookmark event is send when the state is synced
      to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
      If `resourceVersion` is unset, this is interpreted as "consistent read" and the
      bookmark event is send when the state is synced at least to the moment
      when request started being processed.
    - `resourceVersionMatch` set to any other value or unset
      Invalid error is returned.
    
    Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise. */
  sendInitialEvents?: boolean
  /** Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
  timeoutSeconds?: number
  /** Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
  watch?: boolean
}
export type ListKafkaStrimziIoV1Beta2KafkaTopicForAllNamespacesApiResponse =
  /** status 200 OK */ IoStrimziKafkaV1Beta2KafkaTopicList
export type ListKafkaStrimziIoV1Beta2KafkaTopicForAllNamespacesApiArg = {
  /** allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
  allowWatchBookmarks?: boolean
  /** The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
    
    This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. */
  continue?: string
  /** A selector to restrict the list of returned objects by their fields. Defaults to everything. */
  fieldSelector?: string
  /** A selector to restrict the list of returned objects by their labels. Defaults to everything. */
  labelSelector?: string
  /** limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
    
    The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. */
  limit?: number
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
  /** resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersionMatch?: string
  /** `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
    
    When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
      is interpreted as "data at least as new as the provided `resourceVersion`"
      and the bookmark event is send when the state is synced
      to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
      If `resourceVersion` is unset, this is interpreted as "consistent read" and the
      bookmark event is send when the state is synced at least to the moment
      when request started being processed.
    - `resourceVersionMatch` set to any other value or unset
      Invalid error is returned.
    
    Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise. */
  sendInitialEvents?: boolean
  /** Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
  timeoutSeconds?: number
  /** Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
  watch?: boolean
}
export type ListKafkaStrimziIoV1Beta2KafkaUserForAllNamespacesApiResponse =
  /** status 200 OK */ IoStrimziKafkaV1Beta2KafkaUserList
export type ListKafkaStrimziIoV1Beta2KafkaUserForAllNamespacesApiArg = {
  /** allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
  allowWatchBookmarks?: boolean
  /** The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
    
    This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. */
  continue?: string
  /** A selector to restrict the list of returned objects by their fields. Defaults to everything. */
  fieldSelector?: string
  /** A selector to restrict the list of returned objects by their labels. Defaults to everything. */
  labelSelector?: string
  /** limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
    
    The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. */
  limit?: number
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
  /** resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersionMatch?: string
  /** `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
    
    When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
      is interpreted as "data at least as new as the provided `resourceVersion`"
      and the bookmark event is send when the state is synced
      to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
      If `resourceVersion` is unset, this is interpreted as "consistent read" and the
      bookmark event is send when the state is synced at least to the moment
      when request started being processed.
    - `resourceVersionMatch` set to any other value or unset
      Invalid error is returned.
    
    Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise. */
  sendInitialEvents?: boolean
  /** Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
  timeoutSeconds?: number
  /** Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
  watch?: boolean
}
export type ListKafkaStrimziIoV1Beta2NamespacedKafkaBridgeApiResponse =
  /** status 200 OK */ IoStrimziKafkaV1Beta2KafkaBridgeList
export type ListKafkaStrimziIoV1Beta2NamespacedKafkaBridgeApiArg = {
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
  allowWatchBookmarks?: boolean
  /** The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
    
    This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. */
  continue?: string
  /** A selector to restrict the list of returned objects by their fields. Defaults to everything. */
  fieldSelector?: string
  /** A selector to restrict the list of returned objects by their labels. Defaults to everything. */
  labelSelector?: string
  /** limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
    
    The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. */
  limit?: number
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
  /** resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersionMatch?: string
  /** `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
    
    When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
      is interpreted as "data at least as new as the provided `resourceVersion`"
      and the bookmark event is send when the state is synced
      to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
      If `resourceVersion` is unset, this is interpreted as "consistent read" and the
      bookmark event is send when the state is synced at least to the moment
      when request started being processed.
    - `resourceVersionMatch` set to any other value or unset
      Invalid error is returned.
    
    Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise. */
  sendInitialEvents?: boolean
  /** Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
  timeoutSeconds?: number
  /** Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
  watch?: boolean
}
export type CreateKafkaStrimziIoV1Beta2NamespacedKafkaBridgeApiResponse =
  /** status 200 OK */
  | IoStrimziKafkaV1Beta2KafkaBridge
  | /** status 201 Created */ IoStrimziKafkaV1Beta2KafkaBridge
  | /** status 202 Accepted */ IoStrimziKafkaV1Beta2KafkaBridge
export type CreateKafkaStrimziIoV1Beta2NamespacedKafkaBridgeApiArg = {
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
  ioStrimziKafkaV1Beta2KafkaBridge: IoStrimziKafkaV1Beta2KafkaBridge
}
export type DeleteKafkaStrimziIoV1Beta2CollectionNamespacedKafkaBridgeApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteKafkaStrimziIoV1Beta2CollectionNamespacedKafkaBridgeApiArg = {
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
  allowWatchBookmarks?: boolean
  /** The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
    
    This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. */
  continue?: string
  /** A selector to restrict the list of returned objects by their fields. Defaults to everything. */
  fieldSelector?: string
  /** A selector to restrict the list of returned objects by their labels. Defaults to everything. */
  labelSelector?: string
  /** limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
    
    The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. */
  limit?: number
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
  /** resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersionMatch?: string
  /** `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
    
    When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
      is interpreted as "data at least as new as the provided `resourceVersion`"
      and the bookmark event is send when the state is synced
      to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
      If `resourceVersion` is unset, this is interpreted as "consistent read" and the
      bookmark event is send when the state is synced at least to the moment
      when request started being processed.
    - `resourceVersionMatch` set to any other value or unset
      Invalid error is returned.
    
    Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise. */
  sendInitialEvents?: boolean
  /** Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
  timeoutSeconds?: number
  /** Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
  watch?: boolean
}
export type ReadKafkaStrimziIoV1Beta2NamespacedKafkaBridgeApiResponse =
  /** status 200 OK */ IoStrimziKafkaV1Beta2KafkaBridge
export type ReadKafkaStrimziIoV1Beta2NamespacedKafkaBridgeApiArg = {
  /** name of the KafkaBridge */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaBridgeApiResponse =
  /** status 200 OK */
  | IoStrimziKafkaV1Beta2KafkaBridge
  | /** status 201 Created */ IoStrimziKafkaV1Beta2KafkaBridge
export type ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaBridgeApiArg = {
  /** name of the KafkaBridge */
  name: string
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
  ioStrimziKafkaV1Beta2KafkaBridge: IoStrimziKafkaV1Beta2KafkaBridge
}
export type DeleteKafkaStrimziIoV1Beta2NamespacedKafkaBridgeApiResponse =
  /** status 200 OK */
  | IoK8SApimachineryPkgApisMetaV1Status
  | /** status 202 Accepted */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteKafkaStrimziIoV1Beta2NamespacedKafkaBridgeApiArg = {
  /** name of the KafkaBridge */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. */
  gracePeriodSeconds?: number
  /** Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both. */
  orphanDependents?: boolean
  /** Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground. */
  propagationPolicy?: string
  ioK8SApimachineryPkgApisMetaV1DeleteOptions: IoK8SApimachineryPkgApisMetaV1DeleteOptions
}
export type PatchKafkaStrimziIoV1Beta2NamespacedKafkaBridgeApiResponse =
  /** status 200 OK */ IoStrimziKafkaV1Beta2KafkaBridge
export type PatchKafkaStrimziIoV1Beta2NamespacedKafkaBridgeApiArg = {
  /** name of the KafkaBridge */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
  /** Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. */
  force?: boolean
  ioK8SApimachineryPkgApisMetaV1Patch: IoK8SApimachineryPkgApisMetaV1Patch
}
export type ReadKafkaStrimziIoV1Beta2NamespacedKafkaBridgeScaleApiResponse =
  /** status 200 OK */ IoK8SApiAutoscalingV1Scale
export type ReadKafkaStrimziIoV1Beta2NamespacedKafkaBridgeScaleApiArg = {
  /** name of the KafkaBridge */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaBridgeScaleApiResponse =
  /** status 200 OK */
  | IoK8SApiAutoscalingV1Scale
  | /** status 201 Created */ IoK8SApiAutoscalingV1Scale
export type ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaBridgeScaleApiArg = {
  /** name of the KafkaBridge */
  name: string
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
  ioK8SApiAutoscalingV1Scale: IoK8SApiAutoscalingV1Scale
}
export type PatchKafkaStrimziIoV1Beta2NamespacedKafkaBridgeScaleApiResponse =
  /** status 200 OK */ IoK8SApiAutoscalingV1Scale
export type PatchKafkaStrimziIoV1Beta2NamespacedKafkaBridgeScaleApiArg = {
  /** name of the KafkaBridge */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
  /** Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. */
  force?: boolean
  ioK8SApimachineryPkgApisMetaV1Patch: IoK8SApimachineryPkgApisMetaV1Patch
}
export type ReadKafkaStrimziIoV1Beta2NamespacedKafkaBridgeStatusApiResponse =
  /** status 200 OK */ IoStrimziKafkaV1Beta2KafkaBridge
export type ReadKafkaStrimziIoV1Beta2NamespacedKafkaBridgeStatusApiArg = {
  /** name of the KafkaBridge */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaBridgeStatusApiResponse =
  /** status 200 OK */
  | IoStrimziKafkaV1Beta2KafkaBridge
  | /** status 201 Created */ IoStrimziKafkaV1Beta2KafkaBridge
export type ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaBridgeStatusApiArg = {
  /** name of the KafkaBridge */
  name: string
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
  ioStrimziKafkaV1Beta2KafkaBridge: IoStrimziKafkaV1Beta2KafkaBridge
}
export type PatchKafkaStrimziIoV1Beta2NamespacedKafkaBridgeStatusApiResponse =
  /** status 200 OK */ IoStrimziKafkaV1Beta2KafkaBridge
export type PatchKafkaStrimziIoV1Beta2NamespacedKafkaBridgeStatusApiArg = {
  /** name of the KafkaBridge */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
  /** Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. */
  force?: boolean
  ioK8SApimachineryPkgApisMetaV1Patch: IoK8SApimachineryPkgApisMetaV1Patch
}
export type ListKafkaStrimziIoV1Beta2NamespacedKafkaConnectorApiResponse =
  /** status 200 OK */ IoStrimziKafkaV1Beta2KafkaConnectorList
export type ListKafkaStrimziIoV1Beta2NamespacedKafkaConnectorApiArg = {
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
  allowWatchBookmarks?: boolean
  /** The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
    
    This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. */
  continue?: string
  /** A selector to restrict the list of returned objects by their fields. Defaults to everything. */
  fieldSelector?: string
  /** A selector to restrict the list of returned objects by their labels. Defaults to everything. */
  labelSelector?: string
  /** limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
    
    The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. */
  limit?: number
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
  /** resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersionMatch?: string
  /** `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
    
    When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
      is interpreted as "data at least as new as the provided `resourceVersion`"
      and the bookmark event is send when the state is synced
      to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
      If `resourceVersion` is unset, this is interpreted as "consistent read" and the
      bookmark event is send when the state is synced at least to the moment
      when request started being processed.
    - `resourceVersionMatch` set to any other value or unset
      Invalid error is returned.
    
    Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise. */
  sendInitialEvents?: boolean
  /** Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
  timeoutSeconds?: number
  /** Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
  watch?: boolean
}
export type CreateKafkaStrimziIoV1Beta2NamespacedKafkaConnectorApiResponse =
  /** status 200 OK */
  | IoStrimziKafkaV1Beta2KafkaConnector
  | /** status 201 Created */ IoStrimziKafkaV1Beta2KafkaConnector
  | /** status 202 Accepted */ IoStrimziKafkaV1Beta2KafkaConnector
export type CreateKafkaStrimziIoV1Beta2NamespacedKafkaConnectorApiArg = {
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
  ioStrimziKafkaV1Beta2KafkaConnector: IoStrimziKafkaV1Beta2KafkaConnector
}
export type DeleteKafkaStrimziIoV1Beta2CollectionNamespacedKafkaConnectorApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteKafkaStrimziIoV1Beta2CollectionNamespacedKafkaConnectorApiArg =
  {
    /** object name and auth scope, such as for teams and projects */
    namespace: string
    /** If 'true', then the output is pretty printed. */
    pretty?: string
    /** allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
    allowWatchBookmarks?: boolean
    /** The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
    
    This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. */
    continue?: string
    /** A selector to restrict the list of returned objects by their fields. Defaults to everything. */
    fieldSelector?: string
    /** A selector to restrict the list of returned objects by their labels. Defaults to everything. */
    labelSelector?: string
    /** limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
    
    The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. */
    limit?: number
    /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
    resourceVersion?: string
    /** resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
    resourceVersionMatch?: string
    /** `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
    
    When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
      is interpreted as "data at least as new as the provided `resourceVersion`"
      and the bookmark event is send when the state is synced
      to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
      If `resourceVersion` is unset, this is interpreted as "consistent read" and the
      bookmark event is send when the state is synced at least to the moment
      when request started being processed.
    - `resourceVersionMatch` set to any other value or unset
      Invalid error is returned.
    
    Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise. */
    sendInitialEvents?: boolean
    /** Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
    timeoutSeconds?: number
    /** Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
    watch?: boolean
  }
export type ReadKafkaStrimziIoV1Beta2NamespacedKafkaConnectorApiResponse =
  /** status 200 OK */ IoStrimziKafkaV1Beta2KafkaConnector
export type ReadKafkaStrimziIoV1Beta2NamespacedKafkaConnectorApiArg = {
  /** name of the KafkaConnector */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaConnectorApiResponse =
  /** status 200 OK */
  | IoStrimziKafkaV1Beta2KafkaConnector
  | /** status 201 Created */ IoStrimziKafkaV1Beta2KafkaConnector
export type ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaConnectorApiArg = {
  /** name of the KafkaConnector */
  name: string
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
  ioStrimziKafkaV1Beta2KafkaConnector: IoStrimziKafkaV1Beta2KafkaConnector
}
export type DeleteKafkaStrimziIoV1Beta2NamespacedKafkaConnectorApiResponse =
  /** status 200 OK */
  | IoK8SApimachineryPkgApisMetaV1Status
  | /** status 202 Accepted */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteKafkaStrimziIoV1Beta2NamespacedKafkaConnectorApiArg = {
  /** name of the KafkaConnector */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. */
  gracePeriodSeconds?: number
  /** Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both. */
  orphanDependents?: boolean
  /** Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground. */
  propagationPolicy?: string
  ioK8SApimachineryPkgApisMetaV1DeleteOptions: IoK8SApimachineryPkgApisMetaV1DeleteOptions
}
export type PatchKafkaStrimziIoV1Beta2NamespacedKafkaConnectorApiResponse =
  /** status 200 OK */ IoStrimziKafkaV1Beta2KafkaConnector
export type PatchKafkaStrimziIoV1Beta2NamespacedKafkaConnectorApiArg = {
  /** name of the KafkaConnector */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
  /** Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. */
  force?: boolean
  ioK8SApimachineryPkgApisMetaV1Patch: IoK8SApimachineryPkgApisMetaV1Patch
}
export type ReadKafkaStrimziIoV1Beta2NamespacedKafkaConnectorScaleApiResponse =
  /** status 200 OK */ IoK8SApiAutoscalingV1Scale
export type ReadKafkaStrimziIoV1Beta2NamespacedKafkaConnectorScaleApiArg = {
  /** name of the KafkaConnector */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaConnectorScaleApiResponse =
  /** status 200 OK */
  | IoK8SApiAutoscalingV1Scale
  | /** status 201 Created */ IoK8SApiAutoscalingV1Scale
export type ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaConnectorScaleApiArg = {
  /** name of the KafkaConnector */
  name: string
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
  ioK8SApiAutoscalingV1Scale: IoK8SApiAutoscalingV1Scale
}
export type PatchKafkaStrimziIoV1Beta2NamespacedKafkaConnectorScaleApiResponse =
  /** status 200 OK */ IoK8SApiAutoscalingV1Scale
export type PatchKafkaStrimziIoV1Beta2NamespacedKafkaConnectorScaleApiArg = {
  /** name of the KafkaConnector */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
  /** Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. */
  force?: boolean
  ioK8SApimachineryPkgApisMetaV1Patch: IoK8SApimachineryPkgApisMetaV1Patch
}
export type ReadKafkaStrimziIoV1Beta2NamespacedKafkaConnectorStatusApiResponse =
  /** status 200 OK */ IoStrimziKafkaV1Beta2KafkaConnector
export type ReadKafkaStrimziIoV1Beta2NamespacedKafkaConnectorStatusApiArg = {
  /** name of the KafkaConnector */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaConnectorStatusApiResponse =
  /** status 200 OK */
  | IoStrimziKafkaV1Beta2KafkaConnector
  | /** status 201 Created */ IoStrimziKafkaV1Beta2KafkaConnector
export type ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaConnectorStatusApiArg = {
  /** name of the KafkaConnector */
  name: string
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
  ioStrimziKafkaV1Beta2KafkaConnector: IoStrimziKafkaV1Beta2KafkaConnector
}
export type PatchKafkaStrimziIoV1Beta2NamespacedKafkaConnectorStatusApiResponse =
  /** status 200 OK */ IoStrimziKafkaV1Beta2KafkaConnector
export type PatchKafkaStrimziIoV1Beta2NamespacedKafkaConnectorStatusApiArg = {
  /** name of the KafkaConnector */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
  /** Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. */
  force?: boolean
  ioK8SApimachineryPkgApisMetaV1Patch: IoK8SApimachineryPkgApisMetaV1Patch
}
export type ListKafkaStrimziIoV1Beta2NamespacedKafkaConnectApiResponse =
  /** status 200 OK */ IoStrimziKafkaV1Beta2KafkaConnectList
export type ListKafkaStrimziIoV1Beta2NamespacedKafkaConnectApiArg = {
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
  allowWatchBookmarks?: boolean
  /** The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
    
    This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. */
  continue?: string
  /** A selector to restrict the list of returned objects by their fields. Defaults to everything. */
  fieldSelector?: string
  /** A selector to restrict the list of returned objects by their labels. Defaults to everything. */
  labelSelector?: string
  /** limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
    
    The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. */
  limit?: number
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
  /** resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersionMatch?: string
  /** `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
    
    When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
      is interpreted as "data at least as new as the provided `resourceVersion`"
      and the bookmark event is send when the state is synced
      to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
      If `resourceVersion` is unset, this is interpreted as "consistent read" and the
      bookmark event is send when the state is synced at least to the moment
      when request started being processed.
    - `resourceVersionMatch` set to any other value or unset
      Invalid error is returned.
    
    Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise. */
  sendInitialEvents?: boolean
  /** Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
  timeoutSeconds?: number
  /** Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
  watch?: boolean
}
export type CreateKafkaStrimziIoV1Beta2NamespacedKafkaConnectApiResponse =
  /** status 200 OK */
  | IoStrimziKafkaV1Beta2KafkaConnect
  | /** status 201 Created */ IoStrimziKafkaV1Beta2KafkaConnect
  | /** status 202 Accepted */ IoStrimziKafkaV1Beta2KafkaConnect
export type CreateKafkaStrimziIoV1Beta2NamespacedKafkaConnectApiArg = {
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
  ioStrimziKafkaV1Beta2KafkaConnect: IoStrimziKafkaV1Beta2KafkaConnect
}
export type DeleteKafkaStrimziIoV1Beta2CollectionNamespacedKafkaConnectApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteKafkaStrimziIoV1Beta2CollectionNamespacedKafkaConnectApiArg =
  {
    /** object name and auth scope, such as for teams and projects */
    namespace: string
    /** If 'true', then the output is pretty printed. */
    pretty?: string
    /** allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
    allowWatchBookmarks?: boolean
    /** The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
    
    This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. */
    continue?: string
    /** A selector to restrict the list of returned objects by their fields. Defaults to everything. */
    fieldSelector?: string
    /** A selector to restrict the list of returned objects by their labels. Defaults to everything. */
    labelSelector?: string
    /** limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
    
    The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. */
    limit?: number
    /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
    resourceVersion?: string
    /** resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
    resourceVersionMatch?: string
    /** `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
    
    When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
      is interpreted as "data at least as new as the provided `resourceVersion`"
      and the bookmark event is send when the state is synced
      to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
      If `resourceVersion` is unset, this is interpreted as "consistent read" and the
      bookmark event is send when the state is synced at least to the moment
      when request started being processed.
    - `resourceVersionMatch` set to any other value or unset
      Invalid error is returned.
    
    Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise. */
    sendInitialEvents?: boolean
    /** Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
    timeoutSeconds?: number
    /** Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
    watch?: boolean
  }
export type ReadKafkaStrimziIoV1Beta2NamespacedKafkaConnectApiResponse =
  /** status 200 OK */ IoStrimziKafkaV1Beta2KafkaConnect
export type ReadKafkaStrimziIoV1Beta2NamespacedKafkaConnectApiArg = {
  /** name of the KafkaConnect */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaConnectApiResponse =
  /** status 200 OK */
  | IoStrimziKafkaV1Beta2KafkaConnect
  | /** status 201 Created */ IoStrimziKafkaV1Beta2KafkaConnect
export type ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaConnectApiArg = {
  /** name of the KafkaConnect */
  name: string
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
  ioStrimziKafkaV1Beta2KafkaConnect: IoStrimziKafkaV1Beta2KafkaConnect
}
export type DeleteKafkaStrimziIoV1Beta2NamespacedKafkaConnectApiResponse =
  /** status 200 OK */
  | IoK8SApimachineryPkgApisMetaV1Status
  | /** status 202 Accepted */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteKafkaStrimziIoV1Beta2NamespacedKafkaConnectApiArg = {
  /** name of the KafkaConnect */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. */
  gracePeriodSeconds?: number
  /** Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both. */
  orphanDependents?: boolean
  /** Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground. */
  propagationPolicy?: string
  ioK8SApimachineryPkgApisMetaV1DeleteOptions: IoK8SApimachineryPkgApisMetaV1DeleteOptions
}
export type PatchKafkaStrimziIoV1Beta2NamespacedKafkaConnectApiResponse =
  /** status 200 OK */ IoStrimziKafkaV1Beta2KafkaConnect
export type PatchKafkaStrimziIoV1Beta2NamespacedKafkaConnectApiArg = {
  /** name of the KafkaConnect */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
  /** Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. */
  force?: boolean
  ioK8SApimachineryPkgApisMetaV1Patch: IoK8SApimachineryPkgApisMetaV1Patch
}
export type ReadKafkaStrimziIoV1Beta2NamespacedKafkaConnectScaleApiResponse =
  /** status 200 OK */ IoK8SApiAutoscalingV1Scale
export type ReadKafkaStrimziIoV1Beta2NamespacedKafkaConnectScaleApiArg = {
  /** name of the KafkaConnect */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaConnectScaleApiResponse =
  /** status 200 OK */
  | IoK8SApiAutoscalingV1Scale
  | /** status 201 Created */ IoK8SApiAutoscalingV1Scale
export type ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaConnectScaleApiArg = {
  /** name of the KafkaConnect */
  name: string
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
  ioK8SApiAutoscalingV1Scale: IoK8SApiAutoscalingV1Scale
}
export type PatchKafkaStrimziIoV1Beta2NamespacedKafkaConnectScaleApiResponse =
  /** status 200 OK */ IoK8SApiAutoscalingV1Scale
export type PatchKafkaStrimziIoV1Beta2NamespacedKafkaConnectScaleApiArg = {
  /** name of the KafkaConnect */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
  /** Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. */
  force?: boolean
  ioK8SApimachineryPkgApisMetaV1Patch: IoK8SApimachineryPkgApisMetaV1Patch
}
export type ReadKafkaStrimziIoV1Beta2NamespacedKafkaConnectStatusApiResponse =
  /** status 200 OK */ IoStrimziKafkaV1Beta2KafkaConnect
export type ReadKafkaStrimziIoV1Beta2NamespacedKafkaConnectStatusApiArg = {
  /** name of the KafkaConnect */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaConnectStatusApiResponse =
  /** status 200 OK */
  | IoStrimziKafkaV1Beta2KafkaConnect
  | /** status 201 Created */ IoStrimziKafkaV1Beta2KafkaConnect
export type ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaConnectStatusApiArg = {
  /** name of the KafkaConnect */
  name: string
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
  ioStrimziKafkaV1Beta2KafkaConnect: IoStrimziKafkaV1Beta2KafkaConnect
}
export type PatchKafkaStrimziIoV1Beta2NamespacedKafkaConnectStatusApiResponse =
  /** status 200 OK */ IoStrimziKafkaV1Beta2KafkaConnect
export type PatchKafkaStrimziIoV1Beta2NamespacedKafkaConnectStatusApiArg = {
  /** name of the KafkaConnect */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
  /** Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. */
  force?: boolean
  ioK8SApimachineryPkgApisMetaV1Patch: IoK8SApimachineryPkgApisMetaV1Patch
}
export type ListKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMaker2ApiResponse =
  /** status 200 OK */ IoStrimziKafkaV1Beta2KafkaMirrorMaker2List
export type ListKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMaker2ApiArg = {
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
  allowWatchBookmarks?: boolean
  /** The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
    
    This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. */
  continue?: string
  /** A selector to restrict the list of returned objects by their fields. Defaults to everything. */
  fieldSelector?: string
  /** A selector to restrict the list of returned objects by their labels. Defaults to everything. */
  labelSelector?: string
  /** limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
    
    The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. */
  limit?: number
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
  /** resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersionMatch?: string
  /** `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
    
    When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
      is interpreted as "data at least as new as the provided `resourceVersion`"
      and the bookmark event is send when the state is synced
      to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
      If `resourceVersion` is unset, this is interpreted as "consistent read" and the
      bookmark event is send when the state is synced at least to the moment
      when request started being processed.
    - `resourceVersionMatch` set to any other value or unset
      Invalid error is returned.
    
    Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise. */
  sendInitialEvents?: boolean
  /** Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
  timeoutSeconds?: number
  /** Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
  watch?: boolean
}
export type CreateKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMaker2ApiResponse =
  /** status 200 OK */
  | IoStrimziKafkaV1Beta2KafkaMirrorMaker2
  | /** status 201 Created */ IoStrimziKafkaV1Beta2KafkaMirrorMaker2
  | /** status 202 Accepted */ IoStrimziKafkaV1Beta2KafkaMirrorMaker2
export type CreateKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMaker2ApiArg = {
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
  ioStrimziKafkaV1Beta2KafkaMirrorMaker2: IoStrimziKafkaV1Beta2KafkaMirrorMaker2
}
export type DeleteKafkaStrimziIoV1Beta2CollectionNamespacedKafkaMirrorMaker2ApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteKafkaStrimziIoV1Beta2CollectionNamespacedKafkaMirrorMaker2ApiArg =
  {
    /** object name and auth scope, such as for teams and projects */
    namespace: string
    /** If 'true', then the output is pretty printed. */
    pretty?: string
    /** allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
    allowWatchBookmarks?: boolean
    /** The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
    
    This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. */
    continue?: string
    /** A selector to restrict the list of returned objects by their fields. Defaults to everything. */
    fieldSelector?: string
    /** A selector to restrict the list of returned objects by their labels. Defaults to everything. */
    labelSelector?: string
    /** limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
    
    The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. */
    limit?: number
    /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
    resourceVersion?: string
    /** resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
    resourceVersionMatch?: string
    /** `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
    
    When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
      is interpreted as "data at least as new as the provided `resourceVersion`"
      and the bookmark event is send when the state is synced
      to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
      If `resourceVersion` is unset, this is interpreted as "consistent read" and the
      bookmark event is send when the state is synced at least to the moment
      when request started being processed.
    - `resourceVersionMatch` set to any other value or unset
      Invalid error is returned.
    
    Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise. */
    sendInitialEvents?: boolean
    /** Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
    timeoutSeconds?: number
    /** Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
    watch?: boolean
  }
export type ReadKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMaker2ApiResponse =
  /** status 200 OK */ IoStrimziKafkaV1Beta2KafkaMirrorMaker2
export type ReadKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMaker2ApiArg = {
  /** name of the KafkaMirrorMaker2 */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMaker2ApiResponse =
  /** status 200 OK */
  | IoStrimziKafkaV1Beta2KafkaMirrorMaker2
  | /** status 201 Created */ IoStrimziKafkaV1Beta2KafkaMirrorMaker2
export type ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMaker2ApiArg = {
  /** name of the KafkaMirrorMaker2 */
  name: string
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
  ioStrimziKafkaV1Beta2KafkaMirrorMaker2: IoStrimziKafkaV1Beta2KafkaMirrorMaker2
}
export type DeleteKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMaker2ApiResponse =
  /** status 200 OK */
  | IoK8SApimachineryPkgApisMetaV1Status
  | /** status 202 Accepted */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMaker2ApiArg = {
  /** name of the KafkaMirrorMaker2 */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. */
  gracePeriodSeconds?: number
  /** Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both. */
  orphanDependents?: boolean
  /** Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground. */
  propagationPolicy?: string
  ioK8SApimachineryPkgApisMetaV1DeleteOptions: IoK8SApimachineryPkgApisMetaV1DeleteOptions
}
export type PatchKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMaker2ApiResponse =
  /** status 200 OK */ IoStrimziKafkaV1Beta2KafkaMirrorMaker2
export type PatchKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMaker2ApiArg = {
  /** name of the KafkaMirrorMaker2 */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
  /** Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. */
  force?: boolean
  ioK8SApimachineryPkgApisMetaV1Patch: IoK8SApimachineryPkgApisMetaV1Patch
}
export type ReadKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMaker2ScaleApiResponse =
  /** status 200 OK */ IoK8SApiAutoscalingV1Scale
export type ReadKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMaker2ScaleApiArg = {
  /** name of the KafkaMirrorMaker2 */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMaker2ScaleApiResponse =
  /** status 200 OK */
  | IoK8SApiAutoscalingV1Scale
  | /** status 201 Created */ IoK8SApiAutoscalingV1Scale
export type ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMaker2ScaleApiArg =
  {
    /** name of the KafkaMirrorMaker2 */
    name: string
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
    ioK8SApiAutoscalingV1Scale: IoK8SApiAutoscalingV1Scale
  }
export type PatchKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMaker2ScaleApiResponse =
  /** status 200 OK */ IoK8SApiAutoscalingV1Scale
export type PatchKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMaker2ScaleApiArg = {
  /** name of the KafkaMirrorMaker2 */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
  /** Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. */
  force?: boolean
  ioK8SApimachineryPkgApisMetaV1Patch: IoK8SApimachineryPkgApisMetaV1Patch
}
export type ReadKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMaker2StatusApiResponse =
  /** status 200 OK */ IoStrimziKafkaV1Beta2KafkaMirrorMaker2
export type ReadKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMaker2StatusApiArg = {
  /** name of the KafkaMirrorMaker2 */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMaker2StatusApiResponse =
  /** status 200 OK */
  | IoStrimziKafkaV1Beta2KafkaMirrorMaker2
  | /** status 201 Created */ IoStrimziKafkaV1Beta2KafkaMirrorMaker2
export type ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMaker2StatusApiArg =
  {
    /** name of the KafkaMirrorMaker2 */
    name: string
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
    ioStrimziKafkaV1Beta2KafkaMirrorMaker2: IoStrimziKafkaV1Beta2KafkaMirrorMaker2
  }
export type PatchKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMaker2StatusApiResponse =
  /** status 200 OK */ IoStrimziKafkaV1Beta2KafkaMirrorMaker2
export type PatchKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMaker2StatusApiArg =
  {
    /** name of the KafkaMirrorMaker2 */
    name: string
    /** object name and auth scope, such as for teams and projects */
    namespace: string
    /** If 'true', then the output is pretty printed. */
    pretty?: string
    /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
    dryRun?: string
    /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). */
    fieldManager?: string
    /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
    fieldValidation?: string
    /** Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. */
    force?: boolean
    ioK8SApimachineryPkgApisMetaV1Patch: IoK8SApimachineryPkgApisMetaV1Patch
  }
export type ListKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMakerApiResponse =
  /** status 200 OK */ IoStrimziKafkaV1Beta2KafkaMirrorMakerList
export type ListKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMakerApiArg = {
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
  allowWatchBookmarks?: boolean
  /** The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
    
    This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. */
  continue?: string
  /** A selector to restrict the list of returned objects by their fields. Defaults to everything. */
  fieldSelector?: string
  /** A selector to restrict the list of returned objects by their labels. Defaults to everything. */
  labelSelector?: string
  /** limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
    
    The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. */
  limit?: number
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
  /** resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersionMatch?: string
  /** `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
    
    When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
      is interpreted as "data at least as new as the provided `resourceVersion`"
      and the bookmark event is send when the state is synced
      to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
      If `resourceVersion` is unset, this is interpreted as "consistent read" and the
      bookmark event is send when the state is synced at least to the moment
      when request started being processed.
    - `resourceVersionMatch` set to any other value or unset
      Invalid error is returned.
    
    Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise. */
  sendInitialEvents?: boolean
  /** Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
  timeoutSeconds?: number
  /** Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
  watch?: boolean
}
export type CreateKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMakerApiResponse =
  /** status 200 OK */
  | IoStrimziKafkaV1Beta2KafkaMirrorMaker
  | /** status 201 Created */ IoStrimziKafkaV1Beta2KafkaMirrorMaker
  | /** status 202 Accepted */ IoStrimziKafkaV1Beta2KafkaMirrorMaker
export type CreateKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMakerApiArg = {
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
  ioStrimziKafkaV1Beta2KafkaMirrorMaker: IoStrimziKafkaV1Beta2KafkaMirrorMaker
}
export type DeleteKafkaStrimziIoV1Beta2CollectionNamespacedKafkaMirrorMakerApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteKafkaStrimziIoV1Beta2CollectionNamespacedKafkaMirrorMakerApiArg =
  {
    /** object name and auth scope, such as for teams and projects */
    namespace: string
    /** If 'true', then the output is pretty printed. */
    pretty?: string
    /** allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
    allowWatchBookmarks?: boolean
    /** The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
    
    This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. */
    continue?: string
    /** A selector to restrict the list of returned objects by their fields. Defaults to everything. */
    fieldSelector?: string
    /** A selector to restrict the list of returned objects by their labels. Defaults to everything. */
    labelSelector?: string
    /** limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
    
    The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. */
    limit?: number
    /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
    resourceVersion?: string
    /** resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
    resourceVersionMatch?: string
    /** `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
    
    When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
      is interpreted as "data at least as new as the provided `resourceVersion`"
      and the bookmark event is send when the state is synced
      to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
      If `resourceVersion` is unset, this is interpreted as "consistent read" and the
      bookmark event is send when the state is synced at least to the moment
      when request started being processed.
    - `resourceVersionMatch` set to any other value or unset
      Invalid error is returned.
    
    Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise. */
    sendInitialEvents?: boolean
    /** Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
    timeoutSeconds?: number
    /** Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
    watch?: boolean
  }
export type ReadKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMakerApiResponse =
  /** status 200 OK */ IoStrimziKafkaV1Beta2KafkaMirrorMaker
export type ReadKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMakerApiArg = {
  /** name of the KafkaMirrorMaker */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMakerApiResponse =
  /** status 200 OK */
  | IoStrimziKafkaV1Beta2KafkaMirrorMaker
  | /** status 201 Created */ IoStrimziKafkaV1Beta2KafkaMirrorMaker
export type ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMakerApiArg = {
  /** name of the KafkaMirrorMaker */
  name: string
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
  ioStrimziKafkaV1Beta2KafkaMirrorMaker: IoStrimziKafkaV1Beta2KafkaMirrorMaker
}
export type DeleteKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMakerApiResponse =
  /** status 200 OK */
  | IoK8SApimachineryPkgApisMetaV1Status
  | /** status 202 Accepted */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMakerApiArg = {
  /** name of the KafkaMirrorMaker */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. */
  gracePeriodSeconds?: number
  /** Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both. */
  orphanDependents?: boolean
  /** Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground. */
  propagationPolicy?: string
  ioK8SApimachineryPkgApisMetaV1DeleteOptions: IoK8SApimachineryPkgApisMetaV1DeleteOptions
}
export type PatchKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMakerApiResponse =
  /** status 200 OK */ IoStrimziKafkaV1Beta2KafkaMirrorMaker
export type PatchKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMakerApiArg = {
  /** name of the KafkaMirrorMaker */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
  /** Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. */
  force?: boolean
  ioK8SApimachineryPkgApisMetaV1Patch: IoK8SApimachineryPkgApisMetaV1Patch
}
export type ReadKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMakerScaleApiResponse =
  /** status 200 OK */ IoK8SApiAutoscalingV1Scale
export type ReadKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMakerScaleApiArg = {
  /** name of the KafkaMirrorMaker */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMakerScaleApiResponse =
  /** status 200 OK */
  | IoK8SApiAutoscalingV1Scale
  | /** status 201 Created */ IoK8SApiAutoscalingV1Scale
export type ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMakerScaleApiArg =
  {
    /** name of the KafkaMirrorMaker */
    name: string
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
    ioK8SApiAutoscalingV1Scale: IoK8SApiAutoscalingV1Scale
  }
export type PatchKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMakerScaleApiResponse =
  /** status 200 OK */ IoK8SApiAutoscalingV1Scale
export type PatchKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMakerScaleApiArg = {
  /** name of the KafkaMirrorMaker */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
  /** Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. */
  force?: boolean
  ioK8SApimachineryPkgApisMetaV1Patch: IoK8SApimachineryPkgApisMetaV1Patch
}
export type ReadKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMakerStatusApiResponse =
  /** status 200 OK */ IoStrimziKafkaV1Beta2KafkaMirrorMaker
export type ReadKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMakerStatusApiArg = {
  /** name of the KafkaMirrorMaker */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMakerStatusApiResponse =
  /** status 200 OK */
  | IoStrimziKafkaV1Beta2KafkaMirrorMaker
  | /** status 201 Created */ IoStrimziKafkaV1Beta2KafkaMirrorMaker
export type ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMakerStatusApiArg =
  {
    /** name of the KafkaMirrorMaker */
    name: string
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
    ioStrimziKafkaV1Beta2KafkaMirrorMaker: IoStrimziKafkaV1Beta2KafkaMirrorMaker
  }
export type PatchKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMakerStatusApiResponse =
  /** status 200 OK */ IoStrimziKafkaV1Beta2KafkaMirrorMaker
export type PatchKafkaStrimziIoV1Beta2NamespacedKafkaMirrorMakerStatusApiArg = {
  /** name of the KafkaMirrorMaker */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
  /** Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. */
  force?: boolean
  ioK8SApimachineryPkgApisMetaV1Patch: IoK8SApimachineryPkgApisMetaV1Patch
}
export type ListKafkaStrimziIoV1Beta2NamespacedKafkaRebalanceApiResponse =
  /** status 200 OK */ IoStrimziKafkaV1Beta2KafkaRebalanceList
export type ListKafkaStrimziIoV1Beta2NamespacedKafkaRebalanceApiArg = {
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
  allowWatchBookmarks?: boolean
  /** The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
    
    This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. */
  continue?: string
  /** A selector to restrict the list of returned objects by their fields. Defaults to everything. */
  fieldSelector?: string
  /** A selector to restrict the list of returned objects by their labels. Defaults to everything. */
  labelSelector?: string
  /** limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
    
    The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. */
  limit?: number
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
  /** resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersionMatch?: string
  /** `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
    
    When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
      is interpreted as "data at least as new as the provided `resourceVersion`"
      and the bookmark event is send when the state is synced
      to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
      If `resourceVersion` is unset, this is interpreted as "consistent read" and the
      bookmark event is send when the state is synced at least to the moment
      when request started being processed.
    - `resourceVersionMatch` set to any other value or unset
      Invalid error is returned.
    
    Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise. */
  sendInitialEvents?: boolean
  /** Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
  timeoutSeconds?: number
  /** Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
  watch?: boolean
}
export type CreateKafkaStrimziIoV1Beta2NamespacedKafkaRebalanceApiResponse =
  /** status 200 OK */
  | IoStrimziKafkaV1Beta2KafkaRebalance
  | /** status 201 Created */ IoStrimziKafkaV1Beta2KafkaRebalance
  | /** status 202 Accepted */ IoStrimziKafkaV1Beta2KafkaRebalance
export type CreateKafkaStrimziIoV1Beta2NamespacedKafkaRebalanceApiArg = {
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
  ioStrimziKafkaV1Beta2KafkaRebalance: IoStrimziKafkaV1Beta2KafkaRebalance
}
export type DeleteKafkaStrimziIoV1Beta2CollectionNamespacedKafkaRebalanceApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteKafkaStrimziIoV1Beta2CollectionNamespacedKafkaRebalanceApiArg =
  {
    /** object name and auth scope, such as for teams and projects */
    namespace: string
    /** If 'true', then the output is pretty printed. */
    pretty?: string
    /** allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
    allowWatchBookmarks?: boolean
    /** The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
    
    This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. */
    continue?: string
    /** A selector to restrict the list of returned objects by their fields. Defaults to everything. */
    fieldSelector?: string
    /** A selector to restrict the list of returned objects by their labels. Defaults to everything. */
    labelSelector?: string
    /** limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
    
    The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. */
    limit?: number
    /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
    resourceVersion?: string
    /** resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
    resourceVersionMatch?: string
    /** `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
    
    When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
      is interpreted as "data at least as new as the provided `resourceVersion`"
      and the bookmark event is send when the state is synced
      to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
      If `resourceVersion` is unset, this is interpreted as "consistent read" and the
      bookmark event is send when the state is synced at least to the moment
      when request started being processed.
    - `resourceVersionMatch` set to any other value or unset
      Invalid error is returned.
    
    Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise. */
    sendInitialEvents?: boolean
    /** Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
    timeoutSeconds?: number
    /** Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
    watch?: boolean
  }
export type ReadKafkaStrimziIoV1Beta2NamespacedKafkaRebalanceApiResponse =
  /** status 200 OK */ IoStrimziKafkaV1Beta2KafkaRebalance
export type ReadKafkaStrimziIoV1Beta2NamespacedKafkaRebalanceApiArg = {
  /** name of the KafkaRebalance */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaRebalanceApiResponse =
  /** status 200 OK */
  | IoStrimziKafkaV1Beta2KafkaRebalance
  | /** status 201 Created */ IoStrimziKafkaV1Beta2KafkaRebalance
export type ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaRebalanceApiArg = {
  /** name of the KafkaRebalance */
  name: string
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
  ioStrimziKafkaV1Beta2KafkaRebalance: IoStrimziKafkaV1Beta2KafkaRebalance
}
export type DeleteKafkaStrimziIoV1Beta2NamespacedKafkaRebalanceApiResponse =
  /** status 200 OK */
  | IoK8SApimachineryPkgApisMetaV1Status
  | /** status 202 Accepted */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteKafkaStrimziIoV1Beta2NamespacedKafkaRebalanceApiArg = {
  /** name of the KafkaRebalance */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. */
  gracePeriodSeconds?: number
  /** Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both. */
  orphanDependents?: boolean
  /** Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground. */
  propagationPolicy?: string
  ioK8SApimachineryPkgApisMetaV1DeleteOptions: IoK8SApimachineryPkgApisMetaV1DeleteOptions
}
export type PatchKafkaStrimziIoV1Beta2NamespacedKafkaRebalanceApiResponse =
  /** status 200 OK */ IoStrimziKafkaV1Beta2KafkaRebalance
export type PatchKafkaStrimziIoV1Beta2NamespacedKafkaRebalanceApiArg = {
  /** name of the KafkaRebalance */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
  /** Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. */
  force?: boolean
  ioK8SApimachineryPkgApisMetaV1Patch: IoK8SApimachineryPkgApisMetaV1Patch
}
export type ReadKafkaStrimziIoV1Beta2NamespacedKafkaRebalanceStatusApiResponse =
  /** status 200 OK */ IoStrimziKafkaV1Beta2KafkaRebalance
export type ReadKafkaStrimziIoV1Beta2NamespacedKafkaRebalanceStatusApiArg = {
  /** name of the KafkaRebalance */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaRebalanceStatusApiResponse =
  /** status 200 OK */
  | IoStrimziKafkaV1Beta2KafkaRebalance
  | /** status 201 Created */ IoStrimziKafkaV1Beta2KafkaRebalance
export type ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaRebalanceStatusApiArg = {
  /** name of the KafkaRebalance */
  name: string
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
  ioStrimziKafkaV1Beta2KafkaRebalance: IoStrimziKafkaV1Beta2KafkaRebalance
}
export type PatchKafkaStrimziIoV1Beta2NamespacedKafkaRebalanceStatusApiResponse =
  /** status 200 OK */ IoStrimziKafkaV1Beta2KafkaRebalance
export type PatchKafkaStrimziIoV1Beta2NamespacedKafkaRebalanceStatusApiArg = {
  /** name of the KafkaRebalance */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
  /** Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. */
  force?: boolean
  ioK8SApimachineryPkgApisMetaV1Patch: IoK8SApimachineryPkgApisMetaV1Patch
}
export type ListKafkaStrimziIoV1Beta2NamespacedKafkaApiResponse =
  /** status 200 OK */ IoStrimziKafkaV1Beta2KafkaList
export type ListKafkaStrimziIoV1Beta2NamespacedKafkaApiArg = {
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
  allowWatchBookmarks?: boolean
  /** The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
    
    This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. */
  continue?: string
  /** A selector to restrict the list of returned objects by their fields. Defaults to everything. */
  fieldSelector?: string
  /** A selector to restrict the list of returned objects by their labels. Defaults to everything. */
  labelSelector?: string
  /** limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
    
    The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. */
  limit?: number
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
  /** resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersionMatch?: string
  /** `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
    
    When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
      is interpreted as "data at least as new as the provided `resourceVersion`"
      and the bookmark event is send when the state is synced
      to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
      If `resourceVersion` is unset, this is interpreted as "consistent read" and the
      bookmark event is send when the state is synced at least to the moment
      when request started being processed.
    - `resourceVersionMatch` set to any other value or unset
      Invalid error is returned.
    
    Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise. */
  sendInitialEvents?: boolean
  /** Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
  timeoutSeconds?: number
  /** Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
  watch?: boolean
}
export type CreateKafkaStrimziIoV1Beta2NamespacedKafkaApiResponse =
  /** status 200 OK */
  | IoStrimziKafkaV1Beta2Kafka
  | /** status 201 Created */ IoStrimziKafkaV1Beta2Kafka
  | /** status 202 Accepted */ IoStrimziKafkaV1Beta2Kafka
export type CreateKafkaStrimziIoV1Beta2NamespacedKafkaApiArg = {
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
  ioStrimziKafkaV1Beta2Kafka: IoStrimziKafkaV1Beta2Kafka
}
export type DeleteKafkaStrimziIoV1Beta2CollectionNamespacedKafkaApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteKafkaStrimziIoV1Beta2CollectionNamespacedKafkaApiArg = {
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
  allowWatchBookmarks?: boolean
  /** The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
    
    This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. */
  continue?: string
  /** A selector to restrict the list of returned objects by their fields. Defaults to everything. */
  fieldSelector?: string
  /** A selector to restrict the list of returned objects by their labels. Defaults to everything. */
  labelSelector?: string
  /** limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
    
    The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. */
  limit?: number
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
  /** resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersionMatch?: string
  /** `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
    
    When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
      is interpreted as "data at least as new as the provided `resourceVersion`"
      and the bookmark event is send when the state is synced
      to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
      If `resourceVersion` is unset, this is interpreted as "consistent read" and the
      bookmark event is send when the state is synced at least to the moment
      when request started being processed.
    - `resourceVersionMatch` set to any other value or unset
      Invalid error is returned.
    
    Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise. */
  sendInitialEvents?: boolean
  /** Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
  timeoutSeconds?: number
  /** Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
  watch?: boolean
}
export type ReadKafkaStrimziIoV1Beta2NamespacedKafkaApiResponse =
  /** status 200 OK */ IoStrimziKafkaV1Beta2Kafka
export type ReadKafkaStrimziIoV1Beta2NamespacedKafkaApiArg = {
  /** name of the Kafka */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaApiResponse =
  /** status 200 OK */
  | IoStrimziKafkaV1Beta2Kafka
  | /** status 201 Created */ IoStrimziKafkaV1Beta2Kafka
export type ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaApiArg = {
  /** name of the Kafka */
  name: string
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
  ioStrimziKafkaV1Beta2Kafka: IoStrimziKafkaV1Beta2Kafka
}
export type DeleteKafkaStrimziIoV1Beta2NamespacedKafkaApiResponse =
  /** status 200 OK */
  | IoK8SApimachineryPkgApisMetaV1Status
  | /** status 202 Accepted */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteKafkaStrimziIoV1Beta2NamespacedKafkaApiArg = {
  /** name of the Kafka */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. */
  gracePeriodSeconds?: number
  /** Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both. */
  orphanDependents?: boolean
  /** Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground. */
  propagationPolicy?: string
  ioK8SApimachineryPkgApisMetaV1DeleteOptions: IoK8SApimachineryPkgApisMetaV1DeleteOptions
}
export type PatchKafkaStrimziIoV1Beta2NamespacedKafkaApiResponse =
  /** status 200 OK */ IoStrimziKafkaV1Beta2Kafka
export type PatchKafkaStrimziIoV1Beta2NamespacedKafkaApiArg = {
  /** name of the Kafka */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
  /** Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. */
  force?: boolean
  ioK8SApimachineryPkgApisMetaV1Patch: IoK8SApimachineryPkgApisMetaV1Patch
}
export type ReadKafkaStrimziIoV1Beta2NamespacedKafkaStatusApiResponse =
  /** status 200 OK */ IoStrimziKafkaV1Beta2Kafka
export type ReadKafkaStrimziIoV1Beta2NamespacedKafkaStatusApiArg = {
  /** name of the Kafka */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaStatusApiResponse =
  /** status 200 OK */
  | IoStrimziKafkaV1Beta2Kafka
  | /** status 201 Created */ IoStrimziKafkaV1Beta2Kafka
export type ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaStatusApiArg = {
  /** name of the Kafka */
  name: string
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
  ioStrimziKafkaV1Beta2Kafka: IoStrimziKafkaV1Beta2Kafka
}
export type PatchKafkaStrimziIoV1Beta2NamespacedKafkaStatusApiResponse =
  /** status 200 OK */ IoStrimziKafkaV1Beta2Kafka
export type PatchKafkaStrimziIoV1Beta2NamespacedKafkaStatusApiArg = {
  /** name of the Kafka */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
  /** Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. */
  force?: boolean
  ioK8SApimachineryPkgApisMetaV1Patch: IoK8SApimachineryPkgApisMetaV1Patch
}
export type ListKafkaStrimziIoV1Beta2NamespacedKafkaTopicApiResponse =
  /** status 200 OK */ IoStrimziKafkaV1Beta2KafkaTopicList
export type ListKafkaStrimziIoV1Beta2NamespacedKafkaTopicApiArg = {
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
  allowWatchBookmarks?: boolean
  /** The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
    
    This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. */
  continue?: string
  /** A selector to restrict the list of returned objects by their fields. Defaults to everything. */
  fieldSelector?: string
  /** A selector to restrict the list of returned objects by their labels. Defaults to everything. */
  labelSelector?: string
  /** limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
    
    The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. */
  limit?: number
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
  /** resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersionMatch?: string
  /** `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
    
    When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
      is interpreted as "data at least as new as the provided `resourceVersion`"
      and the bookmark event is send when the state is synced
      to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
      If `resourceVersion` is unset, this is interpreted as "consistent read" and the
      bookmark event is send when the state is synced at least to the moment
      when request started being processed.
    - `resourceVersionMatch` set to any other value or unset
      Invalid error is returned.
    
    Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise. */
  sendInitialEvents?: boolean
  /** Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
  timeoutSeconds?: number
  /** Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
  watch?: boolean
}
export type CreateKafkaStrimziIoV1Beta2NamespacedKafkaTopicApiResponse =
  /** status 200 OK */
  | IoStrimziKafkaV1Beta2KafkaTopic
  | /** status 201 Created */ IoStrimziKafkaV1Beta2KafkaTopic
  | /** status 202 Accepted */ IoStrimziKafkaV1Beta2KafkaTopic
export type CreateKafkaStrimziIoV1Beta2NamespacedKafkaTopicApiArg = {
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
  ioStrimziKafkaV1Beta2KafkaTopic: IoStrimziKafkaV1Beta2KafkaTopic
}
export type DeleteKafkaStrimziIoV1Beta2CollectionNamespacedKafkaTopicApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteKafkaStrimziIoV1Beta2CollectionNamespacedKafkaTopicApiArg = {
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
  allowWatchBookmarks?: boolean
  /** The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
    
    This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. */
  continue?: string
  /** A selector to restrict the list of returned objects by their fields. Defaults to everything. */
  fieldSelector?: string
  /** A selector to restrict the list of returned objects by their labels. Defaults to everything. */
  labelSelector?: string
  /** limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
    
    The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. */
  limit?: number
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
  /** resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersionMatch?: string
  /** `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
    
    When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
      is interpreted as "data at least as new as the provided `resourceVersion`"
      and the bookmark event is send when the state is synced
      to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
      If `resourceVersion` is unset, this is interpreted as "consistent read" and the
      bookmark event is send when the state is synced at least to the moment
      when request started being processed.
    - `resourceVersionMatch` set to any other value or unset
      Invalid error is returned.
    
    Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise. */
  sendInitialEvents?: boolean
  /** Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
  timeoutSeconds?: number
  /** Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
  watch?: boolean
}
export type ReadKafkaStrimziIoV1Beta2NamespacedKafkaTopicApiResponse =
  /** status 200 OK */ IoStrimziKafkaV1Beta2KafkaTopic
export type ReadKafkaStrimziIoV1Beta2NamespacedKafkaTopicApiArg = {
  /** name of the KafkaTopic */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaTopicApiResponse =
  /** status 200 OK */
  | IoStrimziKafkaV1Beta2KafkaTopic
  | /** status 201 Created */ IoStrimziKafkaV1Beta2KafkaTopic
export type ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaTopicApiArg = {
  /** name of the KafkaTopic */
  name: string
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
  ioStrimziKafkaV1Beta2KafkaTopic: IoStrimziKafkaV1Beta2KafkaTopic
}
export type DeleteKafkaStrimziIoV1Beta2NamespacedKafkaTopicApiResponse =
  /** status 200 OK */
  | IoK8SApimachineryPkgApisMetaV1Status
  | /** status 202 Accepted */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteKafkaStrimziIoV1Beta2NamespacedKafkaTopicApiArg = {
  /** name of the KafkaTopic */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. */
  gracePeriodSeconds?: number
  /** Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both. */
  orphanDependents?: boolean
  /** Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground. */
  propagationPolicy?: string
  ioK8SApimachineryPkgApisMetaV1DeleteOptions: IoK8SApimachineryPkgApisMetaV1DeleteOptions
}
export type PatchKafkaStrimziIoV1Beta2NamespacedKafkaTopicApiResponse =
  /** status 200 OK */ IoStrimziKafkaV1Beta2KafkaTopic
export type PatchKafkaStrimziIoV1Beta2NamespacedKafkaTopicApiArg = {
  /** name of the KafkaTopic */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
  /** Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. */
  force?: boolean
  ioK8SApimachineryPkgApisMetaV1Patch: IoK8SApimachineryPkgApisMetaV1Patch
}
export type ReadKafkaStrimziIoV1Beta2NamespacedKafkaTopicStatusApiResponse =
  /** status 200 OK */ IoStrimziKafkaV1Beta2KafkaTopic
export type ReadKafkaStrimziIoV1Beta2NamespacedKafkaTopicStatusApiArg = {
  /** name of the KafkaTopic */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaTopicStatusApiResponse =
  /** status 200 OK */
  | IoStrimziKafkaV1Beta2KafkaTopic
  | /** status 201 Created */ IoStrimziKafkaV1Beta2KafkaTopic
export type ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaTopicStatusApiArg = {
  /** name of the KafkaTopic */
  name: string
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
  ioStrimziKafkaV1Beta2KafkaTopic: IoStrimziKafkaV1Beta2KafkaTopic
}
export type PatchKafkaStrimziIoV1Beta2NamespacedKafkaTopicStatusApiResponse =
  /** status 200 OK */ IoStrimziKafkaV1Beta2KafkaTopic
export type PatchKafkaStrimziIoV1Beta2NamespacedKafkaTopicStatusApiArg = {
  /** name of the KafkaTopic */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
  /** Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. */
  force?: boolean
  ioK8SApimachineryPkgApisMetaV1Patch: IoK8SApimachineryPkgApisMetaV1Patch
}
export type ListKafkaStrimziIoV1Beta2NamespacedKafkaUserApiResponse =
  /** status 200 OK */ IoStrimziKafkaV1Beta2KafkaUserList
export type ListKafkaStrimziIoV1Beta2NamespacedKafkaUserApiArg = {
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
  allowWatchBookmarks?: boolean
  /** The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
    
    This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. */
  continue?: string
  /** A selector to restrict the list of returned objects by their fields. Defaults to everything. */
  fieldSelector?: string
  /** A selector to restrict the list of returned objects by their labels. Defaults to everything. */
  labelSelector?: string
  /** limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
    
    The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. */
  limit?: number
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
  /** resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersionMatch?: string
  /** `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
    
    When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
      is interpreted as "data at least as new as the provided `resourceVersion`"
      and the bookmark event is send when the state is synced
      to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
      If `resourceVersion` is unset, this is interpreted as "consistent read" and the
      bookmark event is send when the state is synced at least to the moment
      when request started being processed.
    - `resourceVersionMatch` set to any other value or unset
      Invalid error is returned.
    
    Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise. */
  sendInitialEvents?: boolean
  /** Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
  timeoutSeconds?: number
  /** Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
  watch?: boolean
}
export type CreateKafkaStrimziIoV1Beta2NamespacedKafkaUserApiResponse =
  /** status 200 OK */
  | IoStrimziKafkaV1Beta2KafkaUser
  | /** status 201 Created */ IoStrimziKafkaV1Beta2KafkaUser
  | /** status 202 Accepted */ IoStrimziKafkaV1Beta2KafkaUser
export type CreateKafkaStrimziIoV1Beta2NamespacedKafkaUserApiArg = {
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
  ioStrimziKafkaV1Beta2KafkaUser: IoStrimziKafkaV1Beta2KafkaUser
}
export type DeleteKafkaStrimziIoV1Beta2CollectionNamespacedKafkaUserApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteKafkaStrimziIoV1Beta2CollectionNamespacedKafkaUserApiArg = {
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
  allowWatchBookmarks?: boolean
  /** The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
    
    This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. */
  continue?: string
  /** A selector to restrict the list of returned objects by their fields. Defaults to everything. */
  fieldSelector?: string
  /** A selector to restrict the list of returned objects by their labels. Defaults to everything. */
  labelSelector?: string
  /** limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
    
    The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. */
  limit?: number
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
  /** resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersionMatch?: string
  /** `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
    
    When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
      is interpreted as "data at least as new as the provided `resourceVersion`"
      and the bookmark event is send when the state is synced
      to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
      If `resourceVersion` is unset, this is interpreted as "consistent read" and the
      bookmark event is send when the state is synced at least to the moment
      when request started being processed.
    - `resourceVersionMatch` set to any other value or unset
      Invalid error is returned.
    
    Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise. */
  sendInitialEvents?: boolean
  /** Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
  timeoutSeconds?: number
  /** Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
  watch?: boolean
}
export type ReadKafkaStrimziIoV1Beta2NamespacedKafkaUserApiResponse =
  /** status 200 OK */ IoStrimziKafkaV1Beta2KafkaUser
export type ReadKafkaStrimziIoV1Beta2NamespacedKafkaUserApiArg = {
  /** name of the KafkaUser */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaUserApiResponse =
  /** status 200 OK */
  | IoStrimziKafkaV1Beta2KafkaUser
  | /** status 201 Created */ IoStrimziKafkaV1Beta2KafkaUser
export type ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaUserApiArg = {
  /** name of the KafkaUser */
  name: string
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
  ioStrimziKafkaV1Beta2KafkaUser: IoStrimziKafkaV1Beta2KafkaUser
}
export type DeleteKafkaStrimziIoV1Beta2NamespacedKafkaUserApiResponse =
  /** status 200 OK */
  | IoK8SApimachineryPkgApisMetaV1Status
  | /** status 202 Accepted */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteKafkaStrimziIoV1Beta2NamespacedKafkaUserApiArg = {
  /** name of the KafkaUser */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. */
  gracePeriodSeconds?: number
  /** Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both. */
  orphanDependents?: boolean
  /** Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground. */
  propagationPolicy?: string
  ioK8SApimachineryPkgApisMetaV1DeleteOptions: IoK8SApimachineryPkgApisMetaV1DeleteOptions
}
export type PatchKafkaStrimziIoV1Beta2NamespacedKafkaUserApiResponse =
  /** status 200 OK */ IoStrimziKafkaV1Beta2KafkaUser
export type PatchKafkaStrimziIoV1Beta2NamespacedKafkaUserApiArg = {
  /** name of the KafkaUser */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
  /** Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. */
  force?: boolean
  ioK8SApimachineryPkgApisMetaV1Patch: IoK8SApimachineryPkgApisMetaV1Patch
}
export type ReadKafkaStrimziIoV1Beta2NamespacedKafkaUserStatusApiResponse =
  /** status 200 OK */ IoStrimziKafkaV1Beta2KafkaUser
export type ReadKafkaStrimziIoV1Beta2NamespacedKafkaUserStatusApiArg = {
  /** name of the KafkaUser */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaUserStatusApiResponse =
  /** status 200 OK */
  | IoStrimziKafkaV1Beta2KafkaUser
  | /** status 201 Created */ IoStrimziKafkaV1Beta2KafkaUser
export type ReplaceKafkaStrimziIoV1Beta2NamespacedKafkaUserStatusApiArg = {
  /** name of the KafkaUser */
  name: string
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
  ioStrimziKafkaV1Beta2KafkaUser: IoStrimziKafkaV1Beta2KafkaUser
}
export type PatchKafkaStrimziIoV1Beta2NamespacedKafkaUserStatusApiResponse =
  /** status 200 OK */ IoStrimziKafkaV1Beta2KafkaUser
export type PatchKafkaStrimziIoV1Beta2NamespacedKafkaUserStatusApiArg = {
  /** name of the KafkaUser */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
  /** Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. */
  force?: boolean
  ioK8SApimachineryPkgApisMetaV1Patch: IoK8SApimachineryPkgApisMetaV1Patch
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
export type IoStrimziKafkaV1Beta2KafkaBridge = {
  apiVersion?: string | undefined
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ObjectMeta | undefined
  spec?:
    | {
        adminClient?:
          | {
              config?: object | undefined
            }
          | undefined
        authentication?:
          | {
              accessToken?:
                | {
                    key: string
                    secretName: string
                  }
                | undefined
              accessTokenIsJwt?: boolean | undefined
              audience?: string | undefined
              certificateAndKey?:
                | {
                    certificate: string
                    key: string
                    secretName: string
                  }
                | undefined
              clientId?: string | undefined
              clientSecret?:
                | {
                    key: string
                    secretName: string
                  }
                | undefined
              connectTimeoutSeconds?: number | undefined
              disableTlsHostnameVerification?: boolean | undefined
              maxTokenExpirySeconds?: number | undefined
              passwordSecret?:
                | {
                    password: string
                    secretName: string
                  }
                | undefined
              readTimeoutSeconds?: number | undefined
              refreshToken?:
                | {
                    key: string
                    secretName: string
                  }
                | undefined
              scope?: string | undefined
              tlsTrustedCertificates?:
                | {
                    certificate: string
                    secretName: string
                  }[]
                | undefined
              tokenEndpointUri?: string | undefined
              type:
                | 'tls'
                | 'scram-sha-256'
                | 'scram-sha-512'
                | 'plain'
                | 'oauth'
              username?: string | undefined
            }
          | undefined
        bootstrapServers: string
        consumer?:
          | {
              config?: object | undefined
            }
          | undefined
        enableMetrics?: boolean | undefined
        http?:
          | {
              cors?:
                | {
                    allowedMethods: string[]
                    allowedOrigins: string[]
                  }
                | undefined
              port?: number | undefined
            }
          | undefined
        image?: string | undefined
        jvmOptions?:
          | {
              '-XX'?: object | undefined
              '-Xms'?: string | undefined
              '-Xmx'?: string | undefined
              gcLoggingEnabled?: boolean | undefined
              javaSystemProperties?:
                | {
                    name?: string | undefined
                    value?: string | undefined
                  }[]
                | undefined
            }
          | undefined
        livenessProbe?:
          | {
              failureThreshold?: number | undefined
              initialDelaySeconds?: number | undefined
              periodSeconds?: number | undefined
              successThreshold?: number | undefined
              timeoutSeconds?: number | undefined
            }
          | undefined
        logging?:
          | {
              loggers?: object | undefined
              type: 'inline' | 'external'
              valueFrom?:
                | {
                    configMapKeyRef?:
                      | {
                          key?: string | undefined
                          name?: string | undefined
                          optional?: boolean | undefined
                        }
                      | undefined
                  }
                | undefined
            }
          | undefined
        producer?:
          | {
              config?: object | undefined
            }
          | undefined
        readinessProbe?:
          | {
              failureThreshold?: number | undefined
              initialDelaySeconds?: number | undefined
              periodSeconds?: number | undefined
              successThreshold?: number | undefined
              timeoutSeconds?: number | undefined
            }
          | undefined
        replicas?: number | undefined
        resources?:
          | {
              limits?: object | undefined
              requests?: object | undefined
            }
          | undefined
        template?:
          | {
              apiService?:
                | {
                    ipFamilies?: ('IPv4' | 'IPv6')[] | undefined
                    ipFamilyPolicy?:
                      | ('SingleStack' | 'PreferDualStack' | 'RequireDualStack')
                      | undefined
                    metadata?:
                      | {
                          annotations?: object | undefined
                          labels?: object | undefined
                        }
                      | undefined
                  }
                | undefined
              bridgeContainer?:
                | {
                    env?:
                      | {
                          name?: string | undefined
                          value?: string | undefined
                        }[]
                      | undefined
                    securityContext?:
                      | {
                          allowPrivilegeEscalation?: boolean | undefined
                          capabilities?:
                            | {
                                add?: string[] | undefined
                                drop?: string[] | undefined
                              }
                            | undefined
                          privileged?: boolean | undefined
                          procMount?: string | undefined
                          readOnlyRootFilesystem?: boolean | undefined
                          runAsGroup?: number | undefined
                          runAsNonRoot?: boolean | undefined
                          runAsUser?: number | undefined
                          seLinuxOptions?:
                            | {
                                level?: string | undefined
                                role?: string | undefined
                                type?: string | undefined
                                user?: string | undefined
                              }
                            | undefined
                          seccompProfile?:
                            | {
                                localhostProfile?: string | undefined
                                type?: string | undefined
                              }
                            | undefined
                          windowsOptions?:
                            | {
                                gmsaCredentialSpec?: string | undefined
                                gmsaCredentialSpecName?: string | undefined
                                hostProcess?: boolean | undefined
                                runAsUserName?: string | undefined
                              }
                            | undefined
                        }
                      | undefined
                  }
                | undefined
              deployment?:
                | {
                    deploymentStrategy?:
                      | ('RollingUpdate' | 'Recreate')
                      | undefined
                    metadata?:
                      | {
                          annotations?: object | undefined
                          labels?: object | undefined
                        }
                      | undefined
                  }
                | undefined
              pod?:
                | {
                    affinity?:
                      | {
                          nodeAffinity?:
                            | {
                                preferredDuringSchedulingIgnoredDuringExecution?:
                                  | {
                                      preference?:
                                        | {
                                            matchExpressions?:
                                              | {
                                                  key?: string | undefined
                                                  operator?: string | undefined
                                                  values?: string[] | undefined
                                                }[]
                                              | undefined
                                            matchFields?:
                                              | {
                                                  key?: string | undefined
                                                  operator?: string | undefined
                                                  values?: string[] | undefined
                                                }[]
                                              | undefined
                                          }
                                        | undefined
                                      weight?: number | undefined
                                    }[]
                                  | undefined
                                requiredDuringSchedulingIgnoredDuringExecution?:
                                  | {
                                      nodeSelectorTerms?:
                                        | {
                                            matchExpressions?:
                                              | {
                                                  key?: string | undefined
                                                  operator?: string | undefined
                                                  values?: string[] | undefined
                                                }[]
                                              | undefined
                                            matchFields?:
                                              | {
                                                  key?: string | undefined
                                                  operator?: string | undefined
                                                  values?: string[] | undefined
                                                }[]
                                              | undefined
                                          }[]
                                        | undefined
                                    }
                                  | undefined
                              }
                            | undefined
                          podAffinity?:
                            | {
                                preferredDuringSchedulingIgnoredDuringExecution?:
                                  | {
                                      podAffinityTerm?:
                                        | {
                                            labelSelector?:
                                              | {
                                                  matchExpressions?:
                                                    | {
                                                        key?: string | undefined
                                                        operator?:
                                                          | string
                                                          | undefined
                                                        values?:
                                                          | string[]
                                                          | undefined
                                                      }[]
                                                    | undefined
                                                  matchLabels?:
                                                    | object
                                                    | undefined
                                                }
                                              | undefined
                                            namespaceSelector?:
                                              | {
                                                  matchExpressions?:
                                                    | {
                                                        key?: string | undefined
                                                        operator?:
                                                          | string
                                                          | undefined
                                                        values?:
                                                          | string[]
                                                          | undefined
                                                      }[]
                                                    | undefined
                                                  matchLabels?:
                                                    | object
                                                    | undefined
                                                }
                                              | undefined
                                            namespaces?: string[] | undefined
                                            topologyKey?: string | undefined
                                          }
                                        | undefined
                                      weight?: number | undefined
                                    }[]
                                  | undefined
                                requiredDuringSchedulingIgnoredDuringExecution?:
                                  | {
                                      labelSelector?:
                                        | {
                                            matchExpressions?:
                                              | {
                                                  key?: string | undefined
                                                  operator?: string | undefined
                                                  values?: string[] | undefined
                                                }[]
                                              | undefined
                                            matchLabels?: object | undefined
                                          }
                                        | undefined
                                      namespaceSelector?:
                                        | {
                                            matchExpressions?:
                                              | {
                                                  key?: string | undefined
                                                  operator?: string | undefined
                                                  values?: string[] | undefined
                                                }[]
                                              | undefined
                                            matchLabels?: object | undefined
                                          }
                                        | undefined
                                      namespaces?: string[] | undefined
                                      topologyKey?: string | undefined
                                    }[]
                                  | undefined
                              }
                            | undefined
                          podAntiAffinity?:
                            | {
                                preferredDuringSchedulingIgnoredDuringExecution?:
                                  | {
                                      podAffinityTerm?:
                                        | {
                                            labelSelector?:
                                              | {
                                                  matchExpressions?:
                                                    | {
                                                        key?: string | undefined
                                                        operator?:
                                                          | string
                                                          | undefined
                                                        values?:
                                                          | string[]
                                                          | undefined
                                                      }[]
                                                    | undefined
                                                  matchLabels?:
                                                    | object
                                                    | undefined
                                                }
                                              | undefined
                                            namespaceSelector?:
                                              | {
                                                  matchExpressions?:
                                                    | {
                                                        key?: string | undefined
                                                        operator?:
                                                          | string
                                                          | undefined
                                                        values?:
                                                          | string[]
                                                          | undefined
                                                      }[]
                                                    | undefined
                                                  matchLabels?:
                                                    | object
                                                    | undefined
                                                }
                                              | undefined
                                            namespaces?: string[] | undefined
                                            topologyKey?: string | undefined
                                          }
                                        | undefined
                                      weight?: number | undefined
                                    }[]
                                  | undefined
                                requiredDuringSchedulingIgnoredDuringExecution?:
                                  | {
                                      labelSelector?:
                                        | {
                                            matchExpressions?:
                                              | {
                                                  key?: string | undefined
                                                  operator?: string | undefined
                                                  values?: string[] | undefined
                                                }[]
                                              | undefined
                                            matchLabels?: object | undefined
                                          }
                                        | undefined
                                      namespaceSelector?:
                                        | {
                                            matchExpressions?:
                                              | {
                                                  key?: string | undefined
                                                  operator?: string | undefined
                                                  values?: string[] | undefined
                                                }[]
                                              | undefined
                                            matchLabels?: object | undefined
                                          }
                                        | undefined
                                      namespaces?: string[] | undefined
                                      topologyKey?: string | undefined
                                    }[]
                                  | undefined
                              }
                            | undefined
                        }
                      | undefined
                    enableServiceLinks?: boolean | undefined
                    hostAliases?:
                      | {
                          hostnames?: string[] | undefined
                          ip?: string | undefined
                        }[]
                      | undefined
                    imagePullSecrets?:
                      | {
                          name?: string | undefined
                        }[]
                      | undefined
                    metadata?:
                      | {
                          annotations?: object | undefined
                          labels?: object | undefined
                        }
                      | undefined
                    priorityClassName?: string | undefined
                    schedulerName?: string | undefined
                    securityContext?:
                      | {
                          fsGroup?: number | undefined
                          fsGroupChangePolicy?: string | undefined
                          runAsGroup?: number | undefined
                          runAsNonRoot?: boolean | undefined
                          runAsUser?: number | undefined
                          seLinuxOptions?:
                            | {
                                level?: string | undefined
                                role?: string | undefined
                                type?: string | undefined
                                user?: string | undefined
                              }
                            | undefined
                          seccompProfile?:
                            | {
                                localhostProfile?: string | undefined
                                type?: string | undefined
                              }
                            | undefined
                          supplementalGroups?: number[] | undefined
                          sysctls?:
                            | {
                                name?: string | undefined
                                value?: string | undefined
                              }[]
                            | undefined
                          windowsOptions?:
                            | {
                                gmsaCredentialSpec?: string | undefined
                                gmsaCredentialSpecName?: string | undefined
                                hostProcess?: boolean | undefined
                                runAsUserName?: string | undefined
                              }
                            | undefined
                        }
                      | undefined
                    terminationGracePeriodSeconds?: number | undefined
                    tmpDirSizeLimit?: string | undefined
                    tolerations?:
                      | {
                          effect?: string | undefined
                          key?: string | undefined
                          operator?: string | undefined
                          tolerationSeconds?: number | undefined
                          value?: string | undefined
                        }[]
                      | undefined
                    topologySpreadConstraints?:
                      | {
                          labelSelector?:
                            | {
                                matchExpressions?:
                                  | {
                                      key?: string | undefined
                                      operator?: string | undefined
                                      values?: string[] | undefined
                                    }[]
                                  | undefined
                                matchLabels?: object | undefined
                              }
                            | undefined
                          maxSkew?: number | undefined
                          minDomains?: number | undefined
                          topologyKey?: string | undefined
                          whenUnsatisfiable?: string | undefined
                        }[]
                      | undefined
                  }
                | undefined
              podDisruptionBudget?:
                | {
                    maxUnavailable?: number | undefined
                    metadata?:
                      | {
                          annotations?: object | undefined
                          labels?: object | undefined
                        }
                      | undefined
                  }
                | undefined
              serviceAccount?:
                | {
                    metadata?:
                      | {
                          annotations?: object | undefined
                          labels?: object | undefined
                        }
                      | undefined
                  }
                | undefined
            }
          | undefined
        tls?:
          | {
              trustedCertificates?:
                | {
                    certificate: string
                    secretName: string
                  }[]
                | undefined
            }
          | undefined
        tracing?:
          | {
              type: 'jaeger'
            }
          | undefined
      }
    | undefined
  status?:
    | {
        conditions?:
          | {
              lastTransitionTime?: string | undefined
              message?: string | undefined
              reason?: string | undefined
              status?: string | undefined
              type?: string | undefined
            }[]
          | undefined
        labelSelector?: string | undefined
        observedGeneration?: number | undefined
        replicas?: number | undefined
        url?: string | undefined
      }
    | undefined
}
export type IoK8SApimachineryPkgApisMetaV1ListMeta = {
  continue?: string | undefined
  remainingItemCount?: number | undefined
  resourceVersion?: string | undefined
  selfLink?: string | undefined
}
export type IoStrimziKafkaV1Beta2KafkaBridgeList = {
  apiVersion?: string | undefined
  items: IoStrimziKafkaV1Beta2KafkaBridge[]
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ListMeta | undefined
}
export type IoStrimziKafkaV1Beta2KafkaConnector = {
  apiVersion?: string | undefined
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ObjectMeta | undefined
  spec?:
    | {
        class?: string | undefined
        config?: object | undefined
        pause?: boolean | undefined
        tasksMax?: number | undefined
      }
    | undefined
  status?:
    | {
        conditions?:
          | {
              lastTransitionTime?: string | undefined
              message?: string | undefined
              reason?: string | undefined
              status?: string | undefined
              type?: string | undefined
            }[]
          | undefined
        connectorStatus?: object | undefined
        observedGeneration?: number | undefined
        tasksMax?: number | undefined
        topics?: string[] | undefined
      }
    | undefined
}
export type IoStrimziKafkaV1Beta2KafkaConnectorList = {
  apiVersion?: string | undefined
  items: IoStrimziKafkaV1Beta2KafkaConnector[]
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ListMeta | undefined
}
export type IoStrimziKafkaV1Beta2KafkaConnect = {
  apiVersion?: string | undefined
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ObjectMeta | undefined
  spec?:
    | {
        authentication?:
          | {
              accessToken?:
                | {
                    key: string
                    secretName: string
                  }
                | undefined
              accessTokenIsJwt?: boolean | undefined
              audience?: string | undefined
              certificateAndKey?:
                | {
                    certificate: string
                    key: string
                    secretName: string
                  }
                | undefined
              clientId?: string | undefined
              clientSecret?:
                | {
                    key: string
                    secretName: string
                  }
                | undefined
              connectTimeoutSeconds?: number | undefined
              disableTlsHostnameVerification?: boolean | undefined
              maxTokenExpirySeconds?: number | undefined
              passwordSecret?:
                | {
                    password: string
                    secretName: string
                  }
                | undefined
              readTimeoutSeconds?: number | undefined
              refreshToken?:
                | {
                    key: string
                    secretName: string
                  }
                | undefined
              scope?: string | undefined
              tlsTrustedCertificates?:
                | {
                    certificate: string
                    secretName: string
                  }[]
                | undefined
              tokenEndpointUri?: string | undefined
              type:
                | 'tls'
                | 'scram-sha-256'
                | 'scram-sha-512'
                | 'plain'
                | 'oauth'
              username?: string | undefined
            }
          | undefined
        bootstrapServers: string
        build?:
          | {
              output: {
                additionalKanikoOptions?: string[] | undefined
                image: string
                pushSecret?: string | undefined
                type: 'docker' | 'imagestream'
              }
              plugins: {
                artifacts: {
                  artifact?: string | undefined
                  fileName?: string | undefined
                  group?: string | undefined
                  insecure?: boolean | undefined
                  repository?: string | undefined
                  sha512sum?: string | undefined
                  type: 'jar' | 'tgz' | 'zip' | 'maven' | 'other'
                  url?: string | undefined
                  version?: string | undefined
                }[]
                name: string
              }[]
              resources?:
                | {
                    limits?: object | undefined
                    requests?: object | undefined
                  }
                | undefined
            }
          | undefined
        clientRackInitImage?: string | undefined
        config?: object | undefined
        externalConfiguration?:
          | {
              env?:
                | {
                    name: string
                    valueFrom: {
                      configMapKeyRef?:
                        | {
                            key?: string | undefined
                            name?: string | undefined
                            optional?: boolean | undefined
                          }
                        | undefined
                      secretKeyRef?:
                        | {
                            key?: string | undefined
                            name?: string | undefined
                            optional?: boolean | undefined
                          }
                        | undefined
                    }
                  }[]
                | undefined
              volumes?:
                | {
                    configMap?:
                      | {
                          defaultMode?: number | undefined
                          items?:
                            | {
                                key?: string | undefined
                                mode?: number | undefined
                                path?: string | undefined
                              }[]
                            | undefined
                          name?: string | undefined
                          optional?: boolean | undefined
                        }
                      | undefined
                    name: string
                    secret?:
                      | {
                          defaultMode?: number | undefined
                          items?:
                            | {
                                key?: string | undefined
                                mode?: number | undefined
                                path?: string | undefined
                              }[]
                            | undefined
                          optional?: boolean | undefined
                          secretName?: string | undefined
                        }
                      | undefined
                  }[]
                | undefined
            }
          | undefined
        image?: string | undefined
        jmxOptions?:
          | {
              authentication?:
                | {
                    type: 'password'
                  }
                | undefined
            }
          | undefined
        jvmOptions?:
          | {
              '-XX'?: object | undefined
              '-Xms'?: string | undefined
              '-Xmx'?: string | undefined
              gcLoggingEnabled?: boolean | undefined
              javaSystemProperties?:
                | {
                    name?: string | undefined
                    value?: string | undefined
                  }[]
                | undefined
            }
          | undefined
        livenessProbe?:
          | {
              failureThreshold?: number | undefined
              initialDelaySeconds?: number | undefined
              periodSeconds?: number | undefined
              successThreshold?: number | undefined
              timeoutSeconds?: number | undefined
            }
          | undefined
        logging?:
          | {
              loggers?: object | undefined
              type: 'inline' | 'external'
              valueFrom?:
                | {
                    configMapKeyRef?:
                      | {
                          key?: string | undefined
                          name?: string | undefined
                          optional?: boolean | undefined
                        }
                      | undefined
                  }
                | undefined
            }
          | undefined
        metricsConfig?:
          | {
              type: 'jmxPrometheusExporter'
              valueFrom: {
                configMapKeyRef?:
                  | {
                      key?: string | undefined
                      name?: string | undefined
                      optional?: boolean | undefined
                    }
                  | undefined
              }
            }
          | undefined
        rack?:
          | {
              topologyKey: string
            }
          | undefined
        readinessProbe?:
          | {
              failureThreshold?: number | undefined
              initialDelaySeconds?: number | undefined
              periodSeconds?: number | undefined
              successThreshold?: number | undefined
              timeoutSeconds?: number | undefined
            }
          | undefined
        replicas?: number | undefined
        resources?:
          | {
              limits?: object | undefined
              requests?: object | undefined
            }
          | undefined
        template?:
          | {
              apiService?:
                | {
                    ipFamilies?: ('IPv4' | 'IPv6')[] | undefined
                    ipFamilyPolicy?:
                      | ('SingleStack' | 'PreferDualStack' | 'RequireDualStack')
                      | undefined
                    metadata?:
                      | {
                          annotations?: object | undefined
                          labels?: object | undefined
                        }
                      | undefined
                  }
                | undefined
              buildConfig?:
                | {
                    metadata?:
                      | {
                          annotations?: object | undefined
                          labels?: object | undefined
                        }
                      | undefined
                    pullSecret?: string | undefined
                  }
                | undefined
              buildContainer?:
                | {
                    env?:
                      | {
                          name?: string | undefined
                          value?: string | undefined
                        }[]
                      | undefined
                    securityContext?:
                      | {
                          allowPrivilegeEscalation?: boolean | undefined
                          capabilities?:
                            | {
                                add?: string[] | undefined
                                drop?: string[] | undefined
                              }
                            | undefined
                          privileged?: boolean | undefined
                          procMount?: string | undefined
                          readOnlyRootFilesystem?: boolean | undefined
                          runAsGroup?: number | undefined
                          runAsNonRoot?: boolean | undefined
                          runAsUser?: number | undefined
                          seLinuxOptions?:
                            | {
                                level?: string | undefined
                                role?: string | undefined
                                type?: string | undefined
                                user?: string | undefined
                              }
                            | undefined
                          seccompProfile?:
                            | {
                                localhostProfile?: string | undefined
                                type?: string | undefined
                              }
                            | undefined
                          windowsOptions?:
                            | {
                                gmsaCredentialSpec?: string | undefined
                                gmsaCredentialSpecName?: string | undefined
                                hostProcess?: boolean | undefined
                                runAsUserName?: string | undefined
                              }
                            | undefined
                        }
                      | undefined
                  }
                | undefined
              buildPod?:
                | {
                    affinity?:
                      | {
                          nodeAffinity?:
                            | {
                                preferredDuringSchedulingIgnoredDuringExecution?:
                                  | {
                                      preference?:
                                        | {
                                            matchExpressions?:
                                              | {
                                                  key?: string | undefined
                                                  operator?: string | undefined
                                                  values?: string[] | undefined
                                                }[]
                                              | undefined
                                            matchFields?:
                                              | {
                                                  key?: string | undefined
                                                  operator?: string | undefined
                                                  values?: string[] | undefined
                                                }[]
                                              | undefined
                                          }
                                        | undefined
                                      weight?: number | undefined
                                    }[]
                                  | undefined
                                requiredDuringSchedulingIgnoredDuringExecution?:
                                  | {
                                      nodeSelectorTerms?:
                                        | {
                                            matchExpressions?:
                                              | {
                                                  key?: string | undefined
                                                  operator?: string | undefined
                                                  values?: string[] | undefined
                                                }[]
                                              | undefined
                                            matchFields?:
                                              | {
                                                  key?: string | undefined
                                                  operator?: string | undefined
                                                  values?: string[] | undefined
                                                }[]
                                              | undefined
                                          }[]
                                        | undefined
                                    }
                                  | undefined
                              }
                            | undefined
                          podAffinity?:
                            | {
                                preferredDuringSchedulingIgnoredDuringExecution?:
                                  | {
                                      podAffinityTerm?:
                                        | {
                                            labelSelector?:
                                              | {
                                                  matchExpressions?:
                                                    | {
                                                        key?: string | undefined
                                                        operator?:
                                                          | string
                                                          | undefined
                                                        values?:
                                                          | string[]
                                                          | undefined
                                                      }[]
                                                    | undefined
                                                  matchLabels?:
                                                    | object
                                                    | undefined
                                                }
                                              | undefined
                                            namespaceSelector?:
                                              | {
                                                  matchExpressions?:
                                                    | {
                                                        key?: string | undefined
                                                        operator?:
                                                          | string
                                                          | undefined
                                                        values?:
                                                          | string[]
                                                          | undefined
                                                      }[]
                                                    | undefined
                                                  matchLabels?:
                                                    | object
                                                    | undefined
                                                }
                                              | undefined
                                            namespaces?: string[] | undefined
                                            topologyKey?: string | undefined
                                          }
                                        | undefined
                                      weight?: number | undefined
                                    }[]
                                  | undefined
                                requiredDuringSchedulingIgnoredDuringExecution?:
                                  | {
                                      labelSelector?:
                                        | {
                                            matchExpressions?:
                                              | {
                                                  key?: string | undefined
                                                  operator?: string | undefined
                                                  values?: string[] | undefined
                                                }[]
                                              | undefined
                                            matchLabels?: object | undefined
                                          }
                                        | undefined
                                      namespaceSelector?:
                                        | {
                                            matchExpressions?:
                                              | {
                                                  key?: string | undefined
                                                  operator?: string | undefined
                                                  values?: string[] | undefined
                                                }[]
                                              | undefined
                                            matchLabels?: object | undefined
                                          }
                                        | undefined
                                      namespaces?: string[] | undefined
                                      topologyKey?: string | undefined
                                    }[]
                                  | undefined
                              }
                            | undefined
                          podAntiAffinity?:
                            | {
                                preferredDuringSchedulingIgnoredDuringExecution?:
                                  | {
                                      podAffinityTerm?:
                                        | {
                                            labelSelector?:
                                              | {
                                                  matchExpressions?:
                                                    | {
                                                        key?: string | undefined
                                                        operator?:
                                                          | string
                                                          | undefined
                                                        values?:
                                                          | string[]
                                                          | undefined
                                                      }[]
                                                    | undefined
                                                  matchLabels?:
                                                    | object
                                                    | undefined
                                                }
                                              | undefined
                                            namespaceSelector?:
                                              | {
                                                  matchExpressions?:
                                                    | {
                                                        key?: string | undefined
                                                        operator?:
                                                          | string
                                                          | undefined
                                                        values?:
                                                          | string[]
                                                          | undefined
                                                      }[]
                                                    | undefined
                                                  matchLabels?:
                                                    | object
                                                    | undefined
                                                }
                                              | undefined
                                            namespaces?: string[] | undefined
                                            topologyKey?: string | undefined
                                          }
                                        | undefined
                                      weight?: number | undefined
                                    }[]
                                  | undefined
                                requiredDuringSchedulingIgnoredDuringExecution?:
                                  | {
                                      labelSelector?:
                                        | {
                                            matchExpressions?:
                                              | {
                                                  key?: string | undefined
                                                  operator?: string | undefined
                                                  values?: string[] | undefined
                                                }[]
                                              | undefined
                                            matchLabels?: object | undefined
                                          }
                                        | undefined
                                      namespaceSelector?:
                                        | {
                                            matchExpressions?:
                                              | {
                                                  key?: string | undefined
                                                  operator?: string | undefined
                                                  values?: string[] | undefined
                                                }[]
                                              | undefined
                                            matchLabels?: object | undefined
                                          }
                                        | undefined
                                      namespaces?: string[] | undefined
                                      topologyKey?: string | undefined
                                    }[]
                                  | undefined
                              }
                            | undefined
                        }
                      | undefined
                    enableServiceLinks?: boolean | undefined
                    hostAliases?:
                      | {
                          hostnames?: string[] | undefined
                          ip?: string | undefined
                        }[]
                      | undefined
                    imagePullSecrets?:
                      | {
                          name?: string | undefined
                        }[]
                      | undefined
                    metadata?:
                      | {
                          annotations?: object | undefined
                          labels?: object | undefined
                        }
                      | undefined
                    priorityClassName?: string | undefined
                    schedulerName?: string | undefined
                    securityContext?:
                      | {
                          fsGroup?: number | undefined
                          fsGroupChangePolicy?: string | undefined
                          runAsGroup?: number | undefined
                          runAsNonRoot?: boolean | undefined
                          runAsUser?: number | undefined
                          seLinuxOptions?:
                            | {
                                level?: string | undefined
                                role?: string | undefined
                                type?: string | undefined
                                user?: string | undefined
                              }
                            | undefined
                          seccompProfile?:
                            | {
                                localhostProfile?: string | undefined
                                type?: string | undefined
                              }
                            | undefined
                          supplementalGroups?: number[] | undefined
                          sysctls?:
                            | {
                                name?: string | undefined
                                value?: string | undefined
                              }[]
                            | undefined
                          windowsOptions?:
                            | {
                                gmsaCredentialSpec?: string | undefined
                                gmsaCredentialSpecName?: string | undefined
                                hostProcess?: boolean | undefined
                                runAsUserName?: string | undefined
                              }
                            | undefined
                        }
                      | undefined
                    terminationGracePeriodSeconds?: number | undefined
                    tmpDirSizeLimit?: string | undefined
                    tolerations?:
                      | {
                          effect?: string | undefined
                          key?: string | undefined
                          operator?: string | undefined
                          tolerationSeconds?: number | undefined
                          value?: string | undefined
                        }[]
                      | undefined
                    topologySpreadConstraints?:
                      | {
                          labelSelector?:
                            | {
                                matchExpressions?:
                                  | {
                                      key?: string | undefined
                                      operator?: string | undefined
                                      values?: string[] | undefined
                                    }[]
                                  | undefined
                                matchLabels?: object | undefined
                              }
                            | undefined
                          maxSkew?: number | undefined
                          minDomains?: number | undefined
                          topologyKey?: string | undefined
                          whenUnsatisfiable?: string | undefined
                        }[]
                      | undefined
                  }
                | undefined
              buildServiceAccount?:
                | {
                    metadata?:
                      | {
                          annotations?: object | undefined
                          labels?: object | undefined
                        }
                      | undefined
                  }
                | undefined
              clusterRoleBinding?:
                | {
                    metadata?:
                      | {
                          annotations?: object | undefined
                          labels?: object | undefined
                        }
                      | undefined
                  }
                | undefined
              connectContainer?:
                | {
                    env?:
                      | {
                          name?: string | undefined
                          value?: string | undefined
                        }[]
                      | undefined
                    securityContext?:
                      | {
                          allowPrivilegeEscalation?: boolean | undefined
                          capabilities?:
                            | {
                                add?: string[] | undefined
                                drop?: string[] | undefined
                              }
                            | undefined
                          privileged?: boolean | undefined
                          procMount?: string | undefined
                          readOnlyRootFilesystem?: boolean | undefined
                          runAsGroup?: number | undefined
                          runAsNonRoot?: boolean | undefined
                          runAsUser?: number | undefined
                          seLinuxOptions?:
                            | {
                                level?: string | undefined
                                role?: string | undefined
                                type?: string | undefined
                                user?: string | undefined
                              }
                            | undefined
                          seccompProfile?:
                            | {
                                localhostProfile?: string | undefined
                                type?: string | undefined
                              }
                            | undefined
                          windowsOptions?:
                            | {
                                gmsaCredentialSpec?: string | undefined
                                gmsaCredentialSpecName?: string | undefined
                                hostProcess?: boolean | undefined
                                runAsUserName?: string | undefined
                              }
                            | undefined
                        }
                      | undefined
                  }
                | undefined
              deployment?:
                | {
                    deploymentStrategy?:
                      | ('RollingUpdate' | 'Recreate')
                      | undefined
                    metadata?:
                      | {
                          annotations?: object | undefined
                          labels?: object | undefined
                        }
                      | undefined
                  }
                | undefined
              initContainer?:
                | {
                    env?:
                      | {
                          name?: string | undefined
                          value?: string | undefined
                        }[]
                      | undefined
                    securityContext?:
                      | {
                          allowPrivilegeEscalation?: boolean | undefined
                          capabilities?:
                            | {
                                add?: string[] | undefined
                                drop?: string[] | undefined
                              }
                            | undefined
                          privileged?: boolean | undefined
                          procMount?: string | undefined
                          readOnlyRootFilesystem?: boolean | undefined
                          runAsGroup?: number | undefined
                          runAsNonRoot?: boolean | undefined
                          runAsUser?: number | undefined
                          seLinuxOptions?:
                            | {
                                level?: string | undefined
                                role?: string | undefined
                                type?: string | undefined
                                user?: string | undefined
                              }
                            | undefined
                          seccompProfile?:
                            | {
                                localhostProfile?: string | undefined
                                type?: string | undefined
                              }
                            | undefined
                          windowsOptions?:
                            | {
                                gmsaCredentialSpec?: string | undefined
                                gmsaCredentialSpecName?: string | undefined
                                hostProcess?: boolean | undefined
                                runAsUserName?: string | undefined
                              }
                            | undefined
                        }
                      | undefined
                  }
                | undefined
              jmxSecret?:
                | {
                    metadata?:
                      | {
                          annotations?: object | undefined
                          labels?: object | undefined
                        }
                      | undefined
                  }
                | undefined
              pod?:
                | {
                    affinity?:
                      | {
                          nodeAffinity?:
                            | {
                                preferredDuringSchedulingIgnoredDuringExecution?:
                                  | {
                                      preference?:
                                        | {
                                            matchExpressions?:
                                              | {
                                                  key?: string | undefined
                                                  operator?: string | undefined
                                                  values?: string[] | undefined
                                                }[]
                                              | undefined
                                            matchFields?:
                                              | {
                                                  key?: string | undefined
                                                  operator?: string | undefined
                                                  values?: string[] | undefined
                                                }[]
                                              | undefined
                                          }
                                        | undefined
                                      weight?: number | undefined
                                    }[]
                                  | undefined
                                requiredDuringSchedulingIgnoredDuringExecution?:
                                  | {
                                      nodeSelectorTerms?:
                                        | {
                                            matchExpressions?:
                                              | {
                                                  key?: string | undefined
                                                  operator?: string | undefined
                                                  values?: string[] | undefined
                                                }[]
                                              | undefined
                                            matchFields?:
                                              | {
                                                  key?: string | undefined
                                                  operator?: string | undefined
                                                  values?: string[] | undefined
                                                }[]
                                              | undefined
                                          }[]
                                        | undefined
                                    }
                                  | undefined
                              }
                            | undefined
                          podAffinity?:
                            | {
                                preferredDuringSchedulingIgnoredDuringExecution?:
                                  | {
                                      podAffinityTerm?:
                                        | {
                                            labelSelector?:
                                              | {
                                                  matchExpressions?:
                                                    | {
                                                        key?: string | undefined
                                                        operator?:
                                                          | string
                                                          | undefined
                                                        values?:
                                                          | string[]
                                                          | undefined
                                                      }[]
                                                    | undefined
                                                  matchLabels?:
                                                    | object
                                                    | undefined
                                                }
                                              | undefined
                                            namespaceSelector?:
                                              | {
                                                  matchExpressions?:
                                                    | {
                                                        key?: string | undefined
                                                        operator?:
                                                          | string
                                                          | undefined
                                                        values?:
                                                          | string[]
                                                          | undefined
                                                      }[]
                                                    | undefined
                                                  matchLabels?:
                                                    | object
                                                    | undefined
                                                }
                                              | undefined
                                            namespaces?: string[] | undefined
                                            topologyKey?: string | undefined
                                          }
                                        | undefined
                                      weight?: number | undefined
                                    }[]
                                  | undefined
                                requiredDuringSchedulingIgnoredDuringExecution?:
                                  | {
                                      labelSelector?:
                                        | {
                                            matchExpressions?:
                                              | {
                                                  key?: string | undefined
                                                  operator?: string | undefined
                                                  values?: string[] | undefined
                                                }[]
                                              | undefined
                                            matchLabels?: object | undefined
                                          }
                                        | undefined
                                      namespaceSelector?:
                                        | {
                                            matchExpressions?:
                                              | {
                                                  key?: string | undefined
                                                  operator?: string | undefined
                                                  values?: string[] | undefined
                                                }[]
                                              | undefined
                                            matchLabels?: object | undefined
                                          }
                                        | undefined
                                      namespaces?: string[] | undefined
                                      topologyKey?: string | undefined
                                    }[]
                                  | undefined
                              }
                            | undefined
                          podAntiAffinity?:
                            | {
                                preferredDuringSchedulingIgnoredDuringExecution?:
                                  | {
                                      podAffinityTerm?:
                                        | {
                                            labelSelector?:
                                              | {
                                                  matchExpressions?:
                                                    | {
                                                        key?: string | undefined
                                                        operator?:
                                                          | string
                                                          | undefined
                                                        values?:
                                                          | string[]
                                                          | undefined
                                                      }[]
                                                    | undefined
                                                  matchLabels?:
                                                    | object
                                                    | undefined
                                                }
                                              | undefined
                                            namespaceSelector?:
                                              | {
                                                  matchExpressions?:
                                                    | {
                                                        key?: string | undefined
                                                        operator?:
                                                          | string
                                                          | undefined
                                                        values?:
                                                          | string[]
                                                          | undefined
                                                      }[]
                                                    | undefined
                                                  matchLabels?:
                                                    | object
                                                    | undefined
                                                }
                                              | undefined
                                            namespaces?: string[] | undefined
                                            topologyKey?: string | undefined
                                          }
                                        | undefined
                                      weight?: number | undefined
                                    }[]
                                  | undefined
                                requiredDuringSchedulingIgnoredDuringExecution?:
                                  | {
                                      labelSelector?:
                                        | {
                                            matchExpressions?:
                                              | {
                                                  key?: string | undefined
                                                  operator?: string | undefined
                                                  values?: string[] | undefined
                                                }[]
                                              | undefined
                                            matchLabels?: object | undefined
                                          }
                                        | undefined
                                      namespaceSelector?:
                                        | {
                                            matchExpressions?:
                                              | {
                                                  key?: string | undefined
                                                  operator?: string | undefined
                                                  values?: string[] | undefined
                                                }[]
                                              | undefined
                                            matchLabels?: object | undefined
                                          }
                                        | undefined
                                      namespaces?: string[] | undefined
                                      topologyKey?: string | undefined
                                    }[]
                                  | undefined
                              }
                            | undefined
                        }
                      | undefined
                    enableServiceLinks?: boolean | undefined
                    hostAliases?:
                      | {
                          hostnames?: string[] | undefined
                          ip?: string | undefined
                        }[]
                      | undefined
                    imagePullSecrets?:
                      | {
                          name?: string | undefined
                        }[]
                      | undefined
                    metadata?:
                      | {
                          annotations?: object | undefined
                          labels?: object | undefined
                        }
                      | undefined
                    priorityClassName?: string | undefined
                    schedulerName?: string | undefined
                    securityContext?:
                      | {
                          fsGroup?: number | undefined
                          fsGroupChangePolicy?: string | undefined
                          runAsGroup?: number | undefined
                          runAsNonRoot?: boolean | undefined
                          runAsUser?: number | undefined
                          seLinuxOptions?:
                            | {
                                level?: string | undefined
                                role?: string | undefined
                                type?: string | undefined
                                user?: string | undefined
                              }
                            | undefined
                          seccompProfile?:
                            | {
                                localhostProfile?: string | undefined
                                type?: string | undefined
                              }
                            | undefined
                          supplementalGroups?: number[] | undefined
                          sysctls?:
                            | {
                                name?: string | undefined
                                value?: string | undefined
                              }[]
                            | undefined
                          windowsOptions?:
                            | {
                                gmsaCredentialSpec?: string | undefined
                                gmsaCredentialSpecName?: string | undefined
                                hostProcess?: boolean | undefined
                                runAsUserName?: string | undefined
                              }
                            | undefined
                        }
                      | undefined
                    terminationGracePeriodSeconds?: number | undefined
                    tmpDirSizeLimit?: string | undefined
                    tolerations?:
                      | {
                          effect?: string | undefined
                          key?: string | undefined
                          operator?: string | undefined
                          tolerationSeconds?: number | undefined
                          value?: string | undefined
                        }[]
                      | undefined
                    topologySpreadConstraints?:
                      | {
                          labelSelector?:
                            | {
                                matchExpressions?:
                                  | {
                                      key?: string | undefined
                                      operator?: string | undefined
                                      values?: string[] | undefined
                                    }[]
                                  | undefined
                                matchLabels?: object | undefined
                              }
                            | undefined
                          maxSkew?: number | undefined
                          minDomains?: number | undefined
                          topologyKey?: string | undefined
                          whenUnsatisfiable?: string | undefined
                        }[]
                      | undefined
                  }
                | undefined
              podDisruptionBudget?:
                | {
                    maxUnavailable?: number | undefined
                    metadata?:
                      | {
                          annotations?: object | undefined
                          labels?: object | undefined
                        }
                      | undefined
                  }
                | undefined
              serviceAccount?:
                | {
                    metadata?:
                      | {
                          annotations?: object | undefined
                          labels?: object | undefined
                        }
                      | undefined
                  }
                | undefined
            }
          | undefined
        tls?:
          | {
              trustedCertificates?:
                | {
                    certificate: string
                    secretName: string
                  }[]
                | undefined
            }
          | undefined
        tracing?:
          | {
              type: 'jaeger'
            }
          | undefined
        version?: string | undefined
      }
    | undefined
  status?:
    | {
        conditions?:
          | {
              lastTransitionTime?: string | undefined
              message?: string | undefined
              reason?: string | undefined
              status?: string | undefined
              type?: string | undefined
            }[]
          | undefined
        connectorPlugins?:
          | {
              class?: string | undefined
              type?: string | undefined
              version?: string | undefined
            }[]
          | undefined
        labelSelector?: string | undefined
        observedGeneration?: number | undefined
        replicas?: number | undefined
        url?: string | undefined
      }
    | undefined
}
export type IoStrimziKafkaV1Beta2KafkaConnectList = {
  apiVersion?: string | undefined
  items: IoStrimziKafkaV1Beta2KafkaConnect[]
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ListMeta | undefined
}
export type IoStrimziKafkaV1Beta2KafkaMirrorMaker2 = {
  apiVersion?: string | undefined
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ObjectMeta | undefined
  spec?:
    | {
        clientRackInitImage?: string | undefined
        clusters?:
          | {
              alias: string
              authentication?:
                | {
                    accessToken?:
                      | {
                          key: string
                          secretName: string
                        }
                      | undefined
                    accessTokenIsJwt?: boolean | undefined
                    audience?: string | undefined
                    certificateAndKey?:
                      | {
                          certificate: string
                          key: string
                          secretName: string
                        }
                      | undefined
                    clientId?: string | undefined
                    clientSecret?:
                      | {
                          key: string
                          secretName: string
                        }
                      | undefined
                    connectTimeoutSeconds?: number | undefined
                    disableTlsHostnameVerification?: boolean | undefined
                    maxTokenExpirySeconds?: number | undefined
                    passwordSecret?:
                      | {
                          password: string
                          secretName: string
                        }
                      | undefined
                    readTimeoutSeconds?: number | undefined
                    refreshToken?:
                      | {
                          key: string
                          secretName: string
                        }
                      | undefined
                    scope?: string | undefined
                    tlsTrustedCertificates?:
                      | {
                          certificate: string
                          secretName: string
                        }[]
                      | undefined
                    tokenEndpointUri?: string | undefined
                    type:
                      | 'tls'
                      | 'scram-sha-256'
                      | 'scram-sha-512'
                      | 'plain'
                      | 'oauth'
                    username?: string | undefined
                  }
                | undefined
              bootstrapServers: string
              config?: object | undefined
              tls?:
                | {
                    trustedCertificates?:
                      | {
                          certificate: string
                          secretName: string
                        }[]
                      | undefined
                  }
                | undefined
            }[]
          | undefined
        connectCluster: string
        externalConfiguration?:
          | {
              env?:
                | {
                    name: string
                    valueFrom: {
                      configMapKeyRef?:
                        | {
                            key?: string | undefined
                            name?: string | undefined
                            optional?: boolean | undefined
                          }
                        | undefined
                      secretKeyRef?:
                        | {
                            key?: string | undefined
                            name?: string | undefined
                            optional?: boolean | undefined
                          }
                        | undefined
                    }
                  }[]
                | undefined
              volumes?:
                | {
                    configMap?:
                      | {
                          defaultMode?: number | undefined
                          items?:
                            | {
                                key?: string | undefined
                                mode?: number | undefined
                                path?: string | undefined
                              }[]
                            | undefined
                          name?: string | undefined
                          optional?: boolean | undefined
                        }
                      | undefined
                    name: string
                    secret?:
                      | {
                          defaultMode?: number | undefined
                          items?:
                            | {
                                key?: string | undefined
                                mode?: number | undefined
                                path?: string | undefined
                              }[]
                            | undefined
                          optional?: boolean | undefined
                          secretName?: string | undefined
                        }
                      | undefined
                  }[]
                | undefined
            }
          | undefined
        image?: string | undefined
        jmxOptions?:
          | {
              authentication?:
                | {
                    type: 'password'
                  }
                | undefined
            }
          | undefined
        jvmOptions?:
          | {
              '-XX'?: object | undefined
              '-Xms'?: string | undefined
              '-Xmx'?: string | undefined
              gcLoggingEnabled?: boolean | undefined
              javaSystemProperties?:
                | {
                    name?: string | undefined
                    value?: string | undefined
                  }[]
                | undefined
            }
          | undefined
        livenessProbe?:
          | {
              failureThreshold?: number | undefined
              initialDelaySeconds?: number | undefined
              periodSeconds?: number | undefined
              successThreshold?: number | undefined
              timeoutSeconds?: number | undefined
            }
          | undefined
        logging?:
          | {
              loggers?: object | undefined
              type: 'inline' | 'external'
              valueFrom?:
                | {
                    configMapKeyRef?:
                      | {
                          key?: string | undefined
                          name?: string | undefined
                          optional?: boolean | undefined
                        }
                      | undefined
                  }
                | undefined
            }
          | undefined
        metricsConfig?:
          | {
              type: 'jmxPrometheusExporter'
              valueFrom: {
                configMapKeyRef?:
                  | {
                      key?: string | undefined
                      name?: string | undefined
                      optional?: boolean | undefined
                    }
                  | undefined
              }
            }
          | undefined
        mirrors?:
          | {
              checkpointConnector?:
                | {
                    config?: object | undefined
                    pause?: boolean | undefined
                    tasksMax?: number | undefined
                  }
                | undefined
              groupsBlacklistPattern?: string | undefined
              groupsExcludePattern?: string | undefined
              groupsPattern?: string | undefined
              heartbeatConnector?:
                | {
                    config?: object | undefined
                    pause?: boolean | undefined
                    tasksMax?: number | undefined
                  }
                | undefined
              sourceCluster: string
              sourceConnector?:
                | {
                    config?: object | undefined
                    pause?: boolean | undefined
                    tasksMax?: number | undefined
                  }
                | undefined
              targetCluster: string
              topicsBlacklistPattern?: string | undefined
              topicsExcludePattern?: string | undefined
              topicsPattern?: string | undefined
            }[]
          | undefined
        rack?:
          | {
              topologyKey: string
            }
          | undefined
        readinessProbe?:
          | {
              failureThreshold?: number | undefined
              initialDelaySeconds?: number | undefined
              periodSeconds?: number | undefined
              successThreshold?: number | undefined
              timeoutSeconds?: number | undefined
            }
          | undefined
        replicas?: number | undefined
        resources?:
          | {
              limits?: object | undefined
              requests?: object | undefined
            }
          | undefined
        template?:
          | {
              apiService?:
                | {
                    ipFamilies?: ('IPv4' | 'IPv6')[] | undefined
                    ipFamilyPolicy?:
                      | ('SingleStack' | 'PreferDualStack' | 'RequireDualStack')
                      | undefined
                    metadata?:
                      | {
                          annotations?: object | undefined
                          labels?: object | undefined
                        }
                      | undefined
                  }
                | undefined
              buildConfig?:
                | {
                    metadata?:
                      | {
                          annotations?: object | undefined
                          labels?: object | undefined
                        }
                      | undefined
                    pullSecret?: string | undefined
                  }
                | undefined
              buildContainer?:
                | {
                    env?:
                      | {
                          name?: string | undefined
                          value?: string | undefined
                        }[]
                      | undefined
                    securityContext?:
                      | {
                          allowPrivilegeEscalation?: boolean | undefined
                          capabilities?:
                            | {
                                add?: string[] | undefined
                                drop?: string[] | undefined
                              }
                            | undefined
                          privileged?: boolean | undefined
                          procMount?: string | undefined
                          readOnlyRootFilesystem?: boolean | undefined
                          runAsGroup?: number | undefined
                          runAsNonRoot?: boolean | undefined
                          runAsUser?: number | undefined
                          seLinuxOptions?:
                            | {
                                level?: string | undefined
                                role?: string | undefined
                                type?: string | undefined
                                user?: string | undefined
                              }
                            | undefined
                          seccompProfile?:
                            | {
                                localhostProfile?: string | undefined
                                type?: string | undefined
                              }
                            | undefined
                          windowsOptions?:
                            | {
                                gmsaCredentialSpec?: string | undefined
                                gmsaCredentialSpecName?: string | undefined
                                hostProcess?: boolean | undefined
                                runAsUserName?: string | undefined
                              }
                            | undefined
                        }
                      | undefined
                  }
                | undefined
              buildPod?:
                | {
                    affinity?:
                      | {
                          nodeAffinity?:
                            | {
                                preferredDuringSchedulingIgnoredDuringExecution?:
                                  | {
                                      preference?:
                                        | {
                                            matchExpressions?:
                                              | {
                                                  key?: string | undefined
                                                  operator?: string | undefined
                                                  values?: string[] | undefined
                                                }[]
                                              | undefined
                                            matchFields?:
                                              | {
                                                  key?: string | undefined
                                                  operator?: string | undefined
                                                  values?: string[] | undefined
                                                }[]
                                              | undefined
                                          }
                                        | undefined
                                      weight?: number | undefined
                                    }[]
                                  | undefined
                                requiredDuringSchedulingIgnoredDuringExecution?:
                                  | {
                                      nodeSelectorTerms?:
                                        | {
                                            matchExpressions?:
                                              | {
                                                  key?: string | undefined
                                                  operator?: string | undefined
                                                  values?: string[] | undefined
                                                }[]
                                              | undefined
                                            matchFields?:
                                              | {
                                                  key?: string | undefined
                                                  operator?: string | undefined
                                                  values?: string[] | undefined
                                                }[]
                                              | undefined
                                          }[]
                                        | undefined
                                    }
                                  | undefined
                              }
                            | undefined
                          podAffinity?:
                            | {
                                preferredDuringSchedulingIgnoredDuringExecution?:
                                  | {
                                      podAffinityTerm?:
                                        | {
                                            labelSelector?:
                                              | {
                                                  matchExpressions?:
                                                    | {
                                                        key?: string | undefined
                                                        operator?:
                                                          | string
                                                          | undefined
                                                        values?:
                                                          | string[]
                                                          | undefined
                                                      }[]
                                                    | undefined
                                                  matchLabels?:
                                                    | object
                                                    | undefined
                                                }
                                              | undefined
                                            namespaceSelector?:
                                              | {
                                                  matchExpressions?:
                                                    | {
                                                        key?: string | undefined
                                                        operator?:
                                                          | string
                                                          | undefined
                                                        values?:
                                                          | string[]
                                                          | undefined
                                                      }[]
                                                    | undefined
                                                  matchLabels?:
                                                    | object
                                                    | undefined
                                                }
                                              | undefined
                                            namespaces?: string[] | undefined
                                            topologyKey?: string | undefined
                                          }
                                        | undefined
                                      weight?: number | undefined
                                    }[]
                                  | undefined
                                requiredDuringSchedulingIgnoredDuringExecution?:
                                  | {
                                      labelSelector?:
                                        | {
                                            matchExpressions?:
                                              | {
                                                  key?: string | undefined
                                                  operator?: string | undefined
                                                  values?: string[] | undefined
                                                }[]
                                              | undefined
                                            matchLabels?: object | undefined
                                          }
                                        | undefined
                                      namespaceSelector?:
                                        | {
                                            matchExpressions?:
                                              | {
                                                  key?: string | undefined
                                                  operator?: string | undefined
                                                  values?: string[] | undefined
                                                }[]
                                              | undefined
                                            matchLabels?: object | undefined
                                          }
                                        | undefined
                                      namespaces?: string[] | undefined
                                      topologyKey?: string | undefined
                                    }[]
                                  | undefined
                              }
                            | undefined
                          podAntiAffinity?:
                            | {
                                preferredDuringSchedulingIgnoredDuringExecution?:
                                  | {
                                      podAffinityTerm?:
                                        | {
                                            labelSelector?:
                                              | {
                                                  matchExpressions?:
                                                    | {
                                                        key?: string | undefined
                                                        operator?:
                                                          | string
                                                          | undefined
                                                        values?:
                                                          | string[]
                                                          | undefined
                                                      }[]
                                                    | undefined
                                                  matchLabels?:
                                                    | object
                                                    | undefined
                                                }
                                              | undefined
                                            namespaceSelector?:
                                              | {
                                                  matchExpressions?:
                                                    | {
                                                        key?: string | undefined
                                                        operator?:
                                                          | string
                                                          | undefined
                                                        values?:
                                                          | string[]
                                                          | undefined
                                                      }[]
                                                    | undefined
                                                  matchLabels?:
                                                    | object
                                                    | undefined
                                                }
                                              | undefined
                                            namespaces?: string[] | undefined
                                            topologyKey?: string | undefined
                                          }
                                        | undefined
                                      weight?: number | undefined
                                    }[]
                                  | undefined
                                requiredDuringSchedulingIgnoredDuringExecution?:
                                  | {
                                      labelSelector?:
                                        | {
                                            matchExpressions?:
                                              | {
                                                  key?: string | undefined
                                                  operator?: string | undefined
                                                  values?: string[] | undefined
                                                }[]
                                              | undefined
                                            matchLabels?: object | undefined
                                          }
                                        | undefined
                                      namespaceSelector?:
                                        | {
                                            matchExpressions?:
                                              | {
                                                  key?: string | undefined
                                                  operator?: string | undefined
                                                  values?: string[] | undefined
                                                }[]
                                              | undefined
                                            matchLabels?: object | undefined
                                          }
                                        | undefined
                                      namespaces?: string[] | undefined
                                      topologyKey?: string | undefined
                                    }[]
                                  | undefined
                              }
                            | undefined
                        }
                      | undefined
                    enableServiceLinks?: boolean | undefined
                    hostAliases?:
                      | {
                          hostnames?: string[] | undefined
                          ip?: string | undefined
                        }[]
                      | undefined
                    imagePullSecrets?:
                      | {
                          name?: string | undefined
                        }[]
                      | undefined
                    metadata?:
                      | {
                          annotations?: object | undefined
                          labels?: object | undefined
                        }
                      | undefined
                    priorityClassName?: string | undefined
                    schedulerName?: string | undefined
                    securityContext?:
                      | {
                          fsGroup?: number | undefined
                          fsGroupChangePolicy?: string | undefined
                          runAsGroup?: number | undefined
                          runAsNonRoot?: boolean | undefined
                          runAsUser?: number | undefined
                          seLinuxOptions?:
                            | {
                                level?: string | undefined
                                role?: string | undefined
                                type?: string | undefined
                                user?: string | undefined
                              }
                            | undefined
                          seccompProfile?:
                            | {
                                localhostProfile?: string | undefined
                                type?: string | undefined
                              }
                            | undefined
                          supplementalGroups?: number[] | undefined
                          sysctls?:
                            | {
                                name?: string | undefined
                                value?: string | undefined
                              }[]
                            | undefined
                          windowsOptions?:
                            | {
                                gmsaCredentialSpec?: string | undefined
                                gmsaCredentialSpecName?: string | undefined
                                hostProcess?: boolean | undefined
                                runAsUserName?: string | undefined
                              }
                            | undefined
                        }
                      | undefined
                    terminationGracePeriodSeconds?: number | undefined
                    tmpDirSizeLimit?: string | undefined
                    tolerations?:
                      | {
                          effect?: string | undefined
                          key?: string | undefined
                          operator?: string | undefined
                          tolerationSeconds?: number | undefined
                          value?: string | undefined
                        }[]
                      | undefined
                    topologySpreadConstraints?:
                      | {
                          labelSelector?:
                            | {
                                matchExpressions?:
                                  | {
                                      key?: string | undefined
                                      operator?: string | undefined
                                      values?: string[] | undefined
                                    }[]
                                  | undefined
                                matchLabels?: object | undefined
                              }
                            | undefined
                          maxSkew?: number | undefined
                          minDomains?: number | undefined
                          topologyKey?: string | undefined
                          whenUnsatisfiable?: string | undefined
                        }[]
                      | undefined
                  }
                | undefined
              buildServiceAccount?:
                | {
                    metadata?:
                      | {
                          annotations?: object | undefined
                          labels?: object | undefined
                        }
                      | undefined
                  }
                | undefined
              clusterRoleBinding?:
                | {
                    metadata?:
                      | {
                          annotations?: object | undefined
                          labels?: object | undefined
                        }
                      | undefined
                  }
                | undefined
              connectContainer?:
                | {
                    env?:
                      | {
                          name?: string | undefined
                          value?: string | undefined
                        }[]
                      | undefined
                    securityContext?:
                      | {
                          allowPrivilegeEscalation?: boolean | undefined
                          capabilities?:
                            | {
                                add?: string[] | undefined
                                drop?: string[] | undefined
                              }
                            | undefined
                          privileged?: boolean | undefined
                          procMount?: string | undefined
                          readOnlyRootFilesystem?: boolean | undefined
                          runAsGroup?: number | undefined
                          runAsNonRoot?: boolean | undefined
                          runAsUser?: number | undefined
                          seLinuxOptions?:
                            | {
                                level?: string | undefined
                                role?: string | undefined
                                type?: string | undefined
                                user?: string | undefined
                              }
                            | undefined
                          seccompProfile?:
                            | {
                                localhostProfile?: string | undefined
                                type?: string | undefined
                              }
                            | undefined
                          windowsOptions?:
                            | {
                                gmsaCredentialSpec?: string | undefined
                                gmsaCredentialSpecName?: string | undefined
                                hostProcess?: boolean | undefined
                                runAsUserName?: string | undefined
                              }
                            | undefined
                        }
                      | undefined
                  }
                | undefined
              deployment?:
                | {
                    deploymentStrategy?:
                      | ('RollingUpdate' | 'Recreate')
                      | undefined
                    metadata?:
                      | {
                          annotations?: object | undefined
                          labels?: object | undefined
                        }
                      | undefined
                  }
                | undefined
              initContainer?:
                | {
                    env?:
                      | {
                          name?: string | undefined
                          value?: string | undefined
                        }[]
                      | undefined
                    securityContext?:
                      | {
                          allowPrivilegeEscalation?: boolean | undefined
                          capabilities?:
                            | {
                                add?: string[] | undefined
                                drop?: string[] | undefined
                              }
                            | undefined
                          privileged?: boolean | undefined
                          procMount?: string | undefined
                          readOnlyRootFilesystem?: boolean | undefined
                          runAsGroup?: number | undefined
                          runAsNonRoot?: boolean | undefined
                          runAsUser?: number | undefined
                          seLinuxOptions?:
                            | {
                                level?: string | undefined
                                role?: string | undefined
                                type?: string | undefined
                                user?: string | undefined
                              }
                            | undefined
                          seccompProfile?:
                            | {
                                localhostProfile?: string | undefined
                                type?: string | undefined
                              }
                            | undefined
                          windowsOptions?:
                            | {
                                gmsaCredentialSpec?: string | undefined
                                gmsaCredentialSpecName?: string | undefined
                                hostProcess?: boolean | undefined
                                runAsUserName?: string | undefined
                              }
                            | undefined
                        }
                      | undefined
                  }
                | undefined
              jmxSecret?:
                | {
                    metadata?:
                      | {
                          annotations?: object | undefined
                          labels?: object | undefined
                        }
                      | undefined
                  }
                | undefined
              pod?:
                | {
                    affinity?:
                      | {
                          nodeAffinity?:
                            | {
                                preferredDuringSchedulingIgnoredDuringExecution?:
                                  | {
                                      preference?:
                                        | {
                                            matchExpressions?:
                                              | {
                                                  key?: string | undefined
                                                  operator?: string | undefined
                                                  values?: string[] | undefined
                                                }[]
                                              | undefined
                                            matchFields?:
                                              | {
                                                  key?: string | undefined
                                                  operator?: string | undefined
                                                  values?: string[] | undefined
                                                }[]
                                              | undefined
                                          }
                                        | undefined
                                      weight?: number | undefined
                                    }[]
                                  | undefined
                                requiredDuringSchedulingIgnoredDuringExecution?:
                                  | {
                                      nodeSelectorTerms?:
                                        | {
                                            matchExpressions?:
                                              | {
                                                  key?: string | undefined
                                                  operator?: string | undefined
                                                  values?: string[] | undefined
                                                }[]
                                              | undefined
                                            matchFields?:
                                              | {
                                                  key?: string | undefined
                                                  operator?: string | undefined
                                                  values?: string[] | undefined
                                                }[]
                                              | undefined
                                          }[]
                                        | undefined
                                    }
                                  | undefined
                              }
                            | undefined
                          podAffinity?:
                            | {
                                preferredDuringSchedulingIgnoredDuringExecution?:
                                  | {
                                      podAffinityTerm?:
                                        | {
                                            labelSelector?:
                                              | {
                                                  matchExpressions?:
                                                    | {
                                                        key?: string | undefined
                                                        operator?:
                                                          | string
                                                          | undefined
                                                        values?:
                                                          | string[]
                                                          | undefined
                                                      }[]
                                                    | undefined
                                                  matchLabels?:
                                                    | object
                                                    | undefined
                                                }
                                              | undefined
                                            namespaceSelector?:
                                              | {
                                                  matchExpressions?:
                                                    | {
                                                        key?: string | undefined
                                                        operator?:
                                                          | string
                                                          | undefined
                                                        values?:
                                                          | string[]
                                                          | undefined
                                                      }[]
                                                    | undefined
                                                  matchLabels?:
                                                    | object
                                                    | undefined
                                                }
                                              | undefined
                                            namespaces?: string[] | undefined
                                            topologyKey?: string | undefined
                                          }
                                        | undefined
                                      weight?: number | undefined
                                    }[]
                                  | undefined
                                requiredDuringSchedulingIgnoredDuringExecution?:
                                  | {
                                      labelSelector?:
                                        | {
                                            matchExpressions?:
                                              | {
                                                  key?: string | undefined
                                                  operator?: string | undefined
                                                  values?: string[] | undefined
                                                }[]
                                              | undefined
                                            matchLabels?: object | undefined
                                          }
                                        | undefined
                                      namespaceSelector?:
                                        | {
                                            matchExpressions?:
                                              | {
                                                  key?: string | undefined
                                                  operator?: string | undefined
                                                  values?: string[] | undefined
                                                }[]
                                              | undefined
                                            matchLabels?: object | undefined
                                          }
                                        | undefined
                                      namespaces?: string[] | undefined
                                      topologyKey?: string | undefined
                                    }[]
                                  | undefined
                              }
                            | undefined
                          podAntiAffinity?:
                            | {
                                preferredDuringSchedulingIgnoredDuringExecution?:
                                  | {
                                      podAffinityTerm?:
                                        | {
                                            labelSelector?:
                                              | {
                                                  matchExpressions?:
                                                    | {
                                                        key?: string | undefined
                                                        operator?:
                                                          | string
                                                          | undefined
                                                        values?:
                                                          | string[]
                                                          | undefined
                                                      }[]
                                                    | undefined
                                                  matchLabels?:
                                                    | object
                                                    | undefined
                                                }
                                              | undefined
                                            namespaceSelector?:
                                              | {
                                                  matchExpressions?:
                                                    | {
                                                        key?: string | undefined
                                                        operator?:
                                                          | string
                                                          | undefined
                                                        values?:
                                                          | string[]
                                                          | undefined
                                                      }[]
                                                    | undefined
                                                  matchLabels?:
                                                    | object
                                                    | undefined
                                                }
                                              | undefined
                                            namespaces?: string[] | undefined
                                            topologyKey?: string | undefined
                                          }
                                        | undefined
                                      weight?: number | undefined
                                    }[]
                                  | undefined
                                requiredDuringSchedulingIgnoredDuringExecution?:
                                  | {
                                      labelSelector?:
                                        | {
                                            matchExpressions?:
                                              | {
                                                  key?: string | undefined
                                                  operator?: string | undefined
                                                  values?: string[] | undefined
                                                }[]
                                              | undefined
                                            matchLabels?: object | undefined
                                          }
                                        | undefined
                                      namespaceSelector?:
                                        | {
                                            matchExpressions?:
                                              | {
                                                  key?: string | undefined
                                                  operator?: string | undefined
                                                  values?: string[] | undefined
                                                }[]
                                              | undefined
                                            matchLabels?: object | undefined
                                          }
                                        | undefined
                                      namespaces?: string[] | undefined
                                      topologyKey?: string | undefined
                                    }[]
                                  | undefined
                              }
                            | undefined
                        }
                      | undefined
                    enableServiceLinks?: boolean | undefined
                    hostAliases?:
                      | {
                          hostnames?: string[] | undefined
                          ip?: string | undefined
                        }[]
                      | undefined
                    imagePullSecrets?:
                      | {
                          name?: string | undefined
                        }[]
                      | undefined
                    metadata?:
                      | {
                          annotations?: object | undefined
                          labels?: object | undefined
                        }
                      | undefined
                    priorityClassName?: string | undefined
                    schedulerName?: string | undefined
                    securityContext?:
                      | {
                          fsGroup?: number | undefined
                          fsGroupChangePolicy?: string | undefined
                          runAsGroup?: number | undefined
                          runAsNonRoot?: boolean | undefined
                          runAsUser?: number | undefined
                          seLinuxOptions?:
                            | {
                                level?: string | undefined
                                role?: string | undefined
                                type?: string | undefined
                                user?: string | undefined
                              }
                            | undefined
                          seccompProfile?:
                            | {
                                localhostProfile?: string | undefined
                                type?: string | undefined
                              }
                            | undefined
                          supplementalGroups?: number[] | undefined
                          sysctls?:
                            | {
                                name?: string | undefined
                                value?: string | undefined
                              }[]
                            | undefined
                          windowsOptions?:
                            | {
                                gmsaCredentialSpec?: string | undefined
                                gmsaCredentialSpecName?: string | undefined
                                hostProcess?: boolean | undefined
                                runAsUserName?: string | undefined
                              }
                            | undefined
                        }
                      | undefined
                    terminationGracePeriodSeconds?: number | undefined
                    tmpDirSizeLimit?: string | undefined
                    tolerations?:
                      | {
                          effect?: string | undefined
                          key?: string | undefined
                          operator?: string | undefined
                          tolerationSeconds?: number | undefined
                          value?: string | undefined
                        }[]
                      | undefined
                    topologySpreadConstraints?:
                      | {
                          labelSelector?:
                            | {
                                matchExpressions?:
                                  | {
                                      key?: string | undefined
                                      operator?: string | undefined
                                      values?: string[] | undefined
                                    }[]
                                  | undefined
                                matchLabels?: object | undefined
                              }
                            | undefined
                          maxSkew?: number | undefined
                          minDomains?: number | undefined
                          topologyKey?: string | undefined
                          whenUnsatisfiable?: string | undefined
                        }[]
                      | undefined
                  }
                | undefined
              podDisruptionBudget?:
                | {
                    maxUnavailable?: number | undefined
                    metadata?:
                      | {
                          annotations?: object | undefined
                          labels?: object | undefined
                        }
                      | undefined
                  }
                | undefined
              serviceAccount?:
                | {
                    metadata?:
                      | {
                          annotations?: object | undefined
                          labels?: object | undefined
                        }
                      | undefined
                  }
                | undefined
            }
          | undefined
        tracing?:
          | {
              type: 'jaeger'
            }
          | undefined
        version?: string | undefined
      }
    | undefined
  status?:
    | {
        conditions?:
          | {
              lastTransitionTime?: string | undefined
              message?: string | undefined
              reason?: string | undefined
              status?: string | undefined
              type?: string | undefined
            }[]
          | undefined
        connectorPlugins?:
          | {
              class?: string | undefined
              type?: string | undefined
              version?: string | undefined
            }[]
          | undefined
        connectors?: object[] | undefined
        labelSelector?: string | undefined
        observedGeneration?: number | undefined
        replicas?: number | undefined
        url?: string | undefined
      }
    | undefined
}
export type IoStrimziKafkaV1Beta2KafkaMirrorMaker2List = {
  apiVersion?: string | undefined
  items: IoStrimziKafkaV1Beta2KafkaMirrorMaker2[]
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ListMeta | undefined
}
export type IoStrimziKafkaV1Beta2KafkaMirrorMaker = {
  apiVersion?: string | undefined
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ObjectMeta | undefined
  spec?:
    | (
        | {
            include: string
            consumer: {
              authentication?:
                | {
                    accessToken?:
                      | {
                          key: string
                          secretName: string
                        }
                      | undefined
                    accessTokenIsJwt?: boolean | undefined
                    audience?: string | undefined
                    certificateAndKey?:
                      | {
                          certificate: string
                          key: string
                          secretName: string
                        }
                      | undefined
                    clientId?: string | undefined
                    clientSecret?:
                      | {
                          key: string
                          secretName: string
                        }
                      | undefined
                    connectTimeoutSeconds?: number | undefined
                    disableTlsHostnameVerification?: boolean | undefined
                    maxTokenExpirySeconds?: number | undefined
                    passwordSecret?:
                      | {
                          password: string
                          secretName: string
                        }
                      | undefined
                    readTimeoutSeconds?: number | undefined
                    refreshToken?:
                      | {
                          key: string
                          secretName: string
                        }
                      | undefined
                    scope?: string | undefined
                    tlsTrustedCertificates?:
                      | {
                          certificate: string
                          secretName: string
                        }[]
                      | undefined
                    tokenEndpointUri?: string | undefined
                    type:
                      | 'tls'
                      | 'scram-sha-256'
                      | 'scram-sha-512'
                      | 'plain'
                      | 'oauth'
                    username?: string | undefined
                  }
                | undefined
              bootstrapServers: string
              config?: object | undefined
              groupId: string
              numStreams?: number | undefined
              offsetCommitInterval?: number | undefined
              tls?:
                | {
                    trustedCertificates?:
                      | {
                          certificate: string
                          secretName: string
                        }[]
                      | undefined
                  }
                | undefined
            }
            image?: string | undefined
            jvmOptions?:
              | {
                  '-XX'?: object | undefined
                  '-Xms'?: string | undefined
                  '-Xmx'?: string | undefined
                  gcLoggingEnabled?: boolean | undefined
                  javaSystemProperties?:
                    | {
                        name?: string | undefined
                        value?: string | undefined
                      }[]
                    | undefined
                }
              | undefined
            livenessProbe?:
              | {
                  failureThreshold?: number | undefined
                  initialDelaySeconds?: number | undefined
                  periodSeconds?: number | undefined
                  successThreshold?: number | undefined
                  timeoutSeconds?: number | undefined
                }
              | undefined
            logging?:
              | {
                  loggers?: object | undefined
                  type: 'inline' | 'external'
                  valueFrom?:
                    | {
                        configMapKeyRef?:
                          | {
                              key?: string | undefined
                              name?: string | undefined
                              optional?: boolean | undefined
                            }
                          | undefined
                      }
                    | undefined
                }
              | undefined
            metricsConfig?:
              | {
                  type: 'jmxPrometheusExporter'
                  valueFrom: {
                    configMapKeyRef?:
                      | {
                          key?: string | undefined
                          name?: string | undefined
                          optional?: boolean | undefined
                        }
                      | undefined
                  }
                }
              | undefined
            producer: {
              abortOnSendFailure?: boolean | undefined
              authentication?:
                | {
                    accessToken?:
                      | {
                          key: string
                          secretName: string
                        }
                      | undefined
                    accessTokenIsJwt?: boolean | undefined
                    audience?: string | undefined
                    certificateAndKey?:
                      | {
                          certificate: string
                          key: string
                          secretName: string
                        }
                      | undefined
                    clientId?: string | undefined
                    clientSecret?:
                      | {
                          key: string
                          secretName: string
                        }
                      | undefined
                    connectTimeoutSeconds?: number | undefined
                    disableTlsHostnameVerification?: boolean | undefined
                    maxTokenExpirySeconds?: number | undefined
                    passwordSecret?:
                      | {
                          password: string
                          secretName: string
                        }
                      | undefined
                    readTimeoutSeconds?: number | undefined
                    refreshToken?:
                      | {
                          key: string
                          secretName: string
                        }
                      | undefined
                    scope?: string | undefined
                    tlsTrustedCertificates?:
                      | {
                          certificate: string
                          secretName: string
                        }[]
                      | undefined
                    tokenEndpointUri?: string | undefined
                    type:
                      | 'tls'
                      | 'scram-sha-256'
                      | 'scram-sha-512'
                      | 'plain'
                      | 'oauth'
                    username?: string | undefined
                  }
                | undefined
              bootstrapServers: string
              config?: object | undefined
              tls?:
                | {
                    trustedCertificates?:
                      | {
                          certificate: string
                          secretName: string
                        }[]
                      | undefined
                  }
                | undefined
            }
            readinessProbe?:
              | {
                  failureThreshold?: number | undefined
                  initialDelaySeconds?: number | undefined
                  periodSeconds?: number | undefined
                  successThreshold?: number | undefined
                  timeoutSeconds?: number | undefined
                }
              | undefined
            replicas: number
            resources?:
              | {
                  limits?: object | undefined
                  requests?: object | undefined
                }
              | undefined
            template?:
              | {
                  deployment?:
                    | {
                        deploymentStrategy?:
                          | ('RollingUpdate' | 'Recreate')
                          | undefined
                        metadata?:
                          | {
                              annotations?: object | undefined
                              labels?: object | undefined
                            }
                          | undefined
                      }
                    | undefined
                  mirrorMakerContainer?:
                    | {
                        env?:
                          | {
                              name?: string | undefined
                              value?: string | undefined
                            }[]
                          | undefined
                        securityContext?:
                          | {
                              allowPrivilegeEscalation?: boolean | undefined
                              capabilities?:
                                | {
                                    add?: string[] | undefined
                                    drop?: string[] | undefined
                                  }
                                | undefined
                              privileged?: boolean | undefined
                              procMount?: string | undefined
                              readOnlyRootFilesystem?: boolean | undefined
                              runAsGroup?: number | undefined
                              runAsNonRoot?: boolean | undefined
                              runAsUser?: number | undefined
                              seLinuxOptions?:
                                | {
                                    level?: string | undefined
                                    role?: string | undefined
                                    type?: string | undefined
                                    user?: string | undefined
                                  }
                                | undefined
                              seccompProfile?:
                                | {
                                    localhostProfile?: string | undefined
                                    type?: string | undefined
                                  }
                                | undefined
                              windowsOptions?:
                                | {
                                    gmsaCredentialSpec?: string | undefined
                                    gmsaCredentialSpecName?: string | undefined
                                    hostProcess?: boolean | undefined
                                    runAsUserName?: string | undefined
                                  }
                                | undefined
                            }
                          | undefined
                      }
                    | undefined
                  pod?:
                    | {
                        affinity?:
                          | {
                              nodeAffinity?:
                                | {
                                    preferredDuringSchedulingIgnoredDuringExecution?:
                                      | {
                                          preference?:
                                            | {
                                                matchExpressions?:
                                                  | {
                                                      key?: string | undefined
                                                      operator?:
                                                        | string
                                                        | undefined
                                                      values?:
                                                        | string[]
                                                        | undefined
                                                    }[]
                                                  | undefined
                                                matchFields?:
                                                  | {
                                                      key?: string | undefined
                                                      operator?:
                                                        | string
                                                        | undefined
                                                      values?:
                                                        | string[]
                                                        | undefined
                                                    }[]
                                                  | undefined
                                              }
                                            | undefined
                                          weight?: number | undefined
                                        }[]
                                      | undefined
                                    requiredDuringSchedulingIgnoredDuringExecution?:
                                      | {
                                          nodeSelectorTerms?:
                                            | {
                                                matchExpressions?:
                                                  | {
                                                      key?: string | undefined
                                                      operator?:
                                                        | string
                                                        | undefined
                                                      values?:
                                                        | string[]
                                                        | undefined
                                                    }[]
                                                  | undefined
                                                matchFields?:
                                                  | {
                                                      key?: string | undefined
                                                      operator?:
                                                        | string
                                                        | undefined
                                                      values?:
                                                        | string[]
                                                        | undefined
                                                    }[]
                                                  | undefined
                                              }[]
                                            | undefined
                                        }
                                      | undefined
                                  }
                                | undefined
                              podAffinity?:
                                | {
                                    preferredDuringSchedulingIgnoredDuringExecution?:
                                      | {
                                          podAffinityTerm?:
                                            | {
                                                labelSelector?:
                                                  | {
                                                      matchExpressions?:
                                                        | {
                                                            key?:
                                                              | string
                                                              | undefined
                                                            operator?:
                                                              | string
                                                              | undefined
                                                            values?:
                                                              | string[]
                                                              | undefined
                                                          }[]
                                                        | undefined
                                                      matchLabels?:
                                                        | object
                                                        | undefined
                                                    }
                                                  | undefined
                                                namespaceSelector?:
                                                  | {
                                                      matchExpressions?:
                                                        | {
                                                            key?:
                                                              | string
                                                              | undefined
                                                            operator?:
                                                              | string
                                                              | undefined
                                                            values?:
                                                              | string[]
                                                              | undefined
                                                          }[]
                                                        | undefined
                                                      matchLabels?:
                                                        | object
                                                        | undefined
                                                    }
                                                  | undefined
                                                namespaces?:
                                                  | string[]
                                                  | undefined
                                                topologyKey?: string | undefined
                                              }
                                            | undefined
                                          weight?: number | undefined
                                        }[]
                                      | undefined
                                    requiredDuringSchedulingIgnoredDuringExecution?:
                                      | {
                                          labelSelector?:
                                            | {
                                                matchExpressions?:
                                                  | {
                                                      key?: string | undefined
                                                      operator?:
                                                        | string
                                                        | undefined
                                                      values?:
                                                        | string[]
                                                        | undefined
                                                    }[]
                                                  | undefined
                                                matchLabels?: object | undefined
                                              }
                                            | undefined
                                          namespaceSelector?:
                                            | {
                                                matchExpressions?:
                                                  | {
                                                      key?: string | undefined
                                                      operator?:
                                                        | string
                                                        | undefined
                                                      values?:
                                                        | string[]
                                                        | undefined
                                                    }[]
                                                  | undefined
                                                matchLabels?: object | undefined
                                              }
                                            | undefined
                                          namespaces?: string[] | undefined
                                          topologyKey?: string | undefined
                                        }[]
                                      | undefined
                                  }
                                | undefined
                              podAntiAffinity?:
                                | {
                                    preferredDuringSchedulingIgnoredDuringExecution?:
                                      | {
                                          podAffinityTerm?:
                                            | {
                                                labelSelector?:
                                                  | {
                                                      matchExpressions?:
                                                        | {
                                                            key?:
                                                              | string
                                                              | undefined
                                                            operator?:
                                                              | string
                                                              | undefined
                                                            values?:
                                                              | string[]
                                                              | undefined
                                                          }[]
                                                        | undefined
                                                      matchLabels?:
                                                        | object
                                                        | undefined
                                                    }
                                                  | undefined
                                                namespaceSelector?:
                                                  | {
                                                      matchExpressions?:
                                                        | {
                                                            key?:
                                                              | string
                                                              | undefined
                                                            operator?:
                                                              | string
                                                              | undefined
                                                            values?:
                                                              | string[]
                                                              | undefined
                                                          }[]
                                                        | undefined
                                                      matchLabels?:
                                                        | object
                                                        | undefined
                                                    }
                                                  | undefined
                                                namespaces?:
                                                  | string[]
                                                  | undefined
                                                topologyKey?: string | undefined
                                              }
                                            | undefined
                                          weight?: number | undefined
                                        }[]
                                      | undefined
                                    requiredDuringSchedulingIgnoredDuringExecution?:
                                      | {
                                          labelSelector?:
                                            | {
                                                matchExpressions?:
                                                  | {
                                                      key?: string | undefined
                                                      operator?:
                                                        | string
                                                        | undefined
                                                      values?:
                                                        | string[]
                                                        | undefined
                                                    }[]
                                                  | undefined
                                                matchLabels?: object | undefined
                                              }
                                            | undefined
                                          namespaceSelector?:
                                            | {
                                                matchExpressions?:
                                                  | {
                                                      key?: string | undefined
                                                      operator?:
                                                        | string
                                                        | undefined
                                                      values?:
                                                        | string[]
                                                        | undefined
                                                    }[]
                                                  | undefined
                                                matchLabels?: object | undefined
                                              }
                                            | undefined
                                          namespaces?: string[] | undefined
                                          topologyKey?: string | undefined
                                        }[]
                                      | undefined
                                  }
                                | undefined
                            }
                          | undefined
                        enableServiceLinks?: boolean | undefined
                        hostAliases?:
                          | {
                              hostnames?: string[] | undefined
                              ip?: string | undefined
                            }[]
                          | undefined
                        imagePullSecrets?:
                          | {
                              name?: string | undefined
                            }[]
                          | undefined
                        metadata?:
                          | {
                              annotations?: object | undefined
                              labels?: object | undefined
                            }
                          | undefined
                        priorityClassName?: string | undefined
                        schedulerName?: string | undefined
                        securityContext?:
                          | {
                              fsGroup?: number | undefined
                              fsGroupChangePolicy?: string | undefined
                              runAsGroup?: number | undefined
                              runAsNonRoot?: boolean | undefined
                              runAsUser?: number | undefined
                              seLinuxOptions?:
                                | {
                                    level?: string | undefined
                                    role?: string | undefined
                                    type?: string | undefined
                                    user?: string | undefined
                                  }
                                | undefined
                              seccompProfile?:
                                | {
                                    localhostProfile?: string | undefined
                                    type?: string | undefined
                                  }
                                | undefined
                              supplementalGroups?: number[] | undefined
                              sysctls?:
                                | {
                                    name?: string | undefined
                                    value?: string | undefined
                                  }[]
                                | undefined
                              windowsOptions?:
                                | {
                                    gmsaCredentialSpec?: string | undefined
                                    gmsaCredentialSpecName?: string | undefined
                                    hostProcess?: boolean | undefined
                                    runAsUserName?: string | undefined
                                  }
                                | undefined
                            }
                          | undefined
                        terminationGracePeriodSeconds?: number | undefined
                        tmpDirSizeLimit?: string | undefined
                        tolerations?:
                          | {
                              effect?: string | undefined
                              key?: string | undefined
                              operator?: string | undefined
                              tolerationSeconds?: number | undefined
                              value?: string | undefined
                            }[]
                          | undefined
                        topologySpreadConstraints?:
                          | {
                              labelSelector?:
                                | {
                                    matchExpressions?:
                                      | {
                                          key?: string | undefined
                                          operator?: string | undefined
                                          values?: string[] | undefined
                                        }[]
                                      | undefined
                                    matchLabels?: object | undefined
                                  }
                                | undefined
                              maxSkew?: number | undefined
                              minDomains?: number | undefined
                              topologyKey?: string | undefined
                              whenUnsatisfiable?: string | undefined
                            }[]
                          | undefined
                      }
                    | undefined
                  podDisruptionBudget?:
                    | {
                        maxUnavailable?: number | undefined
                        metadata?:
                          | {
                              annotations?: object | undefined
                              labels?: object | undefined
                            }
                          | undefined
                      }
                    | undefined
                  serviceAccount?:
                    | {
                        metadata?:
                          | {
                              annotations?: object | undefined
                              labels?: object | undefined
                            }
                          | undefined
                      }
                    | undefined
                }
              | undefined
            tracing?:
              | {
                  type: 'jaeger'
                }
              | undefined
            version?: string | undefined
            whitelist?: string | undefined
          }
        | {
            whitelist: string
            consumer: {
              authentication?:
                | {
                    accessToken?:
                      | {
                          key: string
                          secretName: string
                        }
                      | undefined
                    accessTokenIsJwt?: boolean | undefined
                    audience?: string | undefined
                    certificateAndKey?:
                      | {
                          certificate: string
                          key: string
                          secretName: string
                        }
                      | undefined
                    clientId?: string | undefined
                    clientSecret?:
                      | {
                          key: string
                          secretName: string
                        }
                      | undefined
                    connectTimeoutSeconds?: number | undefined
                    disableTlsHostnameVerification?: boolean | undefined
                    maxTokenExpirySeconds?: number | undefined
                    passwordSecret?:
                      | {
                          password: string
                          secretName: string
                        }
                      | undefined
                    readTimeoutSeconds?: number | undefined
                    refreshToken?:
                      | {
                          key: string
                          secretName: string
                        }
                      | undefined
                    scope?: string | undefined
                    tlsTrustedCertificates?:
                      | {
                          certificate: string
                          secretName: string
                        }[]
                      | undefined
                    tokenEndpointUri?: string | undefined
                    type:
                      | 'tls'
                      | 'scram-sha-256'
                      | 'scram-sha-512'
                      | 'plain'
                      | 'oauth'
                    username?: string | undefined
                  }
                | undefined
              bootstrapServers: string
              config?: object | undefined
              groupId: string
              numStreams?: number | undefined
              offsetCommitInterval?: number | undefined
              tls?:
                | {
                    trustedCertificates?:
                      | {
                          certificate: string
                          secretName: string
                        }[]
                      | undefined
                  }
                | undefined
            }
            image?: string | undefined
            include?: string | undefined
            jvmOptions?:
              | {
                  '-XX'?: object | undefined
                  '-Xms'?: string | undefined
                  '-Xmx'?: string | undefined
                  gcLoggingEnabled?: boolean | undefined
                  javaSystemProperties?:
                    | {
                        name?: string | undefined
                        value?: string | undefined
                      }[]
                    | undefined
                }
              | undefined
            livenessProbe?:
              | {
                  failureThreshold?: number | undefined
                  initialDelaySeconds?: number | undefined
                  periodSeconds?: number | undefined
                  successThreshold?: number | undefined
                  timeoutSeconds?: number | undefined
                }
              | undefined
            logging?:
              | {
                  loggers?: object | undefined
                  type: 'inline' | 'external'
                  valueFrom?:
                    | {
                        configMapKeyRef?:
                          | {
                              key?: string | undefined
                              name?: string | undefined
                              optional?: boolean | undefined
                            }
                          | undefined
                      }
                    | undefined
                }
              | undefined
            metricsConfig?:
              | {
                  type: 'jmxPrometheusExporter'
                  valueFrom: {
                    configMapKeyRef?:
                      | {
                          key?: string | undefined
                          name?: string | undefined
                          optional?: boolean | undefined
                        }
                      | undefined
                  }
                }
              | undefined
            producer: {
              abortOnSendFailure?: boolean | undefined
              authentication?:
                | {
                    accessToken?:
                      | {
                          key: string
                          secretName: string
                        }
                      | undefined
                    accessTokenIsJwt?: boolean | undefined
                    audience?: string | undefined
                    certificateAndKey?:
                      | {
                          certificate: string
                          key: string
                          secretName: string
                        }
                      | undefined
                    clientId?: string | undefined
                    clientSecret?:
                      | {
                          key: string
                          secretName: string
                        }
                      | undefined
                    connectTimeoutSeconds?: number | undefined
                    disableTlsHostnameVerification?: boolean | undefined
                    maxTokenExpirySeconds?: number | undefined
                    passwordSecret?:
                      | {
                          password: string
                          secretName: string
                        }
                      | undefined
                    readTimeoutSeconds?: number | undefined
                    refreshToken?:
                      | {
                          key: string
                          secretName: string
                        }
                      | undefined
                    scope?: string | undefined
                    tlsTrustedCertificates?:
                      | {
                          certificate: string
                          secretName: string
                        }[]
                      | undefined
                    tokenEndpointUri?: string | undefined
                    type:
                      | 'tls'
                      | 'scram-sha-256'
                      | 'scram-sha-512'
                      | 'plain'
                      | 'oauth'
                    username?: string | undefined
                  }
                | undefined
              bootstrapServers: string
              config?: object | undefined
              tls?:
                | {
                    trustedCertificates?:
                      | {
                          certificate: string
                          secretName: string
                        }[]
                      | undefined
                  }
                | undefined
            }
            readinessProbe?:
              | {
                  failureThreshold?: number | undefined
                  initialDelaySeconds?: number | undefined
                  periodSeconds?: number | undefined
                  successThreshold?: number | undefined
                  timeoutSeconds?: number | undefined
                }
              | undefined
            replicas: number
            resources?:
              | {
                  limits?: object | undefined
                  requests?: object | undefined
                }
              | undefined
            template?:
              | {
                  deployment?:
                    | {
                        deploymentStrategy?:
                          | ('RollingUpdate' | 'Recreate')
                          | undefined
                        metadata?:
                          | {
                              annotations?: object | undefined
                              labels?: object | undefined
                            }
                          | undefined
                      }
                    | undefined
                  mirrorMakerContainer?:
                    | {
                        env?:
                          | {
                              name?: string | undefined
                              value?: string | undefined
                            }[]
                          | undefined
                        securityContext?:
                          | {
                              allowPrivilegeEscalation?: boolean | undefined
                              capabilities?:
                                | {
                                    add?: string[] | undefined
                                    drop?: string[] | undefined
                                  }
                                | undefined
                              privileged?: boolean | undefined
                              procMount?: string | undefined
                              readOnlyRootFilesystem?: boolean | undefined
                              runAsGroup?: number | undefined
                              runAsNonRoot?: boolean | undefined
                              runAsUser?: number | undefined
                              seLinuxOptions?:
                                | {
                                    level?: string | undefined
                                    role?: string | undefined
                                    type?: string | undefined
                                    user?: string | undefined
                                  }
                                | undefined
                              seccompProfile?:
                                | {
                                    localhostProfile?: string | undefined
                                    type?: string | undefined
                                  }
                                | undefined
                              windowsOptions?:
                                | {
                                    gmsaCredentialSpec?: string | undefined
                                    gmsaCredentialSpecName?: string | undefined
                                    hostProcess?: boolean | undefined
                                    runAsUserName?: string | undefined
                                  }
                                | undefined
                            }
                          | undefined
                      }
                    | undefined
                  pod?:
                    | {
                        affinity?:
                          | {
                              nodeAffinity?:
                                | {
                                    preferredDuringSchedulingIgnoredDuringExecution?:
                                      | {
                                          preference?:
                                            | {
                                                matchExpressions?:
                                                  | {
                                                      key?: string | undefined
                                                      operator?:
                                                        | string
                                                        | undefined
                                                      values?:
                                                        | string[]
                                                        | undefined
                                                    }[]
                                                  | undefined
                                                matchFields?:
                                                  | {
                                                      key?: string | undefined
                                                      operator?:
                                                        | string
                                                        | undefined
                                                      values?:
                                                        | string[]
                                                        | undefined
                                                    }[]
                                                  | undefined
                                              }
                                            | undefined
                                          weight?: number | undefined
                                        }[]
                                      | undefined
                                    requiredDuringSchedulingIgnoredDuringExecution?:
                                      | {
                                          nodeSelectorTerms?:
                                            | {
                                                matchExpressions?:
                                                  | {
                                                      key?: string | undefined
                                                      operator?:
                                                        | string
                                                        | undefined
                                                      values?:
                                                        | string[]
                                                        | undefined
                                                    }[]
                                                  | undefined
                                                matchFields?:
                                                  | {
                                                      key?: string | undefined
                                                      operator?:
                                                        | string
                                                        | undefined
                                                      values?:
                                                        | string[]
                                                        | undefined
                                                    }[]
                                                  | undefined
                                              }[]
                                            | undefined
                                        }
                                      | undefined
                                  }
                                | undefined
                              podAffinity?:
                                | {
                                    preferredDuringSchedulingIgnoredDuringExecution?:
                                      | {
                                          podAffinityTerm?:
                                            | {
                                                labelSelector?:
                                                  | {
                                                      matchExpressions?:
                                                        | {
                                                            key?:
                                                              | string
                                                              | undefined
                                                            operator?:
                                                              | string
                                                              | undefined
                                                            values?:
                                                              | string[]
                                                              | undefined
                                                          }[]
                                                        | undefined
                                                      matchLabels?:
                                                        | object
                                                        | undefined
                                                    }
                                                  | undefined
                                                namespaceSelector?:
                                                  | {
                                                      matchExpressions?:
                                                        | {
                                                            key?:
                                                              | string
                                                              | undefined
                                                            operator?:
                                                              | string
                                                              | undefined
                                                            values?:
                                                              | string[]
                                                              | undefined
                                                          }[]
                                                        | undefined
                                                      matchLabels?:
                                                        | object
                                                        | undefined
                                                    }
                                                  | undefined
                                                namespaces?:
                                                  | string[]
                                                  | undefined
                                                topologyKey?: string | undefined
                                              }
                                            | undefined
                                          weight?: number | undefined
                                        }[]
                                      | undefined
                                    requiredDuringSchedulingIgnoredDuringExecution?:
                                      | {
                                          labelSelector?:
                                            | {
                                                matchExpressions?:
                                                  | {
                                                      key?: string | undefined
                                                      operator?:
                                                        | string
                                                        | undefined
                                                      values?:
                                                        | string[]
                                                        | undefined
                                                    }[]
                                                  | undefined
                                                matchLabels?: object | undefined
                                              }
                                            | undefined
                                          namespaceSelector?:
                                            | {
                                                matchExpressions?:
                                                  | {
                                                      key?: string | undefined
                                                      operator?:
                                                        | string
                                                        | undefined
                                                      values?:
                                                        | string[]
                                                        | undefined
                                                    }[]
                                                  | undefined
                                                matchLabels?: object | undefined
                                              }
                                            | undefined
                                          namespaces?: string[] | undefined
                                          topologyKey?: string | undefined
                                        }[]
                                      | undefined
                                  }
                                | undefined
                              podAntiAffinity?:
                                | {
                                    preferredDuringSchedulingIgnoredDuringExecution?:
                                      | {
                                          podAffinityTerm?:
                                            | {
                                                labelSelector?:
                                                  | {
                                                      matchExpressions?:
                                                        | {
                                                            key?:
                                                              | string
                                                              | undefined
                                                            operator?:
                                                              | string
                                                              | undefined
                                                            values?:
                                                              | string[]
                                                              | undefined
                                                          }[]
                                                        | undefined
                                                      matchLabels?:
                                                        | object
                                                        | undefined
                                                    }
                                                  | undefined
                                                namespaceSelector?:
                                                  | {
                                                      matchExpressions?:
                                                        | {
                                                            key?:
                                                              | string
                                                              | undefined
                                                            operator?:
                                                              | string
                                                              | undefined
                                                            values?:
                                                              | string[]
                                                              | undefined
                                                          }[]
                                                        | undefined
                                                      matchLabels?:
                                                        | object
                                                        | undefined
                                                    }
                                                  | undefined
                                                namespaces?:
                                                  | string[]
                                                  | undefined
                                                topologyKey?: string | undefined
                                              }
                                            | undefined
                                          weight?: number | undefined
                                        }[]
                                      | undefined
                                    requiredDuringSchedulingIgnoredDuringExecution?:
                                      | {
                                          labelSelector?:
                                            | {
                                                matchExpressions?:
                                                  | {
                                                      key?: string | undefined
                                                      operator?:
                                                        | string
                                                        | undefined
                                                      values?:
                                                        | string[]
                                                        | undefined
                                                    }[]
                                                  | undefined
                                                matchLabels?: object | undefined
                                              }
                                            | undefined
                                          namespaceSelector?:
                                            | {
                                                matchExpressions?:
                                                  | {
                                                      key?: string | undefined
                                                      operator?:
                                                        | string
                                                        | undefined
                                                      values?:
                                                        | string[]
                                                        | undefined
                                                    }[]
                                                  | undefined
                                                matchLabels?: object | undefined
                                              }
                                            | undefined
                                          namespaces?: string[] | undefined
                                          topologyKey?: string | undefined
                                        }[]
                                      | undefined
                                  }
                                | undefined
                            }
                          | undefined
                        enableServiceLinks?: boolean | undefined
                        hostAliases?:
                          | {
                              hostnames?: string[] | undefined
                              ip?: string | undefined
                            }[]
                          | undefined
                        imagePullSecrets?:
                          | {
                              name?: string | undefined
                            }[]
                          | undefined
                        metadata?:
                          | {
                              annotations?: object | undefined
                              labels?: object | undefined
                            }
                          | undefined
                        priorityClassName?: string | undefined
                        schedulerName?: string | undefined
                        securityContext?:
                          | {
                              fsGroup?: number | undefined
                              fsGroupChangePolicy?: string | undefined
                              runAsGroup?: number | undefined
                              runAsNonRoot?: boolean | undefined
                              runAsUser?: number | undefined
                              seLinuxOptions?:
                                | {
                                    level?: string | undefined
                                    role?: string | undefined
                                    type?: string | undefined
                                    user?: string | undefined
                                  }
                                | undefined
                              seccompProfile?:
                                | {
                                    localhostProfile?: string | undefined
                                    type?: string | undefined
                                  }
                                | undefined
                              supplementalGroups?: number[] | undefined
                              sysctls?:
                                | {
                                    name?: string | undefined
                                    value?: string | undefined
                                  }[]
                                | undefined
                              windowsOptions?:
                                | {
                                    gmsaCredentialSpec?: string | undefined
                                    gmsaCredentialSpecName?: string | undefined
                                    hostProcess?: boolean | undefined
                                    runAsUserName?: string | undefined
                                  }
                                | undefined
                            }
                          | undefined
                        terminationGracePeriodSeconds?: number | undefined
                        tmpDirSizeLimit?: string | undefined
                        tolerations?:
                          | {
                              effect?: string | undefined
                              key?: string | undefined
                              operator?: string | undefined
                              tolerationSeconds?: number | undefined
                              value?: string | undefined
                            }[]
                          | undefined
                        topologySpreadConstraints?:
                          | {
                              labelSelector?:
                                | {
                                    matchExpressions?:
                                      | {
                                          key?: string | undefined
                                          operator?: string | undefined
                                          values?: string[] | undefined
                                        }[]
                                      | undefined
                                    matchLabels?: object | undefined
                                  }
                                | undefined
                              maxSkew?: number | undefined
                              minDomains?: number | undefined
                              topologyKey?: string | undefined
                              whenUnsatisfiable?: string | undefined
                            }[]
                          | undefined
                      }
                    | undefined
                  podDisruptionBudget?:
                    | {
                        maxUnavailable?: number | undefined
                        metadata?:
                          | {
                              annotations?: object | undefined
                              labels?: object | undefined
                            }
                          | undefined
                      }
                    | undefined
                  serviceAccount?:
                    | {
                        metadata?:
                          | {
                              annotations?: object | undefined
                              labels?: object | undefined
                            }
                          | undefined
                      }
                    | undefined
                }
              | undefined
            tracing?:
              | {
                  type: 'jaeger'
                }
              | undefined
            version?: string | undefined
          }
      )
    | undefined
  status?:
    | {
        conditions?:
          | {
              lastTransitionTime?: string | undefined
              message?: string | undefined
              reason?: string | undefined
              status?: string | undefined
              type?: string | undefined
            }[]
          | undefined
        labelSelector?: string | undefined
        observedGeneration?: number | undefined
        replicas?: number | undefined
      }
    | undefined
}
export type IoStrimziKafkaV1Beta2KafkaMirrorMakerList = {
  apiVersion?: string | undefined
  items: IoStrimziKafkaV1Beta2KafkaMirrorMaker[]
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ListMeta | undefined
}
export type IoStrimziKafkaV1Beta2KafkaRebalance = {
  apiVersion?: string | undefined
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ObjectMeta | undefined
  spec?:
    | {
        brokers?: number[] | undefined
        concurrentIntraBrokerPartitionMovements?: number | undefined
        concurrentLeaderMovements?: number | undefined
        concurrentPartitionMovementsPerBroker?: number | undefined
        excludedTopics?: string | undefined
        goals?: string[] | undefined
        mode?: ('full' | 'add-brokers' | 'remove-brokers') | undefined
        rebalanceDisk?: boolean | undefined
        replicaMovementStrategies?: string[] | undefined
        replicationThrottle?: number | undefined
        skipHardGoalCheck?: boolean | undefined
      }
    | undefined
  status?:
    | {
        conditions?:
          | {
              lastTransitionTime?: string | undefined
              message?: string | undefined
              reason?: string | undefined
              status?: string | undefined
              type?: string | undefined
            }[]
          | undefined
        observedGeneration?: number | undefined
        optimizationResult?: object | undefined
        sessionId?: string | undefined
      }
    | undefined
}
export type IoStrimziKafkaV1Beta2KafkaRebalanceList = {
  apiVersion?: string | undefined
  items: IoStrimziKafkaV1Beta2KafkaRebalance[]
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ListMeta | undefined
}
export type IoStrimziKafkaV1Beta2Kafka = {
  apiVersion?: string | undefined
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ObjectMeta | undefined
  spec?:
    | {
        clientsCa?:
          | {
              certificateExpirationPolicy?:
                | ('renew-certificate' | 'replace-key')
                | undefined
              generateCertificateAuthority?: boolean | undefined
              generateSecretOwnerReference?: boolean | undefined
              renewalDays?: number | undefined
              validityDays?: number | undefined
            }
          | undefined
        clusterCa?:
          | {
              certificateExpirationPolicy?:
                | ('renew-certificate' | 'replace-key')
                | undefined
              generateCertificateAuthority?: boolean | undefined
              generateSecretOwnerReference?: boolean | undefined
              renewalDays?: number | undefined
              validityDays?: number | undefined
            }
          | undefined
        cruiseControl?:
          | {
              brokerCapacity?:
                | {
                    cpu?: string | undefined
                    cpuUtilization?: number | undefined
                    disk?: string | undefined
                    inboundNetwork?: string | undefined
                    outboundNetwork?: string | undefined
                    overrides?:
                      | {
                          brokers: number[]
                          cpu?: string | undefined
                          inboundNetwork?: string | undefined
                          outboundNetwork?: string | undefined
                        }[]
                      | undefined
                  }
                | undefined
              config?: object | undefined
              image?: string | undefined
              jvmOptions?:
                | {
                    '-XX'?: object | undefined
                    '-Xms'?: string | undefined
                    '-Xmx'?: string | undefined
                    gcLoggingEnabled?: boolean | undefined
                    javaSystemProperties?:
                      | {
                          name?: string | undefined
                          value?: string | undefined
                        }[]
                      | undefined
                  }
                | undefined
              livenessProbe?:
                | {
                    failureThreshold?: number | undefined
                    initialDelaySeconds?: number | undefined
                    periodSeconds?: number | undefined
                    successThreshold?: number | undefined
                    timeoutSeconds?: number | undefined
                  }
                | undefined
              logging?:
                | {
                    loggers?: object | undefined
                    type: 'inline' | 'external'
                    valueFrom?:
                      | {
                          configMapKeyRef?:
                            | {
                                key?: string | undefined
                                name?: string | undefined
                                optional?: boolean | undefined
                              }
                            | undefined
                        }
                      | undefined
                  }
                | undefined
              metricsConfig?:
                | {
                    type: 'jmxPrometheusExporter'
                    valueFrom: {
                      configMapKeyRef?:
                        | {
                            key?: string | undefined
                            name?: string | undefined
                            optional?: boolean | undefined
                          }
                        | undefined
                    }
                  }
                | undefined
              readinessProbe?:
                | {
                    failureThreshold?: number | undefined
                    initialDelaySeconds?: number | undefined
                    periodSeconds?: number | undefined
                    successThreshold?: number | undefined
                    timeoutSeconds?: number | undefined
                  }
                | undefined
              resources?:
                | {
                    limits?: object | undefined
                    requests?: object | undefined
                  }
                | undefined
              template?:
                | {
                    apiService?:
                      | {
                          ipFamilies?: ('IPv4' | 'IPv6')[] | undefined
                          ipFamilyPolicy?:
                            | (
                                | 'SingleStack'
                                | 'PreferDualStack'
                                | 'RequireDualStack'
                              )
                            | undefined
                          metadata?:
                            | {
                                annotations?: object | undefined
                                labels?: object | undefined
                              }
                            | undefined
                        }
                      | undefined
                    cruiseControlContainer?:
                      | {
                          env?:
                            | {
                                name?: string | undefined
                                value?: string | undefined
                              }[]
                            | undefined
                          securityContext?:
                            | {
                                allowPrivilegeEscalation?: boolean | undefined
                                capabilities?:
                                  | {
                                      add?: string[] | undefined
                                      drop?: string[] | undefined
                                    }
                                  | undefined
                                privileged?: boolean | undefined
                                procMount?: string | undefined
                                readOnlyRootFilesystem?: boolean | undefined
                                runAsGroup?: number | undefined
                                runAsNonRoot?: boolean | undefined
                                runAsUser?: number | undefined
                                seLinuxOptions?:
                                  | {
                                      level?: string | undefined
                                      role?: string | undefined
                                      type?: string | undefined
                                      user?: string | undefined
                                    }
                                  | undefined
                                seccompProfile?:
                                  | {
                                      localhostProfile?: string | undefined
                                      type?: string | undefined
                                    }
                                  | undefined
                                windowsOptions?:
                                  | {
                                      gmsaCredentialSpec?: string | undefined
                                      gmsaCredentialSpecName?:
                                        | string
                                        | undefined
                                      hostProcess?: boolean | undefined
                                      runAsUserName?: string | undefined
                                    }
                                  | undefined
                              }
                            | undefined
                        }
                      | undefined
                    deployment?:
                      | {
                          metadata?:
                            | {
                                annotations?: object | undefined
                                labels?: object | undefined
                              }
                            | undefined
                        }
                      | undefined
                    pod?:
                      | {
                          affinity?:
                            | {
                                nodeAffinity?:
                                  | {
                                      preferredDuringSchedulingIgnoredDuringExecution?:
                                        | {
                                            preference?:
                                              | {
                                                  matchExpressions?:
                                                    | {
                                                        key?: string | undefined
                                                        operator?:
                                                          | string
                                                          | undefined
                                                        values?:
                                                          | string[]
                                                          | undefined
                                                      }[]
                                                    | undefined
                                                  matchFields?:
                                                    | {
                                                        key?: string | undefined
                                                        operator?:
                                                          | string
                                                          | undefined
                                                        values?:
                                                          | string[]
                                                          | undefined
                                                      }[]
                                                    | undefined
                                                }
                                              | undefined
                                            weight?: number | undefined
                                          }[]
                                        | undefined
                                      requiredDuringSchedulingIgnoredDuringExecution?:
                                        | {
                                            nodeSelectorTerms?:
                                              | {
                                                  matchExpressions?:
                                                    | {
                                                        key?: string | undefined
                                                        operator?:
                                                          | string
                                                          | undefined
                                                        values?:
                                                          | string[]
                                                          | undefined
                                                      }[]
                                                    | undefined
                                                  matchFields?:
                                                    | {
                                                        key?: string | undefined
                                                        operator?:
                                                          | string
                                                          | undefined
                                                        values?:
                                                          | string[]
                                                          | undefined
                                                      }[]
                                                    | undefined
                                                }[]
                                              | undefined
                                          }
                                        | undefined
                                    }
                                  | undefined
                                podAffinity?:
                                  | {
                                      preferredDuringSchedulingIgnoredDuringExecution?:
                                        | {
                                            podAffinityTerm?:
                                              | {
                                                  labelSelector?:
                                                    | {
                                                        matchExpressions?:
                                                          | {
                                                              key?:
                                                                | string
                                                                | undefined
                                                              operator?:
                                                                | string
                                                                | undefined
                                                              values?:
                                                                | string[]
                                                                | undefined
                                                            }[]
                                                          | undefined
                                                        matchLabels?:
                                                          | object
                                                          | undefined
                                                      }
                                                    | undefined
                                                  namespaceSelector?:
                                                    | {
                                                        matchExpressions?:
                                                          | {
                                                              key?:
                                                                | string
                                                                | undefined
                                                              operator?:
                                                                | string
                                                                | undefined
                                                              values?:
                                                                | string[]
                                                                | undefined
                                                            }[]
                                                          | undefined
                                                        matchLabels?:
                                                          | object
                                                          | undefined
                                                      }
                                                    | undefined
                                                  namespaces?:
                                                    | string[]
                                                    | undefined
                                                  topologyKey?:
                                                    | string
                                                    | undefined
                                                }
                                              | undefined
                                            weight?: number | undefined
                                          }[]
                                        | undefined
                                      requiredDuringSchedulingIgnoredDuringExecution?:
                                        | {
                                            labelSelector?:
                                              | {
                                                  matchExpressions?:
                                                    | {
                                                        key?: string | undefined
                                                        operator?:
                                                          | string
                                                          | undefined
                                                        values?:
                                                          | string[]
                                                          | undefined
                                                      }[]
                                                    | undefined
                                                  matchLabels?:
                                                    | object
                                                    | undefined
                                                }
                                              | undefined
                                            namespaceSelector?:
                                              | {
                                                  matchExpressions?:
                                                    | {
                                                        key?: string | undefined
                                                        operator?:
                                                          | string
                                                          | undefined
                                                        values?:
                                                          | string[]
                                                          | undefined
                                                      }[]
                                                    | undefined
                                                  matchLabels?:
                                                    | object
                                                    | undefined
                                                }
                                              | undefined
                                            namespaces?: string[] | undefined
                                            topologyKey?: string | undefined
                                          }[]
                                        | undefined
                                    }
                                  | undefined
                                podAntiAffinity?:
                                  | {
                                      preferredDuringSchedulingIgnoredDuringExecution?:
                                        | {
                                            podAffinityTerm?:
                                              | {
                                                  labelSelector?:
                                                    | {
                                                        matchExpressions?:
                                                          | {
                                                              key?:
                                                                | string
                                                                | undefined
                                                              operator?:
                                                                | string
                                                                | undefined
                                                              values?:
                                                                | string[]
                                                                | undefined
                                                            }[]
                                                          | undefined
                                                        matchLabels?:
                                                          | object
                                                          | undefined
                                                      }
                                                    | undefined
                                                  namespaceSelector?:
                                                    | {
                                                        matchExpressions?:
                                                          | {
                                                              key?:
                                                                | string
                                                                | undefined
                                                              operator?:
                                                                | string
                                                                | undefined
                                                              values?:
                                                                | string[]
                                                                | undefined
                                                            }[]
                                                          | undefined
                                                        matchLabels?:
                                                          | object
                                                          | undefined
                                                      }
                                                    | undefined
                                                  namespaces?:
                                                    | string[]
                                                    | undefined
                                                  topologyKey?:
                                                    | string
                                                    | undefined
                                                }
                                              | undefined
                                            weight?: number | undefined
                                          }[]
                                        | undefined
                                      requiredDuringSchedulingIgnoredDuringExecution?:
                                        | {
                                            labelSelector?:
                                              | {
                                                  matchExpressions?:
                                                    | {
                                                        key?: string | undefined
                                                        operator?:
                                                          | string
                                                          | undefined
                                                        values?:
                                                          | string[]
                                                          | undefined
                                                      }[]
                                                    | undefined
                                                  matchLabels?:
                                                    | object
                                                    | undefined
                                                }
                                              | undefined
                                            namespaceSelector?:
                                              | {
                                                  matchExpressions?:
                                                    | {
                                                        key?: string | undefined
                                                        operator?:
                                                          | string
                                                          | undefined
                                                        values?:
                                                          | string[]
                                                          | undefined
                                                      }[]
                                                    | undefined
                                                  matchLabels?:
                                                    | object
                                                    | undefined
                                                }
                                              | undefined
                                            namespaces?: string[] | undefined
                                            topologyKey?: string | undefined
                                          }[]
                                        | undefined
                                    }
                                  | undefined
                              }
                            | undefined
                          enableServiceLinks?: boolean | undefined
                          hostAliases?:
                            | {
                                hostnames?: string[] | undefined
                                ip?: string | undefined
                              }[]
                            | undefined
                          imagePullSecrets?:
                            | {
                                name?: string | undefined
                              }[]
                            | undefined
                          metadata?:
                            | {
                                annotations?: object | undefined
                                labels?: object | undefined
                              }
                            | undefined
                          priorityClassName?: string | undefined
                          schedulerName?: string | undefined
                          securityContext?:
                            | {
                                fsGroup?: number | undefined
                                fsGroupChangePolicy?: string | undefined
                                runAsGroup?: number | undefined
                                runAsNonRoot?: boolean | undefined
                                runAsUser?: number | undefined
                                seLinuxOptions?:
                                  | {
                                      level?: string | undefined
                                      role?: string | undefined
                                      type?: string | undefined
                                      user?: string | undefined
                                    }
                                  | undefined
                                seccompProfile?:
                                  | {
                                      localhostProfile?: string | undefined
                                      type?: string | undefined
                                    }
                                  | undefined
                                supplementalGroups?: number[] | undefined
                                sysctls?:
                                  | {
                                      name?: string | undefined
                                      value?: string | undefined
                                    }[]
                                  | undefined
                                windowsOptions?:
                                  | {
                                      gmsaCredentialSpec?: string | undefined
                                      gmsaCredentialSpecName?:
                                        | string
                                        | undefined
                                      hostProcess?: boolean | undefined
                                      runAsUserName?: string | undefined
                                    }
                                  | undefined
                              }
                            | undefined
                          terminationGracePeriodSeconds?: number | undefined
                          tmpDirSizeLimit?: string | undefined
                          tolerations?:
                            | {
                                effect?: string | undefined
                                key?: string | undefined
                                operator?: string | undefined
                                tolerationSeconds?: number | undefined
                                value?: string | undefined
                              }[]
                            | undefined
                          topologySpreadConstraints?:
                            | {
                                labelSelector?:
                                  | {
                                      matchExpressions?:
                                        | {
                                            key?: string | undefined
                                            operator?: string | undefined
                                            values?: string[] | undefined
                                          }[]
                                        | undefined
                                      matchLabels?: object | undefined
                                    }
                                  | undefined
                                maxSkew?: number | undefined
                                minDomains?: number | undefined
                                topologyKey?: string | undefined
                                whenUnsatisfiable?: string | undefined
                              }[]
                            | undefined
                        }
                      | undefined
                    podDisruptionBudget?:
                      | {
                          maxUnavailable?: number | undefined
                          metadata?:
                            | {
                                annotations?: object | undefined
                                labels?: object | undefined
                              }
                            | undefined
                        }
                      | undefined
                    serviceAccount?:
                      | {
                          metadata?:
                            | {
                                annotations?: object | undefined
                                labels?: object | undefined
                              }
                            | undefined
                        }
                      | undefined
                    tlsSidecarContainer?:
                      | {
                          env?:
                            | {
                                name?: string | undefined
                                value?: string | undefined
                              }[]
                            | undefined
                          securityContext?:
                            | {
                                allowPrivilegeEscalation?: boolean | undefined
                                capabilities?:
                                  | {
                                      add?: string[] | undefined
                                      drop?: string[] | undefined
                                    }
                                  | undefined
                                privileged?: boolean | undefined
                                procMount?: string | undefined
                                readOnlyRootFilesystem?: boolean | undefined
                                runAsGroup?: number | undefined
                                runAsNonRoot?: boolean | undefined
                                runAsUser?: number | undefined
                                seLinuxOptions?:
                                  | {
                                      level?: string | undefined
                                      role?: string | undefined
                                      type?: string | undefined
                                      user?: string | undefined
                                    }
                                  | undefined
                                seccompProfile?:
                                  | {
                                      localhostProfile?: string | undefined
                                      type?: string | undefined
                                    }
                                  | undefined
                                windowsOptions?:
                                  | {
                                      gmsaCredentialSpec?: string | undefined
                                      gmsaCredentialSpecName?:
                                        | string
                                        | undefined
                                      hostProcess?: boolean | undefined
                                      runAsUserName?: string | undefined
                                    }
                                  | undefined
                              }
                            | undefined
                        }
                      | undefined
                  }
                | undefined
              tlsSidecar?:
                | {
                    image?: string | undefined
                    livenessProbe?:
                      | {
                          failureThreshold?: number | undefined
                          initialDelaySeconds?: number | undefined
                          periodSeconds?: number | undefined
                          successThreshold?: number | undefined
                          timeoutSeconds?: number | undefined
                        }
                      | undefined
                    logLevel?:
                      | (
                          | 'emerg'
                          | 'alert'
                          | 'crit'
                          | 'err'
                          | 'warning'
                          | 'notice'
                          | 'info'
                          | 'debug'
                        )
                      | undefined
                    readinessProbe?:
                      | {
                          failureThreshold?: number | undefined
                          initialDelaySeconds?: number | undefined
                          periodSeconds?: number | undefined
                          successThreshold?: number | undefined
                          timeoutSeconds?: number | undefined
                        }
                      | undefined
                    resources?:
                      | {
                          limits?: object | undefined
                          requests?: object | undefined
                        }
                      | undefined
                  }
                | undefined
            }
          | undefined
        entityOperator?:
          | {
              template?:
                | {
                    deployment?:
                      | {
                          metadata?:
                            | {
                                annotations?: object | undefined
                                labels?: object | undefined
                              }
                            | undefined
                        }
                      | undefined
                    pod?:
                      | {
                          affinity?:
                            | {
                                nodeAffinity?:
                                  | {
                                      preferredDuringSchedulingIgnoredDuringExecution?:
                                        | {
                                            preference?:
                                              | {
                                                  matchExpressions?:
                                                    | {
                                                        key?: string | undefined
                                                        operator?:
                                                          | string
                                                          | undefined
                                                        values?:
                                                          | string[]
                                                          | undefined
                                                      }[]
                                                    | undefined
                                                  matchFields?:
                                                    | {
                                                        key?: string | undefined
                                                        operator?:
                                                          | string
                                                          | undefined
                                                        values?:
                                                          | string[]
                                                          | undefined
                                                      }[]
                                                    | undefined
                                                }
                                              | undefined
                                            weight?: number | undefined
                                          }[]
                                        | undefined
                                      requiredDuringSchedulingIgnoredDuringExecution?:
                                        | {
                                            nodeSelectorTerms?:
                                              | {
                                                  matchExpressions?:
                                                    | {
                                                        key?: string | undefined
                                                        operator?:
                                                          | string
                                                          | undefined
                                                        values?:
                                                          | string[]
                                                          | undefined
                                                      }[]
                                                    | undefined
                                                  matchFields?:
                                                    | {
                                                        key?: string | undefined
                                                        operator?:
                                                          | string
                                                          | undefined
                                                        values?:
                                                          | string[]
                                                          | undefined
                                                      }[]
                                                    | undefined
                                                }[]
                                              | undefined
                                          }
                                        | undefined
                                    }
                                  | undefined
                                podAffinity?:
                                  | {
                                      preferredDuringSchedulingIgnoredDuringExecution?:
                                        | {
                                            podAffinityTerm?:
                                              | {
                                                  labelSelector?:
                                                    | {
                                                        matchExpressions?:
                                                          | {
                                                              key?:
                                                                | string
                                                                | undefined
                                                              operator?:
                                                                | string
                                                                | undefined
                                                              values?:
                                                                | string[]
                                                                | undefined
                                                            }[]
                                                          | undefined
                                                        matchLabels?:
                                                          | object
                                                          | undefined
                                                      }
                                                    | undefined
                                                  namespaceSelector?:
                                                    | {
                                                        matchExpressions?:
                                                          | {
                                                              key?:
                                                                | string
                                                                | undefined
                                                              operator?:
                                                                | string
                                                                | undefined
                                                              values?:
                                                                | string[]
                                                                | undefined
                                                            }[]
                                                          | undefined
                                                        matchLabels?:
                                                          | object
                                                          | undefined
                                                      }
                                                    | undefined
                                                  namespaces?:
                                                    | string[]
                                                    | undefined
                                                  topologyKey?:
                                                    | string
                                                    | undefined
                                                }
                                              | undefined
                                            weight?: number | undefined
                                          }[]
                                        | undefined
                                      requiredDuringSchedulingIgnoredDuringExecution?:
                                        | {
                                            labelSelector?:
                                              | {
                                                  matchExpressions?:
                                                    | {
                                                        key?: string | undefined
                                                        operator?:
                                                          | string
                                                          | undefined
                                                        values?:
                                                          | string[]
                                                          | undefined
                                                      }[]
                                                    | undefined
                                                  matchLabels?:
                                                    | object
                                                    | undefined
                                                }
                                              | undefined
                                            namespaceSelector?:
                                              | {
                                                  matchExpressions?:
                                                    | {
                                                        key?: string | undefined
                                                        operator?:
                                                          | string
                                                          | undefined
                                                        values?:
                                                          | string[]
                                                          | undefined
                                                      }[]
                                                    | undefined
                                                  matchLabels?:
                                                    | object
                                                    | undefined
                                                }
                                              | undefined
                                            namespaces?: string[] | undefined
                                            topologyKey?: string | undefined
                                          }[]
                                        | undefined
                                    }
                                  | undefined
                                podAntiAffinity?:
                                  | {
                                      preferredDuringSchedulingIgnoredDuringExecution?:
                                        | {
                                            podAffinityTerm?:
                                              | {
                                                  labelSelector?:
                                                    | {
                                                        matchExpressions?:
                                                          | {
                                                              key?:
                                                                | string
                                                                | undefined
                                                              operator?:
                                                                | string
                                                                | undefined
                                                              values?:
                                                                | string[]
                                                                | undefined
                                                            }[]
                                                          | undefined
                                                        matchLabels?:
                                                          | object
                                                          | undefined
                                                      }
                                                    | undefined
                                                  namespaceSelector?:
                                                    | {
                                                        matchExpressions?:
                                                          | {
                                                              key?:
                                                                | string
                                                                | undefined
                                                              operator?:
                                                                | string
                                                                | undefined
                                                              values?:
                                                                | string[]
                                                                | undefined
                                                            }[]
                                                          | undefined
                                                        matchLabels?:
                                                          | object
                                                          | undefined
                                                      }
                                                    | undefined
                                                  namespaces?:
                                                    | string[]
                                                    | undefined
                                                  topologyKey?:
                                                    | string
                                                    | undefined
                                                }
                                              | undefined
                                            weight?: number | undefined
                                          }[]
                                        | undefined
                                      requiredDuringSchedulingIgnoredDuringExecution?:
                                        | {
                                            labelSelector?:
                                              | {
                                                  matchExpressions?:
                                                    | {
                                                        key?: string | undefined
                                                        operator?:
                                                          | string
                                                          | undefined
                                                        values?:
                                                          | string[]
                                                          | undefined
                                                      }[]
                                                    | undefined
                                                  matchLabels?:
                                                    | object
                                                    | undefined
                                                }
                                              | undefined
                                            namespaceSelector?:
                                              | {
                                                  matchExpressions?:
                                                    | {
                                                        key?: string | undefined
                                                        operator?:
                                                          | string
                                                          | undefined
                                                        values?:
                                                          | string[]
                                                          | undefined
                                                      }[]
                                                    | undefined
                                                  matchLabels?:
                                                    | object
                                                    | undefined
                                                }
                                              | undefined
                                            namespaces?: string[] | undefined
                                            topologyKey?: string | undefined
                                          }[]
                                        | undefined
                                    }
                                  | undefined
                              }
                            | undefined
                          enableServiceLinks?: boolean | undefined
                          hostAliases?:
                            | {
                                hostnames?: string[] | undefined
                                ip?: string | undefined
                              }[]
                            | undefined
                          imagePullSecrets?:
                            | {
                                name?: string | undefined
                              }[]
                            | undefined
                          metadata?:
                            | {
                                annotations?: object | undefined
                                labels?: object | undefined
                              }
                            | undefined
                          priorityClassName?: string | undefined
                          schedulerName?: string | undefined
                          securityContext?:
                            | {
                                fsGroup?: number | undefined
                                fsGroupChangePolicy?: string | undefined
                                runAsGroup?: number | undefined
                                runAsNonRoot?: boolean | undefined
                                runAsUser?: number | undefined
                                seLinuxOptions?:
                                  | {
                                      level?: string | undefined
                                      role?: string | undefined
                                      type?: string | undefined
                                      user?: string | undefined
                                    }
                                  | undefined
                                seccompProfile?:
                                  | {
                                      localhostProfile?: string | undefined
                                      type?: string | undefined
                                    }
                                  | undefined
                                supplementalGroups?: number[] | undefined
                                sysctls?:
                                  | {
                                      name?: string | undefined
                                      value?: string | undefined
                                    }[]
                                  | undefined
                                windowsOptions?:
                                  | {
                                      gmsaCredentialSpec?: string | undefined
                                      gmsaCredentialSpecName?:
                                        | string
                                        | undefined
                                      hostProcess?: boolean | undefined
                                      runAsUserName?: string | undefined
                                    }
                                  | undefined
                              }
                            | undefined
                          terminationGracePeriodSeconds?: number | undefined
                          tmpDirSizeLimit?: string | undefined
                          tolerations?:
                            | {
                                effect?: string | undefined
                                key?: string | undefined
                                operator?: string | undefined
                                tolerationSeconds?: number | undefined
                                value?: string | undefined
                              }[]
                            | undefined
                          topologySpreadConstraints?:
                            | {
                                labelSelector?:
                                  | {
                                      matchExpressions?:
                                        | {
                                            key?: string | undefined
                                            operator?: string | undefined
                                            values?: string[] | undefined
                                          }[]
                                        | undefined
                                      matchLabels?: object | undefined
                                    }
                                  | undefined
                                maxSkew?: number | undefined
                                minDomains?: number | undefined
                                topologyKey?: string | undefined
                                whenUnsatisfiable?: string | undefined
                              }[]
                            | undefined
                        }
                      | undefined
                    serviceAccount?:
                      | {
                          metadata?:
                            | {
                                annotations?: object | undefined
                                labels?: object | undefined
                              }
                            | undefined
                        }
                      | undefined
                    tlsSidecarContainer?:
                      | {
                          env?:
                            | {
                                name?: string | undefined
                                value?: string | undefined
                              }[]
                            | undefined
                          securityContext?:
                            | {
                                allowPrivilegeEscalation?: boolean | undefined
                                capabilities?:
                                  | {
                                      add?: string[] | undefined
                                      drop?: string[] | undefined
                                    }
                                  | undefined
                                privileged?: boolean | undefined
                                procMount?: string | undefined
                                readOnlyRootFilesystem?: boolean | undefined
                                runAsGroup?: number | undefined
                                runAsNonRoot?: boolean | undefined
                                runAsUser?: number | undefined
                                seLinuxOptions?:
                                  | {
                                      level?: string | undefined
                                      role?: string | undefined
                                      type?: string | undefined
                                      user?: string | undefined
                                    }
                                  | undefined
                                seccompProfile?:
                                  | {
                                      localhostProfile?: string | undefined
                                      type?: string | undefined
                                    }
                                  | undefined
                                windowsOptions?:
                                  | {
                                      gmsaCredentialSpec?: string | undefined
                                      gmsaCredentialSpecName?:
                                        | string
                                        | undefined
                                      hostProcess?: boolean | undefined
                                      runAsUserName?: string | undefined
                                    }
                                  | undefined
                              }
                            | undefined
                        }
                      | undefined
                    topicOperatorContainer?:
                      | {
                          env?:
                            | {
                                name?: string | undefined
                                value?: string | undefined
                              }[]
                            | undefined
                          securityContext?:
                            | {
                                allowPrivilegeEscalation?: boolean | undefined
                                capabilities?:
                                  | {
                                      add?: string[] | undefined
                                      drop?: string[] | undefined
                                    }
                                  | undefined
                                privileged?: boolean | undefined
                                procMount?: string | undefined
                                readOnlyRootFilesystem?: boolean | undefined
                                runAsGroup?: number | undefined
                                runAsNonRoot?: boolean | undefined
                                runAsUser?: number | undefined
                                seLinuxOptions?:
                                  | {
                                      level?: string | undefined
                                      role?: string | undefined
                                      type?: string | undefined
                                      user?: string | undefined
                                    }
                                  | undefined
                                seccompProfile?:
                                  | {
                                      localhostProfile?: string | undefined
                                      type?: string | undefined
                                    }
                                  | undefined
                                windowsOptions?:
                                  | {
                                      gmsaCredentialSpec?: string | undefined
                                      gmsaCredentialSpecName?:
                                        | string
                                        | undefined
                                      hostProcess?: boolean | undefined
                                      runAsUserName?: string | undefined
                                    }
                                  | undefined
                              }
                            | undefined
                        }
                      | undefined
                    userOperatorContainer?:
                      | {
                          env?:
                            | {
                                name?: string | undefined
                                value?: string | undefined
                              }[]
                            | undefined
                          securityContext?:
                            | {
                                allowPrivilegeEscalation?: boolean | undefined
                                capabilities?:
                                  | {
                                      add?: string[] | undefined
                                      drop?: string[] | undefined
                                    }
                                  | undefined
                                privileged?: boolean | undefined
                                procMount?: string | undefined
                                readOnlyRootFilesystem?: boolean | undefined
                                runAsGroup?: number | undefined
                                runAsNonRoot?: boolean | undefined
                                runAsUser?: number | undefined
                                seLinuxOptions?:
                                  | {
                                      level?: string | undefined
                                      role?: string | undefined
                                      type?: string | undefined
                                      user?: string | undefined
                                    }
                                  | undefined
                                seccompProfile?:
                                  | {
                                      localhostProfile?: string | undefined
                                      type?: string | undefined
                                    }
                                  | undefined
                                windowsOptions?:
                                  | {
                                      gmsaCredentialSpec?: string | undefined
                                      gmsaCredentialSpecName?:
                                        | string
                                        | undefined
                                      hostProcess?: boolean | undefined
                                      runAsUserName?: string | undefined
                                    }
                                  | undefined
                              }
                            | undefined
                        }
                      | undefined
                  }
                | undefined
              tlsSidecar?:
                | {
                    image?: string | undefined
                    livenessProbe?:
                      | {
                          failureThreshold?: number | undefined
                          initialDelaySeconds?: number | undefined
                          periodSeconds?: number | undefined
                          successThreshold?: number | undefined
                          timeoutSeconds?: number | undefined
                        }
                      | undefined
                    logLevel?:
                      | (
                          | 'emerg'
                          | 'alert'
                          | 'crit'
                          | 'err'
                          | 'warning'
                          | 'notice'
                          | 'info'
                          | 'debug'
                        )
                      | undefined
                    readinessProbe?:
                      | {
                          failureThreshold?: number | undefined
                          initialDelaySeconds?: number | undefined
                          periodSeconds?: number | undefined
                          successThreshold?: number | undefined
                          timeoutSeconds?: number | undefined
                        }
                      | undefined
                    resources?:
                      | {
                          limits?: object | undefined
                          requests?: object | undefined
                        }
                      | undefined
                  }
                | undefined
              topicOperator?:
                | {
                    image?: string | undefined
                    jvmOptions?:
                      | {
                          '-XX'?: object | undefined
                          '-Xms'?: string | undefined
                          '-Xmx'?: string | undefined
                          gcLoggingEnabled?: boolean | undefined
                          javaSystemProperties?:
                            | {
                                name?: string | undefined
                                value?: string | undefined
                              }[]
                            | undefined
                        }
                      | undefined
                    livenessProbe?:
                      | {
                          failureThreshold?: number | undefined
                          initialDelaySeconds?: number | undefined
                          periodSeconds?: number | undefined
                          successThreshold?: number | undefined
                          timeoutSeconds?: number | undefined
                        }
                      | undefined
                    logging?:
                      | {
                          loggers?: object | undefined
                          type: 'inline' | 'external'
                          valueFrom?:
                            | {
                                configMapKeyRef?:
                                  | {
                                      key?: string | undefined
                                      name?: string | undefined
                                      optional?: boolean | undefined
                                    }
                                  | undefined
                              }
                            | undefined
                        }
                      | undefined
                    readinessProbe?:
                      | {
                          failureThreshold?: number | undefined
                          initialDelaySeconds?: number | undefined
                          periodSeconds?: number | undefined
                          successThreshold?: number | undefined
                          timeoutSeconds?: number | undefined
                        }
                      | undefined
                    reconciliationIntervalSeconds?: number | undefined
                    resources?:
                      | {
                          limits?: object | undefined
                          requests?: object | undefined
                        }
                      | undefined
                    startupProbe?:
                      | {
                          failureThreshold?: number | undefined
                          initialDelaySeconds?: number | undefined
                          periodSeconds?: number | undefined
                          successThreshold?: number | undefined
                          timeoutSeconds?: number | undefined
                        }
                      | undefined
                    topicMetadataMaxAttempts?: number | undefined
                    watchedNamespace?: string | undefined
                    zookeeperSessionTimeoutSeconds?: number | undefined
                  }
                | undefined
              userOperator?:
                | {
                    image?: string | undefined
                    jvmOptions?:
                      | {
                          '-XX'?: object | undefined
                          '-Xms'?: string | undefined
                          '-Xmx'?: string | undefined
                          gcLoggingEnabled?: boolean | undefined
                          javaSystemProperties?:
                            | {
                                name?: string | undefined
                                value?: string | undefined
                              }[]
                            | undefined
                        }
                      | undefined
                    livenessProbe?:
                      | {
                          failureThreshold?: number | undefined
                          initialDelaySeconds?: number | undefined
                          periodSeconds?: number | undefined
                          successThreshold?: number | undefined
                          timeoutSeconds?: number | undefined
                        }
                      | undefined
                    logging?:
                      | {
                          loggers?: object | undefined
                          type: 'inline' | 'external'
                          valueFrom?:
                            | {
                                configMapKeyRef?:
                                  | {
                                      key?: string | undefined
                                      name?: string | undefined
                                      optional?: boolean | undefined
                                    }
                                  | undefined
                              }
                            | undefined
                        }
                      | undefined
                    readinessProbe?:
                      | {
                          failureThreshold?: number | undefined
                          initialDelaySeconds?: number | undefined
                          periodSeconds?: number | undefined
                          successThreshold?: number | undefined
                          timeoutSeconds?: number | undefined
                        }
                      | undefined
                    reconciliationIntervalSeconds?: number | undefined
                    resources?:
                      | {
                          limits?: object | undefined
                          requests?: object | undefined
                        }
                      | undefined
                    secretPrefix?: string | undefined
                    watchedNamespace?: string | undefined
                    zookeeperSessionTimeoutSeconds?: number | undefined
                  }
                | undefined
            }
          | undefined
        jmxTrans?:
          | {
              image?: string | undefined
              kafkaQueries: {
                attributes: string[]
                outputs: string[]
                targetMBean: string
              }[]
              logLevel?: string | undefined
              outputDefinitions: {
                flushDelayInSeconds?: number | undefined
                host?: string | undefined
                name: string
                outputType: string
                port?: number | undefined
                typeNames?: string[] | undefined
              }[]
              resources?:
                | {
                    limits?: object | undefined
                    requests?: object | undefined
                  }
                | undefined
              template?:
                | {
                    container?:
                      | {
                          env?:
                            | {
                                name?: string | undefined
                                value?: string | undefined
                              }[]
                            | undefined
                          securityContext?:
                            | {
                                allowPrivilegeEscalation?: boolean | undefined
                                capabilities?:
                                  | {
                                      add?: string[] | undefined
                                      drop?: string[] | undefined
                                    }
                                  | undefined
                                privileged?: boolean | undefined
                                procMount?: string | undefined
                                readOnlyRootFilesystem?: boolean | undefined
                                runAsGroup?: number | undefined
                                runAsNonRoot?: boolean | undefined
                                runAsUser?: number | undefined
                                seLinuxOptions?:
                                  | {
                                      level?: string | undefined
                                      role?: string | undefined
                                      type?: string | undefined
                                      user?: string | undefined
                                    }
                                  | undefined
                                seccompProfile?:
                                  | {
                                      localhostProfile?: string | undefined
                                      type?: string | undefined
                                    }
                                  | undefined
                                windowsOptions?:
                                  | {
                                      gmsaCredentialSpec?: string | undefined
                                      gmsaCredentialSpecName?:
                                        | string
                                        | undefined
                                      hostProcess?: boolean | undefined
                                      runAsUserName?: string | undefined
                                    }
                                  | undefined
                              }
                            | undefined
                        }
                      | undefined
                    deployment?:
                      | {
                          metadata?:
                            | {
                                annotations?: object | undefined
                                labels?: object | undefined
                              }
                            | undefined
                        }
                      | undefined
                    pod?:
                      | {
                          affinity?:
                            | {
                                nodeAffinity?:
                                  | {
                                      preferredDuringSchedulingIgnoredDuringExecution?:
                                        | {
                                            preference?:
                                              | {
                                                  matchExpressions?:
                                                    | {
                                                        key?: string | undefined
                                                        operator?:
                                                          | string
                                                          | undefined
                                                        values?:
                                                          | string[]
                                                          | undefined
                                                      }[]
                                                    | undefined
                                                  matchFields?:
                                                    | {
                                                        key?: string | undefined
                                                        operator?:
                                                          | string
                                                          | undefined
                                                        values?:
                                                          | string[]
                                                          | undefined
                                                      }[]
                                                    | undefined
                                                }
                                              | undefined
                                            weight?: number | undefined
                                          }[]
                                        | undefined
                                      requiredDuringSchedulingIgnoredDuringExecution?:
                                        | {
                                            nodeSelectorTerms?:
                                              | {
                                                  matchExpressions?:
                                                    | {
                                                        key?: string | undefined
                                                        operator?:
                                                          | string
                                                          | undefined
                                                        values?:
                                                          | string[]
                                                          | undefined
                                                      }[]
                                                    | undefined
                                                  matchFields?:
                                                    | {
                                                        key?: string | undefined
                                                        operator?:
                                                          | string
                                                          | undefined
                                                        values?:
                                                          | string[]
                                                          | undefined
                                                      }[]
                                                    | undefined
                                                }[]
                                              | undefined
                                          }
                                        | undefined
                                    }
                                  | undefined
                                podAffinity?:
                                  | {
                                      preferredDuringSchedulingIgnoredDuringExecution?:
                                        | {
                                            podAffinityTerm?:
                                              | {
                                                  labelSelector?:
                                                    | {
                                                        matchExpressions?:
                                                          | {
                                                              key?:
                                                                | string
                                                                | undefined
                                                              operator?:
                                                                | string
                                                                | undefined
                                                              values?:
                                                                | string[]
                                                                | undefined
                                                            }[]
                                                          | undefined
                                                        matchLabels?:
                                                          | object
                                                          | undefined
                                                      }
                                                    | undefined
                                                  namespaceSelector?:
                                                    | {
                                                        matchExpressions?:
                                                          | {
                                                              key?:
                                                                | string
                                                                | undefined
                                                              operator?:
                                                                | string
                                                                | undefined
                                                              values?:
                                                                | string[]
                                                                | undefined
                                                            }[]
                                                          | undefined
                                                        matchLabels?:
                                                          | object
                                                          | undefined
                                                      }
                                                    | undefined
                                                  namespaces?:
                                                    | string[]
                                                    | undefined
                                                  topologyKey?:
                                                    | string
                                                    | undefined
                                                }
                                              | undefined
                                            weight?: number | undefined
                                          }[]
                                        | undefined
                                      requiredDuringSchedulingIgnoredDuringExecution?:
                                        | {
                                            labelSelector?:
                                              | {
                                                  matchExpressions?:
                                                    | {
                                                        key?: string | undefined
                                                        operator?:
                                                          | string
                                                          | undefined
                                                        values?:
                                                          | string[]
                                                          | undefined
                                                      }[]
                                                    | undefined
                                                  matchLabels?:
                                                    | object
                                                    | undefined
                                                }
                                              | undefined
                                            namespaceSelector?:
                                              | {
                                                  matchExpressions?:
                                                    | {
                                                        key?: string | undefined
                                                        operator?:
                                                          | string
                                                          | undefined
                                                        values?:
                                                          | string[]
                                                          | undefined
                                                      }[]
                                                    | undefined
                                                  matchLabels?:
                                                    | object
                                                    | undefined
                                                }
                                              | undefined
                                            namespaces?: string[] | undefined
                                            topologyKey?: string | undefined
                                          }[]
                                        | undefined
                                    }
                                  | undefined
                                podAntiAffinity?:
                                  | {
                                      preferredDuringSchedulingIgnoredDuringExecution?:
                                        | {
                                            podAffinityTerm?:
                                              | {
                                                  labelSelector?:
                                                    | {
                                                        matchExpressions?:
                                                          | {
                                                              key?:
                                                                | string
                                                                | undefined
                                                              operator?:
                                                                | string
                                                                | undefined
                                                              values?:
                                                                | string[]
                                                                | undefined
                                                            }[]
                                                          | undefined
                                                        matchLabels?:
                                                          | object
                                                          | undefined
                                                      }
                                                    | undefined
                                                  namespaceSelector?:
                                                    | {
                                                        matchExpressions?:
                                                          | {
                                                              key?:
                                                                | string
                                                                | undefined
                                                              operator?:
                                                                | string
                                                                | undefined
                                                              values?:
                                                                | string[]
                                                                | undefined
                                                            }[]
                                                          | undefined
                                                        matchLabels?:
                                                          | object
                                                          | undefined
                                                      }
                                                    | undefined
                                                  namespaces?:
                                                    | string[]
                                                    | undefined
                                                  topologyKey?:
                                                    | string
                                                    | undefined
                                                }
                                              | undefined
                                            weight?: number | undefined
                                          }[]
                                        | undefined
                                      requiredDuringSchedulingIgnoredDuringExecution?:
                                        | {
                                            labelSelector?:
                                              | {
                                                  matchExpressions?:
                                                    | {
                                                        key?: string | undefined
                                                        operator?:
                                                          | string
                                                          | undefined
                                                        values?:
                                                          | string[]
                                                          | undefined
                                                      }[]
                                                    | undefined
                                                  matchLabels?:
                                                    | object
                                                    | undefined
                                                }
                                              | undefined
                                            namespaceSelector?:
                                              | {
                                                  matchExpressions?:
                                                    | {
                                                        key?: string | undefined
                                                        operator?:
                                                          | string
                                                          | undefined
                                                        values?:
                                                          | string[]
                                                          | undefined
                                                      }[]
                                                    | undefined
                                                  matchLabels?:
                                                    | object
                                                    | undefined
                                                }
                                              | undefined
                                            namespaces?: string[] | undefined
                                            topologyKey?: string | undefined
                                          }[]
                                        | undefined
                                    }
                                  | undefined
                              }
                            | undefined
                          enableServiceLinks?: boolean | undefined
                          hostAliases?:
                            | {
                                hostnames?: string[] | undefined
                                ip?: string | undefined
                              }[]
                            | undefined
                          imagePullSecrets?:
                            | {
                                name?: string | undefined
                              }[]
                            | undefined
                          metadata?:
                            | {
                                annotations?: object | undefined
                                labels?: object | undefined
                              }
                            | undefined
                          priorityClassName?: string | undefined
                          schedulerName?: string | undefined
                          securityContext?:
                            | {
                                fsGroup?: number | undefined
                                fsGroupChangePolicy?: string | undefined
                                runAsGroup?: number | undefined
                                runAsNonRoot?: boolean | undefined
                                runAsUser?: number | undefined
                                seLinuxOptions?:
                                  | {
                                      level?: string | undefined
                                      role?: string | undefined
                                      type?: string | undefined
                                      user?: string | undefined
                                    }
                                  | undefined
                                seccompProfile?:
                                  | {
                                      localhostProfile?: string | undefined
                                      type?: string | undefined
                                    }
                                  | undefined
                                supplementalGroups?: number[] | undefined
                                sysctls?:
                                  | {
                                      name?: string | undefined
                                      value?: string | undefined
                                    }[]
                                  | undefined
                                windowsOptions?:
                                  | {
                                      gmsaCredentialSpec?: string | undefined
                                      gmsaCredentialSpecName?:
                                        | string
                                        | undefined
                                      hostProcess?: boolean | undefined
                                      runAsUserName?: string | undefined
                                    }
                                  | undefined
                              }
                            | undefined
                          terminationGracePeriodSeconds?: number | undefined
                          tmpDirSizeLimit?: string | undefined
                          tolerations?:
                            | {
                                effect?: string | undefined
                                key?: string | undefined
                                operator?: string | undefined
                                tolerationSeconds?: number | undefined
                                value?: string | undefined
                              }[]
                            | undefined
                          topologySpreadConstraints?:
                            | {
                                labelSelector?:
                                  | {
                                      matchExpressions?:
                                        | {
                                            key?: string | undefined
                                            operator?: string | undefined
                                            values?: string[] | undefined
                                          }[]
                                        | undefined
                                      matchLabels?: object | undefined
                                    }
                                  | undefined
                                maxSkew?: number | undefined
                                minDomains?: number | undefined
                                topologyKey?: string | undefined
                                whenUnsatisfiable?: string | undefined
                              }[]
                            | undefined
                        }
                      | undefined
                    serviceAccount?:
                      | {
                          metadata?:
                            | {
                                annotations?: object | undefined
                                labels?: object | undefined
                              }
                            | undefined
                        }
                      | undefined
                  }
                | undefined
            }
          | undefined
        kafka: {
          authorization?:
            | {
                allowOnError?: boolean | undefined
                authorizerClass?: string | undefined
                clientId?: string | undefined
                connectTimeoutSeconds?: number | undefined
                delegateToKafkaAcls?: boolean | undefined
                disableTlsHostnameVerification?: boolean | undefined
                enableMetrics?: boolean | undefined
                expireAfterMs?: number | undefined
                grantsRefreshPeriodSeconds?: number | undefined
                grantsRefreshPoolSize?: number | undefined
                initialCacheCapacity?: number | undefined
                maximumCacheSize?: number | undefined
                readTimeoutSeconds?: number | undefined
                superUsers?: string[] | undefined
                supportsAdminApi?: boolean | undefined
                tlsTrustedCertificates?:
                  | {
                      certificate: string
                      secretName: string
                    }[]
                  | undefined
                tokenEndpointUri?: string | undefined
                type: 'simple' | 'opa' | 'keycloak' | 'custom'
                url?: string | undefined
              }
            | undefined
          brokerRackInitImage?: string | undefined
          config?: object | undefined
          image?: string | undefined
          jmxOptions?:
            | {
                authentication?:
                  | {
                      type: 'password'
                    }
                  | undefined
              }
            | undefined
          jvmOptions?:
            | {
                '-XX'?: object | undefined
                '-Xms'?: string | undefined
                '-Xmx'?: string | undefined
                gcLoggingEnabled?: boolean | undefined
                javaSystemProperties?:
                  | {
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
              }
            | undefined
          listeners: {
            authentication?:
              | {
                  accessTokenIsJwt?: boolean | undefined
                  checkAccessTokenType?: boolean | undefined
                  checkAudience?: boolean | undefined
                  checkIssuer?: boolean | undefined
                  clientAudience?: string | undefined
                  clientId?: string | undefined
                  clientScope?: string | undefined
                  clientSecret?:
                    | {
                        key: string
                        secretName: string
                      }
                    | undefined
                  connectTimeoutSeconds?: number | undefined
                  customClaimCheck?: string | undefined
                  disableTlsHostnameVerification?: boolean | undefined
                  enableECDSA?: boolean | undefined
                  enableOauthBearer?: boolean | undefined
                  enablePlain?: boolean | undefined
                  fallbackUserNameClaim?: string | undefined
                  fallbackUserNamePrefix?: string | undefined
                  groupsClaim?: string | undefined
                  groupsClaimDelimiter?: string | undefined
                  introspectionEndpointUri?: string | undefined
                  jwksEndpointUri?: string | undefined
                  jwksExpirySeconds?: number | undefined
                  jwksMinRefreshPauseSeconds?: number | undefined
                  jwksRefreshSeconds?: number | undefined
                  listenerConfig?: object | undefined
                  maxSecondsWithoutReauthentication?: number | undefined
                  readTimeoutSeconds?: number | undefined
                  sasl?: boolean | undefined
                  secrets?:
                    | {
                        key: string
                        secretName: string
                      }[]
                    | undefined
                  tlsTrustedCertificates?:
                    | {
                        certificate: string
                        secretName: string
                      }[]
                    | undefined
                  tokenEndpointUri?: string | undefined
                  type: 'tls' | 'scram-sha-512' | 'oauth' | 'custom'
                  userInfoEndpointUri?: string | undefined
                  userNameClaim?: string | undefined
                  validIssuerUri?: string | undefined
                  validTokenType?: string | undefined
                }
              | undefined
            configuration?:
              | {
                  bootstrap?:
                    | {
                        alternativeNames?: string[] | undefined
                        annotations?: object | undefined
                        host?: string | undefined
                        labels?: object | undefined
                        loadBalancerIP?: string | undefined
                        nodePort?: number | undefined
                      }
                    | undefined
                  brokerCertChainAndKey?:
                    | {
                        certificate: string
                        key: string
                        secretName: string
                      }
                    | undefined
                  brokers?:
                    | {
                        advertisedHost?: string | undefined
                        advertisedPort?: number | undefined
                        annotations?: object | undefined
                        broker: number
                        host?: string | undefined
                        labels?: object | undefined
                        loadBalancerIP?: string | undefined
                        nodePort?: number | undefined
                      }[]
                    | undefined
                  class?: string | undefined
                  createBootstrapService?: boolean | undefined
                  externalTrafficPolicy?: ('Local' | 'Cluster') | undefined
                  finalizers?: string[] | undefined
                  ipFamilies?: ('IPv4' | 'IPv6')[] | undefined
                  ipFamilyPolicy?:
                    | ('SingleStack' | 'PreferDualStack' | 'RequireDualStack')
                    | undefined
                  loadBalancerSourceRanges?: string[] | undefined
                  maxConnectionCreationRate?: number | undefined
                  maxConnections?: number | undefined
                  preferredNodePortAddressType?:
                    | (
                        | 'ExternalIP'
                        | 'ExternalDNS'
                        | 'InternalIP'
                        | 'InternalDNS'
                        | 'Hostname'
                      )
                    | undefined
                  useServiceDnsDomain?: boolean | undefined
                }
              | undefined
            name: string
            networkPolicyPeers?:
              | {
                  ipBlock?:
                    | {
                        cidr?: string | undefined
                        except?: string[] | undefined
                      }
                    | undefined
                  namespaceSelector?:
                    | {
                        matchExpressions?:
                          | {
                              key?: string | undefined
                              operator?: string | undefined
                              values?: string[] | undefined
                            }[]
                          | undefined
                        matchLabels?: object | undefined
                      }
                    | undefined
                  podSelector?:
                    | {
                        matchExpressions?:
                          | {
                              key?: string | undefined
                              operator?: string | undefined
                              values?: string[] | undefined
                            }[]
                          | undefined
                        matchLabels?: object | undefined
                      }
                    | undefined
                }[]
              | undefined
            port: number
            tls: boolean
            type: 'internal' | 'route' | 'loadbalancer' | 'nodeport' | 'ingress'
          }[]
          livenessProbe?:
            | {
                failureThreshold?: number | undefined
                initialDelaySeconds?: number | undefined
                periodSeconds?: number | undefined
                successThreshold?: number | undefined
                timeoutSeconds?: number | undefined
              }
            | undefined
          logging?:
            | {
                loggers?: object | undefined
                type: 'inline' | 'external'
                valueFrom?:
                  | {
                      configMapKeyRef?:
                        | {
                            key?: string | undefined
                            name?: string | undefined
                            optional?: boolean | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
            | undefined
          metricsConfig?:
            | {
                type: 'jmxPrometheusExporter'
                valueFrom: {
                  configMapKeyRef?:
                    | {
                        key?: string | undefined
                        name?: string | undefined
                        optional?: boolean | undefined
                      }
                    | undefined
                }
              }
            | undefined
          rack?:
            | {
                topologyKey: string
              }
            | undefined
          readinessProbe?:
            | {
                failureThreshold?: number | undefined
                initialDelaySeconds?: number | undefined
                periodSeconds?: number | undefined
                successThreshold?: number | undefined
                timeoutSeconds?: number | undefined
              }
            | undefined
          replicas: number
          resources?:
            | {
                limits?: object | undefined
                requests?: object | undefined
              }
            | undefined
          storage: {
            class?: string | undefined
            deleteClaim?: boolean | undefined
            id?: number | undefined
            overrides?:
              | {
                  broker?: number | undefined
                  class?: string | undefined
                }[]
              | undefined
            selector?: object | undefined
            size?: string | undefined
            sizeLimit?: string | undefined
            type: 'ephemeral' | 'persistent-claim' | 'jbod'
            volumes?:
              | {
                  class?: string | undefined
                  deleteClaim?: boolean | undefined
                  id?: number | undefined
                  overrides?:
                    | {
                        broker?: number | undefined
                        class?: string | undefined
                      }[]
                    | undefined
                  selector?: object | undefined
                  size?: string | undefined
                  sizeLimit?: string | undefined
                  type: 'ephemeral' | 'persistent-claim'
                }[]
              | undefined
          }
          template?:
            | {
                bootstrapService?:
                  | {
                      ipFamilies?: ('IPv4' | 'IPv6')[] | undefined
                      ipFamilyPolicy?:
                        | (
                            | 'SingleStack'
                            | 'PreferDualStack'
                            | 'RequireDualStack'
                          )
                        | undefined
                      metadata?:
                        | {
                            annotations?: object | undefined
                            labels?: object | undefined
                          }
                        | undefined
                    }
                  | undefined
                brokersService?:
                  | {
                      ipFamilies?: ('IPv4' | 'IPv6')[] | undefined
                      ipFamilyPolicy?:
                        | (
                            | 'SingleStack'
                            | 'PreferDualStack'
                            | 'RequireDualStack'
                          )
                        | undefined
                      metadata?:
                        | {
                            annotations?: object | undefined
                            labels?: object | undefined
                          }
                        | undefined
                    }
                  | undefined
                clusterCaCert?:
                  | {
                      metadata?:
                        | {
                            annotations?: object | undefined
                            labels?: object | undefined
                          }
                        | undefined
                    }
                  | undefined
                clusterRoleBinding?:
                  | {
                      metadata?:
                        | {
                            annotations?: object | undefined
                            labels?: object | undefined
                          }
                        | undefined
                    }
                  | undefined
                externalBootstrapIngress?:
                  | {
                      metadata?:
                        | {
                            annotations?: object | undefined
                            labels?: object | undefined
                          }
                        | undefined
                    }
                  | undefined
                externalBootstrapRoute?:
                  | {
                      metadata?:
                        | {
                            annotations?: object | undefined
                            labels?: object | undefined
                          }
                        | undefined
                    }
                  | undefined
                externalBootstrapService?:
                  | {
                      metadata?:
                        | {
                            annotations?: object | undefined
                            labels?: object | undefined
                          }
                        | undefined
                    }
                  | undefined
                initContainer?:
                  | {
                      env?:
                        | {
                            name?: string | undefined
                            value?: string | undefined
                          }[]
                        | undefined
                      securityContext?:
                        | {
                            allowPrivilegeEscalation?: boolean | undefined
                            capabilities?:
                              | {
                                  add?: string[] | undefined
                                  drop?: string[] | undefined
                                }
                              | undefined
                            privileged?: boolean | undefined
                            procMount?: string | undefined
                            readOnlyRootFilesystem?: boolean | undefined
                            runAsGroup?: number | undefined
                            runAsNonRoot?: boolean | undefined
                            runAsUser?: number | undefined
                            seLinuxOptions?:
                              | {
                                  level?: string | undefined
                                  role?: string | undefined
                                  type?: string | undefined
                                  user?: string | undefined
                                }
                              | undefined
                            seccompProfile?:
                              | {
                                  localhostProfile?: string | undefined
                                  type?: string | undefined
                                }
                              | undefined
                            windowsOptions?:
                              | {
                                  gmsaCredentialSpec?: string | undefined
                                  gmsaCredentialSpecName?: string | undefined
                                  hostProcess?: boolean | undefined
                                  runAsUserName?: string | undefined
                                }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
                jmxSecret?:
                  | {
                      metadata?:
                        | {
                            annotations?: object | undefined
                            labels?: object | undefined
                          }
                        | undefined
                    }
                  | undefined
                kafkaContainer?:
                  | {
                      env?:
                        | {
                            name?: string | undefined
                            value?: string | undefined
                          }[]
                        | undefined
                      securityContext?:
                        | {
                            allowPrivilegeEscalation?: boolean | undefined
                            capabilities?:
                              | {
                                  add?: string[] | undefined
                                  drop?: string[] | undefined
                                }
                              | undefined
                            privileged?: boolean | undefined
                            procMount?: string | undefined
                            readOnlyRootFilesystem?: boolean | undefined
                            runAsGroup?: number | undefined
                            runAsNonRoot?: boolean | undefined
                            runAsUser?: number | undefined
                            seLinuxOptions?:
                              | {
                                  level?: string | undefined
                                  role?: string | undefined
                                  type?: string | undefined
                                  user?: string | undefined
                                }
                              | undefined
                            seccompProfile?:
                              | {
                                  localhostProfile?: string | undefined
                                  type?: string | undefined
                                }
                              | undefined
                            windowsOptions?:
                              | {
                                  gmsaCredentialSpec?: string | undefined
                                  gmsaCredentialSpecName?: string | undefined
                                  hostProcess?: boolean | undefined
                                  runAsUserName?: string | undefined
                                }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
                perPodIngress?:
                  | {
                      metadata?:
                        | {
                            annotations?: object | undefined
                            labels?: object | undefined
                          }
                        | undefined
                    }
                  | undefined
                perPodRoute?:
                  | {
                      metadata?:
                        | {
                            annotations?: object | undefined
                            labels?: object | undefined
                          }
                        | undefined
                    }
                  | undefined
                perPodService?:
                  | {
                      metadata?:
                        | {
                            annotations?: object | undefined
                            labels?: object | undefined
                          }
                        | undefined
                    }
                  | undefined
                persistentVolumeClaim?:
                  | {
                      metadata?:
                        | {
                            annotations?: object | undefined
                            labels?: object | undefined
                          }
                        | undefined
                    }
                  | undefined
                pod?:
                  | {
                      affinity?:
                        | {
                            nodeAffinity?:
                              | {
                                  preferredDuringSchedulingIgnoredDuringExecution?:
                                    | {
                                        preference?:
                                          | {
                                              matchExpressions?:
                                                | {
                                                    key?: string | undefined
                                                    operator?:
                                                      | string
                                                      | undefined
                                                    values?:
                                                      | string[]
                                                      | undefined
                                                  }[]
                                                | undefined
                                              matchFields?:
                                                | {
                                                    key?: string | undefined
                                                    operator?:
                                                      | string
                                                      | undefined
                                                    values?:
                                                      | string[]
                                                      | undefined
                                                  }[]
                                                | undefined
                                            }
                                          | undefined
                                        weight?: number | undefined
                                      }[]
                                    | undefined
                                  requiredDuringSchedulingIgnoredDuringExecution?:
                                    | {
                                        nodeSelectorTerms?:
                                          | {
                                              matchExpressions?:
                                                | {
                                                    key?: string | undefined
                                                    operator?:
                                                      | string
                                                      | undefined
                                                    values?:
                                                      | string[]
                                                      | undefined
                                                  }[]
                                                | undefined
                                              matchFields?:
                                                | {
                                                    key?: string | undefined
                                                    operator?:
                                                      | string
                                                      | undefined
                                                    values?:
                                                      | string[]
                                                      | undefined
                                                  }[]
                                                | undefined
                                            }[]
                                          | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                            podAffinity?:
                              | {
                                  preferredDuringSchedulingIgnoredDuringExecution?:
                                    | {
                                        podAffinityTerm?:
                                          | {
                                              labelSelector?:
                                                | {
                                                    matchExpressions?:
                                                      | {
                                                          key?:
                                                            | string
                                                            | undefined
                                                          operator?:
                                                            | string
                                                            | undefined
                                                          values?:
                                                            | string[]
                                                            | undefined
                                                        }[]
                                                      | undefined
                                                    matchLabels?:
                                                      | object
                                                      | undefined
                                                  }
                                                | undefined
                                              namespaceSelector?:
                                                | {
                                                    matchExpressions?:
                                                      | {
                                                          key?:
                                                            | string
                                                            | undefined
                                                          operator?:
                                                            | string
                                                            | undefined
                                                          values?:
                                                            | string[]
                                                            | undefined
                                                        }[]
                                                      | undefined
                                                    matchLabels?:
                                                      | object
                                                      | undefined
                                                  }
                                                | undefined
                                              namespaces?: string[] | undefined
                                              topologyKey?: string | undefined
                                            }
                                          | undefined
                                        weight?: number | undefined
                                      }[]
                                    | undefined
                                  requiredDuringSchedulingIgnoredDuringExecution?:
                                    | {
                                        labelSelector?:
                                          | {
                                              matchExpressions?:
                                                | {
                                                    key?: string | undefined
                                                    operator?:
                                                      | string
                                                      | undefined
                                                    values?:
                                                      | string[]
                                                      | undefined
                                                  }[]
                                                | undefined
                                              matchLabels?: object | undefined
                                            }
                                          | undefined
                                        namespaceSelector?:
                                          | {
                                              matchExpressions?:
                                                | {
                                                    key?: string | undefined
                                                    operator?:
                                                      | string
                                                      | undefined
                                                    values?:
                                                      | string[]
                                                      | undefined
                                                  }[]
                                                | undefined
                                              matchLabels?: object | undefined
                                            }
                                          | undefined
                                        namespaces?: string[] | undefined
                                        topologyKey?: string | undefined
                                      }[]
                                    | undefined
                                }
                              | undefined
                            podAntiAffinity?:
                              | {
                                  preferredDuringSchedulingIgnoredDuringExecution?:
                                    | {
                                        podAffinityTerm?:
                                          | {
                                              labelSelector?:
                                                | {
                                                    matchExpressions?:
                                                      | {
                                                          key?:
                                                            | string
                                                            | undefined
                                                          operator?:
                                                            | string
                                                            | undefined
                                                          values?:
                                                            | string[]
                                                            | undefined
                                                        }[]
                                                      | undefined
                                                    matchLabels?:
                                                      | object
                                                      | undefined
                                                  }
                                                | undefined
                                              namespaceSelector?:
                                                | {
                                                    matchExpressions?:
                                                      | {
                                                          key?:
                                                            | string
                                                            | undefined
                                                          operator?:
                                                            | string
                                                            | undefined
                                                          values?:
                                                            | string[]
                                                            | undefined
                                                        }[]
                                                      | undefined
                                                    matchLabels?:
                                                      | object
                                                      | undefined
                                                  }
                                                | undefined
                                              namespaces?: string[] | undefined
                                              topologyKey?: string | undefined
                                            }
                                          | undefined
                                        weight?: number | undefined
                                      }[]
                                    | undefined
                                  requiredDuringSchedulingIgnoredDuringExecution?:
                                    | {
                                        labelSelector?:
                                          | {
                                              matchExpressions?:
                                                | {
                                                    key?: string | undefined
                                                    operator?:
                                                      | string
                                                      | undefined
                                                    values?:
                                                      | string[]
                                                      | undefined
                                                  }[]
                                                | undefined
                                              matchLabels?: object | undefined
                                            }
                                          | undefined
                                        namespaceSelector?:
                                          | {
                                              matchExpressions?:
                                                | {
                                                    key?: string | undefined
                                                    operator?:
                                                      | string
                                                      | undefined
                                                    values?:
                                                      | string[]
                                                      | undefined
                                                  }[]
                                                | undefined
                                              matchLabels?: object | undefined
                                            }
                                          | undefined
                                        namespaces?: string[] | undefined
                                        topologyKey?: string | undefined
                                      }[]
                                    | undefined
                                }
                              | undefined
                          }
                        | undefined
                      enableServiceLinks?: boolean | undefined
                      hostAliases?:
                        | {
                            hostnames?: string[] | undefined
                            ip?: string | undefined
                          }[]
                        | undefined
                      imagePullSecrets?:
                        | {
                            name?: string | undefined
                          }[]
                        | undefined
                      metadata?:
                        | {
                            annotations?: object | undefined
                            labels?: object | undefined
                          }
                        | undefined
                      priorityClassName?: string | undefined
                      schedulerName?: string | undefined
                      securityContext?:
                        | {
                            fsGroup?: number | undefined
                            fsGroupChangePolicy?: string | undefined
                            runAsGroup?: number | undefined
                            runAsNonRoot?: boolean | undefined
                            runAsUser?: number | undefined
                            seLinuxOptions?:
                              | {
                                  level?: string | undefined
                                  role?: string | undefined
                                  type?: string | undefined
                                  user?: string | undefined
                                }
                              | undefined
                            seccompProfile?:
                              | {
                                  localhostProfile?: string | undefined
                                  type?: string | undefined
                                }
                              | undefined
                            supplementalGroups?: number[] | undefined
                            sysctls?:
                              | {
                                  name?: string | undefined
                                  value?: string | undefined
                                }[]
                              | undefined
                            windowsOptions?:
                              | {
                                  gmsaCredentialSpec?: string | undefined
                                  gmsaCredentialSpecName?: string | undefined
                                  hostProcess?: boolean | undefined
                                  runAsUserName?: string | undefined
                                }
                              | undefined
                          }
                        | undefined
                      terminationGracePeriodSeconds?: number | undefined
                      tmpDirSizeLimit?: string | undefined
                      tolerations?:
                        | {
                            effect?: string | undefined
                            key?: string | undefined
                            operator?: string | undefined
                            tolerationSeconds?: number | undefined
                            value?: string | undefined
                          }[]
                        | undefined
                      topologySpreadConstraints?:
                        | {
                            labelSelector?:
                              | {
                                  matchExpressions?:
                                    | {
                                        key?: string | undefined
                                        operator?: string | undefined
                                        values?: string[] | undefined
                                      }[]
                                    | undefined
                                  matchLabels?: object | undefined
                                }
                              | undefined
                            maxSkew?: number | undefined
                            minDomains?: number | undefined
                            topologyKey?: string | undefined
                            whenUnsatisfiable?: string | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                podDisruptionBudget?:
                  | {
                      maxUnavailable?: number | undefined
                      metadata?:
                        | {
                            annotations?: object | undefined
                            labels?: object | undefined
                          }
                        | undefined
                    }
                  | undefined
                podSet?:
                  | {
                      metadata?:
                        | {
                            annotations?: object | undefined
                            labels?: object | undefined
                          }
                        | undefined
                    }
                  | undefined
                serviceAccount?:
                  | {
                      metadata?:
                        | {
                            annotations?: object | undefined
                            labels?: object | undefined
                          }
                        | undefined
                    }
                  | undefined
                statefulset?:
                  | {
                      metadata?:
                        | {
                            annotations?: object | undefined
                            labels?: object | undefined
                          }
                        | undefined
                      podManagementPolicy?:
                        | ('OrderedReady' | 'Parallel')
                        | undefined
                    }
                  | undefined
              }
            | undefined
          version?: string | undefined
        }
        kafkaExporter?:
          | {
              enableSaramaLogging?: boolean | undefined
              groupRegex?: string | undefined
              image?: string | undefined
              livenessProbe?:
                | {
                    failureThreshold?: number | undefined
                    initialDelaySeconds?: number | undefined
                    periodSeconds?: number | undefined
                    successThreshold?: number | undefined
                    timeoutSeconds?: number | undefined
                  }
                | undefined
              logging?: string | undefined
              readinessProbe?:
                | {
                    failureThreshold?: number | undefined
                    initialDelaySeconds?: number | undefined
                    periodSeconds?: number | undefined
                    successThreshold?: number | undefined
                    timeoutSeconds?: number | undefined
                  }
                | undefined
              resources?:
                | {
                    limits?: object | undefined
                    requests?: object | undefined
                  }
                | undefined
              template?:
                | {
                    container?:
                      | {
                          env?:
                            | {
                                name?: string | undefined
                                value?: string | undefined
                              }[]
                            | undefined
                          securityContext?:
                            | {
                                allowPrivilegeEscalation?: boolean | undefined
                                capabilities?:
                                  | {
                                      add?: string[] | undefined
                                      drop?: string[] | undefined
                                    }
                                  | undefined
                                privileged?: boolean | undefined
                                procMount?: string | undefined
                                readOnlyRootFilesystem?: boolean | undefined
                                runAsGroup?: number | undefined
                                runAsNonRoot?: boolean | undefined
                                runAsUser?: number | undefined
                                seLinuxOptions?:
                                  | {
                                      level?: string | undefined
                                      role?: string | undefined
                                      type?: string | undefined
                                      user?: string | undefined
                                    }
                                  | undefined
                                seccompProfile?:
                                  | {
                                      localhostProfile?: string | undefined
                                      type?: string | undefined
                                    }
                                  | undefined
                                windowsOptions?:
                                  | {
                                      gmsaCredentialSpec?: string | undefined
                                      gmsaCredentialSpecName?:
                                        | string
                                        | undefined
                                      hostProcess?: boolean | undefined
                                      runAsUserName?: string | undefined
                                    }
                                  | undefined
                              }
                            | undefined
                        }
                      | undefined
                    deployment?:
                      | {
                          metadata?:
                            | {
                                annotations?: object | undefined
                                labels?: object | undefined
                              }
                            | undefined
                        }
                      | undefined
                    pod?:
                      | {
                          affinity?:
                            | {
                                nodeAffinity?:
                                  | {
                                      preferredDuringSchedulingIgnoredDuringExecution?:
                                        | {
                                            preference?:
                                              | {
                                                  matchExpressions?:
                                                    | {
                                                        key?: string | undefined
                                                        operator?:
                                                          | string
                                                          | undefined
                                                        values?:
                                                          | string[]
                                                          | undefined
                                                      }[]
                                                    | undefined
                                                  matchFields?:
                                                    | {
                                                        key?: string | undefined
                                                        operator?:
                                                          | string
                                                          | undefined
                                                        values?:
                                                          | string[]
                                                          | undefined
                                                      }[]
                                                    | undefined
                                                }
                                              | undefined
                                            weight?: number | undefined
                                          }[]
                                        | undefined
                                      requiredDuringSchedulingIgnoredDuringExecution?:
                                        | {
                                            nodeSelectorTerms?:
                                              | {
                                                  matchExpressions?:
                                                    | {
                                                        key?: string | undefined
                                                        operator?:
                                                          | string
                                                          | undefined
                                                        values?:
                                                          | string[]
                                                          | undefined
                                                      }[]
                                                    | undefined
                                                  matchFields?:
                                                    | {
                                                        key?: string | undefined
                                                        operator?:
                                                          | string
                                                          | undefined
                                                        values?:
                                                          | string[]
                                                          | undefined
                                                      }[]
                                                    | undefined
                                                }[]
                                              | undefined
                                          }
                                        | undefined
                                    }
                                  | undefined
                                podAffinity?:
                                  | {
                                      preferredDuringSchedulingIgnoredDuringExecution?:
                                        | {
                                            podAffinityTerm?:
                                              | {
                                                  labelSelector?:
                                                    | {
                                                        matchExpressions?:
                                                          | {
                                                              key?:
                                                                | string
                                                                | undefined
                                                              operator?:
                                                                | string
                                                                | undefined
                                                              values?:
                                                                | string[]
                                                                | undefined
                                                            }[]
                                                          | undefined
                                                        matchLabels?:
                                                          | object
                                                          | undefined
                                                      }
                                                    | undefined
                                                  namespaceSelector?:
                                                    | {
                                                        matchExpressions?:
                                                          | {
                                                              key?:
                                                                | string
                                                                | undefined
                                                              operator?:
                                                                | string
                                                                | undefined
                                                              values?:
                                                                | string[]
                                                                | undefined
                                                            }[]
                                                          | undefined
                                                        matchLabels?:
                                                          | object
                                                          | undefined
                                                      }
                                                    | undefined
                                                  namespaces?:
                                                    | string[]
                                                    | undefined
                                                  topologyKey?:
                                                    | string
                                                    | undefined
                                                }
                                              | undefined
                                            weight?: number | undefined
                                          }[]
                                        | undefined
                                      requiredDuringSchedulingIgnoredDuringExecution?:
                                        | {
                                            labelSelector?:
                                              | {
                                                  matchExpressions?:
                                                    | {
                                                        key?: string | undefined
                                                        operator?:
                                                          | string
                                                          | undefined
                                                        values?:
                                                          | string[]
                                                          | undefined
                                                      }[]
                                                    | undefined
                                                  matchLabels?:
                                                    | object
                                                    | undefined
                                                }
                                              | undefined
                                            namespaceSelector?:
                                              | {
                                                  matchExpressions?:
                                                    | {
                                                        key?: string | undefined
                                                        operator?:
                                                          | string
                                                          | undefined
                                                        values?:
                                                          | string[]
                                                          | undefined
                                                      }[]
                                                    | undefined
                                                  matchLabels?:
                                                    | object
                                                    | undefined
                                                }
                                              | undefined
                                            namespaces?: string[] | undefined
                                            topologyKey?: string | undefined
                                          }[]
                                        | undefined
                                    }
                                  | undefined
                                podAntiAffinity?:
                                  | {
                                      preferredDuringSchedulingIgnoredDuringExecution?:
                                        | {
                                            podAffinityTerm?:
                                              | {
                                                  labelSelector?:
                                                    | {
                                                        matchExpressions?:
                                                          | {
                                                              key?:
                                                                | string
                                                                | undefined
                                                              operator?:
                                                                | string
                                                                | undefined
                                                              values?:
                                                                | string[]
                                                                | undefined
                                                            }[]
                                                          | undefined
                                                        matchLabels?:
                                                          | object
                                                          | undefined
                                                      }
                                                    | undefined
                                                  namespaceSelector?:
                                                    | {
                                                        matchExpressions?:
                                                          | {
                                                              key?:
                                                                | string
                                                                | undefined
                                                              operator?:
                                                                | string
                                                                | undefined
                                                              values?:
                                                                | string[]
                                                                | undefined
                                                            }[]
                                                          | undefined
                                                        matchLabels?:
                                                          | object
                                                          | undefined
                                                      }
                                                    | undefined
                                                  namespaces?:
                                                    | string[]
                                                    | undefined
                                                  topologyKey?:
                                                    | string
                                                    | undefined
                                                }
                                              | undefined
                                            weight?: number | undefined
                                          }[]
                                        | undefined
                                      requiredDuringSchedulingIgnoredDuringExecution?:
                                        | {
                                            labelSelector?:
                                              | {
                                                  matchExpressions?:
                                                    | {
                                                        key?: string | undefined
                                                        operator?:
                                                          | string
                                                          | undefined
                                                        values?:
                                                          | string[]
                                                          | undefined
                                                      }[]
                                                    | undefined
                                                  matchLabels?:
                                                    | object
                                                    | undefined
                                                }
                                              | undefined
                                            namespaceSelector?:
                                              | {
                                                  matchExpressions?:
                                                    | {
                                                        key?: string | undefined
                                                        operator?:
                                                          | string
                                                          | undefined
                                                        values?:
                                                          | string[]
                                                          | undefined
                                                      }[]
                                                    | undefined
                                                  matchLabels?:
                                                    | object
                                                    | undefined
                                                }
                                              | undefined
                                            namespaces?: string[] | undefined
                                            topologyKey?: string | undefined
                                          }[]
                                        | undefined
                                    }
                                  | undefined
                              }
                            | undefined
                          enableServiceLinks?: boolean | undefined
                          hostAliases?:
                            | {
                                hostnames?: string[] | undefined
                                ip?: string | undefined
                              }[]
                            | undefined
                          imagePullSecrets?:
                            | {
                                name?: string | undefined
                              }[]
                            | undefined
                          metadata?:
                            | {
                                annotations?: object | undefined
                                labels?: object | undefined
                              }
                            | undefined
                          priorityClassName?: string | undefined
                          schedulerName?: string | undefined
                          securityContext?:
                            | {
                                fsGroup?: number | undefined
                                fsGroupChangePolicy?: string | undefined
                                runAsGroup?: number | undefined
                                runAsNonRoot?: boolean | undefined
                                runAsUser?: number | undefined
                                seLinuxOptions?:
                                  | {
                                      level?: string | undefined
                                      role?: string | undefined
                                      type?: string | undefined
                                      user?: string | undefined
                                    }
                                  | undefined
                                seccompProfile?:
                                  | {
                                      localhostProfile?: string | undefined
                                      type?: string | undefined
                                    }
                                  | undefined
                                supplementalGroups?: number[] | undefined
                                sysctls?:
                                  | {
                                      name?: string | undefined
                                      value?: string | undefined
                                    }[]
                                  | undefined
                                windowsOptions?:
                                  | {
                                      gmsaCredentialSpec?: string | undefined
                                      gmsaCredentialSpecName?:
                                        | string
                                        | undefined
                                      hostProcess?: boolean | undefined
                                      runAsUserName?: string | undefined
                                    }
                                  | undefined
                              }
                            | undefined
                          terminationGracePeriodSeconds?: number | undefined
                          tmpDirSizeLimit?: string | undefined
                          tolerations?:
                            | {
                                effect?: string | undefined
                                key?: string | undefined
                                operator?: string | undefined
                                tolerationSeconds?: number | undefined
                                value?: string | undefined
                              }[]
                            | undefined
                          topologySpreadConstraints?:
                            | {
                                labelSelector?:
                                  | {
                                      matchExpressions?:
                                        | {
                                            key?: string | undefined
                                            operator?: string | undefined
                                            values?: string[] | undefined
                                          }[]
                                        | undefined
                                      matchLabels?: object | undefined
                                    }
                                  | undefined
                                maxSkew?: number | undefined
                                minDomains?: number | undefined
                                topologyKey?: string | undefined
                                whenUnsatisfiable?: string | undefined
                              }[]
                            | undefined
                        }
                      | undefined
                    service?:
                      | {
                          metadata?:
                            | {
                                annotations?: object | undefined
                                labels?: object | undefined
                              }
                            | undefined
                        }
                      | undefined
                    serviceAccount?:
                      | {
                          metadata?:
                            | {
                                annotations?: object | undefined
                                labels?: object | undefined
                              }
                            | undefined
                        }
                      | undefined
                  }
                | undefined
              topicRegex?: string | undefined
            }
          | undefined
        maintenanceTimeWindows?: string[] | undefined
        zookeeper: {
          config?: object | undefined
          image?: string | undefined
          jmxOptions?:
            | {
                authentication?:
                  | {
                      type: 'password'
                    }
                  | undefined
              }
            | undefined
          jvmOptions?:
            | {
                '-XX'?: object | undefined
                '-Xms'?: string | undefined
                '-Xmx'?: string | undefined
                gcLoggingEnabled?: boolean | undefined
                javaSystemProperties?:
                  | {
                      name?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
              }
            | undefined
          livenessProbe?:
            | {
                failureThreshold?: number | undefined
                initialDelaySeconds?: number | undefined
                periodSeconds?: number | undefined
                successThreshold?: number | undefined
                timeoutSeconds?: number | undefined
              }
            | undefined
          logging?:
            | {
                loggers?: object | undefined
                type: 'inline' | 'external'
                valueFrom?:
                  | {
                      configMapKeyRef?:
                        | {
                            key?: string | undefined
                            name?: string | undefined
                            optional?: boolean | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
            | undefined
          metricsConfig?:
            | {
                type: 'jmxPrometheusExporter'
                valueFrom: {
                  configMapKeyRef?:
                    | {
                        key?: string | undefined
                        name?: string | undefined
                        optional?: boolean | undefined
                      }
                    | undefined
                }
              }
            | undefined
          readinessProbe?:
            | {
                failureThreshold?: number | undefined
                initialDelaySeconds?: number | undefined
                periodSeconds?: number | undefined
                successThreshold?: number | undefined
                timeoutSeconds?: number | undefined
              }
            | undefined
          replicas: number
          resources?:
            | {
                limits?: object | undefined
                requests?: object | undefined
              }
            | undefined
          storage: {
            class?: string | undefined
            deleteClaim?: boolean | undefined
            id?: number | undefined
            overrides?:
              | {
                  broker?: number | undefined
                  class?: string | undefined
                }[]
              | undefined
            selector?: object | undefined
            size?: string | undefined
            sizeLimit?: string | undefined
            type: 'ephemeral' | 'persistent-claim'
          }
          template?:
            | {
                clientService?:
                  | {
                      ipFamilies?: ('IPv4' | 'IPv6')[] | undefined
                      ipFamilyPolicy?:
                        | (
                            | 'SingleStack'
                            | 'PreferDualStack'
                            | 'RequireDualStack'
                          )
                        | undefined
                      metadata?:
                        | {
                            annotations?: object | undefined
                            labels?: object | undefined
                          }
                        | undefined
                    }
                  | undefined
                jmxSecret?:
                  | {
                      metadata?:
                        | {
                            annotations?: object | undefined
                            labels?: object | undefined
                          }
                        | undefined
                    }
                  | undefined
                nodesService?:
                  | {
                      ipFamilies?: ('IPv4' | 'IPv6')[] | undefined
                      ipFamilyPolicy?:
                        | (
                            | 'SingleStack'
                            | 'PreferDualStack'
                            | 'RequireDualStack'
                          )
                        | undefined
                      metadata?:
                        | {
                            annotations?: object | undefined
                            labels?: object | undefined
                          }
                        | undefined
                    }
                  | undefined
                persistentVolumeClaim?:
                  | {
                      metadata?:
                        | {
                            annotations?: object | undefined
                            labels?: object | undefined
                          }
                        | undefined
                    }
                  | undefined
                pod?:
                  | {
                      affinity?:
                        | {
                            nodeAffinity?:
                              | {
                                  preferredDuringSchedulingIgnoredDuringExecution?:
                                    | {
                                        preference?:
                                          | {
                                              matchExpressions?:
                                                | {
                                                    key?: string | undefined
                                                    operator?:
                                                      | string
                                                      | undefined
                                                    values?:
                                                      | string[]
                                                      | undefined
                                                  }[]
                                                | undefined
                                              matchFields?:
                                                | {
                                                    key?: string | undefined
                                                    operator?:
                                                      | string
                                                      | undefined
                                                    values?:
                                                      | string[]
                                                      | undefined
                                                  }[]
                                                | undefined
                                            }
                                          | undefined
                                        weight?: number | undefined
                                      }[]
                                    | undefined
                                  requiredDuringSchedulingIgnoredDuringExecution?:
                                    | {
                                        nodeSelectorTerms?:
                                          | {
                                              matchExpressions?:
                                                | {
                                                    key?: string | undefined
                                                    operator?:
                                                      | string
                                                      | undefined
                                                    values?:
                                                      | string[]
                                                      | undefined
                                                  }[]
                                                | undefined
                                              matchFields?:
                                                | {
                                                    key?: string | undefined
                                                    operator?:
                                                      | string
                                                      | undefined
                                                    values?:
                                                      | string[]
                                                      | undefined
                                                  }[]
                                                | undefined
                                            }[]
                                          | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                            podAffinity?:
                              | {
                                  preferredDuringSchedulingIgnoredDuringExecution?:
                                    | {
                                        podAffinityTerm?:
                                          | {
                                              labelSelector?:
                                                | {
                                                    matchExpressions?:
                                                      | {
                                                          key?:
                                                            | string
                                                            | undefined
                                                          operator?:
                                                            | string
                                                            | undefined
                                                          values?:
                                                            | string[]
                                                            | undefined
                                                        }[]
                                                      | undefined
                                                    matchLabels?:
                                                      | object
                                                      | undefined
                                                  }
                                                | undefined
                                              namespaceSelector?:
                                                | {
                                                    matchExpressions?:
                                                      | {
                                                          key?:
                                                            | string
                                                            | undefined
                                                          operator?:
                                                            | string
                                                            | undefined
                                                          values?:
                                                            | string[]
                                                            | undefined
                                                        }[]
                                                      | undefined
                                                    matchLabels?:
                                                      | object
                                                      | undefined
                                                  }
                                                | undefined
                                              namespaces?: string[] | undefined
                                              topologyKey?: string | undefined
                                            }
                                          | undefined
                                        weight?: number | undefined
                                      }[]
                                    | undefined
                                  requiredDuringSchedulingIgnoredDuringExecution?:
                                    | {
                                        labelSelector?:
                                          | {
                                              matchExpressions?:
                                                | {
                                                    key?: string | undefined
                                                    operator?:
                                                      | string
                                                      | undefined
                                                    values?:
                                                      | string[]
                                                      | undefined
                                                  }[]
                                                | undefined
                                              matchLabels?: object | undefined
                                            }
                                          | undefined
                                        namespaceSelector?:
                                          | {
                                              matchExpressions?:
                                                | {
                                                    key?: string | undefined
                                                    operator?:
                                                      | string
                                                      | undefined
                                                    values?:
                                                      | string[]
                                                      | undefined
                                                  }[]
                                                | undefined
                                              matchLabels?: object | undefined
                                            }
                                          | undefined
                                        namespaces?: string[] | undefined
                                        topologyKey?: string | undefined
                                      }[]
                                    | undefined
                                }
                              | undefined
                            podAntiAffinity?:
                              | {
                                  preferredDuringSchedulingIgnoredDuringExecution?:
                                    | {
                                        podAffinityTerm?:
                                          | {
                                              labelSelector?:
                                                | {
                                                    matchExpressions?:
                                                      | {
                                                          key?:
                                                            | string
                                                            | undefined
                                                          operator?:
                                                            | string
                                                            | undefined
                                                          values?:
                                                            | string[]
                                                            | undefined
                                                        }[]
                                                      | undefined
                                                    matchLabels?:
                                                      | object
                                                      | undefined
                                                  }
                                                | undefined
                                              namespaceSelector?:
                                                | {
                                                    matchExpressions?:
                                                      | {
                                                          key?:
                                                            | string
                                                            | undefined
                                                          operator?:
                                                            | string
                                                            | undefined
                                                          values?:
                                                            | string[]
                                                            | undefined
                                                        }[]
                                                      | undefined
                                                    matchLabels?:
                                                      | object
                                                      | undefined
                                                  }
                                                | undefined
                                              namespaces?: string[] | undefined
                                              topologyKey?: string | undefined
                                            }
                                          | undefined
                                        weight?: number | undefined
                                      }[]
                                    | undefined
                                  requiredDuringSchedulingIgnoredDuringExecution?:
                                    | {
                                        labelSelector?:
                                          | {
                                              matchExpressions?:
                                                | {
                                                    key?: string | undefined
                                                    operator?:
                                                      | string
                                                      | undefined
                                                    values?:
                                                      | string[]
                                                      | undefined
                                                  }[]
                                                | undefined
                                              matchLabels?: object | undefined
                                            }
                                          | undefined
                                        namespaceSelector?:
                                          | {
                                              matchExpressions?:
                                                | {
                                                    key?: string | undefined
                                                    operator?:
                                                      | string
                                                      | undefined
                                                    values?:
                                                      | string[]
                                                      | undefined
                                                  }[]
                                                | undefined
                                              matchLabels?: object | undefined
                                            }
                                          | undefined
                                        namespaces?: string[] | undefined
                                        topologyKey?: string | undefined
                                      }[]
                                    | undefined
                                }
                              | undefined
                          }
                        | undefined
                      enableServiceLinks?: boolean | undefined
                      hostAliases?:
                        | {
                            hostnames?: string[] | undefined
                            ip?: string | undefined
                          }[]
                        | undefined
                      imagePullSecrets?:
                        | {
                            name?: string | undefined
                          }[]
                        | undefined
                      metadata?:
                        | {
                            annotations?: object | undefined
                            labels?: object | undefined
                          }
                        | undefined
                      priorityClassName?: string | undefined
                      schedulerName?: string | undefined
                      securityContext?:
                        | {
                            fsGroup?: number | undefined
                            fsGroupChangePolicy?: string | undefined
                            runAsGroup?: number | undefined
                            runAsNonRoot?: boolean | undefined
                            runAsUser?: number | undefined
                            seLinuxOptions?:
                              | {
                                  level?: string | undefined
                                  role?: string | undefined
                                  type?: string | undefined
                                  user?: string | undefined
                                }
                              | undefined
                            seccompProfile?:
                              | {
                                  localhostProfile?: string | undefined
                                  type?: string | undefined
                                }
                              | undefined
                            supplementalGroups?: number[] | undefined
                            sysctls?:
                              | {
                                  name?: string | undefined
                                  value?: string | undefined
                                }[]
                              | undefined
                            windowsOptions?:
                              | {
                                  gmsaCredentialSpec?: string | undefined
                                  gmsaCredentialSpecName?: string | undefined
                                  hostProcess?: boolean | undefined
                                  runAsUserName?: string | undefined
                                }
                              | undefined
                          }
                        | undefined
                      terminationGracePeriodSeconds?: number | undefined
                      tmpDirSizeLimit?: string | undefined
                      tolerations?:
                        | {
                            effect?: string | undefined
                            key?: string | undefined
                            operator?: string | undefined
                            tolerationSeconds?: number | undefined
                            value?: string | undefined
                          }[]
                        | undefined
                      topologySpreadConstraints?:
                        | {
                            labelSelector?:
                              | {
                                  matchExpressions?:
                                    | {
                                        key?: string | undefined
                                        operator?: string | undefined
                                        values?: string[] | undefined
                                      }[]
                                    | undefined
                                  matchLabels?: object | undefined
                                }
                              | undefined
                            maxSkew?: number | undefined
                            minDomains?: number | undefined
                            topologyKey?: string | undefined
                            whenUnsatisfiable?: string | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                podDisruptionBudget?:
                  | {
                      maxUnavailable?: number | undefined
                      metadata?:
                        | {
                            annotations?: object | undefined
                            labels?: object | undefined
                          }
                        | undefined
                    }
                  | undefined
                podSet?:
                  | {
                      metadata?:
                        | {
                            annotations?: object | undefined
                            labels?: object | undefined
                          }
                        | undefined
                    }
                  | undefined
                serviceAccount?:
                  | {
                      metadata?:
                        | {
                            annotations?: object | undefined
                            labels?: object | undefined
                          }
                        | undefined
                    }
                  | undefined
                statefulset?:
                  | {
                      metadata?:
                        | {
                            annotations?: object | undefined
                            labels?: object | undefined
                          }
                        | undefined
                      podManagementPolicy?:
                        | ('OrderedReady' | 'Parallel')
                        | undefined
                    }
                  | undefined
                zookeeperContainer?:
                  | {
                      env?:
                        | {
                            name?: string | undefined
                            value?: string | undefined
                          }[]
                        | undefined
                      securityContext?:
                        | {
                            allowPrivilegeEscalation?: boolean | undefined
                            capabilities?:
                              | {
                                  add?: string[] | undefined
                                  drop?: string[] | undefined
                                }
                              | undefined
                            privileged?: boolean | undefined
                            procMount?: string | undefined
                            readOnlyRootFilesystem?: boolean | undefined
                            runAsGroup?: number | undefined
                            runAsNonRoot?: boolean | undefined
                            runAsUser?: number | undefined
                            seLinuxOptions?:
                              | {
                                  level?: string | undefined
                                  role?: string | undefined
                                  type?: string | undefined
                                  user?: string | undefined
                                }
                              | undefined
                            seccompProfile?:
                              | {
                                  localhostProfile?: string | undefined
                                  type?: string | undefined
                                }
                              | undefined
                            windowsOptions?:
                              | {
                                  gmsaCredentialSpec?: string | undefined
                                  gmsaCredentialSpecName?: string | undefined
                                  hostProcess?: boolean | undefined
                                  runAsUserName?: string | undefined
                                }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
            | undefined
        }
      }
    | undefined
  status?:
    | {
        clusterId?: string | undefined
        conditions?:
          | {
              lastTransitionTime?: string | undefined
              message?: string | undefined
              reason?: string | undefined
              status?: string | undefined
              type?: string | undefined
            }[]
          | undefined
        listeners?:
          | {
              addresses?:
                | {
                    host?: string | undefined
                    port?: number | undefined
                  }[]
                | undefined
              bootstrapServers?: string | undefined
              certificates?: string[] | undefined
              name?: string | undefined
              type?: string | undefined
            }[]
          | undefined
        observedGeneration?: number | undefined
      }
    | undefined
}
export type IoStrimziKafkaV1Beta2KafkaList = {
  apiVersion?: string | undefined
  items: IoStrimziKafkaV1Beta2Kafka[]
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ListMeta | undefined
}
export type IoStrimziKafkaV1Beta2KafkaTopic = {
  apiVersion?: string | undefined
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ObjectMeta | undefined
  spec?:
    | {
        config?: object | undefined
        partitions?: number | undefined
        replicas?: number | undefined
        topicName?: string | undefined
      }
    | undefined
  status?:
    | {
        conditions?:
          | {
              lastTransitionTime?: string | undefined
              message?: string | undefined
              reason?: string | undefined
              status?: string | undefined
              type?: string | undefined
            }[]
          | undefined
        observedGeneration?: number | undefined
        topicName?: string | undefined
      }
    | undefined
}
export type IoStrimziKafkaV1Beta2KafkaTopicList = {
  apiVersion?: string | undefined
  items: IoStrimziKafkaV1Beta2KafkaTopic[]
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ListMeta | undefined
}
export type IoStrimziKafkaV1Beta2KafkaUser = {
  apiVersion?: string | undefined
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ObjectMeta | undefined
  spec?:
    | {
        authentication?:
          | {
              password?:
                | {
                    valueFrom: {
                      secretKeyRef?:
                        | {
                            key?: string | undefined
                            name?: string | undefined
                            optional?: boolean | undefined
                          }
                        | undefined
                    }
                  }
                | undefined
              type: 'tls' | 'tls-external' | 'scram-sha-512'
            }
          | undefined
        authorization?:
          | {
              acls: {
                host?: string | undefined
                operation:
                  | 'Read'
                  | 'Write'
                  | 'Create'
                  | 'Delete'
                  | 'Alter'
                  | 'Describe'
                  | 'ClusterAction'
                  | 'AlterConfigs'
                  | 'DescribeConfigs'
                  | 'IdempotentWrite'
                  | 'All'
                resource: {
                  name?: string | undefined
                  patternType?: ('literal' | 'prefix') | undefined
                  type: 'topic' | 'group' | 'cluster' | 'transactionalId'
                }
                type?: ('allow' | 'deny') | undefined
              }[]
              type: 'simple'
            }
          | undefined
        quotas?:
          | {
              consumerByteRate?: number | undefined
              controllerMutationRate?: number | undefined
              producerByteRate?: number | undefined
              requestPercentage?: number | undefined
            }
          | undefined
        template?:
          | {
              secret?:
                | {
                    metadata?:
                      | {
                          annotations?: object | undefined
                          labels?: object | undefined
                        }
                      | undefined
                  }
                | undefined
            }
          | undefined
      }
    | undefined
  status?:
    | {
        conditions?:
          | {
              lastTransitionTime?: string | undefined
              message?: string | undefined
              reason?: string | undefined
              status?: string | undefined
              type?: string | undefined
            }[]
          | undefined
        observedGeneration?: number | undefined
        secret?: string | undefined
        username?: string | undefined
      }
    | undefined
}
export type IoStrimziKafkaV1Beta2KafkaUserList = {
  apiVersion?: string | undefined
  items: IoStrimziKafkaV1Beta2KafkaUser[]
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ListMeta | undefined
}
export type IoK8SApimachineryPkgApisMetaV1StatusCause = {
  field?: string | undefined
  message?: string | undefined
  reason?: string | undefined
}
export type IoK8SApimachineryPkgApisMetaV1StatusDetails = {
  causes?: IoK8SApimachineryPkgApisMetaV1StatusCause[] | undefined
  group?: string | undefined
  kind?: string | undefined
  name?: string | undefined
  retryAfterSeconds?: number | undefined
  uid?: string | undefined
}
export type IoK8SApimachineryPkgApisMetaV1Status = {
  apiVersion?: string | undefined
  code?: number | undefined
  details?: IoK8SApimachineryPkgApisMetaV1StatusDetails | undefined
  kind?: string | undefined
  message?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ListMeta | undefined
  reason?: string | undefined
  status?: string | undefined
}
export type IoK8SApimachineryPkgApisMetaV1Preconditions = {
  resourceVersion?: string | undefined
  uid?: string | undefined
}
export type IoK8SApimachineryPkgApisMetaV1DeleteOptions = {
  apiVersion?: string | undefined
  dryRun?: string[] | undefined
  gracePeriodSeconds?: number | undefined
  kind?: string | undefined
  orphanDependents?: boolean | undefined
  preconditions?: IoK8SApimachineryPkgApisMetaV1Preconditions | undefined
  propagationPolicy?: string | undefined
}
export type IoK8SApimachineryPkgApisMetaV1Patch = object
export type IoK8SApiAutoscalingV1ScaleSpec = {
  replicas?: number | undefined
}
export type IoK8SApiAutoscalingV1ScaleStatus = {
  replicas: number
  selector?: string | undefined
}
export type IoK8SApiAutoscalingV1Scale = {
  apiVersion?: string | undefined
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ObjectMeta | undefined
  spec?: IoK8SApiAutoscalingV1ScaleSpec | undefined
  status?: IoK8SApiAutoscalingV1ScaleStatus | undefined
}
