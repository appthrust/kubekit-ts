import { OpenAPIV3 } from 'openapi-types'

export function enhanceApplyPatch(doc: OpenAPIV3.Document) {
  if (!doc.components?.schemas) {
    doc.components = { schemas: {} }
  }

  for (const path in doc.paths) {
    if (path.endsWith('/status')) {
      continue
    }
    const applyPatchRequestBody = (
      doc.paths[path]?.patch?.requestBody as OpenAPIV3.RequestBodyObject
    )?.content['application/apply-patch+yaml']

    if (!applyPatchRequestBody?.schema) {
      continue
    }
    function getKind() {
      if (
        applyPatchRequestBody.schema &&
        '$ref' in applyPatchRequestBody.schema
      ) {
        // a = "#/components/schemas/io.k8s.api.core.v1.ConfigMap"
        const a = applyPatchRequestBody.schema.$ref.split('/')
        // b = "io.k8s.api.core.v1.ConfigMap"
        const b = a[a.length - 1]
        const c = b.split('.')
        // ConfigMap
        return c[c.length - 1]
      }
    }
    const kind = getKind()
    const words = path.split('/')
    const isCore = words.length <= 7
    if (words[2] && words[3] && kind) {
      applyPatchRequestBody.schema = {
        allOf: [
          applyPatchRequestBody.schema,
          {
            type: 'object',
            properties: {
              apiVersion: {
                type: 'string',
                enum: [isCore ? words[2] : `${words[2]}/${words[3]}`],
              },
              kind: {
                type: 'string',
                ...(kind
                  ? {
                      enum: [kind],
                    }
                  : {}),
              },
            },
            required: ['apiVersion', 'kind'],
          },
        ],
      }
    } else {
      throw Error(`impossible path: ${path}`)
    }
  }

  return doc
}
