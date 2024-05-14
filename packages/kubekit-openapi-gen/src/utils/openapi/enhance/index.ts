import { OpenAPIV3 } from 'openapi-types'
import { enhanceOp } from './op'
import { enhanceApplyPatch } from './applyPatch'
import { enhanceGvk } from './gvk'

export const enhancementFunctions = [
  enhanceOp,
  enhanceApplyPatch,
  enhanceGvk,
] satisfies Array<(doc: OpenAPIV3.Document) => OpenAPIV3.Document>
