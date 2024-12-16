export type IAppEnvService = {
  getAppPort(): number
  getNodeEnv(): string
  getJwtSecret(): string
  getJwtExpiresInSeconds(): number
  getDbType(): string
  getDbHost(): string
  getDbUrl(): string
  getDbPort(): number
  getDbUserName(): string
  getDbPassword(): string
  getDatabase(): string
  getDbAutoLoadEntities(): boolean
  getDbSynchonize(): boolean
  geJwtPrivateKey(): string
  geJwtPublicKey(): string
}
