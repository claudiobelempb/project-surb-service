export interface IBcryptjs {
  generateHash(playload: string): Promise<string>
  compareHash(playload: string, hash: string): Promise<boolean>
}
