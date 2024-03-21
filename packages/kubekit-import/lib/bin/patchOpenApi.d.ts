import type { OpenAPIV3 } from 'openapi-types';
declare function patchK8sOpenapi(doc: OpenAPIV3.Document): OpenAPIV3.Document<{}>;
export declare const patchFunctions: (typeof patchK8sOpenapi)[];
export {};
