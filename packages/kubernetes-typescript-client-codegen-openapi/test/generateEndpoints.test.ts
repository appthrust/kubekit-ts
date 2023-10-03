import { resolve } from 'path';
import { generateEndpoints } from '../src';
import fs from 'fs';
import path from 'path';
import del from 'del';

const tmpDir = path.resolve(__dirname, 'tmp');

beforeAll(async () => {
  if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir, { recursive: true });
});

afterEach(() => {
  del.sync(`${tmpDir}/*.ts`);
});

test('calling without `outputFile` returns the generated api', async () => {
  const api = await generateEndpoints({
    unionUndefined: true,
    apiFile: './fixtures/emptyApi.ts',
    schemaFile: resolve(__dirname, 'fixtures/petstore.json'),
  });
  expect(api).toMatchSnapshot();
});

test('endpoint filtering', async () => {
  const api = await generateEndpoints({
    unionUndefined: true,
    apiFile: './fixtures/emptyApi.ts',
    schemaFile: resolve(__dirname, 'fixtures/petstore.json'),
    filterEndpoints: ['loginUser', /Order/],
  });
  expect(api).toMatchSnapshot('should only have endpoints loginUser, placeOrder, getOrderById, deleteOrder');
});

test('endpoint filtering by function', async () => {
  const api = await generateEndpoints({
    unionUndefined: true,
    apiFile: './fixtures/emptyApi.ts',
    schemaFile: resolve(__dirname, 'fixtures/petstore.json'),
    filterEndpoints: (name, endpoint) => name.match(/order/i) !== null && endpoint.verb === 'get',
  });
  expect(api).toMatch(/getOrderById =/);
  expect(api).not.toMatch(/placeOrder =/);
  expect(api).not.toMatch(/loginUser =/);
});

test('negated endpoint filtering', async () => {
  const api = await generateEndpoints({
    unionUndefined: true,
    apiFile: './fixtures/emptyApi.ts',
    schemaFile: resolve(__dirname, 'fixtures/petstore.json'),
    filterEndpoints: (name) => !/user/i.test(name),
  });
  expect(api).not.toMatch(/loginUser:/);
});

test('should use brackets in a querystring urls arg, when the arg contains full stops', async () => {
  const api = await generateEndpoints({
    unionUndefined: true,
    apiFile: './fixtures/emptyApi.ts',
    schemaFile: resolve(__dirname, 'fixtures/params.json'),
  });
  // eslint-disable-next-line no-template-curly-in-string
  expect(api).toContain('`/api/v1/list/${args["item.id"]}`');
  expect(api).toMatchSnapshot();
});

test('apiImport builds correct `import` statement', async () => {
  const api = await generateEndpoints({
    unionUndefined: true,
    apiFile: './fixtures/emptyApi.ts',
    schemaFile: resolve(__dirname, 'fixtures/params.json'),
    filterEndpoints: [],
    apiImport: 'myApi',
  });
  expect(api).toContain('myApi as api');
});

describe('import paths', () => {
  test('should create paths relative to `outFile` when `apiFile` is relative (different folder)', async () => {
    process.chdir(__dirname);
    await generateEndpoints({
      unionUndefined: true,
      apiFile: './fixtures/emptyApi.ts',
      outputFile: './tmp/out.ts',
      schemaFile: resolve(__dirname, 'fixtures/petstore.json'),
      filterEndpoints: [],
    });
    expect(await fs.promises.readFile('./tmp/out.ts', 'utf8')).toContain(
      "import { apiClient } from '../fixtures/emptyApi'"
    );
  });

  test('should create paths relative to `outFile` when `apiFile` is relative (same folder)', async () => {
    process.chdir(__dirname);

    await fs.promises.writeFile('./tmp/emptyApi.ts', await fs.promises.readFile('./fixtures/emptyApi.ts'));

    await generateEndpoints({
      unionUndefined: true,
      apiFile: './tmp/emptyApi.ts',
      outputFile: './tmp/out.ts',
      schemaFile: resolve(__dirname, 'fixtures/petstore.json'),
      filterEndpoints: [],
    });
    expect(await fs.promises.readFile('./tmp/out.ts', 'utf8')).toContain("import { apiClient } from './emptyApi'");
  });
});

describe('yaml parsing', () => {
  it('should parse a yaml schema from a URL', async () => {
    const result = await generateEndpoints({
      unionUndefined: true,
      apiFile: './tmp/emptyApi.ts',
      schemaFile: `https://petstore3.swagger.io/api/v3/openapi.yaml`,
    });
    expect(result).toMatchSnapshot();
  });

  it('should be able to use read a yaml file', async () => {
    const result = await generateEndpoints({
      unionUndefined: true,
      apiFile: './tmp/emptyApi.ts',
      schemaFile: `./fixtures/petstore.yaml`,
    });
    expect(result).toMatchSnapshot();
  });

  it("should generate params with non quoted keys if they don't contain special characters", async () => {
    const output = await generateEndpoints({
      unionUndefined: true,
      apiFile: './tmp/emptyApi.ts',
      schemaFile: `./fixtures/fhir.yaml`,
    });

    expect(output).toMatchSnapshot();

    expect(output).toContain('foo: args.foo,');
    expect(output).toContain('_foo: args._foo,');
    expect(output).toContain('_bar_bar: args._bar_bar,');
    expect(output).toContain('foo_bar: args.fooBar,');
    expect(output).toContain('namingConflict: args.namingConflict,');
    expect(output).toContain('naming_conflict: args.naming_conflict,');
  });

  it('should generate params with quoted keys if they contain special characters', async () => {
    const output = await generateEndpoints({
      unionUndefined: true,
      apiFile: './tmp/emptyApi.ts',
      schemaFile: `./fixtures/fhir.yaml`,
    });

    expect(output).toContain('"-bar-bar": args["-bar-bar"],');
    expect(output).toContain('"foo:bar-foo.bar/foo": args["foo:bar-foo.bar/foo"],');
  });
});

describe('tests from issues', () => {
  it('issue #2002: should be able to generate proper intersection types', async () => {
    const result = await generateEndpoints({
      apiFile: './tmp/emptyApi.ts',
      schemaFile: `./fixtures/issue-2002.json`,
    });
    expect(result).toMatchSnapshot();
  });
});
