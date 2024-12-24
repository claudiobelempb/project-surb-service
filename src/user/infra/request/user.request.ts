import { ValidatorConstant } from '@/shared/infra/constants/validator.contants'
import { z } from 'zod'

export namespace UserRequest {
  export const create = z.object({
    firstName: z
      .string({ message: ValidatorConstant.INVALID })
      .min(2, { message: ValidatorConstant.MIN_LENGTH }),
    lastName: z.string({ message: ValidatorConstant.INVALID }),
    email: z
      .string({ message: ValidatorConstant.INVALID })
      .email({ message: ValidatorConstant.INVALID_EMAIL }),
    password: z.string({ message: ValidatorConstant.INVALID }),
  })
  export type Create = z.infer<typeof create>
}
