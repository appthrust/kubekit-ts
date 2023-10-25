import { apiClient, type Options } from '../../client'
export const listNetworkingIstioIoV1Alpha3DestinationRuleForAllNamespaces = (
  args: ListNetworkingIstioIoV1Alpha3DestinationRuleForAllNamespacesApiArg,
  options?: Options
) => {
  return apiClient<ListNetworkingIstioIoV1Alpha3DestinationRuleForAllNamespacesApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/destinationrules`,
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
export const listNetworkingIstioIoV1Alpha3EnvoyFilterForAllNamespaces = (
  args: ListNetworkingIstioIoV1Alpha3EnvoyFilterForAllNamespacesApiArg,
  options?: Options
) => {
  return apiClient<ListNetworkingIstioIoV1Alpha3EnvoyFilterForAllNamespacesApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/envoyfilters`,
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
export const listNetworkingIstioIoV1Alpha3GatewayForAllNamespaces = (
  args: ListNetworkingIstioIoV1Alpha3GatewayForAllNamespacesApiArg,
  options?: Options
) => {
  return apiClient<ListNetworkingIstioIoV1Alpha3GatewayForAllNamespacesApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/gateways`,
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
export const listNetworkingIstioIoV1Alpha3NamespacedDestinationRule = (
  args: ListNetworkingIstioIoV1Alpha3NamespacedDestinationRuleApiArg,
  options?: Options
) => {
  return apiClient<ListNetworkingIstioIoV1Alpha3NamespacedDestinationRuleApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/destinationrules`,
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
export const createNetworkingIstioIoV1Alpha3NamespacedDestinationRule = (
  args: CreateNetworkingIstioIoV1Alpha3NamespacedDestinationRuleApiArg,
  options?: Options
) => {
  return apiClient<CreateNetworkingIstioIoV1Alpha3NamespacedDestinationRuleApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/destinationrules`,
      method: 'POST',
      body: args.ioIstioNetworkingV1Alpha3DestinationRule,
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
export const deleteNetworkingIstioIoV1Alpha3CollectionNamespacedDestinationRule =
  (
    args: DeleteNetworkingIstioIoV1Alpha3CollectionNamespacedDestinationRuleApiArg,
    options?: Options
  ) => {
    return apiClient<DeleteNetworkingIstioIoV1Alpha3CollectionNamespacedDestinationRuleApiResponse>(
      {
        path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/destinationrules`,
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
export const readNetworkingIstioIoV1Alpha3NamespacedDestinationRule = (
  args: ReadNetworkingIstioIoV1Alpha3NamespacedDestinationRuleApiArg,
  options?: Options
) => {
  return apiClient<ReadNetworkingIstioIoV1Alpha3NamespacedDestinationRuleApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/destinationrules/${args.name}`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceNetworkingIstioIoV1Alpha3NamespacedDestinationRule = (
  args: ReplaceNetworkingIstioIoV1Alpha3NamespacedDestinationRuleApiArg,
  options?: Options
) => {
  return apiClient<ReplaceNetworkingIstioIoV1Alpha3NamespacedDestinationRuleApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/destinationrules/${args.name}`,
      method: 'PUT',
      body: args.ioIstioNetworkingV1Alpha3DestinationRule,
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
export const deleteNetworkingIstioIoV1Alpha3NamespacedDestinationRule = (
  args: DeleteNetworkingIstioIoV1Alpha3NamespacedDestinationRuleApiArg,
  options?: Options
) => {
  return apiClient<DeleteNetworkingIstioIoV1Alpha3NamespacedDestinationRuleApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/destinationrules/${args.name}`,
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
export const patchNetworkingIstioIoV1Alpha3NamespacedDestinationRule = (
  args: PatchNetworkingIstioIoV1Alpha3NamespacedDestinationRuleApiArg,
  options?: Options
) => {
  return apiClient<PatchNetworkingIstioIoV1Alpha3NamespacedDestinationRuleApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/destinationrules/${args.name}`,
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
export const readNetworkingIstioIoV1Alpha3NamespacedDestinationRuleStatus = (
  args: ReadNetworkingIstioIoV1Alpha3NamespacedDestinationRuleStatusApiArg,
  options?: Options
) => {
  return apiClient<ReadNetworkingIstioIoV1Alpha3NamespacedDestinationRuleStatusApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/destinationrules/${args.name}/status`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceNetworkingIstioIoV1Alpha3NamespacedDestinationRuleStatus = (
  args: ReplaceNetworkingIstioIoV1Alpha3NamespacedDestinationRuleStatusApiArg,
  options?: Options
) => {
  return apiClient<ReplaceNetworkingIstioIoV1Alpha3NamespacedDestinationRuleStatusApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/destinationrules/${args.name}/status`,
      method: 'PUT',
      body: args.ioIstioNetworkingV1Alpha3DestinationRule,
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
export const patchNetworkingIstioIoV1Alpha3NamespacedDestinationRuleStatus = (
  args: PatchNetworkingIstioIoV1Alpha3NamespacedDestinationRuleStatusApiArg,
  options?: Options
) => {
  return apiClient<PatchNetworkingIstioIoV1Alpha3NamespacedDestinationRuleStatusApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/destinationrules/${args.name}/status`,
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
export const listNetworkingIstioIoV1Alpha3NamespacedEnvoyFilter = (
  args: ListNetworkingIstioIoV1Alpha3NamespacedEnvoyFilterApiArg,
  options?: Options
) => {
  return apiClient<ListNetworkingIstioIoV1Alpha3NamespacedEnvoyFilterApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/envoyfilters`,
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
export const createNetworkingIstioIoV1Alpha3NamespacedEnvoyFilter = (
  args: CreateNetworkingIstioIoV1Alpha3NamespacedEnvoyFilterApiArg,
  options?: Options
) => {
  return apiClient<CreateNetworkingIstioIoV1Alpha3NamespacedEnvoyFilterApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/envoyfilters`,
      method: 'POST',
      body: args.ioIstioNetworkingV1Alpha3EnvoyFilter,
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
export const deleteNetworkingIstioIoV1Alpha3CollectionNamespacedEnvoyFilter = (
  args: DeleteNetworkingIstioIoV1Alpha3CollectionNamespacedEnvoyFilterApiArg,
  options?: Options
) => {
  return apiClient<DeleteNetworkingIstioIoV1Alpha3CollectionNamespacedEnvoyFilterApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/envoyfilters`,
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
export const readNetworkingIstioIoV1Alpha3NamespacedEnvoyFilter = (
  args: ReadNetworkingIstioIoV1Alpha3NamespacedEnvoyFilterApiArg,
  options?: Options
) => {
  return apiClient<ReadNetworkingIstioIoV1Alpha3NamespacedEnvoyFilterApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/envoyfilters/${args.name}`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceNetworkingIstioIoV1Alpha3NamespacedEnvoyFilter = (
  args: ReplaceNetworkingIstioIoV1Alpha3NamespacedEnvoyFilterApiArg,
  options?: Options
) => {
  return apiClient<ReplaceNetworkingIstioIoV1Alpha3NamespacedEnvoyFilterApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/envoyfilters/${args.name}`,
      method: 'PUT',
      body: args.ioIstioNetworkingV1Alpha3EnvoyFilter,
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
export const deleteNetworkingIstioIoV1Alpha3NamespacedEnvoyFilter = (
  args: DeleteNetworkingIstioIoV1Alpha3NamespacedEnvoyFilterApiArg,
  options?: Options
) => {
  return apiClient<DeleteNetworkingIstioIoV1Alpha3NamespacedEnvoyFilterApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/envoyfilters/${args.name}`,
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
export const patchNetworkingIstioIoV1Alpha3NamespacedEnvoyFilter = (
  args: PatchNetworkingIstioIoV1Alpha3NamespacedEnvoyFilterApiArg,
  options?: Options
) => {
  return apiClient<PatchNetworkingIstioIoV1Alpha3NamespacedEnvoyFilterApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/envoyfilters/${args.name}`,
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
export const readNetworkingIstioIoV1Alpha3NamespacedEnvoyFilterStatus = (
  args: ReadNetworkingIstioIoV1Alpha3NamespacedEnvoyFilterStatusApiArg,
  options?: Options
) => {
  return apiClient<ReadNetworkingIstioIoV1Alpha3NamespacedEnvoyFilterStatusApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/envoyfilters/${args.name}/status`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceNetworkingIstioIoV1Alpha3NamespacedEnvoyFilterStatus = (
  args: ReplaceNetworkingIstioIoV1Alpha3NamespacedEnvoyFilterStatusApiArg,
  options?: Options
) => {
  return apiClient<ReplaceNetworkingIstioIoV1Alpha3NamespacedEnvoyFilterStatusApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/envoyfilters/${args.name}/status`,
      method: 'PUT',
      body: args.ioIstioNetworkingV1Alpha3EnvoyFilter,
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
export const patchNetworkingIstioIoV1Alpha3NamespacedEnvoyFilterStatus = (
  args: PatchNetworkingIstioIoV1Alpha3NamespacedEnvoyFilterStatusApiArg,
  options?: Options
) => {
  return apiClient<PatchNetworkingIstioIoV1Alpha3NamespacedEnvoyFilterStatusApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/envoyfilters/${args.name}/status`,
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
export const listNetworkingIstioIoV1Alpha3NamespacedGateway = (
  args: ListNetworkingIstioIoV1Alpha3NamespacedGatewayApiArg,
  options?: Options
) => {
  return apiClient<ListNetworkingIstioIoV1Alpha3NamespacedGatewayApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/gateways`,
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
export const createNetworkingIstioIoV1Alpha3NamespacedGateway = (
  args: CreateNetworkingIstioIoV1Alpha3NamespacedGatewayApiArg,
  options?: Options
) => {
  return apiClient<CreateNetworkingIstioIoV1Alpha3NamespacedGatewayApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/gateways`,
      method: 'POST',
      body: args.ioIstioNetworkingV1Alpha3Gateway,
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
export const deleteNetworkingIstioIoV1Alpha3CollectionNamespacedGateway = (
  args: DeleteNetworkingIstioIoV1Alpha3CollectionNamespacedGatewayApiArg,
  options?: Options
) => {
  return apiClient<DeleteNetworkingIstioIoV1Alpha3CollectionNamespacedGatewayApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/gateways`,
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
export const readNetworkingIstioIoV1Alpha3NamespacedGateway = (
  args: ReadNetworkingIstioIoV1Alpha3NamespacedGatewayApiArg,
  options?: Options
) => {
  return apiClient<ReadNetworkingIstioIoV1Alpha3NamespacedGatewayApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/gateways/${args.name}`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceNetworkingIstioIoV1Alpha3NamespacedGateway = (
  args: ReplaceNetworkingIstioIoV1Alpha3NamespacedGatewayApiArg,
  options?: Options
) => {
  return apiClient<ReplaceNetworkingIstioIoV1Alpha3NamespacedGatewayApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/gateways/${args.name}`,
      method: 'PUT',
      body: args.ioIstioNetworkingV1Alpha3Gateway,
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
export const deleteNetworkingIstioIoV1Alpha3NamespacedGateway = (
  args: DeleteNetworkingIstioIoV1Alpha3NamespacedGatewayApiArg,
  options?: Options
) => {
  return apiClient<DeleteNetworkingIstioIoV1Alpha3NamespacedGatewayApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/gateways/${args.name}`,
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
export const patchNetworkingIstioIoV1Alpha3NamespacedGateway = (
  args: PatchNetworkingIstioIoV1Alpha3NamespacedGatewayApiArg,
  options?: Options
) => {
  return apiClient<PatchNetworkingIstioIoV1Alpha3NamespacedGatewayApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/gateways/${args.name}`,
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
export const readNetworkingIstioIoV1Alpha3NamespacedGatewayStatus = (
  args: ReadNetworkingIstioIoV1Alpha3NamespacedGatewayStatusApiArg,
  options?: Options
) => {
  return apiClient<ReadNetworkingIstioIoV1Alpha3NamespacedGatewayStatusApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/gateways/${args.name}/status`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceNetworkingIstioIoV1Alpha3NamespacedGatewayStatus = (
  args: ReplaceNetworkingIstioIoV1Alpha3NamespacedGatewayStatusApiArg,
  options?: Options
) => {
  return apiClient<ReplaceNetworkingIstioIoV1Alpha3NamespacedGatewayStatusApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/gateways/${args.name}/status`,
      method: 'PUT',
      body: args.ioIstioNetworkingV1Alpha3Gateway,
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
export const patchNetworkingIstioIoV1Alpha3NamespacedGatewayStatus = (
  args: PatchNetworkingIstioIoV1Alpha3NamespacedGatewayStatusApiArg,
  options?: Options
) => {
  return apiClient<PatchNetworkingIstioIoV1Alpha3NamespacedGatewayStatusApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/gateways/${args.name}/status`,
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
export const listNetworkingIstioIoV1Alpha3NamespacedServiceEntry = (
  args: ListNetworkingIstioIoV1Alpha3NamespacedServiceEntryApiArg,
  options?: Options
) => {
  return apiClient<ListNetworkingIstioIoV1Alpha3NamespacedServiceEntryApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/serviceentries`,
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
export const createNetworkingIstioIoV1Alpha3NamespacedServiceEntry = (
  args: CreateNetworkingIstioIoV1Alpha3NamespacedServiceEntryApiArg,
  options?: Options
) => {
  return apiClient<CreateNetworkingIstioIoV1Alpha3NamespacedServiceEntryApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/serviceentries`,
      method: 'POST',
      body: args.ioIstioNetworkingV1Alpha3ServiceEntry,
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
export const deleteNetworkingIstioIoV1Alpha3CollectionNamespacedServiceEntry = (
  args: DeleteNetworkingIstioIoV1Alpha3CollectionNamespacedServiceEntryApiArg,
  options?: Options
) => {
  return apiClient<DeleteNetworkingIstioIoV1Alpha3CollectionNamespacedServiceEntryApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/serviceentries`,
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
export const readNetworkingIstioIoV1Alpha3NamespacedServiceEntry = (
  args: ReadNetworkingIstioIoV1Alpha3NamespacedServiceEntryApiArg,
  options?: Options
) => {
  return apiClient<ReadNetworkingIstioIoV1Alpha3NamespacedServiceEntryApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/serviceentries/${args.name}`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceNetworkingIstioIoV1Alpha3NamespacedServiceEntry = (
  args: ReplaceNetworkingIstioIoV1Alpha3NamespacedServiceEntryApiArg,
  options?: Options
) => {
  return apiClient<ReplaceNetworkingIstioIoV1Alpha3NamespacedServiceEntryApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/serviceentries/${args.name}`,
      method: 'PUT',
      body: args.ioIstioNetworkingV1Alpha3ServiceEntry,
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
export const deleteNetworkingIstioIoV1Alpha3NamespacedServiceEntry = (
  args: DeleteNetworkingIstioIoV1Alpha3NamespacedServiceEntryApiArg,
  options?: Options
) => {
  return apiClient<DeleteNetworkingIstioIoV1Alpha3NamespacedServiceEntryApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/serviceentries/${args.name}`,
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
export const patchNetworkingIstioIoV1Alpha3NamespacedServiceEntry = (
  args: PatchNetworkingIstioIoV1Alpha3NamespacedServiceEntryApiArg,
  options?: Options
) => {
  return apiClient<PatchNetworkingIstioIoV1Alpha3NamespacedServiceEntryApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/serviceentries/${args.name}`,
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
export const readNetworkingIstioIoV1Alpha3NamespacedServiceEntryStatus = (
  args: ReadNetworkingIstioIoV1Alpha3NamespacedServiceEntryStatusApiArg,
  options?: Options
) => {
  return apiClient<ReadNetworkingIstioIoV1Alpha3NamespacedServiceEntryStatusApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/serviceentries/${args.name}/status`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceNetworkingIstioIoV1Alpha3NamespacedServiceEntryStatus = (
  args: ReplaceNetworkingIstioIoV1Alpha3NamespacedServiceEntryStatusApiArg,
  options?: Options
) => {
  return apiClient<ReplaceNetworkingIstioIoV1Alpha3NamespacedServiceEntryStatusApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/serviceentries/${args.name}/status`,
      method: 'PUT',
      body: args.ioIstioNetworkingV1Alpha3ServiceEntry,
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
export const patchNetworkingIstioIoV1Alpha3NamespacedServiceEntryStatus = (
  args: PatchNetworkingIstioIoV1Alpha3NamespacedServiceEntryStatusApiArg,
  options?: Options
) => {
  return apiClient<PatchNetworkingIstioIoV1Alpha3NamespacedServiceEntryStatusApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/serviceentries/${args.name}/status`,
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
export const listNetworkingIstioIoV1Alpha3NamespacedSidecar = (
  args: ListNetworkingIstioIoV1Alpha3NamespacedSidecarApiArg,
  options?: Options
) => {
  return apiClient<ListNetworkingIstioIoV1Alpha3NamespacedSidecarApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/sidecars`,
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
export const createNetworkingIstioIoV1Alpha3NamespacedSidecar = (
  args: CreateNetworkingIstioIoV1Alpha3NamespacedSidecarApiArg,
  options?: Options
) => {
  return apiClient<CreateNetworkingIstioIoV1Alpha3NamespacedSidecarApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/sidecars`,
      method: 'POST',
      body: args.ioIstioNetworkingV1Alpha3Sidecar,
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
export const deleteNetworkingIstioIoV1Alpha3CollectionNamespacedSidecar = (
  args: DeleteNetworkingIstioIoV1Alpha3CollectionNamespacedSidecarApiArg,
  options?: Options
) => {
  return apiClient<DeleteNetworkingIstioIoV1Alpha3CollectionNamespacedSidecarApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/sidecars`,
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
export const readNetworkingIstioIoV1Alpha3NamespacedSidecar = (
  args: ReadNetworkingIstioIoV1Alpha3NamespacedSidecarApiArg,
  options?: Options
) => {
  return apiClient<ReadNetworkingIstioIoV1Alpha3NamespacedSidecarApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/sidecars/${args.name}`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceNetworkingIstioIoV1Alpha3NamespacedSidecar = (
  args: ReplaceNetworkingIstioIoV1Alpha3NamespacedSidecarApiArg,
  options?: Options
) => {
  return apiClient<ReplaceNetworkingIstioIoV1Alpha3NamespacedSidecarApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/sidecars/${args.name}`,
      method: 'PUT',
      body: args.ioIstioNetworkingV1Alpha3Sidecar,
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
export const deleteNetworkingIstioIoV1Alpha3NamespacedSidecar = (
  args: DeleteNetworkingIstioIoV1Alpha3NamespacedSidecarApiArg,
  options?: Options
) => {
  return apiClient<DeleteNetworkingIstioIoV1Alpha3NamespacedSidecarApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/sidecars/${args.name}`,
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
export const patchNetworkingIstioIoV1Alpha3NamespacedSidecar = (
  args: PatchNetworkingIstioIoV1Alpha3NamespacedSidecarApiArg,
  options?: Options
) => {
  return apiClient<PatchNetworkingIstioIoV1Alpha3NamespacedSidecarApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/sidecars/${args.name}`,
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
export const readNetworkingIstioIoV1Alpha3NamespacedSidecarStatus = (
  args: ReadNetworkingIstioIoV1Alpha3NamespacedSidecarStatusApiArg,
  options?: Options
) => {
  return apiClient<ReadNetworkingIstioIoV1Alpha3NamespacedSidecarStatusApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/sidecars/${args.name}/status`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceNetworkingIstioIoV1Alpha3NamespacedSidecarStatus = (
  args: ReplaceNetworkingIstioIoV1Alpha3NamespacedSidecarStatusApiArg,
  options?: Options
) => {
  return apiClient<ReplaceNetworkingIstioIoV1Alpha3NamespacedSidecarStatusApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/sidecars/${args.name}/status`,
      method: 'PUT',
      body: args.ioIstioNetworkingV1Alpha3Sidecar,
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
export const patchNetworkingIstioIoV1Alpha3NamespacedSidecarStatus = (
  args: PatchNetworkingIstioIoV1Alpha3NamespacedSidecarStatusApiArg,
  options?: Options
) => {
  return apiClient<PatchNetworkingIstioIoV1Alpha3NamespacedSidecarStatusApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/sidecars/${args.name}/status`,
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
export const listNetworkingIstioIoV1Alpha3NamespacedVirtualService = (
  args: ListNetworkingIstioIoV1Alpha3NamespacedVirtualServiceApiArg,
  options?: Options
) => {
  return apiClient<ListNetworkingIstioIoV1Alpha3NamespacedVirtualServiceApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/virtualservices`,
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
export const createNetworkingIstioIoV1Alpha3NamespacedVirtualService = (
  args: CreateNetworkingIstioIoV1Alpha3NamespacedVirtualServiceApiArg,
  options?: Options
) => {
  return apiClient<CreateNetworkingIstioIoV1Alpha3NamespacedVirtualServiceApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/virtualservices`,
      method: 'POST',
      body: args.ioIstioNetworkingV1Alpha3VirtualService,
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
export const deleteNetworkingIstioIoV1Alpha3CollectionNamespacedVirtualService =
  (
    args: DeleteNetworkingIstioIoV1Alpha3CollectionNamespacedVirtualServiceApiArg,
    options?: Options
  ) => {
    return apiClient<DeleteNetworkingIstioIoV1Alpha3CollectionNamespacedVirtualServiceApiResponse>(
      {
        path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/virtualservices`,
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
export const readNetworkingIstioIoV1Alpha3NamespacedVirtualService = (
  args: ReadNetworkingIstioIoV1Alpha3NamespacedVirtualServiceApiArg,
  options?: Options
) => {
  return apiClient<ReadNetworkingIstioIoV1Alpha3NamespacedVirtualServiceApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/virtualservices/${args.name}`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceNetworkingIstioIoV1Alpha3NamespacedVirtualService = (
  args: ReplaceNetworkingIstioIoV1Alpha3NamespacedVirtualServiceApiArg,
  options?: Options
) => {
  return apiClient<ReplaceNetworkingIstioIoV1Alpha3NamespacedVirtualServiceApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/virtualservices/${args.name}`,
      method: 'PUT',
      body: args.ioIstioNetworkingV1Alpha3VirtualService,
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
export const deleteNetworkingIstioIoV1Alpha3NamespacedVirtualService = (
  args: DeleteNetworkingIstioIoV1Alpha3NamespacedVirtualServiceApiArg,
  options?: Options
) => {
  return apiClient<DeleteNetworkingIstioIoV1Alpha3NamespacedVirtualServiceApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/virtualservices/${args.name}`,
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
export const patchNetworkingIstioIoV1Alpha3NamespacedVirtualService = (
  args: PatchNetworkingIstioIoV1Alpha3NamespacedVirtualServiceApiArg,
  options?: Options
) => {
  return apiClient<PatchNetworkingIstioIoV1Alpha3NamespacedVirtualServiceApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/virtualservices/${args.name}`,
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
export const readNetworkingIstioIoV1Alpha3NamespacedVirtualServiceStatus = (
  args: ReadNetworkingIstioIoV1Alpha3NamespacedVirtualServiceStatusApiArg,
  options?: Options
) => {
  return apiClient<ReadNetworkingIstioIoV1Alpha3NamespacedVirtualServiceStatusApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/virtualservices/${args.name}/status`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceNetworkingIstioIoV1Alpha3NamespacedVirtualServiceStatus = (
  args: ReplaceNetworkingIstioIoV1Alpha3NamespacedVirtualServiceStatusApiArg,
  options?: Options
) => {
  return apiClient<ReplaceNetworkingIstioIoV1Alpha3NamespacedVirtualServiceStatusApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/virtualservices/${args.name}/status`,
      method: 'PUT',
      body: args.ioIstioNetworkingV1Alpha3VirtualService,
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
export const patchNetworkingIstioIoV1Alpha3NamespacedVirtualServiceStatus = (
  args: PatchNetworkingIstioIoV1Alpha3NamespacedVirtualServiceStatusApiArg,
  options?: Options
) => {
  return apiClient<PatchNetworkingIstioIoV1Alpha3NamespacedVirtualServiceStatusApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/virtualservices/${args.name}/status`,
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
export const listNetworkingIstioIoV1Alpha3NamespacedWorkloadEntry = (
  args: ListNetworkingIstioIoV1Alpha3NamespacedWorkloadEntryApiArg,
  options?: Options
) => {
  return apiClient<ListNetworkingIstioIoV1Alpha3NamespacedWorkloadEntryApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/workloadentries`,
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
export const createNetworkingIstioIoV1Alpha3NamespacedWorkloadEntry = (
  args: CreateNetworkingIstioIoV1Alpha3NamespacedWorkloadEntryApiArg,
  options?: Options
) => {
  return apiClient<CreateNetworkingIstioIoV1Alpha3NamespacedWorkloadEntryApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/workloadentries`,
      method: 'POST',
      body: args.ioIstioNetworkingV1Alpha3WorkloadEntry,
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
export const deleteNetworkingIstioIoV1Alpha3CollectionNamespacedWorkloadEntry =
  (
    args: DeleteNetworkingIstioIoV1Alpha3CollectionNamespacedWorkloadEntryApiArg,
    options?: Options
  ) => {
    return apiClient<DeleteNetworkingIstioIoV1Alpha3CollectionNamespacedWorkloadEntryApiResponse>(
      {
        path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/workloadentries`,
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
export const readNetworkingIstioIoV1Alpha3NamespacedWorkloadEntry = (
  args: ReadNetworkingIstioIoV1Alpha3NamespacedWorkloadEntryApiArg,
  options?: Options
) => {
  return apiClient<ReadNetworkingIstioIoV1Alpha3NamespacedWorkloadEntryApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/workloadentries/${args.name}`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceNetworkingIstioIoV1Alpha3NamespacedWorkloadEntry = (
  args: ReplaceNetworkingIstioIoV1Alpha3NamespacedWorkloadEntryApiArg,
  options?: Options
) => {
  return apiClient<ReplaceNetworkingIstioIoV1Alpha3NamespacedWorkloadEntryApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/workloadentries/${args.name}`,
      method: 'PUT',
      body: args.ioIstioNetworkingV1Alpha3WorkloadEntry,
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
export const deleteNetworkingIstioIoV1Alpha3NamespacedWorkloadEntry = (
  args: DeleteNetworkingIstioIoV1Alpha3NamespacedWorkloadEntryApiArg,
  options?: Options
) => {
  return apiClient<DeleteNetworkingIstioIoV1Alpha3NamespacedWorkloadEntryApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/workloadentries/${args.name}`,
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
export const patchNetworkingIstioIoV1Alpha3NamespacedWorkloadEntry = (
  args: PatchNetworkingIstioIoV1Alpha3NamespacedWorkloadEntryApiArg,
  options?: Options
) => {
  return apiClient<PatchNetworkingIstioIoV1Alpha3NamespacedWorkloadEntryApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/workloadentries/${args.name}`,
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
export const readNetworkingIstioIoV1Alpha3NamespacedWorkloadEntryStatus = (
  args: ReadNetworkingIstioIoV1Alpha3NamespacedWorkloadEntryStatusApiArg,
  options?: Options
) => {
  return apiClient<ReadNetworkingIstioIoV1Alpha3NamespacedWorkloadEntryStatusApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/workloadentries/${args.name}/status`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceNetworkingIstioIoV1Alpha3NamespacedWorkloadEntryStatus = (
  args: ReplaceNetworkingIstioIoV1Alpha3NamespacedWorkloadEntryStatusApiArg,
  options?: Options
) => {
  return apiClient<ReplaceNetworkingIstioIoV1Alpha3NamespacedWorkloadEntryStatusApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/workloadentries/${args.name}/status`,
      method: 'PUT',
      body: args.ioIstioNetworkingV1Alpha3WorkloadEntry,
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
export const patchNetworkingIstioIoV1Alpha3NamespacedWorkloadEntryStatus = (
  args: PatchNetworkingIstioIoV1Alpha3NamespacedWorkloadEntryStatusApiArg,
  options?: Options
) => {
  return apiClient<PatchNetworkingIstioIoV1Alpha3NamespacedWorkloadEntryStatusApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/workloadentries/${args.name}/status`,
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
export const listNetworkingIstioIoV1Alpha3NamespacedWorkloadGroup = (
  args: ListNetworkingIstioIoV1Alpha3NamespacedWorkloadGroupApiArg,
  options?: Options
) => {
  return apiClient<ListNetworkingIstioIoV1Alpha3NamespacedWorkloadGroupApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/workloadgroups`,
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
export const createNetworkingIstioIoV1Alpha3NamespacedWorkloadGroup = (
  args: CreateNetworkingIstioIoV1Alpha3NamespacedWorkloadGroupApiArg,
  options?: Options
) => {
  return apiClient<CreateNetworkingIstioIoV1Alpha3NamespacedWorkloadGroupApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/workloadgroups`,
      method: 'POST',
      body: args.ioIstioNetworkingV1Alpha3WorkloadGroup,
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
export const deleteNetworkingIstioIoV1Alpha3CollectionNamespacedWorkloadGroup =
  (
    args: DeleteNetworkingIstioIoV1Alpha3CollectionNamespacedWorkloadGroupApiArg,
    options?: Options
  ) => {
    return apiClient<DeleteNetworkingIstioIoV1Alpha3CollectionNamespacedWorkloadGroupApiResponse>(
      {
        path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/workloadgroups`,
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
export const readNetworkingIstioIoV1Alpha3NamespacedWorkloadGroup = (
  args: ReadNetworkingIstioIoV1Alpha3NamespacedWorkloadGroupApiArg,
  options?: Options
) => {
  return apiClient<ReadNetworkingIstioIoV1Alpha3NamespacedWorkloadGroupApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/workloadgroups/${args.name}`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceNetworkingIstioIoV1Alpha3NamespacedWorkloadGroup = (
  args: ReplaceNetworkingIstioIoV1Alpha3NamespacedWorkloadGroupApiArg,
  options?: Options
) => {
  return apiClient<ReplaceNetworkingIstioIoV1Alpha3NamespacedWorkloadGroupApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/workloadgroups/${args.name}`,
      method: 'PUT',
      body: args.ioIstioNetworkingV1Alpha3WorkloadGroup,
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
export const deleteNetworkingIstioIoV1Alpha3NamespacedWorkloadGroup = (
  args: DeleteNetworkingIstioIoV1Alpha3NamespacedWorkloadGroupApiArg,
  options?: Options
) => {
  return apiClient<DeleteNetworkingIstioIoV1Alpha3NamespacedWorkloadGroupApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/workloadgroups/${args.name}`,
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
export const patchNetworkingIstioIoV1Alpha3NamespacedWorkloadGroup = (
  args: PatchNetworkingIstioIoV1Alpha3NamespacedWorkloadGroupApiArg,
  options?: Options
) => {
  return apiClient<PatchNetworkingIstioIoV1Alpha3NamespacedWorkloadGroupApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/workloadgroups/${args.name}`,
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
export const readNetworkingIstioIoV1Alpha3NamespacedWorkloadGroupStatus = (
  args: ReadNetworkingIstioIoV1Alpha3NamespacedWorkloadGroupStatusApiArg,
  options?: Options
) => {
  return apiClient<ReadNetworkingIstioIoV1Alpha3NamespacedWorkloadGroupStatusApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/workloadgroups/${args.name}/status`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceNetworkingIstioIoV1Alpha3NamespacedWorkloadGroupStatus = (
  args: ReplaceNetworkingIstioIoV1Alpha3NamespacedWorkloadGroupStatusApiArg,
  options?: Options
) => {
  return apiClient<ReplaceNetworkingIstioIoV1Alpha3NamespacedWorkloadGroupStatusApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/workloadgroups/${args.name}/status`,
      method: 'PUT',
      body: args.ioIstioNetworkingV1Alpha3WorkloadGroup,
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
export const patchNetworkingIstioIoV1Alpha3NamespacedWorkloadGroupStatus = (
  args: PatchNetworkingIstioIoV1Alpha3NamespacedWorkloadGroupStatusApiArg,
  options?: Options
) => {
  return apiClient<PatchNetworkingIstioIoV1Alpha3NamespacedWorkloadGroupStatusApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/namespaces/${args['namespace']}/workloadgroups/${args.name}/status`,
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
export const listNetworkingIstioIoV1Alpha3ServiceEntryForAllNamespaces = (
  args: ListNetworkingIstioIoV1Alpha3ServiceEntryForAllNamespacesApiArg,
  options?: Options
) => {
  return apiClient<ListNetworkingIstioIoV1Alpha3ServiceEntryForAllNamespacesApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/serviceentries`,
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
export const listNetworkingIstioIoV1Alpha3SidecarForAllNamespaces = (
  args: ListNetworkingIstioIoV1Alpha3SidecarForAllNamespacesApiArg,
  options?: Options
) => {
  return apiClient<ListNetworkingIstioIoV1Alpha3SidecarForAllNamespacesApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/sidecars`,
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
export const listNetworkingIstioIoV1Alpha3VirtualServiceForAllNamespaces = (
  args: ListNetworkingIstioIoV1Alpha3VirtualServiceForAllNamespacesApiArg,
  options?: Options
) => {
  return apiClient<ListNetworkingIstioIoV1Alpha3VirtualServiceForAllNamespacesApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/virtualservices`,
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
export const listNetworkingIstioIoV1Alpha3WorkloadEntryForAllNamespaces = (
  args: ListNetworkingIstioIoV1Alpha3WorkloadEntryForAllNamespacesApiArg,
  options?: Options
) => {
  return apiClient<ListNetworkingIstioIoV1Alpha3WorkloadEntryForAllNamespacesApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/workloadentries`,
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
export const listNetworkingIstioIoV1Alpha3WorkloadGroupForAllNamespaces = (
  args: ListNetworkingIstioIoV1Alpha3WorkloadGroupForAllNamespacesApiArg,
  options?: Options
) => {
  return apiClient<ListNetworkingIstioIoV1Alpha3WorkloadGroupForAllNamespacesApiResponse>(
    {
      path: `/apis/networking.istio.io/v1alpha3/workloadgroups`,
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
export type ListNetworkingIstioIoV1Alpha3DestinationRuleForAllNamespacesApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Alpha3DestinationRuleList
export type ListNetworkingIstioIoV1Alpha3DestinationRuleForAllNamespacesApiArg =
  {
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
export type ListNetworkingIstioIoV1Alpha3EnvoyFilterForAllNamespacesApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Alpha3EnvoyFilterList
export type ListNetworkingIstioIoV1Alpha3EnvoyFilterForAllNamespacesApiArg = {
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
export type ListNetworkingIstioIoV1Alpha3GatewayForAllNamespacesApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Alpha3GatewayList
export type ListNetworkingIstioIoV1Alpha3GatewayForAllNamespacesApiArg = {
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
export type ListNetworkingIstioIoV1Alpha3NamespacedDestinationRuleApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Alpha3DestinationRuleList
export type ListNetworkingIstioIoV1Alpha3NamespacedDestinationRuleApiArg = {
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
export type CreateNetworkingIstioIoV1Alpha3NamespacedDestinationRuleApiResponse =
  /** status 200 OK */
  | IoIstioNetworkingV1Alpha3DestinationRule
  | /** status 201 Created */ IoIstioNetworkingV1Alpha3DestinationRule
  | /** status 202 Accepted */ IoIstioNetworkingV1Alpha3DestinationRule
export type CreateNetworkingIstioIoV1Alpha3NamespacedDestinationRuleApiArg = {
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
  ioIstioNetworkingV1Alpha3DestinationRule: IoIstioNetworkingV1Alpha3DestinationRule
}
export type DeleteNetworkingIstioIoV1Alpha3CollectionNamespacedDestinationRuleApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteNetworkingIstioIoV1Alpha3CollectionNamespacedDestinationRuleApiArg =
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
export type ReadNetworkingIstioIoV1Alpha3NamespacedDestinationRuleApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Alpha3DestinationRule
export type ReadNetworkingIstioIoV1Alpha3NamespacedDestinationRuleApiArg = {
  /** name of the DestinationRule */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceNetworkingIstioIoV1Alpha3NamespacedDestinationRuleApiResponse =
  /** status 200 OK */
  | IoIstioNetworkingV1Alpha3DestinationRule
  | /** status 201 Created */ IoIstioNetworkingV1Alpha3DestinationRule
export type ReplaceNetworkingIstioIoV1Alpha3NamespacedDestinationRuleApiArg = {
  /** name of the DestinationRule */
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
  ioIstioNetworkingV1Alpha3DestinationRule: IoIstioNetworkingV1Alpha3DestinationRule
}
export type DeleteNetworkingIstioIoV1Alpha3NamespacedDestinationRuleApiResponse =
  /** status 200 OK */
  | IoK8SApimachineryPkgApisMetaV1Status
  | /** status 202 Accepted */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteNetworkingIstioIoV1Alpha3NamespacedDestinationRuleApiArg = {
  /** name of the DestinationRule */
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
export type PatchNetworkingIstioIoV1Alpha3NamespacedDestinationRuleApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Alpha3DestinationRule
export type PatchNetworkingIstioIoV1Alpha3NamespacedDestinationRuleApiArg = {
  /** name of the DestinationRule */
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
export type ReadNetworkingIstioIoV1Alpha3NamespacedDestinationRuleStatusApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Alpha3DestinationRule
export type ReadNetworkingIstioIoV1Alpha3NamespacedDestinationRuleStatusApiArg =
  {
    /** name of the DestinationRule */
    name: string
    /** object name and auth scope, such as for teams and projects */
    namespace: string
    /** If 'true', then the output is pretty printed. */
    pretty?: string
    /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
    resourceVersion?: string
  }
export type ReplaceNetworkingIstioIoV1Alpha3NamespacedDestinationRuleStatusApiResponse =
  /** status 200 OK */
  | IoIstioNetworkingV1Alpha3DestinationRule
  | /** status 201 Created */ IoIstioNetworkingV1Alpha3DestinationRule
export type ReplaceNetworkingIstioIoV1Alpha3NamespacedDestinationRuleStatusApiArg =
  {
    /** name of the DestinationRule */
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
    ioIstioNetworkingV1Alpha3DestinationRule: IoIstioNetworkingV1Alpha3DestinationRule
  }
export type PatchNetworkingIstioIoV1Alpha3NamespacedDestinationRuleStatusApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Alpha3DestinationRule
export type PatchNetworkingIstioIoV1Alpha3NamespacedDestinationRuleStatusApiArg =
  {
    /** name of the DestinationRule */
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
export type ListNetworkingIstioIoV1Alpha3NamespacedEnvoyFilterApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Alpha3EnvoyFilterList
export type ListNetworkingIstioIoV1Alpha3NamespacedEnvoyFilterApiArg = {
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
export type CreateNetworkingIstioIoV1Alpha3NamespacedEnvoyFilterApiResponse =
  /** status 200 OK */
  | IoIstioNetworkingV1Alpha3EnvoyFilter
  | /** status 201 Created */ IoIstioNetworkingV1Alpha3EnvoyFilter
  | /** status 202 Accepted */ IoIstioNetworkingV1Alpha3EnvoyFilter
export type CreateNetworkingIstioIoV1Alpha3NamespacedEnvoyFilterApiArg = {
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
  ioIstioNetworkingV1Alpha3EnvoyFilter: IoIstioNetworkingV1Alpha3EnvoyFilter
}
export type DeleteNetworkingIstioIoV1Alpha3CollectionNamespacedEnvoyFilterApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteNetworkingIstioIoV1Alpha3CollectionNamespacedEnvoyFilterApiArg =
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
export type ReadNetworkingIstioIoV1Alpha3NamespacedEnvoyFilterApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Alpha3EnvoyFilter
export type ReadNetworkingIstioIoV1Alpha3NamespacedEnvoyFilterApiArg = {
  /** name of the EnvoyFilter */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceNetworkingIstioIoV1Alpha3NamespacedEnvoyFilterApiResponse =
  /** status 200 OK */
  | IoIstioNetworkingV1Alpha3EnvoyFilter
  | /** status 201 Created */ IoIstioNetworkingV1Alpha3EnvoyFilter
export type ReplaceNetworkingIstioIoV1Alpha3NamespacedEnvoyFilterApiArg = {
  /** name of the EnvoyFilter */
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
  ioIstioNetworkingV1Alpha3EnvoyFilter: IoIstioNetworkingV1Alpha3EnvoyFilter
}
export type DeleteNetworkingIstioIoV1Alpha3NamespacedEnvoyFilterApiResponse =
  /** status 200 OK */
  | IoK8SApimachineryPkgApisMetaV1Status
  | /** status 202 Accepted */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteNetworkingIstioIoV1Alpha3NamespacedEnvoyFilterApiArg = {
  /** name of the EnvoyFilter */
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
export type PatchNetworkingIstioIoV1Alpha3NamespacedEnvoyFilterApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Alpha3EnvoyFilter
export type PatchNetworkingIstioIoV1Alpha3NamespacedEnvoyFilterApiArg = {
  /** name of the EnvoyFilter */
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
export type ReadNetworkingIstioIoV1Alpha3NamespacedEnvoyFilterStatusApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Alpha3EnvoyFilter
export type ReadNetworkingIstioIoV1Alpha3NamespacedEnvoyFilterStatusApiArg = {
  /** name of the EnvoyFilter */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceNetworkingIstioIoV1Alpha3NamespacedEnvoyFilterStatusApiResponse =
  /** status 200 OK */
  | IoIstioNetworkingV1Alpha3EnvoyFilter
  | /** status 201 Created */ IoIstioNetworkingV1Alpha3EnvoyFilter
export type ReplaceNetworkingIstioIoV1Alpha3NamespacedEnvoyFilterStatusApiArg =
  {
    /** name of the EnvoyFilter */
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
    ioIstioNetworkingV1Alpha3EnvoyFilter: IoIstioNetworkingV1Alpha3EnvoyFilter
  }
export type PatchNetworkingIstioIoV1Alpha3NamespacedEnvoyFilterStatusApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Alpha3EnvoyFilter
export type PatchNetworkingIstioIoV1Alpha3NamespacedEnvoyFilterStatusApiArg = {
  /** name of the EnvoyFilter */
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
export type ListNetworkingIstioIoV1Alpha3NamespacedGatewayApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Alpha3GatewayList
export type ListNetworkingIstioIoV1Alpha3NamespacedGatewayApiArg = {
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
export type CreateNetworkingIstioIoV1Alpha3NamespacedGatewayApiResponse =
  /** status 200 OK */
  | IoIstioNetworkingV1Alpha3Gateway
  | /** status 201 Created */ IoIstioNetworkingV1Alpha3Gateway
  | /** status 202 Accepted */ IoIstioNetworkingV1Alpha3Gateway
export type CreateNetworkingIstioIoV1Alpha3NamespacedGatewayApiArg = {
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
  ioIstioNetworkingV1Alpha3Gateway: IoIstioNetworkingV1Alpha3Gateway
}
export type DeleteNetworkingIstioIoV1Alpha3CollectionNamespacedGatewayApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteNetworkingIstioIoV1Alpha3CollectionNamespacedGatewayApiArg = {
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
export type ReadNetworkingIstioIoV1Alpha3NamespacedGatewayApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Alpha3Gateway
export type ReadNetworkingIstioIoV1Alpha3NamespacedGatewayApiArg = {
  /** name of the Gateway */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceNetworkingIstioIoV1Alpha3NamespacedGatewayApiResponse =
  /** status 200 OK */
  | IoIstioNetworkingV1Alpha3Gateway
  | /** status 201 Created */ IoIstioNetworkingV1Alpha3Gateway
export type ReplaceNetworkingIstioIoV1Alpha3NamespacedGatewayApiArg = {
  /** name of the Gateway */
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
  ioIstioNetworkingV1Alpha3Gateway: IoIstioNetworkingV1Alpha3Gateway
}
export type DeleteNetworkingIstioIoV1Alpha3NamespacedGatewayApiResponse =
  /** status 200 OK */
  | IoK8SApimachineryPkgApisMetaV1Status
  | /** status 202 Accepted */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteNetworkingIstioIoV1Alpha3NamespacedGatewayApiArg = {
  /** name of the Gateway */
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
export type PatchNetworkingIstioIoV1Alpha3NamespacedGatewayApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Alpha3Gateway
export type PatchNetworkingIstioIoV1Alpha3NamespacedGatewayApiArg = {
  /** name of the Gateway */
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
export type ReadNetworkingIstioIoV1Alpha3NamespacedGatewayStatusApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Alpha3Gateway
export type ReadNetworkingIstioIoV1Alpha3NamespacedGatewayStatusApiArg = {
  /** name of the Gateway */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceNetworkingIstioIoV1Alpha3NamespacedGatewayStatusApiResponse =
  /** status 200 OK */
  | IoIstioNetworkingV1Alpha3Gateway
  | /** status 201 Created */ IoIstioNetworkingV1Alpha3Gateway
export type ReplaceNetworkingIstioIoV1Alpha3NamespacedGatewayStatusApiArg = {
  /** name of the Gateway */
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
  ioIstioNetworkingV1Alpha3Gateway: IoIstioNetworkingV1Alpha3Gateway
}
export type PatchNetworkingIstioIoV1Alpha3NamespacedGatewayStatusApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Alpha3Gateway
export type PatchNetworkingIstioIoV1Alpha3NamespacedGatewayStatusApiArg = {
  /** name of the Gateway */
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
export type ListNetworkingIstioIoV1Alpha3NamespacedServiceEntryApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Alpha3ServiceEntryList
export type ListNetworkingIstioIoV1Alpha3NamespacedServiceEntryApiArg = {
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
export type CreateNetworkingIstioIoV1Alpha3NamespacedServiceEntryApiResponse =
  /** status 200 OK */
  | IoIstioNetworkingV1Alpha3ServiceEntry
  | /** status 201 Created */ IoIstioNetworkingV1Alpha3ServiceEntry
  | /** status 202 Accepted */ IoIstioNetworkingV1Alpha3ServiceEntry
export type CreateNetworkingIstioIoV1Alpha3NamespacedServiceEntryApiArg = {
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
  ioIstioNetworkingV1Alpha3ServiceEntry: IoIstioNetworkingV1Alpha3ServiceEntry
}
export type DeleteNetworkingIstioIoV1Alpha3CollectionNamespacedServiceEntryApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteNetworkingIstioIoV1Alpha3CollectionNamespacedServiceEntryApiArg =
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
export type ReadNetworkingIstioIoV1Alpha3NamespacedServiceEntryApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Alpha3ServiceEntry
export type ReadNetworkingIstioIoV1Alpha3NamespacedServiceEntryApiArg = {
  /** name of the ServiceEntry */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceNetworkingIstioIoV1Alpha3NamespacedServiceEntryApiResponse =
  /** status 200 OK */
  | IoIstioNetworkingV1Alpha3ServiceEntry
  | /** status 201 Created */ IoIstioNetworkingV1Alpha3ServiceEntry
export type ReplaceNetworkingIstioIoV1Alpha3NamespacedServiceEntryApiArg = {
  /** name of the ServiceEntry */
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
  ioIstioNetworkingV1Alpha3ServiceEntry: IoIstioNetworkingV1Alpha3ServiceEntry
}
export type DeleteNetworkingIstioIoV1Alpha3NamespacedServiceEntryApiResponse =
  /** status 200 OK */
  | IoK8SApimachineryPkgApisMetaV1Status
  | /** status 202 Accepted */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteNetworkingIstioIoV1Alpha3NamespacedServiceEntryApiArg = {
  /** name of the ServiceEntry */
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
export type PatchNetworkingIstioIoV1Alpha3NamespacedServiceEntryApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Alpha3ServiceEntry
export type PatchNetworkingIstioIoV1Alpha3NamespacedServiceEntryApiArg = {
  /** name of the ServiceEntry */
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
export type ReadNetworkingIstioIoV1Alpha3NamespacedServiceEntryStatusApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Alpha3ServiceEntry
export type ReadNetworkingIstioIoV1Alpha3NamespacedServiceEntryStatusApiArg = {
  /** name of the ServiceEntry */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceNetworkingIstioIoV1Alpha3NamespacedServiceEntryStatusApiResponse =
  /** status 200 OK */
  | IoIstioNetworkingV1Alpha3ServiceEntry
  | /** status 201 Created */ IoIstioNetworkingV1Alpha3ServiceEntry
export type ReplaceNetworkingIstioIoV1Alpha3NamespacedServiceEntryStatusApiArg =
  {
    /** name of the ServiceEntry */
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
    ioIstioNetworkingV1Alpha3ServiceEntry: IoIstioNetworkingV1Alpha3ServiceEntry
  }
export type PatchNetworkingIstioIoV1Alpha3NamespacedServiceEntryStatusApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Alpha3ServiceEntry
export type PatchNetworkingIstioIoV1Alpha3NamespacedServiceEntryStatusApiArg = {
  /** name of the ServiceEntry */
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
export type ListNetworkingIstioIoV1Alpha3NamespacedSidecarApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Alpha3SidecarList
export type ListNetworkingIstioIoV1Alpha3NamespacedSidecarApiArg = {
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
export type CreateNetworkingIstioIoV1Alpha3NamespacedSidecarApiResponse =
  /** status 200 OK */
  | IoIstioNetworkingV1Alpha3Sidecar
  | /** status 201 Created */ IoIstioNetworkingV1Alpha3Sidecar
  | /** status 202 Accepted */ IoIstioNetworkingV1Alpha3Sidecar
export type CreateNetworkingIstioIoV1Alpha3NamespacedSidecarApiArg = {
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
  ioIstioNetworkingV1Alpha3Sidecar: IoIstioNetworkingV1Alpha3Sidecar
}
export type DeleteNetworkingIstioIoV1Alpha3CollectionNamespacedSidecarApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteNetworkingIstioIoV1Alpha3CollectionNamespacedSidecarApiArg = {
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
export type ReadNetworkingIstioIoV1Alpha3NamespacedSidecarApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Alpha3Sidecar
export type ReadNetworkingIstioIoV1Alpha3NamespacedSidecarApiArg = {
  /** name of the Sidecar */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceNetworkingIstioIoV1Alpha3NamespacedSidecarApiResponse =
  /** status 200 OK */
  | IoIstioNetworkingV1Alpha3Sidecar
  | /** status 201 Created */ IoIstioNetworkingV1Alpha3Sidecar
export type ReplaceNetworkingIstioIoV1Alpha3NamespacedSidecarApiArg = {
  /** name of the Sidecar */
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
  ioIstioNetworkingV1Alpha3Sidecar: IoIstioNetworkingV1Alpha3Sidecar
}
export type DeleteNetworkingIstioIoV1Alpha3NamespacedSidecarApiResponse =
  /** status 200 OK */
  | IoK8SApimachineryPkgApisMetaV1Status
  | /** status 202 Accepted */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteNetworkingIstioIoV1Alpha3NamespacedSidecarApiArg = {
  /** name of the Sidecar */
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
export type PatchNetworkingIstioIoV1Alpha3NamespacedSidecarApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Alpha3Sidecar
export type PatchNetworkingIstioIoV1Alpha3NamespacedSidecarApiArg = {
  /** name of the Sidecar */
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
export type ReadNetworkingIstioIoV1Alpha3NamespacedSidecarStatusApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Alpha3Sidecar
export type ReadNetworkingIstioIoV1Alpha3NamespacedSidecarStatusApiArg = {
  /** name of the Sidecar */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceNetworkingIstioIoV1Alpha3NamespacedSidecarStatusApiResponse =
  /** status 200 OK */
  | IoIstioNetworkingV1Alpha3Sidecar
  | /** status 201 Created */ IoIstioNetworkingV1Alpha3Sidecar
export type ReplaceNetworkingIstioIoV1Alpha3NamespacedSidecarStatusApiArg = {
  /** name of the Sidecar */
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
  ioIstioNetworkingV1Alpha3Sidecar: IoIstioNetworkingV1Alpha3Sidecar
}
export type PatchNetworkingIstioIoV1Alpha3NamespacedSidecarStatusApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Alpha3Sidecar
export type PatchNetworkingIstioIoV1Alpha3NamespacedSidecarStatusApiArg = {
  /** name of the Sidecar */
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
export type ListNetworkingIstioIoV1Alpha3NamespacedVirtualServiceApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Alpha3VirtualServiceList
export type ListNetworkingIstioIoV1Alpha3NamespacedVirtualServiceApiArg = {
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
export type CreateNetworkingIstioIoV1Alpha3NamespacedVirtualServiceApiResponse =
  /** status 200 OK */
  | IoIstioNetworkingV1Alpha3VirtualService
  | /** status 201 Created */ IoIstioNetworkingV1Alpha3VirtualService
  | /** status 202 Accepted */ IoIstioNetworkingV1Alpha3VirtualService
export type CreateNetworkingIstioIoV1Alpha3NamespacedVirtualServiceApiArg = {
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
  ioIstioNetworkingV1Alpha3VirtualService: IoIstioNetworkingV1Alpha3VirtualService
}
export type DeleteNetworkingIstioIoV1Alpha3CollectionNamespacedVirtualServiceApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteNetworkingIstioIoV1Alpha3CollectionNamespacedVirtualServiceApiArg =
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
export type ReadNetworkingIstioIoV1Alpha3NamespacedVirtualServiceApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Alpha3VirtualService
export type ReadNetworkingIstioIoV1Alpha3NamespacedVirtualServiceApiArg = {
  /** name of the VirtualService */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceNetworkingIstioIoV1Alpha3NamespacedVirtualServiceApiResponse =
  /** status 200 OK */
  | IoIstioNetworkingV1Alpha3VirtualService
  | /** status 201 Created */ IoIstioNetworkingV1Alpha3VirtualService
export type ReplaceNetworkingIstioIoV1Alpha3NamespacedVirtualServiceApiArg = {
  /** name of the VirtualService */
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
  ioIstioNetworkingV1Alpha3VirtualService: IoIstioNetworkingV1Alpha3VirtualService
}
export type DeleteNetworkingIstioIoV1Alpha3NamespacedVirtualServiceApiResponse =
  /** status 200 OK */
  | IoK8SApimachineryPkgApisMetaV1Status
  | /** status 202 Accepted */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteNetworkingIstioIoV1Alpha3NamespacedVirtualServiceApiArg = {
  /** name of the VirtualService */
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
export type PatchNetworkingIstioIoV1Alpha3NamespacedVirtualServiceApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Alpha3VirtualService
export type PatchNetworkingIstioIoV1Alpha3NamespacedVirtualServiceApiArg = {
  /** name of the VirtualService */
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
export type ReadNetworkingIstioIoV1Alpha3NamespacedVirtualServiceStatusApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Alpha3VirtualService
export type ReadNetworkingIstioIoV1Alpha3NamespacedVirtualServiceStatusApiArg =
  {
    /** name of the VirtualService */
    name: string
    /** object name and auth scope, such as for teams and projects */
    namespace: string
    /** If 'true', then the output is pretty printed. */
    pretty?: string
    /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
    resourceVersion?: string
  }
export type ReplaceNetworkingIstioIoV1Alpha3NamespacedVirtualServiceStatusApiResponse =
  /** status 200 OK */
  | IoIstioNetworkingV1Alpha3VirtualService
  | /** status 201 Created */ IoIstioNetworkingV1Alpha3VirtualService
export type ReplaceNetworkingIstioIoV1Alpha3NamespacedVirtualServiceStatusApiArg =
  {
    /** name of the VirtualService */
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
    ioIstioNetworkingV1Alpha3VirtualService: IoIstioNetworkingV1Alpha3VirtualService
  }
export type PatchNetworkingIstioIoV1Alpha3NamespacedVirtualServiceStatusApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Alpha3VirtualService
export type PatchNetworkingIstioIoV1Alpha3NamespacedVirtualServiceStatusApiArg =
  {
    /** name of the VirtualService */
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
export type ListNetworkingIstioIoV1Alpha3NamespacedWorkloadEntryApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Alpha3WorkloadEntryList
export type ListNetworkingIstioIoV1Alpha3NamespacedWorkloadEntryApiArg = {
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
export type CreateNetworkingIstioIoV1Alpha3NamespacedWorkloadEntryApiResponse =
  /** status 200 OK */
  | IoIstioNetworkingV1Alpha3WorkloadEntry
  | /** status 201 Created */ IoIstioNetworkingV1Alpha3WorkloadEntry
  | /** status 202 Accepted */ IoIstioNetworkingV1Alpha3WorkloadEntry
export type CreateNetworkingIstioIoV1Alpha3NamespacedWorkloadEntryApiArg = {
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
  ioIstioNetworkingV1Alpha3WorkloadEntry: IoIstioNetworkingV1Alpha3WorkloadEntry
}
export type DeleteNetworkingIstioIoV1Alpha3CollectionNamespacedWorkloadEntryApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteNetworkingIstioIoV1Alpha3CollectionNamespacedWorkloadEntryApiArg =
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
export type ReadNetworkingIstioIoV1Alpha3NamespacedWorkloadEntryApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Alpha3WorkloadEntry
export type ReadNetworkingIstioIoV1Alpha3NamespacedWorkloadEntryApiArg = {
  /** name of the WorkloadEntry */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceNetworkingIstioIoV1Alpha3NamespacedWorkloadEntryApiResponse =
  /** status 200 OK */
  | IoIstioNetworkingV1Alpha3WorkloadEntry
  | /** status 201 Created */ IoIstioNetworkingV1Alpha3WorkloadEntry
export type ReplaceNetworkingIstioIoV1Alpha3NamespacedWorkloadEntryApiArg = {
  /** name of the WorkloadEntry */
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
  ioIstioNetworkingV1Alpha3WorkloadEntry: IoIstioNetworkingV1Alpha3WorkloadEntry
}
export type DeleteNetworkingIstioIoV1Alpha3NamespacedWorkloadEntryApiResponse =
  /** status 200 OK */
  | IoK8SApimachineryPkgApisMetaV1Status
  | /** status 202 Accepted */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteNetworkingIstioIoV1Alpha3NamespacedWorkloadEntryApiArg = {
  /** name of the WorkloadEntry */
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
export type PatchNetworkingIstioIoV1Alpha3NamespacedWorkloadEntryApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Alpha3WorkloadEntry
export type PatchNetworkingIstioIoV1Alpha3NamespacedWorkloadEntryApiArg = {
  /** name of the WorkloadEntry */
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
export type ReadNetworkingIstioIoV1Alpha3NamespacedWorkloadEntryStatusApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Alpha3WorkloadEntry
export type ReadNetworkingIstioIoV1Alpha3NamespacedWorkloadEntryStatusApiArg = {
  /** name of the WorkloadEntry */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceNetworkingIstioIoV1Alpha3NamespacedWorkloadEntryStatusApiResponse =
  /** status 200 OK */
  | IoIstioNetworkingV1Alpha3WorkloadEntry
  | /** status 201 Created */ IoIstioNetworkingV1Alpha3WorkloadEntry
export type ReplaceNetworkingIstioIoV1Alpha3NamespacedWorkloadEntryStatusApiArg =
  {
    /** name of the WorkloadEntry */
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
    ioIstioNetworkingV1Alpha3WorkloadEntry: IoIstioNetworkingV1Alpha3WorkloadEntry
  }
export type PatchNetworkingIstioIoV1Alpha3NamespacedWorkloadEntryStatusApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Alpha3WorkloadEntry
export type PatchNetworkingIstioIoV1Alpha3NamespacedWorkloadEntryStatusApiArg =
  {
    /** name of the WorkloadEntry */
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
export type ListNetworkingIstioIoV1Alpha3NamespacedWorkloadGroupApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Alpha3WorkloadGroupList
export type ListNetworkingIstioIoV1Alpha3NamespacedWorkloadGroupApiArg = {
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
export type CreateNetworkingIstioIoV1Alpha3NamespacedWorkloadGroupApiResponse =
  /** status 200 OK */
  | IoIstioNetworkingV1Alpha3WorkloadGroup
  | /** status 201 Created */ IoIstioNetworkingV1Alpha3WorkloadGroup
  | /** status 202 Accepted */ IoIstioNetworkingV1Alpha3WorkloadGroup
export type CreateNetworkingIstioIoV1Alpha3NamespacedWorkloadGroupApiArg = {
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
  ioIstioNetworkingV1Alpha3WorkloadGroup: IoIstioNetworkingV1Alpha3WorkloadGroup
}
export type DeleteNetworkingIstioIoV1Alpha3CollectionNamespacedWorkloadGroupApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteNetworkingIstioIoV1Alpha3CollectionNamespacedWorkloadGroupApiArg =
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
export type ReadNetworkingIstioIoV1Alpha3NamespacedWorkloadGroupApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Alpha3WorkloadGroup
export type ReadNetworkingIstioIoV1Alpha3NamespacedWorkloadGroupApiArg = {
  /** name of the WorkloadGroup */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceNetworkingIstioIoV1Alpha3NamespacedWorkloadGroupApiResponse =
  /** status 200 OK */
  | IoIstioNetworkingV1Alpha3WorkloadGroup
  | /** status 201 Created */ IoIstioNetworkingV1Alpha3WorkloadGroup
export type ReplaceNetworkingIstioIoV1Alpha3NamespacedWorkloadGroupApiArg = {
  /** name of the WorkloadGroup */
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
  ioIstioNetworkingV1Alpha3WorkloadGroup: IoIstioNetworkingV1Alpha3WorkloadGroup
}
export type DeleteNetworkingIstioIoV1Alpha3NamespacedWorkloadGroupApiResponse =
  /** status 200 OK */
  | IoK8SApimachineryPkgApisMetaV1Status
  | /** status 202 Accepted */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteNetworkingIstioIoV1Alpha3NamespacedWorkloadGroupApiArg = {
  /** name of the WorkloadGroup */
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
export type PatchNetworkingIstioIoV1Alpha3NamespacedWorkloadGroupApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Alpha3WorkloadGroup
export type PatchNetworkingIstioIoV1Alpha3NamespacedWorkloadGroupApiArg = {
  /** name of the WorkloadGroup */
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
export type ReadNetworkingIstioIoV1Alpha3NamespacedWorkloadGroupStatusApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Alpha3WorkloadGroup
export type ReadNetworkingIstioIoV1Alpha3NamespacedWorkloadGroupStatusApiArg = {
  /** name of the WorkloadGroup */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceNetworkingIstioIoV1Alpha3NamespacedWorkloadGroupStatusApiResponse =
  /** status 200 OK */
  | IoIstioNetworkingV1Alpha3WorkloadGroup
  | /** status 201 Created */ IoIstioNetworkingV1Alpha3WorkloadGroup
export type ReplaceNetworkingIstioIoV1Alpha3NamespacedWorkloadGroupStatusApiArg =
  {
    /** name of the WorkloadGroup */
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
    ioIstioNetworkingV1Alpha3WorkloadGroup: IoIstioNetworkingV1Alpha3WorkloadGroup
  }
export type PatchNetworkingIstioIoV1Alpha3NamespacedWorkloadGroupStatusApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Alpha3WorkloadGroup
export type PatchNetworkingIstioIoV1Alpha3NamespacedWorkloadGroupStatusApiArg =
  {
    /** name of the WorkloadGroup */
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
export type ListNetworkingIstioIoV1Alpha3ServiceEntryForAllNamespacesApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Alpha3ServiceEntryList
export type ListNetworkingIstioIoV1Alpha3ServiceEntryForAllNamespacesApiArg = {
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
export type ListNetworkingIstioIoV1Alpha3SidecarForAllNamespacesApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Alpha3SidecarList
export type ListNetworkingIstioIoV1Alpha3SidecarForAllNamespacesApiArg = {
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
export type ListNetworkingIstioIoV1Alpha3VirtualServiceForAllNamespacesApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Alpha3VirtualServiceList
export type ListNetworkingIstioIoV1Alpha3VirtualServiceForAllNamespacesApiArg =
  {
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
export type ListNetworkingIstioIoV1Alpha3WorkloadEntryForAllNamespacesApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Alpha3WorkloadEntryList
export type ListNetworkingIstioIoV1Alpha3WorkloadEntryForAllNamespacesApiArg = {
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
export type ListNetworkingIstioIoV1Alpha3WorkloadGroupForAllNamespacesApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Alpha3WorkloadGroupList
export type ListNetworkingIstioIoV1Alpha3WorkloadGroupForAllNamespacesApiArg = {
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
export type IoIstioNetworkingV1Alpha3DestinationRule = {
  apiVersion?: string | undefined
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ObjectMeta | undefined
  spec?:
    | {
        exportTo?: string[] | undefined
        host?: string | undefined
        subsets?:
          | {
              labels?:
                | {
                    [key: string]: string
                  }
                | undefined
              name?: string | undefined
              trafficPolicy?:
                | {
                    connectionPool?:
                      | {
                          http?:
                            | {
                                h2UpgradePolicy?:
                                  | ('DEFAULT' | 'DO_NOT_UPGRADE' | 'UPGRADE')
                                  | undefined
                                http1MaxPendingRequests?: number | undefined
                                http2MaxRequests?: number | undefined
                                idleTimeout?: string | undefined
                                maxRequestsPerConnection?: number | undefined
                                maxRetries?: number | undefined
                                useClientProtocol?: boolean | undefined
                              }
                            | undefined
                          tcp?:
                            | {
                                connectTimeout?: string | undefined
                                maxConnections?: number | undefined
                                tcpKeepalive?:
                                  | {
                                      interval?: string | undefined
                                      probes?: number | undefined
                                      time?: string | undefined
                                    }
                                  | undefined
                              }
                            | undefined
                        }
                      | undefined
                    loadBalancer?:
                      | (
                          | {
                              consistentHash?:
                                | {
                                    httpCookie?:
                                      | {
                                          name?: string | undefined
                                          path?: string | undefined
                                          ttl?: string | undefined
                                        }
                                      | undefined
                                    httpHeaderName?: string | undefined
                                    httpQueryParameterName?: string | undefined
                                    minimumRingSize?: number | undefined
                                    useSourceIp?: boolean | undefined
                                  }
                                | undefined
                              localityLbSetting?:
                                | {
                                    distribute?:
                                      | {
                                          from?: string | undefined
                                          to?:
                                            | {
                                                [key: string]: number
                                              }
                                            | undefined
                                        }[]
                                      | undefined
                                    enabled?: (boolean | null) | undefined
                                    failover?:
                                      | {
                                          from?: string | undefined
                                          to?: string | undefined
                                        }[]
                                      | undefined
                                    failoverPriority?: string[] | undefined
                                  }
                                | undefined
                              simple?:
                                | (
                                    | 'ROUND_ROBIN'
                                    | 'LEAST_CONN'
                                    | 'RANDOM'
                                    | 'PASSTHROUGH'
                                  )
                                | undefined
                            }
                          | {
                              consistentHash?:
                                | {
                                    httpCookie?:
                                      | {
                                          name?: string | undefined
                                          path?: string | undefined
                                          ttl?: string | undefined
                                        }
                                      | undefined
                                    httpHeaderName?: string | undefined
                                    httpQueryParameterName?: string | undefined
                                    minimumRingSize?: number | undefined
                                    useSourceIp?: boolean | undefined
                                  }
                                | undefined
                              localityLbSetting?:
                                | {
                                    distribute?:
                                      | {
                                          from?: string | undefined
                                          to?:
                                            | {
                                                [key: string]: number
                                              }
                                            | undefined
                                        }[]
                                      | undefined
                                    enabled?: (boolean | null) | undefined
                                    failover?:
                                      | {
                                          from?: string | undefined
                                          to?: string | undefined
                                        }[]
                                      | undefined
                                    failoverPriority?: string[] | undefined
                                  }
                                | undefined
                              simple:
                                | 'ROUND_ROBIN'
                                | 'LEAST_CONN'
                                | 'RANDOM'
                                | 'PASSTHROUGH'
                            }
                          | {
                              consistentHash:
                                | {
                                    httpCookie?:
                                      | {
                                          name?: string | undefined
                                          path?: string | undefined
                                          ttl?: string | undefined
                                        }
                                      | undefined
                                    httpHeaderName?: string | undefined
                                    httpQueryParameterName?: string | undefined
                                    minimumRingSize?: number | undefined
                                    useSourceIp?: boolean | undefined
                                  }
                                | {
                                    httpCookie?:
                                      | {
                                          name?: string | undefined
                                          path?: string | undefined
                                          ttl?: string | undefined
                                        }
                                      | undefined
                                    httpHeaderName: string
                                    httpQueryParameterName?: string | undefined
                                    minimumRingSize?: number | undefined
                                    useSourceIp?: boolean | undefined
                                  }
                                | {
                                    httpCookie: {
                                      name?: string | undefined
                                      path?: string | undefined
                                      ttl?: string | undefined
                                    }
                                    httpHeaderName?: string | undefined
                                    httpQueryParameterName?: string | undefined
                                    minimumRingSize?: number | undefined
                                    useSourceIp?: boolean | undefined
                                  }
                                | {
                                    httpCookie?:
                                      | {
                                          name?: string | undefined
                                          path?: string | undefined
                                          ttl?: string | undefined
                                        }
                                      | undefined
                                    httpHeaderName?: string | undefined
                                    httpQueryParameterName?: string | undefined
                                    minimumRingSize?: number | undefined
                                    useSourceIp: boolean
                                  }
                                | {
                                    httpCookie?:
                                      | {
                                          name?: string | undefined
                                          path?: string | undefined
                                          ttl?: string | undefined
                                        }
                                      | undefined
                                    httpHeaderName?: string | undefined
                                    httpQueryParameterName: string
                                    minimumRingSize?: number | undefined
                                    useSourceIp?: boolean | undefined
                                  }
                              localityLbSetting?:
                                | {
                                    distribute?:
                                      | {
                                          from?: string | undefined
                                          to?:
                                            | {
                                                [key: string]: number
                                              }
                                            | undefined
                                        }[]
                                      | undefined
                                    enabled?: (boolean | null) | undefined
                                    failover?:
                                      | {
                                          from?: string | undefined
                                          to?: string | undefined
                                        }[]
                                      | undefined
                                    failoverPriority?: string[] | undefined
                                  }
                                | undefined
                              simple?:
                                | (
                                    | 'ROUND_ROBIN'
                                    | 'LEAST_CONN'
                                    | 'RANDOM'
                                    | 'PASSTHROUGH'
                                  )
                                | undefined
                            }
                        )
                      | undefined
                    outlierDetection?:
                      | {
                          baseEjectionTime?: string | undefined
                          consecutive5xxErrors?: (number | null) | undefined
                          consecutiveErrors?: number | undefined
                          consecutiveGatewayErrors?: (number | null) | undefined
                          consecutiveLocalOriginFailures?:
                            | (number | null)
                            | undefined
                          interval?: string | undefined
                          maxEjectionPercent?: number | undefined
                          minHealthPercent?: number | undefined
                          splitExternalLocalOriginErrors?: boolean | undefined
                        }
                      | undefined
                    portLevelSettings?:
                      | {
                          connectionPool?:
                            | {
                                http?:
                                  | {
                                      h2UpgradePolicy?:
                                        | (
                                            | 'DEFAULT'
                                            | 'DO_NOT_UPGRADE'
                                            | 'UPGRADE'
                                          )
                                        | undefined
                                      http1MaxPendingRequests?:
                                        | number
                                        | undefined
                                      http2MaxRequests?: number | undefined
                                      idleTimeout?: string | undefined
                                      maxRequestsPerConnection?:
                                        | number
                                        | undefined
                                      maxRetries?: number | undefined
                                      useClientProtocol?: boolean | undefined
                                    }
                                  | undefined
                                tcp?:
                                  | {
                                      connectTimeout?: string | undefined
                                      maxConnections?: number | undefined
                                      tcpKeepalive?:
                                        | {
                                            interval?: string | undefined
                                            probes?: number | undefined
                                            time?: string | undefined
                                          }
                                        | undefined
                                    }
                                  | undefined
                              }
                            | undefined
                          loadBalancer?:
                            | (
                                | {
                                    consistentHash?:
                                      | {
                                          httpCookie?:
                                            | {
                                                name?: string | undefined
                                                path?: string | undefined
                                                ttl?: string | undefined
                                              }
                                            | undefined
                                          httpHeaderName?: string | undefined
                                          httpQueryParameterName?:
                                            | string
                                            | undefined
                                          minimumRingSize?: number | undefined
                                          useSourceIp?: boolean | undefined
                                        }
                                      | undefined
                                    localityLbSetting?:
                                      | {
                                          distribute?:
                                            | {
                                                from?: string | undefined
                                                to?:
                                                  | {
                                                      [key: string]: number
                                                    }
                                                  | undefined
                                              }[]
                                            | undefined
                                          enabled?: (boolean | null) | undefined
                                          failover?:
                                            | {
                                                from?: string | undefined
                                                to?: string | undefined
                                              }[]
                                            | undefined
                                          failoverPriority?:
                                            | string[]
                                            | undefined
                                        }
                                      | undefined
                                    simple?:
                                      | (
                                          | 'ROUND_ROBIN'
                                          | 'LEAST_CONN'
                                          | 'RANDOM'
                                          | 'PASSTHROUGH'
                                        )
                                      | undefined
                                  }
                                | {
                                    consistentHash?:
                                      | {
                                          httpCookie?:
                                            | {
                                                name?: string | undefined
                                                path?: string | undefined
                                                ttl?: string | undefined
                                              }
                                            | undefined
                                          httpHeaderName?: string | undefined
                                          httpQueryParameterName?:
                                            | string
                                            | undefined
                                          minimumRingSize?: number | undefined
                                          useSourceIp?: boolean | undefined
                                        }
                                      | undefined
                                    localityLbSetting?:
                                      | {
                                          distribute?:
                                            | {
                                                from?: string | undefined
                                                to?:
                                                  | {
                                                      [key: string]: number
                                                    }
                                                  | undefined
                                              }[]
                                            | undefined
                                          enabled?: (boolean | null) | undefined
                                          failover?:
                                            | {
                                                from?: string | undefined
                                                to?: string | undefined
                                              }[]
                                            | undefined
                                          failoverPriority?:
                                            | string[]
                                            | undefined
                                        }
                                      | undefined
                                    simple:
                                      | 'ROUND_ROBIN'
                                      | 'LEAST_CONN'
                                      | 'RANDOM'
                                      | 'PASSTHROUGH'
                                  }
                                | {
                                    consistentHash:
                                      | {
                                          httpCookie?:
                                            | {
                                                name?: string | undefined
                                                path?: string | undefined
                                                ttl?: string | undefined
                                              }
                                            | undefined
                                          httpHeaderName?: string | undefined
                                          httpQueryParameterName?:
                                            | string
                                            | undefined
                                          minimumRingSize?: number | undefined
                                          useSourceIp?: boolean | undefined
                                        }
                                      | {
                                          httpCookie?:
                                            | {
                                                name?: string | undefined
                                                path?: string | undefined
                                                ttl?: string | undefined
                                              }
                                            | undefined
                                          httpHeaderName: string
                                          httpQueryParameterName?:
                                            | string
                                            | undefined
                                          minimumRingSize?: number | undefined
                                          useSourceIp?: boolean | undefined
                                        }
                                      | {
                                          httpCookie: {
                                            name?: string | undefined
                                            path?: string | undefined
                                            ttl?: string | undefined
                                          }
                                          httpHeaderName?: string | undefined
                                          httpQueryParameterName?:
                                            | string
                                            | undefined
                                          minimumRingSize?: number | undefined
                                          useSourceIp?: boolean | undefined
                                        }
                                      | {
                                          httpCookie?:
                                            | {
                                                name?: string | undefined
                                                path?: string | undefined
                                                ttl?: string | undefined
                                              }
                                            | undefined
                                          httpHeaderName?: string | undefined
                                          httpQueryParameterName?:
                                            | string
                                            | undefined
                                          minimumRingSize?: number | undefined
                                          useSourceIp: boolean
                                        }
                                      | {
                                          httpCookie?:
                                            | {
                                                name?: string | undefined
                                                path?: string | undefined
                                                ttl?: string | undefined
                                              }
                                            | undefined
                                          httpHeaderName?: string | undefined
                                          httpQueryParameterName: string
                                          minimumRingSize?: number | undefined
                                          useSourceIp?: boolean | undefined
                                        }
                                    localityLbSetting?:
                                      | {
                                          distribute?:
                                            | {
                                                from?: string | undefined
                                                to?:
                                                  | {
                                                      [key: string]: number
                                                    }
                                                  | undefined
                                              }[]
                                            | undefined
                                          enabled?: (boolean | null) | undefined
                                          failover?:
                                            | {
                                                from?: string | undefined
                                                to?: string | undefined
                                              }[]
                                            | undefined
                                          failoverPriority?:
                                            | string[]
                                            | undefined
                                        }
                                      | undefined
                                    simple?:
                                      | (
                                          | 'ROUND_ROBIN'
                                          | 'LEAST_CONN'
                                          | 'RANDOM'
                                          | 'PASSTHROUGH'
                                        )
                                      | undefined
                                  }
                              )
                            | undefined
                          outlierDetection?:
                            | {
                                baseEjectionTime?: string | undefined
                                consecutive5xxErrors?:
                                  | (number | null)
                                  | undefined
                                consecutiveErrors?: number | undefined
                                consecutiveGatewayErrors?:
                                  | (number | null)
                                  | undefined
                                consecutiveLocalOriginFailures?:
                                  | (number | null)
                                  | undefined
                                interval?: string | undefined
                                maxEjectionPercent?: number | undefined
                                minHealthPercent?: number | undefined
                                splitExternalLocalOriginErrors?:
                                  | boolean
                                  | undefined
                              }
                            | undefined
                          port?:
                            | {
                                number?: number | undefined
                              }
                            | undefined
                          tls?:
                            | {
                                caCertificates?: string | undefined
                                clientCertificate?: string | undefined
                                credentialName?: string | undefined
                                insecureSkipVerify?:
                                  | (boolean | null)
                                  | undefined
                                mode?:
                                  | (
                                      | 'DISABLE'
                                      | 'SIMPLE'
                                      | 'MUTUAL'
                                      | 'ISTIO_MUTUAL'
                                    )
                                  | undefined
                                privateKey?: string | undefined
                                sni?: string | undefined
                                subjectAltNames?: string[] | undefined
                              }
                            | undefined
                        }[]
                      | undefined
                    tls?:
                      | {
                          caCertificates?: string | undefined
                          clientCertificate?: string | undefined
                          credentialName?: string | undefined
                          insecureSkipVerify?: (boolean | null) | undefined
                          mode?:
                            | ('DISABLE' | 'SIMPLE' | 'MUTUAL' | 'ISTIO_MUTUAL')
                            | undefined
                          privateKey?: string | undefined
                          sni?: string | undefined
                          subjectAltNames?: string[] | undefined
                        }
                      | undefined
                  }
                | undefined
            }[]
          | undefined
        trafficPolicy?:
          | {
              connectionPool?:
                | {
                    http?:
                      | {
                          h2UpgradePolicy?:
                            | ('DEFAULT' | 'DO_NOT_UPGRADE' | 'UPGRADE')
                            | undefined
                          http1MaxPendingRequests?: number | undefined
                          http2MaxRequests?: number | undefined
                          idleTimeout?: string | undefined
                          maxRequestsPerConnection?: number | undefined
                          maxRetries?: number | undefined
                          useClientProtocol?: boolean | undefined
                        }
                      | undefined
                    tcp?:
                      | {
                          connectTimeout?: string | undefined
                          maxConnections?: number | undefined
                          tcpKeepalive?:
                            | {
                                interval?: string | undefined
                                probes?: number | undefined
                                time?: string | undefined
                              }
                            | undefined
                        }
                      | undefined
                  }
                | undefined
              loadBalancer?:
                | (
                    | {
                        consistentHash?:
                          | {
                              httpCookie?:
                                | {
                                    name?: string | undefined
                                    path?: string | undefined
                                    ttl?: string | undefined
                                  }
                                | undefined
                              httpHeaderName?: string | undefined
                              httpQueryParameterName?: string | undefined
                              minimumRingSize?: number | undefined
                              useSourceIp?: boolean | undefined
                            }
                          | undefined
                        localityLbSetting?:
                          | {
                              distribute?:
                                | {
                                    from?: string | undefined
                                    to?:
                                      | {
                                          [key: string]: number
                                        }
                                      | undefined
                                  }[]
                                | undefined
                              enabled?: (boolean | null) | undefined
                              failover?:
                                | {
                                    from?: string | undefined
                                    to?: string | undefined
                                  }[]
                                | undefined
                              failoverPriority?: string[] | undefined
                            }
                          | undefined
                        simple?:
                          | (
                              | 'ROUND_ROBIN'
                              | 'LEAST_CONN'
                              | 'RANDOM'
                              | 'PASSTHROUGH'
                            )
                          | undefined
                      }
                    | {
                        consistentHash?:
                          | {
                              httpCookie?:
                                | {
                                    name?: string | undefined
                                    path?: string | undefined
                                    ttl?: string | undefined
                                  }
                                | undefined
                              httpHeaderName?: string | undefined
                              httpQueryParameterName?: string | undefined
                              minimumRingSize?: number | undefined
                              useSourceIp?: boolean | undefined
                            }
                          | undefined
                        localityLbSetting?:
                          | {
                              distribute?:
                                | {
                                    from?: string | undefined
                                    to?:
                                      | {
                                          [key: string]: number
                                        }
                                      | undefined
                                  }[]
                                | undefined
                              enabled?: (boolean | null) | undefined
                              failover?:
                                | {
                                    from?: string | undefined
                                    to?: string | undefined
                                  }[]
                                | undefined
                              failoverPriority?: string[] | undefined
                            }
                          | undefined
                        simple:
                          | 'ROUND_ROBIN'
                          | 'LEAST_CONN'
                          | 'RANDOM'
                          | 'PASSTHROUGH'
                      }
                    | {
                        consistentHash:
                          | {
                              httpCookie?:
                                | {
                                    name?: string | undefined
                                    path?: string | undefined
                                    ttl?: string | undefined
                                  }
                                | undefined
                              httpHeaderName?: string | undefined
                              httpQueryParameterName?: string | undefined
                              minimumRingSize?: number | undefined
                              useSourceIp?: boolean | undefined
                            }
                          | {
                              httpCookie?:
                                | {
                                    name?: string | undefined
                                    path?: string | undefined
                                    ttl?: string | undefined
                                  }
                                | undefined
                              httpHeaderName: string
                              httpQueryParameterName?: string | undefined
                              minimumRingSize?: number | undefined
                              useSourceIp?: boolean | undefined
                            }
                          | {
                              httpCookie: {
                                name?: string | undefined
                                path?: string | undefined
                                ttl?: string | undefined
                              }
                              httpHeaderName?: string | undefined
                              httpQueryParameterName?: string | undefined
                              minimumRingSize?: number | undefined
                              useSourceIp?: boolean | undefined
                            }
                          | {
                              httpCookie?:
                                | {
                                    name?: string | undefined
                                    path?: string | undefined
                                    ttl?: string | undefined
                                  }
                                | undefined
                              httpHeaderName?: string | undefined
                              httpQueryParameterName?: string | undefined
                              minimumRingSize?: number | undefined
                              useSourceIp: boolean
                            }
                          | {
                              httpCookie?:
                                | {
                                    name?: string | undefined
                                    path?: string | undefined
                                    ttl?: string | undefined
                                  }
                                | undefined
                              httpHeaderName?: string | undefined
                              httpQueryParameterName: string
                              minimumRingSize?: number | undefined
                              useSourceIp?: boolean | undefined
                            }
                        localityLbSetting?:
                          | {
                              distribute?:
                                | {
                                    from?: string | undefined
                                    to?:
                                      | {
                                          [key: string]: number
                                        }
                                      | undefined
                                  }[]
                                | undefined
                              enabled?: (boolean | null) | undefined
                              failover?:
                                | {
                                    from?: string | undefined
                                    to?: string | undefined
                                  }[]
                                | undefined
                              failoverPriority?: string[] | undefined
                            }
                          | undefined
                        simple?:
                          | (
                              | 'ROUND_ROBIN'
                              | 'LEAST_CONN'
                              | 'RANDOM'
                              | 'PASSTHROUGH'
                            )
                          | undefined
                      }
                  )
                | undefined
              outlierDetection?:
                | {
                    baseEjectionTime?: string | undefined
                    consecutive5xxErrors?: (number | null) | undefined
                    consecutiveErrors?: number | undefined
                    consecutiveGatewayErrors?: (number | null) | undefined
                    consecutiveLocalOriginFailures?: (number | null) | undefined
                    interval?: string | undefined
                    maxEjectionPercent?: number | undefined
                    minHealthPercent?: number | undefined
                    splitExternalLocalOriginErrors?: boolean | undefined
                  }
                | undefined
              portLevelSettings?:
                | {
                    connectionPool?:
                      | {
                          http?:
                            | {
                                h2UpgradePolicy?:
                                  | ('DEFAULT' | 'DO_NOT_UPGRADE' | 'UPGRADE')
                                  | undefined
                                http1MaxPendingRequests?: number | undefined
                                http2MaxRequests?: number | undefined
                                idleTimeout?: string | undefined
                                maxRequestsPerConnection?: number | undefined
                                maxRetries?: number | undefined
                                useClientProtocol?: boolean | undefined
                              }
                            | undefined
                          tcp?:
                            | {
                                connectTimeout?: string | undefined
                                maxConnections?: number | undefined
                                tcpKeepalive?:
                                  | {
                                      interval?: string | undefined
                                      probes?: number | undefined
                                      time?: string | undefined
                                    }
                                  | undefined
                              }
                            | undefined
                        }
                      | undefined
                    loadBalancer?:
                      | (
                          | {
                              consistentHash?:
                                | {
                                    httpCookie?:
                                      | {
                                          name?: string | undefined
                                          path?: string | undefined
                                          ttl?: string | undefined
                                        }
                                      | undefined
                                    httpHeaderName?: string | undefined
                                    httpQueryParameterName?: string | undefined
                                    minimumRingSize?: number | undefined
                                    useSourceIp?: boolean | undefined
                                  }
                                | undefined
                              localityLbSetting?:
                                | {
                                    distribute?:
                                      | {
                                          from?: string | undefined
                                          to?:
                                            | {
                                                [key: string]: number
                                              }
                                            | undefined
                                        }[]
                                      | undefined
                                    enabled?: (boolean | null) | undefined
                                    failover?:
                                      | {
                                          from?: string | undefined
                                          to?: string | undefined
                                        }[]
                                      | undefined
                                    failoverPriority?: string[] | undefined
                                  }
                                | undefined
                              simple?:
                                | (
                                    | 'ROUND_ROBIN'
                                    | 'LEAST_CONN'
                                    | 'RANDOM'
                                    | 'PASSTHROUGH'
                                  )
                                | undefined
                            }
                          | {
                              consistentHash?:
                                | {
                                    httpCookie?:
                                      | {
                                          name?: string | undefined
                                          path?: string | undefined
                                          ttl?: string | undefined
                                        }
                                      | undefined
                                    httpHeaderName?: string | undefined
                                    httpQueryParameterName?: string | undefined
                                    minimumRingSize?: number | undefined
                                    useSourceIp?: boolean | undefined
                                  }
                                | undefined
                              localityLbSetting?:
                                | {
                                    distribute?:
                                      | {
                                          from?: string | undefined
                                          to?:
                                            | {
                                                [key: string]: number
                                              }
                                            | undefined
                                        }[]
                                      | undefined
                                    enabled?: (boolean | null) | undefined
                                    failover?:
                                      | {
                                          from?: string | undefined
                                          to?: string | undefined
                                        }[]
                                      | undefined
                                    failoverPriority?: string[] | undefined
                                  }
                                | undefined
                              simple:
                                | 'ROUND_ROBIN'
                                | 'LEAST_CONN'
                                | 'RANDOM'
                                | 'PASSTHROUGH'
                            }
                          | {
                              consistentHash:
                                | {
                                    httpCookie?:
                                      | {
                                          name?: string | undefined
                                          path?: string | undefined
                                          ttl?: string | undefined
                                        }
                                      | undefined
                                    httpHeaderName?: string | undefined
                                    httpQueryParameterName?: string | undefined
                                    minimumRingSize?: number | undefined
                                    useSourceIp?: boolean | undefined
                                  }
                                | {
                                    httpCookie?:
                                      | {
                                          name?: string | undefined
                                          path?: string | undefined
                                          ttl?: string | undefined
                                        }
                                      | undefined
                                    httpHeaderName: string
                                    httpQueryParameterName?: string | undefined
                                    minimumRingSize?: number | undefined
                                    useSourceIp?: boolean | undefined
                                  }
                                | {
                                    httpCookie: {
                                      name?: string | undefined
                                      path?: string | undefined
                                      ttl?: string | undefined
                                    }
                                    httpHeaderName?: string | undefined
                                    httpQueryParameterName?: string | undefined
                                    minimumRingSize?: number | undefined
                                    useSourceIp?: boolean | undefined
                                  }
                                | {
                                    httpCookie?:
                                      | {
                                          name?: string | undefined
                                          path?: string | undefined
                                          ttl?: string | undefined
                                        }
                                      | undefined
                                    httpHeaderName?: string | undefined
                                    httpQueryParameterName?: string | undefined
                                    minimumRingSize?: number | undefined
                                    useSourceIp: boolean
                                  }
                                | {
                                    httpCookie?:
                                      | {
                                          name?: string | undefined
                                          path?: string | undefined
                                          ttl?: string | undefined
                                        }
                                      | undefined
                                    httpHeaderName?: string | undefined
                                    httpQueryParameterName: string
                                    minimumRingSize?: number | undefined
                                    useSourceIp?: boolean | undefined
                                  }
                              localityLbSetting?:
                                | {
                                    distribute?:
                                      | {
                                          from?: string | undefined
                                          to?:
                                            | {
                                                [key: string]: number
                                              }
                                            | undefined
                                        }[]
                                      | undefined
                                    enabled?: (boolean | null) | undefined
                                    failover?:
                                      | {
                                          from?: string | undefined
                                          to?: string | undefined
                                        }[]
                                      | undefined
                                    failoverPriority?: string[] | undefined
                                  }
                                | undefined
                              simple?:
                                | (
                                    | 'ROUND_ROBIN'
                                    | 'LEAST_CONN'
                                    | 'RANDOM'
                                    | 'PASSTHROUGH'
                                  )
                                | undefined
                            }
                        )
                      | undefined
                    outlierDetection?:
                      | {
                          baseEjectionTime?: string | undefined
                          consecutive5xxErrors?: (number | null) | undefined
                          consecutiveErrors?: number | undefined
                          consecutiveGatewayErrors?: (number | null) | undefined
                          consecutiveLocalOriginFailures?:
                            | (number | null)
                            | undefined
                          interval?: string | undefined
                          maxEjectionPercent?: number | undefined
                          minHealthPercent?: number | undefined
                          splitExternalLocalOriginErrors?: boolean | undefined
                        }
                      | undefined
                    port?:
                      | {
                          number?: number | undefined
                        }
                      | undefined
                    tls?:
                      | {
                          caCertificates?: string | undefined
                          clientCertificate?: string | undefined
                          credentialName?: string | undefined
                          insecureSkipVerify?: (boolean | null) | undefined
                          mode?:
                            | ('DISABLE' | 'SIMPLE' | 'MUTUAL' | 'ISTIO_MUTUAL')
                            | undefined
                          privateKey?: string | undefined
                          sni?: string | undefined
                          subjectAltNames?: string[] | undefined
                        }
                      | undefined
                  }[]
                | undefined
              tls?:
                | {
                    caCertificates?: string | undefined
                    clientCertificate?: string | undefined
                    credentialName?: string | undefined
                    insecureSkipVerify?: (boolean | null) | undefined
                    mode?:
                      | ('DISABLE' | 'SIMPLE' | 'MUTUAL' | 'ISTIO_MUTUAL')
                      | undefined
                    privateKey?: string | undefined
                    sni?: string | undefined
                    subjectAltNames?: string[] | undefined
                  }
                | undefined
            }
          | undefined
      }
    | undefined
  status?: object | undefined
}
export type IoK8SApimachineryPkgApisMetaV1ListMeta = {
  continue?: string | undefined
  remainingItemCount?: number | undefined
  resourceVersion?: string | undefined
  selfLink?: string | undefined
}
export type IoIstioNetworkingV1Alpha3DestinationRuleList = {
  apiVersion?: string | undefined
  items: IoIstioNetworkingV1Alpha3DestinationRule[]
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ListMeta | undefined
}
export type IoIstioNetworkingV1Alpha3EnvoyFilter = {
  apiVersion?: string | undefined
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ObjectMeta | undefined
  spec?:
    | {
        configPatches?:
          | {
              applyTo?:
                | (
                    | 'INVALID'
                    | 'LISTENER'
                    | 'FILTER_CHAIN'
                    | 'NETWORK_FILTER'
                    | 'HTTP_FILTER'
                    | 'ROUTE_CONFIGURATION'
                    | 'VIRTUAL_HOST'
                    | 'HTTP_ROUTE'
                    | 'CLUSTER'
                    | 'EXTENSION_CONFIG'
                    | 'BOOTSTRAP'
                  )
                | undefined
              match?:
                | (
                    | {
                        cluster?:
                          | {
                              name?: string | undefined
                              portNumber?: number | undefined
                              service?: string | undefined
                              subset?: string | undefined
                            }
                          | undefined
                        context?:
                          | (
                              | 'ANY'
                              | 'SIDECAR_INBOUND'
                              | 'SIDECAR_OUTBOUND'
                              | 'GATEWAY'
                            )
                          | undefined
                        listener?:
                          | {
                              filterChain?:
                                | {
                                    applicationProtocols?: string | undefined
                                    destinationPort?: number | undefined
                                    filter?:
                                      | {
                                          name?: string | undefined
                                          subFilter?:
                                            | {
                                                name?: string | undefined
                                              }
                                            | undefined
                                        }
                                      | undefined
                                    name?: string | undefined
                                    sni?: string | undefined
                                    transportProtocol?: string | undefined
                                  }
                                | undefined
                              name?: string | undefined
                              portName?: string | undefined
                              portNumber?: number | undefined
                            }
                          | undefined
                        proxy?:
                          | {
                              metadata?:
                                | {
                                    [key: string]: string
                                  }
                                | undefined
                              proxyVersion?: string | undefined
                            }
                          | undefined
                        routeConfiguration?:
                          | {
                              gateway?: string | undefined
                              name?: string | undefined
                              portName?: string | undefined
                              portNumber?: number | undefined
                              vhost?:
                                | {
                                    name?: string | undefined
                                    route?:
                                      | {
                                          action?:
                                            | (
                                                | 'ANY'
                                                | 'ROUTE'
                                                | 'REDIRECT'
                                                | 'DIRECT_RESPONSE'
                                              )
                                            | undefined
                                          name?: string | undefined
                                        }
                                      | undefined
                                  }
                                | undefined
                            }
                          | undefined
                      }
                    | {
                        cluster?:
                          | {
                              name?: string | undefined
                              portNumber?: number | undefined
                              service?: string | undefined
                              subset?: string | undefined
                            }
                          | undefined
                        context?:
                          | (
                              | 'ANY'
                              | 'SIDECAR_INBOUND'
                              | 'SIDECAR_OUTBOUND'
                              | 'GATEWAY'
                            )
                          | undefined
                        listener: {
                          filterChain?:
                            | {
                                applicationProtocols?: string | undefined
                                destinationPort?: number | undefined
                                filter?:
                                  | {
                                      name?: string | undefined
                                      subFilter?:
                                        | {
                                            name?: string | undefined
                                          }
                                        | undefined
                                    }
                                  | undefined
                                name?: string | undefined
                                sni?: string | undefined
                                transportProtocol?: string | undefined
                              }
                            | undefined
                          name?: string | undefined
                          portName?: string | undefined
                          portNumber?: number | undefined
                        }
                        proxy?:
                          | {
                              metadata?:
                                | {
                                    [key: string]: string
                                  }
                                | undefined
                              proxyVersion?: string | undefined
                            }
                          | undefined
                        routeConfiguration?:
                          | {
                              gateway?: string | undefined
                              name?: string | undefined
                              portName?: string | undefined
                              portNumber?: number | undefined
                              vhost?:
                                | {
                                    name?: string | undefined
                                    route?:
                                      | {
                                          action?:
                                            | (
                                                | 'ANY'
                                                | 'ROUTE'
                                                | 'REDIRECT'
                                                | 'DIRECT_RESPONSE'
                                              )
                                            | undefined
                                          name?: string | undefined
                                        }
                                      | undefined
                                  }
                                | undefined
                            }
                          | undefined
                      }
                    | {
                        cluster?:
                          | {
                              name?: string | undefined
                              portNumber?: number | undefined
                              service?: string | undefined
                              subset?: string | undefined
                            }
                          | undefined
                        context?:
                          | (
                              | 'ANY'
                              | 'SIDECAR_INBOUND'
                              | 'SIDECAR_OUTBOUND'
                              | 'GATEWAY'
                            )
                          | undefined
                        listener?:
                          | {
                              filterChain?:
                                | {
                                    applicationProtocols?: string | undefined
                                    destinationPort?: number | undefined
                                    filter?:
                                      | {
                                          name?: string | undefined
                                          subFilter?:
                                            | {
                                                name?: string | undefined
                                              }
                                            | undefined
                                        }
                                      | undefined
                                    name?: string | undefined
                                    sni?: string | undefined
                                    transportProtocol?: string | undefined
                                  }
                                | undefined
                              name?: string | undefined
                              portName?: string | undefined
                              portNumber?: number | undefined
                            }
                          | undefined
                        proxy?:
                          | {
                              metadata?:
                                | {
                                    [key: string]: string
                                  }
                                | undefined
                              proxyVersion?: string | undefined
                            }
                          | undefined
                        routeConfiguration: {
                          gateway?: string | undefined
                          name?: string | undefined
                          portName?: string | undefined
                          portNumber?: number | undefined
                          vhost?:
                            | {
                                name?: string | undefined
                                route?:
                                  | {
                                      action?:
                                        | (
                                            | 'ANY'
                                            | 'ROUTE'
                                            | 'REDIRECT'
                                            | 'DIRECT_RESPONSE'
                                          )
                                        | undefined
                                      name?: string | undefined
                                    }
                                  | undefined
                              }
                            | undefined
                        }
                      }
                    | {
                        cluster: {
                          name?: string | undefined
                          portNumber?: number | undefined
                          service?: string | undefined
                          subset?: string | undefined
                        }
                        context?:
                          | (
                              | 'ANY'
                              | 'SIDECAR_INBOUND'
                              | 'SIDECAR_OUTBOUND'
                              | 'GATEWAY'
                            )
                          | undefined
                        listener?:
                          | {
                              filterChain?:
                                | {
                                    applicationProtocols?: string | undefined
                                    destinationPort?: number | undefined
                                    filter?:
                                      | {
                                          name?: string | undefined
                                          subFilter?:
                                            | {
                                                name?: string | undefined
                                              }
                                            | undefined
                                        }
                                      | undefined
                                    name?: string | undefined
                                    sni?: string | undefined
                                    transportProtocol?: string | undefined
                                  }
                                | undefined
                              name?: string | undefined
                              portName?: string | undefined
                              portNumber?: number | undefined
                            }
                          | undefined
                        proxy?:
                          | {
                              metadata?:
                                | {
                                    [key: string]: string
                                  }
                                | undefined
                              proxyVersion?: string | undefined
                            }
                          | undefined
                        routeConfiguration?:
                          | {
                              gateway?: string | undefined
                              name?: string | undefined
                              portName?: string | undefined
                              portNumber?: number | undefined
                              vhost?:
                                | {
                                    name?: string | undefined
                                    route?:
                                      | {
                                          action?:
                                            | (
                                                | 'ANY'
                                                | 'ROUTE'
                                                | 'REDIRECT'
                                                | 'DIRECT_RESPONSE'
                                              )
                                            | undefined
                                          name?: string | undefined
                                        }
                                      | undefined
                                  }
                                | undefined
                            }
                          | undefined
                      }
                  )
                | undefined
              patch?:
                | {
                    filterClass?:
                      | ('UNSPECIFIED' | 'AUTHN' | 'AUTHZ' | 'STATS')
                      | undefined
                    operation?:
                      | (
                          | 'INVALID'
                          | 'MERGE'
                          | 'ADD'
                          | 'REMOVE'
                          | 'INSERT_BEFORE'
                          | 'INSERT_AFTER'
                          | 'INSERT_FIRST'
                          | 'REPLACE'
                        )
                      | undefined
                    value?: object | undefined
                  }
                | undefined
            }[]
          | undefined
        priority?: number | undefined
        workloadSelector?:
          | {
              labels?:
                | {
                    [key: string]: string
                  }
                | undefined
            }
          | undefined
      }
    | undefined
  status?: object | undefined
}
export type IoIstioNetworkingV1Alpha3EnvoyFilterList = {
  apiVersion?: string | undefined
  items: IoIstioNetworkingV1Alpha3EnvoyFilter[]
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ListMeta | undefined
}
export type IoIstioNetworkingV1Alpha3Gateway = {
  apiVersion?: string | undefined
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ObjectMeta | undefined
  spec?:
    | {
        selector?:
          | {
              [key: string]: string
            }
          | undefined
        servers?:
          | {
              bind?: string | undefined
              defaultEndpoint?: string | undefined
              hosts?: string[] | undefined
              name?: string | undefined
              port?:
                | {
                    name?: string | undefined
                    number?: number | undefined
                    protocol?: string | undefined
                    targetPort?: number | undefined
                  }
                | undefined
              tls?:
                | {
                    caCertificates?: string | undefined
                    cipherSuites?: string[] | undefined
                    credentialName?: string | undefined
                    httpsRedirect?: boolean | undefined
                    maxProtocolVersion?:
                      | (
                          | 'TLS_AUTO'
                          | 'TLSV1_0'
                          | 'TLSV1_1'
                          | 'TLSV1_2'
                          | 'TLSV1_3'
                        )
                      | undefined
                    minProtocolVersion?:
                      | (
                          | 'TLS_AUTO'
                          | 'TLSV1_0'
                          | 'TLSV1_1'
                          | 'TLSV1_2'
                          | 'TLSV1_3'
                        )
                      | undefined
                    mode?:
                      | (
                          | 'PASSTHROUGH'
                          | 'SIMPLE'
                          | 'MUTUAL'
                          | 'AUTO_PASSTHROUGH'
                          | 'ISTIO_MUTUAL'
                        )
                      | undefined
                    privateKey?: string | undefined
                    serverCertificate?: string | undefined
                    subjectAltNames?: string[] | undefined
                    verifyCertificateHash?: string[] | undefined
                    verifyCertificateSpki?: string[] | undefined
                  }
                | undefined
            }[]
          | undefined
      }
    | undefined
  status?: object | undefined
}
export type IoIstioNetworkingV1Alpha3GatewayList = {
  apiVersion?: string | undefined
  items: IoIstioNetworkingV1Alpha3Gateway[]
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
export type IoIstioNetworkingV1Alpha3ServiceEntry = {
  apiVersion?: string | undefined
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ObjectMeta | undefined
  spec?:
    | {
        addresses?: string[] | undefined
        endpoints?:
          | {
              address?: string | undefined
              labels?:
                | {
                    [key: string]: string
                  }
                | undefined
              locality?: string | undefined
              network?: string | undefined
              ports?:
                | {
                    [key: string]: number
                  }
                | undefined
              serviceAccount?: string | undefined
              weight?: number | undefined
            }[]
          | undefined
        exportTo?: string[] | undefined
        hosts?: string[] | undefined
        location?: ('MESH_EXTERNAL' | 'MESH_INTERNAL') | undefined
        ports?:
          | {
              name?: string | undefined
              number?: number | undefined
              protocol?: string | undefined
              targetPort?: number | undefined
            }[]
          | undefined
        resolution?: ('NONE' | 'STATIC' | 'DNS' | 'DNS_ROUND_ROBIN') | undefined
        subjectAltNames?: string[] | undefined
        workloadSelector?:
          | {
              labels?:
                | {
                    [key: string]: string
                  }
                | undefined
            }
          | undefined
      }
    | undefined
  status?: object | undefined
}
export type IoIstioNetworkingV1Alpha3ServiceEntryList = {
  apiVersion?: string | undefined
  items: IoIstioNetworkingV1Alpha3ServiceEntry[]
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ListMeta | undefined
}
export type IoIstioNetworkingV1Alpha3Sidecar = {
  apiVersion?: string | undefined
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ObjectMeta | undefined
  spec?:
    | {
        egress?:
          | {
              bind?: string | undefined
              captureMode?: ('DEFAULT' | 'IPTABLES' | 'NONE') | undefined
              hosts?: string[] | undefined
              port?:
                | {
                    name?: string | undefined
                    number?: number | undefined
                    protocol?: string | undefined
                    targetPort?: number | undefined
                  }
                | undefined
            }[]
          | undefined
        ingress?:
          | {
              bind?: string | undefined
              captureMode?: ('DEFAULT' | 'IPTABLES' | 'NONE') | undefined
              defaultEndpoint?: string | undefined
              port?:
                | {
                    name?: string | undefined
                    number?: number | undefined
                    protocol?: string | undefined
                    targetPort?: number | undefined
                  }
                | undefined
            }[]
          | undefined
        outboundTrafficPolicy?:
          | {
              egressProxy?:
                | {
                    host?: string | undefined
                    port?:
                      | {
                          number?: number | undefined
                        }
                      | undefined
                    subset?: string | undefined
                  }
                | undefined
              mode?: ('REGISTRY_ONLY' | 'ALLOW_ANY') | undefined
            }
          | undefined
        workloadSelector?:
          | {
              labels?:
                | {
                    [key: string]: string
                  }
                | undefined
            }
          | undefined
      }
    | undefined
  status?: object | undefined
}
export type IoIstioNetworkingV1Alpha3SidecarList = {
  apiVersion?: string | undefined
  items: IoIstioNetworkingV1Alpha3Sidecar[]
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ListMeta | undefined
}
export type IoIstioNetworkingV1Alpha3VirtualService = {
  apiVersion?: string | undefined
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ObjectMeta | undefined
  spec?:
    | {
        exportTo?: string[] | undefined
        gateways?: string[] | undefined
        hosts?: string[] | undefined
        http?:
          | {
              corsPolicy?:
                | {
                    allowCredentials?: (boolean | null) | undefined
                    allowHeaders?: string[] | undefined
                    allowMethods?: string[] | undefined
                    allowOrigin?: string[] | undefined
                    allowOrigins?:
                      | (
                          | {
                              exact?: string | undefined
                              prefix?: string | undefined
                              regex?: string | undefined
                            }
                          | {
                              exact: string
                              prefix?: string | undefined
                              regex?: string | undefined
                            }
                          | {
                              exact?: string | undefined
                              prefix: string
                              regex?: string | undefined
                            }
                          | {
                              exact?: string | undefined
                              prefix?: string | undefined
                              regex: string
                            }
                        )[]
                      | undefined
                    exposeHeaders?: string[] | undefined
                    maxAge?: string | undefined
                  }
                | undefined
              delegate?:
                | {
                    name?: string | undefined
                    namespace?: string | undefined
                  }
                | undefined
              fault?:
                | {
                    abort?:
                      | (
                          | {
                              grpcStatus?: string | undefined
                              http2Error?: string | undefined
                              httpStatus?: number | undefined
                              percentage?:
                                | {
                                    value?: number | undefined
                                  }
                                | undefined
                            }
                          | {
                              grpcStatus?: string | undefined
                              http2Error?: string | undefined
                              httpStatus: number
                              percentage?:
                                | {
                                    value?: number | undefined
                                  }
                                | undefined
                            }
                          | {
                              grpcStatus: string
                              http2Error?: string | undefined
                              httpStatus?: number | undefined
                              percentage?:
                                | {
                                    value?: number | undefined
                                  }
                                | undefined
                            }
                          | {
                              grpcStatus?: string | undefined
                              http2Error: string
                              httpStatus?: number | undefined
                              percentage?:
                                | {
                                    value?: number | undefined
                                  }
                                | undefined
                            }
                        )
                      | undefined
                    delay?:
                      | (
                          | {
                              exponentialDelay?: string | undefined
                              fixedDelay?: string | undefined
                              percent?: number | undefined
                              percentage?:
                                | {
                                    value?: number | undefined
                                  }
                                | undefined
                            }
                          | {
                              exponentialDelay?: string | undefined
                              fixedDelay: string
                              percent?: number | undefined
                              percentage?:
                                | {
                                    value?: number | undefined
                                  }
                                | undefined
                            }
                          | {
                              exponentialDelay: string
                              fixedDelay?: string | undefined
                              percent?: number | undefined
                              percentage?:
                                | {
                                    value?: number | undefined
                                  }
                                | undefined
                            }
                        )
                      | undefined
                  }
                | undefined
              headers?:
                | {
                    request?:
                      | {
                          add?:
                            | {
                                [key: string]: string
                              }
                            | undefined
                          remove?: string[] | undefined
                          set?:
                            | {
                                [key: string]: string
                              }
                            | undefined
                        }
                      | undefined
                    response?:
                      | {
                          add?:
                            | {
                                [key: string]: string
                              }
                            | undefined
                          remove?: string[] | undefined
                          set?:
                            | {
                                [key: string]: string
                              }
                            | undefined
                        }
                      | undefined
                  }
                | undefined
              match?:
                | {
                    authority?:
                      | (
                          | {
                              exact?: string | undefined
                              prefix?: string | undefined
                              regex?: string | undefined
                            }
                          | {
                              exact: string
                              prefix?: string | undefined
                              regex?: string | undefined
                            }
                          | {
                              exact?: string | undefined
                              prefix: string
                              regex?: string | undefined
                            }
                          | {
                              exact?: string | undefined
                              prefix?: string | undefined
                              regex: string
                            }
                        )
                      | undefined
                    gateways?: string[] | undefined
                    headers?:
                      | {
                          [key: string]:
                            | {
                                exact?: string | undefined
                                prefix?: string | undefined
                                regex?: string | undefined
                              }
                            | {
                                exact: string
                                prefix?: string | undefined
                                regex?: string | undefined
                              }
                            | {
                                exact?: string | undefined
                                prefix: string
                                regex?: string | undefined
                              }
                            | {
                                exact?: string | undefined
                                prefix?: string | undefined
                                regex: string
                              }
                        }
                      | undefined
                    ignoreUriCase?: boolean | undefined
                    method?:
                      | (
                          | {
                              exact?: string | undefined
                              prefix?: string | undefined
                              regex?: string | undefined
                            }
                          | {
                              exact: string
                              prefix?: string | undefined
                              regex?: string | undefined
                            }
                          | {
                              exact?: string | undefined
                              prefix: string
                              regex?: string | undefined
                            }
                          | {
                              exact?: string | undefined
                              prefix?: string | undefined
                              regex: string
                            }
                        )
                      | undefined
                    name?: string | undefined
                    port?: number | undefined
                    queryParams?:
                      | {
                          [key: string]:
                            | {
                                exact?: string | undefined
                                prefix?: string | undefined
                                regex?: string | undefined
                              }
                            | {
                                exact: string
                                prefix?: string | undefined
                                regex?: string | undefined
                              }
                            | {
                                exact?: string | undefined
                                prefix: string
                                regex?: string | undefined
                              }
                            | {
                                exact?: string | undefined
                                prefix?: string | undefined
                                regex: string
                              }
                        }
                      | undefined
                    scheme?:
                      | (
                          | {
                              exact?: string | undefined
                              prefix?: string | undefined
                              regex?: string | undefined
                            }
                          | {
                              exact: string
                              prefix?: string | undefined
                              regex?: string | undefined
                            }
                          | {
                              exact?: string | undefined
                              prefix: string
                              regex?: string | undefined
                            }
                          | {
                              exact?: string | undefined
                              prefix?: string | undefined
                              regex: string
                            }
                        )
                      | undefined
                    sourceLabels?:
                      | {
                          [key: string]: string
                        }
                      | undefined
                    sourceNamespace?: string | undefined
                    uri?:
                      | (
                          | {
                              exact?: string | undefined
                              prefix?: string | undefined
                              regex?: string | undefined
                            }
                          | {
                              exact: string
                              prefix?: string | undefined
                              regex?: string | undefined
                            }
                          | {
                              exact?: string | undefined
                              prefix: string
                              regex?: string | undefined
                            }
                          | {
                              exact?: string | undefined
                              prefix?: string | undefined
                              regex: string
                            }
                        )
                      | undefined
                    withoutHeaders?:
                      | {
                          [key: string]:
                            | {
                                exact?: string | undefined
                                prefix?: string | undefined
                                regex?: string | undefined
                              }
                            | {
                                exact: string
                                prefix?: string | undefined
                                regex?: string | undefined
                              }
                            | {
                                exact?: string | undefined
                                prefix: string
                                regex?: string | undefined
                              }
                            | {
                                exact?: string | undefined
                                prefix?: string | undefined
                                regex: string
                              }
                        }
                      | undefined
                  }[]
                | undefined
              mirror?:
                | {
                    host?: string | undefined
                    port?:
                      | {
                          number?: number | undefined
                        }
                      | undefined
                    subset?: string | undefined
                  }
                | undefined
              mirrorPercent?: (number | null) | undefined
              mirrorPercentage?:
                | {
                    value?: number | undefined
                  }
                | undefined
              mirror_percent?: (number | null) | undefined
              name?: string | undefined
              redirect?:
                | (
                    | {
                        authority?: string | undefined
                        derivePort?:
                          | ('FROM_PROTOCOL_DEFAULT' | 'FROM_REQUEST_PORT')
                          | undefined
                        port?: number | undefined
                        redirectCode?: number | undefined
                        scheme?: string | undefined
                        uri?: string | undefined
                      }
                    | {
                        authority?: string | undefined
                        derivePort?:
                          | ('FROM_PROTOCOL_DEFAULT' | 'FROM_REQUEST_PORT')
                          | undefined
                        port: number
                        redirectCode?: number | undefined
                        scheme?: string | undefined
                        uri?: string | undefined
                      }
                    | {
                        authority?: string | undefined
                        derivePort:
                          | 'FROM_PROTOCOL_DEFAULT'
                          | 'FROM_REQUEST_PORT'
                        port?: number | undefined
                        redirectCode?: number | undefined
                        scheme?: string | undefined
                        uri?: string | undefined
                      }
                  )
                | undefined
              retries?:
                | {
                    attempts?: number | undefined
                    perTryTimeout?: string | undefined
                    retryOn?: string | undefined
                    retryRemoteLocalities?: (boolean | null) | undefined
                  }
                | undefined
              rewrite?:
                | {
                    authority?: string | undefined
                    uri?: string | undefined
                  }
                | undefined
              route?:
                | {
                    destination?:
                      | {
                          host?: string | undefined
                          port?:
                            | {
                                number?: number | undefined
                              }
                            | undefined
                          subset?: string | undefined
                        }
                      | undefined
                    headers?:
                      | {
                          request?:
                            | {
                                add?:
                                  | {
                                      [key: string]: string
                                    }
                                  | undefined
                                remove?: string[] | undefined
                                set?:
                                  | {
                                      [key: string]: string
                                    }
                                  | undefined
                              }
                            | undefined
                          response?:
                            | {
                                add?:
                                  | {
                                      [key: string]: string
                                    }
                                  | undefined
                                remove?: string[] | undefined
                                set?:
                                  | {
                                      [key: string]: string
                                    }
                                  | undefined
                              }
                            | undefined
                        }
                      | undefined
                    weight?: number | undefined
                  }[]
                | undefined
              timeout?: string | undefined
            }[]
          | undefined
        tcp?:
          | {
              match?:
                | {
                    destinationSubnets?: string[] | undefined
                    gateways?: string[] | undefined
                    port?: number | undefined
                    sourceLabels?:
                      | {
                          [key: string]: string
                        }
                      | undefined
                    sourceNamespace?: string | undefined
                    sourceSubnet?: string | undefined
                  }[]
                | undefined
              route?:
                | {
                    destination?:
                      | {
                          host?: string | undefined
                          port?:
                            | {
                                number?: number | undefined
                              }
                            | undefined
                          subset?: string | undefined
                        }
                      | undefined
                    weight?: number | undefined
                  }[]
                | undefined
            }[]
          | undefined
        tls?:
          | {
              match?:
                | {
                    destinationSubnets?: string[] | undefined
                    gateways?: string[] | undefined
                    port?: number | undefined
                    sniHosts?: string[] | undefined
                    sourceLabels?:
                      | {
                          [key: string]: string
                        }
                      | undefined
                    sourceNamespace?: string | undefined
                  }[]
                | undefined
              route?:
                | {
                    destination?:
                      | {
                          host?: string | undefined
                          port?:
                            | {
                                number?: number | undefined
                              }
                            | undefined
                          subset?: string | undefined
                        }
                      | undefined
                    weight?: number | undefined
                  }[]
                | undefined
            }[]
          | undefined
      }
    | undefined
  status?: object | undefined
}
export type IoIstioNetworkingV1Alpha3VirtualServiceList = {
  apiVersion?: string | undefined
  items: IoIstioNetworkingV1Alpha3VirtualService[]
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ListMeta | undefined
}
export type IoIstioNetworkingV1Alpha3WorkloadEntry = {
  apiVersion?: string | undefined
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ObjectMeta | undefined
  spec?:
    | {
        address?: string | undefined
        labels?:
          | {
              [key: string]: string
            }
          | undefined
        locality?: string | undefined
        network?: string | undefined
        ports?:
          | {
              [key: string]: number
            }
          | undefined
        serviceAccount?: string | undefined
        weight?: number | undefined
      }
    | undefined
  status?: object | undefined
}
export type IoIstioNetworkingV1Alpha3WorkloadEntryList = {
  apiVersion?: string | undefined
  items: IoIstioNetworkingV1Alpha3WorkloadEntry[]
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ListMeta | undefined
}
export type IoIstioNetworkingV1Alpha3WorkloadGroup = {
  apiVersion?: string | undefined
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ObjectMeta | undefined
  spec?:
    | {
        metadata?:
          | {
              annotations?:
                | {
                    [key: string]: string
                  }
                | undefined
              labels?:
                | {
                    [key: string]: string
                  }
                | undefined
            }
          | undefined
        probe?:
          | (
              | {
                  exec?:
                    | {
                        command?: string[] | undefined
                      }
                    | undefined
                  failureThreshold?: number | undefined
                  httpGet?:
                    | {
                        host?: string | undefined
                        httpHeaders?:
                          | {
                              name?: string | undefined
                              value?: string | undefined
                            }[]
                          | undefined
                        path?: string | undefined
                        port?: number | undefined
                        scheme?: string | undefined
                      }
                    | undefined
                  initialDelaySeconds?: number | undefined
                  periodSeconds?: number | undefined
                  successThreshold?: number | undefined
                  tcpSocket?:
                    | {
                        host?: string | undefined
                        port?: number | undefined
                      }
                    | undefined
                  timeoutSeconds?: number | undefined
                }
              | {
                  exec?:
                    | {
                        command?: string[] | undefined
                      }
                    | undefined
                  failureThreshold?: number | undefined
                  httpGet: {
                    host?: string | undefined
                    httpHeaders?:
                      | {
                          name?: string | undefined
                          value?: string | undefined
                        }[]
                      | undefined
                    path?: string | undefined
                    port?: number | undefined
                    scheme?: string | undefined
                  }
                  initialDelaySeconds?: number | undefined
                  periodSeconds?: number | undefined
                  successThreshold?: number | undefined
                  tcpSocket?:
                    | {
                        host?: string | undefined
                        port?: number | undefined
                      }
                    | undefined
                  timeoutSeconds?: number | undefined
                }
              | {
                  exec?:
                    | {
                        command?: string[] | undefined
                      }
                    | undefined
                  failureThreshold?: number | undefined
                  httpGet?:
                    | {
                        host?: string | undefined
                        httpHeaders?:
                          | {
                              name?: string | undefined
                              value?: string | undefined
                            }[]
                          | undefined
                        path?: string | undefined
                        port?: number | undefined
                        scheme?: string | undefined
                      }
                    | undefined
                  initialDelaySeconds?: number | undefined
                  periodSeconds?: number | undefined
                  successThreshold?: number | undefined
                  tcpSocket: {
                    host?: string | undefined
                    port?: number | undefined
                  }
                  timeoutSeconds?: number | undefined
                }
              | {
                  exec: {
                    command?: string[] | undefined
                  }
                  failureThreshold?: number | undefined
                  httpGet?:
                    | {
                        host?: string | undefined
                        httpHeaders?:
                          | {
                              name?: string | undefined
                              value?: string | undefined
                            }[]
                          | undefined
                        path?: string | undefined
                        port?: number | undefined
                        scheme?: string | undefined
                      }
                    | undefined
                  initialDelaySeconds?: number | undefined
                  periodSeconds?: number | undefined
                  successThreshold?: number | undefined
                  tcpSocket?:
                    | {
                        host?: string | undefined
                        port?: number | undefined
                      }
                    | undefined
                  timeoutSeconds?: number | undefined
                }
            )
          | undefined
        template?:
          | {
              address?: string | undefined
              labels?:
                | {
                    [key: string]: string
                  }
                | undefined
              locality?: string | undefined
              network?: string | undefined
              ports?:
                | {
                    [key: string]: number
                  }
                | undefined
              serviceAccount?: string | undefined
              weight?: number | undefined
            }
          | undefined
      }
    | undefined
  status?: object | undefined
}
export type IoIstioNetworkingV1Alpha3WorkloadGroupList = {
  apiVersion?: string | undefined
  items: IoIstioNetworkingV1Alpha3WorkloadGroup[]
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ListMeta | undefined
}
