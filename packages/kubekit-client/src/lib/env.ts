import * as v from 'valibot';
import packageJson from '../../package.json';

export const env = {
  verboseLevel: v.parse(
    v.pipe(
      v.optional(v.string(), '0'),
      v.regex(/[0-9]/, 'must contain a number.'),
      v.transform((strNum) => Number(strNum))
    ),
    process?.env?.VERBOSE
  ),
} as const;

type Type = 'debug' | 'info' | 'warn';
type verboseLogParameters = {
  message: string;
  body: unknown;
  type: Type;
  path: string;
  level: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
};
export const verboseLog = ({ message, body, type, path, level }: verboseLogParameters) => {
  if (env.verboseLevel >= level) {
    console[type](
      JSON.stringify({
        package: packageJson.name,
        version: packageJson.version,
        timestamp: new Date(),
        type: type.toUpperCase(),
        message,
        body,
        path,
      })
    );
  }
};
