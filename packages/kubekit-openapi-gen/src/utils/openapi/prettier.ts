import * as prettier from 'prettier'
import * as path from 'path'

const EXTENSION_TO_PARSER: Record<string, string> = {
  ts: 'typescript',
  tsx: 'typescript',
  js: 'babylon',
  jsx: 'babylon',
  'js.flow': 'flow',
  flow: 'flow',
  gql: 'graphql',
  graphql: 'graphql',
  css: 'postcss',
  scss: 'postcss',
  less: 'postcss',
  stylus: 'postcss',
  markdown: 'markdown',
  md: 'markdown',
  json: 'json',
}

export async function prettify(
  prettierConfigFilePath: string | null,
  content: string,
  sortJson: boolean,
): Promise<string> {
  let config: prettier.Options = {}
  let parser = 'json'

  if (prettierConfigFilePath) {
    const fileExtension = path.extname(prettierConfigFilePath).slice(1)
    parser = EXTENSION_TO_PARSER[fileExtension]
    config =
      (await prettier.resolveConfig(process.cwd(), {
        useCache: true,
        editorconfig: true,
      })) || config
  }

  if (sortJson) {
    config = {
      ...config,
      plugins: ['prettier-plugin-sort-json'],
      jsonRecursiveSort: true,
    }
  }

  return prettier.format(content, {
    parser,
    ...config,
  })
}
