export type IEnvService = {
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
  getJwtPrivateKey(): string
  getJwtPublicKey(): string
}
