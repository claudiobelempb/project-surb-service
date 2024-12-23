import { AppNotFoundException } from '@/shared/domain/exceptions/AppNotFoundException'
import { AppValidationException } from '@/shared/domain/exceptions/AppValidationException'
import { UserEntity } from '@/user/domain/entities/user.entity'
import { User } from '@prisma/client'

export class UserMapper {
  static toEntity(entity: User): UserEntity {
    try {
      return new UserEntity(
        {
          firstName: entity.firstName,
          lastName: entity.lastName,
          email: entity.email,
          password: entity.password,
          isActive: entity.isActive,
          createdAt: entity.createdAt,
          updatedAt: entity.updatedAt,
        },
        entity.id,
      )
    } catch (error) {
      throw new AppNotFoundException('An entity not be loader')
    }
  }
}
