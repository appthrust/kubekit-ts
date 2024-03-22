"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchFunctions = void 0;
function patchK8sOpenapi(doc) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
    if (!((_a = doc.components) === null || _a === void 0 ? void 0 : _a.schemas)) {
        doc.components = { schemas: {} };
    }
    let hasJsonPatch = false;
    for (const path in doc.paths) {
        const putContent = (_d = (_c = (_b = doc.paths[path]) === null || _b === void 0 ? void 0 : _b.put) === null || _c === void 0 ? void 0 : _c.requestBody) === null || _d === void 0 ? void 0 : _d.content;
        const putRequestBody = (putContent === null || putContent === void 0 ? void 0 : putContent['*/*']) ||
            (putContent === null || putContent === void 0 ? void 0 : putContent['application/json']) ||
            (putContent === null || putContent === void 0 ? void 0 : putContent['application/yaml']);
        if (!putRequestBody) {
            continue;
        }
        const applyPatchRequestBody = (_g = (_f = (_e = doc.paths[path]) === null || _e === void 0 ? void 0 : _e.patch) === null || _f === void 0 ? void 0 : _f.requestBody) === null || _g === void 0 ? void 0 : _g.content['application/apply-patch+yaml'];
        if (applyPatchRequestBody) {
            applyPatchRequestBody.schema = putRequestBody.schema;
        }
        const strategicMergePatchRequestBody = (_k = (_j = (_h = doc.paths[path]) === null || _h === void 0 ? void 0 : _h.patch) === null || _j === void 0 ? void 0 : _j.requestBody) === null || _k === void 0 ? void 0 : _k.content['application/strategic-merge-patch+json'];
        if (strategicMergePatchRequestBody) {
            strategicMergePatchRequestBody.schema = putRequestBody.schema;
        }
        const mergePatchRequestBody = (_o = (_m = (_l = doc.paths[path]) === null || _l === void 0 ? void 0 : _l.patch) === null || _m === void 0 ? void 0 : _m.requestBody) === null || _o === void 0 ? void 0 : _o.content['application/merge-patch+json'];
        if (mergePatchRequestBody) {
            mergePatchRequestBody.schema = putRequestBody.schema;
        }
        const jsonPatchRequestBody = (_r = (_q = (_p = doc.paths[path]) === null || _p === void 0 ? void 0 : _p.patch) === null || _q === void 0 ? void 0 : _q.requestBody) === null || _r === void 0 ? void 0 : _r.content['application/json-patch+json'];
        if (jsonPatchRequestBody) {
            jsonPatchRequestBody.schema = {
                $ref: '#/components/schemas/JsonPatchOperations',
            };
            hasJsonPatch = true;
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
            };
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
            };
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
            };
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
            };
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
            };
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
            };
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
            };
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
            };
            doc.components.schemas['JsonPatchOperations'] = {
                type: 'array',
                items: {
                    $ref: '#/components/schemas/JsonPatchOperation',
                },
            };
        }
    }
    return doc;
}
exports.patchFunctions = [patchK8sOpenapi];
//# sourceMappingURL=patchOpenApi.js.map