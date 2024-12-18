import { JwtGuard } from '@/auth/application/guards/jwt.guard'
import { UserPayload } from '@/auth/application/strategies/jwt.strategy'
import { UserDecoratior } from '@/user/application/decorators/user.decorator'
import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common'

@Controller('admin/users')
@UseGuards(JwtGuard)
export class UserIndexController {
  constructor() {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async handle(@UserDecoratior() user: UserPayload): Promise<any> {
    console.log(user)
  }
}
