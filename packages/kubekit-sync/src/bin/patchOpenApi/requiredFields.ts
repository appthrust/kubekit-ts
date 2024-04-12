import type { OpenAPIV3 } from 'openapi-types'

export function patchRequiredFields(doc: OpenAPIV3.Document) {
  if (!doc.components?.schemas) {
    doc.components = { schemas: {} }
  }

  for (const schemaName in doc.components.schemas) {
    const schema = (
      doc.components.schemas[schemaName] as OpenAPIV3.SchemaObject
    )

    if (!schema.properties) {
      continue
    }
    if ("apiVersion" in schema.properties && "kind" in schema.properties&& "metadata" in schema.properties) {
      if (!schema.required) {
        schema.required = []
      }
      schema.required = uniqueArray([
        ...schema.required,
        ...[
          "apiVersion",
          "kind",
          "metadata",
        ]
      ])
    }
  }

  return doc
}

function uniqueArray(array: string[]) {
  return Array.from(new Set(array));
}
