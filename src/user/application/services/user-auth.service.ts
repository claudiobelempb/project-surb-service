import { HashProvider } from '@/shared/application/providers/hash.provider'
import { AppUnauthorizedException } from '@/shared/domain/exceptions/AppUnauthorizedException'
import { AppBadRequestException } from '@/shared/infra/exeptions/AppBadRequestException'
import { AppInvalidCredentialsException } from '@/shared/infra/exeptions/AppInvalidCredentialsException'
import { ConstantException } from '@/shared/utils/constants/ConstantException'
import { UserEntity } from '@/user/domain/entities/user.entity'
import { UserPrismaRepository } from '@/user/domain/repositories/user.repository'
import { Body } from '@nestjs/common'

export class UserAuthService {
  constructor(
    private readonly userRepository: UserPrismaRepository,
    private readonly hashProvider: HashProvider,
  ) {}

  async execute(@Body() { email, password }: UserEntity): Promise<UserEntity> {
    if (!email || !password) {
      throw new AppBadRequestException('Input data not provided')
    }
    const entity = await this.userRepository.findByEmail(email)

    if (!entity) {
      throw new AppUnauthorizedException(
        ConstantException.CREDENTIALS_NOT_MATCH,
      )
    }

    const hashPasswordMatches = await this.hashProvider.compareHash(
      password,
      entity.password ? entity.password : '',
    )

    if (!hashPasswordMatches) {
      throw new AppUnauthorizedException(
        ConstantException.CREDENTIALS_NOT_MATCH,
      )
    }

    return entity
  }
}
