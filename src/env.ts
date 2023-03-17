import { z } from 'zod';

const envSchema = z.object({
  VITE_APP_ENVIRONMENT: z.union([
    z.literal('dev'),
    z.literal('qa'),
    z.literal('staging'),
    z.literal('prod'),
    z.literal('cypress'),
  ]),
  VITE_APP_MSW_ENABLED: z
    .string()
    .transform(val => Boolean(val))
    .optional(),
  MODE: z.union([
    z.literal('development'),
    z.literal('test'),
    z.literal('production'),
  ]),
  PACKAGE_VERSION: z.string().min(1),
});

const env = envSchema.parse(import.meta.env);

export default env;
