import { OpenAPIV3 } from 'openapi-types'

export function patchGvk(doc: OpenAPIV3.Document) {
  if (!doc.components?.schemas) {
    return doc
  }

  for (const schemaName in doc.components.schemas) {
    const words = schemaName.split('.')
    const schema = doc.components.schemas[schemaName]
    if (
      'properties' in schema &&
      schema.properties &&
      schema.properties['kind'] &&
      'type' in schema.properties['kind'] &&
      schema.properties['apiVersion'] &&
      'type' in schema.properties['apiVersion'] &&
      schema.properties['metadata']
    ) {
      if (schema.properties['items']) {
        schema.properties['kind'].enum = ['List']
        schema.properties['apiVersion'].enum = ['v1']
        schema.required = ['kind', 'apiVersion', 'metadata', 'items']
      } else if (words[words.length - 1]) {
        schema.properties['kind'].enum = [words[words.length - 1]]
        // "dev.knative.serving.v1.Service"
        // "io.k8s.api.core.v1.Pod"
        function getApiVersion() {
          if (schemaName.startsWith('io.k8s.api.core.')) {
            return words[words.length - 2]
          }

          const [first, ...center] = words
          center.pop()
          const last = center.pop()
          return `${center.join('.')}.${first}/${last}`
        }
        schema.properties['apiVersion'].enum = [getApiVersion()]
      }
    }
  }

  return doc
}
