import { OpenAPIV3 } from 'openapi-types'
import { JSONPath } from 'jsonpath-plus'

function convertToJSONPath(path: string) {
  const parts = path
    .split('/')
    .filter((part) => part.length > 0 && part !== '#')

  let jsonPath = '$'
  parts.forEach((part) => {
    if (part.includes('.')) {
      jsonPath += `["${part}"]`
    } else {
      jsonPath += `.${part}`
    }
  })

  return jsonPath
}

function getRefs(json: any): string[] {
  return JSONPath({
    path: '$..$ref',
    json,
  })
}

export function getUsedRefs(schema: OpenAPIV3.Document<{}>) {
  let refs = new Set<string>(...getRefs(schema.paths))

  const addMany = (items: string[]) => {
    items.forEach((item) => refs.add(item))
  }

  while (true) {
    const elms = refs.size
    refs.forEach((ref) => {
      addMany(
        getRefs(
          JSONPath({
            path: convertToJSONPath(ref),
            json: schema,
          }),
        ),
      )
    })
    if (refs.size === elms) {
      break
    }
  }

  return [...refs]
}

export function cleanOpenAPISchema(
  schema: OpenAPIV3.Document<{}>,
): OpenAPIV3.Document<{}> {
  if (!schema.components?.schemas) {
    return schema
  }

  const schemas: OpenAPIV3.ComponentsObject['schemas'] = {}

  const usedRefs = getUsedRefs(schema).map((ref) =>
    ref.replace('#/components/schemas/', ''),
  )

  for (const schemaKey of usedRefs) {
    schemas[schemaKey] = schema.components.schemas[schemaKey]
  }

  return {
    ...schema,
    components: {
      schemas,
      securitySchemes: schema.components.securitySchemes,
    },
  }
}
