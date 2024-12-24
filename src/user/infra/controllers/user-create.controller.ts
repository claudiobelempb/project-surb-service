import { JwtGuard } from '@/auth/application/guards/jwt.guard'
import { ZodValidationPipe } from '@/shared/application/pipes/zod-validation-pipe'
import { UserResponse } from '@/user/application/response/user.response'
import { UserCreateService } from '@/user/application/services/user-create.service'
import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
  UsePipes,
} from '@nestjs/common'
import { UserRequest } from '../request/user.request'
import { UserMapper } from '../mapper/user.mapper'
import { UserEntity } from '@/user/domain/entities/user.entity'

@Controller('admin/users')
// @UseGuards(JwtGuard)
export class UserCreateController {
  constructor(private readonly userCreateService: UserCreateService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UsePipes(new ZodValidationPipe(UserRequest.create))
  async handle(@Body() body: UserRequest.Create): Promise<UserResponse.User> {
    const user = await this.userCreateService.execute(body)
    return UserMapper.toResponse(user)
  }
}
