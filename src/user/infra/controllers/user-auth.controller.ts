import {
  AuthService,
  GenerateJwtProps,
} from '@/auth/application/services/auth.service'
import { ZodValidationPipe } from '@/shared/utils/pipes/zod-validation-pipe'
import { UserAuthService } from '@/user/application/services/user-auth.service'
import { UserEntity } from '@/user/domain/entities/user.entity'
import { Body, Controller, Post, UsePipes } from '@nestjs/common'
import { z } from 'zod'

const authBodySchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

export type AuthBodySchema = z.infer<typeof authBodySchema>

@Controller('sessions')
export class UserAuthController {
  constructor(
    private readonly userAuthService: UserAuthService,
    private readonly authService: AuthService,
  ) {}

  @Post()
  @UsePipes(new ZodValidationPipe(authBodySchema))
  async handle(
    @Body() body: AuthBodySchema,
  ): Promise<GenerateJwtProps | undefined> {
    const entity = await this.userAuthService.execute(body)
    if (entity.id) {
      return await this.authService.generateJwt(entity.id)
    }
  }
}
