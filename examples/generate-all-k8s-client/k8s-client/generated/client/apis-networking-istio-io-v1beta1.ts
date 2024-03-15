import { apiClient, type Options, type WatchExtraOptions } from '../../client'
type NoWatch<T> = Omit<T, 'watch'> & {
  watch?: false
}
export function listNetworkingIstioIoV1Beta1DestinationRuleForAllNamespaces(
  args: NoWatch<ListNetworkingIstioIoV1Beta1DestinationRuleForAllNamespacesApiArg>,
  options?: Options
): Promise<ListNetworkingIstioIoV1Beta1DestinationRuleForAllNamespacesApiResponse>
export function listNetworkingIstioIoV1Beta1DestinationRuleForAllNamespaces(
  args: ListNetworkingIstioIoV1Beta1DestinationRuleForAllNamespacesApiArg & {
    watch: true
  },
  options: Options &
    WatchExtraOptions<ListNetworkingIstioIoV1Beta1DestinationRuleForAllNamespacesApiResponse>
): Promise<void>
export function listNetworkingIstioIoV1Beta1DestinationRuleForAllNamespaces(
  args: any,
  options: any
): any {
  return apiClient<ListNetworkingIstioIoV1Beta1DestinationRuleForAllNamespacesApiResponse>(
    {
      path: `/apis/networking.istio.io/v1beta1/destinationrules`,
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
export function listNetworkingIstioIoV1Beta1GatewayForAllNamespaces(
  args: NoWatch<ListNetworkingIstioIoV1Beta1GatewayForAllNamespacesApiArg>,
  options?: Options
): Promise<ListNetworkingIstioIoV1Beta1GatewayForAllNamespacesApiResponse>
export function listNetworkingIstioIoV1Beta1GatewayForAllNamespaces(
  args: ListNetworkingIstioIoV1Beta1GatewayForAllNamespacesApiArg & {
    watch: true
  },
  options: Options &
    WatchExtraOptions<ListNetworkingIstioIoV1Beta1GatewayForAllNamespacesApiResponse>
): Promise<void>
export function listNetworkingIstioIoV1Beta1GatewayForAllNamespaces(
  args: any,
  options: any
): any {
  return apiClient<ListNetworkingIstioIoV1Beta1GatewayForAllNamespacesApiResponse>(
    {
      path: `/apis/networking.istio.io/v1beta1/gateways`,
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
export function listNetworkingIstioIoV1Beta1NamespacedDestinationRule(
  args: NoWatch<ListNetworkingIstioIoV1Beta1NamespacedDestinationRuleApiArg>,
  options?: Options
): Promise<ListNetworkingIstioIoV1Beta1NamespacedDestinationRuleApiResponse>
export function listNetworkingIstioIoV1Beta1NamespacedDestinationRule(
  args: ListNetworkingIstioIoV1Beta1NamespacedDestinationRuleApiArg & {
    watch: true
  },
  options: Options &
    WatchExtraOptions<ListNetworkingIstioIoV1Beta1NamespacedDestinationRuleApiResponse>
): Promise<void>
export function listNetworkingIstioIoV1Beta1NamespacedDestinationRule(
  args: any,
  options: any
): any {
  return apiClient<ListNetworkingIstioIoV1Beta1NamespacedDestinationRuleApiResponse>(
    {
      path: `/apis/networking.istio.io/v1beta1/namespaces/${args['namespace']}/destinationrules`,
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
export const createNetworkingIstioIoV1Beta1NamespacedDestinationRule = (
  args: CreateNetworkingIstioIoV1Beta1NamespacedDestinationRuleApiArg,
  options?: Options
) => {
  return apiClient<CreateNetworkingIstioIoV1Beta1NamespacedDestinationRuleApiResponse>(
    {
      path: `/apis/networking.istio.io/v1beta1/namespaces/${args['namespace']}/destinationrules`,
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
export function deleteNetworkingIstioIoV1Beta1CollectionNamespacedDestinationRule(
  args: NoWatch<DeleteNetworkingIstioIoV1Beta1CollectionNamespacedDestinationRuleApiArg>,
  options?: Options
): Promise<DeleteNetworkingIstioIoV1Beta1CollectionNamespacedDestinationRuleApiResponse>
export function deleteNetworkingIstioIoV1Beta1CollectionNamespacedDestinationRule(
  args: DeleteNetworkingIstioIoV1Beta1CollectionNamespacedDestinationRuleApiArg & {
    watch: true
  },
  options: Options &
    WatchExtraOptions<DeleteNetworkingIstioIoV1Beta1CollectionNamespacedDestinationRuleApiResponse>
): Promise<void>
export function deleteNetworkingIstioIoV1Beta1CollectionNamespacedDestinationRule(
  args: any,
  options: any
): any {
  return apiClient<DeleteNetworkingIstioIoV1Beta1CollectionNamespacedDestinationRuleApiResponse>(
    {
      path: `/apis/networking.istio.io/v1beta1/namespaces/${args['namespace']}/destinationrules`,
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
export const readNetworkingIstioIoV1Beta1NamespacedDestinationRule = (
  args: ReadNetworkingIstioIoV1Beta1NamespacedDestinationRuleApiArg,
  options?: Options
) => {
  return apiClient<ReadNetworkingIstioIoV1Beta1NamespacedDestinationRuleApiResponse>(
    {
      path: `/apis/networking.istio.io/v1beta1/namespaces/${args['namespace']}/destinationrules/${args.name}`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceNetworkingIstioIoV1Beta1NamespacedDestinationRule = (
  args: ReplaceNetworkingIstioIoV1Beta1NamespacedDestinationRuleApiArg,
  options?: Options
) => {
  return apiClient<ReplaceNetworkingIstioIoV1Beta1NamespacedDestinationRuleApiResponse>(
    {
      path: `/apis/networking.istio.io/v1beta1/namespaces/${args['namespace']}/destinationrules/${args.name}`,
      method: 'PUT',
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
export const deleteNetworkingIstioIoV1Beta1NamespacedDestinationRule = (
  args: DeleteNetworkingIstioIoV1Beta1NamespacedDestinationRuleApiArg,
  options?: Options
) => {
  return apiClient<DeleteNetworkingIstioIoV1Beta1NamespacedDestinationRuleApiResponse>(
    {
      path: `/apis/networking.istio.io/v1beta1/namespaces/${args['namespace']}/destinationrules/${args.name}`,
      method: 'DELETE',
      body: args.body,
      contentType: args.contentType,
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
export const patchNetworkingIstioIoV1Beta1NamespacedDestinationRule = (
  args: PatchNetworkingIstioIoV1Beta1NamespacedDestinationRuleApiArg,
  options?: Options
) => {
  return apiClient<PatchNetworkingIstioIoV1Beta1NamespacedDestinationRuleApiResponse>(
    {
      path: `/apis/networking.istio.io/v1beta1/namespaces/${args['namespace']}/destinationrules/${args.name}`,
      method: 'PATCH',
      body: args.body,
      contentType: args.contentType,
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
export const readNetworkingIstioIoV1Beta1NamespacedDestinationRuleStatus = (
  args: ReadNetworkingIstioIoV1Beta1NamespacedDestinationRuleStatusApiArg,
  options?: Options
) => {
  return apiClient<ReadNetworkingIstioIoV1Beta1NamespacedDestinationRuleStatusApiResponse>(
    {
      path: `/apis/networking.istio.io/v1beta1/namespaces/${args['namespace']}/destinationrules/${args.name}/status`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceNetworkingIstioIoV1Beta1NamespacedDestinationRuleStatus = (
  args: ReplaceNetworkingIstioIoV1Beta1NamespacedDestinationRuleStatusApiArg,
  options?: Options
) => {
  return apiClient<ReplaceNetworkingIstioIoV1Beta1NamespacedDestinationRuleStatusApiResponse>(
    {
      path: `/apis/networking.istio.io/v1beta1/namespaces/${args['namespace']}/destinationrules/${args.name}/status`,
      method: 'PUT',
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
export const patchNetworkingIstioIoV1Beta1NamespacedDestinationRuleStatus = (
  args: PatchNetworkingIstioIoV1Beta1NamespacedDestinationRuleStatusApiArg,
  options?: Options
) => {
  return apiClient<PatchNetworkingIstioIoV1Beta1NamespacedDestinationRuleStatusApiResponse>(
    {
      path: `/apis/networking.istio.io/v1beta1/namespaces/${args['namespace']}/destinationrules/${args.name}/status`,
      method: 'PATCH',
      body: args.body,
      contentType: args.contentType,
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
export function listNetworkingIstioIoV1Beta1NamespacedGateway(
  args: NoWatch<ListNetworkingIstioIoV1Beta1NamespacedGatewayApiArg>,
  options?: Options
): Promise<ListNetworkingIstioIoV1Beta1NamespacedGatewayApiResponse>
export function listNetworkingIstioIoV1Beta1NamespacedGateway(
  args: ListNetworkingIstioIoV1Beta1NamespacedGatewayApiArg & {
    watch: true
  },
  options: Options &
    WatchExtraOptions<ListNetworkingIstioIoV1Beta1NamespacedGatewayApiResponse>
): Promise<void>
export function listNetworkingIstioIoV1Beta1NamespacedGateway(
  args: any,
  options: any
): any {
  return apiClient<ListNetworkingIstioIoV1Beta1NamespacedGatewayApiResponse>(
    {
      path: `/apis/networking.istio.io/v1beta1/namespaces/${args['namespace']}/gateways`,
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
export const createNetworkingIstioIoV1Beta1NamespacedGateway = (
  args: CreateNetworkingIstioIoV1Beta1NamespacedGatewayApiArg,
  options?: Options
) => {
  return apiClient<CreateNetworkingIstioIoV1Beta1NamespacedGatewayApiResponse>(
    {
      path: `/apis/networking.istio.io/v1beta1/namespaces/${args['namespace']}/gateways`,
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
export function deleteNetworkingIstioIoV1Beta1CollectionNamespacedGateway(
  args: NoWatch<DeleteNetworkingIstioIoV1Beta1CollectionNamespacedGatewayApiArg>,
  options?: Options
): Promise<DeleteNetworkingIstioIoV1Beta1CollectionNamespacedGatewayApiResponse>
export function deleteNetworkingIstioIoV1Beta1CollectionNamespacedGateway(
  args: DeleteNetworkingIstioIoV1Beta1CollectionNamespacedGatewayApiArg & {
    watch: true
  },
  options: Options &
    WatchExtraOptions<DeleteNetworkingIstioIoV1Beta1CollectionNamespacedGatewayApiResponse>
): Promise<void>
export function deleteNetworkingIstioIoV1Beta1CollectionNamespacedGateway(
  args: any,
  options: any
): any {
  return apiClient<DeleteNetworkingIstioIoV1Beta1CollectionNamespacedGatewayApiResponse>(
    {
      path: `/apis/networking.istio.io/v1beta1/namespaces/${args['namespace']}/gateways`,
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
export const readNetworkingIstioIoV1Beta1NamespacedGateway = (
  args: ReadNetworkingIstioIoV1Beta1NamespacedGatewayApiArg,
  options?: Options
) => {
  return apiClient<ReadNetworkingIstioIoV1Beta1NamespacedGatewayApiResponse>(
    {
      path: `/apis/networking.istio.io/v1beta1/namespaces/${args['namespace']}/gateways/${args.name}`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceNetworkingIstioIoV1Beta1NamespacedGateway = (
  args: ReplaceNetworkingIstioIoV1Beta1NamespacedGatewayApiArg,
  options?: Options
) => {
  return apiClient<ReplaceNetworkingIstioIoV1Beta1NamespacedGatewayApiResponse>(
    {
      path: `/apis/networking.istio.io/v1beta1/namespaces/${args['namespace']}/gateways/${args.name}`,
      method: 'PUT',
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
export const deleteNetworkingIstioIoV1Beta1NamespacedGateway = (
  args: DeleteNetworkingIstioIoV1Beta1NamespacedGatewayApiArg,
  options?: Options
) => {
  return apiClient<DeleteNetworkingIstioIoV1Beta1NamespacedGatewayApiResponse>(
    {
      path: `/apis/networking.istio.io/v1beta1/namespaces/${args['namespace']}/gateways/${args.name}`,
      method: 'DELETE',
      body: args.body,
      contentType: args.contentType,
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
export const patchNetworkingIstioIoV1Beta1NamespacedGateway = (
  args: PatchNetworkingIstioIoV1Beta1NamespacedGatewayApiArg,
  options?: Options
) => {
  return apiClient<PatchNetworkingIstioIoV1Beta1NamespacedGatewayApiResponse>(
    {
      path: `/apis/networking.istio.io/v1beta1/namespaces/${args['namespace']}/gateways/${args.name}`,
      method: 'PATCH',
      body: args.body,
      contentType: args.contentType,
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
export const readNetworkingIstioIoV1Beta1NamespacedGatewayStatus = (
  args: ReadNetworkingIstioIoV1Beta1NamespacedGatewayStatusApiArg,
  options?: Options
) => {
  return apiClient<ReadNetworkingIstioIoV1Beta1NamespacedGatewayStatusApiResponse>(
    {
      path: `/apis/networking.istio.io/v1beta1/namespaces/${args['namespace']}/gateways/${args.name}/status`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceNetworkingIstioIoV1Beta1NamespacedGatewayStatus = (
  args: ReplaceNetworkingIstioIoV1Beta1NamespacedGatewayStatusApiArg,
  options?: Options
) => {
  return apiClient<ReplaceNetworkingIstioIoV1Beta1NamespacedGatewayStatusApiResponse>(
    {
      path: `/apis/networking.istio.io/v1beta1/namespaces/${args['namespace']}/gateways/${args.name}/status`,
      method: 'PUT',
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
export const patchNetworkingIstioIoV1Beta1NamespacedGatewayStatus = (
  args: PatchNetworkingIstioIoV1Beta1NamespacedGatewayStatusApiArg,
  options?: Options
) => {
  return apiClient<PatchNetworkingIstioIoV1Beta1NamespacedGatewayStatusApiResponse>(
    {
      path: `/apis/networking.istio.io/v1beta1/namespaces/${args['namespace']}/gateways/${args.name}/status`,
      method: 'PATCH',
      body: args.body,
      contentType: args.contentType,
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
export function listNetworkingIstioIoV1Beta1NamespacedServiceEntry(
  args: NoWatch<ListNetworkingIstioIoV1Beta1NamespacedServiceEntryApiArg>,
  options?: Options
): Promise<ListNetworkingIstioIoV1Beta1NamespacedServiceEntryApiResponse>
export function listNetworkingIstioIoV1Beta1NamespacedServiceEntry(
  args: ListNetworkingIstioIoV1Beta1NamespacedServiceEntryApiArg & {
    watch: true
  },
  options: Options &
    WatchExtraOptions<ListNetworkingIstioIoV1Beta1NamespacedServiceEntryApiResponse>
): Promise<void>
export function listNetworkingIstioIoV1Beta1NamespacedServiceEntry(
  args: any,
  options: any
): any {
  return apiClient<ListNetworkingIstioIoV1Beta1NamespacedServiceEntryApiResponse>(
    {
      path: `/apis/networking.istio.io/v1beta1/namespaces/${args['namespace']}/serviceentries`,
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
export const createNetworkingIstioIoV1Beta1NamespacedServiceEntry = (
  args: CreateNetworkingIstioIoV1Beta1NamespacedServiceEntryApiArg,
  options?: Options
) => {
  return apiClient<CreateNetworkingIstioIoV1Beta1NamespacedServiceEntryApiResponse>(
    {
      path: `/apis/networking.istio.io/v1beta1/namespaces/${args['namespace']}/serviceentries`,
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
export function deleteNetworkingIstioIoV1Beta1CollectionNamespacedServiceEntry(
  args: NoWatch<DeleteNetworkingIstioIoV1Beta1CollectionNamespacedServiceEntryApiArg>,
  options?: Options
): Promise<DeleteNetworkingIstioIoV1Beta1CollectionNamespacedServiceEntryApiResponse>
export function deleteNetworkingIstioIoV1Beta1CollectionNamespacedServiceEntry(
  args: DeleteNetworkingIstioIoV1Beta1CollectionNamespacedServiceEntryApiArg & {
    watch: true
  },
  options: Options &
    WatchExtraOptions<DeleteNetworkingIstioIoV1Beta1CollectionNamespacedServiceEntryApiResponse>
): Promise<void>
export function deleteNetworkingIstioIoV1Beta1CollectionNamespacedServiceEntry(
  args: any,
  options: any
): any {
  return apiClient<DeleteNetworkingIstioIoV1Beta1CollectionNamespacedServiceEntryApiResponse>(
    {
      path: `/apis/networking.istio.io/v1beta1/namespaces/${args['namespace']}/serviceentries`,
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
export const readNetworkingIstioIoV1Beta1NamespacedServiceEntry = (
  args: ReadNetworkingIstioIoV1Beta1NamespacedServiceEntryApiArg,
  options?: Options
) => {
  return apiClient<ReadNetworkingIstioIoV1Beta1NamespacedServiceEntryApiResponse>(
    {
      path: `/apis/networking.istio.io/v1beta1/namespaces/${args['namespace']}/serviceentries/${args.name}`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceNetworkingIstioIoV1Beta1NamespacedServiceEntry = (
  args: ReplaceNetworkingIstioIoV1Beta1NamespacedServiceEntryApiArg,
  options?: Options
) => {
  return apiClient<ReplaceNetworkingIstioIoV1Beta1NamespacedServiceEntryApiResponse>(
    {
      path: `/apis/networking.istio.io/v1beta1/namespaces/${args['namespace']}/serviceentries/${args.name}`,
      method: 'PUT',
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
export const deleteNetworkingIstioIoV1Beta1NamespacedServiceEntry = (
  args: DeleteNetworkingIstioIoV1Beta1NamespacedServiceEntryApiArg,
  options?: Options
) => {
  return apiClient<DeleteNetworkingIstioIoV1Beta1NamespacedServiceEntryApiResponse>(
    {
      path: `/apis/networking.istio.io/v1beta1/namespaces/${args['namespace']}/serviceentries/${args.name}`,
      method: 'DELETE',
      body: args.body,
      contentType: args.contentType,
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
export const patchNetworkingIstioIoV1Beta1NamespacedServiceEntry = (
  args: PatchNetworkingIstioIoV1Beta1NamespacedServiceEntryApiArg,
  options?: Options
) => {
  return apiClient<PatchNetworkingIstioIoV1Beta1NamespacedServiceEntryApiResponse>(
    {
      path: `/apis/networking.istio.io/v1beta1/namespaces/${args['namespace']}/serviceentries/${args.name}`,
      method: 'PATCH',
      body: args.body,
      contentType: args.contentType,
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
export const readNetworkingIstioIoV1Beta1NamespacedServiceEntryStatus = (
  args: ReadNetworkingIstioIoV1Beta1NamespacedServiceEntryStatusApiArg,
  options?: Options
) => {
  return apiClient<ReadNetworkingIstioIoV1Beta1NamespacedServiceEntryStatusApiResponse>(
    {
      path: `/apis/networking.istio.io/v1beta1/namespaces/${args['namespace']}/serviceentries/${args.name}/status`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceNetworkingIstioIoV1Beta1NamespacedServiceEntryStatus = (
  args: ReplaceNetworkingIstioIoV1Beta1NamespacedServiceEntryStatusApiArg,
  options?: Options
) => {
  return apiClient<ReplaceNetworkingIstioIoV1Beta1NamespacedServiceEntryStatusApiResponse>(
    {
      path: `/apis/networking.istio.io/v1beta1/namespaces/${args['namespace']}/serviceentries/${args.name}/status`,
      method: 'PUT',
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
export const patchNetworkingIstioIoV1Beta1NamespacedServiceEntryStatus = (
  args: PatchNetworkingIstioIoV1Beta1NamespacedServiceEntryStatusApiArg,
  options?: Options
) => {
  return apiClient<PatchNetworkingIstioIoV1Beta1NamespacedServiceEntryStatusApiResponse>(
    {
      path: `/apis/networking.istio.io/v1beta1/namespaces/${args['namespace']}/serviceentries/${args.name}/status`,
      method: 'PATCH',
      body: args.body,
      contentType: args.contentType,
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
export function listNetworkingIstioIoV1Beta1NamespacedSidecar(
  args: NoWatch<ListNetworkingIstioIoV1Beta1NamespacedSidecarApiArg>,
  options?: Options
): Promise<ListNetworkingIstioIoV1Beta1NamespacedSidecarApiResponse>
export function listNetworkingIstioIoV1Beta1NamespacedSidecar(
  args: ListNetworkingIstioIoV1Beta1NamespacedSidecarApiArg & {
    watch: true
  },
  options: Options &
    WatchExtraOptions<ListNetworkingIstioIoV1Beta1NamespacedSidecarApiResponse>
): Promise<void>
export function listNetworkingIstioIoV1Beta1NamespacedSidecar(
  args: any,
  options: any
): any {
  return apiClient<ListNetworkingIstioIoV1Beta1NamespacedSidecarApiResponse>(
    {
      path: `/apis/networking.istio.io/v1beta1/namespaces/${args['namespace']}/sidecars`,
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
export const createNetworkingIstioIoV1Beta1NamespacedSidecar = (
  args: CreateNetworkingIstioIoV1Beta1NamespacedSidecarApiArg,
  options?: Options
) => {
  return apiClient<CreateNetworkingIstioIoV1Beta1NamespacedSidecarApiResponse>(
    {
      path: `/apis/networking.istio.io/v1beta1/namespaces/${args['namespace']}/sidecars`,
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
export function deleteNetworkingIstioIoV1Beta1CollectionNamespacedSidecar(
  args: NoWatch<DeleteNetworkingIstioIoV1Beta1CollectionNamespacedSidecarApiArg>,
  options?: Options
): Promise<DeleteNetworkingIstioIoV1Beta1CollectionNamespacedSidecarApiResponse>
export function deleteNetworkingIstioIoV1Beta1CollectionNamespacedSidecar(
  args: DeleteNetworkingIstioIoV1Beta1CollectionNamespacedSidecarApiArg & {
    watch: true
  },
  options: Options &
    WatchExtraOptions<DeleteNetworkingIstioIoV1Beta1CollectionNamespacedSidecarApiResponse>
): Promise<void>
export function deleteNetworkingIstioIoV1Beta1CollectionNamespacedSidecar(
  args: any,
  options: any
): any {
  return apiClient<DeleteNetworkingIstioIoV1Beta1CollectionNamespacedSidecarApiResponse>(
    {
      path: `/apis/networking.istio.io/v1beta1/namespaces/${args['namespace']}/sidecars`,
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
export const readNetworkingIstioIoV1Beta1NamespacedSidecar = (
  args: ReadNetworkingIstioIoV1Beta1NamespacedSidecarApiArg,
  options?: Options
) => {
  return apiClient<ReadNetworkingIstioIoV1Beta1NamespacedSidecarApiResponse>(
    {
      path: `/apis/networking.istio.io/v1beta1/namespaces/${args['namespace']}/sidecars/${args.name}`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceNetworkingIstioIoV1Beta1NamespacedSidecar = (
  args: ReplaceNetworkingIstioIoV1Beta1NamespacedSidecarApiArg,
  options?: Options
) => {
  return apiClient<ReplaceNetworkingIstioIoV1Beta1NamespacedSidecarApiResponse>(
    {
      path: `/apis/networking.istio.io/v1beta1/namespaces/${args['namespace']}/sidecars/${args.name}`,
      method: 'PUT',
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
export const deleteNetworkingIstioIoV1Beta1NamespacedSidecar = (
  args: DeleteNetworkingIstioIoV1Beta1NamespacedSidecarApiArg,
  options?: Options
) => {
  return apiClient<DeleteNetworkingIstioIoV1Beta1NamespacedSidecarApiResponse>(
    {
      path: `/apis/networking.istio.io/v1beta1/namespaces/${args['namespace']}/sidecars/${args.name}`,
      method: 'DELETE',
      body: args.body,
      contentType: args.contentType,
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
export const patchNetworkingIstioIoV1Beta1NamespacedSidecar = (
  args: PatchNetworkingIstioIoV1Beta1NamespacedSidecarApiArg,
  options?: Options
) => {
  return apiClient<PatchNetworkingIstioIoV1Beta1NamespacedSidecarApiResponse>(
    {
      path: `/apis/networking.istio.io/v1beta1/namespaces/${args['namespace']}/sidecars/${args.name}`,
      method: 'PATCH',
      body: args.body,
      contentType: args.contentType,
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
export const readNetworkingIstioIoV1Beta1NamespacedSidecarStatus = (
  args: ReadNetworkingIstioIoV1Beta1NamespacedSidecarStatusApiArg,
  options?: Options
) => {
  return apiClient<ReadNetworkingIstioIoV1Beta1NamespacedSidecarStatusApiResponse>(
    {
      path: `/apis/networking.istio.io/v1beta1/namespaces/${args['namespace']}/sidecars/${args.name}/status`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceNetworkingIstioIoV1Beta1NamespacedSidecarStatus = (
  args: ReplaceNetworkingIstioIoV1Beta1NamespacedSidecarStatusApiArg,
  options?: Options
) => {
  return apiClient<ReplaceNetworkingIstioIoV1Beta1NamespacedSidecarStatusApiResponse>(
    {
      path: `/apis/networking.istio.io/v1beta1/namespaces/${args['namespace']}/sidecars/${args.name}/status`,
      method: 'PUT',
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
export const patchNetworkingIstioIoV1Beta1NamespacedSidecarStatus = (
  args: PatchNetworkingIstioIoV1Beta1NamespacedSidecarStatusApiArg,
  options?: Options
) => {
  return apiClient<PatchNetworkingIstioIoV1Beta1NamespacedSidecarStatusApiResponse>(
    {
      path: `/apis/networking.istio.io/v1beta1/namespaces/${args['namespace']}/sidecars/${args.name}/status`,
      method: 'PATCH',
      body: args.body,
      contentType: args.contentType,
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
export function listNetworkingIstioIoV1Beta1NamespacedVirtualService(
  args: NoWatch<ListNetworkingIstioIoV1Beta1NamespacedVirtualServiceApiArg>,
  options?: Options
): Promise<ListNetworkingIstioIoV1Beta1NamespacedVirtualServiceApiResponse>
export function listNetworkingIstioIoV1Beta1NamespacedVirtualService(
  args: ListNetworkingIstioIoV1Beta1NamespacedVirtualServiceApiArg & {
    watch: true
  },
  options: Options &
    WatchExtraOptions<ListNetworkingIstioIoV1Beta1NamespacedVirtualServiceApiResponse>
): Promise<void>
export function listNetworkingIstioIoV1Beta1NamespacedVirtualService(
  args: any,
  options: any
): any {
  return apiClient<ListNetworkingIstioIoV1Beta1NamespacedVirtualServiceApiResponse>(
    {
      path: `/apis/networking.istio.io/v1beta1/namespaces/${args['namespace']}/virtualservices`,
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
export const createNetworkingIstioIoV1Beta1NamespacedVirtualService = (
  args: CreateNetworkingIstioIoV1Beta1NamespacedVirtualServiceApiArg,
  options?: Options
) => {
  return apiClient<CreateNetworkingIstioIoV1Beta1NamespacedVirtualServiceApiResponse>(
    {
      path: `/apis/networking.istio.io/v1beta1/namespaces/${args['namespace']}/virtualservices`,
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
export function deleteNetworkingIstioIoV1Beta1CollectionNamespacedVirtualService(
  args: NoWatch<DeleteNetworkingIstioIoV1Beta1CollectionNamespacedVirtualServiceApiArg>,
  options?: Options
): Promise<DeleteNetworkingIstioIoV1Beta1CollectionNamespacedVirtualServiceApiResponse>
export function deleteNetworkingIstioIoV1Beta1CollectionNamespacedVirtualService(
  args: DeleteNetworkingIstioIoV1Beta1CollectionNamespacedVirtualServiceApiArg & {
    watch: true
  },
  options: Options &
    WatchExtraOptions<DeleteNetworkingIstioIoV1Beta1CollectionNamespacedVirtualServiceApiResponse>
): Promise<void>
export function deleteNetworkingIstioIoV1Beta1CollectionNamespacedVirtualService(
  args: any,
  options: any
): any {
  return apiClient<DeleteNetworkingIstioIoV1Beta1CollectionNamespacedVirtualServiceApiResponse>(
    {
      path: `/apis/networking.istio.io/v1beta1/namespaces/${args['namespace']}/virtualservices`,
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
export const readNetworkingIstioIoV1Beta1NamespacedVirtualService = (
  args: ReadNetworkingIstioIoV1Beta1NamespacedVirtualServiceApiArg,
  options?: Options
) => {
  return apiClient<ReadNetworkingIstioIoV1Beta1NamespacedVirtualServiceApiResponse>(
    {
      path: `/apis/networking.istio.io/v1beta1/namespaces/${args['namespace']}/virtualservices/${args.name}`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceNetworkingIstioIoV1Beta1NamespacedVirtualService = (
  args: ReplaceNetworkingIstioIoV1Beta1NamespacedVirtualServiceApiArg,
  options?: Options
) => {
  return apiClient<ReplaceNetworkingIstioIoV1Beta1NamespacedVirtualServiceApiResponse>(
    {
      path: `/apis/networking.istio.io/v1beta1/namespaces/${args['namespace']}/virtualservices/${args.name}`,
      method: 'PUT',
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
export const deleteNetworkingIstioIoV1Beta1NamespacedVirtualService = (
  args: DeleteNetworkingIstioIoV1Beta1NamespacedVirtualServiceApiArg,
  options?: Options
) => {
  return apiClient<DeleteNetworkingIstioIoV1Beta1NamespacedVirtualServiceApiResponse>(
    {
      path: `/apis/networking.istio.io/v1beta1/namespaces/${args['namespace']}/virtualservices/${args.name}`,
      method: 'DELETE',
      body: args.body,
      contentType: args.contentType,
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
export const patchNetworkingIstioIoV1Beta1NamespacedVirtualService = (
  args: PatchNetworkingIstioIoV1Beta1NamespacedVirtualServiceApiArg,
  options?: Options
) => {
  return apiClient<PatchNetworkingIstioIoV1Beta1NamespacedVirtualServiceApiResponse>(
    {
      path: `/apis/networking.istio.io/v1beta1/namespaces/${args['namespace']}/virtualservices/${args.name}`,
      method: 'PATCH',
      body: args.body,
      contentType: args.contentType,
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
export const readNetworkingIstioIoV1Beta1NamespacedVirtualServiceStatus = (
  args: ReadNetworkingIstioIoV1Beta1NamespacedVirtualServiceStatusApiArg,
  options?: Options
) => {
  return apiClient<ReadNetworkingIstioIoV1Beta1NamespacedVirtualServiceStatusApiResponse>(
    {
      path: `/apis/networking.istio.io/v1beta1/namespaces/${args['namespace']}/virtualservices/${args.name}/status`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceNetworkingIstioIoV1Beta1NamespacedVirtualServiceStatus = (
  args: ReplaceNetworkingIstioIoV1Beta1NamespacedVirtualServiceStatusApiArg,
  options?: Options
) => {
  return apiClient<ReplaceNetworkingIstioIoV1Beta1NamespacedVirtualServiceStatusApiResponse>(
    {
      path: `/apis/networking.istio.io/v1beta1/namespaces/${args['namespace']}/virtualservices/${args.name}/status`,
      method: 'PUT',
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
export const patchNetworkingIstioIoV1Beta1NamespacedVirtualServiceStatus = (
  args: PatchNetworkingIstioIoV1Beta1NamespacedVirtualServiceStatusApiArg,
  options?: Options
) => {
  return apiClient<PatchNetworkingIstioIoV1Beta1NamespacedVirtualServiceStatusApiResponse>(
    {
      path: `/apis/networking.istio.io/v1beta1/namespaces/${args['namespace']}/virtualservices/${args.name}/status`,
      method: 'PATCH',
      body: args.body,
      contentType: args.contentType,
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
export function listNetworkingIstioIoV1Beta1NamespacedWorkloadEntry(
  args: NoWatch<ListNetworkingIstioIoV1Beta1NamespacedWorkloadEntryApiArg>,
  options?: Options
): Promise<ListNetworkingIstioIoV1Beta1NamespacedWorkloadEntryApiResponse>
export function listNetworkingIstioIoV1Beta1NamespacedWorkloadEntry(
  args: ListNetworkingIstioIoV1Beta1NamespacedWorkloadEntryApiArg & {
    watch: true
  },
  options: Options &
    WatchExtraOptions<ListNetworkingIstioIoV1Beta1NamespacedWorkloadEntryApiResponse>
): Promise<void>
export function listNetworkingIstioIoV1Beta1NamespacedWorkloadEntry(
  args: any,
  options: any
): any {
  return apiClient<ListNetworkingIstioIoV1Beta1NamespacedWorkloadEntryApiResponse>(
    {
      path: `/apis/networking.istio.io/v1beta1/namespaces/${args['namespace']}/workloadentries`,
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
export const createNetworkingIstioIoV1Beta1NamespacedWorkloadEntry = (
  args: CreateNetworkingIstioIoV1Beta1NamespacedWorkloadEntryApiArg,
  options?: Options
) => {
  return apiClient<CreateNetworkingIstioIoV1Beta1NamespacedWorkloadEntryApiResponse>(
    {
      path: `/apis/networking.istio.io/v1beta1/namespaces/${args['namespace']}/workloadentries`,
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
export function deleteNetworkingIstioIoV1Beta1CollectionNamespacedWorkloadEntry(
  args: NoWatch<DeleteNetworkingIstioIoV1Beta1CollectionNamespacedWorkloadEntryApiArg>,
  options?: Options
): Promise<DeleteNetworkingIstioIoV1Beta1CollectionNamespacedWorkloadEntryApiResponse>
export function deleteNetworkingIstioIoV1Beta1CollectionNamespacedWorkloadEntry(
  args: DeleteNetworkingIstioIoV1Beta1CollectionNamespacedWorkloadEntryApiArg & {
    watch: true
  },
  options: Options &
    WatchExtraOptions<DeleteNetworkingIstioIoV1Beta1CollectionNamespacedWorkloadEntryApiResponse>
): Promise<void>
export function deleteNetworkingIstioIoV1Beta1CollectionNamespacedWorkloadEntry(
  args: any,
  options: any
): any {
  return apiClient<DeleteNetworkingIstioIoV1Beta1CollectionNamespacedWorkloadEntryApiResponse>(
    {
      path: `/apis/networking.istio.io/v1beta1/namespaces/${args['namespace']}/workloadentries`,
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
export const readNetworkingIstioIoV1Beta1NamespacedWorkloadEntry = (
  args: ReadNetworkingIstioIoV1Beta1NamespacedWorkloadEntryApiArg,
  options?: Options
) => {
  return apiClient<ReadNetworkingIstioIoV1Beta1NamespacedWorkloadEntryApiResponse>(
    {
      path: `/apis/networking.istio.io/v1beta1/namespaces/${args['namespace']}/workloadentries/${args.name}`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceNetworkingIstioIoV1Beta1NamespacedWorkloadEntry = (
  args: ReplaceNetworkingIstioIoV1Beta1NamespacedWorkloadEntryApiArg,
  options?: Options
) => {
  return apiClient<ReplaceNetworkingIstioIoV1Beta1NamespacedWorkloadEntryApiResponse>(
    {
      path: `/apis/networking.istio.io/v1beta1/namespaces/${args['namespace']}/workloadentries/${args.name}`,
      method: 'PUT',
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
export const deleteNetworkingIstioIoV1Beta1NamespacedWorkloadEntry = (
  args: DeleteNetworkingIstioIoV1Beta1NamespacedWorkloadEntryApiArg,
  options?: Options
) => {
  return apiClient<DeleteNetworkingIstioIoV1Beta1NamespacedWorkloadEntryApiResponse>(
    {
      path: `/apis/networking.istio.io/v1beta1/namespaces/${args['namespace']}/workloadentries/${args.name}`,
      method: 'DELETE',
      body: args.body,
      contentType: args.contentType,
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
export const patchNetworkingIstioIoV1Beta1NamespacedWorkloadEntry = (
  args: PatchNetworkingIstioIoV1Beta1NamespacedWorkloadEntryApiArg,
  options?: Options
) => {
  return apiClient<PatchNetworkingIstioIoV1Beta1NamespacedWorkloadEntryApiResponse>(
    {
      path: `/apis/networking.istio.io/v1beta1/namespaces/${args['namespace']}/workloadentries/${args.name}`,
      method: 'PATCH',
      body: args.body,
      contentType: args.contentType,
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
export const readNetworkingIstioIoV1Beta1NamespacedWorkloadEntryStatus = (
  args: ReadNetworkingIstioIoV1Beta1NamespacedWorkloadEntryStatusApiArg,
  options?: Options
) => {
  return apiClient<ReadNetworkingIstioIoV1Beta1NamespacedWorkloadEntryStatusApiResponse>(
    {
      path: `/apis/networking.istio.io/v1beta1/namespaces/${args['namespace']}/workloadentries/${args.name}/status`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceNetworkingIstioIoV1Beta1NamespacedWorkloadEntryStatus = (
  args: ReplaceNetworkingIstioIoV1Beta1NamespacedWorkloadEntryStatusApiArg,
  options?: Options
) => {
  return apiClient<ReplaceNetworkingIstioIoV1Beta1NamespacedWorkloadEntryStatusApiResponse>(
    {
      path: `/apis/networking.istio.io/v1beta1/namespaces/${args['namespace']}/workloadentries/${args.name}/status`,
      method: 'PUT',
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
export const patchNetworkingIstioIoV1Beta1NamespacedWorkloadEntryStatus = (
  args: PatchNetworkingIstioIoV1Beta1NamespacedWorkloadEntryStatusApiArg,
  options?: Options
) => {
  return apiClient<PatchNetworkingIstioIoV1Beta1NamespacedWorkloadEntryStatusApiResponse>(
    {
      path: `/apis/networking.istio.io/v1beta1/namespaces/${args['namespace']}/workloadentries/${args.name}/status`,
      method: 'PATCH',
      body: args.body,
      contentType: args.contentType,
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
export function listNetworkingIstioIoV1Beta1ServiceEntryForAllNamespaces(
  args: NoWatch<ListNetworkingIstioIoV1Beta1ServiceEntryForAllNamespacesApiArg>,
  options?: Options
): Promise<ListNetworkingIstioIoV1Beta1ServiceEntryForAllNamespacesApiResponse>
export function listNetworkingIstioIoV1Beta1ServiceEntryForAllNamespaces(
  args: ListNetworkingIstioIoV1Beta1ServiceEntryForAllNamespacesApiArg & {
    watch: true
  },
  options: Options &
    WatchExtraOptions<ListNetworkingIstioIoV1Beta1ServiceEntryForAllNamespacesApiResponse>
): Promise<void>
export function listNetworkingIstioIoV1Beta1ServiceEntryForAllNamespaces(
  args: any,
  options: any
): any {
  return apiClient<ListNetworkingIstioIoV1Beta1ServiceEntryForAllNamespacesApiResponse>(
    {
      path: `/apis/networking.istio.io/v1beta1/serviceentries`,
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
export function listNetworkingIstioIoV1Beta1SidecarForAllNamespaces(
  args: NoWatch<ListNetworkingIstioIoV1Beta1SidecarForAllNamespacesApiArg>,
  options?: Options
): Promise<ListNetworkingIstioIoV1Beta1SidecarForAllNamespacesApiResponse>
export function listNetworkingIstioIoV1Beta1SidecarForAllNamespaces(
  args: ListNetworkingIstioIoV1Beta1SidecarForAllNamespacesApiArg & {
    watch: true
  },
  options: Options &
    WatchExtraOptions<ListNetworkingIstioIoV1Beta1SidecarForAllNamespacesApiResponse>
): Promise<void>
export function listNetworkingIstioIoV1Beta1SidecarForAllNamespaces(
  args: any,
  options: any
): any {
  return apiClient<ListNetworkingIstioIoV1Beta1SidecarForAllNamespacesApiResponse>(
    {
      path: `/apis/networking.istio.io/v1beta1/sidecars`,
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
export function listNetworkingIstioIoV1Beta1VirtualServiceForAllNamespaces(
  args: NoWatch<ListNetworkingIstioIoV1Beta1VirtualServiceForAllNamespacesApiArg>,
  options?: Options
): Promise<ListNetworkingIstioIoV1Beta1VirtualServiceForAllNamespacesApiResponse>
export function listNetworkingIstioIoV1Beta1VirtualServiceForAllNamespaces(
  args: ListNetworkingIstioIoV1Beta1VirtualServiceForAllNamespacesApiArg & {
    watch: true
  },
  options: Options &
    WatchExtraOptions<ListNetworkingIstioIoV1Beta1VirtualServiceForAllNamespacesApiResponse>
): Promise<void>
export function listNetworkingIstioIoV1Beta1VirtualServiceForAllNamespaces(
  args: any,
  options: any
): any {
  return apiClient<ListNetworkingIstioIoV1Beta1VirtualServiceForAllNamespacesApiResponse>(
    {
      path: `/apis/networking.istio.io/v1beta1/virtualservices`,
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
export function listNetworkingIstioIoV1Beta1WorkloadEntryForAllNamespaces(
  args: NoWatch<ListNetworkingIstioIoV1Beta1WorkloadEntryForAllNamespacesApiArg>,
  options?: Options
): Promise<ListNetworkingIstioIoV1Beta1WorkloadEntryForAllNamespacesApiResponse>
export function listNetworkingIstioIoV1Beta1WorkloadEntryForAllNamespaces(
  args: ListNetworkingIstioIoV1Beta1WorkloadEntryForAllNamespacesApiArg & {
    watch: true
  },
  options: Options &
    WatchExtraOptions<ListNetworkingIstioIoV1Beta1WorkloadEntryForAllNamespacesApiResponse>
): Promise<void>
export function listNetworkingIstioIoV1Beta1WorkloadEntryForAllNamespaces(
  args: any,
  options: any
): any {
  return apiClient<ListNetworkingIstioIoV1Beta1WorkloadEntryForAllNamespacesApiResponse>(
    {
      path: `/apis/networking.istio.io/v1beta1/workloadentries`,
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
export type ListNetworkingIstioIoV1Beta1DestinationRuleForAllNamespacesApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Beta1DestinationRuleList
export type ListNetworkingIstioIoV1Beta1DestinationRuleForAllNamespacesApiArg =
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
    /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
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
export type ListNetworkingIstioIoV1Beta1GatewayForAllNamespacesApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Beta1GatewayList
export type ListNetworkingIstioIoV1Beta1GatewayForAllNamespacesApiArg = {
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
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
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
export type ListNetworkingIstioIoV1Beta1NamespacedDestinationRuleApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Beta1DestinationRuleList
export type ListNetworkingIstioIoV1Beta1NamespacedDestinationRuleApiArg = {
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
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
export type CreateNetworkingIstioIoV1Beta1NamespacedDestinationRuleApiResponse =
  /** status 200 OK */
  | IoIstioNetworkingV1Beta1DestinationRule
  | /** status 201 Created */ IoIstioNetworkingV1Beta1DestinationRule
  | /** status 202 Accepted */ IoIstioNetworkingV1Beta1DestinationRule
export type CreateNetworkingIstioIoV1Beta1NamespacedDestinationRuleApiArg = {
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
} & (
  | {
      contentType: 'application/json'
      body: IoIstioNetworkingV1Beta1DestinationRule
    }
  | {
      contentType: 'application/yaml'
      body: IoIstioNetworkingV1Beta1DestinationRule
    }
)
export type DeleteNetworkingIstioIoV1Beta1CollectionNamespacedDestinationRuleApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteNetworkingIstioIoV1Beta1CollectionNamespacedDestinationRuleApiArg =
  {
    /** object name and auth scope, such as for teams and projects */
    namespace: string
    /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
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
export type ReadNetworkingIstioIoV1Beta1NamespacedDestinationRuleApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Beta1DestinationRule
export type ReadNetworkingIstioIoV1Beta1NamespacedDestinationRuleApiArg = {
  /** name of the DestinationRule */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceNetworkingIstioIoV1Beta1NamespacedDestinationRuleApiResponse =
  /** status 200 OK */
  | IoIstioNetworkingV1Beta1DestinationRule
  | /** status 201 Created */ IoIstioNetworkingV1Beta1DestinationRule
export type ReplaceNetworkingIstioIoV1Beta1NamespacedDestinationRuleApiArg = {
  /** name of the DestinationRule */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
} & (
  | {
      contentType: 'application/json'
      body: IoIstioNetworkingV1Beta1DestinationRule
    }
  | {
      contentType: 'application/yaml'
      body: IoIstioNetworkingV1Beta1DestinationRule
    }
)
export type DeleteNetworkingIstioIoV1Beta1NamespacedDestinationRuleApiResponse =
  /** status 200 OK */
  | IoK8SApimachineryPkgApisMetaV1Status
  | /** status 202 Accepted */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteNetworkingIstioIoV1Beta1NamespacedDestinationRuleApiArg = {
  /** name of the DestinationRule */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. */
  gracePeriodSeconds?: number
  /** Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both. */
  orphanDependents?: boolean
  /** Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground. */
  propagationPolicy?: string
} & (
  | {
      contentType: 'application/json'
      body: IoK8SApimachineryPkgApisMetaV1DeleteOptions
    }
  | {
      contentType: 'application/yaml'
      body: IoK8SApimachineryPkgApisMetaV1DeleteOptions
    }
)
export type PatchNetworkingIstioIoV1Beta1NamespacedDestinationRuleApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Beta1DestinationRule
export type PatchNetworkingIstioIoV1Beta1NamespacedDestinationRuleApiArg = {
  /** name of the DestinationRule */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
  /** Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. */
  force?: boolean
} & (
  | {
      contentType: 'application/apply-patch+yaml'
      body: IoIstioNetworkingV1Beta1DestinationRule
    }
  | {
      contentType: 'application/json-patch+json'
      body: JsonPatchOperations
    }
  | {
      contentType: 'application/merge-patch+json'
      body: IoIstioNetworkingV1Beta1DestinationRule
    }
)
export type ReadNetworkingIstioIoV1Beta1NamespacedDestinationRuleStatusApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Beta1DestinationRule
export type ReadNetworkingIstioIoV1Beta1NamespacedDestinationRuleStatusApiArg =
  {
    /** name of the DestinationRule */
    name: string
    /** object name and auth scope, such as for teams and projects */
    namespace: string
    /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
    pretty?: string
    /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
    resourceVersion?: string
  }
export type ReplaceNetworkingIstioIoV1Beta1NamespacedDestinationRuleStatusApiResponse =
  /** status 200 OK */
  | IoIstioNetworkingV1Beta1DestinationRule
  | /** status 201 Created */ IoIstioNetworkingV1Beta1DestinationRule
export type ReplaceNetworkingIstioIoV1Beta1NamespacedDestinationRuleStatusApiArg =
  {
    /** name of the DestinationRule */
    name: string
    /** object name and auth scope, such as for teams and projects */
    namespace: string
    /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
    pretty?: string
    /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
    dryRun?: string
    /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
    fieldManager?: string
    /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
    fieldValidation?: string
  } & (
    | {
        contentType: 'application/json'
        body: IoIstioNetworkingV1Beta1DestinationRule
      }
    | {
        contentType: 'application/yaml'
        body: IoIstioNetworkingV1Beta1DestinationRule
      }
  )
export type PatchNetworkingIstioIoV1Beta1NamespacedDestinationRuleStatusApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Beta1DestinationRule
export type PatchNetworkingIstioIoV1Beta1NamespacedDestinationRuleStatusApiArg =
  {
    /** name of the DestinationRule */
    name: string
    /** object name and auth scope, such as for teams and projects */
    namespace: string
    /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
    pretty?: string
    /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
    dryRun?: string
    /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). */
    fieldManager?: string
    /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
    fieldValidation?: string
    /** Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. */
    force?: boolean
  } & (
    | {
        contentType: 'application/apply-patch+yaml'
        body: IoIstioNetworkingV1Beta1DestinationRule
      }
    | {
        contentType: 'application/json-patch+json'
        body: JsonPatchOperations
      }
    | {
        contentType: 'application/merge-patch+json'
        body: IoIstioNetworkingV1Beta1DestinationRule
      }
  )
export type ListNetworkingIstioIoV1Beta1NamespacedGatewayApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Beta1GatewayList
export type ListNetworkingIstioIoV1Beta1NamespacedGatewayApiArg = {
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
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
export type CreateNetworkingIstioIoV1Beta1NamespacedGatewayApiResponse =
  /** status 200 OK */
  | IoIstioNetworkingV1Beta1Gateway
  | /** status 201 Created */ IoIstioNetworkingV1Beta1Gateway
  | /** status 202 Accepted */ IoIstioNetworkingV1Beta1Gateway
export type CreateNetworkingIstioIoV1Beta1NamespacedGatewayApiArg = {
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
} & (
  | {
      contentType: 'application/json'
      body: IoIstioNetworkingV1Beta1Gateway
    }
  | {
      contentType: 'application/yaml'
      body: IoIstioNetworkingV1Beta1Gateway
    }
)
export type DeleteNetworkingIstioIoV1Beta1CollectionNamespacedGatewayApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteNetworkingIstioIoV1Beta1CollectionNamespacedGatewayApiArg = {
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
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
export type ReadNetworkingIstioIoV1Beta1NamespacedGatewayApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Beta1Gateway
export type ReadNetworkingIstioIoV1Beta1NamespacedGatewayApiArg = {
  /** name of the Gateway */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceNetworkingIstioIoV1Beta1NamespacedGatewayApiResponse =
  /** status 200 OK */
  | IoIstioNetworkingV1Beta1Gateway
  | /** status 201 Created */ IoIstioNetworkingV1Beta1Gateway
export type ReplaceNetworkingIstioIoV1Beta1NamespacedGatewayApiArg = {
  /** name of the Gateway */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
} & (
  | {
      contentType: 'application/json'
      body: IoIstioNetworkingV1Beta1Gateway
    }
  | {
      contentType: 'application/yaml'
      body: IoIstioNetworkingV1Beta1Gateway
    }
)
export type DeleteNetworkingIstioIoV1Beta1NamespacedGatewayApiResponse =
  /** status 200 OK */
  | IoK8SApimachineryPkgApisMetaV1Status
  | /** status 202 Accepted */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteNetworkingIstioIoV1Beta1NamespacedGatewayApiArg = {
  /** name of the Gateway */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. */
  gracePeriodSeconds?: number
  /** Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both. */
  orphanDependents?: boolean
  /** Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground. */
  propagationPolicy?: string
} & (
  | {
      contentType: 'application/json'
      body: IoK8SApimachineryPkgApisMetaV1DeleteOptions
    }
  | {
      contentType: 'application/yaml'
      body: IoK8SApimachineryPkgApisMetaV1DeleteOptions
    }
)
export type PatchNetworkingIstioIoV1Beta1NamespacedGatewayApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Beta1Gateway
export type PatchNetworkingIstioIoV1Beta1NamespacedGatewayApiArg = {
  /** name of the Gateway */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
  /** Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. */
  force?: boolean
} & (
  | {
      contentType: 'application/apply-patch+yaml'
      body: IoIstioNetworkingV1Beta1Gateway
    }
  | {
      contentType: 'application/json-patch+json'
      body: JsonPatchOperations
    }
  | {
      contentType: 'application/merge-patch+json'
      body: IoIstioNetworkingV1Beta1Gateway
    }
)
export type ReadNetworkingIstioIoV1Beta1NamespacedGatewayStatusApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Beta1Gateway
export type ReadNetworkingIstioIoV1Beta1NamespacedGatewayStatusApiArg = {
  /** name of the Gateway */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceNetworkingIstioIoV1Beta1NamespacedGatewayStatusApiResponse =
  /** status 200 OK */
  | IoIstioNetworkingV1Beta1Gateway
  | /** status 201 Created */ IoIstioNetworkingV1Beta1Gateway
export type ReplaceNetworkingIstioIoV1Beta1NamespacedGatewayStatusApiArg = {
  /** name of the Gateway */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
} & (
  | {
      contentType: 'application/json'
      body: IoIstioNetworkingV1Beta1Gateway
    }
  | {
      contentType: 'application/yaml'
      body: IoIstioNetworkingV1Beta1Gateway
    }
)
export type PatchNetworkingIstioIoV1Beta1NamespacedGatewayStatusApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Beta1Gateway
export type PatchNetworkingIstioIoV1Beta1NamespacedGatewayStatusApiArg = {
  /** name of the Gateway */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
  /** Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. */
  force?: boolean
} & (
  | {
      contentType: 'application/apply-patch+yaml'
      body: IoIstioNetworkingV1Beta1Gateway
    }
  | {
      contentType: 'application/json-patch+json'
      body: JsonPatchOperations
    }
  | {
      contentType: 'application/merge-patch+json'
      body: IoIstioNetworkingV1Beta1Gateway
    }
)
export type ListNetworkingIstioIoV1Beta1NamespacedServiceEntryApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Beta1ServiceEntryList
export type ListNetworkingIstioIoV1Beta1NamespacedServiceEntryApiArg = {
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
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
export type CreateNetworkingIstioIoV1Beta1NamespacedServiceEntryApiResponse =
  /** status 200 OK */
  | IoIstioNetworkingV1Beta1ServiceEntry
  | /** status 201 Created */ IoIstioNetworkingV1Beta1ServiceEntry
  | /** status 202 Accepted */ IoIstioNetworkingV1Beta1ServiceEntry
export type CreateNetworkingIstioIoV1Beta1NamespacedServiceEntryApiArg = {
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
} & (
  | {
      contentType: 'application/json'
      body: IoIstioNetworkingV1Beta1ServiceEntry
    }
  | {
      contentType: 'application/yaml'
      body: IoIstioNetworkingV1Beta1ServiceEntry
    }
)
export type DeleteNetworkingIstioIoV1Beta1CollectionNamespacedServiceEntryApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteNetworkingIstioIoV1Beta1CollectionNamespacedServiceEntryApiArg =
  {
    /** object name and auth scope, such as for teams and projects */
    namespace: string
    /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
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
export type ReadNetworkingIstioIoV1Beta1NamespacedServiceEntryApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Beta1ServiceEntry
export type ReadNetworkingIstioIoV1Beta1NamespacedServiceEntryApiArg = {
  /** name of the ServiceEntry */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceNetworkingIstioIoV1Beta1NamespacedServiceEntryApiResponse =
  /** status 200 OK */
  | IoIstioNetworkingV1Beta1ServiceEntry
  | /** status 201 Created */ IoIstioNetworkingV1Beta1ServiceEntry
export type ReplaceNetworkingIstioIoV1Beta1NamespacedServiceEntryApiArg = {
  /** name of the ServiceEntry */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
} & (
  | {
      contentType: 'application/json'
      body: IoIstioNetworkingV1Beta1ServiceEntry
    }
  | {
      contentType: 'application/yaml'
      body: IoIstioNetworkingV1Beta1ServiceEntry
    }
)
export type DeleteNetworkingIstioIoV1Beta1NamespacedServiceEntryApiResponse =
  /** status 200 OK */
  | IoK8SApimachineryPkgApisMetaV1Status
  | /** status 202 Accepted */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteNetworkingIstioIoV1Beta1NamespacedServiceEntryApiArg = {
  /** name of the ServiceEntry */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. */
  gracePeriodSeconds?: number
  /** Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both. */
  orphanDependents?: boolean
  /** Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground. */
  propagationPolicy?: string
} & (
  | {
      contentType: 'application/json'
      body: IoK8SApimachineryPkgApisMetaV1DeleteOptions
    }
  | {
      contentType: 'application/yaml'
      body: IoK8SApimachineryPkgApisMetaV1DeleteOptions
    }
)
export type PatchNetworkingIstioIoV1Beta1NamespacedServiceEntryApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Beta1ServiceEntry
export type PatchNetworkingIstioIoV1Beta1NamespacedServiceEntryApiArg = {
  /** name of the ServiceEntry */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
  /** Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. */
  force?: boolean
} & (
  | {
      contentType: 'application/apply-patch+yaml'
      body: IoIstioNetworkingV1Beta1ServiceEntry
    }
  | {
      contentType: 'application/json-patch+json'
      body: JsonPatchOperations
    }
  | {
      contentType: 'application/merge-patch+json'
      body: IoIstioNetworkingV1Beta1ServiceEntry
    }
)
export type ReadNetworkingIstioIoV1Beta1NamespacedServiceEntryStatusApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Beta1ServiceEntry
export type ReadNetworkingIstioIoV1Beta1NamespacedServiceEntryStatusApiArg = {
  /** name of the ServiceEntry */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceNetworkingIstioIoV1Beta1NamespacedServiceEntryStatusApiResponse =
  /** status 200 OK */
  | IoIstioNetworkingV1Beta1ServiceEntry
  | /** status 201 Created */ IoIstioNetworkingV1Beta1ServiceEntry
export type ReplaceNetworkingIstioIoV1Beta1NamespacedServiceEntryStatusApiArg =
  {
    /** name of the ServiceEntry */
    name: string
    /** object name and auth scope, such as for teams and projects */
    namespace: string
    /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
    pretty?: string
    /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
    dryRun?: string
    /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
    fieldManager?: string
    /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
    fieldValidation?: string
  } & (
    | {
        contentType: 'application/json'
        body: IoIstioNetworkingV1Beta1ServiceEntry
      }
    | {
        contentType: 'application/yaml'
        body: IoIstioNetworkingV1Beta1ServiceEntry
      }
  )
export type PatchNetworkingIstioIoV1Beta1NamespacedServiceEntryStatusApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Beta1ServiceEntry
export type PatchNetworkingIstioIoV1Beta1NamespacedServiceEntryStatusApiArg = {
  /** name of the ServiceEntry */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
  /** Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. */
  force?: boolean
} & (
  | {
      contentType: 'application/apply-patch+yaml'
      body: IoIstioNetworkingV1Beta1ServiceEntry
    }
  | {
      contentType: 'application/json-patch+json'
      body: JsonPatchOperations
    }
  | {
      contentType: 'application/merge-patch+json'
      body: IoIstioNetworkingV1Beta1ServiceEntry
    }
)
export type ListNetworkingIstioIoV1Beta1NamespacedSidecarApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Beta1SidecarList
export type ListNetworkingIstioIoV1Beta1NamespacedSidecarApiArg = {
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
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
export type CreateNetworkingIstioIoV1Beta1NamespacedSidecarApiResponse =
  /** status 200 OK */
  | IoIstioNetworkingV1Beta1Sidecar
  | /** status 201 Created */ IoIstioNetworkingV1Beta1Sidecar
  | /** status 202 Accepted */ IoIstioNetworkingV1Beta1Sidecar
export type CreateNetworkingIstioIoV1Beta1NamespacedSidecarApiArg = {
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
} & (
  | {
      contentType: 'application/json'
      body: IoIstioNetworkingV1Beta1Sidecar
    }
  | {
      contentType: 'application/yaml'
      body: IoIstioNetworkingV1Beta1Sidecar
    }
)
export type DeleteNetworkingIstioIoV1Beta1CollectionNamespacedSidecarApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteNetworkingIstioIoV1Beta1CollectionNamespacedSidecarApiArg = {
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
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
export type ReadNetworkingIstioIoV1Beta1NamespacedSidecarApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Beta1Sidecar
export type ReadNetworkingIstioIoV1Beta1NamespacedSidecarApiArg = {
  /** name of the Sidecar */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceNetworkingIstioIoV1Beta1NamespacedSidecarApiResponse =
  /** status 200 OK */
  | IoIstioNetworkingV1Beta1Sidecar
  | /** status 201 Created */ IoIstioNetworkingV1Beta1Sidecar
export type ReplaceNetworkingIstioIoV1Beta1NamespacedSidecarApiArg = {
  /** name of the Sidecar */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
} & (
  | {
      contentType: 'application/json'
      body: IoIstioNetworkingV1Beta1Sidecar
    }
  | {
      contentType: 'application/yaml'
      body: IoIstioNetworkingV1Beta1Sidecar
    }
)
export type DeleteNetworkingIstioIoV1Beta1NamespacedSidecarApiResponse =
  /** status 200 OK */
  | IoK8SApimachineryPkgApisMetaV1Status
  | /** status 202 Accepted */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteNetworkingIstioIoV1Beta1NamespacedSidecarApiArg = {
  /** name of the Sidecar */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. */
  gracePeriodSeconds?: number
  /** Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both. */
  orphanDependents?: boolean
  /** Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground. */
  propagationPolicy?: string
} & (
  | {
      contentType: 'application/json'
      body: IoK8SApimachineryPkgApisMetaV1DeleteOptions
    }
  | {
      contentType: 'application/yaml'
      body: IoK8SApimachineryPkgApisMetaV1DeleteOptions
    }
)
export type PatchNetworkingIstioIoV1Beta1NamespacedSidecarApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Beta1Sidecar
export type PatchNetworkingIstioIoV1Beta1NamespacedSidecarApiArg = {
  /** name of the Sidecar */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
  /** Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. */
  force?: boolean
} & (
  | {
      contentType: 'application/apply-patch+yaml'
      body: IoIstioNetworkingV1Beta1Sidecar
    }
  | {
      contentType: 'application/json-patch+json'
      body: JsonPatchOperations
    }
  | {
      contentType: 'application/merge-patch+json'
      body: IoIstioNetworkingV1Beta1Sidecar
    }
)
export type ReadNetworkingIstioIoV1Beta1NamespacedSidecarStatusApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Beta1Sidecar
export type ReadNetworkingIstioIoV1Beta1NamespacedSidecarStatusApiArg = {
  /** name of the Sidecar */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceNetworkingIstioIoV1Beta1NamespacedSidecarStatusApiResponse =
  /** status 200 OK */
  | IoIstioNetworkingV1Beta1Sidecar
  | /** status 201 Created */ IoIstioNetworkingV1Beta1Sidecar
export type ReplaceNetworkingIstioIoV1Beta1NamespacedSidecarStatusApiArg = {
  /** name of the Sidecar */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
} & (
  | {
      contentType: 'application/json'
      body: IoIstioNetworkingV1Beta1Sidecar
    }
  | {
      contentType: 'application/yaml'
      body: IoIstioNetworkingV1Beta1Sidecar
    }
)
export type PatchNetworkingIstioIoV1Beta1NamespacedSidecarStatusApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Beta1Sidecar
export type PatchNetworkingIstioIoV1Beta1NamespacedSidecarStatusApiArg = {
  /** name of the Sidecar */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
  /** Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. */
  force?: boolean
} & (
  | {
      contentType: 'application/apply-patch+yaml'
      body: IoIstioNetworkingV1Beta1Sidecar
    }
  | {
      contentType: 'application/json-patch+json'
      body: JsonPatchOperations
    }
  | {
      contentType: 'application/merge-patch+json'
      body: IoIstioNetworkingV1Beta1Sidecar
    }
)
export type ListNetworkingIstioIoV1Beta1NamespacedVirtualServiceApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Beta1VirtualServiceList
export type ListNetworkingIstioIoV1Beta1NamespacedVirtualServiceApiArg = {
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
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
export type CreateNetworkingIstioIoV1Beta1NamespacedVirtualServiceApiResponse =
  /** status 200 OK */
  | IoIstioNetworkingV1Beta1VirtualService
  | /** status 201 Created */ IoIstioNetworkingV1Beta1VirtualService
  | /** status 202 Accepted */ IoIstioNetworkingV1Beta1VirtualService
export type CreateNetworkingIstioIoV1Beta1NamespacedVirtualServiceApiArg = {
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
} & (
  | {
      contentType: 'application/json'
      body: IoIstioNetworkingV1Beta1VirtualService
    }
  | {
      contentType: 'application/yaml'
      body: IoIstioNetworkingV1Beta1VirtualService
    }
)
export type DeleteNetworkingIstioIoV1Beta1CollectionNamespacedVirtualServiceApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteNetworkingIstioIoV1Beta1CollectionNamespacedVirtualServiceApiArg =
  {
    /** object name and auth scope, such as for teams and projects */
    namespace: string
    /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
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
export type ReadNetworkingIstioIoV1Beta1NamespacedVirtualServiceApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Beta1VirtualService
export type ReadNetworkingIstioIoV1Beta1NamespacedVirtualServiceApiArg = {
  /** name of the VirtualService */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceNetworkingIstioIoV1Beta1NamespacedVirtualServiceApiResponse =
  /** status 200 OK */
  | IoIstioNetworkingV1Beta1VirtualService
  | /** status 201 Created */ IoIstioNetworkingV1Beta1VirtualService
export type ReplaceNetworkingIstioIoV1Beta1NamespacedVirtualServiceApiArg = {
  /** name of the VirtualService */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
} & (
  | {
      contentType: 'application/json'
      body: IoIstioNetworkingV1Beta1VirtualService
    }
  | {
      contentType: 'application/yaml'
      body: IoIstioNetworkingV1Beta1VirtualService
    }
)
export type DeleteNetworkingIstioIoV1Beta1NamespacedVirtualServiceApiResponse =
  /** status 200 OK */
  | IoK8SApimachineryPkgApisMetaV1Status
  | /** status 202 Accepted */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteNetworkingIstioIoV1Beta1NamespacedVirtualServiceApiArg = {
  /** name of the VirtualService */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. */
  gracePeriodSeconds?: number
  /** Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both. */
  orphanDependents?: boolean
  /** Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground. */
  propagationPolicy?: string
} & (
  | {
      contentType: 'application/json'
      body: IoK8SApimachineryPkgApisMetaV1DeleteOptions
    }
  | {
      contentType: 'application/yaml'
      body: IoK8SApimachineryPkgApisMetaV1DeleteOptions
    }
)
export type PatchNetworkingIstioIoV1Beta1NamespacedVirtualServiceApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Beta1VirtualService
export type PatchNetworkingIstioIoV1Beta1NamespacedVirtualServiceApiArg = {
  /** name of the VirtualService */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
  /** Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. */
  force?: boolean
} & (
  | {
      contentType: 'application/apply-patch+yaml'
      body: IoIstioNetworkingV1Beta1VirtualService
    }
  | {
      contentType: 'application/json-patch+json'
      body: JsonPatchOperations
    }
  | {
      contentType: 'application/merge-patch+json'
      body: IoIstioNetworkingV1Beta1VirtualService
    }
)
export type ReadNetworkingIstioIoV1Beta1NamespacedVirtualServiceStatusApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Beta1VirtualService
export type ReadNetworkingIstioIoV1Beta1NamespacedVirtualServiceStatusApiArg = {
  /** name of the VirtualService */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceNetworkingIstioIoV1Beta1NamespacedVirtualServiceStatusApiResponse =
  /** status 200 OK */
  | IoIstioNetworkingV1Beta1VirtualService
  | /** status 201 Created */ IoIstioNetworkingV1Beta1VirtualService
export type ReplaceNetworkingIstioIoV1Beta1NamespacedVirtualServiceStatusApiArg =
  {
    /** name of the VirtualService */
    name: string
    /** object name and auth scope, such as for teams and projects */
    namespace: string
    /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
    pretty?: string
    /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
    dryRun?: string
    /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
    fieldManager?: string
    /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
    fieldValidation?: string
  } & (
    | {
        contentType: 'application/json'
        body: IoIstioNetworkingV1Beta1VirtualService
      }
    | {
        contentType: 'application/yaml'
        body: IoIstioNetworkingV1Beta1VirtualService
      }
  )
export type PatchNetworkingIstioIoV1Beta1NamespacedVirtualServiceStatusApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Beta1VirtualService
export type PatchNetworkingIstioIoV1Beta1NamespacedVirtualServiceStatusApiArg =
  {
    /** name of the VirtualService */
    name: string
    /** object name and auth scope, such as for teams and projects */
    namespace: string
    /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
    pretty?: string
    /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
    dryRun?: string
    /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). */
    fieldManager?: string
    /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
    fieldValidation?: string
    /** Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. */
    force?: boolean
  } & (
    | {
        contentType: 'application/apply-patch+yaml'
        body: IoIstioNetworkingV1Beta1VirtualService
      }
    | {
        contentType: 'application/json-patch+json'
        body: JsonPatchOperations
      }
    | {
        contentType: 'application/merge-patch+json'
        body: IoIstioNetworkingV1Beta1VirtualService
      }
  )
export type ListNetworkingIstioIoV1Beta1NamespacedWorkloadEntryApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Beta1WorkloadEntryList
export type ListNetworkingIstioIoV1Beta1NamespacedWorkloadEntryApiArg = {
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
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
export type CreateNetworkingIstioIoV1Beta1NamespacedWorkloadEntryApiResponse =
  /** status 200 OK */
  | IoIstioNetworkingV1Beta1WorkloadEntry
  | /** status 201 Created */ IoIstioNetworkingV1Beta1WorkloadEntry
  | /** status 202 Accepted */ IoIstioNetworkingV1Beta1WorkloadEntry
export type CreateNetworkingIstioIoV1Beta1NamespacedWorkloadEntryApiArg = {
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
} & (
  | {
      contentType: 'application/json'
      body: IoIstioNetworkingV1Beta1WorkloadEntry
    }
  | {
      contentType: 'application/yaml'
      body: IoIstioNetworkingV1Beta1WorkloadEntry
    }
)
export type DeleteNetworkingIstioIoV1Beta1CollectionNamespacedWorkloadEntryApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteNetworkingIstioIoV1Beta1CollectionNamespacedWorkloadEntryApiArg =
  {
    /** object name and auth scope, such as for teams and projects */
    namespace: string
    /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
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
export type ReadNetworkingIstioIoV1Beta1NamespacedWorkloadEntryApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Beta1WorkloadEntry
export type ReadNetworkingIstioIoV1Beta1NamespacedWorkloadEntryApiArg = {
  /** name of the WorkloadEntry */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceNetworkingIstioIoV1Beta1NamespacedWorkloadEntryApiResponse =
  /** status 200 OK */
  | IoIstioNetworkingV1Beta1WorkloadEntry
  | /** status 201 Created */ IoIstioNetworkingV1Beta1WorkloadEntry
export type ReplaceNetworkingIstioIoV1Beta1NamespacedWorkloadEntryApiArg = {
  /** name of the WorkloadEntry */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
} & (
  | {
      contentType: 'application/json'
      body: IoIstioNetworkingV1Beta1WorkloadEntry
    }
  | {
      contentType: 'application/yaml'
      body: IoIstioNetworkingV1Beta1WorkloadEntry
    }
)
export type DeleteNetworkingIstioIoV1Beta1NamespacedWorkloadEntryApiResponse =
  /** status 200 OK */
  | IoK8SApimachineryPkgApisMetaV1Status
  | /** status 202 Accepted */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteNetworkingIstioIoV1Beta1NamespacedWorkloadEntryApiArg = {
  /** name of the WorkloadEntry */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. */
  gracePeriodSeconds?: number
  /** Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both. */
  orphanDependents?: boolean
  /** Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground. */
  propagationPolicy?: string
} & (
  | {
      contentType: 'application/json'
      body: IoK8SApimachineryPkgApisMetaV1DeleteOptions
    }
  | {
      contentType: 'application/yaml'
      body: IoK8SApimachineryPkgApisMetaV1DeleteOptions
    }
)
export type PatchNetworkingIstioIoV1Beta1NamespacedWorkloadEntryApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Beta1WorkloadEntry
export type PatchNetworkingIstioIoV1Beta1NamespacedWorkloadEntryApiArg = {
  /** name of the WorkloadEntry */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
  /** Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. */
  force?: boolean
} & (
  | {
      contentType: 'application/apply-patch+yaml'
      body: IoIstioNetworkingV1Beta1WorkloadEntry
    }
  | {
      contentType: 'application/json-patch+json'
      body: JsonPatchOperations
    }
  | {
      contentType: 'application/merge-patch+json'
      body: IoIstioNetworkingV1Beta1WorkloadEntry
    }
)
export type ReadNetworkingIstioIoV1Beta1NamespacedWorkloadEntryStatusApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Beta1WorkloadEntry
export type ReadNetworkingIstioIoV1Beta1NamespacedWorkloadEntryStatusApiArg = {
  /** name of the WorkloadEntry */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceNetworkingIstioIoV1Beta1NamespacedWorkloadEntryStatusApiResponse =
  /** status 200 OK */
  | IoIstioNetworkingV1Beta1WorkloadEntry
  | /** status 201 Created */ IoIstioNetworkingV1Beta1WorkloadEntry
export type ReplaceNetworkingIstioIoV1Beta1NamespacedWorkloadEntryStatusApiArg =
  {
    /** name of the WorkloadEntry */
    name: string
    /** object name and auth scope, such as for teams and projects */
    namespace: string
    /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
    pretty?: string
    /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
    dryRun?: string
    /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
    fieldManager?: string
    /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
    fieldValidation?: string
  } & (
    | {
        contentType: 'application/json'
        body: IoIstioNetworkingV1Beta1WorkloadEntry
      }
    | {
        contentType: 'application/yaml'
        body: IoIstioNetworkingV1Beta1WorkloadEntry
      }
  )
export type PatchNetworkingIstioIoV1Beta1NamespacedWorkloadEntryStatusApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Beta1WorkloadEntry
export type PatchNetworkingIstioIoV1Beta1NamespacedWorkloadEntryStatusApiArg = {
  /** name of the WorkloadEntry */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
  /** Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. */
  force?: boolean
} & (
  | {
      contentType: 'application/apply-patch+yaml'
      body: IoIstioNetworkingV1Beta1WorkloadEntry
    }
  | {
      contentType: 'application/json-patch+json'
      body: JsonPatchOperations
    }
  | {
      contentType: 'application/merge-patch+json'
      body: IoIstioNetworkingV1Beta1WorkloadEntry
    }
)
export type ListNetworkingIstioIoV1Beta1ServiceEntryForAllNamespacesApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Beta1ServiceEntryList
export type ListNetworkingIstioIoV1Beta1ServiceEntryForAllNamespacesApiArg = {
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
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
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
export type ListNetworkingIstioIoV1Beta1SidecarForAllNamespacesApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Beta1SidecarList
export type ListNetworkingIstioIoV1Beta1SidecarForAllNamespacesApiArg = {
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
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
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
export type ListNetworkingIstioIoV1Beta1VirtualServiceForAllNamespacesApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Beta1VirtualServiceList
export type ListNetworkingIstioIoV1Beta1VirtualServiceForAllNamespacesApiArg = {
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
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
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
export type ListNetworkingIstioIoV1Beta1WorkloadEntryForAllNamespacesApiResponse =
  /** status 200 OK */ IoIstioNetworkingV1Beta1WorkloadEntryList
export type ListNetworkingIstioIoV1Beta1WorkloadEntryForAllNamespacesApiArg = {
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
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
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
export type IoIstioNetworkingV1Beta1DestinationRule = {
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
export type IoIstioNetworkingV1Beta1DestinationRuleList = {
  apiVersion?: string | undefined
  items: IoIstioNetworkingV1Beta1DestinationRule[]
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ListMeta | undefined
}
export type IoIstioNetworkingV1Beta1Gateway = {
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
export type IoIstioNetworkingV1Beta1GatewayList = {
  apiVersion?: string | undefined
  items: IoIstioNetworkingV1Beta1Gateway[]
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
export type AddOperation = {
  op: 'add'
  path: string
  value: string | number | boolean | any | object
}
export type RemoveOperation = {
  op: 'remove'
  path: string
}
export type ReplaceOperation = {
  op: 'replace'
  path: string
  value: string | number | boolean | any | object
}
export type MoveOperation = {
  op: 'move'
  path: string
  from: string
}
export type CopyOperation = {
  op: 'copy'
  path: string
  from: string
}
export type TestOperation = {
  op: 'test'
  path: string
  value: string | number | boolean | any | object
}
export type JsonPatchOperation =
  | AddOperation
  | RemoveOperation
  | ReplaceOperation
  | MoveOperation
  | CopyOperation
  | TestOperation
export type JsonPatchOperations = JsonPatchOperation[]
export type IoIstioNetworkingV1Beta1ServiceEntry = {
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
export type IoIstioNetworkingV1Beta1ServiceEntryList = {
  apiVersion?: string | undefined
  items: IoIstioNetworkingV1Beta1ServiceEntry[]
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ListMeta | undefined
}
export type IoIstioNetworkingV1Beta1Sidecar = {
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
export type IoIstioNetworkingV1Beta1SidecarList = {
  apiVersion?: string | undefined
  items: IoIstioNetworkingV1Beta1Sidecar[]
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ListMeta | undefined
}
export type IoIstioNetworkingV1Beta1VirtualService = {
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
export type IoIstioNetworkingV1Beta1VirtualServiceList = {
  apiVersion?: string | undefined
  items: IoIstioNetworkingV1Beta1VirtualService[]
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ListMeta | undefined
}
export type IoIstioNetworkingV1Beta1WorkloadEntry = {
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
export type IoIstioNetworkingV1Beta1WorkloadEntryList = {
  apiVersion?: string | undefined
  items: IoIstioNetworkingV1Beta1WorkloadEntry[]
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ListMeta | undefined
}
