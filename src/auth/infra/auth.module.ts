import { AppEnvService } from '@/shared/infra/env-config/app-env.service'
import {
  appValidationEnvSchema,
  AppValidationEnvType,
} from '@/shared/infra/env-config/app-validation-env'
import { Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { AuthService } from '../application/services/auth.service'
import { AppEnvModule } from '@/shared/infra/env-config/app-env.module'

@Module({
  imports: [
    AppEnvModule,
    PassportModule,
    JwtModule.registerAsync({
      imports: [AppEnvModule],
      inject: [AppEnvService],
      useFactory(config: AppEnvService) {
        const secret = config.getJwtSecret()
        return {
          secret,
        }
      },
    }),
  ],
  providers: [AuthService],
  controllers: [],
})
export class AuthModule {}
