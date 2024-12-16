export type IAppEnvService = {
  getAppPort(): number | undefined
  getNodeEnv(): string | undefined
  getJwtSecret(): string | undefined
  getJwtExpiresInSeconds(): number | undefined
  getDbType(): string | undefined
  getDbHost(): string | undefined
  getDbUrl(): string | undefined
  getDbPort(): number | undefined
  getDbUserName(): string | undefined
  getDbPassword(): string | undefined
  getDatabase(): string | undefined
  getDbAutoLoadEntities(): boolean | undefined
  getDbSynchonize(): boolean | undefined
}
