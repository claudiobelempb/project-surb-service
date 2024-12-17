import { IRepositoryContract } from '@/shared/domain/repositories/repository-contracts'
import { UserEntity } from '../entities/user.entity'

export interface IUserRepository extends IRepositoryContract<UserEntity> {
  findByEmail(email: string): Promise<UserEntity>
  userWithSameEmail(email: string): Promise<void>
}
