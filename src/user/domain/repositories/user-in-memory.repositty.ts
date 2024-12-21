import { AppConflictException } from '@/shared/domain/exceptions/AppConflictException'
import { AppNotFoundException } from '@/shared/domain/exceptions/AppNotFoundException'
import { InMemoryPagnationRepository } from '@/shared/domain/repositories/in-memory-pagination.repository'
import {
  PaginationDirection,
  PaginationFilter,
} from '@/shared/domain/repositories/types/repository.type'
import { ConstantException } from '@/shared/utils/constants/ConstantException'
import { UserEntity } from '../entities/user.entity'
import { IUserRepository } from './user-repository.interface'

export class UserInMemoryRepository
  extends InMemoryPagnationRepository<UserEntity>
  implements IUserRepository.IRepository
{
  sortableFields: string[] = ['name', 'createdAt']

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

  protected async applyFilter(
    items: UserEntity[],
    filter: PaginationFilter,
  ): Promise<UserEntity[]> {
    if (!filter) {
      return items
    }

    return items.filter(item => {
      return item.props.firstName.toLowerCase().includes(filter.toLowerCase())
    })
  }

  protected async applySort(
    items: UserEntity[],
    sort: string | null,
    sortDir: PaginationDirection | null,
  ): Promise<UserEntity[]> {
    return !sort
      ? super.applySort(items, 'createdAt', 'desc')
      : super.applySort(items, sort, sortDir)
  }
}
