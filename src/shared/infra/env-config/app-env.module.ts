import { DynamicModule, Module } from '@nestjs/common'
import { ConfigModule, ConfigModuleOptions } from '@nestjs/config'

import { join } from 'node:path'
import { AppEnvService } from './app-env.service'
import { appValidationEnvSchema } from './app-validation-env'

@Module({
  imports: [ConfigModule],
  providers: [AppEnvService],
  exports: [AppEnvService],
})
export class AppEnvModule extends ConfigModule {
  static forRoot(options: ConfigModuleOptions = {}): Promise<DynamicModule> {
    return super.forRoot({
      ...options,
      validate: env => appValidationEnvSchema.parse(env),
      envFilePath: [
        join(__dirname, `../../../../.env.${process.env.NODE_ENV}`),
      ],
      // isGlobal: true,
      // ignoreEnvFile: true
    })
  }
}
