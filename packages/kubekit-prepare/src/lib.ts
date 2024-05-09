export type HttpMethods =
  | 'get'
  | 'put'
  | 'post'
  | 'delete'
  | 'options'
  | 'head'
  | 'patch'
  | 'trace'

export function assertNotNull<T>(
  value: T | null | undefined
): asserts value is NonNullable<T> {
  if (value === null || value === undefined) {
    throw new Error('Assertion failed: value is null or undefined')
  }
}
