import { AuthResponse } from '@/auth/application/response/auth.response'
import { SigninAuthService } from '@/auth/application/services/signin-auth.service'
import { ZodValidationPipe } from '@/shared/application/pipes/zod-validation-pipe'
import { Body, Controller, Post, UsePipes } from '@nestjs/common'
import { AuthRequest } from '../request/auth.request'
import { JwtProvider } from '@/shared/application/providers/jwt-provider/jwt.provider'

@Controller('signin')
export class SigninAuthController {
  constructor(
    private readonly signinAuthService: SigninAuthService,
    private readonly authProvider: JwtProvider,
  ) {}

  @Post()
  @UsePipes(new ZodValidationPipe(AuthRequest.signin))
  async handle(
    @Body() request: AuthRequest.Signin,
  ): Promise<AuthResponse.JwtGenerate | undefined> {
    const entity = await this.signinAuthService.execute(request)
    if (entity.id) {
      return await this.authProvider.generateJwt(entity.id)
    }
    return undefined
  }
}
