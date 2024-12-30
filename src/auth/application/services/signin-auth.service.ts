import { AuthRequest } from '@/auth/infra/request/auth.request'
import { HashProvider } from '@/shared/application/providers/hash-provider/hash.provider'
import { AppUnauthorizedException } from '@/shared/domain/exceptions/AppUnauthorizedException'
import { AppBadRequestException } from '@/shared/infra/exeptions/AppBadRequestException'
import { ConstantException } from '@/shared/utils/constants/ConstantException'
import { UserResponse } from '@/user/application/response/user.response'
import { UserRepository } from '@/user/domain/repositories/user.repository'
import { UserMapper } from '@/user/infra/mapper/user.mapper'
import { Body } from '@nestjs/common'

export class SigninAuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly hash: HashProvider,
  ) {}

  async execute(
    @Body() request: AuthRequest.Signin,
  ): Promise<UserResponse.User> {
    if (!request.email || !request.password) {
      throw new AppBadRequestException('Input data not provided')
    }
    const entity = await this.userRepository.findByEmail(request.email)

    if (!entity) {
      throw new AppUnauthorizedException(
        ConstantException.CREDENTIALS_NOT_MATCH,
      )
    }

    const hashPasswordMatches = await this.hash.compareHash(
      request.password,
      entity.password as string,
    )

    if (!hashPasswordMatches) {
      throw new AppUnauthorizedException(
        ConstantException.CREDENTIALS_NOT_MATCH,
      )
    }

    return UserMapper.toResponse(entity)
  }
}
