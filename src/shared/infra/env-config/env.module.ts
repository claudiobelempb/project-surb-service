import { DynamicModule, Module } from '@nestjs/common'
import {
  ConfigModule,
  ConfigModuleOptions,
  ConfigService,
} from '@nestjs/config'

import { join } from 'node:path'
import { EnvService } from './env.service'
import { envValidation } from './env.validation'

@Module({
  imports: [ConfigModule],
  providers: [EnvService],
  exports: [EnvService],
})
export class EnvModule extends ConfigModule {
  static forRoot(options: ConfigModuleOptions = {}): Promise<DynamicModule> {
    return super.forRoot({
      ...options,
      validate: env => envValidation.parse(env),
      envFilePath: [
        join(__dirname, `../../../../.env.${process.env.NODE_ENV}`),
      ],
      // isGlobal: true,
      // ignoreEnvFile: true
    })
  }
}
