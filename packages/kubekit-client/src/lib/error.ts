/**
 * Sample KubernetesError object:
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
 */
export type KubernetesError = {
  kind: 'Status';
  apiVersion: string;
  metadata: Record<string, unknown>;
  status: string;
  message: string;
  reason: string;
  details: {
    causes: {
      reason: string;
      message: string;
      field: string;
    }[];
  } & (
    | {
        group: string;
        kind: string;
      }
    | {
        retryAfterSeconds: number;
      }
  );
  code: number;
};

export function isKubernetesError(obj: unknown): obj is KubernetesError {
  if (typeof obj !== 'object' || obj === null) return false;

  const error = obj as Record<string, unknown>;

  if (error.kind !== 'Status') return false;
  if (typeof error.apiVersion !== 'string') return false;
  if (typeof error.metadata !== 'object' || error.metadata === null) return false;
  if (typeof error.status !== 'string') return false;
  if (typeof error.message !== 'string') return false;
  if (typeof error.reason !== 'string') return false;
  if (typeof error.details !== 'object' || error.details === null) return false;

  const details = error.details as Record<string, unknown>;
  if (typeof details.group !== 'string') return false;
  if (typeof details.kind !== 'string') return false;
  if (!Array.isArray(details.causes)) return false;

  for (const cause of details.causes) {
    if (typeof cause !== 'object' || cause === null) return false;

    const causeObj = cause as Record<string, unknown>;
    if (typeof causeObj.reason !== 'string') return false;
    if (typeof causeObj.message !== 'string') return false;
    if (typeof causeObj.field !== 'string') return false;
  }

  if (typeof error.code !== 'number') return false;

  return true;
}

export function isTooLargeResourceVersion(err: KubernetesError) {
  return err.message.includes('Too large resource version');
}
