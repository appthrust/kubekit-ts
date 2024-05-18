"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readCoreV1NamespacedServiceAccount = exports.createCoreV1NamespacedPod = void 0;
const client_1 = require("@kubekit/client");
const createCoreV1NamespacedPod = (args, options) => {
    return (0, client_1.apiClient)({
        path: `/api/v1/namespaces/${args['namespace']}/pods`,
        method: 'POST',
        body: args.body,
        contentType: args.contentType,
        params: {
            pretty: args.pretty,
            dryRun: args.dryRun,
            fieldManager: args.fieldManager,
            fieldValidation: args.fieldValidation,
        },
    }, options);
};
exports.createCoreV1NamespacedPod = createCoreV1NamespacedPod;
const readCoreV1NamespacedServiceAccount = (args, options) => {
    return (0, client_1.apiClient)({
        path: `/api/v1/namespaces/${args['namespace']}/serviceaccounts/${args.name}`,
        params: { pretty: args.pretty },
    }, options);
};
exports.readCoreV1NamespacedServiceAccount = readCoreV1NamespacedServiceAccount;
