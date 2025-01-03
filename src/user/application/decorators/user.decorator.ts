import { AuthRequest } from '@/auth/infra/request/auth.request'
import { createParamDecorator, ExecutionContext } from '@nestjs/common'

export const UserDecoratior = createParamDecorator(
  (_: never, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest()
    return request.user as AuthRequest.UserPayload
  },
)
