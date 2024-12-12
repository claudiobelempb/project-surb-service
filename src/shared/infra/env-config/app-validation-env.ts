import { z } from 'zod'

export const appValidationEnvSchema = z.object({
  APP_PORT: z.coerce.number().optional().default(3333),
  NODE_ENV: z.string(),
  DATABASE_URL: z.string().url(),
  JWT_SECRET: z.string(),
  JWT_EXPIRES_IN: z.coerce.number(),
  DB_TYPE: z.string(),
  DB_HOST: z.string(),
  DB_PORT: z.coerce.number(),
  DB_USER_NAME: z.string(),
  DB_PASSWORD: z.string(),
  DB_DATABASE: z.string(),
  DB_AUTO_LOAD_ENTITIES: z.coerce.number().optional().default(1),
  DB_SYNCHRONIZE: z.coerce.number().optional().default(0),
})

export type AppValidationEnvType = z.infer<typeof appValidationEnvSchema>
