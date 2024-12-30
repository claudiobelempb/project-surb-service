import { AuthRequest } from '@/auth/infra/request/auth.request'
import { UserDecoratior } from '@/user/application/decorators/user.decorator'
import { UserResponse } from '@/user/application/response/user.response'
import { UserFindAllService } from '@/user/application/services/user-findall.service'
import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common'
import { UserMapper } from '../mapper/user.mapper'

@Controller('admin/users')
// @UseGuards(JwtGuard)
export class UserFindAllController {
  constructor(private readonly userFindall: UserFindAllService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async handle(
    @UserDecoratior() user: AuthRequest.UserPayload,
  ): Promise<UserResponse.User[]> {
    const users = await this.userFindall.execute()
    return users.map(user => UserMapper.toResponse(user))
  }
}
