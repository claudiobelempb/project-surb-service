import { JwtGuard } from '@/auth/application/guards/jwt.guard'
import { UserPayload } from '@/auth/application/strategies/jwt.strategy'
import { UserDecoratior } from '@/user/application/decorators/user.decorator'
import { UserResponse } from '@/user/application/response/user.response'
import { UserFindAllService } from '@/user/application/services/user-findall.service'
import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common'
import { UserMapper } from '../mapper/user.mapper'

@Controller('admin/users')
// @UseGuards(JwtGuard)
export class UserFindAllController {
  constructor(private readonly userFindall: UserFindAllService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async handle(
    @UserDecoratior() user: UserPayload,
  ): Promise<UserResponse.User[]> {
    const users = await this.userFindall.execute()
    return users.map(user => UserMapper.toResponse(user))
  }
}
