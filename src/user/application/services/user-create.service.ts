import { AppConflictException } from '@/shared/domain/exceptions/AppConflictException'
import { AppBadRequestException } from '@/shared/infra/exeptions/AppBadRequestException'
import { ConstantException } from '@/shared/utils/constants/ConstantException'
import { ValidatorConstant } from '@/shared/infra/constants/validator.contants'
import { UserEntity } from '@/user/domain/entities/user.entity'
import { UserRepository } from '@/user/domain/repositories/user.repository'
import { UserRequest } from '@/user/infra/request/user.request'
import { HashProvider } from '@/shared/application/providers/hash-provider/hash.provider'

export class UserCreateService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly hashProvider: HashProvider,
  ) {}
  async execute(request: UserRequest.Create): Promise<UserEntity> {
    const { firstName, lastName, email, password } = request
    if (!firstName || !lastName || !email || !password) {
      throw new AppBadRequestException(ValidatorConstant.REQUIRED_FIELD)
    }

    const emailExist = await this.userRepository.emailAlreadyExists(email)

    if (emailExist) {
      throw new AppConflictException(ConstantException.EMAIL_EXIST)
    }
    const hashPassword = await this.hashProvider.generateHash(password)

    const entity = new UserEntity(
      Object.assign(request, { password: hashPassword }),
    )

    return await this.userRepository.create(entity)
  }
}
