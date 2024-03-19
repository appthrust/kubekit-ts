import type { ExecException } from 'child_process';
import { exec } from 'child_process';
import * as fs from 'fs';
import path from 'path';
import del from 'del';

function strictCli(
  args: string[],
  cwd: string
): Promise<{ error: ExecException | null; stdout: string; stderr: string }> {
  const pwd = (process.env && process.env.PWD) || '.';
  const cmd = `${require.resolve('ts-node/dist/bin')} -T -P ${path.resolve(pwd, 'tsconfig.json')} ${path.resolve(
    pwd,
    'src/bin/cli.ts'
  )} ${args.join(' ')}`;
  return new Promise((resolve) => {
    exec(cmd, { cwd }, (error, stdout, stderr) => {
      resolve({
        error,
        stdout,
        stderr,
      });
    });
  });
}

function cli(args: string[], cwd: string): Promise<{ error: ExecException | null; stdout: string; stderr: string }> {
  const pwd = (process.env && process.env.PWD) || '.';
  const cmd = `${require.resolve('ts-node/dist/bin')} -T -P ${path.resolve(pwd, 'tsconfig.json')} ${path.resolve(
    pwd,
    'src/bin/cli.ts'
  )} ${args.join(' ')}`;
  return new Promise((resolve) => {
    exec(cmd, { cwd }, (error, stdout, stderr) => {
      resolve({
        error,
        stdout,
        stderr,
      });
    });
  });
}

const tmpDir = path.resolve(__dirname, 'tmp');

beforeAll(async () => {
  if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir, { recursive: true });
});

afterEach(() => {
  del.sync(`${tmpDir}/*.ts`);
});

describe('CLI options testing', () => {
  test('generation with `config.example.js`', async () => {
    const out = await strictCli([`./config.example.js`], __dirname);

    expect(out).toEqual({
      stdout: `Generating ./tmp/example.ts
Done
`,
      stderr: '',
      error: null,
    });

    expect(fs.readFileSync(path.resolve(tmpDir, 'example.ts'), 'utf-8')).toMatchSnapshot();
  }, 25000);

  test('paths are relative to configfile, not to cwd', async () => {
    const out = await strictCli([`../test/config.example.js`], path.resolve(__dirname, '../src'));

    expect(out).toEqual({
      stdout: `Generating ./tmp/example.ts
Done
`,
      stderr: '',
      error: null,
    });

    expect(fs.readFileSync(path.resolve(tmpDir, 'example.ts'), 'utf-8')).toMatchSnapshot();
  }, 25000);

  test('ts, js and json all work the same', async () => {
    await strictCli([`./config.example.js`], __dirname);
    const fromJs = fs.readFileSync(path.resolve(tmpDir, 'example.ts'), 'utf-8');
    await strictCli([`./config.example.ts`], __dirname);
    const fromTs = fs.readFileSync(path.resolve(tmpDir, 'example.ts'), 'utf-8');
    await strictCli([`./config.example.json`], __dirname);
    const fromJson = fs.readFileSync(path.resolve(tmpDir, 'example.ts'), 'utf-8');

    expect(fromTs).toEqual(fromJs);
    expect(fromJson).toEqual(fromJs);
  }, 45000);

  test("missing parameters doesn't fail", async () => {
    const out = await strictCli([`./config.invalid-example.json`], __dirname);
    expect(out.stderr).toContain("Error: path parameter petId does not seem to be defined in '/pet/{petId}'!");
  }, 25000);

  test('missing path parameters does fail', async () => {
    const out = await cli([`./config.valid-example.ts`], __dirname);
    expect(out.stderr).not.toContain("Error: path parameter petId does not seem to be defined in '/pet/{petId}'!");
  }, 25000);
});
