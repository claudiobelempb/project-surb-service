import { UserPayload } from '@/auth/application/strategies/jwt.strategy'
import { createParamDecorator, ExecutionContext } from '@nestjs/common'

export const UserDecoratior = createParamDecorator(
  (_: never, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest()
    return request.user as UserPayload
  },
)
