import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { IAppEnvService } from './app-env.interface'

@Injectable()
export class AppEnvService implements IAppEnvService {
  constructor(private readonly config: ConfigService) {}
  getDbType(): string | undefined {
    return this.config.get<string>('DB_TYPE', { infer: true })
  }
  getDbUrl(): string | undefined {
    return this.config.get<string>('DATABASE_URL', { infer: true })
  }
  getDbHost(): string | undefined {
    return this.config.get<string>('DB_HOST', { infer: true })
  }
  getDbPort(): number | undefined {
    return Number(this.config.get<number>('DB_PORT', { infer: true }))
  }
  getDbUserName(): string | undefined {
    return this.config.get<string>('DB_USER_NAME', { infer: true })
  }
  getDbPassword(): string | undefined {
    return this.config.get<string>('DB_PASSWORD', { infer: true })
  }
  getDatabase(): string | undefined {
    return this.config.get<string>('DB_DATABASE', { infer: true })
  }
  getDbAutoLoadEntities(): boolean | undefined {
    return this.config.get<boolean>('DB_AUTO_LOAD_ENTITIES', { infer: true })
  }
  getDbSynchonize(): boolean | undefined {
    return this.config.get<boolean>('DB_SYNCHRONIZE', { infer: true })
  }

  getAppPort(): number {
    return Number(this.config.get<number>('APP_PORT', { infer: true }))
  }
  getNodeEnv(): string | undefined {
    return this.config.get<string>('NODE_ENV', { infer: true })
  }
  getJwtSecret(): string | undefined {
    return this.config.get<string>('JWT_SECRET', { infer: true })
  }
  getJwtExpiresInSeconds(): number | undefined {
    return Number(this.config.get<number>('JWT_EXPIRES_IN', { infer: true }))
  }
}
