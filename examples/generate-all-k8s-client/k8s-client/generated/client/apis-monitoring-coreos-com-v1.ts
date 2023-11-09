import { apiClient, type Options } from '../../client'
export const listMonitoringCoreosComV1AlertmanagerForAllNamespaces = (
  args: ListMonitoringCoreosComV1AlertmanagerForAllNamespacesApiArg,
  options?: Options
) => {
  return apiClient<ListMonitoringCoreosComV1AlertmanagerForAllNamespacesApiResponse>(
    {
      path: `/apis/monitoring.coreos.com/v1/alertmanagers`,
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
export const listMonitoringCoreosComV1NamespacedAlertmanager = (
  args: ListMonitoringCoreosComV1NamespacedAlertmanagerApiArg,
  options?: Options
) => {
  return apiClient<ListMonitoringCoreosComV1NamespacedAlertmanagerApiResponse>(
    {
      path: `/apis/monitoring.coreos.com/v1/namespaces/${args['namespace']}/alertmanagers`,
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
export const createMonitoringCoreosComV1NamespacedAlertmanager = (
  args: CreateMonitoringCoreosComV1NamespacedAlertmanagerApiArg,
  options?: Options
) => {
  return apiClient<CreateMonitoringCoreosComV1NamespacedAlertmanagerApiResponse>(
    {
      path: `/apis/monitoring.coreos.com/v1/namespaces/${args['namespace']}/alertmanagers`,
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
export const deleteMonitoringCoreosComV1CollectionNamespacedAlertmanager = (
  args: DeleteMonitoringCoreosComV1CollectionNamespacedAlertmanagerApiArg,
  options?: Options
) => {
  return apiClient<DeleteMonitoringCoreosComV1CollectionNamespacedAlertmanagerApiResponse>(
    {
      path: `/apis/monitoring.coreos.com/v1/namespaces/${args['namespace']}/alertmanagers`,
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
export const readMonitoringCoreosComV1NamespacedAlertmanager = (
  args: ReadMonitoringCoreosComV1NamespacedAlertmanagerApiArg,
  options?: Options
) => {
  return apiClient<ReadMonitoringCoreosComV1NamespacedAlertmanagerApiResponse>(
    {
      path: `/apis/monitoring.coreos.com/v1/namespaces/${args['namespace']}/alertmanagers/${args.name}`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceMonitoringCoreosComV1NamespacedAlertmanager = (
  args: ReplaceMonitoringCoreosComV1NamespacedAlertmanagerApiArg,
  options?: Options
) => {
  return apiClient<ReplaceMonitoringCoreosComV1NamespacedAlertmanagerApiResponse>(
    {
      path: `/apis/monitoring.coreos.com/v1/namespaces/${args['namespace']}/alertmanagers/${args.name}`,
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
export const deleteMonitoringCoreosComV1NamespacedAlertmanager = (
  args: DeleteMonitoringCoreosComV1NamespacedAlertmanagerApiArg,
  options?: Options
) => {
  return apiClient<DeleteMonitoringCoreosComV1NamespacedAlertmanagerApiResponse>(
    {
      path: `/apis/monitoring.coreos.com/v1/namespaces/${args['namespace']}/alertmanagers/${args.name}`,
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
export const patchMonitoringCoreosComV1NamespacedAlertmanager = (
  args: PatchMonitoringCoreosComV1NamespacedAlertmanagerApiArg,
  options?: Options
) => {
  return apiClient<PatchMonitoringCoreosComV1NamespacedAlertmanagerApiResponse>(
    {
      path: `/apis/monitoring.coreos.com/v1/namespaces/${args['namespace']}/alertmanagers/${args.name}`,
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
export const listMonitoringCoreosComV1NamespacedPodMonitor = (
  args: ListMonitoringCoreosComV1NamespacedPodMonitorApiArg,
  options?: Options
) => {
  return apiClient<ListMonitoringCoreosComV1NamespacedPodMonitorApiResponse>(
    {
      path: `/apis/monitoring.coreos.com/v1/namespaces/${args['namespace']}/podmonitors`,
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
export const createMonitoringCoreosComV1NamespacedPodMonitor = (
  args: CreateMonitoringCoreosComV1NamespacedPodMonitorApiArg,
  options?: Options
) => {
  return apiClient<CreateMonitoringCoreosComV1NamespacedPodMonitorApiResponse>(
    {
      path: `/apis/monitoring.coreos.com/v1/namespaces/${args['namespace']}/podmonitors`,
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
export const deleteMonitoringCoreosComV1CollectionNamespacedPodMonitor = (
  args: DeleteMonitoringCoreosComV1CollectionNamespacedPodMonitorApiArg,
  options?: Options
) => {
  return apiClient<DeleteMonitoringCoreosComV1CollectionNamespacedPodMonitorApiResponse>(
    {
      path: `/apis/monitoring.coreos.com/v1/namespaces/${args['namespace']}/podmonitors`,
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
export const readMonitoringCoreosComV1NamespacedPodMonitor = (
  args: ReadMonitoringCoreosComV1NamespacedPodMonitorApiArg,
  options?: Options
) => {
  return apiClient<ReadMonitoringCoreosComV1NamespacedPodMonitorApiResponse>(
    {
      path: `/apis/monitoring.coreos.com/v1/namespaces/${args['namespace']}/podmonitors/${args.name}`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceMonitoringCoreosComV1NamespacedPodMonitor = (
  args: ReplaceMonitoringCoreosComV1NamespacedPodMonitorApiArg,
  options?: Options
) => {
  return apiClient<ReplaceMonitoringCoreosComV1NamespacedPodMonitorApiResponse>(
    {
      path: `/apis/monitoring.coreos.com/v1/namespaces/${args['namespace']}/podmonitors/${args.name}`,
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
export const deleteMonitoringCoreosComV1NamespacedPodMonitor = (
  args: DeleteMonitoringCoreosComV1NamespacedPodMonitorApiArg,
  options?: Options
) => {
  return apiClient<DeleteMonitoringCoreosComV1NamespacedPodMonitorApiResponse>(
    {
      path: `/apis/monitoring.coreos.com/v1/namespaces/${args['namespace']}/podmonitors/${args.name}`,
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
export const patchMonitoringCoreosComV1NamespacedPodMonitor = (
  args: PatchMonitoringCoreosComV1NamespacedPodMonitorApiArg,
  options?: Options
) => {
  return apiClient<PatchMonitoringCoreosComV1NamespacedPodMonitorApiResponse>(
    {
      path: `/apis/monitoring.coreos.com/v1/namespaces/${args['namespace']}/podmonitors/${args.name}`,
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
export const listMonitoringCoreosComV1NamespacedProbe = (
  args: ListMonitoringCoreosComV1NamespacedProbeApiArg,
  options?: Options
) => {
  return apiClient<ListMonitoringCoreosComV1NamespacedProbeApiResponse>(
    {
      path: `/apis/monitoring.coreos.com/v1/namespaces/${args['namespace']}/probes`,
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
export const createMonitoringCoreosComV1NamespacedProbe = (
  args: CreateMonitoringCoreosComV1NamespacedProbeApiArg,
  options?: Options
) => {
  return apiClient<CreateMonitoringCoreosComV1NamespacedProbeApiResponse>(
    {
      path: `/apis/monitoring.coreos.com/v1/namespaces/${args['namespace']}/probes`,
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
export const deleteMonitoringCoreosComV1CollectionNamespacedProbe = (
  args: DeleteMonitoringCoreosComV1CollectionNamespacedProbeApiArg,
  options?: Options
) => {
  return apiClient<DeleteMonitoringCoreosComV1CollectionNamespacedProbeApiResponse>(
    {
      path: `/apis/monitoring.coreos.com/v1/namespaces/${args['namespace']}/probes`,
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
export const readMonitoringCoreosComV1NamespacedProbe = (
  args: ReadMonitoringCoreosComV1NamespacedProbeApiArg,
  options?: Options
) => {
  return apiClient<ReadMonitoringCoreosComV1NamespacedProbeApiResponse>(
    {
      path: `/apis/monitoring.coreos.com/v1/namespaces/${args['namespace']}/probes/${args.name}`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceMonitoringCoreosComV1NamespacedProbe = (
  args: ReplaceMonitoringCoreosComV1NamespacedProbeApiArg,
  options?: Options
) => {
  return apiClient<ReplaceMonitoringCoreosComV1NamespacedProbeApiResponse>(
    {
      path: `/apis/monitoring.coreos.com/v1/namespaces/${args['namespace']}/probes/${args.name}`,
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
export const deleteMonitoringCoreosComV1NamespacedProbe = (
  args: DeleteMonitoringCoreosComV1NamespacedProbeApiArg,
  options?: Options
) => {
  return apiClient<DeleteMonitoringCoreosComV1NamespacedProbeApiResponse>(
    {
      path: `/apis/monitoring.coreos.com/v1/namespaces/${args['namespace']}/probes/${args.name}`,
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
export const patchMonitoringCoreosComV1NamespacedProbe = (
  args: PatchMonitoringCoreosComV1NamespacedProbeApiArg,
  options?: Options
) => {
  return apiClient<PatchMonitoringCoreosComV1NamespacedProbeApiResponse>(
    {
      path: `/apis/monitoring.coreos.com/v1/namespaces/${args['namespace']}/probes/${args.name}`,
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
export const listMonitoringCoreosComV1NamespacedPrometheus = (
  args: ListMonitoringCoreosComV1NamespacedPrometheusApiArg,
  options?: Options
) => {
  return apiClient<ListMonitoringCoreosComV1NamespacedPrometheusApiResponse>(
    {
      path: `/apis/monitoring.coreos.com/v1/namespaces/${args['namespace']}/prometheuses`,
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
export const createMonitoringCoreosComV1NamespacedPrometheus = (
  args: CreateMonitoringCoreosComV1NamespacedPrometheusApiArg,
  options?: Options
) => {
  return apiClient<CreateMonitoringCoreosComV1NamespacedPrometheusApiResponse>(
    {
      path: `/apis/monitoring.coreos.com/v1/namespaces/${args['namespace']}/prometheuses`,
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
export const deleteMonitoringCoreosComV1CollectionNamespacedPrometheus = (
  args: DeleteMonitoringCoreosComV1CollectionNamespacedPrometheusApiArg,
  options?: Options
) => {
  return apiClient<DeleteMonitoringCoreosComV1CollectionNamespacedPrometheusApiResponse>(
    {
      path: `/apis/monitoring.coreos.com/v1/namespaces/${args['namespace']}/prometheuses`,
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
export const readMonitoringCoreosComV1NamespacedPrometheus = (
  args: ReadMonitoringCoreosComV1NamespacedPrometheusApiArg,
  options?: Options
) => {
  return apiClient<ReadMonitoringCoreosComV1NamespacedPrometheusApiResponse>(
    {
      path: `/apis/monitoring.coreos.com/v1/namespaces/${args['namespace']}/prometheuses/${args.name}`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceMonitoringCoreosComV1NamespacedPrometheus = (
  args: ReplaceMonitoringCoreosComV1NamespacedPrometheusApiArg,
  options?: Options
) => {
  return apiClient<ReplaceMonitoringCoreosComV1NamespacedPrometheusApiResponse>(
    {
      path: `/apis/monitoring.coreos.com/v1/namespaces/${args['namespace']}/prometheuses/${args.name}`,
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
export const deleteMonitoringCoreosComV1NamespacedPrometheus = (
  args: DeleteMonitoringCoreosComV1NamespacedPrometheusApiArg,
  options?: Options
) => {
  return apiClient<DeleteMonitoringCoreosComV1NamespacedPrometheusApiResponse>(
    {
      path: `/apis/monitoring.coreos.com/v1/namespaces/${args['namespace']}/prometheuses/${args.name}`,
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
export const patchMonitoringCoreosComV1NamespacedPrometheus = (
  args: PatchMonitoringCoreosComV1NamespacedPrometheusApiArg,
  options?: Options
) => {
  return apiClient<PatchMonitoringCoreosComV1NamespacedPrometheusApiResponse>(
    {
      path: `/apis/monitoring.coreos.com/v1/namespaces/${args['namespace']}/prometheuses/${args.name}`,
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
export const readMonitoringCoreosComV1NamespacedPrometheusStatus = (
  args: ReadMonitoringCoreosComV1NamespacedPrometheusStatusApiArg,
  options?: Options
) => {
  return apiClient<ReadMonitoringCoreosComV1NamespacedPrometheusStatusApiResponse>(
    {
      path: `/apis/monitoring.coreos.com/v1/namespaces/${args['namespace']}/prometheuses/${args.name}/status`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceMonitoringCoreosComV1NamespacedPrometheusStatus = (
  args: ReplaceMonitoringCoreosComV1NamespacedPrometheusStatusApiArg,
  options?: Options
) => {
  return apiClient<ReplaceMonitoringCoreosComV1NamespacedPrometheusStatusApiResponse>(
    {
      path: `/apis/monitoring.coreos.com/v1/namespaces/${args['namespace']}/prometheuses/${args.name}/status`,
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
export const patchMonitoringCoreosComV1NamespacedPrometheusStatus = (
  args: PatchMonitoringCoreosComV1NamespacedPrometheusStatusApiArg,
  options?: Options
) => {
  return apiClient<PatchMonitoringCoreosComV1NamespacedPrometheusStatusApiResponse>(
    {
      path: `/apis/monitoring.coreos.com/v1/namespaces/${args['namespace']}/prometheuses/${args.name}/status`,
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
export const listMonitoringCoreosComV1NamespacedPrometheusRule = (
  args: ListMonitoringCoreosComV1NamespacedPrometheusRuleApiArg,
  options?: Options
) => {
  return apiClient<ListMonitoringCoreosComV1NamespacedPrometheusRuleApiResponse>(
    {
      path: `/apis/monitoring.coreos.com/v1/namespaces/${args['namespace']}/prometheusrules`,
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
export const createMonitoringCoreosComV1NamespacedPrometheusRule = (
  args: CreateMonitoringCoreosComV1NamespacedPrometheusRuleApiArg,
  options?: Options
) => {
  return apiClient<CreateMonitoringCoreosComV1NamespacedPrometheusRuleApiResponse>(
    {
      path: `/apis/monitoring.coreos.com/v1/namespaces/${args['namespace']}/prometheusrules`,
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
export const deleteMonitoringCoreosComV1CollectionNamespacedPrometheusRule = (
  args: DeleteMonitoringCoreosComV1CollectionNamespacedPrometheusRuleApiArg,
  options?: Options
) => {
  return apiClient<DeleteMonitoringCoreosComV1CollectionNamespacedPrometheusRuleApiResponse>(
    {
      path: `/apis/monitoring.coreos.com/v1/namespaces/${args['namespace']}/prometheusrules`,
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
export const readMonitoringCoreosComV1NamespacedPrometheusRule = (
  args: ReadMonitoringCoreosComV1NamespacedPrometheusRuleApiArg,
  options?: Options
) => {
  return apiClient<ReadMonitoringCoreosComV1NamespacedPrometheusRuleApiResponse>(
    {
      path: `/apis/monitoring.coreos.com/v1/namespaces/${args['namespace']}/prometheusrules/${args.name}`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceMonitoringCoreosComV1NamespacedPrometheusRule = (
  args: ReplaceMonitoringCoreosComV1NamespacedPrometheusRuleApiArg,
  options?: Options
) => {
  return apiClient<ReplaceMonitoringCoreosComV1NamespacedPrometheusRuleApiResponse>(
    {
      path: `/apis/monitoring.coreos.com/v1/namespaces/${args['namespace']}/prometheusrules/${args.name}`,
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
export const deleteMonitoringCoreosComV1NamespacedPrometheusRule = (
  args: DeleteMonitoringCoreosComV1NamespacedPrometheusRuleApiArg,
  options?: Options
) => {
  return apiClient<DeleteMonitoringCoreosComV1NamespacedPrometheusRuleApiResponse>(
    {
      path: `/apis/monitoring.coreos.com/v1/namespaces/${args['namespace']}/prometheusrules/${args.name}`,
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
export const patchMonitoringCoreosComV1NamespacedPrometheusRule = (
  args: PatchMonitoringCoreosComV1NamespacedPrometheusRuleApiArg,
  options?: Options
) => {
  return apiClient<PatchMonitoringCoreosComV1NamespacedPrometheusRuleApiResponse>(
    {
      path: `/apis/monitoring.coreos.com/v1/namespaces/${args['namespace']}/prometheusrules/${args.name}`,
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
export const listMonitoringCoreosComV1NamespacedServiceMonitor = (
  args: ListMonitoringCoreosComV1NamespacedServiceMonitorApiArg,
  options?: Options
) => {
  return apiClient<ListMonitoringCoreosComV1NamespacedServiceMonitorApiResponse>(
    {
      path: `/apis/monitoring.coreos.com/v1/namespaces/${args['namespace']}/servicemonitors`,
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
export const createMonitoringCoreosComV1NamespacedServiceMonitor = (
  args: CreateMonitoringCoreosComV1NamespacedServiceMonitorApiArg,
  options?: Options
) => {
  return apiClient<CreateMonitoringCoreosComV1NamespacedServiceMonitorApiResponse>(
    {
      path: `/apis/monitoring.coreos.com/v1/namespaces/${args['namespace']}/servicemonitors`,
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
export const deleteMonitoringCoreosComV1CollectionNamespacedServiceMonitor = (
  args: DeleteMonitoringCoreosComV1CollectionNamespacedServiceMonitorApiArg,
  options?: Options
) => {
  return apiClient<DeleteMonitoringCoreosComV1CollectionNamespacedServiceMonitorApiResponse>(
    {
      path: `/apis/monitoring.coreos.com/v1/namespaces/${args['namespace']}/servicemonitors`,
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
export const readMonitoringCoreosComV1NamespacedServiceMonitor = (
  args: ReadMonitoringCoreosComV1NamespacedServiceMonitorApiArg,
  options?: Options
) => {
  return apiClient<ReadMonitoringCoreosComV1NamespacedServiceMonitorApiResponse>(
    {
      path: `/apis/monitoring.coreos.com/v1/namespaces/${args['namespace']}/servicemonitors/${args.name}`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceMonitoringCoreosComV1NamespacedServiceMonitor = (
  args: ReplaceMonitoringCoreosComV1NamespacedServiceMonitorApiArg,
  options?: Options
) => {
  return apiClient<ReplaceMonitoringCoreosComV1NamespacedServiceMonitorApiResponse>(
    {
      path: `/apis/monitoring.coreos.com/v1/namespaces/${args['namespace']}/servicemonitors/${args.name}`,
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
export const deleteMonitoringCoreosComV1NamespacedServiceMonitor = (
  args: DeleteMonitoringCoreosComV1NamespacedServiceMonitorApiArg,
  options?: Options
) => {
  return apiClient<DeleteMonitoringCoreosComV1NamespacedServiceMonitorApiResponse>(
    {
      path: `/apis/monitoring.coreos.com/v1/namespaces/${args['namespace']}/servicemonitors/${args.name}`,
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
export const patchMonitoringCoreosComV1NamespacedServiceMonitor = (
  args: PatchMonitoringCoreosComV1NamespacedServiceMonitorApiArg,
  options?: Options
) => {
  return apiClient<PatchMonitoringCoreosComV1NamespacedServiceMonitorApiResponse>(
    {
      path: `/apis/monitoring.coreos.com/v1/namespaces/${args['namespace']}/servicemonitors/${args.name}`,
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
export const listMonitoringCoreosComV1NamespacedThanosRuler = (
  args: ListMonitoringCoreosComV1NamespacedThanosRulerApiArg,
  options?: Options
) => {
  return apiClient<ListMonitoringCoreosComV1NamespacedThanosRulerApiResponse>(
    {
      path: `/apis/monitoring.coreos.com/v1/namespaces/${args['namespace']}/thanosrulers`,
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
export const createMonitoringCoreosComV1NamespacedThanosRuler = (
  args: CreateMonitoringCoreosComV1NamespacedThanosRulerApiArg,
  options?: Options
) => {
  return apiClient<CreateMonitoringCoreosComV1NamespacedThanosRulerApiResponse>(
    {
      path: `/apis/monitoring.coreos.com/v1/namespaces/${args['namespace']}/thanosrulers`,
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
export const deleteMonitoringCoreosComV1CollectionNamespacedThanosRuler = (
  args: DeleteMonitoringCoreosComV1CollectionNamespacedThanosRulerApiArg,
  options?: Options
) => {
  return apiClient<DeleteMonitoringCoreosComV1CollectionNamespacedThanosRulerApiResponse>(
    {
      path: `/apis/monitoring.coreos.com/v1/namespaces/${args['namespace']}/thanosrulers`,
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
export const readMonitoringCoreosComV1NamespacedThanosRuler = (
  args: ReadMonitoringCoreosComV1NamespacedThanosRulerApiArg,
  options?: Options
) => {
  return apiClient<ReadMonitoringCoreosComV1NamespacedThanosRulerApiResponse>(
    {
      path: `/apis/monitoring.coreos.com/v1/namespaces/${args['namespace']}/thanosrulers/${args.name}`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceMonitoringCoreosComV1NamespacedThanosRuler = (
  args: ReplaceMonitoringCoreosComV1NamespacedThanosRulerApiArg,
  options?: Options
) => {
  return apiClient<ReplaceMonitoringCoreosComV1NamespacedThanosRulerApiResponse>(
    {
      path: `/apis/monitoring.coreos.com/v1/namespaces/${args['namespace']}/thanosrulers/${args.name}`,
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
export const deleteMonitoringCoreosComV1NamespacedThanosRuler = (
  args: DeleteMonitoringCoreosComV1NamespacedThanosRulerApiArg,
  options?: Options
) => {
  return apiClient<DeleteMonitoringCoreosComV1NamespacedThanosRulerApiResponse>(
    {
      path: `/apis/monitoring.coreos.com/v1/namespaces/${args['namespace']}/thanosrulers/${args.name}`,
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
export const patchMonitoringCoreosComV1NamespacedThanosRuler = (
  args: PatchMonitoringCoreosComV1NamespacedThanosRulerApiArg,
  options?: Options
) => {
  return apiClient<PatchMonitoringCoreosComV1NamespacedThanosRulerApiResponse>(
    {
      path: `/apis/monitoring.coreos.com/v1/namespaces/${args['namespace']}/thanosrulers/${args.name}`,
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
export const listMonitoringCoreosComV1PodMonitorForAllNamespaces = (
  args: ListMonitoringCoreosComV1PodMonitorForAllNamespacesApiArg,
  options?: Options
) => {
  return apiClient<ListMonitoringCoreosComV1PodMonitorForAllNamespacesApiResponse>(
    {
      path: `/apis/monitoring.coreos.com/v1/podmonitors`,
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
export const listMonitoringCoreosComV1ProbeForAllNamespaces = (
  args: ListMonitoringCoreosComV1ProbeForAllNamespacesApiArg,
  options?: Options
) => {
  return apiClient<ListMonitoringCoreosComV1ProbeForAllNamespacesApiResponse>(
    {
      path: `/apis/monitoring.coreos.com/v1/probes`,
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
export const listMonitoringCoreosComV1PrometheusForAllNamespaces = (
  args: ListMonitoringCoreosComV1PrometheusForAllNamespacesApiArg,
  options?: Options
) => {
  return apiClient<ListMonitoringCoreosComV1PrometheusForAllNamespacesApiResponse>(
    {
      path: `/apis/monitoring.coreos.com/v1/prometheuses`,
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
export const listMonitoringCoreosComV1PrometheusRuleForAllNamespaces = (
  args: ListMonitoringCoreosComV1PrometheusRuleForAllNamespacesApiArg,
  options?: Options
) => {
  return apiClient<ListMonitoringCoreosComV1PrometheusRuleForAllNamespacesApiResponse>(
    {
      path: `/apis/monitoring.coreos.com/v1/prometheusrules`,
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
export const listMonitoringCoreosComV1ServiceMonitorForAllNamespaces = (
  args: ListMonitoringCoreosComV1ServiceMonitorForAllNamespacesApiArg,
  options?: Options
) => {
  return apiClient<ListMonitoringCoreosComV1ServiceMonitorForAllNamespacesApiResponse>(
    {
      path: `/apis/monitoring.coreos.com/v1/servicemonitors`,
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
export const listMonitoringCoreosComV1ThanosRulerForAllNamespaces = (
  args: ListMonitoringCoreosComV1ThanosRulerForAllNamespacesApiArg,
  options?: Options
) => {
  return apiClient<ListMonitoringCoreosComV1ThanosRulerForAllNamespacesApiResponse>(
    {
      path: `/apis/monitoring.coreos.com/v1/thanosrulers`,
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
export type ListMonitoringCoreosComV1AlertmanagerForAllNamespacesApiResponse =
  /** status 200 OK */ ComCoreosMonitoringV1AlertmanagerList
export type ListMonitoringCoreosComV1AlertmanagerForAllNamespacesApiArg = {
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
export type ListMonitoringCoreosComV1NamespacedAlertmanagerApiResponse =
  /** status 200 OK */ ComCoreosMonitoringV1AlertmanagerList
export type ListMonitoringCoreosComV1NamespacedAlertmanagerApiArg = {
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
export type CreateMonitoringCoreosComV1NamespacedAlertmanagerApiResponse =
  /** status 200 OK */
    | ComCoreosMonitoringV1Alertmanager
    | /** status 201 Created */ ComCoreosMonitoringV1Alertmanager
    | /** status 202 Accepted */ ComCoreosMonitoringV1Alertmanager
export type CreateMonitoringCoreosComV1NamespacedAlertmanagerApiArg = {
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
} & (
  | {
      contentType: 'application/json'
      body: ComCoreosMonitoringV1Alertmanager
    }
  | {
      contentType: 'application/yaml'
      body: ComCoreosMonitoringV1Alertmanager
    }
)
export type DeleteMonitoringCoreosComV1CollectionNamespacedAlertmanagerApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteMonitoringCoreosComV1CollectionNamespacedAlertmanagerApiArg =
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
export type ReadMonitoringCoreosComV1NamespacedAlertmanagerApiResponse =
  /** status 200 OK */ ComCoreosMonitoringV1Alertmanager
export type ReadMonitoringCoreosComV1NamespacedAlertmanagerApiArg = {
  /** name of the Alertmanager */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceMonitoringCoreosComV1NamespacedAlertmanagerApiResponse =
  /** status 200 OK */
    | ComCoreosMonitoringV1Alertmanager
    | /** status 201 Created */ ComCoreosMonitoringV1Alertmanager
export type ReplaceMonitoringCoreosComV1NamespacedAlertmanagerApiArg = {
  /** name of the Alertmanager */
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
} & (
  | {
      contentType: 'application/json'
      body: ComCoreosMonitoringV1Alertmanager
    }
  | {
      contentType: 'application/yaml'
      body: ComCoreosMonitoringV1Alertmanager
    }
)
export type DeleteMonitoringCoreosComV1NamespacedAlertmanagerApiResponse =
  /** status 200 OK */
    | IoK8SApimachineryPkgApisMetaV1Status
    | /** status 202 Accepted */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteMonitoringCoreosComV1NamespacedAlertmanagerApiArg = {
  /** name of the Alertmanager */
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
export type PatchMonitoringCoreosComV1NamespacedAlertmanagerApiResponse =
  /** status 200 OK */ ComCoreosMonitoringV1Alertmanager
export type PatchMonitoringCoreosComV1NamespacedAlertmanagerApiArg = {
  /** name of the Alertmanager */
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
} & (
  | {
      contentType: 'application/apply-patch+yaml'
      body: ComCoreosMonitoringV1Alertmanager
    }
  | {
      contentType: 'application/json-patch+json'
      body: IoK8SApimachineryPkgApisMetaV1Patch
    }
  | {
      contentType: 'application/merge-patch+json'
      body: IoK8SApimachineryPkgApisMetaV1Patch
    }
)
export type ListMonitoringCoreosComV1NamespacedPodMonitorApiResponse =
  /** status 200 OK */ ComCoreosMonitoringV1PodMonitorList
export type ListMonitoringCoreosComV1NamespacedPodMonitorApiArg = {
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
export type CreateMonitoringCoreosComV1NamespacedPodMonitorApiResponse =
  /** status 200 OK */
    | ComCoreosMonitoringV1PodMonitor
    | /** status 201 Created */ ComCoreosMonitoringV1PodMonitor
    | /** status 202 Accepted */ ComCoreosMonitoringV1PodMonitor
export type CreateMonitoringCoreosComV1NamespacedPodMonitorApiArg = {
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
} & (
  | {
      contentType: 'application/json'
      body: ComCoreosMonitoringV1PodMonitor
    }
  | {
      contentType: 'application/yaml'
      body: ComCoreosMonitoringV1PodMonitor
    }
)
export type DeleteMonitoringCoreosComV1CollectionNamespacedPodMonitorApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteMonitoringCoreosComV1CollectionNamespacedPodMonitorApiArg = {
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
export type ReadMonitoringCoreosComV1NamespacedPodMonitorApiResponse =
  /** status 200 OK */ ComCoreosMonitoringV1PodMonitor
export type ReadMonitoringCoreosComV1NamespacedPodMonitorApiArg = {
  /** name of the PodMonitor */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceMonitoringCoreosComV1NamespacedPodMonitorApiResponse =
  /** status 200 OK */
    | ComCoreosMonitoringV1PodMonitor
    | /** status 201 Created */ ComCoreosMonitoringV1PodMonitor
export type ReplaceMonitoringCoreosComV1NamespacedPodMonitorApiArg = {
  /** name of the PodMonitor */
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
} & (
  | {
      contentType: 'application/json'
      body: ComCoreosMonitoringV1PodMonitor
    }
  | {
      contentType: 'application/yaml'
      body: ComCoreosMonitoringV1PodMonitor
    }
)
export type DeleteMonitoringCoreosComV1NamespacedPodMonitorApiResponse =
  /** status 200 OK */
    | IoK8SApimachineryPkgApisMetaV1Status
    | /** status 202 Accepted */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteMonitoringCoreosComV1NamespacedPodMonitorApiArg = {
  /** name of the PodMonitor */
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
export type PatchMonitoringCoreosComV1NamespacedPodMonitorApiResponse =
  /** status 200 OK */ ComCoreosMonitoringV1PodMonitor
export type PatchMonitoringCoreosComV1NamespacedPodMonitorApiArg = {
  /** name of the PodMonitor */
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
} & (
  | {
      contentType: 'application/apply-patch+yaml'
      body: ComCoreosMonitoringV1PodMonitor
    }
  | {
      contentType: 'application/json-patch+json'
      body: IoK8SApimachineryPkgApisMetaV1Patch
    }
  | {
      contentType: 'application/merge-patch+json'
      body: IoK8SApimachineryPkgApisMetaV1Patch
    }
)
export type ListMonitoringCoreosComV1NamespacedProbeApiResponse =
  /** status 200 OK */ ComCoreosMonitoringV1ProbeList
export type ListMonitoringCoreosComV1NamespacedProbeApiArg = {
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
export type CreateMonitoringCoreosComV1NamespacedProbeApiResponse =
  /** status 200 OK */
    | ComCoreosMonitoringV1Probe
    | /** status 201 Created */ ComCoreosMonitoringV1Probe
    | /** status 202 Accepted */ ComCoreosMonitoringV1Probe
export type CreateMonitoringCoreosComV1NamespacedProbeApiArg = {
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
} & (
  | {
      contentType: 'application/json'
      body: ComCoreosMonitoringV1Probe
    }
  | {
      contentType: 'application/yaml'
      body: ComCoreosMonitoringV1Probe
    }
)
export type DeleteMonitoringCoreosComV1CollectionNamespacedProbeApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteMonitoringCoreosComV1CollectionNamespacedProbeApiArg = {
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
export type ReadMonitoringCoreosComV1NamespacedProbeApiResponse =
  /** status 200 OK */ ComCoreosMonitoringV1Probe
export type ReadMonitoringCoreosComV1NamespacedProbeApiArg = {
  /** name of the Probe */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceMonitoringCoreosComV1NamespacedProbeApiResponse =
  /** status 200 OK */
    | ComCoreosMonitoringV1Probe
    | /** status 201 Created */ ComCoreosMonitoringV1Probe
export type ReplaceMonitoringCoreosComV1NamespacedProbeApiArg = {
  /** name of the Probe */
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
} & (
  | {
      contentType: 'application/json'
      body: ComCoreosMonitoringV1Probe
    }
  | {
      contentType: 'application/yaml'
      body: ComCoreosMonitoringV1Probe
    }
)
export type DeleteMonitoringCoreosComV1NamespacedProbeApiResponse =
  /** status 200 OK */
    | IoK8SApimachineryPkgApisMetaV1Status
    | /** status 202 Accepted */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteMonitoringCoreosComV1NamespacedProbeApiArg = {
  /** name of the Probe */
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
export type PatchMonitoringCoreosComV1NamespacedProbeApiResponse =
  /** status 200 OK */ ComCoreosMonitoringV1Probe
export type PatchMonitoringCoreosComV1NamespacedProbeApiArg = {
  /** name of the Probe */
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
} & (
  | {
      contentType: 'application/apply-patch+yaml'
      body: ComCoreosMonitoringV1Probe
    }
  | {
      contentType: 'application/json-patch+json'
      body: IoK8SApimachineryPkgApisMetaV1Patch
    }
  | {
      contentType: 'application/merge-patch+json'
      body: IoK8SApimachineryPkgApisMetaV1Patch
    }
)
export type ListMonitoringCoreosComV1NamespacedPrometheusApiResponse =
  /** status 200 OK */ ComCoreosMonitoringV1PrometheusList
export type ListMonitoringCoreosComV1NamespacedPrometheusApiArg = {
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
export type CreateMonitoringCoreosComV1NamespacedPrometheusApiResponse =
  /** status 200 OK */
    | ComCoreosMonitoringV1Prometheus
    | /** status 201 Created */ ComCoreosMonitoringV1Prometheus
    | /** status 202 Accepted */ ComCoreosMonitoringV1Prometheus
export type CreateMonitoringCoreosComV1NamespacedPrometheusApiArg = {
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
} & (
  | {
      contentType: 'application/json'
      body: ComCoreosMonitoringV1Prometheus
    }
  | {
      contentType: 'application/yaml'
      body: ComCoreosMonitoringV1Prometheus
    }
)
export type DeleteMonitoringCoreosComV1CollectionNamespacedPrometheusApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteMonitoringCoreosComV1CollectionNamespacedPrometheusApiArg = {
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
export type ReadMonitoringCoreosComV1NamespacedPrometheusApiResponse =
  /** status 200 OK */ ComCoreosMonitoringV1Prometheus
export type ReadMonitoringCoreosComV1NamespacedPrometheusApiArg = {
  /** name of the Prometheus */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceMonitoringCoreosComV1NamespacedPrometheusApiResponse =
  /** status 200 OK */
    | ComCoreosMonitoringV1Prometheus
    | /** status 201 Created */ ComCoreosMonitoringV1Prometheus
export type ReplaceMonitoringCoreosComV1NamespacedPrometheusApiArg = {
  /** name of the Prometheus */
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
} & (
  | {
      contentType: 'application/json'
      body: ComCoreosMonitoringV1Prometheus
    }
  | {
      contentType: 'application/yaml'
      body: ComCoreosMonitoringV1Prometheus
    }
)
export type DeleteMonitoringCoreosComV1NamespacedPrometheusApiResponse =
  /** status 200 OK */
    | IoK8SApimachineryPkgApisMetaV1Status
    | /** status 202 Accepted */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteMonitoringCoreosComV1NamespacedPrometheusApiArg = {
  /** name of the Prometheus */
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
export type PatchMonitoringCoreosComV1NamespacedPrometheusApiResponse =
  /** status 200 OK */ ComCoreosMonitoringV1Prometheus
export type PatchMonitoringCoreosComV1NamespacedPrometheusApiArg = {
  /** name of the Prometheus */
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
} & (
  | {
      contentType: 'application/apply-patch+yaml'
      body: ComCoreosMonitoringV1Prometheus
    }
  | {
      contentType: 'application/json-patch+json'
      body: IoK8SApimachineryPkgApisMetaV1Patch
    }
  | {
      contentType: 'application/merge-patch+json'
      body: IoK8SApimachineryPkgApisMetaV1Patch
    }
)
export type ReadMonitoringCoreosComV1NamespacedPrometheusStatusApiResponse =
  /** status 200 OK */ ComCoreosMonitoringV1Prometheus
export type ReadMonitoringCoreosComV1NamespacedPrometheusStatusApiArg = {
  /** name of the Prometheus */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceMonitoringCoreosComV1NamespacedPrometheusStatusApiResponse =
  /** status 200 OK */
    | ComCoreosMonitoringV1Prometheus
    | /** status 201 Created */ ComCoreosMonitoringV1Prometheus
export type ReplaceMonitoringCoreosComV1NamespacedPrometheusStatusApiArg = {
  /** name of the Prometheus */
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
} & (
  | {
      contentType: 'application/json'
      body: ComCoreosMonitoringV1Prometheus
    }
  | {
      contentType: 'application/yaml'
      body: ComCoreosMonitoringV1Prometheus
    }
)
export type PatchMonitoringCoreosComV1NamespacedPrometheusStatusApiResponse =
  /** status 200 OK */ ComCoreosMonitoringV1Prometheus
export type PatchMonitoringCoreosComV1NamespacedPrometheusStatusApiArg = {
  /** name of the Prometheus */
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
} & (
  | {
      contentType: 'application/apply-patch+yaml'
      body: ComCoreosMonitoringV1Prometheus
    }
  | {
      contentType: 'application/json-patch+json'
      body: IoK8SApimachineryPkgApisMetaV1Patch
    }
  | {
      contentType: 'application/merge-patch+json'
      body: IoK8SApimachineryPkgApisMetaV1Patch
    }
)
export type ListMonitoringCoreosComV1NamespacedPrometheusRuleApiResponse =
  /** status 200 OK */ ComCoreosMonitoringV1PrometheusRuleList
export type ListMonitoringCoreosComV1NamespacedPrometheusRuleApiArg = {
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
export type CreateMonitoringCoreosComV1NamespacedPrometheusRuleApiResponse =
  /** status 200 OK */
    | ComCoreosMonitoringV1PrometheusRule
    | /** status 201 Created */ ComCoreosMonitoringV1PrometheusRule
    | /** status 202 Accepted */ ComCoreosMonitoringV1PrometheusRule
export type CreateMonitoringCoreosComV1NamespacedPrometheusRuleApiArg = {
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
} & (
  | {
      contentType: 'application/json'
      body: ComCoreosMonitoringV1PrometheusRule
    }
  | {
      contentType: 'application/yaml'
      body: ComCoreosMonitoringV1PrometheusRule
    }
)
export type DeleteMonitoringCoreosComV1CollectionNamespacedPrometheusRuleApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteMonitoringCoreosComV1CollectionNamespacedPrometheusRuleApiArg =
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
export type ReadMonitoringCoreosComV1NamespacedPrometheusRuleApiResponse =
  /** status 200 OK */ ComCoreosMonitoringV1PrometheusRule
export type ReadMonitoringCoreosComV1NamespacedPrometheusRuleApiArg = {
  /** name of the PrometheusRule */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceMonitoringCoreosComV1NamespacedPrometheusRuleApiResponse =
  /** status 200 OK */
    | ComCoreosMonitoringV1PrometheusRule
    | /** status 201 Created */ ComCoreosMonitoringV1PrometheusRule
export type ReplaceMonitoringCoreosComV1NamespacedPrometheusRuleApiArg = {
  /** name of the PrometheusRule */
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
} & (
  | {
      contentType: 'application/json'
      body: ComCoreosMonitoringV1PrometheusRule
    }
  | {
      contentType: 'application/yaml'
      body: ComCoreosMonitoringV1PrometheusRule
    }
)
export type DeleteMonitoringCoreosComV1NamespacedPrometheusRuleApiResponse =
  /** status 200 OK */
    | IoK8SApimachineryPkgApisMetaV1Status
    | /** status 202 Accepted */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteMonitoringCoreosComV1NamespacedPrometheusRuleApiArg = {
  /** name of the PrometheusRule */
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
export type PatchMonitoringCoreosComV1NamespacedPrometheusRuleApiResponse =
  /** status 200 OK */ ComCoreosMonitoringV1PrometheusRule
export type PatchMonitoringCoreosComV1NamespacedPrometheusRuleApiArg = {
  /** name of the PrometheusRule */
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
} & (
  | {
      contentType: 'application/apply-patch+yaml'
      body: ComCoreosMonitoringV1PrometheusRule
    }
  | {
      contentType: 'application/json-patch+json'
      body: IoK8SApimachineryPkgApisMetaV1Patch
    }
  | {
      contentType: 'application/merge-patch+json'
      body: IoK8SApimachineryPkgApisMetaV1Patch
    }
)
export type ListMonitoringCoreosComV1NamespacedServiceMonitorApiResponse =
  /** status 200 OK */ ComCoreosMonitoringV1ServiceMonitorList
export type ListMonitoringCoreosComV1NamespacedServiceMonitorApiArg = {
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
export type CreateMonitoringCoreosComV1NamespacedServiceMonitorApiResponse =
  /** status 200 OK */
    | ComCoreosMonitoringV1ServiceMonitor
    | /** status 201 Created */ ComCoreosMonitoringV1ServiceMonitor
    | /** status 202 Accepted */ ComCoreosMonitoringV1ServiceMonitor
export type CreateMonitoringCoreosComV1NamespacedServiceMonitorApiArg = {
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
} & (
  | {
      contentType: 'application/json'
      body: ComCoreosMonitoringV1ServiceMonitor
    }
  | {
      contentType: 'application/yaml'
      body: ComCoreosMonitoringV1ServiceMonitor
    }
)
export type DeleteMonitoringCoreosComV1CollectionNamespacedServiceMonitorApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteMonitoringCoreosComV1CollectionNamespacedServiceMonitorApiArg =
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
export type ReadMonitoringCoreosComV1NamespacedServiceMonitorApiResponse =
  /** status 200 OK */ ComCoreosMonitoringV1ServiceMonitor
export type ReadMonitoringCoreosComV1NamespacedServiceMonitorApiArg = {
  /** name of the ServiceMonitor */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceMonitoringCoreosComV1NamespacedServiceMonitorApiResponse =
  /** status 200 OK */
    | ComCoreosMonitoringV1ServiceMonitor
    | /** status 201 Created */ ComCoreosMonitoringV1ServiceMonitor
export type ReplaceMonitoringCoreosComV1NamespacedServiceMonitorApiArg = {
  /** name of the ServiceMonitor */
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
} & (
  | {
      contentType: 'application/json'
      body: ComCoreosMonitoringV1ServiceMonitor
    }
  | {
      contentType: 'application/yaml'
      body: ComCoreosMonitoringV1ServiceMonitor
    }
)
export type DeleteMonitoringCoreosComV1NamespacedServiceMonitorApiResponse =
  /** status 200 OK */
    | IoK8SApimachineryPkgApisMetaV1Status
    | /** status 202 Accepted */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteMonitoringCoreosComV1NamespacedServiceMonitorApiArg = {
  /** name of the ServiceMonitor */
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
export type PatchMonitoringCoreosComV1NamespacedServiceMonitorApiResponse =
  /** status 200 OK */ ComCoreosMonitoringV1ServiceMonitor
export type PatchMonitoringCoreosComV1NamespacedServiceMonitorApiArg = {
  /** name of the ServiceMonitor */
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
} & (
  | {
      contentType: 'application/apply-patch+yaml'
      body: ComCoreosMonitoringV1ServiceMonitor
    }
  | {
      contentType: 'application/json-patch+json'
      body: IoK8SApimachineryPkgApisMetaV1Patch
    }
  | {
      contentType: 'application/merge-patch+json'
      body: IoK8SApimachineryPkgApisMetaV1Patch
    }
)
export type ListMonitoringCoreosComV1NamespacedThanosRulerApiResponse =
  /** status 200 OK */ ComCoreosMonitoringV1ThanosRulerList
export type ListMonitoringCoreosComV1NamespacedThanosRulerApiArg = {
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
export type CreateMonitoringCoreosComV1NamespacedThanosRulerApiResponse =
  /** status 200 OK */
    | ComCoreosMonitoringV1ThanosRuler
    | /** status 201 Created */ ComCoreosMonitoringV1ThanosRuler
    | /** status 202 Accepted */ ComCoreosMonitoringV1ThanosRuler
export type CreateMonitoringCoreosComV1NamespacedThanosRulerApiArg = {
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
} & (
  | {
      contentType: 'application/json'
      body: ComCoreosMonitoringV1ThanosRuler
    }
  | {
      contentType: 'application/yaml'
      body: ComCoreosMonitoringV1ThanosRuler
    }
)
export type DeleteMonitoringCoreosComV1CollectionNamespacedThanosRulerApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteMonitoringCoreosComV1CollectionNamespacedThanosRulerApiArg = {
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
export type ReadMonitoringCoreosComV1NamespacedThanosRulerApiResponse =
  /** status 200 OK */ ComCoreosMonitoringV1ThanosRuler
export type ReadMonitoringCoreosComV1NamespacedThanosRulerApiArg = {
  /** name of the ThanosRuler */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceMonitoringCoreosComV1NamespacedThanosRulerApiResponse =
  /** status 200 OK */
    | ComCoreosMonitoringV1ThanosRuler
    | /** status 201 Created */ ComCoreosMonitoringV1ThanosRuler
export type ReplaceMonitoringCoreosComV1NamespacedThanosRulerApiArg = {
  /** name of the ThanosRuler */
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
} & (
  | {
      contentType: 'application/json'
      body: ComCoreosMonitoringV1ThanosRuler
    }
  | {
      contentType: 'application/yaml'
      body: ComCoreosMonitoringV1ThanosRuler
    }
)
export type DeleteMonitoringCoreosComV1NamespacedThanosRulerApiResponse =
  /** status 200 OK */
    | IoK8SApimachineryPkgApisMetaV1Status
    | /** status 202 Accepted */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteMonitoringCoreosComV1NamespacedThanosRulerApiArg = {
  /** name of the ThanosRuler */
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
export type PatchMonitoringCoreosComV1NamespacedThanosRulerApiResponse =
  /** status 200 OK */ ComCoreosMonitoringV1ThanosRuler
export type PatchMonitoringCoreosComV1NamespacedThanosRulerApiArg = {
  /** name of the ThanosRuler */
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
} & (
  | {
      contentType: 'application/apply-patch+yaml'
      body: ComCoreosMonitoringV1ThanosRuler
    }
  | {
      contentType: 'application/json-patch+json'
      body: IoK8SApimachineryPkgApisMetaV1Patch
    }
  | {
      contentType: 'application/merge-patch+json'
      body: IoK8SApimachineryPkgApisMetaV1Patch
    }
)
export type ListMonitoringCoreosComV1PodMonitorForAllNamespacesApiResponse =
  /** status 200 OK */ ComCoreosMonitoringV1PodMonitorList
export type ListMonitoringCoreosComV1PodMonitorForAllNamespacesApiArg = {
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
export type ListMonitoringCoreosComV1ProbeForAllNamespacesApiResponse =
  /** status 200 OK */ ComCoreosMonitoringV1ProbeList
export type ListMonitoringCoreosComV1ProbeForAllNamespacesApiArg = {
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
export type ListMonitoringCoreosComV1PrometheusForAllNamespacesApiResponse =
  /** status 200 OK */ ComCoreosMonitoringV1PrometheusList
export type ListMonitoringCoreosComV1PrometheusForAllNamespacesApiArg = {
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
export type ListMonitoringCoreosComV1PrometheusRuleForAllNamespacesApiResponse =
  /** status 200 OK */ ComCoreosMonitoringV1PrometheusRuleList
export type ListMonitoringCoreosComV1PrometheusRuleForAllNamespacesApiArg = {
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
export type ListMonitoringCoreosComV1ServiceMonitorForAllNamespacesApiResponse =
  /** status 200 OK */ ComCoreosMonitoringV1ServiceMonitorList
export type ListMonitoringCoreosComV1ServiceMonitorForAllNamespacesApiArg = {
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
export type ListMonitoringCoreosComV1ThanosRulerForAllNamespacesApiResponse =
  /** status 200 OK */ ComCoreosMonitoringV1ThanosRulerList
export type ListMonitoringCoreosComV1ThanosRulerForAllNamespacesApiArg = {
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
export type ComCoreosMonitoringV1Alertmanager = {
  apiVersion?: string | undefined
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ObjectMeta | undefined
  spec: {
    additionalPeers?: string[] | undefined
    affinity?:
      | {
          nodeAffinity?:
            | {
                preferredDuringSchedulingIgnoredDuringExecution?:
                  | {
                      preference: {
                        matchExpressions?:
                          | {
                              key: string
                              operator: string
                              values?: string[] | undefined
                            }[]
                          | undefined
                        matchFields?:
                          | {
                              key: string
                              operator: string
                              values?: string[] | undefined
                            }[]
                          | undefined
                      }
                      weight: number
                    }[]
                  | undefined
                requiredDuringSchedulingIgnoredDuringExecution?:
                  | {
                      nodeSelectorTerms: {
                        matchExpressions?:
                          | {
                              key: string
                              operator: string
                              values?: string[] | undefined
                            }[]
                          | undefined
                        matchFields?:
                          | {
                              key: string
                              operator: string
                              values?: string[] | undefined
                            }[]
                          | undefined
                      }[]
                    }
                  | undefined
              }
            | undefined
          podAffinity?:
            | {
                preferredDuringSchedulingIgnoredDuringExecution?:
                  | {
                      podAffinityTerm: {
                        labelSelector?:
                          | {
                              matchExpressions?:
                                | {
                                    key: string
                                    operator: string
                                    values?: string[] | undefined
                                  }[]
                                | undefined
                              matchLabels?:
                                | {
                                    [key: string]: string
                                  }
                                | undefined
                            }
                          | undefined
                        namespaceSelector?:
                          | {
                              matchExpressions?:
                                | {
                                    key: string
                                    operator: string
                                    values?: string[] | undefined
                                  }[]
                                | undefined
                              matchLabels?:
                                | {
                                    [key: string]: string
                                  }
                                | undefined
                            }
                          | undefined
                        namespaces?: string[] | undefined
                        topologyKey: string
                      }
                      weight: number
                    }[]
                  | undefined
                requiredDuringSchedulingIgnoredDuringExecution?:
                  | {
                      labelSelector?:
                        | {
                            matchExpressions?:
                              | {
                                  key: string
                                  operator: string
                                  values?: string[] | undefined
                                }[]
                              | undefined
                            matchLabels?:
                              | {
                                  [key: string]: string
                                }
                              | undefined
                          }
                        | undefined
                      namespaceSelector?:
                        | {
                            matchExpressions?:
                              | {
                                  key: string
                                  operator: string
                                  values?: string[] | undefined
                                }[]
                              | undefined
                            matchLabels?:
                              | {
                                  [key: string]: string
                                }
                              | undefined
                          }
                        | undefined
                      namespaces?: string[] | undefined
                      topologyKey: string
                    }[]
                  | undefined
              }
            | undefined
          podAntiAffinity?:
            | {
                preferredDuringSchedulingIgnoredDuringExecution?:
                  | {
                      podAffinityTerm: {
                        labelSelector?:
                          | {
                              matchExpressions?:
                                | {
                                    key: string
                                    operator: string
                                    values?: string[] | undefined
                                  }[]
                                | undefined
                              matchLabels?:
                                | {
                                    [key: string]: string
                                  }
                                | undefined
                            }
                          | undefined
                        namespaceSelector?:
                          | {
                              matchExpressions?:
                                | {
                                    key: string
                                    operator: string
                                    values?: string[] | undefined
                                  }[]
                                | undefined
                              matchLabels?:
                                | {
                                    [key: string]: string
                                  }
                                | undefined
                            }
                          | undefined
                        namespaces?: string[] | undefined
                        topologyKey: string
                      }
                      weight: number
                    }[]
                  | undefined
                requiredDuringSchedulingIgnoredDuringExecution?:
                  | {
                      labelSelector?:
                        | {
                            matchExpressions?:
                              | {
                                  key: string
                                  operator: string
                                  values?: string[] | undefined
                                }[]
                              | undefined
                            matchLabels?:
                              | {
                                  [key: string]: string
                                }
                              | undefined
                          }
                        | undefined
                      namespaceSelector?:
                        | {
                            matchExpressions?:
                              | {
                                  key: string
                                  operator: string
                                  values?: string[] | undefined
                                }[]
                              | undefined
                            matchLabels?:
                              | {
                                  [key: string]: string
                                }
                              | undefined
                          }
                        | undefined
                      namespaces?: string[] | undefined
                      topologyKey: string
                    }[]
                  | undefined
              }
            | undefined
        }
      | undefined
    alertmanagerConfigNamespaceSelector?:
      | {
          matchExpressions?:
            | {
                key: string
                operator: string
                values?: string[] | undefined
              }[]
            | undefined
          matchLabels?:
            | {
                [key: string]: string
              }
            | undefined
        }
      | undefined
    alertmanagerConfigSelector?:
      | {
          matchExpressions?:
            | {
                key: string
                operator: string
                values?: string[] | undefined
              }[]
            | undefined
          matchLabels?:
            | {
                [key: string]: string
              }
            | undefined
        }
      | undefined
    alertmanagerConfiguration?:
      | {
          name?: string | undefined
        }
      | undefined
    baseImage?: string | undefined
    clusterAdvertiseAddress?: string | undefined
    clusterGossipInterval?: string | undefined
    clusterPeerTimeout?: string | undefined
    clusterPushpullInterval?: string | undefined
    configMaps?: string[] | undefined
    configSecret?: string | undefined
    containers?:
      | {
          args?: string[] | undefined
          command?: string[] | undefined
          env?:
            | {
                name: string
                value?: string | undefined
                valueFrom?:
                  | {
                      configMapKeyRef?:
                        | {
                            key: string
                            name?: string | undefined
                            optional?: boolean | undefined
                          }
                        | undefined
                      fieldRef?:
                        | {
                            apiVersion?: string | undefined
                            fieldPath: string
                          }
                        | undefined
                      resourceFieldRef?:
                        | {
                            containerName?: string | undefined
                            divisor?: (number | string) | undefined
                            resource: string
                          }
                        | undefined
                      secretKeyRef?:
                        | {
                            key: string
                            name?: string | undefined
                            optional?: boolean | undefined
                          }
                        | undefined
                    }
                  | undefined
              }[]
            | undefined
          envFrom?:
            | {
                configMapRef?:
                  | {
                      name?: string | undefined
                      optional?: boolean | undefined
                    }
                  | undefined
                prefix?: string | undefined
                secretRef?:
                  | {
                      name?: string | undefined
                      optional?: boolean | undefined
                    }
                  | undefined
              }[]
            | undefined
          image?: string | undefined
          imagePullPolicy?: string | undefined
          lifecycle?:
            | {
                postStart?:
                  | {
                      exec?:
                        | {
                            command?: string[] | undefined
                          }
                        | undefined
                      httpGet?:
                        | {
                            host?: string | undefined
                            httpHeaders?:
                              | {
                                  name: string
                                  value: string
                                }[]
                              | undefined
                            path?: string | undefined
                            port: number | string
                            scheme?: string | undefined
                          }
                        | undefined
                      tcpSocket?:
                        | {
                            host?: string | undefined
                            port: number | string
                          }
                        | undefined
                    }
                  | undefined
                preStop?:
                  | {
                      exec?:
                        | {
                            command?: string[] | undefined
                          }
                        | undefined
                      httpGet?:
                        | {
                            host?: string | undefined
                            httpHeaders?:
                              | {
                                  name: string
                                  value: string
                                }[]
                              | undefined
                            path?: string | undefined
                            port: number | string
                            scheme?: string | undefined
                          }
                        | undefined
                      tcpSocket?:
                        | {
                            host?: string | undefined
                            port: number | string
                          }
                        | undefined
                    }
                  | undefined
              }
            | undefined
          livenessProbe?:
            | {
                exec?:
                  | {
                      command?: string[] | undefined
                    }
                  | undefined
                failureThreshold?: number | undefined
                grpc?:
                  | {
                      port: number
                      service?: string | undefined
                    }
                  | undefined
                httpGet?:
                  | {
                      host?: string | undefined
                      httpHeaders?:
                        | {
                            name: string
                            value: string
                          }[]
                        | undefined
                      path?: string | undefined
                      port: number | string
                      scheme?: string | undefined
                    }
                  | undefined
                initialDelaySeconds?: number | undefined
                periodSeconds?: number | undefined
                successThreshold?: number | undefined
                tcpSocket?:
                  | {
                      host?: string | undefined
                      port: number | string
                    }
                  | undefined
                terminationGracePeriodSeconds?: number | undefined
                timeoutSeconds?: number | undefined
              }
            | undefined
          name: string
          ports?:
            | {
                containerPort: number
                hostIP?: string | undefined
                hostPort?: number | undefined
                name?: string | undefined
                protocol?: string | undefined
              }[]
            | undefined
          readinessProbe?:
            | {
                exec?:
                  | {
                      command?: string[] | undefined
                    }
                  | undefined
                failureThreshold?: number | undefined
                grpc?:
                  | {
                      port: number
                      service?: string | undefined
                    }
                  | undefined
                httpGet?:
                  | {
                      host?: string | undefined
                      httpHeaders?:
                        | {
                            name: string
                            value: string
                          }[]
                        | undefined
                      path?: string | undefined
                      port: number | string
                      scheme?: string | undefined
                    }
                  | undefined
                initialDelaySeconds?: number | undefined
                periodSeconds?: number | undefined
                successThreshold?: number | undefined
                tcpSocket?:
                  | {
                      host?: string | undefined
                      port: number | string
                    }
                  | undefined
                terminationGracePeriodSeconds?: number | undefined
                timeoutSeconds?: number | undefined
              }
            | undefined
          resources?:
            | {
                limits?:
                  | {
                      [key: string]: number | string
                    }
                  | undefined
                requests?:
                  | {
                      [key: string]: number | string
                    }
                  | undefined
              }
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
                      type: string
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
          startupProbe?:
            | {
                exec?:
                  | {
                      command?: string[] | undefined
                    }
                  | undefined
                failureThreshold?: number | undefined
                grpc?:
                  | {
                      port: number
                      service?: string | undefined
                    }
                  | undefined
                httpGet?:
                  | {
                      host?: string | undefined
                      httpHeaders?:
                        | {
                            name: string
                            value: string
                          }[]
                        | undefined
                      path?: string | undefined
                      port: number | string
                      scheme?: string | undefined
                    }
                  | undefined
                initialDelaySeconds?: number | undefined
                periodSeconds?: number | undefined
                successThreshold?: number | undefined
                tcpSocket?:
                  | {
                      host?: string | undefined
                      port: number | string
                    }
                  | undefined
                terminationGracePeriodSeconds?: number | undefined
                timeoutSeconds?: number | undefined
              }
            | undefined
          stdin?: boolean | undefined
          stdinOnce?: boolean | undefined
          terminationMessagePath?: string | undefined
          terminationMessagePolicy?: string | undefined
          tty?: boolean | undefined
          volumeDevices?:
            | {
                devicePath: string
                name: string
              }[]
            | undefined
          volumeMounts?:
            | {
                mountPath: string
                mountPropagation?: string | undefined
                name: string
                readOnly?: boolean | undefined
                subPath?: string | undefined
                subPathExpr?: string | undefined
              }[]
            | undefined
          workingDir?: string | undefined
        }[]
      | undefined
    externalUrl?: string | undefined
    forceEnableClusterMode?: boolean | undefined
    hostAliases?:
      | {
          hostnames: string[]
          ip: string
        }[]
      | undefined
    image?: string | undefined
    imagePullSecrets?:
      | {
          name?: string | undefined
        }[]
      | undefined
    initContainers?:
      | {
          args?: string[] | undefined
          command?: string[] | undefined
          env?:
            | {
                name: string
                value?: string | undefined
                valueFrom?:
                  | {
                      configMapKeyRef?:
                        | {
                            key: string
                            name?: string | undefined
                            optional?: boolean | undefined
                          }
                        | undefined
                      fieldRef?:
                        | {
                            apiVersion?: string | undefined
                            fieldPath: string
                          }
                        | undefined
                      resourceFieldRef?:
                        | {
                            containerName?: string | undefined
                            divisor?: (number | string) | undefined
                            resource: string
                          }
                        | undefined
                      secretKeyRef?:
                        | {
                            key: string
                            name?: string | undefined
                            optional?: boolean | undefined
                          }
                        | undefined
                    }
                  | undefined
              }[]
            | undefined
          envFrom?:
            | {
                configMapRef?:
                  | {
                      name?: string | undefined
                      optional?: boolean | undefined
                    }
                  | undefined
                prefix?: string | undefined
                secretRef?:
                  | {
                      name?: string | undefined
                      optional?: boolean | undefined
                    }
                  | undefined
              }[]
            | undefined
          image?: string | undefined
          imagePullPolicy?: string | undefined
          lifecycle?:
            | {
                postStart?:
                  | {
                      exec?:
                        | {
                            command?: string[] | undefined
                          }
                        | undefined
                      httpGet?:
                        | {
                            host?: string | undefined
                            httpHeaders?:
                              | {
                                  name: string
                                  value: string
                                }[]
                              | undefined
                            path?: string | undefined
                            port: number | string
                            scheme?: string | undefined
                          }
                        | undefined
                      tcpSocket?:
                        | {
                            host?: string | undefined
                            port: number | string
                          }
                        | undefined
                    }
                  | undefined
                preStop?:
                  | {
                      exec?:
                        | {
                            command?: string[] | undefined
                          }
                        | undefined
                      httpGet?:
                        | {
                            host?: string | undefined
                            httpHeaders?:
                              | {
                                  name: string
                                  value: string
                                }[]
                              | undefined
                            path?: string | undefined
                            port: number | string
                            scheme?: string | undefined
                          }
                        | undefined
                      tcpSocket?:
                        | {
                            host?: string | undefined
                            port: number | string
                          }
                        | undefined
                    }
                  | undefined
              }
            | undefined
          livenessProbe?:
            | {
                exec?:
                  | {
                      command?: string[] | undefined
                    }
                  | undefined
                failureThreshold?: number | undefined
                grpc?:
                  | {
                      port: number
                      service?: string | undefined
                    }
                  | undefined
                httpGet?:
                  | {
                      host?: string | undefined
                      httpHeaders?:
                        | {
                            name: string
                            value: string
                          }[]
                        | undefined
                      path?: string | undefined
                      port: number | string
                      scheme?: string | undefined
                    }
                  | undefined
                initialDelaySeconds?: number | undefined
                periodSeconds?: number | undefined
                successThreshold?: number | undefined
                tcpSocket?:
                  | {
                      host?: string | undefined
                      port: number | string
                    }
                  | undefined
                terminationGracePeriodSeconds?: number | undefined
                timeoutSeconds?: number | undefined
              }
            | undefined
          name: string
          ports?:
            | {
                containerPort: number
                hostIP?: string | undefined
                hostPort?: number | undefined
                name?: string | undefined
                protocol?: string | undefined
              }[]
            | undefined
          readinessProbe?:
            | {
                exec?:
                  | {
                      command?: string[] | undefined
                    }
                  | undefined
                failureThreshold?: number | undefined
                grpc?:
                  | {
                      port: number
                      service?: string | undefined
                    }
                  | undefined
                httpGet?:
                  | {
                      host?: string | undefined
                      httpHeaders?:
                        | {
                            name: string
                            value: string
                          }[]
                        | undefined
                      path?: string | undefined
                      port: number | string
                      scheme?: string | undefined
                    }
                  | undefined
                initialDelaySeconds?: number | undefined
                periodSeconds?: number | undefined
                successThreshold?: number | undefined
                tcpSocket?:
                  | {
                      host?: string | undefined
                      port: number | string
                    }
                  | undefined
                terminationGracePeriodSeconds?: number | undefined
                timeoutSeconds?: number | undefined
              }
            | undefined
          resources?:
            | {
                limits?:
                  | {
                      [key: string]: number | string
                    }
                  | undefined
                requests?:
                  | {
                      [key: string]: number | string
                    }
                  | undefined
              }
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
                      type: string
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
          startupProbe?:
            | {
                exec?:
                  | {
                      command?: string[] | undefined
                    }
                  | undefined
                failureThreshold?: number | undefined
                grpc?:
                  | {
                      port: number
                      service?: string | undefined
                    }
                  | undefined
                httpGet?:
                  | {
                      host?: string | undefined
                      httpHeaders?:
                        | {
                            name: string
                            value: string
                          }[]
                        | undefined
                      path?: string | undefined
                      port: number | string
                      scheme?: string | undefined
                    }
                  | undefined
                initialDelaySeconds?: number | undefined
                periodSeconds?: number | undefined
                successThreshold?: number | undefined
                tcpSocket?:
                  | {
                      host?: string | undefined
                      port: number | string
                    }
                  | undefined
                terminationGracePeriodSeconds?: number | undefined
                timeoutSeconds?: number | undefined
              }
            | undefined
          stdin?: boolean | undefined
          stdinOnce?: boolean | undefined
          terminationMessagePath?: string | undefined
          terminationMessagePolicy?: string | undefined
          tty?: boolean | undefined
          volumeDevices?:
            | {
                devicePath: string
                name: string
              }[]
            | undefined
          volumeMounts?:
            | {
                mountPath: string
                mountPropagation?: string | undefined
                name: string
                readOnly?: boolean | undefined
                subPath?: string | undefined
                subPathExpr?: string | undefined
              }[]
            | undefined
          workingDir?: string | undefined
        }[]
      | undefined
    listenLocal?: boolean | undefined
    logFormat?: ('' | 'logfmt' | 'json') | undefined
    logLevel?: ('' | 'debug' | 'info' | 'warn' | 'error') | undefined
    minReadySeconds?: number | undefined
    nodeSelector?:
      | {
          [key: string]: string
        }
      | undefined
    paused?: boolean | undefined
    podMetadata?:
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
          name?: string | undefined
        }
      | undefined
    portName?: string | undefined
    priorityClassName?: string | undefined
    replicas?: number | undefined
    resources?:
      | {
          limits?:
            | {
                [key: string]: number | string
              }
            | undefined
          requests?:
            | {
                [key: string]: number | string
              }
            | undefined
        }
      | undefined
    retention?: string | undefined
    routePrefix?: string | undefined
    secrets?: string[] | undefined
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
                type: string
              }
            | undefined
          supplementalGroups?: number[] | undefined
          sysctls?:
            | {
                name: string
                value: string
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
    serviceAccountName?: string | undefined
    sha?: string | undefined
    storage?:
      | {
          disableMountSubPath?: boolean | undefined
          emptyDir?:
            | {
                medium?: string | undefined
                sizeLimit?: (number | string) | undefined
              }
            | undefined
          ephemeral?:
            | {
                volumeClaimTemplate?:
                  | {
                      metadata?: object | undefined
                      spec: {
                        accessModes?: string[] | undefined
                        dataSource?:
                          | {
                              apiGroup?: string | undefined
                              kind: string
                              name: string
                            }
                          | undefined
                        dataSourceRef?:
                          | {
                              apiGroup?: string | undefined
                              kind: string
                              name: string
                            }
                          | undefined
                        resources?:
                          | {
                              limits?:
                                | {
                                    [key: string]: number | string
                                  }
                                | undefined
                              requests?:
                                | {
                                    [key: string]: number | string
                                  }
                                | undefined
                            }
                          | undefined
                        selector?:
                          | {
                              matchExpressions?:
                                | {
                                    key: string
                                    operator: string
                                    values?: string[] | undefined
                                  }[]
                                | undefined
                              matchLabels?:
                                | {
                                    [key: string]: string
                                  }
                                | undefined
                            }
                          | undefined
                        storageClassName?: string | undefined
                        volumeMode?: string | undefined
                        volumeName?: string | undefined
                      }
                    }
                  | undefined
              }
            | undefined
          volumeClaimTemplate?:
            | {
                apiVersion?: string | undefined
                kind?: string | undefined
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
                      name?: string | undefined
                    }
                  | undefined
                spec?:
                  | {
                      accessModes?: string[] | undefined
                      dataSource?:
                        | {
                            apiGroup?: string | undefined
                            kind: string
                            name: string
                          }
                        | undefined
                      dataSourceRef?:
                        | {
                            apiGroup?: string | undefined
                            kind: string
                            name: string
                          }
                        | undefined
                      resources?:
                        | {
                            limits?:
                              | {
                                  [key: string]: number | string
                                }
                              | undefined
                            requests?:
                              | {
                                  [key: string]: number | string
                                }
                              | undefined
                          }
                        | undefined
                      selector?:
                        | {
                            matchExpressions?:
                              | {
                                  key: string
                                  operator: string
                                  values?: string[] | undefined
                                }[]
                              | undefined
                            matchLabels?:
                              | {
                                  [key: string]: string
                                }
                              | undefined
                          }
                        | undefined
                      storageClassName?: string | undefined
                      volumeMode?: string | undefined
                      volumeName?: string | undefined
                    }
                  | undefined
                status?:
                  | {
                      accessModes?: string[] | undefined
                      allocatedResources?:
                        | {
                            [key: string]: number | string
                          }
                        | undefined
                      capacity?:
                        | {
                            [key: string]: number | string
                          }
                        | undefined
                      conditions?:
                        | {
                            lastProbeTime?: string | undefined
                            lastTransitionTime?: string | undefined
                            message?: string | undefined
                            reason?: string | undefined
                            status: string
                            type: string
                          }[]
                        | undefined
                      phase?: string | undefined
                      resizeStatus?: string | undefined
                    }
                  | undefined
              }
            | undefined
        }
      | undefined
    tag?: string | undefined
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
                      key: string
                      operator: string
                      values?: string[] | undefined
                    }[]
                  | undefined
                matchLabels?:
                  | {
                      [key: string]: string
                    }
                  | undefined
              }
            | undefined
          maxSkew: number
          minDomains?: number | undefined
          topologyKey: string
          whenUnsatisfiable: string
        }[]
      | undefined
    version?: string | undefined
    volumeMounts?:
      | {
          mountPath: string
          mountPropagation?: string | undefined
          name: string
          readOnly?: boolean | undefined
          subPath?: string | undefined
          subPathExpr?: string | undefined
        }[]
      | undefined
    volumes?:
      | {
          awsElasticBlockStore?:
            | {
                fsType?: string | undefined
                partition?: number | undefined
                readOnly?: boolean | undefined
                volumeID: string
              }
            | undefined
          azureDisk?:
            | {
                cachingMode?: string | undefined
                diskName: string
                diskURI: string
                fsType?: string | undefined
                kind?: string | undefined
                readOnly?: boolean | undefined
              }
            | undefined
          azureFile?:
            | {
                readOnly?: boolean | undefined
                secretName: string
                shareName: string
              }
            | undefined
          cephfs?:
            | {
                monitors: string[]
                path?: string | undefined
                readOnly?: boolean | undefined
                secretFile?: string | undefined
                secretRef?:
                  | {
                      name?: string | undefined
                    }
                  | undefined
                user?: string | undefined
              }
            | undefined
          cinder?:
            | {
                fsType?: string | undefined
                readOnly?: boolean | undefined
                secretRef?:
                  | {
                      name?: string | undefined
                    }
                  | undefined
                volumeID: string
              }
            | undefined
          configMap?:
            | {
                defaultMode?: number | undefined
                items?:
                  | {
                      key: string
                      mode?: number | undefined
                      path: string
                    }[]
                  | undefined
                name?: string | undefined
                optional?: boolean | undefined
              }
            | undefined
          csi?:
            | {
                driver: string
                fsType?: string | undefined
                nodePublishSecretRef?:
                  | {
                      name?: string | undefined
                    }
                  | undefined
                readOnly?: boolean | undefined
                volumeAttributes?:
                  | {
                      [key: string]: string
                    }
                  | undefined
              }
            | undefined
          downwardAPI?:
            | {
                defaultMode?: number | undefined
                items?:
                  | {
                      fieldRef?:
                        | {
                            apiVersion?: string | undefined
                            fieldPath: string
                          }
                        | undefined
                      mode?: number | undefined
                      path: string
                      resourceFieldRef?:
                        | {
                            containerName?: string | undefined
                            divisor?: (number | string) | undefined
                            resource: string
                          }
                        | undefined
                    }[]
                  | undefined
              }
            | undefined
          emptyDir?:
            | {
                medium?: string | undefined
                sizeLimit?: (number | string) | undefined
              }
            | undefined
          ephemeral?:
            | {
                volumeClaimTemplate?:
                  | {
                      metadata?: object | undefined
                      spec: {
                        accessModes?: string[] | undefined
                        dataSource?:
                          | {
                              apiGroup?: string | undefined
                              kind: string
                              name: string
                            }
                          | undefined
                        dataSourceRef?:
                          | {
                              apiGroup?: string | undefined
                              kind: string
                              name: string
                            }
                          | undefined
                        resources?:
                          | {
                              limits?:
                                | {
                                    [key: string]: number | string
                                  }
                                | undefined
                              requests?:
                                | {
                                    [key: string]: number | string
                                  }
                                | undefined
                            }
                          | undefined
                        selector?:
                          | {
                              matchExpressions?:
                                | {
                                    key: string
                                    operator: string
                                    values?: string[] | undefined
                                  }[]
                                | undefined
                              matchLabels?:
                                | {
                                    [key: string]: string
                                  }
                                | undefined
                            }
                          | undefined
                        storageClassName?: string | undefined
                        volumeMode?: string | undefined
                        volumeName?: string | undefined
                      }
                    }
                  | undefined
              }
            | undefined
          fc?:
            | {
                fsType?: string | undefined
                lun?: number | undefined
                readOnly?: boolean | undefined
                targetWWNs?: string[] | undefined
                wwids?: string[] | undefined
              }
            | undefined
          flexVolume?:
            | {
                driver: string
                fsType?: string | undefined
                options?:
                  | {
                      [key: string]: string
                    }
                  | undefined
                readOnly?: boolean | undefined
                secretRef?:
                  | {
                      name?: string | undefined
                    }
                  | undefined
              }
            | undefined
          flocker?:
            | {
                datasetName?: string | undefined
                datasetUUID?: string | undefined
              }
            | undefined
          gcePersistentDisk?:
            | {
                fsType?: string | undefined
                partition?: number | undefined
                pdName: string
                readOnly?: boolean | undefined
              }
            | undefined
          gitRepo?:
            | {
                directory?: string | undefined
                repository: string
                revision?: string | undefined
              }
            | undefined
          glusterfs?:
            | {
                endpoints: string
                path: string
                readOnly?: boolean | undefined
              }
            | undefined
          hostPath?:
            | {
                path: string
                type?: string | undefined
              }
            | undefined
          iscsi?:
            | {
                chapAuthDiscovery?: boolean | undefined
                chapAuthSession?: boolean | undefined
                fsType?: string | undefined
                initiatorName?: string | undefined
                iqn: string
                iscsiInterface?: string | undefined
                lun: number
                portals?: string[] | undefined
                readOnly?: boolean | undefined
                secretRef?:
                  | {
                      name?: string | undefined
                    }
                  | undefined
                targetPortal: string
              }
            | undefined
          name: string
          nfs?:
            | {
                path: string
                readOnly?: boolean | undefined
                server: string
              }
            | undefined
          persistentVolumeClaim?:
            | {
                claimName: string
                readOnly?: boolean | undefined
              }
            | undefined
          photonPersistentDisk?:
            | {
                fsType?: string | undefined
                pdID: string
              }
            | undefined
          portworxVolume?:
            | {
                fsType?: string | undefined
                readOnly?: boolean | undefined
                volumeID: string
              }
            | undefined
          projected?:
            | {
                defaultMode?: number | undefined
                sources?:
                  | {
                      configMap?:
                        | {
                            items?:
                              | {
                                  key: string
                                  mode?: number | undefined
                                  path: string
                                }[]
                              | undefined
                            name?: string | undefined
                            optional?: boolean | undefined
                          }
                        | undefined
                      downwardAPI?:
                        | {
                            items?:
                              | {
                                  fieldRef?:
                                    | {
                                        apiVersion?: string | undefined
                                        fieldPath: string
                                      }
                                    | undefined
                                  mode?: number | undefined
                                  path: string
                                  resourceFieldRef?:
                                    | {
                                        containerName?: string | undefined
                                        divisor?: (number | string) | undefined
                                        resource: string
                                      }
                                    | undefined
                                }[]
                              | undefined
                          }
                        | undefined
                      secret?:
                        | {
                            items?:
                              | {
                                  key: string
                                  mode?: number | undefined
                                  path: string
                                }[]
                              | undefined
                            name?: string | undefined
                            optional?: boolean | undefined
                          }
                        | undefined
                      serviceAccountToken?:
                        | {
                            audience?: string | undefined
                            expirationSeconds?: number | undefined
                            path: string
                          }
                        | undefined
                    }[]
                  | undefined
              }
            | undefined
          quobyte?:
            | {
                group?: string | undefined
                readOnly?: boolean | undefined
                registry: string
                tenant?: string | undefined
                user?: string | undefined
                volume: string
              }
            | undefined
          rbd?:
            | {
                fsType?: string | undefined
                image: string
                keyring?: string | undefined
                monitors: string[]
                pool?: string | undefined
                readOnly?: boolean | undefined
                secretRef?:
                  | {
                      name?: string | undefined
                    }
                  | undefined
                user?: string | undefined
              }
            | undefined
          scaleIO?:
            | {
                fsType?: string | undefined
                gateway: string
                protectionDomain?: string | undefined
                readOnly?: boolean | undefined
                secretRef: {
                  name?: string | undefined
                }
                sslEnabled?: boolean | undefined
                storageMode?: string | undefined
                storagePool?: string | undefined
                system: string
                volumeName?: string | undefined
              }
            | undefined
          secret?:
            | {
                defaultMode?: number | undefined
                items?:
                  | {
                      key: string
                      mode?: number | undefined
                      path: string
                    }[]
                  | undefined
                optional?: boolean | undefined
                secretName?: string | undefined
              }
            | undefined
          storageos?:
            | {
                fsType?: string | undefined
                readOnly?: boolean | undefined
                secretRef?:
                  | {
                      name?: string | undefined
                    }
                  | undefined
                volumeName?: string | undefined
                volumeNamespace?: string | undefined
              }
            | undefined
          vsphereVolume?:
            | {
                fsType?: string | undefined
                storagePolicyID?: string | undefined
                storagePolicyName?: string | undefined
                volumePath: string
              }
            | undefined
        }[]
      | undefined
    web?:
      | {
          tlsConfig?:
            | {
                cert: {
                  configMap?:
                    | {
                        key: string
                        name?: string | undefined
                        optional?: boolean | undefined
                      }
                    | undefined
                  secret?:
                    | {
                        key: string
                        name?: string | undefined
                        optional?: boolean | undefined
                      }
                    | undefined
                }
                cipherSuites?: string[] | undefined
                clientAuthType?: string | undefined
                client_ca?:
                  | {
                      configMap?:
                        | {
                            key: string
                            name?: string | undefined
                            optional?: boolean | undefined
                          }
                        | undefined
                      secret?:
                        | {
                            key: string
                            name?: string | undefined
                            optional?: boolean | undefined
                          }
                        | undefined
                    }
                  | undefined
                curvePreferences?: string[] | undefined
                keySecret: {
                  key: string
                  name?: string | undefined
                  optional?: boolean | undefined
                }
                maxVersion?: string | undefined
                minVersion?: string | undefined
                preferServerCipherSuites?: boolean | undefined
              }
            | undefined
        }
      | undefined
  }
  status?:
    | {
        availableReplicas: number
        paused: boolean
        replicas: number
        unavailableReplicas: number
        updatedReplicas: number
      }
    | undefined
}
export type IoK8SApimachineryPkgApisMetaV1ListMeta = {
  continue?: string | undefined
  remainingItemCount?: number | undefined
  resourceVersion?: string | undefined
  selfLink?: string | undefined
}
export type ComCoreosMonitoringV1AlertmanagerList = {
  apiVersion?: string | undefined
  items: ComCoreosMonitoringV1Alertmanager[]
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
export type ComCoreosMonitoringV1PodMonitor = {
  apiVersion?: string | undefined
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ObjectMeta | undefined
  spec: {
    attachMetadata?:
      | {
          node?: boolean | undefined
        }
      | undefined
    jobLabel?: string | undefined
    labelLimit?: number | undefined
    labelNameLengthLimit?: number | undefined
    labelValueLengthLimit?: number | undefined
    namespaceSelector?:
      | {
          any?: boolean | undefined
          matchNames?: string[] | undefined
        }
      | undefined
    podMetricsEndpoints: {
      authorization?:
        | {
            credentials?:
              | {
                  key: string
                  name?: string | undefined
                  optional?: boolean | undefined
                }
              | undefined
            type?: string | undefined
          }
        | undefined
      basicAuth?:
        | {
            password?:
              | {
                  key: string
                  name?: string | undefined
                  optional?: boolean | undefined
                }
              | undefined
            username?:
              | {
                  key: string
                  name?: string | undefined
                  optional?: boolean | undefined
                }
              | undefined
          }
        | undefined
      bearerTokenSecret?:
        | {
            key: string
            name?: string | undefined
            optional?: boolean | undefined
          }
        | undefined
      enableHttp2?: boolean | undefined
      followRedirects?: boolean | undefined
      honorLabels?: boolean | undefined
      honorTimestamps?: boolean | undefined
      interval?: string | undefined
      metricRelabelings?:
        | {
            action?:
              | (
                  | 'replace'
                  | 'Replace'
                  | 'keep'
                  | 'Keep'
                  | 'drop'
                  | 'Drop'
                  | 'hashmod'
                  | 'HashMod'
                  | 'labelmap'
                  | 'LabelMap'
                  | 'labeldrop'
                  | 'LabelDrop'
                  | 'labelkeep'
                  | 'LabelKeep'
                  | 'lowercase'
                  | 'Lowercase'
                  | 'uppercase'
                  | 'Uppercase'
                )
              | undefined
            modulus?: number | undefined
            regex?: string | undefined
            replacement?: string | undefined
            separator?: string | undefined
            sourceLabels?: string[] | undefined
            targetLabel?: string | undefined
          }[]
        | undefined
      oauth2?:
        | {
            clientId: {
              configMap?:
                | {
                    key: string
                    name?: string | undefined
                    optional?: boolean | undefined
                  }
                | undefined
              secret?:
                | {
                    key: string
                    name?: string | undefined
                    optional?: boolean | undefined
                  }
                | undefined
            }
            clientSecret: {
              key: string
              name?: string | undefined
              optional?: boolean | undefined
            }
            endpointParams?:
              | {
                  [key: string]: string
                }
              | undefined
            scopes?: string[] | undefined
            tokenUrl: string
          }
        | undefined
      params?:
        | {
            [key: string]: string[]
          }
        | undefined
      path?: string | undefined
      port?: string | undefined
      proxyUrl?: string | undefined
      relabelings?:
        | {
            action?:
              | (
                  | 'replace'
                  | 'Replace'
                  | 'keep'
                  | 'Keep'
                  | 'drop'
                  | 'Drop'
                  | 'hashmod'
                  | 'HashMod'
                  | 'labelmap'
                  | 'LabelMap'
                  | 'labeldrop'
                  | 'LabelDrop'
                  | 'labelkeep'
                  | 'LabelKeep'
                  | 'lowercase'
                  | 'Lowercase'
                  | 'uppercase'
                  | 'Uppercase'
                )
              | undefined
            modulus?: number | undefined
            regex?: string | undefined
            replacement?: string | undefined
            separator?: string | undefined
            sourceLabels?: string[] | undefined
            targetLabel?: string | undefined
          }[]
        | undefined
      scheme?: string | undefined
      scrapeTimeout?: string | undefined
      targetPort?: (number | string) | undefined
      tlsConfig?:
        | {
            ca?:
              | {
                  configMap?:
                    | {
                        key: string
                        name?: string | undefined
                        optional?: boolean | undefined
                      }
                    | undefined
                  secret?:
                    | {
                        key: string
                        name?: string | undefined
                        optional?: boolean | undefined
                      }
                    | undefined
                }
              | undefined
            cert?:
              | {
                  configMap?:
                    | {
                        key: string
                        name?: string | undefined
                        optional?: boolean | undefined
                      }
                    | undefined
                  secret?:
                    | {
                        key: string
                        name?: string | undefined
                        optional?: boolean | undefined
                      }
                    | undefined
                }
              | undefined
            insecureSkipVerify?: boolean | undefined
            keySecret?:
              | {
                  key: string
                  name?: string | undefined
                  optional?: boolean | undefined
                }
              | undefined
            serverName?: string | undefined
          }
        | undefined
    }[]
    podTargetLabels?: string[] | undefined
    sampleLimit?: number | undefined
    selector: {
      matchExpressions?:
        | {
            key: string
            operator: string
            values?: string[] | undefined
          }[]
        | undefined
      matchLabels?:
        | {
            [key: string]: string
          }
        | undefined
    }
    targetLimit?: number | undefined
  }
}
export type ComCoreosMonitoringV1PodMonitorList = {
  apiVersion?: string | undefined
  items: ComCoreosMonitoringV1PodMonitor[]
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ListMeta | undefined
}
export type ComCoreosMonitoringV1Probe = {
  apiVersion?: string | undefined
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ObjectMeta | undefined
  spec: {
    authorization?:
      | {
          credentials?:
            | {
                key: string
                name?: string | undefined
                optional?: boolean | undefined
              }
            | undefined
          type?: string | undefined
        }
      | undefined
    basicAuth?:
      | {
          password?:
            | {
                key: string
                name?: string | undefined
                optional?: boolean | undefined
              }
            | undefined
          username?:
            | {
                key: string
                name?: string | undefined
                optional?: boolean | undefined
              }
            | undefined
        }
      | undefined
    bearerTokenSecret?:
      | {
          key: string
          name?: string | undefined
          optional?: boolean | undefined
        }
      | undefined
    interval?: string | undefined
    jobName?: string | undefined
    labelLimit?: number | undefined
    labelNameLengthLimit?: number | undefined
    labelValueLengthLimit?: number | undefined
    metricRelabelings?:
      | {
          action?:
            | (
                | 'replace'
                | 'Replace'
                | 'keep'
                | 'Keep'
                | 'drop'
                | 'Drop'
                | 'hashmod'
                | 'HashMod'
                | 'labelmap'
                | 'LabelMap'
                | 'labeldrop'
                | 'LabelDrop'
                | 'labelkeep'
                | 'LabelKeep'
                | 'lowercase'
                | 'Lowercase'
                | 'uppercase'
                | 'Uppercase'
              )
            | undefined
          modulus?: number | undefined
          regex?: string | undefined
          replacement?: string | undefined
          separator?: string | undefined
          sourceLabels?: string[] | undefined
          targetLabel?: string | undefined
        }[]
      | undefined
    module?: string | undefined
    oauth2?:
      | {
          clientId: {
            configMap?:
              | {
                  key: string
                  name?: string | undefined
                  optional?: boolean | undefined
                }
              | undefined
            secret?:
              | {
                  key: string
                  name?: string | undefined
                  optional?: boolean | undefined
                }
              | undefined
          }
          clientSecret: {
            key: string
            name?: string | undefined
            optional?: boolean | undefined
          }
          endpointParams?:
            | {
                [key: string]: string
              }
            | undefined
          scopes?: string[] | undefined
          tokenUrl: string
        }
      | undefined
    prober?:
      | {
          path?: string | undefined
          proxyUrl?: string | undefined
          scheme?: string | undefined
          url: string
        }
      | undefined
    sampleLimit?: number | undefined
    scrapeTimeout?: string | undefined
    targetLimit?: number | undefined
    targets?:
      | {
          ingress?:
            | {
                namespaceSelector?:
                  | {
                      any?: boolean | undefined
                      matchNames?: string[] | undefined
                    }
                  | undefined
                relabelingConfigs?:
                  | {
                      action?:
                        | (
                            | 'replace'
                            | 'Replace'
                            | 'keep'
                            | 'Keep'
                            | 'drop'
                            | 'Drop'
                            | 'hashmod'
                            | 'HashMod'
                            | 'labelmap'
                            | 'LabelMap'
                            | 'labeldrop'
                            | 'LabelDrop'
                            | 'labelkeep'
                            | 'LabelKeep'
                            | 'lowercase'
                            | 'Lowercase'
                            | 'uppercase'
                            | 'Uppercase'
                          )
                        | undefined
                      modulus?: number | undefined
                      regex?: string | undefined
                      replacement?: string | undefined
                      separator?: string | undefined
                      sourceLabels?: string[] | undefined
                      targetLabel?: string | undefined
                    }[]
                  | undefined
                selector?:
                  | {
                      matchExpressions?:
                        | {
                            key: string
                            operator: string
                            values?: string[] | undefined
                          }[]
                        | undefined
                      matchLabels?:
                        | {
                            [key: string]: string
                          }
                        | undefined
                    }
                  | undefined
              }
            | undefined
          staticConfig?:
            | {
                labels?:
                  | {
                      [key: string]: string
                    }
                  | undefined
                relabelingConfigs?:
                  | {
                      action?:
                        | (
                            | 'replace'
                            | 'Replace'
                            | 'keep'
                            | 'Keep'
                            | 'drop'
                            | 'Drop'
                            | 'hashmod'
                            | 'HashMod'
                            | 'labelmap'
                            | 'LabelMap'
                            | 'labeldrop'
                            | 'LabelDrop'
                            | 'labelkeep'
                            | 'LabelKeep'
                            | 'lowercase'
                            | 'Lowercase'
                            | 'uppercase'
                            | 'Uppercase'
                          )
                        | undefined
                      modulus?: number | undefined
                      regex?: string | undefined
                      replacement?: string | undefined
                      separator?: string | undefined
                      sourceLabels?: string[] | undefined
                      targetLabel?: string | undefined
                    }[]
                  | undefined
                static?: string[] | undefined
              }
            | undefined
        }
      | undefined
    tlsConfig?:
      | {
          ca?:
            | {
                configMap?:
                  | {
                      key: string
                      name?: string | undefined
                      optional?: boolean | undefined
                    }
                  | undefined
                secret?:
                  | {
                      key: string
                      name?: string | undefined
                      optional?: boolean | undefined
                    }
                  | undefined
              }
            | undefined
          cert?:
            | {
                configMap?:
                  | {
                      key: string
                      name?: string | undefined
                      optional?: boolean | undefined
                    }
                  | undefined
                secret?:
                  | {
                      key: string
                      name?: string | undefined
                      optional?: boolean | undefined
                    }
                  | undefined
              }
            | undefined
          insecureSkipVerify?: boolean | undefined
          keySecret?:
            | {
                key: string
                name?: string | undefined
                optional?: boolean | undefined
              }
            | undefined
          serverName?: string | undefined
        }
      | undefined
  }
}
export type ComCoreosMonitoringV1ProbeList = {
  apiVersion?: string | undefined
  items: ComCoreosMonitoringV1Probe[]
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ListMeta | undefined
}
export type ComCoreosMonitoringV1Prometheus = {
  apiVersion?: string | undefined
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ObjectMeta | undefined
  spec: {
    additionalAlertManagerConfigs?:
      | {
          key: string
          name?: string | undefined
          optional?: boolean | undefined
        }
      | undefined
    additionalAlertRelabelConfigs?:
      | {
          key: string
          name?: string | undefined
          optional?: boolean | undefined
        }
      | undefined
    additionalScrapeConfigs?:
      | {
          key: string
          name?: string | undefined
          optional?: boolean | undefined
        }
      | undefined
    affinity?:
      | {
          nodeAffinity?:
            | {
                preferredDuringSchedulingIgnoredDuringExecution?:
                  | {
                      preference: {
                        matchExpressions?:
                          | {
                              key: string
                              operator: string
                              values?: string[] | undefined
                            }[]
                          | undefined
                        matchFields?:
                          | {
                              key: string
                              operator: string
                              values?: string[] | undefined
                            }[]
                          | undefined
                      }
                      weight: number
                    }[]
                  | undefined
                requiredDuringSchedulingIgnoredDuringExecution?:
                  | {
                      nodeSelectorTerms: {
                        matchExpressions?:
                          | {
                              key: string
                              operator: string
                              values?: string[] | undefined
                            }[]
                          | undefined
                        matchFields?:
                          | {
                              key: string
                              operator: string
                              values?: string[] | undefined
                            }[]
                          | undefined
                      }[]
                    }
                  | undefined
              }
            | undefined
          podAffinity?:
            | {
                preferredDuringSchedulingIgnoredDuringExecution?:
                  | {
                      podAffinityTerm: {
                        labelSelector?:
                          | {
                              matchExpressions?:
                                | {
                                    key: string
                                    operator: string
                                    values?: string[] | undefined
                                  }[]
                                | undefined
                              matchLabels?:
                                | {
                                    [key: string]: string
                                  }
                                | undefined
                            }
                          | undefined
                        namespaceSelector?:
                          | {
                              matchExpressions?:
                                | {
                                    key: string
                                    operator: string
                                    values?: string[] | undefined
                                  }[]
                                | undefined
                              matchLabels?:
                                | {
                                    [key: string]: string
                                  }
                                | undefined
                            }
                          | undefined
                        namespaces?: string[] | undefined
                        topologyKey: string
                      }
                      weight: number
                    }[]
                  | undefined
                requiredDuringSchedulingIgnoredDuringExecution?:
                  | {
                      labelSelector?:
                        | {
                            matchExpressions?:
                              | {
                                  key: string
                                  operator: string
                                  values?: string[] | undefined
                                }[]
                              | undefined
                            matchLabels?:
                              | {
                                  [key: string]: string
                                }
                              | undefined
                          }
                        | undefined
                      namespaceSelector?:
                        | {
                            matchExpressions?:
                              | {
                                  key: string
                                  operator: string
                                  values?: string[] | undefined
                                }[]
                              | undefined
                            matchLabels?:
                              | {
                                  [key: string]: string
                                }
                              | undefined
                          }
                        | undefined
                      namespaces?: string[] | undefined
                      topologyKey: string
                    }[]
                  | undefined
              }
            | undefined
          podAntiAffinity?:
            | {
                preferredDuringSchedulingIgnoredDuringExecution?:
                  | {
                      podAffinityTerm: {
                        labelSelector?:
                          | {
                              matchExpressions?:
                                | {
                                    key: string
                                    operator: string
                                    values?: string[] | undefined
                                  }[]
                                | undefined
                              matchLabels?:
                                | {
                                    [key: string]: string
                                  }
                                | undefined
                            }
                          | undefined
                        namespaceSelector?:
                          | {
                              matchExpressions?:
                                | {
                                    key: string
                                    operator: string
                                    values?: string[] | undefined
                                  }[]
                                | undefined
                              matchLabels?:
                                | {
                                    [key: string]: string
                                  }
                                | undefined
                            }
                          | undefined
                        namespaces?: string[] | undefined
                        topologyKey: string
                      }
                      weight: number
                    }[]
                  | undefined
                requiredDuringSchedulingIgnoredDuringExecution?:
                  | {
                      labelSelector?:
                        | {
                            matchExpressions?:
                              | {
                                  key: string
                                  operator: string
                                  values?: string[] | undefined
                                }[]
                              | undefined
                            matchLabels?:
                              | {
                                  [key: string]: string
                                }
                              | undefined
                          }
                        | undefined
                      namespaceSelector?:
                        | {
                            matchExpressions?:
                              | {
                                  key: string
                                  operator: string
                                  values?: string[] | undefined
                                }[]
                              | undefined
                            matchLabels?:
                              | {
                                  [key: string]: string
                                }
                              | undefined
                          }
                        | undefined
                      namespaces?: string[] | undefined
                      topologyKey: string
                    }[]
                  | undefined
              }
            | undefined
        }
      | undefined
    alerting?:
      | {
          alertmanagers: {
            apiVersion?: string | undefined
            authorization?:
              | {
                  credentials?:
                    | {
                        key: string
                        name?: string | undefined
                        optional?: boolean | undefined
                      }
                    | undefined
                  type?: string | undefined
                }
              | undefined
            bearerTokenFile?: string | undefined
            name: string
            namespace: string
            pathPrefix?: string | undefined
            port: number | string
            scheme?: string | undefined
            timeout?: string | undefined
            tlsConfig?:
              | {
                  ca?:
                    | {
                        configMap?:
                          | {
                              key: string
                              name?: string | undefined
                              optional?: boolean | undefined
                            }
                          | undefined
                        secret?:
                          | {
                              key: string
                              name?: string | undefined
                              optional?: boolean | undefined
                            }
                          | undefined
                      }
                    | undefined
                  caFile?: string | undefined
                  cert?:
                    | {
                        configMap?:
                          | {
                              key: string
                              name?: string | undefined
                              optional?: boolean | undefined
                            }
                          | undefined
                        secret?:
                          | {
                              key: string
                              name?: string | undefined
                              optional?: boolean | undefined
                            }
                          | undefined
                      }
                    | undefined
                  certFile?: string | undefined
                  insecureSkipVerify?: boolean | undefined
                  keyFile?: string | undefined
                  keySecret?:
                    | {
                        key: string
                        name?: string | undefined
                        optional?: boolean | undefined
                      }
                    | undefined
                  serverName?: string | undefined
                }
              | undefined
          }[]
        }
      | undefined
    allowOverlappingBlocks?: boolean | undefined
    apiserverConfig?:
      | {
          authorization?:
            | {
                credentials?:
                  | {
                      key: string
                      name?: string | undefined
                      optional?: boolean | undefined
                    }
                  | undefined
                credentialsFile?: string | undefined
                type?: string | undefined
              }
            | undefined
          basicAuth?:
            | {
                password?:
                  | {
                      key: string
                      name?: string | undefined
                      optional?: boolean | undefined
                    }
                  | undefined
                username?:
                  | {
                      key: string
                      name?: string | undefined
                      optional?: boolean | undefined
                    }
                  | undefined
              }
            | undefined
          bearerToken?: string | undefined
          bearerTokenFile?: string | undefined
          host: string
          tlsConfig?:
            | {
                ca?:
                  | {
                      configMap?:
                        | {
                            key: string
                            name?: string | undefined
                            optional?: boolean | undefined
                          }
                        | undefined
                      secret?:
                        | {
                            key: string
                            name?: string | undefined
                            optional?: boolean | undefined
                          }
                        | undefined
                    }
                  | undefined
                caFile?: string | undefined
                cert?:
                  | {
                      configMap?:
                        | {
                            key: string
                            name?: string | undefined
                            optional?: boolean | undefined
                          }
                        | undefined
                      secret?:
                        | {
                            key: string
                            name?: string | undefined
                            optional?: boolean | undefined
                          }
                        | undefined
                    }
                  | undefined
                certFile?: string | undefined
                insecureSkipVerify?: boolean | undefined
                keyFile?: string | undefined
                keySecret?:
                  | {
                      key: string
                      name?: string | undefined
                      optional?: boolean | undefined
                    }
                  | undefined
                serverName?: string | undefined
              }
            | undefined
        }
      | undefined
    arbitraryFSAccessThroughSMs?:
      | {
          deny?: boolean | undefined
        }
      | undefined
    baseImage?: string | undefined
    configMaps?: string[] | undefined
    containers?:
      | {
          args?: string[] | undefined
          command?: string[] | undefined
          env?:
            | {
                name: string
                value?: string | undefined
                valueFrom?:
                  | {
                      configMapKeyRef?:
                        | {
                            key: string
                            name?: string | undefined
                            optional?: boolean | undefined
                          }
                        | undefined
                      fieldRef?:
                        | {
                            apiVersion?: string | undefined
                            fieldPath: string
                          }
                        | undefined
                      resourceFieldRef?:
                        | {
                            containerName?: string | undefined
                            divisor?: (number | string) | undefined
                            resource: string
                          }
                        | undefined
                      secretKeyRef?:
                        | {
                            key: string
                            name?: string | undefined
                            optional?: boolean | undefined
                          }
                        | undefined
                    }
                  | undefined
              }[]
            | undefined
          envFrom?:
            | {
                configMapRef?:
                  | {
                      name?: string | undefined
                      optional?: boolean | undefined
                    }
                  | undefined
                prefix?: string | undefined
                secretRef?:
                  | {
                      name?: string | undefined
                      optional?: boolean | undefined
                    }
                  | undefined
              }[]
            | undefined
          image?: string | undefined
          imagePullPolicy?: string | undefined
          lifecycle?:
            | {
                postStart?:
                  | {
                      exec?:
                        | {
                            command?: string[] | undefined
                          }
                        | undefined
                      httpGet?:
                        | {
                            host?: string | undefined
                            httpHeaders?:
                              | {
                                  name: string
                                  value: string
                                }[]
                              | undefined
                            path?: string | undefined
                            port: number | string
                            scheme?: string | undefined
                          }
                        | undefined
                      tcpSocket?:
                        | {
                            host?: string | undefined
                            port: number | string
                          }
                        | undefined
                    }
                  | undefined
                preStop?:
                  | {
                      exec?:
                        | {
                            command?: string[] | undefined
                          }
                        | undefined
                      httpGet?:
                        | {
                            host?: string | undefined
                            httpHeaders?:
                              | {
                                  name: string
                                  value: string
                                }[]
                              | undefined
                            path?: string | undefined
                            port: number | string
                            scheme?: string | undefined
                          }
                        | undefined
                      tcpSocket?:
                        | {
                            host?: string | undefined
                            port: number | string
                          }
                        | undefined
                    }
                  | undefined
              }
            | undefined
          livenessProbe?:
            | {
                exec?:
                  | {
                      command?: string[] | undefined
                    }
                  | undefined
                failureThreshold?: number | undefined
                grpc?:
                  | {
                      port: number
                      service?: string | undefined
                    }
                  | undefined
                httpGet?:
                  | {
                      host?: string | undefined
                      httpHeaders?:
                        | {
                            name: string
                            value: string
                          }[]
                        | undefined
                      path?: string | undefined
                      port: number | string
                      scheme?: string | undefined
                    }
                  | undefined
                initialDelaySeconds?: number | undefined
                periodSeconds?: number | undefined
                successThreshold?: number | undefined
                tcpSocket?:
                  | {
                      host?: string | undefined
                      port: number | string
                    }
                  | undefined
                terminationGracePeriodSeconds?: number | undefined
                timeoutSeconds?: number | undefined
              }
            | undefined
          name: string
          ports?:
            | {
                containerPort: number
                hostIP?: string | undefined
                hostPort?: number | undefined
                name?: string | undefined
                protocol?: string | undefined
              }[]
            | undefined
          readinessProbe?:
            | {
                exec?:
                  | {
                      command?: string[] | undefined
                    }
                  | undefined
                failureThreshold?: number | undefined
                grpc?:
                  | {
                      port: number
                      service?: string | undefined
                    }
                  | undefined
                httpGet?:
                  | {
                      host?: string | undefined
                      httpHeaders?:
                        | {
                            name: string
                            value: string
                          }[]
                        | undefined
                      path?: string | undefined
                      port: number | string
                      scheme?: string | undefined
                    }
                  | undefined
                initialDelaySeconds?: number | undefined
                periodSeconds?: number | undefined
                successThreshold?: number | undefined
                tcpSocket?:
                  | {
                      host?: string | undefined
                      port: number | string
                    }
                  | undefined
                terminationGracePeriodSeconds?: number | undefined
                timeoutSeconds?: number | undefined
              }
            | undefined
          resources?:
            | {
                limits?:
                  | {
                      [key: string]: number | string
                    }
                  | undefined
                requests?:
                  | {
                      [key: string]: number | string
                    }
                  | undefined
              }
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
                      type: string
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
          startupProbe?:
            | {
                exec?:
                  | {
                      command?: string[] | undefined
                    }
                  | undefined
                failureThreshold?: number | undefined
                grpc?:
                  | {
                      port: number
                      service?: string | undefined
                    }
                  | undefined
                httpGet?:
                  | {
                      host?: string | undefined
                      httpHeaders?:
                        | {
                            name: string
                            value: string
                          }[]
                        | undefined
                      path?: string | undefined
                      port: number | string
                      scheme?: string | undefined
                    }
                  | undefined
                initialDelaySeconds?: number | undefined
                periodSeconds?: number | undefined
                successThreshold?: number | undefined
                tcpSocket?:
                  | {
                      host?: string | undefined
                      port: number | string
                    }
                  | undefined
                terminationGracePeriodSeconds?: number | undefined
                timeoutSeconds?: number | undefined
              }
            | undefined
          stdin?: boolean | undefined
          stdinOnce?: boolean | undefined
          terminationMessagePath?: string | undefined
          terminationMessagePolicy?: string | undefined
          tty?: boolean | undefined
          volumeDevices?:
            | {
                devicePath: string
                name: string
              }[]
            | undefined
          volumeMounts?:
            | {
                mountPath: string
                mountPropagation?: string | undefined
                name: string
                readOnly?: boolean | undefined
                subPath?: string | undefined
                subPathExpr?: string | undefined
              }[]
            | undefined
          workingDir?: string | undefined
        }[]
      | undefined
    disableCompaction?: boolean | undefined
    enableAdminAPI?: boolean | undefined
    enableFeatures?: string[] | undefined
    enableRemoteWriteReceiver?: boolean | undefined
    enforcedBodySizeLimit?: string | undefined
    enforcedLabelLimit?: number | undefined
    enforcedLabelNameLengthLimit?: number | undefined
    enforcedLabelValueLengthLimit?: number | undefined
    enforcedNamespaceLabel?: string | undefined
    enforcedSampleLimit?: number | undefined
    enforcedTargetLimit?: number | undefined
    evaluationInterval?: string | undefined
    excludedFromEnforcement?:
      | {
          group?: 'monitoring.coreos.com' | undefined
          name?: string | undefined
          namespace: string
          resource:
            | 'prometheusrules'
            | 'servicemonitors'
            | 'podmonitors'
            | 'probes'
        }[]
      | undefined
    exemplars?:
      | {
          maxSize?: number | undefined
        }
      | undefined
    externalLabels?:
      | {
          [key: string]: string
        }
      | undefined
    externalUrl?: string | undefined
    hostAliases?:
      | {
          hostnames: string[]
          ip: string
        }[]
      | undefined
    ignoreNamespaceSelectors?: boolean | undefined
    image?: string | undefined
    imagePullSecrets?:
      | {
          name?: string | undefined
        }[]
      | undefined
    initContainers?:
      | {
          args?: string[] | undefined
          command?: string[] | undefined
          env?:
            | {
                name: string
                value?: string | undefined
                valueFrom?:
                  | {
                      configMapKeyRef?:
                        | {
                            key: string
                            name?: string | undefined
                            optional?: boolean | undefined
                          }
                        | undefined
                      fieldRef?:
                        | {
                            apiVersion?: string | undefined
                            fieldPath: string
                          }
                        | undefined
                      resourceFieldRef?:
                        | {
                            containerName?: string | undefined
                            divisor?: (number | string) | undefined
                            resource: string
                          }
                        | undefined
                      secretKeyRef?:
                        | {
                            key: string
                            name?: string | undefined
                            optional?: boolean | undefined
                          }
                        | undefined
                    }
                  | undefined
              }[]
            | undefined
          envFrom?:
            | {
                configMapRef?:
                  | {
                      name?: string | undefined
                      optional?: boolean | undefined
                    }
                  | undefined
                prefix?: string | undefined
                secretRef?:
                  | {
                      name?: string | undefined
                      optional?: boolean | undefined
                    }
                  | undefined
              }[]
            | undefined
          image?: string | undefined
          imagePullPolicy?: string | undefined
          lifecycle?:
            | {
                postStart?:
                  | {
                      exec?:
                        | {
                            command?: string[] | undefined
                          }
                        | undefined
                      httpGet?:
                        | {
                            host?: string | undefined
                            httpHeaders?:
                              | {
                                  name: string
                                  value: string
                                }[]
                              | undefined
                            path?: string | undefined
                            port: number | string
                            scheme?: string | undefined
                          }
                        | undefined
                      tcpSocket?:
                        | {
                            host?: string | undefined
                            port: number | string
                          }
                        | undefined
                    }
                  | undefined
                preStop?:
                  | {
                      exec?:
                        | {
                            command?: string[] | undefined
                          }
                        | undefined
                      httpGet?:
                        | {
                            host?: string | undefined
                            httpHeaders?:
                              | {
                                  name: string
                                  value: string
                                }[]
                              | undefined
                            path?: string | undefined
                            port: number | string
                            scheme?: string | undefined
                          }
                        | undefined
                      tcpSocket?:
                        | {
                            host?: string | undefined
                            port: number | string
                          }
                        | undefined
                    }
                  | undefined
              }
            | undefined
          livenessProbe?:
            | {
                exec?:
                  | {
                      command?: string[] | undefined
                    }
                  | undefined
                failureThreshold?: number | undefined
                grpc?:
                  | {
                      port: number
                      service?: string | undefined
                    }
                  | undefined
                httpGet?:
                  | {
                      host?: string | undefined
                      httpHeaders?:
                        | {
                            name: string
                            value: string
                          }[]
                        | undefined
                      path?: string | undefined
                      port: number | string
                      scheme?: string | undefined
                    }
                  | undefined
                initialDelaySeconds?: number | undefined
                periodSeconds?: number | undefined
                successThreshold?: number | undefined
                tcpSocket?:
                  | {
                      host?: string | undefined
                      port: number | string
                    }
                  | undefined
                terminationGracePeriodSeconds?: number | undefined
                timeoutSeconds?: number | undefined
              }
            | undefined
          name: string
          ports?:
            | {
                containerPort: number
                hostIP?: string | undefined
                hostPort?: number | undefined
                name?: string | undefined
                protocol?: string | undefined
              }[]
            | undefined
          readinessProbe?:
            | {
                exec?:
                  | {
                      command?: string[] | undefined
                    }
                  | undefined
                failureThreshold?: number | undefined
                grpc?:
                  | {
                      port: number
                      service?: string | undefined
                    }
                  | undefined
                httpGet?:
                  | {
                      host?: string | undefined
                      httpHeaders?:
                        | {
                            name: string
                            value: string
                          }[]
                        | undefined
                      path?: string | undefined
                      port: number | string
                      scheme?: string | undefined
                    }
                  | undefined
                initialDelaySeconds?: number | undefined
                periodSeconds?: number | undefined
                successThreshold?: number | undefined
                tcpSocket?:
                  | {
                      host?: string | undefined
                      port: number | string
                    }
                  | undefined
                terminationGracePeriodSeconds?: number | undefined
                timeoutSeconds?: number | undefined
              }
            | undefined
          resources?:
            | {
                limits?:
                  | {
                      [key: string]: number | string
                    }
                  | undefined
                requests?:
                  | {
                      [key: string]: number | string
                    }
                  | undefined
              }
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
                      type: string
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
          startupProbe?:
            | {
                exec?:
                  | {
                      command?: string[] | undefined
                    }
                  | undefined
                failureThreshold?: number | undefined
                grpc?:
                  | {
                      port: number
                      service?: string | undefined
                    }
                  | undefined
                httpGet?:
                  | {
                      host?: string | undefined
                      httpHeaders?:
                        | {
                            name: string
                            value: string
                          }[]
                        | undefined
                      path?: string | undefined
                      port: number | string
                      scheme?: string | undefined
                    }
                  | undefined
                initialDelaySeconds?: number | undefined
                periodSeconds?: number | undefined
                successThreshold?: number | undefined
                tcpSocket?:
                  | {
                      host?: string | undefined
                      port: number | string
                    }
                  | undefined
                terminationGracePeriodSeconds?: number | undefined
                timeoutSeconds?: number | undefined
              }
            | undefined
          stdin?: boolean | undefined
          stdinOnce?: boolean | undefined
          terminationMessagePath?: string | undefined
          terminationMessagePolicy?: string | undefined
          tty?: boolean | undefined
          volumeDevices?:
            | {
                devicePath: string
                name: string
              }[]
            | undefined
          volumeMounts?:
            | {
                mountPath: string
                mountPropagation?: string | undefined
                name: string
                readOnly?: boolean | undefined
                subPath?: string | undefined
                subPathExpr?: string | undefined
              }[]
            | undefined
          workingDir?: string | undefined
        }[]
      | undefined
    listenLocal?: boolean | undefined
    logFormat?: ('' | 'logfmt' | 'json') | undefined
    logLevel?: ('' | 'debug' | 'info' | 'warn' | 'error') | undefined
    minReadySeconds?: number | undefined
    nodeSelector?:
      | {
          [key: string]: string
        }
      | undefined
    overrideHonorLabels?: boolean | undefined
    overrideHonorTimestamps?: boolean | undefined
    paused?: boolean | undefined
    podMetadata?:
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
          name?: string | undefined
        }
      | undefined
    podMonitorNamespaceSelector?:
      | {
          matchExpressions?:
            | {
                key: string
                operator: string
                values?: string[] | undefined
              }[]
            | undefined
          matchLabels?:
            | {
                [key: string]: string
              }
            | undefined
        }
      | undefined
    podMonitorSelector?:
      | {
          matchExpressions?:
            | {
                key: string
                operator: string
                values?: string[] | undefined
              }[]
            | undefined
          matchLabels?:
            | {
                [key: string]: string
              }
            | undefined
        }
      | undefined
    portName?: string | undefined
    priorityClassName?: string | undefined
    probeNamespaceSelector?:
      | {
          matchExpressions?:
            | {
                key: string
                operator: string
                values?: string[] | undefined
              }[]
            | undefined
          matchLabels?:
            | {
                [key: string]: string
              }
            | undefined
        }
      | undefined
    probeSelector?:
      | {
          matchExpressions?:
            | {
                key: string
                operator: string
                values?: string[] | undefined
              }[]
            | undefined
          matchLabels?:
            | {
                [key: string]: string
              }
            | undefined
        }
      | undefined
    prometheusExternalLabelName?: string | undefined
    prometheusRulesExcludedFromEnforce?:
      | {
          ruleName: string
          ruleNamespace: string
        }[]
      | undefined
    query?:
      | {
          lookbackDelta?: string | undefined
          maxConcurrency?: number | undefined
          maxSamples?: number | undefined
          timeout?: string | undefined
        }
      | undefined
    queryLogFile?: string | undefined
    remoteRead?:
      | {
          authorization?:
            | {
                credentials?:
                  | {
                      key: string
                      name?: string | undefined
                      optional?: boolean | undefined
                    }
                  | undefined
                credentialsFile?: string | undefined
                type?: string | undefined
              }
            | undefined
          basicAuth?:
            | {
                password?:
                  | {
                      key: string
                      name?: string | undefined
                      optional?: boolean | undefined
                    }
                  | undefined
                username?:
                  | {
                      key: string
                      name?: string | undefined
                      optional?: boolean | undefined
                    }
                  | undefined
              }
            | undefined
          bearerToken?: string | undefined
          bearerTokenFile?: string | undefined
          headers?:
            | {
                [key: string]: string
              }
            | undefined
          name?: string | undefined
          oauth2?:
            | {
                clientId: {
                  configMap?:
                    | {
                        key: string
                        name?: string | undefined
                        optional?: boolean | undefined
                      }
                    | undefined
                  secret?:
                    | {
                        key: string
                        name?: string | undefined
                        optional?: boolean | undefined
                      }
                    | undefined
                }
                clientSecret: {
                  key: string
                  name?: string | undefined
                  optional?: boolean | undefined
                }
                endpointParams?:
                  | {
                      [key: string]: string
                    }
                  | undefined
                scopes?: string[] | undefined
                tokenUrl: string
              }
            | undefined
          proxyUrl?: string | undefined
          readRecent?: boolean | undefined
          remoteTimeout?: string | undefined
          requiredMatchers?:
            | {
                [key: string]: string
              }
            | undefined
          tlsConfig?:
            | {
                ca?:
                  | {
                      configMap?:
                        | {
                            key: string
                            name?: string | undefined
                            optional?: boolean | undefined
                          }
                        | undefined
                      secret?:
                        | {
                            key: string
                            name?: string | undefined
                            optional?: boolean | undefined
                          }
                        | undefined
                    }
                  | undefined
                caFile?: string | undefined
                cert?:
                  | {
                      configMap?:
                        | {
                            key: string
                            name?: string | undefined
                            optional?: boolean | undefined
                          }
                        | undefined
                      secret?:
                        | {
                            key: string
                            name?: string | undefined
                            optional?: boolean | undefined
                          }
                        | undefined
                    }
                  | undefined
                certFile?: string | undefined
                insecureSkipVerify?: boolean | undefined
                keyFile?: string | undefined
                keySecret?:
                  | {
                      key: string
                      name?: string | undefined
                      optional?: boolean | undefined
                    }
                  | undefined
                serverName?: string | undefined
              }
            | undefined
          url: string
        }[]
      | undefined
    remoteWrite?:
      | {
          authorization?:
            | {
                credentials?:
                  | {
                      key: string
                      name?: string | undefined
                      optional?: boolean | undefined
                    }
                  | undefined
                credentialsFile?: string | undefined
                type?: string | undefined
              }
            | undefined
          basicAuth?:
            | {
                password?:
                  | {
                      key: string
                      name?: string | undefined
                      optional?: boolean | undefined
                    }
                  | undefined
                username?:
                  | {
                      key: string
                      name?: string | undefined
                      optional?: boolean | undefined
                    }
                  | undefined
              }
            | undefined
          bearerToken?: string | undefined
          bearerTokenFile?: string | undefined
          headers?:
            | {
                [key: string]: string
              }
            | undefined
          metadataConfig?:
            | {
                send?: boolean | undefined
                sendInterval?: string | undefined
              }
            | undefined
          name?: string | undefined
          oauth2?:
            | {
                clientId: {
                  configMap?:
                    | {
                        key: string
                        name?: string | undefined
                        optional?: boolean | undefined
                      }
                    | undefined
                  secret?:
                    | {
                        key: string
                        name?: string | undefined
                        optional?: boolean | undefined
                      }
                    | undefined
                }
                clientSecret: {
                  key: string
                  name?: string | undefined
                  optional?: boolean | undefined
                }
                endpointParams?:
                  | {
                      [key: string]: string
                    }
                  | undefined
                scopes?: string[] | undefined
                tokenUrl: string
              }
            | undefined
          proxyUrl?: string | undefined
          queueConfig?:
            | {
                batchSendDeadline?: string | undefined
                capacity?: number | undefined
                maxBackoff?: string | undefined
                maxRetries?: number | undefined
                maxSamplesPerSend?: number | undefined
                maxShards?: number | undefined
                minBackoff?: string | undefined
                minShards?: number | undefined
                retryOnRateLimit?: boolean | undefined
              }
            | undefined
          remoteTimeout?: string | undefined
          sendExemplars?: boolean | undefined
          sigv4?:
            | {
                accessKey?:
                  | {
                      key: string
                      name?: string | undefined
                      optional?: boolean | undefined
                    }
                  | undefined
                profile?: string | undefined
                region?: string | undefined
                roleArn?: string | undefined
                secretKey?:
                  | {
                      key: string
                      name?: string | undefined
                      optional?: boolean | undefined
                    }
                  | undefined
              }
            | undefined
          tlsConfig?:
            | {
                ca?:
                  | {
                      configMap?:
                        | {
                            key: string
                            name?: string | undefined
                            optional?: boolean | undefined
                          }
                        | undefined
                      secret?:
                        | {
                            key: string
                            name?: string | undefined
                            optional?: boolean | undefined
                          }
                        | undefined
                    }
                  | undefined
                caFile?: string | undefined
                cert?:
                  | {
                      configMap?:
                        | {
                            key: string
                            name?: string | undefined
                            optional?: boolean | undefined
                          }
                        | undefined
                      secret?:
                        | {
                            key: string
                            name?: string | undefined
                            optional?: boolean | undefined
                          }
                        | undefined
                    }
                  | undefined
                certFile?: string | undefined
                insecureSkipVerify?: boolean | undefined
                keyFile?: string | undefined
                keySecret?:
                  | {
                      key: string
                      name?: string | undefined
                      optional?: boolean | undefined
                    }
                  | undefined
                serverName?: string | undefined
              }
            | undefined
          url: string
          writeRelabelConfigs?:
            | {
                action?:
                  | (
                      | 'replace'
                      | 'Replace'
                      | 'keep'
                      | 'Keep'
                      | 'drop'
                      | 'Drop'
                      | 'hashmod'
                      | 'HashMod'
                      | 'labelmap'
                      | 'LabelMap'
                      | 'labeldrop'
                      | 'LabelDrop'
                      | 'labelkeep'
                      | 'LabelKeep'
                      | 'lowercase'
                      | 'Lowercase'
                      | 'uppercase'
                      | 'Uppercase'
                    )
                  | undefined
                modulus?: number | undefined
                regex?: string | undefined
                replacement?: string | undefined
                separator?: string | undefined
                sourceLabels?: string[] | undefined
                targetLabel?: string | undefined
              }[]
            | undefined
        }[]
      | undefined
    replicaExternalLabelName?: string | undefined
    replicas?: number | undefined
    resources?:
      | {
          limits?:
            | {
                [key: string]: number | string
              }
            | undefined
          requests?:
            | {
                [key: string]: number | string
              }
            | undefined
        }
      | undefined
    retention?: string | undefined
    retentionSize?: string | undefined
    routePrefix?: string | undefined
    ruleNamespaceSelector?:
      | {
          matchExpressions?:
            | {
                key: string
                operator: string
                values?: string[] | undefined
              }[]
            | undefined
          matchLabels?:
            | {
                [key: string]: string
              }
            | undefined
        }
      | undefined
    ruleSelector?:
      | {
          matchExpressions?:
            | {
                key: string
                operator: string
                values?: string[] | undefined
              }[]
            | undefined
          matchLabels?:
            | {
                [key: string]: string
              }
            | undefined
        }
      | undefined
    rules?:
      | {
          alert?:
            | {
                forGracePeriod?: string | undefined
                forOutageTolerance?: string | undefined
                resendDelay?: string | undefined
              }
            | undefined
        }
      | undefined
    scrapeInterval?: string | undefined
    scrapeTimeout?: string | undefined
    secrets?: string[] | undefined
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
                type: string
              }
            | undefined
          supplementalGroups?: number[] | undefined
          sysctls?:
            | {
                name: string
                value: string
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
    serviceAccountName?: string | undefined
    serviceMonitorNamespaceSelector?:
      | {
          matchExpressions?:
            | {
                key: string
                operator: string
                values?: string[] | undefined
              }[]
            | undefined
          matchLabels?:
            | {
                [key: string]: string
              }
            | undefined
        }
      | undefined
    serviceMonitorSelector?:
      | {
          matchExpressions?:
            | {
                key: string
                operator: string
                values?: string[] | undefined
              }[]
            | undefined
          matchLabels?:
            | {
                [key: string]: string
              }
            | undefined
        }
      | undefined
    sha?: string | undefined
    shards?: number | undefined
    storage?:
      | {
          disableMountSubPath?: boolean | undefined
          emptyDir?:
            | {
                medium?: string | undefined
                sizeLimit?: (number | string) | undefined
              }
            | undefined
          ephemeral?:
            | {
                volumeClaimTemplate?:
                  | {
                      metadata?: object | undefined
                      spec: {
                        accessModes?: string[] | undefined
                        dataSource?:
                          | {
                              apiGroup?: string | undefined
                              kind: string
                              name: string
                            }
                          | undefined
                        dataSourceRef?:
                          | {
                              apiGroup?: string | undefined
                              kind: string
                              name: string
                            }
                          | undefined
                        resources?:
                          | {
                              limits?:
                                | {
                                    [key: string]: number | string
                                  }
                                | undefined
                              requests?:
                                | {
                                    [key: string]: number | string
                                  }
                                | undefined
                            }
                          | undefined
                        selector?:
                          | {
                              matchExpressions?:
                                | {
                                    key: string
                                    operator: string
                                    values?: string[] | undefined
                                  }[]
                                | undefined
                              matchLabels?:
                                | {
                                    [key: string]: string
                                  }
                                | undefined
                            }
                          | undefined
                        storageClassName?: string | undefined
                        volumeMode?: string | undefined
                        volumeName?: string | undefined
                      }
                    }
                  | undefined
              }
            | undefined
          volumeClaimTemplate?:
            | {
                apiVersion?: string | undefined
                kind?: string | undefined
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
                      name?: string | undefined
                    }
                  | undefined
                spec?:
                  | {
                      accessModes?: string[] | undefined
                      dataSource?:
                        | {
                            apiGroup?: string | undefined
                            kind: string
                            name: string
                          }
                        | undefined
                      dataSourceRef?:
                        | {
                            apiGroup?: string | undefined
                            kind: string
                            name: string
                          }
                        | undefined
                      resources?:
                        | {
                            limits?:
                              | {
                                  [key: string]: number | string
                                }
                              | undefined
                            requests?:
                              | {
                                  [key: string]: number | string
                                }
                              | undefined
                          }
                        | undefined
                      selector?:
                        | {
                            matchExpressions?:
                              | {
                                  key: string
                                  operator: string
                                  values?: string[] | undefined
                                }[]
                              | undefined
                            matchLabels?:
                              | {
                                  [key: string]: string
                                }
                              | undefined
                          }
                        | undefined
                      storageClassName?: string | undefined
                      volumeMode?: string | undefined
                      volumeName?: string | undefined
                    }
                  | undefined
                status?:
                  | {
                      accessModes?: string[] | undefined
                      allocatedResources?:
                        | {
                            [key: string]: number | string
                          }
                        | undefined
                      capacity?:
                        | {
                            [key: string]: number | string
                          }
                        | undefined
                      conditions?:
                        | {
                            lastProbeTime?: string | undefined
                            lastTransitionTime?: string | undefined
                            message?: string | undefined
                            reason?: string | undefined
                            status: string
                            type: string
                          }[]
                        | undefined
                      phase?: string | undefined
                      resizeStatus?: string | undefined
                    }
                  | undefined
              }
            | undefined
        }
      | undefined
    tag?: string | undefined
    thanos?:
      | {
          baseImage?: string | undefined
          grpcServerTlsConfig?:
            | {
                ca?:
                  | {
                      configMap?:
                        | {
                            key: string
                            name?: string | undefined
                            optional?: boolean | undefined
                          }
                        | undefined
                      secret?:
                        | {
                            key: string
                            name?: string | undefined
                            optional?: boolean | undefined
                          }
                        | undefined
                    }
                  | undefined
                caFile?: string | undefined
                cert?:
                  | {
                      configMap?:
                        | {
                            key: string
                            name?: string | undefined
                            optional?: boolean | undefined
                          }
                        | undefined
                      secret?:
                        | {
                            key: string
                            name?: string | undefined
                            optional?: boolean | undefined
                          }
                        | undefined
                    }
                  | undefined
                certFile?: string | undefined
                insecureSkipVerify?: boolean | undefined
                keyFile?: string | undefined
                keySecret?:
                  | {
                      key: string
                      name?: string | undefined
                      optional?: boolean | undefined
                    }
                  | undefined
                serverName?: string | undefined
              }
            | undefined
          image?: string | undefined
          listenLocal?: boolean | undefined
          logFormat?: ('' | 'logfmt' | 'json') | undefined
          logLevel?: ('' | 'debug' | 'info' | 'warn' | 'error') | undefined
          minTime?: string | undefined
          objectStorageConfig?:
            | {
                key: string
                name?: string | undefined
                optional?: boolean | undefined
              }
            | undefined
          objectStorageConfigFile?: string | undefined
          readyTimeout?: string | undefined
          resources?:
            | {
                limits?:
                  | {
                      [key: string]: number | string
                    }
                  | undefined
                requests?:
                  | {
                      [key: string]: number | string
                    }
                  | undefined
              }
            | undefined
          sha?: string | undefined
          tag?: string | undefined
          tracingConfig?:
            | {
                key: string
                name?: string | undefined
                optional?: boolean | undefined
              }
            | undefined
          tracingConfigFile?: string | undefined
          version?: string | undefined
          volumeMounts?:
            | {
                mountPath: string
                mountPropagation?: string | undefined
                name: string
                readOnly?: boolean | undefined
                subPath?: string | undefined
                subPathExpr?: string | undefined
              }[]
            | undefined
        }
      | undefined
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
                      key: string
                      operator: string
                      values?: string[] | undefined
                    }[]
                  | undefined
                matchLabels?:
                  | {
                      [key: string]: string
                    }
                  | undefined
              }
            | undefined
          maxSkew: number
          minDomains?: number | undefined
          topologyKey: string
          whenUnsatisfiable: string
        }[]
      | undefined
    version?: string | undefined
    volumeMounts?:
      | {
          mountPath: string
          mountPropagation?: string | undefined
          name: string
          readOnly?: boolean | undefined
          subPath?: string | undefined
          subPathExpr?: string | undefined
        }[]
      | undefined
    volumes?:
      | {
          awsElasticBlockStore?:
            | {
                fsType?: string | undefined
                partition?: number | undefined
                readOnly?: boolean | undefined
                volumeID: string
              }
            | undefined
          azureDisk?:
            | {
                cachingMode?: string | undefined
                diskName: string
                diskURI: string
                fsType?: string | undefined
                kind?: string | undefined
                readOnly?: boolean | undefined
              }
            | undefined
          azureFile?:
            | {
                readOnly?: boolean | undefined
                secretName: string
                shareName: string
              }
            | undefined
          cephfs?:
            | {
                monitors: string[]
                path?: string | undefined
                readOnly?: boolean | undefined
                secretFile?: string | undefined
                secretRef?:
                  | {
                      name?: string | undefined
                    }
                  | undefined
                user?: string | undefined
              }
            | undefined
          cinder?:
            | {
                fsType?: string | undefined
                readOnly?: boolean | undefined
                secretRef?:
                  | {
                      name?: string | undefined
                    }
                  | undefined
                volumeID: string
              }
            | undefined
          configMap?:
            | {
                defaultMode?: number | undefined
                items?:
                  | {
                      key: string
                      mode?: number | undefined
                      path: string
                    }[]
                  | undefined
                name?: string | undefined
                optional?: boolean | undefined
              }
            | undefined
          csi?:
            | {
                driver: string
                fsType?: string | undefined
                nodePublishSecretRef?:
                  | {
                      name?: string | undefined
                    }
                  | undefined
                readOnly?: boolean | undefined
                volumeAttributes?:
                  | {
                      [key: string]: string
                    }
                  | undefined
              }
            | undefined
          downwardAPI?:
            | {
                defaultMode?: number | undefined
                items?:
                  | {
                      fieldRef?:
                        | {
                            apiVersion?: string | undefined
                            fieldPath: string
                          }
                        | undefined
                      mode?: number | undefined
                      path: string
                      resourceFieldRef?:
                        | {
                            containerName?: string | undefined
                            divisor?: (number | string) | undefined
                            resource: string
                          }
                        | undefined
                    }[]
                  | undefined
              }
            | undefined
          emptyDir?:
            | {
                medium?: string | undefined
                sizeLimit?: (number | string) | undefined
              }
            | undefined
          ephemeral?:
            | {
                volumeClaimTemplate?:
                  | {
                      metadata?: object | undefined
                      spec: {
                        accessModes?: string[] | undefined
                        dataSource?:
                          | {
                              apiGroup?: string | undefined
                              kind: string
                              name: string
                            }
                          | undefined
                        dataSourceRef?:
                          | {
                              apiGroup?: string | undefined
                              kind: string
                              name: string
                            }
                          | undefined
                        resources?:
                          | {
                              limits?:
                                | {
                                    [key: string]: number | string
                                  }
                                | undefined
                              requests?:
                                | {
                                    [key: string]: number | string
                                  }
                                | undefined
                            }
                          | undefined
                        selector?:
                          | {
                              matchExpressions?:
                                | {
                                    key: string
                                    operator: string
                                    values?: string[] | undefined
                                  }[]
                                | undefined
                              matchLabels?:
                                | {
                                    [key: string]: string
                                  }
                                | undefined
                            }
                          | undefined
                        storageClassName?: string | undefined
                        volumeMode?: string | undefined
                        volumeName?: string | undefined
                      }
                    }
                  | undefined
              }
            | undefined
          fc?:
            | {
                fsType?: string | undefined
                lun?: number | undefined
                readOnly?: boolean | undefined
                targetWWNs?: string[] | undefined
                wwids?: string[] | undefined
              }
            | undefined
          flexVolume?:
            | {
                driver: string
                fsType?: string | undefined
                options?:
                  | {
                      [key: string]: string
                    }
                  | undefined
                readOnly?: boolean | undefined
                secretRef?:
                  | {
                      name?: string | undefined
                    }
                  | undefined
              }
            | undefined
          flocker?:
            | {
                datasetName?: string | undefined
                datasetUUID?: string | undefined
              }
            | undefined
          gcePersistentDisk?:
            | {
                fsType?: string | undefined
                partition?: number | undefined
                pdName: string
                readOnly?: boolean | undefined
              }
            | undefined
          gitRepo?:
            | {
                directory?: string | undefined
                repository: string
                revision?: string | undefined
              }
            | undefined
          glusterfs?:
            | {
                endpoints: string
                path: string
                readOnly?: boolean | undefined
              }
            | undefined
          hostPath?:
            | {
                path: string
                type?: string | undefined
              }
            | undefined
          iscsi?:
            | {
                chapAuthDiscovery?: boolean | undefined
                chapAuthSession?: boolean | undefined
                fsType?: string | undefined
                initiatorName?: string | undefined
                iqn: string
                iscsiInterface?: string | undefined
                lun: number
                portals?: string[] | undefined
                readOnly?: boolean | undefined
                secretRef?:
                  | {
                      name?: string | undefined
                    }
                  | undefined
                targetPortal: string
              }
            | undefined
          name: string
          nfs?:
            | {
                path: string
                readOnly?: boolean | undefined
                server: string
              }
            | undefined
          persistentVolumeClaim?:
            | {
                claimName: string
                readOnly?: boolean | undefined
              }
            | undefined
          photonPersistentDisk?:
            | {
                fsType?: string | undefined
                pdID: string
              }
            | undefined
          portworxVolume?:
            | {
                fsType?: string | undefined
                readOnly?: boolean | undefined
                volumeID: string
              }
            | undefined
          projected?:
            | {
                defaultMode?: number | undefined
                sources?:
                  | {
                      configMap?:
                        | {
                            items?:
                              | {
                                  key: string
                                  mode?: number | undefined
                                  path: string
                                }[]
                              | undefined
                            name?: string | undefined
                            optional?: boolean | undefined
                          }
                        | undefined
                      downwardAPI?:
                        | {
                            items?:
                              | {
                                  fieldRef?:
                                    | {
                                        apiVersion?: string | undefined
                                        fieldPath: string
                                      }
                                    | undefined
                                  mode?: number | undefined
                                  path: string
                                  resourceFieldRef?:
                                    | {
                                        containerName?: string | undefined
                                        divisor?: (number | string) | undefined
                                        resource: string
                                      }
                                    | undefined
                                }[]
                              | undefined
                          }
                        | undefined
                      secret?:
                        | {
                            items?:
                              | {
                                  key: string
                                  mode?: number | undefined
                                  path: string
                                }[]
                              | undefined
                            name?: string | undefined
                            optional?: boolean | undefined
                          }
                        | undefined
                      serviceAccountToken?:
                        | {
                            audience?: string | undefined
                            expirationSeconds?: number | undefined
                            path: string
                          }
                        | undefined
                    }[]
                  | undefined
              }
            | undefined
          quobyte?:
            | {
                group?: string | undefined
                readOnly?: boolean | undefined
                registry: string
                tenant?: string | undefined
                user?: string | undefined
                volume: string
              }
            | undefined
          rbd?:
            | {
                fsType?: string | undefined
                image: string
                keyring?: string | undefined
                monitors: string[]
                pool?: string | undefined
                readOnly?: boolean | undefined
                secretRef?:
                  | {
                      name?: string | undefined
                    }
                  | undefined
                user?: string | undefined
              }
            | undefined
          scaleIO?:
            | {
                fsType?: string | undefined
                gateway: string
                protectionDomain?: string | undefined
                readOnly?: boolean | undefined
                secretRef: {
                  name?: string | undefined
                }
                sslEnabled?: boolean | undefined
                storageMode?: string | undefined
                storagePool?: string | undefined
                system: string
                volumeName?: string | undefined
              }
            | undefined
          secret?:
            | {
                defaultMode?: number | undefined
                items?:
                  | {
                      key: string
                      mode?: number | undefined
                      path: string
                    }[]
                  | undefined
                optional?: boolean | undefined
                secretName?: string | undefined
              }
            | undefined
          storageos?:
            | {
                fsType?: string | undefined
                readOnly?: boolean | undefined
                secretRef?:
                  | {
                      name?: string | undefined
                    }
                  | undefined
                volumeName?: string | undefined
                volumeNamespace?: string | undefined
              }
            | undefined
          vsphereVolume?:
            | {
                fsType?: string | undefined
                storagePolicyID?: string | undefined
                storagePolicyName?: string | undefined
                volumePath: string
              }
            | undefined
        }[]
      | undefined
    walCompression?: boolean | undefined
    web?:
      | {
          pageTitle?: string | undefined
          tlsConfig?:
            | {
                cert: {
                  configMap?:
                    | {
                        key: string
                        name?: string | undefined
                        optional?: boolean | undefined
                      }
                    | undefined
                  secret?:
                    | {
                        key: string
                        name?: string | undefined
                        optional?: boolean | undefined
                      }
                    | undefined
                }
                cipherSuites?: string[] | undefined
                clientAuthType?: string | undefined
                client_ca?:
                  | {
                      configMap?:
                        | {
                            key: string
                            name?: string | undefined
                            optional?: boolean | undefined
                          }
                        | undefined
                      secret?:
                        | {
                            key: string
                            name?: string | undefined
                            optional?: boolean | undefined
                          }
                        | undefined
                    }
                  | undefined
                curvePreferences?: string[] | undefined
                keySecret: {
                  key: string
                  name?: string | undefined
                  optional?: boolean | undefined
                }
                maxVersion?: string | undefined
                minVersion?: string | undefined
                preferServerCipherSuites?: boolean | undefined
              }
            | undefined
        }
      | undefined
  }
  status?:
    | {
        availableReplicas: number
        conditions?:
          | {
              lastTransitionTime: string
              message?: string | undefined
              reason?: string | undefined
              status: string
              type: string
            }[]
          | undefined
        paused: boolean
        replicas: number
        shardStatuses?:
          | {
              availableReplicas: number
              replicas: number
              shardID: string
              unavailableReplicas: number
              updatedReplicas: number
            }[]
          | undefined
        unavailableReplicas: number
        updatedReplicas: number
      }
    | undefined
}
export type ComCoreosMonitoringV1PrometheusList = {
  apiVersion?: string | undefined
  items: ComCoreosMonitoringV1Prometheus[]
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ListMeta | undefined
}
export type ComCoreosMonitoringV1PrometheusRule = {
  apiVersion?: string | undefined
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ObjectMeta | undefined
  spec: {
    groups?:
      | {
          interval?: string | undefined
          name: string
          partial_response_strategy?: string | undefined
          rules: {
            alert?: string | undefined
            annotations?:
              | {
                  [key: string]: string
                }
              | undefined
            expr: number | string
            for?: string | undefined
            labels?:
              | {
                  [key: string]: string
                }
              | undefined
            record?: string | undefined
          }[]
        }[]
      | undefined
  }
}
export type ComCoreosMonitoringV1PrometheusRuleList = {
  apiVersion?: string | undefined
  items: ComCoreosMonitoringV1PrometheusRule[]
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ListMeta | undefined
}
export type ComCoreosMonitoringV1ServiceMonitor = {
  apiVersion?: string | undefined
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ObjectMeta | undefined
  spec: {
    endpoints: {
      authorization?:
        | {
            credentials?:
              | {
                  key: string
                  name?: string | undefined
                  optional?: boolean | undefined
                }
              | undefined
            type?: string | undefined
          }
        | undefined
      basicAuth?:
        | {
            password?:
              | {
                  key: string
                  name?: string | undefined
                  optional?: boolean | undefined
                }
              | undefined
            username?:
              | {
                  key: string
                  name?: string | undefined
                  optional?: boolean | undefined
                }
              | undefined
          }
        | undefined
      bearerTokenFile?: string | undefined
      bearerTokenSecret?:
        | {
            key: string
            name?: string | undefined
            optional?: boolean | undefined
          }
        | undefined
      enableHttp2?: boolean | undefined
      followRedirects?: boolean | undefined
      honorLabels?: boolean | undefined
      honorTimestamps?: boolean | undefined
      interval?: string | undefined
      metricRelabelings?:
        | {
            action?:
              | (
                  | 'replace'
                  | 'Replace'
                  | 'keep'
                  | 'Keep'
                  | 'drop'
                  | 'Drop'
                  | 'hashmod'
                  | 'HashMod'
                  | 'labelmap'
                  | 'LabelMap'
                  | 'labeldrop'
                  | 'LabelDrop'
                  | 'labelkeep'
                  | 'LabelKeep'
                  | 'lowercase'
                  | 'Lowercase'
                  | 'uppercase'
                  | 'Uppercase'
                )
              | undefined
            modulus?: number | undefined
            regex?: string | undefined
            replacement?: string | undefined
            separator?: string | undefined
            sourceLabels?: string[] | undefined
            targetLabel?: string | undefined
          }[]
        | undefined
      oauth2?:
        | {
            clientId: {
              configMap?:
                | {
                    key: string
                    name?: string | undefined
                    optional?: boolean | undefined
                  }
                | undefined
              secret?:
                | {
                    key: string
                    name?: string | undefined
                    optional?: boolean | undefined
                  }
                | undefined
            }
            clientSecret: {
              key: string
              name?: string | undefined
              optional?: boolean | undefined
            }
            endpointParams?:
              | {
                  [key: string]: string
                }
              | undefined
            scopes?: string[] | undefined
            tokenUrl: string
          }
        | undefined
      params?:
        | {
            [key: string]: string[]
          }
        | undefined
      path?: string | undefined
      port?: string | undefined
      proxyUrl?: string | undefined
      relabelings?:
        | {
            action?:
              | (
                  | 'replace'
                  | 'Replace'
                  | 'keep'
                  | 'Keep'
                  | 'drop'
                  | 'Drop'
                  | 'hashmod'
                  | 'HashMod'
                  | 'labelmap'
                  | 'LabelMap'
                  | 'labeldrop'
                  | 'LabelDrop'
                  | 'labelkeep'
                  | 'LabelKeep'
                  | 'lowercase'
                  | 'Lowercase'
                  | 'uppercase'
                  | 'Uppercase'
                )
              | undefined
            modulus?: number | undefined
            regex?: string | undefined
            replacement?: string | undefined
            separator?: string | undefined
            sourceLabels?: string[] | undefined
            targetLabel?: string | undefined
          }[]
        | undefined
      scheme?: string | undefined
      scrapeTimeout?: string | undefined
      targetPort?: (number | string) | undefined
      tlsConfig?:
        | {
            ca?:
              | {
                  configMap?:
                    | {
                        key: string
                        name?: string | undefined
                        optional?: boolean | undefined
                      }
                    | undefined
                  secret?:
                    | {
                        key: string
                        name?: string | undefined
                        optional?: boolean | undefined
                      }
                    | undefined
                }
              | undefined
            caFile?: string | undefined
            cert?:
              | {
                  configMap?:
                    | {
                        key: string
                        name?: string | undefined
                        optional?: boolean | undefined
                      }
                    | undefined
                  secret?:
                    | {
                        key: string
                        name?: string | undefined
                        optional?: boolean | undefined
                      }
                    | undefined
                }
              | undefined
            certFile?: string | undefined
            insecureSkipVerify?: boolean | undefined
            keyFile?: string | undefined
            keySecret?:
              | {
                  key: string
                  name?: string | undefined
                  optional?: boolean | undefined
                }
              | undefined
            serverName?: string | undefined
          }
        | undefined
    }[]
    jobLabel?: string | undefined
    labelLimit?: number | undefined
    labelNameLengthLimit?: number | undefined
    labelValueLengthLimit?: number | undefined
    namespaceSelector?:
      | {
          any?: boolean | undefined
          matchNames?: string[] | undefined
        }
      | undefined
    podTargetLabels?: string[] | undefined
    sampleLimit?: number | undefined
    selector: {
      matchExpressions?:
        | {
            key: string
            operator: string
            values?: string[] | undefined
          }[]
        | undefined
      matchLabels?:
        | {
            [key: string]: string
          }
        | undefined
    }
    targetLabels?: string[] | undefined
    targetLimit?: number | undefined
  }
}
export type ComCoreosMonitoringV1ServiceMonitorList = {
  apiVersion?: string | undefined
  items: ComCoreosMonitoringV1ServiceMonitor[]
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ListMeta | undefined
}
export type ComCoreosMonitoringV1ThanosRuler = {
  apiVersion?: string | undefined
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ObjectMeta | undefined
  spec: {
    affinity?:
      | {
          nodeAffinity?:
            | {
                preferredDuringSchedulingIgnoredDuringExecution?:
                  | {
                      preference: {
                        matchExpressions?:
                          | {
                              key: string
                              operator: string
                              values?: string[] | undefined
                            }[]
                          | undefined
                        matchFields?:
                          | {
                              key: string
                              operator: string
                              values?: string[] | undefined
                            }[]
                          | undefined
                      }
                      weight: number
                    }[]
                  | undefined
                requiredDuringSchedulingIgnoredDuringExecution?:
                  | {
                      nodeSelectorTerms: {
                        matchExpressions?:
                          | {
                              key: string
                              operator: string
                              values?: string[] | undefined
                            }[]
                          | undefined
                        matchFields?:
                          | {
                              key: string
                              operator: string
                              values?: string[] | undefined
                            }[]
                          | undefined
                      }[]
                    }
                  | undefined
              }
            | undefined
          podAffinity?:
            | {
                preferredDuringSchedulingIgnoredDuringExecution?:
                  | {
                      podAffinityTerm: {
                        labelSelector?:
                          | {
                              matchExpressions?:
                                | {
                                    key: string
                                    operator: string
                                    values?: string[] | undefined
                                  }[]
                                | undefined
                              matchLabels?:
                                | {
                                    [key: string]: string
                                  }
                                | undefined
                            }
                          | undefined
                        namespaceSelector?:
                          | {
                              matchExpressions?:
                                | {
                                    key: string
                                    operator: string
                                    values?: string[] | undefined
                                  }[]
                                | undefined
                              matchLabels?:
                                | {
                                    [key: string]: string
                                  }
                                | undefined
                            }
                          | undefined
                        namespaces?: string[] | undefined
                        topologyKey: string
                      }
                      weight: number
                    }[]
                  | undefined
                requiredDuringSchedulingIgnoredDuringExecution?:
                  | {
                      labelSelector?:
                        | {
                            matchExpressions?:
                              | {
                                  key: string
                                  operator: string
                                  values?: string[] | undefined
                                }[]
                              | undefined
                            matchLabels?:
                              | {
                                  [key: string]: string
                                }
                              | undefined
                          }
                        | undefined
                      namespaceSelector?:
                        | {
                            matchExpressions?:
                              | {
                                  key: string
                                  operator: string
                                  values?: string[] | undefined
                                }[]
                              | undefined
                            matchLabels?:
                              | {
                                  [key: string]: string
                                }
                              | undefined
                          }
                        | undefined
                      namespaces?: string[] | undefined
                      topologyKey: string
                    }[]
                  | undefined
              }
            | undefined
          podAntiAffinity?:
            | {
                preferredDuringSchedulingIgnoredDuringExecution?:
                  | {
                      podAffinityTerm: {
                        labelSelector?:
                          | {
                              matchExpressions?:
                                | {
                                    key: string
                                    operator: string
                                    values?: string[] | undefined
                                  }[]
                                | undefined
                              matchLabels?:
                                | {
                                    [key: string]: string
                                  }
                                | undefined
                            }
                          | undefined
                        namespaceSelector?:
                          | {
                              matchExpressions?:
                                | {
                                    key: string
                                    operator: string
                                    values?: string[] | undefined
                                  }[]
                                | undefined
                              matchLabels?:
                                | {
                                    [key: string]: string
                                  }
                                | undefined
                            }
                          | undefined
                        namespaces?: string[] | undefined
                        topologyKey: string
                      }
                      weight: number
                    }[]
                  | undefined
                requiredDuringSchedulingIgnoredDuringExecution?:
                  | {
                      labelSelector?:
                        | {
                            matchExpressions?:
                              | {
                                  key: string
                                  operator: string
                                  values?: string[] | undefined
                                }[]
                              | undefined
                            matchLabels?:
                              | {
                                  [key: string]: string
                                }
                              | undefined
                          }
                        | undefined
                      namespaceSelector?:
                        | {
                            matchExpressions?:
                              | {
                                  key: string
                                  operator: string
                                  values?: string[] | undefined
                                }[]
                              | undefined
                            matchLabels?:
                              | {
                                  [key: string]: string
                                }
                              | undefined
                          }
                        | undefined
                      namespaces?: string[] | undefined
                      topologyKey: string
                    }[]
                  | undefined
              }
            | undefined
        }
      | undefined
    alertDropLabels?: string[] | undefined
    alertQueryUrl?: string | undefined
    alertRelabelConfigFile?: string | undefined
    alertRelabelConfigs?:
      | {
          key: string
          name?: string | undefined
          optional?: boolean | undefined
        }
      | undefined
    alertmanagersConfig?:
      | {
          key: string
          name?: string | undefined
          optional?: boolean | undefined
        }
      | undefined
    alertmanagersUrl?: string[] | undefined
    containers?:
      | {
          args?: string[] | undefined
          command?: string[] | undefined
          env?:
            | {
                name: string
                value?: string | undefined
                valueFrom?:
                  | {
                      configMapKeyRef?:
                        | {
                            key: string
                            name?: string | undefined
                            optional?: boolean | undefined
                          }
                        | undefined
                      fieldRef?:
                        | {
                            apiVersion?: string | undefined
                            fieldPath: string
                          }
                        | undefined
                      resourceFieldRef?:
                        | {
                            containerName?: string | undefined
                            divisor?: (number | string) | undefined
                            resource: string
                          }
                        | undefined
                      secretKeyRef?:
                        | {
                            key: string
                            name?: string | undefined
                            optional?: boolean | undefined
                          }
                        | undefined
                    }
                  | undefined
              }[]
            | undefined
          envFrom?:
            | {
                configMapRef?:
                  | {
                      name?: string | undefined
                      optional?: boolean | undefined
                    }
                  | undefined
                prefix?: string | undefined
                secretRef?:
                  | {
                      name?: string | undefined
                      optional?: boolean | undefined
                    }
                  | undefined
              }[]
            | undefined
          image?: string | undefined
          imagePullPolicy?: string | undefined
          lifecycle?:
            | {
                postStart?:
                  | {
                      exec?:
                        | {
                            command?: string[] | undefined
                          }
                        | undefined
                      httpGet?:
                        | {
                            host?: string | undefined
                            httpHeaders?:
                              | {
                                  name: string
                                  value: string
                                }[]
                              | undefined
                            path?: string | undefined
                            port: number | string
                            scheme?: string | undefined
                          }
                        | undefined
                      tcpSocket?:
                        | {
                            host?: string | undefined
                            port: number | string
                          }
                        | undefined
                    }
                  | undefined
                preStop?:
                  | {
                      exec?:
                        | {
                            command?: string[] | undefined
                          }
                        | undefined
                      httpGet?:
                        | {
                            host?: string | undefined
                            httpHeaders?:
                              | {
                                  name: string
                                  value: string
                                }[]
                              | undefined
                            path?: string | undefined
                            port: number | string
                            scheme?: string | undefined
                          }
                        | undefined
                      tcpSocket?:
                        | {
                            host?: string | undefined
                            port: number | string
                          }
                        | undefined
                    }
                  | undefined
              }
            | undefined
          livenessProbe?:
            | {
                exec?:
                  | {
                      command?: string[] | undefined
                    }
                  | undefined
                failureThreshold?: number | undefined
                grpc?:
                  | {
                      port: number
                      service?: string | undefined
                    }
                  | undefined
                httpGet?:
                  | {
                      host?: string | undefined
                      httpHeaders?:
                        | {
                            name: string
                            value: string
                          }[]
                        | undefined
                      path?: string | undefined
                      port: number | string
                      scheme?: string | undefined
                    }
                  | undefined
                initialDelaySeconds?: number | undefined
                periodSeconds?: number | undefined
                successThreshold?: number | undefined
                tcpSocket?:
                  | {
                      host?: string | undefined
                      port: number | string
                    }
                  | undefined
                terminationGracePeriodSeconds?: number | undefined
                timeoutSeconds?: number | undefined
              }
            | undefined
          name: string
          ports?:
            | {
                containerPort: number
                hostIP?: string | undefined
                hostPort?: number | undefined
                name?: string | undefined
                protocol?: string | undefined
              }[]
            | undefined
          readinessProbe?:
            | {
                exec?:
                  | {
                      command?: string[] | undefined
                    }
                  | undefined
                failureThreshold?: number | undefined
                grpc?:
                  | {
                      port: number
                      service?: string | undefined
                    }
                  | undefined
                httpGet?:
                  | {
                      host?: string | undefined
                      httpHeaders?:
                        | {
                            name: string
                            value: string
                          }[]
                        | undefined
                      path?: string | undefined
                      port: number | string
                      scheme?: string | undefined
                    }
                  | undefined
                initialDelaySeconds?: number | undefined
                periodSeconds?: number | undefined
                successThreshold?: number | undefined
                tcpSocket?:
                  | {
                      host?: string | undefined
                      port: number | string
                    }
                  | undefined
                terminationGracePeriodSeconds?: number | undefined
                timeoutSeconds?: number | undefined
              }
            | undefined
          resources?:
            | {
                limits?:
                  | {
                      [key: string]: number | string
                    }
                  | undefined
                requests?:
                  | {
                      [key: string]: number | string
                    }
                  | undefined
              }
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
                      type: string
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
          startupProbe?:
            | {
                exec?:
                  | {
                      command?: string[] | undefined
                    }
                  | undefined
                failureThreshold?: number | undefined
                grpc?:
                  | {
                      port: number
                      service?: string | undefined
                    }
                  | undefined
                httpGet?:
                  | {
                      host?: string | undefined
                      httpHeaders?:
                        | {
                            name: string
                            value: string
                          }[]
                        | undefined
                      path?: string | undefined
                      port: number | string
                      scheme?: string | undefined
                    }
                  | undefined
                initialDelaySeconds?: number | undefined
                periodSeconds?: number | undefined
                successThreshold?: number | undefined
                tcpSocket?:
                  | {
                      host?: string | undefined
                      port: number | string
                    }
                  | undefined
                terminationGracePeriodSeconds?: number | undefined
                timeoutSeconds?: number | undefined
              }
            | undefined
          stdin?: boolean | undefined
          stdinOnce?: boolean | undefined
          terminationMessagePath?: string | undefined
          terminationMessagePolicy?: string | undefined
          tty?: boolean | undefined
          volumeDevices?:
            | {
                devicePath: string
                name: string
              }[]
            | undefined
          volumeMounts?:
            | {
                mountPath: string
                mountPropagation?: string | undefined
                name: string
                readOnly?: boolean | undefined
                subPath?: string | undefined
                subPathExpr?: string | undefined
              }[]
            | undefined
          workingDir?: string | undefined
        }[]
      | undefined
    enforcedNamespaceLabel?: string | undefined
    evaluationInterval?: string | undefined
    excludedFromEnforcement?:
      | {
          group?: 'monitoring.coreos.com' | undefined
          name?: string | undefined
          namespace: string
          resource:
            | 'prometheusrules'
            | 'servicemonitors'
            | 'podmonitors'
            | 'probes'
        }[]
      | undefined
    externalPrefix?: string | undefined
    grpcServerTlsConfig?:
      | {
          ca?:
            | {
                configMap?:
                  | {
                      key: string
                      name?: string | undefined
                      optional?: boolean | undefined
                    }
                  | undefined
                secret?:
                  | {
                      key: string
                      name?: string | undefined
                      optional?: boolean | undefined
                    }
                  | undefined
              }
            | undefined
          caFile?: string | undefined
          cert?:
            | {
                configMap?:
                  | {
                      key: string
                      name?: string | undefined
                      optional?: boolean | undefined
                    }
                  | undefined
                secret?:
                  | {
                      key: string
                      name?: string | undefined
                      optional?: boolean | undefined
                    }
                  | undefined
              }
            | undefined
          certFile?: string | undefined
          insecureSkipVerify?: boolean | undefined
          keyFile?: string | undefined
          keySecret?:
            | {
                key: string
                name?: string | undefined
                optional?: boolean | undefined
              }
            | undefined
          serverName?: string | undefined
        }
      | undefined
    hostAliases?:
      | {
          hostnames: string[]
          ip: string
        }[]
      | undefined
    image?: string | undefined
    imagePullSecrets?:
      | {
          name?: string | undefined
        }[]
      | undefined
    initContainers?:
      | {
          args?: string[] | undefined
          command?: string[] | undefined
          env?:
            | {
                name: string
                value?: string | undefined
                valueFrom?:
                  | {
                      configMapKeyRef?:
                        | {
                            key: string
                            name?: string | undefined
                            optional?: boolean | undefined
                          }
                        | undefined
                      fieldRef?:
                        | {
                            apiVersion?: string | undefined
                            fieldPath: string
                          }
                        | undefined
                      resourceFieldRef?:
                        | {
                            containerName?: string | undefined
                            divisor?: (number | string) | undefined
                            resource: string
                          }
                        | undefined
                      secretKeyRef?:
                        | {
                            key: string
                            name?: string | undefined
                            optional?: boolean | undefined
                          }
                        | undefined
                    }
                  | undefined
              }[]
            | undefined
          envFrom?:
            | {
                configMapRef?:
                  | {
                      name?: string | undefined
                      optional?: boolean | undefined
                    }
                  | undefined
                prefix?: string | undefined
                secretRef?:
                  | {
                      name?: string | undefined
                      optional?: boolean | undefined
                    }
                  | undefined
              }[]
            | undefined
          image?: string | undefined
          imagePullPolicy?: string | undefined
          lifecycle?:
            | {
                postStart?:
                  | {
                      exec?:
                        | {
                            command?: string[] | undefined
                          }
                        | undefined
                      httpGet?:
                        | {
                            host?: string | undefined
                            httpHeaders?:
                              | {
                                  name: string
                                  value: string
                                }[]
                              | undefined
                            path?: string | undefined
                            port: number | string
                            scheme?: string | undefined
                          }
                        | undefined
                      tcpSocket?:
                        | {
                            host?: string | undefined
                            port: number | string
                          }
                        | undefined
                    }
                  | undefined
                preStop?:
                  | {
                      exec?:
                        | {
                            command?: string[] | undefined
                          }
                        | undefined
                      httpGet?:
                        | {
                            host?: string | undefined
                            httpHeaders?:
                              | {
                                  name: string
                                  value: string
                                }[]
                              | undefined
                            path?: string | undefined
                            port: number | string
                            scheme?: string | undefined
                          }
                        | undefined
                      tcpSocket?:
                        | {
                            host?: string | undefined
                            port: number | string
                          }
                        | undefined
                    }
                  | undefined
              }
            | undefined
          livenessProbe?:
            | {
                exec?:
                  | {
                      command?: string[] | undefined
                    }
                  | undefined
                failureThreshold?: number | undefined
                grpc?:
                  | {
                      port: number
                      service?: string | undefined
                    }
                  | undefined
                httpGet?:
                  | {
                      host?: string | undefined
                      httpHeaders?:
                        | {
                            name: string
                            value: string
                          }[]
                        | undefined
                      path?: string | undefined
                      port: number | string
                      scheme?: string | undefined
                    }
                  | undefined
                initialDelaySeconds?: number | undefined
                periodSeconds?: number | undefined
                successThreshold?: number | undefined
                tcpSocket?:
                  | {
                      host?: string | undefined
                      port: number | string
                    }
                  | undefined
                terminationGracePeriodSeconds?: number | undefined
                timeoutSeconds?: number | undefined
              }
            | undefined
          name: string
          ports?:
            | {
                containerPort: number
                hostIP?: string | undefined
                hostPort?: number | undefined
                name?: string | undefined
                protocol?: string | undefined
              }[]
            | undefined
          readinessProbe?:
            | {
                exec?:
                  | {
                      command?: string[] | undefined
                    }
                  | undefined
                failureThreshold?: number | undefined
                grpc?:
                  | {
                      port: number
                      service?: string | undefined
                    }
                  | undefined
                httpGet?:
                  | {
                      host?: string | undefined
                      httpHeaders?:
                        | {
                            name: string
                            value: string
                          }[]
                        | undefined
                      path?: string | undefined
                      port: number | string
                      scheme?: string | undefined
                    }
                  | undefined
                initialDelaySeconds?: number | undefined
                periodSeconds?: number | undefined
                successThreshold?: number | undefined
                tcpSocket?:
                  | {
                      host?: string | undefined
                      port: number | string
                    }
                  | undefined
                terminationGracePeriodSeconds?: number | undefined
                timeoutSeconds?: number | undefined
              }
            | undefined
          resources?:
            | {
                limits?:
                  | {
                      [key: string]: number | string
                    }
                  | undefined
                requests?:
                  | {
                      [key: string]: number | string
                    }
                  | undefined
              }
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
                      type: string
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
          startupProbe?:
            | {
                exec?:
                  | {
                      command?: string[] | undefined
                    }
                  | undefined
                failureThreshold?: number | undefined
                grpc?:
                  | {
                      port: number
                      service?: string | undefined
                    }
                  | undefined
                httpGet?:
                  | {
                      host?: string | undefined
                      httpHeaders?:
                        | {
                            name: string
                            value: string
                          }[]
                        | undefined
                      path?: string | undefined
                      port: number | string
                      scheme?: string | undefined
                    }
                  | undefined
                initialDelaySeconds?: number | undefined
                periodSeconds?: number | undefined
                successThreshold?: number | undefined
                tcpSocket?:
                  | {
                      host?: string | undefined
                      port: number | string
                    }
                  | undefined
                terminationGracePeriodSeconds?: number | undefined
                timeoutSeconds?: number | undefined
              }
            | undefined
          stdin?: boolean | undefined
          stdinOnce?: boolean | undefined
          terminationMessagePath?: string | undefined
          terminationMessagePolicy?: string | undefined
          tty?: boolean | undefined
          volumeDevices?:
            | {
                devicePath: string
                name: string
              }[]
            | undefined
          volumeMounts?:
            | {
                mountPath: string
                mountPropagation?: string | undefined
                name: string
                readOnly?: boolean | undefined
                subPath?: string | undefined
                subPathExpr?: string | undefined
              }[]
            | undefined
          workingDir?: string | undefined
        }[]
      | undefined
    labels?:
      | {
          [key: string]: string
        }
      | undefined
    listenLocal?: boolean | undefined
    logFormat?: ('' | 'logfmt' | 'json') | undefined
    logLevel?: ('' | 'debug' | 'info' | 'warn' | 'error') | undefined
    minReadySeconds?: number | undefined
    nodeSelector?:
      | {
          [key: string]: string
        }
      | undefined
    objectStorageConfig?:
      | {
          key: string
          name?: string | undefined
          optional?: boolean | undefined
        }
      | undefined
    objectStorageConfigFile?: string | undefined
    paused?: boolean | undefined
    podMetadata?:
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
          name?: string | undefined
        }
      | undefined
    portName?: string | undefined
    priorityClassName?: string | undefined
    prometheusRulesExcludedFromEnforce?:
      | {
          ruleName: string
          ruleNamespace: string
        }[]
      | undefined
    queryConfig?:
      | {
          key: string
          name?: string | undefined
          optional?: boolean | undefined
        }
      | undefined
    queryEndpoints?: string[] | undefined
    replicas?: number | undefined
    resources?:
      | {
          limits?:
            | {
                [key: string]: number | string
              }
            | undefined
          requests?:
            | {
                [key: string]: number | string
              }
            | undefined
        }
      | undefined
    retention?: string | undefined
    routePrefix?: string | undefined
    ruleNamespaceSelector?:
      | {
          matchExpressions?:
            | {
                key: string
                operator: string
                values?: string[] | undefined
              }[]
            | undefined
          matchLabels?:
            | {
                [key: string]: string
              }
            | undefined
        }
      | undefined
    ruleSelector?:
      | {
          matchExpressions?:
            | {
                key: string
                operator: string
                values?: string[] | undefined
              }[]
            | undefined
          matchLabels?:
            | {
                [key: string]: string
              }
            | undefined
        }
      | undefined
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
                type: string
              }
            | undefined
          supplementalGroups?: number[] | undefined
          sysctls?:
            | {
                name: string
                value: string
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
    serviceAccountName?: string | undefined
    storage?:
      | {
          disableMountSubPath?: boolean | undefined
          emptyDir?:
            | {
                medium?: string | undefined
                sizeLimit?: (number | string) | undefined
              }
            | undefined
          ephemeral?:
            | {
                volumeClaimTemplate?:
                  | {
                      metadata?: object | undefined
                      spec: {
                        accessModes?: string[] | undefined
                        dataSource?:
                          | {
                              apiGroup?: string | undefined
                              kind: string
                              name: string
                            }
                          | undefined
                        dataSourceRef?:
                          | {
                              apiGroup?: string | undefined
                              kind: string
                              name: string
                            }
                          | undefined
                        resources?:
                          | {
                              limits?:
                                | {
                                    [key: string]: number | string
                                  }
                                | undefined
                              requests?:
                                | {
                                    [key: string]: number | string
                                  }
                                | undefined
                            }
                          | undefined
                        selector?:
                          | {
                              matchExpressions?:
                                | {
                                    key: string
                                    operator: string
                                    values?: string[] | undefined
                                  }[]
                                | undefined
                              matchLabels?:
                                | {
                                    [key: string]: string
                                  }
                                | undefined
                            }
                          | undefined
                        storageClassName?: string | undefined
                        volumeMode?: string | undefined
                        volumeName?: string | undefined
                      }
                    }
                  | undefined
              }
            | undefined
          volumeClaimTemplate?:
            | {
                apiVersion?: string | undefined
                kind?: string | undefined
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
                      name?: string | undefined
                    }
                  | undefined
                spec?:
                  | {
                      accessModes?: string[] | undefined
                      dataSource?:
                        | {
                            apiGroup?: string | undefined
                            kind: string
                            name: string
                          }
                        | undefined
                      dataSourceRef?:
                        | {
                            apiGroup?: string | undefined
                            kind: string
                            name: string
                          }
                        | undefined
                      resources?:
                        | {
                            limits?:
                              | {
                                  [key: string]: number | string
                                }
                              | undefined
                            requests?:
                              | {
                                  [key: string]: number | string
                                }
                              | undefined
                          }
                        | undefined
                      selector?:
                        | {
                            matchExpressions?:
                              | {
                                  key: string
                                  operator: string
                                  values?: string[] | undefined
                                }[]
                              | undefined
                            matchLabels?:
                              | {
                                  [key: string]: string
                                }
                              | undefined
                          }
                        | undefined
                      storageClassName?: string | undefined
                      volumeMode?: string | undefined
                      volumeName?: string | undefined
                    }
                  | undefined
                status?:
                  | {
                      accessModes?: string[] | undefined
                      allocatedResources?:
                        | {
                            [key: string]: number | string
                          }
                        | undefined
                      capacity?:
                        | {
                            [key: string]: number | string
                          }
                        | undefined
                      conditions?:
                        | {
                            lastProbeTime?: string | undefined
                            lastTransitionTime?: string | undefined
                            message?: string | undefined
                            reason?: string | undefined
                            status: string
                            type: string
                          }[]
                        | undefined
                      phase?: string | undefined
                      resizeStatus?: string | undefined
                    }
                  | undefined
              }
            | undefined
        }
      | undefined
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
                      key: string
                      operator: string
                      values?: string[] | undefined
                    }[]
                  | undefined
                matchLabels?:
                  | {
                      [key: string]: string
                    }
                  | undefined
              }
            | undefined
          maxSkew: number
          minDomains?: number | undefined
          topologyKey: string
          whenUnsatisfiable: string
        }[]
      | undefined
    tracingConfig?:
      | {
          key: string
          name?: string | undefined
          optional?: boolean | undefined
        }
      | undefined
    volumes?:
      | {
          awsElasticBlockStore?:
            | {
                fsType?: string | undefined
                partition?: number | undefined
                readOnly?: boolean | undefined
                volumeID: string
              }
            | undefined
          azureDisk?:
            | {
                cachingMode?: string | undefined
                diskName: string
                diskURI: string
                fsType?: string | undefined
                kind?: string | undefined
                readOnly?: boolean | undefined
              }
            | undefined
          azureFile?:
            | {
                readOnly?: boolean | undefined
                secretName: string
                shareName: string
              }
            | undefined
          cephfs?:
            | {
                monitors: string[]
                path?: string | undefined
                readOnly?: boolean | undefined
                secretFile?: string | undefined
                secretRef?:
                  | {
                      name?: string | undefined
                    }
                  | undefined
                user?: string | undefined
              }
            | undefined
          cinder?:
            | {
                fsType?: string | undefined
                readOnly?: boolean | undefined
                secretRef?:
                  | {
                      name?: string | undefined
                    }
                  | undefined
                volumeID: string
              }
            | undefined
          configMap?:
            | {
                defaultMode?: number | undefined
                items?:
                  | {
                      key: string
                      mode?: number | undefined
                      path: string
                    }[]
                  | undefined
                name?: string | undefined
                optional?: boolean | undefined
              }
            | undefined
          csi?:
            | {
                driver: string
                fsType?: string | undefined
                nodePublishSecretRef?:
                  | {
                      name?: string | undefined
                    }
                  | undefined
                readOnly?: boolean | undefined
                volumeAttributes?:
                  | {
                      [key: string]: string
                    }
                  | undefined
              }
            | undefined
          downwardAPI?:
            | {
                defaultMode?: number | undefined
                items?:
                  | {
                      fieldRef?:
                        | {
                            apiVersion?: string | undefined
                            fieldPath: string
                          }
                        | undefined
                      mode?: number | undefined
                      path: string
                      resourceFieldRef?:
                        | {
                            containerName?: string | undefined
                            divisor?: (number | string) | undefined
                            resource: string
                          }
                        | undefined
                    }[]
                  | undefined
              }
            | undefined
          emptyDir?:
            | {
                medium?: string | undefined
                sizeLimit?: (number | string) | undefined
              }
            | undefined
          ephemeral?:
            | {
                volumeClaimTemplate?:
                  | {
                      metadata?: object | undefined
                      spec: {
                        accessModes?: string[] | undefined
                        dataSource?:
                          | {
                              apiGroup?: string | undefined
                              kind: string
                              name: string
                            }
                          | undefined
                        dataSourceRef?:
                          | {
                              apiGroup?: string | undefined
                              kind: string
                              name: string
                            }
                          | undefined
                        resources?:
                          | {
                              limits?:
                                | {
                                    [key: string]: number | string
                                  }
                                | undefined
                              requests?:
                                | {
                                    [key: string]: number | string
                                  }
                                | undefined
                            }
                          | undefined
                        selector?:
                          | {
                              matchExpressions?:
                                | {
                                    key: string
                                    operator: string
                                    values?: string[] | undefined
                                  }[]
                                | undefined
                              matchLabels?:
                                | {
                                    [key: string]: string
                                  }
                                | undefined
                            }
                          | undefined
                        storageClassName?: string | undefined
                        volumeMode?: string | undefined
                        volumeName?: string | undefined
                      }
                    }
                  | undefined
              }
            | undefined
          fc?:
            | {
                fsType?: string | undefined
                lun?: number | undefined
                readOnly?: boolean | undefined
                targetWWNs?: string[] | undefined
                wwids?: string[] | undefined
              }
            | undefined
          flexVolume?:
            | {
                driver: string
                fsType?: string | undefined
                options?:
                  | {
                      [key: string]: string
                    }
                  | undefined
                readOnly?: boolean | undefined
                secretRef?:
                  | {
                      name?: string | undefined
                    }
                  | undefined
              }
            | undefined
          flocker?:
            | {
                datasetName?: string | undefined
                datasetUUID?: string | undefined
              }
            | undefined
          gcePersistentDisk?:
            | {
                fsType?: string | undefined
                partition?: number | undefined
                pdName: string
                readOnly?: boolean | undefined
              }
            | undefined
          gitRepo?:
            | {
                directory?: string | undefined
                repository: string
                revision?: string | undefined
              }
            | undefined
          glusterfs?:
            | {
                endpoints: string
                path: string
                readOnly?: boolean | undefined
              }
            | undefined
          hostPath?:
            | {
                path: string
                type?: string | undefined
              }
            | undefined
          iscsi?:
            | {
                chapAuthDiscovery?: boolean | undefined
                chapAuthSession?: boolean | undefined
                fsType?: string | undefined
                initiatorName?: string | undefined
                iqn: string
                iscsiInterface?: string | undefined
                lun: number
                portals?: string[] | undefined
                readOnly?: boolean | undefined
                secretRef?:
                  | {
                      name?: string | undefined
                    }
                  | undefined
                targetPortal: string
              }
            | undefined
          name: string
          nfs?:
            | {
                path: string
                readOnly?: boolean | undefined
                server: string
              }
            | undefined
          persistentVolumeClaim?:
            | {
                claimName: string
                readOnly?: boolean | undefined
              }
            | undefined
          photonPersistentDisk?:
            | {
                fsType?: string | undefined
                pdID: string
              }
            | undefined
          portworxVolume?:
            | {
                fsType?: string | undefined
                readOnly?: boolean | undefined
                volumeID: string
              }
            | undefined
          projected?:
            | {
                defaultMode?: number | undefined
                sources?:
                  | {
                      configMap?:
                        | {
                            items?:
                              | {
                                  key: string
                                  mode?: number | undefined
                                  path: string
                                }[]
                              | undefined
                            name?: string | undefined
                            optional?: boolean | undefined
                          }
                        | undefined
                      downwardAPI?:
                        | {
                            items?:
                              | {
                                  fieldRef?:
                                    | {
                                        apiVersion?: string | undefined
                                        fieldPath: string
                                      }
                                    | undefined
                                  mode?: number | undefined
                                  path: string
                                  resourceFieldRef?:
                                    | {
                                        containerName?: string | undefined
                                        divisor?: (number | string) | undefined
                                        resource: string
                                      }
                                    | undefined
                                }[]
                              | undefined
                          }
                        | undefined
                      secret?:
                        | {
                            items?:
                              | {
                                  key: string
                                  mode?: number | undefined
                                  path: string
                                }[]
                              | undefined
                            name?: string | undefined
                            optional?: boolean | undefined
                          }
                        | undefined
                      serviceAccountToken?:
                        | {
                            audience?: string | undefined
                            expirationSeconds?: number | undefined
                            path: string
                          }
                        | undefined
                    }[]
                  | undefined
              }
            | undefined
          quobyte?:
            | {
                group?: string | undefined
                readOnly?: boolean | undefined
                registry: string
                tenant?: string | undefined
                user?: string | undefined
                volume: string
              }
            | undefined
          rbd?:
            | {
                fsType?: string | undefined
                image: string
                keyring?: string | undefined
                monitors: string[]
                pool?: string | undefined
                readOnly?: boolean | undefined
                secretRef?:
                  | {
                      name?: string | undefined
                    }
                  | undefined
                user?: string | undefined
              }
            | undefined
          scaleIO?:
            | {
                fsType?: string | undefined
                gateway: string
                protectionDomain?: string | undefined
                readOnly?: boolean | undefined
                secretRef: {
                  name?: string | undefined
                }
                sslEnabled?: boolean | undefined
                storageMode?: string | undefined
                storagePool?: string | undefined
                system: string
                volumeName?: string | undefined
              }
            | undefined
          secret?:
            | {
                defaultMode?: number | undefined
                items?:
                  | {
                      key: string
                      mode?: number | undefined
                      path: string
                    }[]
                  | undefined
                optional?: boolean | undefined
                secretName?: string | undefined
              }
            | undefined
          storageos?:
            | {
                fsType?: string | undefined
                readOnly?: boolean | undefined
                secretRef?:
                  | {
                      name?: string | undefined
                    }
                  | undefined
                volumeName?: string | undefined
                volumeNamespace?: string | undefined
              }
            | undefined
          vsphereVolume?:
            | {
                fsType?: string | undefined
                storagePolicyID?: string | undefined
                storagePolicyName?: string | undefined
                volumePath: string
              }
            | undefined
        }[]
      | undefined
  }
  status?:
    | {
        availableReplicas: number
        paused: boolean
        replicas: number
        unavailableReplicas: number
        updatedReplicas: number
      }
    | undefined
}
export type ComCoreosMonitoringV1ThanosRulerList = {
  apiVersion?: string | undefined
  items: ComCoreosMonitoringV1ThanosRuler[]
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ListMeta | undefined
}
