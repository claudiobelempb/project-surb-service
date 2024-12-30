export interface IJwtProvider {
  generateJwt(userId: string): Promise<unknown>
  verifyJwt(token: string): Promise<unknown>
}
