import { compare, hash } from 'bcryptjs'
import { IBcryptjs } from './interfaces/hash.interface'

export class HashProvider implements IBcryptjs {
  async generateHash(
    playload: string,
    salt?: number | string,
  ): Promise<string> {
    return hash(playload, (salt = 8))
  }
  async compareHash(playload: string, hash: string): Promise<boolean> {
    return compare(playload, hash)
  }
}
