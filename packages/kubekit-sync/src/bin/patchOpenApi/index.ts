import { OpenAPIV3 } from 'openapi-types'
import { patchOp } from './op'
import { patchApplyPatch } from './applyPatch'
import { patchGvk } from './gvk'

export const patchFunctions = [
  patchOp,
  patchApplyPatch,
  patchGvk,
] satisfies Array<(doc: OpenAPIV3.Document) => OpenAPIV3.Document>
