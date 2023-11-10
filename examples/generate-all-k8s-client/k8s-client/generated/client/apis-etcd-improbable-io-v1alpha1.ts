import { apiClient, type Options } from '../../client'
export const listEtcdImprobableIoV1Alpha1EtcdBackupForAllNamespaces = (
  args: ListEtcdImprobableIoV1Alpha1EtcdBackupForAllNamespacesApiArg,
  options?: Options
) => {
  return apiClient<ListEtcdImprobableIoV1Alpha1EtcdBackupForAllNamespacesApiResponse>(
    {
      path: `/apis/etcd.improbable.io/v1alpha1/etcdbackups`,
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
export const listEtcdImprobableIoV1Alpha1EtcdBackupScheduleForAllNamespaces = (
  args: ListEtcdImprobableIoV1Alpha1EtcdBackupScheduleForAllNamespacesApiArg,
  options?: Options
) => {
  return apiClient<ListEtcdImprobableIoV1Alpha1EtcdBackupScheduleForAllNamespacesApiResponse>(
    {
      path: `/apis/etcd.improbable.io/v1alpha1/etcdbackupschedules`,
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
export const listEtcdImprobableIoV1Alpha1EtcdClusterForAllNamespaces = (
  args: ListEtcdImprobableIoV1Alpha1EtcdClusterForAllNamespacesApiArg,
  options?: Options
) => {
  return apiClient<ListEtcdImprobableIoV1Alpha1EtcdClusterForAllNamespacesApiResponse>(
    {
      path: `/apis/etcd.improbable.io/v1alpha1/etcdclusters`,
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
export const listEtcdImprobableIoV1Alpha1EtcdPeerForAllNamespaces = (
  args: ListEtcdImprobableIoV1Alpha1EtcdPeerForAllNamespacesApiArg,
  options?: Options
) => {
  return apiClient<ListEtcdImprobableIoV1Alpha1EtcdPeerForAllNamespacesApiResponse>(
    {
      path: `/apis/etcd.improbable.io/v1alpha1/etcdpeers`,
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
export const listEtcdImprobableIoV1Alpha1EtcdRestoreForAllNamespaces = (
  args: ListEtcdImprobableIoV1Alpha1EtcdRestoreForAllNamespacesApiArg,
  options?: Options
) => {
  return apiClient<ListEtcdImprobableIoV1Alpha1EtcdRestoreForAllNamespacesApiResponse>(
    {
      path: `/apis/etcd.improbable.io/v1alpha1/etcdrestores`,
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
export const listEtcdImprobableIoV1Alpha1NamespacedEtcdBackup = (
  args: ListEtcdImprobableIoV1Alpha1NamespacedEtcdBackupApiArg,
  options?: Options
) => {
  return apiClient<ListEtcdImprobableIoV1Alpha1NamespacedEtcdBackupApiResponse>(
    {
      path: `/apis/etcd.improbable.io/v1alpha1/namespaces/${args['namespace']}/etcdbackups`,
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
export const createEtcdImprobableIoV1Alpha1NamespacedEtcdBackup = (
  args: CreateEtcdImprobableIoV1Alpha1NamespacedEtcdBackupApiArg,
  options?: Options
) => {
  return apiClient<CreateEtcdImprobableIoV1Alpha1NamespacedEtcdBackupApiResponse>(
    {
      path: `/apis/etcd.improbable.io/v1alpha1/namespaces/${args['namespace']}/etcdbackups`,
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
export const deleteEtcdImprobableIoV1Alpha1CollectionNamespacedEtcdBackup = (
  args: DeleteEtcdImprobableIoV1Alpha1CollectionNamespacedEtcdBackupApiArg,
  options?: Options
) => {
  return apiClient<DeleteEtcdImprobableIoV1Alpha1CollectionNamespacedEtcdBackupApiResponse>(
    {
      path: `/apis/etcd.improbable.io/v1alpha1/namespaces/${args['namespace']}/etcdbackups`,
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
export const readEtcdImprobableIoV1Alpha1NamespacedEtcdBackup = (
  args: ReadEtcdImprobableIoV1Alpha1NamespacedEtcdBackupApiArg,
  options?: Options
) => {
  return apiClient<ReadEtcdImprobableIoV1Alpha1NamespacedEtcdBackupApiResponse>(
    {
      path: `/apis/etcd.improbable.io/v1alpha1/namespaces/${args['namespace']}/etcdbackups/${args.name}`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceEtcdImprobableIoV1Alpha1NamespacedEtcdBackup = (
  args: ReplaceEtcdImprobableIoV1Alpha1NamespacedEtcdBackupApiArg,
  options?: Options
) => {
  return apiClient<ReplaceEtcdImprobableIoV1Alpha1NamespacedEtcdBackupApiResponse>(
    {
      path: `/apis/etcd.improbable.io/v1alpha1/namespaces/${args['namespace']}/etcdbackups/${args.name}`,
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
export const deleteEtcdImprobableIoV1Alpha1NamespacedEtcdBackup = (
  args: DeleteEtcdImprobableIoV1Alpha1NamespacedEtcdBackupApiArg,
  options?: Options
) => {
  return apiClient<DeleteEtcdImprobableIoV1Alpha1NamespacedEtcdBackupApiResponse>(
    {
      path: `/apis/etcd.improbable.io/v1alpha1/namespaces/${args['namespace']}/etcdbackups/${args.name}`,
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
export const patchEtcdImprobableIoV1Alpha1NamespacedEtcdBackup = (
  args: PatchEtcdImprobableIoV1Alpha1NamespacedEtcdBackupApiArg,
  options?: Options
) => {
  return apiClient<PatchEtcdImprobableIoV1Alpha1NamespacedEtcdBackupApiResponse>(
    {
      path: `/apis/etcd.improbable.io/v1alpha1/namespaces/${args['namespace']}/etcdbackups/${args.name}`,
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
export const readEtcdImprobableIoV1Alpha1NamespacedEtcdBackupStatus = (
  args: ReadEtcdImprobableIoV1Alpha1NamespacedEtcdBackupStatusApiArg,
  options?: Options
) => {
  return apiClient<ReadEtcdImprobableIoV1Alpha1NamespacedEtcdBackupStatusApiResponse>(
    {
      path: `/apis/etcd.improbable.io/v1alpha1/namespaces/${args['namespace']}/etcdbackups/${args.name}/status`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceEtcdImprobableIoV1Alpha1NamespacedEtcdBackupStatus = (
  args: ReplaceEtcdImprobableIoV1Alpha1NamespacedEtcdBackupStatusApiArg,
  options?: Options
) => {
  return apiClient<ReplaceEtcdImprobableIoV1Alpha1NamespacedEtcdBackupStatusApiResponse>(
    {
      path: `/apis/etcd.improbable.io/v1alpha1/namespaces/${args['namespace']}/etcdbackups/${args.name}/status`,
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
export const patchEtcdImprobableIoV1Alpha1NamespacedEtcdBackupStatus = (
  args: PatchEtcdImprobableIoV1Alpha1NamespacedEtcdBackupStatusApiArg,
  options?: Options
) => {
  return apiClient<PatchEtcdImprobableIoV1Alpha1NamespacedEtcdBackupStatusApiResponse>(
    {
      path: `/apis/etcd.improbable.io/v1alpha1/namespaces/${args['namespace']}/etcdbackups/${args.name}/status`,
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
export const listEtcdImprobableIoV1Alpha1NamespacedEtcdBackupSchedule = (
  args: ListEtcdImprobableIoV1Alpha1NamespacedEtcdBackupScheduleApiArg,
  options?: Options
) => {
  return apiClient<ListEtcdImprobableIoV1Alpha1NamespacedEtcdBackupScheduleApiResponse>(
    {
      path: `/apis/etcd.improbable.io/v1alpha1/namespaces/${args['namespace']}/etcdbackupschedules`,
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
export const createEtcdImprobableIoV1Alpha1NamespacedEtcdBackupSchedule = (
  args: CreateEtcdImprobableIoV1Alpha1NamespacedEtcdBackupScheduleApiArg,
  options?: Options
) => {
  return apiClient<CreateEtcdImprobableIoV1Alpha1NamespacedEtcdBackupScheduleApiResponse>(
    {
      path: `/apis/etcd.improbable.io/v1alpha1/namespaces/${args['namespace']}/etcdbackupschedules`,
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
export const deleteEtcdImprobableIoV1Alpha1CollectionNamespacedEtcdBackupSchedule =
  (
    args: DeleteEtcdImprobableIoV1Alpha1CollectionNamespacedEtcdBackupScheduleApiArg,
    options?: Options
  ) => {
    return apiClient<DeleteEtcdImprobableIoV1Alpha1CollectionNamespacedEtcdBackupScheduleApiResponse>(
      {
        path: `/apis/etcd.improbable.io/v1alpha1/namespaces/${args['namespace']}/etcdbackupschedules`,
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
export const readEtcdImprobableIoV1Alpha1NamespacedEtcdBackupSchedule = (
  args: ReadEtcdImprobableIoV1Alpha1NamespacedEtcdBackupScheduleApiArg,
  options?: Options
) => {
  return apiClient<ReadEtcdImprobableIoV1Alpha1NamespacedEtcdBackupScheduleApiResponse>(
    {
      path: `/apis/etcd.improbable.io/v1alpha1/namespaces/${args['namespace']}/etcdbackupschedules/${args.name}`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceEtcdImprobableIoV1Alpha1NamespacedEtcdBackupSchedule = (
  args: ReplaceEtcdImprobableIoV1Alpha1NamespacedEtcdBackupScheduleApiArg,
  options?: Options
) => {
  return apiClient<ReplaceEtcdImprobableIoV1Alpha1NamespacedEtcdBackupScheduleApiResponse>(
    {
      path: `/apis/etcd.improbable.io/v1alpha1/namespaces/${args['namespace']}/etcdbackupschedules/${args.name}`,
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
export const deleteEtcdImprobableIoV1Alpha1NamespacedEtcdBackupSchedule = (
  args: DeleteEtcdImprobableIoV1Alpha1NamespacedEtcdBackupScheduleApiArg,
  options?: Options
) => {
  return apiClient<DeleteEtcdImprobableIoV1Alpha1NamespacedEtcdBackupScheduleApiResponse>(
    {
      path: `/apis/etcd.improbable.io/v1alpha1/namespaces/${args['namespace']}/etcdbackupschedules/${args.name}`,
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
export const patchEtcdImprobableIoV1Alpha1NamespacedEtcdBackupSchedule = (
  args: PatchEtcdImprobableIoV1Alpha1NamespacedEtcdBackupScheduleApiArg,
  options?: Options
) => {
  return apiClient<PatchEtcdImprobableIoV1Alpha1NamespacedEtcdBackupScheduleApiResponse>(
    {
      path: `/apis/etcd.improbable.io/v1alpha1/namespaces/${args['namespace']}/etcdbackupschedules/${args.name}`,
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
export const listEtcdImprobableIoV1Alpha1NamespacedEtcdCluster = (
  args: ListEtcdImprobableIoV1Alpha1NamespacedEtcdClusterApiArg,
  options?: Options
) => {
  return apiClient<ListEtcdImprobableIoV1Alpha1NamespacedEtcdClusterApiResponse>(
    {
      path: `/apis/etcd.improbable.io/v1alpha1/namespaces/${args['namespace']}/etcdclusters`,
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
export const createEtcdImprobableIoV1Alpha1NamespacedEtcdCluster = (
  args: CreateEtcdImprobableIoV1Alpha1NamespacedEtcdClusterApiArg,
  options?: Options
) => {
  return apiClient<CreateEtcdImprobableIoV1Alpha1NamespacedEtcdClusterApiResponse>(
    {
      path: `/apis/etcd.improbable.io/v1alpha1/namespaces/${args['namespace']}/etcdclusters`,
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
export const deleteEtcdImprobableIoV1Alpha1CollectionNamespacedEtcdCluster = (
  args: DeleteEtcdImprobableIoV1Alpha1CollectionNamespacedEtcdClusterApiArg,
  options?: Options
) => {
  return apiClient<DeleteEtcdImprobableIoV1Alpha1CollectionNamespacedEtcdClusterApiResponse>(
    {
      path: `/apis/etcd.improbable.io/v1alpha1/namespaces/${args['namespace']}/etcdclusters`,
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
export const readEtcdImprobableIoV1Alpha1NamespacedEtcdCluster = (
  args: ReadEtcdImprobableIoV1Alpha1NamespacedEtcdClusterApiArg,
  options?: Options
) => {
  return apiClient<ReadEtcdImprobableIoV1Alpha1NamespacedEtcdClusterApiResponse>(
    {
      path: `/apis/etcd.improbable.io/v1alpha1/namespaces/${args['namespace']}/etcdclusters/${args.name}`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceEtcdImprobableIoV1Alpha1NamespacedEtcdCluster = (
  args: ReplaceEtcdImprobableIoV1Alpha1NamespacedEtcdClusterApiArg,
  options?: Options
) => {
  return apiClient<ReplaceEtcdImprobableIoV1Alpha1NamespacedEtcdClusterApiResponse>(
    {
      path: `/apis/etcd.improbable.io/v1alpha1/namespaces/${args['namespace']}/etcdclusters/${args.name}`,
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
export const deleteEtcdImprobableIoV1Alpha1NamespacedEtcdCluster = (
  args: DeleteEtcdImprobableIoV1Alpha1NamespacedEtcdClusterApiArg,
  options?: Options
) => {
  return apiClient<DeleteEtcdImprobableIoV1Alpha1NamespacedEtcdClusterApiResponse>(
    {
      path: `/apis/etcd.improbable.io/v1alpha1/namespaces/${args['namespace']}/etcdclusters/${args.name}`,
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
export const patchEtcdImprobableIoV1Alpha1NamespacedEtcdCluster = (
  args: PatchEtcdImprobableIoV1Alpha1NamespacedEtcdClusterApiArg,
  options?: Options
) => {
  return apiClient<PatchEtcdImprobableIoV1Alpha1NamespacedEtcdClusterApiResponse>(
    {
      path: `/apis/etcd.improbable.io/v1alpha1/namespaces/${args['namespace']}/etcdclusters/${args.name}`,
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
export const readEtcdImprobableIoV1Alpha1NamespacedEtcdClusterScale = (
  args: ReadEtcdImprobableIoV1Alpha1NamespacedEtcdClusterScaleApiArg,
  options?: Options
) => {
  return apiClient<ReadEtcdImprobableIoV1Alpha1NamespacedEtcdClusterScaleApiResponse>(
    {
      path: `/apis/etcd.improbable.io/v1alpha1/namespaces/${args['namespace']}/etcdclusters/${args.name}/scale`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceEtcdImprobableIoV1Alpha1NamespacedEtcdClusterScale = (
  args: ReplaceEtcdImprobableIoV1Alpha1NamespacedEtcdClusterScaleApiArg,
  options?: Options
) => {
  return apiClient<ReplaceEtcdImprobableIoV1Alpha1NamespacedEtcdClusterScaleApiResponse>(
    {
      path: `/apis/etcd.improbable.io/v1alpha1/namespaces/${args['namespace']}/etcdclusters/${args.name}/scale`,
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
export const patchEtcdImprobableIoV1Alpha1NamespacedEtcdClusterScale = (
  args: PatchEtcdImprobableIoV1Alpha1NamespacedEtcdClusterScaleApiArg,
  options?: Options
) => {
  return apiClient<PatchEtcdImprobableIoV1Alpha1NamespacedEtcdClusterScaleApiResponse>(
    {
      path: `/apis/etcd.improbable.io/v1alpha1/namespaces/${args['namespace']}/etcdclusters/${args.name}/scale`,
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
export const readEtcdImprobableIoV1Alpha1NamespacedEtcdClusterStatus = (
  args: ReadEtcdImprobableIoV1Alpha1NamespacedEtcdClusterStatusApiArg,
  options?: Options
) => {
  return apiClient<ReadEtcdImprobableIoV1Alpha1NamespacedEtcdClusterStatusApiResponse>(
    {
      path: `/apis/etcd.improbable.io/v1alpha1/namespaces/${args['namespace']}/etcdclusters/${args.name}/status`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceEtcdImprobableIoV1Alpha1NamespacedEtcdClusterStatus = (
  args: ReplaceEtcdImprobableIoV1Alpha1NamespacedEtcdClusterStatusApiArg,
  options?: Options
) => {
  return apiClient<ReplaceEtcdImprobableIoV1Alpha1NamespacedEtcdClusterStatusApiResponse>(
    {
      path: `/apis/etcd.improbable.io/v1alpha1/namespaces/${args['namespace']}/etcdclusters/${args.name}/status`,
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
export const patchEtcdImprobableIoV1Alpha1NamespacedEtcdClusterStatus = (
  args: PatchEtcdImprobableIoV1Alpha1NamespacedEtcdClusterStatusApiArg,
  options?: Options
) => {
  return apiClient<PatchEtcdImprobableIoV1Alpha1NamespacedEtcdClusterStatusApiResponse>(
    {
      path: `/apis/etcd.improbable.io/v1alpha1/namespaces/${args['namespace']}/etcdclusters/${args.name}/status`,
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
export const listEtcdImprobableIoV1Alpha1NamespacedEtcdPeer = (
  args: ListEtcdImprobableIoV1Alpha1NamespacedEtcdPeerApiArg,
  options?: Options
) => {
  return apiClient<ListEtcdImprobableIoV1Alpha1NamespacedEtcdPeerApiResponse>(
    {
      path: `/apis/etcd.improbable.io/v1alpha1/namespaces/${args['namespace']}/etcdpeers`,
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
export const createEtcdImprobableIoV1Alpha1NamespacedEtcdPeer = (
  args: CreateEtcdImprobableIoV1Alpha1NamespacedEtcdPeerApiArg,
  options?: Options
) => {
  return apiClient<CreateEtcdImprobableIoV1Alpha1NamespacedEtcdPeerApiResponse>(
    {
      path: `/apis/etcd.improbable.io/v1alpha1/namespaces/${args['namespace']}/etcdpeers`,
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
export const deleteEtcdImprobableIoV1Alpha1CollectionNamespacedEtcdPeer = (
  args: DeleteEtcdImprobableIoV1Alpha1CollectionNamespacedEtcdPeerApiArg,
  options?: Options
) => {
  return apiClient<DeleteEtcdImprobableIoV1Alpha1CollectionNamespacedEtcdPeerApiResponse>(
    {
      path: `/apis/etcd.improbable.io/v1alpha1/namespaces/${args['namespace']}/etcdpeers`,
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
export const readEtcdImprobableIoV1Alpha1NamespacedEtcdPeer = (
  args: ReadEtcdImprobableIoV1Alpha1NamespacedEtcdPeerApiArg,
  options?: Options
) => {
  return apiClient<ReadEtcdImprobableIoV1Alpha1NamespacedEtcdPeerApiResponse>(
    {
      path: `/apis/etcd.improbable.io/v1alpha1/namespaces/${args['namespace']}/etcdpeers/${args.name}`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceEtcdImprobableIoV1Alpha1NamespacedEtcdPeer = (
  args: ReplaceEtcdImprobableIoV1Alpha1NamespacedEtcdPeerApiArg,
  options?: Options
) => {
  return apiClient<ReplaceEtcdImprobableIoV1Alpha1NamespacedEtcdPeerApiResponse>(
    {
      path: `/apis/etcd.improbable.io/v1alpha1/namespaces/${args['namespace']}/etcdpeers/${args.name}`,
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
export const deleteEtcdImprobableIoV1Alpha1NamespacedEtcdPeer = (
  args: DeleteEtcdImprobableIoV1Alpha1NamespacedEtcdPeerApiArg,
  options?: Options
) => {
  return apiClient<DeleteEtcdImprobableIoV1Alpha1NamespacedEtcdPeerApiResponse>(
    {
      path: `/apis/etcd.improbable.io/v1alpha1/namespaces/${args['namespace']}/etcdpeers/${args.name}`,
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
export const patchEtcdImprobableIoV1Alpha1NamespacedEtcdPeer = (
  args: PatchEtcdImprobableIoV1Alpha1NamespacedEtcdPeerApiArg,
  options?: Options
) => {
  return apiClient<PatchEtcdImprobableIoV1Alpha1NamespacedEtcdPeerApiResponse>(
    {
      path: `/apis/etcd.improbable.io/v1alpha1/namespaces/${args['namespace']}/etcdpeers/${args.name}`,
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
export const readEtcdImprobableIoV1Alpha1NamespacedEtcdPeerStatus = (
  args: ReadEtcdImprobableIoV1Alpha1NamespacedEtcdPeerStatusApiArg,
  options?: Options
) => {
  return apiClient<ReadEtcdImprobableIoV1Alpha1NamespacedEtcdPeerStatusApiResponse>(
    {
      path: `/apis/etcd.improbable.io/v1alpha1/namespaces/${args['namespace']}/etcdpeers/${args.name}/status`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceEtcdImprobableIoV1Alpha1NamespacedEtcdPeerStatus = (
  args: ReplaceEtcdImprobableIoV1Alpha1NamespacedEtcdPeerStatusApiArg,
  options?: Options
) => {
  return apiClient<ReplaceEtcdImprobableIoV1Alpha1NamespacedEtcdPeerStatusApiResponse>(
    {
      path: `/apis/etcd.improbable.io/v1alpha1/namespaces/${args['namespace']}/etcdpeers/${args.name}/status`,
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
export const patchEtcdImprobableIoV1Alpha1NamespacedEtcdPeerStatus = (
  args: PatchEtcdImprobableIoV1Alpha1NamespacedEtcdPeerStatusApiArg,
  options?: Options
) => {
  return apiClient<PatchEtcdImprobableIoV1Alpha1NamespacedEtcdPeerStatusApiResponse>(
    {
      path: `/apis/etcd.improbable.io/v1alpha1/namespaces/${args['namespace']}/etcdpeers/${args.name}/status`,
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
export const listEtcdImprobableIoV1Alpha1NamespacedEtcdRestore = (
  args: ListEtcdImprobableIoV1Alpha1NamespacedEtcdRestoreApiArg,
  options?: Options
) => {
  return apiClient<ListEtcdImprobableIoV1Alpha1NamespacedEtcdRestoreApiResponse>(
    {
      path: `/apis/etcd.improbable.io/v1alpha1/namespaces/${args['namespace']}/etcdrestores`,
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
export const createEtcdImprobableIoV1Alpha1NamespacedEtcdRestore = (
  args: CreateEtcdImprobableIoV1Alpha1NamespacedEtcdRestoreApiArg,
  options?: Options
) => {
  return apiClient<CreateEtcdImprobableIoV1Alpha1NamespacedEtcdRestoreApiResponse>(
    {
      path: `/apis/etcd.improbable.io/v1alpha1/namespaces/${args['namespace']}/etcdrestores`,
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
export const deleteEtcdImprobableIoV1Alpha1CollectionNamespacedEtcdRestore = (
  args: DeleteEtcdImprobableIoV1Alpha1CollectionNamespacedEtcdRestoreApiArg,
  options?: Options
) => {
  return apiClient<DeleteEtcdImprobableIoV1Alpha1CollectionNamespacedEtcdRestoreApiResponse>(
    {
      path: `/apis/etcd.improbable.io/v1alpha1/namespaces/${args['namespace']}/etcdrestores`,
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
export const readEtcdImprobableIoV1Alpha1NamespacedEtcdRestore = (
  args: ReadEtcdImprobableIoV1Alpha1NamespacedEtcdRestoreApiArg,
  options?: Options
) => {
  return apiClient<ReadEtcdImprobableIoV1Alpha1NamespacedEtcdRestoreApiResponse>(
    {
      path: `/apis/etcd.improbable.io/v1alpha1/namespaces/${args['namespace']}/etcdrestores/${args.name}`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceEtcdImprobableIoV1Alpha1NamespacedEtcdRestore = (
  args: ReplaceEtcdImprobableIoV1Alpha1NamespacedEtcdRestoreApiArg,
  options?: Options
) => {
  return apiClient<ReplaceEtcdImprobableIoV1Alpha1NamespacedEtcdRestoreApiResponse>(
    {
      path: `/apis/etcd.improbable.io/v1alpha1/namespaces/${args['namespace']}/etcdrestores/${args.name}`,
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
export const deleteEtcdImprobableIoV1Alpha1NamespacedEtcdRestore = (
  args: DeleteEtcdImprobableIoV1Alpha1NamespacedEtcdRestoreApiArg,
  options?: Options
) => {
  return apiClient<DeleteEtcdImprobableIoV1Alpha1NamespacedEtcdRestoreApiResponse>(
    {
      path: `/apis/etcd.improbable.io/v1alpha1/namespaces/${args['namespace']}/etcdrestores/${args.name}`,
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
export const patchEtcdImprobableIoV1Alpha1NamespacedEtcdRestore = (
  args: PatchEtcdImprobableIoV1Alpha1NamespacedEtcdRestoreApiArg,
  options?: Options
) => {
  return apiClient<PatchEtcdImprobableIoV1Alpha1NamespacedEtcdRestoreApiResponse>(
    {
      path: `/apis/etcd.improbable.io/v1alpha1/namespaces/${args['namespace']}/etcdrestores/${args.name}`,
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
export const readEtcdImprobableIoV1Alpha1NamespacedEtcdRestoreStatus = (
  args: ReadEtcdImprobableIoV1Alpha1NamespacedEtcdRestoreStatusApiArg,
  options?: Options
) => {
  return apiClient<ReadEtcdImprobableIoV1Alpha1NamespacedEtcdRestoreStatusApiResponse>(
    {
      path: `/apis/etcd.improbable.io/v1alpha1/namespaces/${args['namespace']}/etcdrestores/${args.name}/status`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceEtcdImprobableIoV1Alpha1NamespacedEtcdRestoreStatus = (
  args: ReplaceEtcdImprobableIoV1Alpha1NamespacedEtcdRestoreStatusApiArg,
  options?: Options
) => {
  return apiClient<ReplaceEtcdImprobableIoV1Alpha1NamespacedEtcdRestoreStatusApiResponse>(
    {
      path: `/apis/etcd.improbable.io/v1alpha1/namespaces/${args['namespace']}/etcdrestores/${args.name}/status`,
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
export const patchEtcdImprobableIoV1Alpha1NamespacedEtcdRestoreStatus = (
  args: PatchEtcdImprobableIoV1Alpha1NamespacedEtcdRestoreStatusApiArg,
  options?: Options
) => {
  return apiClient<PatchEtcdImprobableIoV1Alpha1NamespacedEtcdRestoreStatusApiResponse>(
    {
      path: `/apis/etcd.improbable.io/v1alpha1/namespaces/${args['namespace']}/etcdrestores/${args.name}/status`,
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
export type ListEtcdImprobableIoV1Alpha1EtcdBackupForAllNamespacesApiResponse =
  /** status 200 OK */ IoImprobableEtcdV1Alpha1EtcdBackupList
export type ListEtcdImprobableIoV1Alpha1EtcdBackupForAllNamespacesApiArg = {
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
export type ListEtcdImprobableIoV1Alpha1EtcdBackupScheduleForAllNamespacesApiResponse =
  /** status 200 OK */ IoImprobableEtcdV1Alpha1EtcdBackupScheduleList
export type ListEtcdImprobableIoV1Alpha1EtcdBackupScheduleForAllNamespacesApiArg =
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
export type ListEtcdImprobableIoV1Alpha1EtcdClusterForAllNamespacesApiResponse =
  /** status 200 OK */ IoImprobableEtcdV1Alpha1EtcdClusterList
export type ListEtcdImprobableIoV1Alpha1EtcdClusterForAllNamespacesApiArg = {
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
export type ListEtcdImprobableIoV1Alpha1EtcdPeerForAllNamespacesApiResponse =
  /** status 200 OK */ IoImprobableEtcdV1Alpha1EtcdPeerList
export type ListEtcdImprobableIoV1Alpha1EtcdPeerForAllNamespacesApiArg = {
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
export type ListEtcdImprobableIoV1Alpha1EtcdRestoreForAllNamespacesApiResponse =
  /** status 200 OK */ IoImprobableEtcdV1Alpha1EtcdRestoreList
export type ListEtcdImprobableIoV1Alpha1EtcdRestoreForAllNamespacesApiArg = {
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
export type ListEtcdImprobableIoV1Alpha1NamespacedEtcdBackupApiResponse =
  /** status 200 OK */ IoImprobableEtcdV1Alpha1EtcdBackupList
export type ListEtcdImprobableIoV1Alpha1NamespacedEtcdBackupApiArg = {
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
export type CreateEtcdImprobableIoV1Alpha1NamespacedEtcdBackupApiResponse =
  /** status 200 OK */
  | IoImprobableEtcdV1Alpha1EtcdBackup
  | /** status 201 Created */ IoImprobableEtcdV1Alpha1EtcdBackup
  | /** status 202 Accepted */ IoImprobableEtcdV1Alpha1EtcdBackup
export type CreateEtcdImprobableIoV1Alpha1NamespacedEtcdBackupApiArg = {
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
      body: IoImprobableEtcdV1Alpha1EtcdBackup
    }
  | {
      contentType: 'application/yaml'
      body: IoImprobableEtcdV1Alpha1EtcdBackup
    }
)
export type DeleteEtcdImprobableIoV1Alpha1CollectionNamespacedEtcdBackupApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteEtcdImprobableIoV1Alpha1CollectionNamespacedEtcdBackupApiArg =
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
export type ReadEtcdImprobableIoV1Alpha1NamespacedEtcdBackupApiResponse =
  /** status 200 OK */ IoImprobableEtcdV1Alpha1EtcdBackup
export type ReadEtcdImprobableIoV1Alpha1NamespacedEtcdBackupApiArg = {
  /** name of the EtcdBackup */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceEtcdImprobableIoV1Alpha1NamespacedEtcdBackupApiResponse =
  /** status 200 OK */
  | IoImprobableEtcdV1Alpha1EtcdBackup
  | /** status 201 Created */ IoImprobableEtcdV1Alpha1EtcdBackup
export type ReplaceEtcdImprobableIoV1Alpha1NamespacedEtcdBackupApiArg = {
  /** name of the EtcdBackup */
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
      body: IoImprobableEtcdV1Alpha1EtcdBackup
    }
  | {
      contentType: 'application/yaml'
      body: IoImprobableEtcdV1Alpha1EtcdBackup
    }
)
export type DeleteEtcdImprobableIoV1Alpha1NamespacedEtcdBackupApiResponse =
  /** status 200 OK */
  | IoK8SApimachineryPkgApisMetaV1Status
  | /** status 202 Accepted */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteEtcdImprobableIoV1Alpha1NamespacedEtcdBackupApiArg = {
  /** name of the EtcdBackup */
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
export type PatchEtcdImprobableIoV1Alpha1NamespacedEtcdBackupApiResponse =
  /** status 200 OK */ IoImprobableEtcdV1Alpha1EtcdBackup
export type PatchEtcdImprobableIoV1Alpha1NamespacedEtcdBackupApiArg = {
  /** name of the EtcdBackup */
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
      body: IoImprobableEtcdV1Alpha1EtcdBackup
    }
  | {
      contentType: 'application/json-patch+json'
      body: JsonPatchOperations
    }
  | {
      contentType: 'application/merge-patch+json'
      body: IoImprobableEtcdV1Alpha1EtcdBackup
    }
)
export type ReadEtcdImprobableIoV1Alpha1NamespacedEtcdBackupStatusApiResponse =
  /** status 200 OK */ IoImprobableEtcdV1Alpha1EtcdBackup
export type ReadEtcdImprobableIoV1Alpha1NamespacedEtcdBackupStatusApiArg = {
  /** name of the EtcdBackup */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceEtcdImprobableIoV1Alpha1NamespacedEtcdBackupStatusApiResponse =
  /** status 200 OK */
  | IoImprobableEtcdV1Alpha1EtcdBackup
  | /** status 201 Created */ IoImprobableEtcdV1Alpha1EtcdBackup
export type ReplaceEtcdImprobableIoV1Alpha1NamespacedEtcdBackupStatusApiArg = {
  /** name of the EtcdBackup */
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
      body: IoImprobableEtcdV1Alpha1EtcdBackup
    }
  | {
      contentType: 'application/yaml'
      body: IoImprobableEtcdV1Alpha1EtcdBackup
    }
)
export type PatchEtcdImprobableIoV1Alpha1NamespacedEtcdBackupStatusApiResponse =
  /** status 200 OK */ IoImprobableEtcdV1Alpha1EtcdBackup
export type PatchEtcdImprobableIoV1Alpha1NamespacedEtcdBackupStatusApiArg = {
  /** name of the EtcdBackup */
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
      body: IoImprobableEtcdV1Alpha1EtcdBackup
    }
  | {
      contentType: 'application/json-patch+json'
      body: JsonPatchOperations
    }
  | {
      contentType: 'application/merge-patch+json'
      body: IoImprobableEtcdV1Alpha1EtcdBackup
    }
)
export type ListEtcdImprobableIoV1Alpha1NamespacedEtcdBackupScheduleApiResponse =
  /** status 200 OK */ IoImprobableEtcdV1Alpha1EtcdBackupScheduleList
export type ListEtcdImprobableIoV1Alpha1NamespacedEtcdBackupScheduleApiArg = {
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
export type CreateEtcdImprobableIoV1Alpha1NamespacedEtcdBackupScheduleApiResponse =
  /** status 200 OK */
  | IoImprobableEtcdV1Alpha1EtcdBackupSchedule
  | /** status 201 Created */ IoImprobableEtcdV1Alpha1EtcdBackupSchedule
  | /** status 202 Accepted */ IoImprobableEtcdV1Alpha1EtcdBackupSchedule
export type CreateEtcdImprobableIoV1Alpha1NamespacedEtcdBackupScheduleApiArg = {
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
      body: IoImprobableEtcdV1Alpha1EtcdBackupSchedule
    }
  | {
      contentType: 'application/yaml'
      body: IoImprobableEtcdV1Alpha1EtcdBackupSchedule
    }
)
export type DeleteEtcdImprobableIoV1Alpha1CollectionNamespacedEtcdBackupScheduleApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteEtcdImprobableIoV1Alpha1CollectionNamespacedEtcdBackupScheduleApiArg =
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
export type ReadEtcdImprobableIoV1Alpha1NamespacedEtcdBackupScheduleApiResponse =
  /** status 200 OK */ IoImprobableEtcdV1Alpha1EtcdBackupSchedule
export type ReadEtcdImprobableIoV1Alpha1NamespacedEtcdBackupScheduleApiArg = {
  /** name of the EtcdBackupSchedule */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceEtcdImprobableIoV1Alpha1NamespacedEtcdBackupScheduleApiResponse =
  /** status 200 OK */
  | IoImprobableEtcdV1Alpha1EtcdBackupSchedule
  | /** status 201 Created */ IoImprobableEtcdV1Alpha1EtcdBackupSchedule
export type ReplaceEtcdImprobableIoV1Alpha1NamespacedEtcdBackupScheduleApiArg =
  {
    /** name of the EtcdBackupSchedule */
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
        body: IoImprobableEtcdV1Alpha1EtcdBackupSchedule
      }
    | {
        contentType: 'application/yaml'
        body: IoImprobableEtcdV1Alpha1EtcdBackupSchedule
      }
  )
export type DeleteEtcdImprobableIoV1Alpha1NamespacedEtcdBackupScheduleApiResponse =
  /** status 200 OK */
  | IoK8SApimachineryPkgApisMetaV1Status
  | /** status 202 Accepted */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteEtcdImprobableIoV1Alpha1NamespacedEtcdBackupScheduleApiArg = {
  /** name of the EtcdBackupSchedule */
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
export type PatchEtcdImprobableIoV1Alpha1NamespacedEtcdBackupScheduleApiResponse =
  /** status 200 OK */ IoImprobableEtcdV1Alpha1EtcdBackupSchedule
export type PatchEtcdImprobableIoV1Alpha1NamespacedEtcdBackupScheduleApiArg = {
  /** name of the EtcdBackupSchedule */
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
      body: IoImprobableEtcdV1Alpha1EtcdBackupSchedule
    }
  | {
      contentType: 'application/json-patch+json'
      body: JsonPatchOperations
    }
  | {
      contentType: 'application/merge-patch+json'
      body: IoImprobableEtcdV1Alpha1EtcdBackupSchedule
    }
)
export type ListEtcdImprobableIoV1Alpha1NamespacedEtcdClusterApiResponse =
  /** status 200 OK */ IoImprobableEtcdV1Alpha1EtcdClusterList
export type ListEtcdImprobableIoV1Alpha1NamespacedEtcdClusterApiArg = {
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
export type CreateEtcdImprobableIoV1Alpha1NamespacedEtcdClusterApiResponse =
  /** status 200 OK */
  | IoImprobableEtcdV1Alpha1EtcdCluster
  | /** status 201 Created */ IoImprobableEtcdV1Alpha1EtcdCluster
  | /** status 202 Accepted */ IoImprobableEtcdV1Alpha1EtcdCluster
export type CreateEtcdImprobableIoV1Alpha1NamespacedEtcdClusterApiArg = {
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
      body: IoImprobableEtcdV1Alpha1EtcdCluster
    }
  | {
      contentType: 'application/yaml'
      body: IoImprobableEtcdV1Alpha1EtcdCluster
    }
)
export type DeleteEtcdImprobableIoV1Alpha1CollectionNamespacedEtcdClusterApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteEtcdImprobableIoV1Alpha1CollectionNamespacedEtcdClusterApiArg =
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
export type ReadEtcdImprobableIoV1Alpha1NamespacedEtcdClusterApiResponse =
  /** status 200 OK */ IoImprobableEtcdV1Alpha1EtcdCluster
export type ReadEtcdImprobableIoV1Alpha1NamespacedEtcdClusterApiArg = {
  /** name of the EtcdCluster */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceEtcdImprobableIoV1Alpha1NamespacedEtcdClusterApiResponse =
  /** status 200 OK */
  | IoImprobableEtcdV1Alpha1EtcdCluster
  | /** status 201 Created */ IoImprobableEtcdV1Alpha1EtcdCluster
export type ReplaceEtcdImprobableIoV1Alpha1NamespacedEtcdClusterApiArg = {
  /** name of the EtcdCluster */
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
      body: IoImprobableEtcdV1Alpha1EtcdCluster
    }
  | {
      contentType: 'application/yaml'
      body: IoImprobableEtcdV1Alpha1EtcdCluster
    }
)
export type DeleteEtcdImprobableIoV1Alpha1NamespacedEtcdClusterApiResponse =
  /** status 200 OK */
  | IoK8SApimachineryPkgApisMetaV1Status
  | /** status 202 Accepted */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteEtcdImprobableIoV1Alpha1NamespacedEtcdClusterApiArg = {
  /** name of the EtcdCluster */
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
export type PatchEtcdImprobableIoV1Alpha1NamespacedEtcdClusterApiResponse =
  /** status 200 OK */ IoImprobableEtcdV1Alpha1EtcdCluster
export type PatchEtcdImprobableIoV1Alpha1NamespacedEtcdClusterApiArg = {
  /** name of the EtcdCluster */
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
      body: IoImprobableEtcdV1Alpha1EtcdCluster
    }
  | {
      contentType: 'application/json-patch+json'
      body: JsonPatchOperations
    }
  | {
      contentType: 'application/merge-patch+json'
      body: IoImprobableEtcdV1Alpha1EtcdCluster
    }
)
export type ReadEtcdImprobableIoV1Alpha1NamespacedEtcdClusterScaleApiResponse =
  /** status 200 OK */ IoK8SApiAutoscalingV1Scale
export type ReadEtcdImprobableIoV1Alpha1NamespacedEtcdClusterScaleApiArg = {
  /** name of the EtcdCluster */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceEtcdImprobableIoV1Alpha1NamespacedEtcdClusterScaleApiResponse =
  /** status 200 OK */
  | IoK8SApiAutoscalingV1Scale
  | /** status 201 Created */ IoK8SApiAutoscalingV1Scale
export type ReplaceEtcdImprobableIoV1Alpha1NamespacedEtcdClusterScaleApiArg = {
  /** name of the EtcdCluster */
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
      body: IoK8SApiAutoscalingV1Scale
    }
  | {
      contentType: 'application/yaml'
      body: IoK8SApiAutoscalingV1Scale
    }
)
export type PatchEtcdImprobableIoV1Alpha1NamespacedEtcdClusterScaleApiResponse =
  /** status 200 OK */ IoK8SApiAutoscalingV1Scale
export type PatchEtcdImprobableIoV1Alpha1NamespacedEtcdClusterScaleApiArg = {
  /** name of the EtcdCluster */
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
      body: IoK8SApiAutoscalingV1Scale
    }
  | {
      contentType: 'application/json-patch+json'
      body: JsonPatchOperations
    }
  | {
      contentType: 'application/merge-patch+json'
      body: IoK8SApiAutoscalingV1Scale
    }
)
export type ReadEtcdImprobableIoV1Alpha1NamespacedEtcdClusterStatusApiResponse =
  /** status 200 OK */ IoImprobableEtcdV1Alpha1EtcdCluster
export type ReadEtcdImprobableIoV1Alpha1NamespacedEtcdClusterStatusApiArg = {
  /** name of the EtcdCluster */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceEtcdImprobableIoV1Alpha1NamespacedEtcdClusterStatusApiResponse =
  /** status 200 OK */
  | IoImprobableEtcdV1Alpha1EtcdCluster
  | /** status 201 Created */ IoImprobableEtcdV1Alpha1EtcdCluster
export type ReplaceEtcdImprobableIoV1Alpha1NamespacedEtcdClusterStatusApiArg = {
  /** name of the EtcdCluster */
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
      body: IoImprobableEtcdV1Alpha1EtcdCluster
    }
  | {
      contentType: 'application/yaml'
      body: IoImprobableEtcdV1Alpha1EtcdCluster
    }
)
export type PatchEtcdImprobableIoV1Alpha1NamespacedEtcdClusterStatusApiResponse =
  /** status 200 OK */ IoImprobableEtcdV1Alpha1EtcdCluster
export type PatchEtcdImprobableIoV1Alpha1NamespacedEtcdClusterStatusApiArg = {
  /** name of the EtcdCluster */
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
      body: IoImprobableEtcdV1Alpha1EtcdCluster
    }
  | {
      contentType: 'application/json-patch+json'
      body: JsonPatchOperations
    }
  | {
      contentType: 'application/merge-patch+json'
      body: IoImprobableEtcdV1Alpha1EtcdCluster
    }
)
export type ListEtcdImprobableIoV1Alpha1NamespacedEtcdPeerApiResponse =
  /** status 200 OK */ IoImprobableEtcdV1Alpha1EtcdPeerList
export type ListEtcdImprobableIoV1Alpha1NamespacedEtcdPeerApiArg = {
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
export type CreateEtcdImprobableIoV1Alpha1NamespacedEtcdPeerApiResponse =
  /** status 200 OK */
  | IoImprobableEtcdV1Alpha1EtcdPeer
  | /** status 201 Created */ IoImprobableEtcdV1Alpha1EtcdPeer
  | /** status 202 Accepted */ IoImprobableEtcdV1Alpha1EtcdPeer
export type CreateEtcdImprobableIoV1Alpha1NamespacedEtcdPeerApiArg = {
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
      body: IoImprobableEtcdV1Alpha1EtcdPeer
    }
  | {
      contentType: 'application/yaml'
      body: IoImprobableEtcdV1Alpha1EtcdPeer
    }
)
export type DeleteEtcdImprobableIoV1Alpha1CollectionNamespacedEtcdPeerApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteEtcdImprobableIoV1Alpha1CollectionNamespacedEtcdPeerApiArg = {
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
export type ReadEtcdImprobableIoV1Alpha1NamespacedEtcdPeerApiResponse =
  /** status 200 OK */ IoImprobableEtcdV1Alpha1EtcdPeer
export type ReadEtcdImprobableIoV1Alpha1NamespacedEtcdPeerApiArg = {
  /** name of the EtcdPeer */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceEtcdImprobableIoV1Alpha1NamespacedEtcdPeerApiResponse =
  /** status 200 OK */
  | IoImprobableEtcdV1Alpha1EtcdPeer
  | /** status 201 Created */ IoImprobableEtcdV1Alpha1EtcdPeer
export type ReplaceEtcdImprobableIoV1Alpha1NamespacedEtcdPeerApiArg = {
  /** name of the EtcdPeer */
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
      body: IoImprobableEtcdV1Alpha1EtcdPeer
    }
  | {
      contentType: 'application/yaml'
      body: IoImprobableEtcdV1Alpha1EtcdPeer
    }
)
export type DeleteEtcdImprobableIoV1Alpha1NamespacedEtcdPeerApiResponse =
  /** status 200 OK */
  | IoK8SApimachineryPkgApisMetaV1Status
  | /** status 202 Accepted */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteEtcdImprobableIoV1Alpha1NamespacedEtcdPeerApiArg = {
  /** name of the EtcdPeer */
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
export type PatchEtcdImprobableIoV1Alpha1NamespacedEtcdPeerApiResponse =
  /** status 200 OK */ IoImprobableEtcdV1Alpha1EtcdPeer
export type PatchEtcdImprobableIoV1Alpha1NamespacedEtcdPeerApiArg = {
  /** name of the EtcdPeer */
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
      body: IoImprobableEtcdV1Alpha1EtcdPeer
    }
  | {
      contentType: 'application/json-patch+json'
      body: JsonPatchOperations
    }
  | {
      contentType: 'application/merge-patch+json'
      body: IoImprobableEtcdV1Alpha1EtcdPeer
    }
)
export type ReadEtcdImprobableIoV1Alpha1NamespacedEtcdPeerStatusApiResponse =
  /** status 200 OK */ IoImprobableEtcdV1Alpha1EtcdPeer
export type ReadEtcdImprobableIoV1Alpha1NamespacedEtcdPeerStatusApiArg = {
  /** name of the EtcdPeer */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceEtcdImprobableIoV1Alpha1NamespacedEtcdPeerStatusApiResponse =
  /** status 200 OK */
  | IoImprobableEtcdV1Alpha1EtcdPeer
  | /** status 201 Created */ IoImprobableEtcdV1Alpha1EtcdPeer
export type ReplaceEtcdImprobableIoV1Alpha1NamespacedEtcdPeerStatusApiArg = {
  /** name of the EtcdPeer */
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
      body: IoImprobableEtcdV1Alpha1EtcdPeer
    }
  | {
      contentType: 'application/yaml'
      body: IoImprobableEtcdV1Alpha1EtcdPeer
    }
)
export type PatchEtcdImprobableIoV1Alpha1NamespacedEtcdPeerStatusApiResponse =
  /** status 200 OK */ IoImprobableEtcdV1Alpha1EtcdPeer
export type PatchEtcdImprobableIoV1Alpha1NamespacedEtcdPeerStatusApiArg = {
  /** name of the EtcdPeer */
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
      body: IoImprobableEtcdV1Alpha1EtcdPeer
    }
  | {
      contentType: 'application/json-patch+json'
      body: JsonPatchOperations
    }
  | {
      contentType: 'application/merge-patch+json'
      body: IoImprobableEtcdV1Alpha1EtcdPeer
    }
)
export type ListEtcdImprobableIoV1Alpha1NamespacedEtcdRestoreApiResponse =
  /** status 200 OK */ IoImprobableEtcdV1Alpha1EtcdRestoreList
export type ListEtcdImprobableIoV1Alpha1NamespacedEtcdRestoreApiArg = {
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
export type CreateEtcdImprobableIoV1Alpha1NamespacedEtcdRestoreApiResponse =
  /** status 200 OK */
  | IoImprobableEtcdV1Alpha1EtcdRestore
  | /** status 201 Created */ IoImprobableEtcdV1Alpha1EtcdRestore
  | /** status 202 Accepted */ IoImprobableEtcdV1Alpha1EtcdRestore
export type CreateEtcdImprobableIoV1Alpha1NamespacedEtcdRestoreApiArg = {
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
      body: IoImprobableEtcdV1Alpha1EtcdRestore
    }
  | {
      contentType: 'application/yaml'
      body: IoImprobableEtcdV1Alpha1EtcdRestore
    }
)
export type DeleteEtcdImprobableIoV1Alpha1CollectionNamespacedEtcdRestoreApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteEtcdImprobableIoV1Alpha1CollectionNamespacedEtcdRestoreApiArg =
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
export type ReadEtcdImprobableIoV1Alpha1NamespacedEtcdRestoreApiResponse =
  /** status 200 OK */ IoImprobableEtcdV1Alpha1EtcdRestore
export type ReadEtcdImprobableIoV1Alpha1NamespacedEtcdRestoreApiArg = {
  /** name of the EtcdRestore */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceEtcdImprobableIoV1Alpha1NamespacedEtcdRestoreApiResponse =
  /** status 200 OK */
  | IoImprobableEtcdV1Alpha1EtcdRestore
  | /** status 201 Created */ IoImprobableEtcdV1Alpha1EtcdRestore
export type ReplaceEtcdImprobableIoV1Alpha1NamespacedEtcdRestoreApiArg = {
  /** name of the EtcdRestore */
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
      body: IoImprobableEtcdV1Alpha1EtcdRestore
    }
  | {
      contentType: 'application/yaml'
      body: IoImprobableEtcdV1Alpha1EtcdRestore
    }
)
export type DeleteEtcdImprobableIoV1Alpha1NamespacedEtcdRestoreApiResponse =
  /** status 200 OK */
  | IoK8SApimachineryPkgApisMetaV1Status
  | /** status 202 Accepted */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteEtcdImprobableIoV1Alpha1NamespacedEtcdRestoreApiArg = {
  /** name of the EtcdRestore */
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
export type PatchEtcdImprobableIoV1Alpha1NamespacedEtcdRestoreApiResponse =
  /** status 200 OK */ IoImprobableEtcdV1Alpha1EtcdRestore
export type PatchEtcdImprobableIoV1Alpha1NamespacedEtcdRestoreApiArg = {
  /** name of the EtcdRestore */
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
      body: IoImprobableEtcdV1Alpha1EtcdRestore
    }
  | {
      contentType: 'application/json-patch+json'
      body: JsonPatchOperations
    }
  | {
      contentType: 'application/merge-patch+json'
      body: IoImprobableEtcdV1Alpha1EtcdRestore
    }
)
export type ReadEtcdImprobableIoV1Alpha1NamespacedEtcdRestoreStatusApiResponse =
  /** status 200 OK */ IoImprobableEtcdV1Alpha1EtcdRestore
export type ReadEtcdImprobableIoV1Alpha1NamespacedEtcdRestoreStatusApiArg = {
  /** name of the EtcdRestore */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceEtcdImprobableIoV1Alpha1NamespacedEtcdRestoreStatusApiResponse =
  /** status 200 OK */
  | IoImprobableEtcdV1Alpha1EtcdRestore
  | /** status 201 Created */ IoImprobableEtcdV1Alpha1EtcdRestore
export type ReplaceEtcdImprobableIoV1Alpha1NamespacedEtcdRestoreStatusApiArg = {
  /** name of the EtcdRestore */
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
      body: IoImprobableEtcdV1Alpha1EtcdRestore
    }
  | {
      contentType: 'application/yaml'
      body: IoImprobableEtcdV1Alpha1EtcdRestore
    }
)
export type PatchEtcdImprobableIoV1Alpha1NamespacedEtcdRestoreStatusApiResponse =
  /** status 200 OK */ IoImprobableEtcdV1Alpha1EtcdRestore
export type PatchEtcdImprobableIoV1Alpha1NamespacedEtcdRestoreStatusApiArg = {
  /** name of the EtcdRestore */
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
      body: IoImprobableEtcdV1Alpha1EtcdRestore
    }
  | {
      contentType: 'application/json-patch+json'
      body: JsonPatchOperations
    }
  | {
      contentType: 'application/merge-patch+json'
      body: IoImprobableEtcdV1Alpha1EtcdRestore
    }
)
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
export type IoImprobableEtcdV1Alpha1EtcdBackup = {
  apiVersion?: string | undefined
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ObjectMeta | undefined
  spec?:
    | {
        destination: {
          objectURLTemplate: string
        }
        source: {
          clusterURL: string
        }
      }
    | undefined
  status?:
    | {
        completionTime?: string | undefined
        phase?: string | undefined
        startTime?: string | undefined
      }
    | undefined
}
export type IoK8SApimachineryPkgApisMetaV1ListMeta = {
  continue?: string | undefined
  remainingItemCount?: number | undefined
  resourceVersion?: string | undefined
  selfLink?: string | undefined
}
export type IoImprobableEtcdV1Alpha1EtcdBackupList = {
  apiVersion?: string | undefined
  items: IoImprobableEtcdV1Alpha1EtcdBackup[]
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ListMeta | undefined
}
export type IoImprobableEtcdV1Alpha1EtcdBackupSchedule = {
  apiVersion?: string | undefined
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ObjectMeta | undefined
  spec?:
    | {
        backupTemplate: {
          destination: {
            objectURLTemplate: string
          }
          source: {
            clusterURL: string
          }
        }
        schedule: string
      }
    | undefined
  status?: object | undefined
}
export type IoImprobableEtcdV1Alpha1EtcdBackupScheduleList = {
  apiVersion?: string | undefined
  items: IoImprobableEtcdV1Alpha1EtcdBackupSchedule[]
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ListMeta | undefined
}
export type IoImprobableEtcdV1Alpha1EtcdCluster = {
  apiVersion?: string | undefined
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ObjectMeta | undefined
  spec?:
    | {
        podTemplate?:
          | {
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
                                namespaces?: string[] | undefined
                                topologyKey: string
                              }[]
                            | undefined
                        }
                      | undefined
                  }
                | undefined
              etcdEnv?:
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
              metadata?:
                | {
                    annotations?:
                      | {
                          [key: string]: string
                        }
                      | undefined
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
              tolerations?:
                | {
                    effect?: string | undefined
                    key?: string | undefined
                    operator?: string | undefined
                    tolerationSeconds?: number | undefined
                    value?: string | undefined
                  }[]
                | undefined
            }
          | undefined
        replicas: number
        storage?:
          | {
              volumeClaimTemplate?:
                | {
                    accessModes?: string[] | undefined
                    dataSource?:
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
            }
          | undefined
        tls?:
          | {
              enabled?: boolean | undefined
              storageOSClusterNamespace?: string | undefined
              storageOSEtcdSecretName?: string | undefined
            }
          | undefined
        version: string
      }
    | undefined
  status?:
    | {
        clusterVersion?: string | undefined
        members?:
          | {
              id: string
              name: string
            }[]
          | undefined
        replicas?: number | undefined
        tlsEnabled?: boolean | undefined
      }
    | undefined
}
export type IoImprobableEtcdV1Alpha1EtcdClusterList = {
  apiVersion?: string | undefined
  items: IoImprobableEtcdV1Alpha1EtcdCluster[]
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ListMeta | undefined
}
export type IoImprobableEtcdV1Alpha1EtcdPeer = {
  apiVersion?: string | undefined
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ObjectMeta | undefined
  spec?:
    | {
        bootstrap?:
          | {
              initialClusterState: 'New' | 'Existing'
              static?:
                | {
                    initialCluster?:
                      | {
                          host: string
                          name: string
                        }[]
                      | undefined
                  }
                | undefined
            }
          | undefined
        clusterName: string
        podTemplate?:
          | {
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
                                namespaces?: string[] | undefined
                                topologyKey: string
                              }[]
                            | undefined
                        }
                      | undefined
                  }
                | undefined
              etcdEnv?:
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
              metadata?:
                | {
                    annotations?:
                      | {
                          [key: string]: string
                        }
                      | undefined
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
              tolerations?:
                | {
                    effect?: string | undefined
                    key?: string | undefined
                    operator?: string | undefined
                    tolerationSeconds?: number | undefined
                    value?: string | undefined
                  }[]
                | undefined
            }
          | undefined
        storage?:
          | {
              volumeClaimTemplate?:
                | {
                    accessModes?: string[] | undefined
                    dataSource?:
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
            }
          | undefined
        tls?:
          | {
              enabled?: boolean | undefined
              storageOSClusterNamespace?: string | undefined
              storageOSEtcdSecretName?: string | undefined
            }
          | undefined
        version: string
      }
    | undefined
  status?:
    | {
        healthy?: boolean | undefined
        lastHealthy?: string | undefined
        serverVersion: string
        tlsEnabled?: boolean | undefined
      }
    | undefined
}
export type IoImprobableEtcdV1Alpha1EtcdPeerList = {
  apiVersion?: string | undefined
  items: IoImprobableEtcdV1Alpha1EtcdPeer[]
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ListMeta | undefined
}
export type IoImprobableEtcdV1Alpha1EtcdRestore = {
  apiVersion?: string | undefined
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ObjectMeta | undefined
  spec?:
    | {
        clusterTemplate: {
          clusterName: string
          spec: {
            podTemplate?:
              | {
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
                                    namespaces?: string[] | undefined
                                    topologyKey: string
                                  }[]
                                | undefined
                            }
                          | undefined
                      }
                    | undefined
                  etcdEnv?:
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
                  metadata?:
                    | {
                        annotations?:
                          | {
                              [key: string]: string
                            }
                          | undefined
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
                  tolerations?:
                    | {
                        effect?: string | undefined
                        key?: string | undefined
                        operator?: string | undefined
                        tolerationSeconds?: number | undefined
                        value?: string | undefined
                      }[]
                    | undefined
                }
              | undefined
            replicas: number
            storage?:
              | {
                  volumeClaimTemplate?:
                    | {
                        accessModes?: string[] | undefined
                        dataSource?:
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
                }
              | undefined
            tls?:
              | {
                  enabled?: boolean | undefined
                  storageOSClusterNamespace?: string | undefined
                  storageOSEtcdSecretName?: string | undefined
                }
              | undefined
            version: string
          }
        }
        source: {
          objectURL: string
        }
      }
    | undefined
  status?:
    | {
        phase?: string | undefined
      }
    | undefined
}
export type IoImprobableEtcdV1Alpha1EtcdRestoreList = {
  apiVersion?: string | undefined
  items: IoImprobableEtcdV1Alpha1EtcdRestore[]
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
