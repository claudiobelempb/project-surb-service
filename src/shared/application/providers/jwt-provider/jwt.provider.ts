import { EnvService } from '@/shared/infra/env-config/env.service'
import { JwtService } from '@nestjs/jwt'
import { Injectable } from '@nestjs/common'
import { IJwtProvider } from './interfaces/jwt.interface'
import { AuthResponse } from '@/auth/application/response/auth.response'

@Injectable()
export class JwtProvider implements IJwtProvider {
  constructor(
    private readonly jwt: JwtService,
    private readonly env: EnvService,
  ) {}

  async generateJwt(userId: string): Promise<AuthResponse.JwtGenerate> {
    const accessToken = await this.jwt.signAsync({ sub: userId }, {})
    return { access_token: accessToken }
  }

  async verifyJwt(token: string): Promise<any> {
    return this.jwt.verifyAsync(token, {
      secret: this.env.getJwtSecret(),
    })
  }
}
