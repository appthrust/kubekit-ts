import { OpenAPIV3 } from "openapi-types";
import { patchOp } from "./op";
import { patchRequiredFields } from "./requiredFields";

export const patchFunctions = [
  patchOp,
  patchRequiredFields,
] satisfies Array<
  (doc: OpenAPIV3.Document) => OpenAPIV3.Document
>
