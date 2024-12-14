import { AppEnvService } from '@/shared/infra/env-config/app-env.service'
import {
  appValidationEnvSchema,
  AppValidationEnvType,
} from '@/shared/infra/env-config/app-validation-env'
import { Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory(config: ConfigService<AppValidationEnvType, true>) {
        console.log(config.get('JWT_SECRET', { infer: true }))
        return {}
      },
    }),
  ],
  providers: [],
  controllers: [],
})
export class AuthModule {}
