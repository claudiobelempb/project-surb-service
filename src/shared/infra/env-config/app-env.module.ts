import { DynamicModule, Module } from '@nestjs/common'
import {
  ConfigModule,
  ConfigModuleOptions,
  ConfigService,
} from '@nestjs/config'

import { join } from 'node:path'
import { appValidationEnvSchema } from './app-validation-env'

@Module({
  imports: [ConfigModule],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class AppEnvModule extends ConfigModule {
  static forRoot(options: ConfigModuleOptions = {}): Promise<DynamicModule> {
    return super.forRoot({
      ...options,
      validate: env => appValidationEnvSchema.parse(env),
      envFilePath: [
        join(__dirname, `../../../../.env.${process.env.NODE_ENV}`),
      ],
      isGlobal: true,
      // ignoreEnvFile: true
    })
  }
}
