import { HashProvider } from '@/shared/application/providers/hash.provider'
import { AppBadRequestException } from '@/shared/infra/exeptions/AppBadRequestException'
import { UserEntity } from '@/user/domain/entities/user.entity'
import { UserPrismaRepository } from '@/user/domain/repositories/user.repository'

export class UserCreateService {
  constructor(
    private readonly userRepository: UserPrismaRepository,
    private readonly hashProvider: HashProvider,
  ) {}
  async execute(body: any): Promise<any> {
    const { firstName, lastName, email, password } = body
    if (!firstName || !lastName || !email || !password) {
      throw new AppBadRequestException('Input data not provided')
    }
    await this.userRepository.userWithSameEmail(email)
    const hashPassword = await this.hashProvider.generateHash(password)

    return this.userRepository.create({
      firstName,
      lastName,
      email,
      password: hashPassword,
    })
  }
}
