import { AuthRequest } from '@/auth/infra/request/auth.request'
import { EnvService } from '@/shared/infra/env-config/env.service'

import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly env: EnvService) {
    const publicKey = env.getJwtPublicKey()
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: Buffer.from(publicKey, 'base64'),
      algorithms: ['RS256'],
    })
  }

  async validate(payload: AuthRequest.UserPayload) {
    return AuthRequest.userPayload.parse(payload)
  }
}
