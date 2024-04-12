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
      schema.required = uniqueArray([
        ...schema.required || [],
        ...[
          "apiVersion",
          "kind",
          "metadata",
        ]
      ])
    }

    if ("creationTimestamp" in schema.properties && "name" in schema.properties) {
      schema.required = uniqueArray([
        ...schema.required || [],
        ...[
          "name",
        ]
      ])
      if ("namespace" in schema.properties) {
        schema.required = uniqueArray([
          ...schema.required,
          ...[
            "namespace",
          ]
        ])
      }
    }
  }

  return doc
}

function uniqueArray(array: string[]) {
  return Array.from(new Set(array));
}
