import { IRepository } from '@/shared/domain/repositories/irepository.interface'
import { UserEntity } from '../entities/user.entity'

export interface IUserRepository extends IRepository<UserEntity> {
  findByEmail(email: string): Promise<UserEntity>
  userWithSameEmail(email: string): Promise<void>
}
