#!/usr/bin/env node

import { execSync } from 'child_process'
import * as path from 'path'
import * as fs from 'fs'
import { patchFunctions } from './patchOpenApi'

type Path = string
type Url = string

type SwaggerV3 = {
  paths: Record<
    Path,
    {
      serverRelativeURL: Url
    }
  >
}

async function main() {
  const res = execSync('kubectl get --raw /openapi/v3')
  const source = JSON.parse(res.toString()) as SwaggerV3

  const cwd = process.cwd()
  const outputFileDirectory = process.argv[2]

  const sourcePaths = Object.keys(source.paths)
  for (let i = 0; i < sourcePaths.length; i++) {
    const sourcePath = sourcePaths[i]
    const swaggerFilePath = path.join(
      outputFileDirectory || cwd,
      'openapi',
      sourcePath,
      'swagger.json',
    )

    try {
      execSync(`mkdir -p ${path.dirname(swaggerFilePath)}`)

      const res = execSync(`kubectl get --raw /openapi/v3/${sourcePath}`, {
        maxBuffer: 1024 * 1024 * 10,
      })
      let doc = JSON.parse(res.toString())

      for (const patchFunction of patchFunctions) {
        doc = patchFunction(doc)
      }

      fs.writeFileSync(swaggerFilePath, JSON.stringify(doc, undefined, 2))
      console.debug(`Success Wrote File to ${swaggerFilePath}`)
    } catch (e) {
      console.error(`Failed to write file: ${swaggerFilePath}`, e)
    }
  }
}

main()
