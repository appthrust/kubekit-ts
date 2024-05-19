export type ObjectReference = {
  name: string | undefined;
  namespace?: string | undefined;
  resourceVersion: string;
  annotations?: Record<string, string> | undefined;
  deletionTimestamp?: string | undefined;
  finalizers?: string[] | undefined;
};
