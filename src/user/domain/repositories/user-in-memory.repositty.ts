import { InMemoryRepository } from '@/shared/domain/repositories/in-memory.repository'
import { UserEntity } from '../entities/user.entity'
import { IUserRepository } from './user-repository.interface'
import { AppConflictException } from '@/shared/domain/exceptions/AppConflictException'
import { ConstantException } from '@/shared/utils/constants/ConstantException'
import { AppNotFoundException } from '@/shared/domain/exceptions/AppNotFoundException'

export class UserInMemoryRepository
  extends InMemoryRepository<UserEntity>
  implements IUserRepository
{
  async findByEmail(email: string): Promise<UserEntity> {
    const entity = this.items.find(item => item.email === email)
    if (!entity) {
      throw new AppNotFoundException(ConstantException.ENTITY_NOT_FOUND)
    }
    return entity
  }

  async emailAlreadyExists(email: string): Promise<void> {
    const entity = this.items.find(item => item.email === email)
    if (entity) {
      throw new AppConflictException(ConstantException.EMAIL_EXIST)
    }
  }
}
