import { z } from 'zod'

export namespace UserSchema {
  export const create = z.object({
    firstName: z.string().min(2),
    lastName: z.string(),
    email: z.string().email(),
    password: z.string(),
  })
  export type Create = z.infer<typeof create>
}
