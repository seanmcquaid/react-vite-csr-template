import { z } from 'zod';

const envSchema = z.object({
  VITE_APP_ENVIRONMENT: z.union([
    z.literal('dev'),
    z.literal('qa'),
    z.literal('staging'),
    z.literal('prod'),
    z.literal('cypress'),
  ]),
  VITE_APP_MSW_ENABLED: z.coerce.boolean().optional(),
  MODE: z.union([
    z.literal('development'),
    z.literal('test'),
    z.literal('production'),
  ]),
  VITE_APP_VERSION: z.string(),
});

const env = envSchema.parse(import.meta.env);

export default env;
