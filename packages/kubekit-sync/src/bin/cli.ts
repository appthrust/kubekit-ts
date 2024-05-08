#!/usr/bin/env node

import util from 'util'
import * as childProcess from 'child_process'
import * as path from 'path'
import * as fs from 'fs/promises'
import { patchFunctions } from './patchOpenApi'
import { retry } from 'ts-retry-promise'
const exec = util.promisify(childProcess.exec)

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
  const res = await exec('kubectl get --raw /openapi/v3')
  const source = JSON.parse(res.stdout.toString()) as SwaggerV3

  const cwd = process.cwd()
  const outputFileDirectory = process.argv[2]

  const sourcePaths = Object.keys(source.paths)

  await Promise.all(
    sourcePaths.map(async (sourcePath) => {
      const swaggerFilePath = path.join(
        outputFileDirectory || cwd,
        'openapi',
        sourcePath,
        'swagger.json'
      )

      try {
        await retry(() => exec(`mkdir -p ${path.dirname(swaggerFilePath)}`), {
          retries: 5,
        })

        const res = await retry(
          () =>
            exec(`kubectl get --raw /openapi/v3/${sourcePath}`, {
              maxBuffer: 1024 * 1024 * 10,
            }),
          { retries: 5 }
        )
        let doc = JSON.parse(res.stdout.toString())

        for (const patchFunction of patchFunctions) {
          doc = patchFunction(doc)
        }

        await fs.writeFile(swaggerFilePath, JSON.stringify(doc, undefined, 2))
        console.debug(`Success Wrote File to ${swaggerFilePath}`)
      } catch (e) {
        console.error(`Failed to write file: ${swaggerFilePath}`, e)
      }
    })
  )
}

main()
