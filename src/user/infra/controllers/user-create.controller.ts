import { ZodValidationPipe } from '@/shared/infra/common/pipes/zod-validation-pipe'
import { UserCreateService } from '@/user/application/services/user-create.service'
import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UsePipes,
} from '@nestjs/common'

import { z } from 'zod'

const createUserSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  password: z.string(),
})

type CreateUserType = z.infer<typeof createUserSchema>

@Controller('admin/users')
export class UserCreateController {
  constructor(private readonly userCreateService: UserCreateService) {}
  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UsePipes(new ZodValidationPipe(createUserSchema))
  async handle(@Body() body: CreateUserType) {
    // const { firstName, lastName, email, password } = body
    this.userCreateService.execute(body)
  }
}
