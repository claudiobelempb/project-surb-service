import { UserEntity } from '@/user/domain/entities/user.entity'
import { UserRepository } from '@/user/domain/repositories/user.repository'

export class UserFindAllService {
  constructor(private readonly userRepository: UserRepository) {}
  async execute(): Promise<UserEntity[]> {
    return await this.userRepository.findAll()
  }
}
