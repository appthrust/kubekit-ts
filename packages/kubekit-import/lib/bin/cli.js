#!/usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const path = __importStar(require("path"));
const fs = __importStar(require("fs"));
const patchOpenApi_1 = require("./patchOpenApi");
async function main() {
    const res = (0, child_process_1.execSync)('kubectl get --raw /openapi/v3');
    const source = JSON.parse(res.toString());
    const cwd = process.cwd();
    const outputFileDirectory = process.argv[2];
    const sourcePaths = Object.keys(source.paths);
    for (let i = 0; i < sourcePaths.length; i++) {
        const sourcePath = sourcePaths[i];
        const swaggerFilePath = path.join(outputFileDirectory || cwd, 'openapi', sourcePath, 'swagger.json');
        try {
            (0, child_process_1.execSync)(`mkdir -p ${path.dirname(swaggerFilePath)}`);
            const res = (0, child_process_1.execSync)(`kubectl get --raw /openapi/v3/${sourcePath}`, { maxBuffer: 1024 * 1024 * 10 });
            let doc = JSON.parse(res.toString());
            for (const patchFunction of patchOpenApi_1.patchFunctions) {
                doc = patchFunction(doc);
            }
            fs.writeFileSync(swaggerFilePath, JSON.stringify(doc, undefined, 2));
            console.debug(`Success Wrote File to ${swaggerFilePath}`);
        }
        catch (e) {
            console.error(`Failed to write file: ${swaggerFilePath}`, e);
        }
    }
}
main();
//# sourceMappingURL=cli.js.map