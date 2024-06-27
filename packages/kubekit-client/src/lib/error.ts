import * as v from 'valibot';

/**
 * Sample Status object:
 * {
 *   "kind": "Status",
 *   "apiVersion": "v1",
 *   "metadata": {},
 *   "status": "Failure",
 *   "message": "ListOptions.meta.k8s.io \"\" is invalid: sendInitialEvents: Forbidden: sendInitialEvents is forbidden for watch unless the WatchList feature gate is enabled",
 *   "reason": "Invalid",
 *   "details": {
 *     "group": "meta.k8s.io",
 *     "kind": "ListOptions",
 *     "causes": [
 *       {
 *         "reason": "FieldValueForbidden",
 *         "message": "Forbidden: sendInitialEvents is forbidden for watch unless the WatchList feature gate is enabled",
 *         "field": "sendInitialEvents"
 *       }
 *     ]
 *   },
 *   "code": 422
 * }
 *
 * {
 *   kind: 'Status',
 *   apiVersion: 'v1',
 *   metadata: {},
 *   status: 'Failure',
 *   message: 'secrets "pj-01j0qhebjej5xrdcrqhwrvgbdt-repo" already exists',
 *   reason: 'AlreadyExists',
 *   details: { name: 'pj-01j0qhebjej5xrdcrqhwrvgbdt-repo', kind: 'secrets' },
 *   code: 409
 * }
 */
export const StatusSchema = v.looseObject({
  kind: v.literal('Status'),
  apiVersion: v.literal('v1'),
  metadata: v.optional(
    v.looseObject({
      resourceVersion: v.optional(v.string()),
      continue: v.optional(v.string()),
    })
  ),
  status: v.optional(v.union([v.literal('Success'), v.literal('Failure')])),
  message: v.optional(v.string()),
  reason: v.optional(
    v.union([
      v.literal('Unknown'),
      v.literal('Unauthorized'),
      v.literal('Forbidden'),
      v.literal('NotFound'),
      v.literal('AlreadyExists'),
      v.literal('Conflict'),
      v.literal('Gone'),
      v.literal('Invalid'),
      v.literal('ServerTimeout'),
      v.literal('NotAcceptable'),
    ])
  ),
  details: v.optional(
    v.looseObject({
      name: v.optional(v.string()),
      group: v.optional(v.string()),
      kind: v.optional(v.string()),
      uid: v.optional(v.string()),
      causes: v.optional(
        v.array(
          v.looseObject({
            type: v.optional(v.string()),
            message: v.optional(v.string()),
            field: v.optional(v.string()),
          })
        )
      ),
      retryAfterSeconds: v.optional(v.number()),
    })
  ),
  code: v.optional(v.number()),
});

export const ErrorWatchObjectSchema = v.looseObject({
  type: v.union([v.literal('ERROR')]),
  object: StatusSchema,
});

export type KubernetesStatus = v.InferInput<typeof StatusSchema>;

export function isTooLargeResourceVersionKubernetesStatus(status: KubernetesStatus) {
  return status.message?.includes('Too large resource version');
}

export function isAlreadyExistsKubernetesStatus(err: KubernetesStatus) {
  return err.reason === 'AlreadyExists';
}

export function isTooLargeResourceVersion(err: unknown) {
  const result = v.safeParse(StatusSchema, err);
  return result.success && isTooLargeResourceVersionKubernetesStatus(result.output);
}

export function isAlreadyExists(err: unknown) {
  const result = v.safeParse(StatusSchema, err);
  return result.success && isAlreadyExistsKubernetesStatus(result.output);
}
