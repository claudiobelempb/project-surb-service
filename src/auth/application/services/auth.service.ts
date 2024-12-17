import { AppEnvService } from '@/shared/infra/env-config/app-env.service'
import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

export type GenerateJwtProps = {
  access_token: string
}

@Injectable()
export class AuthService {
  constructor(
    private readonly jwt: JwtService,
    private readonly env: AppEnvService,
  ) {}

  async generateJwt(userId: string): Promise<GenerateJwtProps> {
    const accessToken = await this.jwt.signAsync({ sub: userId }, {})
    return { access_token: accessToken }
  }

  async verifyJwt(token: string) {
    return this.jwt.verifyAsync(token, {
      secret: this.env.getJwtSecret(),
    })
  }
}
