import { AppEnvModule } from '@/shared/infra/env-config/app-env.module'
import { AppEnvService } from '@/shared/infra/env-config/app-env.service'
import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { AuthService } from '../application/services/auth.service'
import { AuthController } from './controlllers/auth.controller'

@Module({
  imports: [
    AppEnvModule,
    PassportModule,
    JwtModule.registerAsync({
      imports: [AppEnvModule],
      inject: [AppEnvService],
      useFactory(env: AppEnvService) {
        return {
          privateKey: Buffer.from(env.geJwtPrivateKey(), 'base64'),
          publicKey: Buffer.from(env.geJwtPublicKey(), 'base64'),
          signOptions: {
            algorithm: 'RS256',
            expiresIn: env.getJwtExpiresInSeconds(),
          },
        }
      },
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
