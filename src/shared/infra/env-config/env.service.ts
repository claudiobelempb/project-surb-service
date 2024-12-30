import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { IEnvService } from './env.interface'

@Injectable()
export class EnvService implements IEnvService {
  constructor(private readonly config: ConfigService) {}
  getJwtPrivateKey(): string {
    return this.config.get<string>('JWT_PRIVATE_KEY', {
      infer: true,
    }) as string
  }
  getJwtPublicKey(): string {
    return this.config.get<string>('JWT_PUBLIC_KEY', {
      infer: true,
    }) as string
  }
  getDbType(): string {
    return this.config.get<string>('DB_TYPE', { infer: true }) as string
  }
  getDbUrl(): string {
    return this.config.get<string>('DATABASE_URL', { infer: true }) as string
  }
  getDbHost(): string {
    return this.config.get<string>('DB_HOST', { infer: true }) as string
  }
  getDbPort(): number {
    return Number(this.config.get<number>('DB_PORT', { infer: true })) as number
  }
  getDbUserName(): string {
    return this.config.get<string>('DB_USER_NAME', { infer: true }) as string
  }
  getDbPassword(): string {
    return this.config.get<string>('DB_PASSWORD', { infer: true }) as string
  }
  getDatabase(): string {
    return this.config.get<string>('DB_DATABASE', { infer: true }) as string
  }
  getDbAutoLoadEntities(): boolean {
    return this.config.get<boolean>('DB_AUTO_LOAD_ENTITIES', {
      infer: true,
    }) as boolean
  }
  getDbSynchonize(): boolean {
    return this.config.get<boolean>('DB_SYNCHRONIZE', {
      infer: true,
    }) as boolean
  }

  getAppPort(): number {
    return Number(
      this.config.get<number>('APP_PORT', { infer: true }),
    ) as number
  }
  getNodeEnv(): string {
    return this.config.get<string>('NODE_ENV', { infer: true }) as string
  }
  getJwtSecret(): string {
    return this.config.get<string>('JWT_SECRET', { infer: true }) as string
  }
  getJwtExpiresInSeconds(): number {
    return Number(
      this.config.get<number>('JWT_EXPIRES_IN', { infer: true }),
    ) as number
  }
}
