import { AppNotFoundException } from '@/shared/domain/exceptions/AppNotFoundException'
import { TimeResponse } from '@/time/application/response/time.response'
import { TimeEntity } from '@/time/domain/entities/TimeEntity'
import { UserEntity } from '@/user/domain/entities/user.entity'
import { Time } from '@prisma/client'

export class TimeMapper {
  static toEntity(entity: Time): TimeEntity {
    try {
      return new TimeEntity(
        {
          name: entity.name,
          isActive: entity.isActive,
          createdAt: entity.createdAt,
          updatedAt: entity.updatedAt as Date,
        },
        entity.id,
      )
    } catch (error) {
      throw new AppNotFoundException('An entity not be loader')
    }
  }

  static toResponse(entity: TimeEntity): TimeResponse.Time {
    return new TimeResponse.Time(entity)
  }
}
