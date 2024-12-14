import { ConfigService } from '@nestjs/config'
import { IAppEnvService } from './app-env.interface'
import { Injectable } from '@nestjs/common'

@Injectable()
export class AppEnvService implements IAppEnvService {
  constructor(private readonly configService: ConfigService) {}
  getDbType(): string | undefined {
    return this.configService.get<string>('DB_TYPE')
  }
  getDbHost(): string | undefined {
    return this.configService.get<string>('DB_HOST')
  }
  getDbPort(): number | undefined {
    return Number(this.configService.get<number>('DB_PORT'))
  }
  getDbUserName(): string | undefined {
    return this.configService.get<string>('DB_USER_NAME')
  }
  getDbPassword(): string | undefined {
    return this.configService.get<string>('DB_PASSWORD')
  }
  getDatabase(): string | undefined {
    return this.configService.get<string>('DB_DATABASE')
  }
  getDbAutoLoadEntities(): boolean | undefined {
    return this.configService.get<boolean>('DB_AUTO_LOAD_ENTITIES')
  }
  getDbSynchonize(): boolean | undefined {
    return this.configService.get<boolean>('DB_SYNCHRONIZE')
  }

  getAppPort(): number {
    return Number(this.configService.get<number>('APP_PORT', { infer: true }))
  }
  getNodeEnv(): string | undefined {
    return this.configService.get<string>('NODE_ENV')
  }
  getJwtSecret(): string | undefined {
    return this.configService.get<string>('JWT_SECRET')
  }
  getJwtExpiresInSeconds(): number | undefined {
    return Number(this.configService.get<number>('JWT_EXPIRES_IN'))
  }
}
