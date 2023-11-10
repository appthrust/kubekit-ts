import { OpenAPIV3 } from 'npm:openapi-types'

function patchK8sOpenapi(doc: OpenAPIV3.Document) {
  if (!doc.components?.schemas) {
    doc.components = { schemas: {} }
  }
  let hasJsonPatch = false

  for (const path in doc.paths) {
    const putContent = (
      doc.paths[path]?.put?.requestBody as OpenAPIV3.RequestBodyObject
    )?.content
    const putRequestBody =
      putContent?.['*/*'] ||
      putContent?.['application/json'] ||
      putContent?.['application/yaml']
    if (!putRequestBody) {
      continue
    }
    const applyPatchRequestBody = (
      doc.paths[path]?.patch?.requestBody as OpenAPIV3.RequestBodyObject
    )?.content['application/apply-patch+yaml']

    if (applyPatchRequestBody) {
      applyPatchRequestBody.schema = putRequestBody.schema
    }

    const strategicMergePatchRequestBody = (
      doc.paths[path]?.patch?.requestBody as OpenAPIV3.RequestBodyObject
    )?.content['application/strategic-merge-patch+json']
    if (strategicMergePatchRequestBody) {
      strategicMergePatchRequestBody.schema = putRequestBody.schema
    }

    const mergePatchRequestBody = (
      doc.paths[path]?.patch?.requestBody as OpenAPIV3.RequestBodyObject
    )?.content['application/merge-patch+json']
    if (mergePatchRequestBody) {
      mergePatchRequestBody.schema = putRequestBody.schema
    }

    const jsonPatchRequestBody = (
      doc.paths[path]?.patch?.requestBody as OpenAPIV3.RequestBodyObject
    )?.content['application/json-patch+json']
    if (jsonPatchRequestBody) {
      jsonPatchRequestBody.schema = {
        $ref: '#/components/schemas/JsonPatchOperations',
      }
      hasJsonPatch = true
    }
  }

  if (hasJsonPatch) {
    if (doc.components.schemas) {
      const value = {
        oneOf: [
          {
            type: 'string',
          },
          {
            type: 'number',
          },
          {
            type: 'boolean',
          },
          {
            type: 'array',
          },
          {
            type: 'object',
          },
        ],
      }

      doc.components.schemas['JsonPatchOperation'] = {
        type: 'object',
        oneOf: [
          {
            $ref: '#/components/schemas/AddOperation',
          },
          {
            $ref: '#/components/schemas/RemoveOperation',
          },
          {
            $ref: '#/components/schemas/ReplaceOperation',
          },
          {
            $ref: '#/components/schemas/MoveOperation',
          },
          {
            $ref: '#/components/schemas/CopyOperation',
          },
          {
            $ref: '#/components/schemas/TestOperation',
          },
        ],
      }
      doc.components.schemas['AddOperation'] = {
        type: 'object',
        required: ['op', 'path', 'value'],
        properties: {
          op: {
            type: 'string',
            enum: ['add'],
          },
          path: {
            type: 'string',
          },
          value: value,
        },
      }
      doc.components.schemas['RemoveOperation'] = {
        type: 'object',
        required: ['op', 'path'],
        properties: {
          op: {
            type: 'string',
            enum: ['remove'],
          },
          path: {
            type: 'string',
          },
        },
      }
      doc.components.schemas['ReplaceOperation'] = {
        type: 'object',
        required: ['op', 'path', 'value'],
        properties: {
          op: {
            type: 'string',
            enum: ['replace'],
          },
          path: {
            type: 'string',
          },
          value: value,
        },
      }
      doc.components.schemas['MoveOperation'] = {
        type: 'object',
        required: ['op', 'path', 'from'],
        properties: {
          op: {
            type: 'string',
            enum: ['move'],
          },
          path: {
            type: 'string',
          },
          from: {
            type: 'string',
          },
        },
      }
      doc.components.schemas['CopyOperation'] = {
        type: 'object',
        required: ['op', 'path', 'from'],
        properties: {
          op: {
            type: 'string',
            enum: ['copy'],
          },
          path: {
            type: 'string',
          },
          from: {
            type: 'string',
          },
        },
      }
      doc.components.schemas['TestOperation'] = {
        type: 'object',
        required: ['op', 'path', 'value'],
        properties: {
          op: {
            type: 'string',
            enum: ['test'],
          },
          path: {
            type: 'string',
          },
          value: value,
        },
      }
      doc.components.schemas['JsonPatchOperations'] = {
        type: 'array',
        items: {
          $ref: '#/components/schemas/JsonPatchOperation',
        },
      }
    }
  }

  return doc
}

export const patchFunctions = [patchK8sOpenapi] satisfies Array<
  (doc: OpenAPIV3.Document) => OpenAPIV3.Document
>
