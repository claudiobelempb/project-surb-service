import { IRepository } from '@/shared/domain/repositories/interfaces/irepository.interface'
import { UserEntity } from '../entities/user.entity'
import { IPagnation } from '@/shared/domain/repositories/interfaces/ipagnation.interface'

export interface IUserRepository extends IPagnation<UserEntity, any, any> {
  findByEmail(email: string): Promise<UserEntity>
  emailAlreadyExists(email: string): Promise<void>
}
