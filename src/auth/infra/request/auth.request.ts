import { z } from 'zod'

export namespace AuthRequest {
  export const signin = z.object({
    email: z.string().email(),
    password: z.string(),
  })

  export type Signin = z.infer<typeof signin>

  export const userPayload = z.object({
    sub: z.string().uuid(),
  })

  export type UserPayload = z.infer<typeof userPayload>
}
