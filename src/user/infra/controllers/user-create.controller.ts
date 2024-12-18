import { JwtGuard } from '@/auth/application/guards/jwt.guard'
import { ZodValidationPipe } from '@/shared/application/pipes/zod-validation-pipe'
import { UserCreateService } from '@/user/application/services/user-create.service'
import { UserEntity } from '@/user/domain/entities/user.entity'
import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
  UsePipes,
} from '@nestjs/common'
import { UserSchema } from '../schema/user.schema'

@Controller('admin/users')
@UseGuards(JwtGuard)
export class UserCreateController {
  constructor(private readonly userCreateService: UserCreateService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UsePipes(new ZodValidationPipe(UserSchema.create))
  async handle(@Body() body: UserSchema.Create): Promise<UserEntity> {
    return this.userCreateService.execute(body)
  }
}
