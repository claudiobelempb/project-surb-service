import { HashProvider } from '@/shared/application/providers/hash.provider'
import { AppBadRequestException } from '@/shared/infra/exeptions/AppBadRequestException'
import { ConstantValidator } from '@/shared/utils/constants/ConstantValidator'
import { UserEntity } from '@/user/domain/entities/user.entity'
import { UserRepository } from '@/user/domain/repositories/user.repository'
import { UserType } from '@/user/types/user-type'

export class UserCreateService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly hashProvider: HashProvider,
  ) {}
  async execute(request: UserType.Request): Promise<UserType.Response> {
    const { firstName, lastName, email, password } = request
    if (!firstName || !lastName || !email || !password) {
      throw new AppBadRequestException(ConstantValidator.REQUIRED_FIELD)
    }
    await this.userRepository.emailAlreadyExists(email)
    const hashPassword = await this.hashProvider.generateHash(password)

    const entity = new UserEntity({ ...request, password: hashPassword })

    return await this.userRepository.create(entity)
  }
}
