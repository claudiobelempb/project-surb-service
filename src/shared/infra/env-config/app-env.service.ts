import { ConfigService } from '@nestjs/config'
import { IAppEnvService } from './app-env.interface'
import { Injectable } from '@nestjs/common'

@Injectable()
export class AppEnvService implements IAppEnvService {
  constructor(private readonly configService: ConfigService) {}
  getDbType(): string {
    return this.configService.get<string>('DB_TYPE')
  }
  getDbHost(): string {
    return this.configService.get<string>('DB_HOST')
  }
  getDbPort(): number {
    return Number(this.configService.get<number>('DB_PORT'))
  }
  getDbUserName(): string {
    return this.configService.get<string>('DB_USER_NAME')
  }
  getDbPassword(): string {
    return this.configService.get<string>('DB_PASSWORD')
  }
  getDatabase(): string {
    return this.configService.get<string>('DB_DATABASE')
  }
  getDbAutoLoadEntities(): boolean {
    return this.configService.get<boolean>('DB_AUTO_LOAD_ENTITIES')
  }
  getDbSynchonize(): boolean {
    return this.configService.get<boolean>('DB_SYNCHRONIZE')
  }

  getAppPort(): number {
    return Number(this.configService.get<number>('APP_PORT', { infer: true }))
  }
  getNodeEnv(): string {
    return this.configService.get<string>('NODE_ENV')
  }
  getJwtSecret(): string {
    return this.configService.get<string>('JWT_SECRET')
  }
  getJwtExpiresInSeconds(): number {
    return Number(this.configService.get<number>('JWT_EXPIRES_IN'))
  }
}
