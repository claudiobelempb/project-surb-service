import { UserEntity } from '@/user/domain/entities/user.entity'
import { Transform } from 'class-transformer'

export namespace UserResponse {
  export class User {
    id: string
    firstName: string
    lastName: string
    email: string
    isActive?: boolean
    @Transform(({ value }: { value: Date }) => value.toISOString())
    createdAt?: Date
    @Transform(({ value }: { value: Date }) => value.toISOString())
    updatedAt?: Date | null

    constructor(entity: UserEntity) {
      this.id = entity.id
      this.firstName = entity.firstName
      this.lastName = entity.lastName
      this.email = entity.email
      this.isActive = entity.isActive
      this.createdAt = entity.createdAt
      this.updatedAt = entity.updatedAt
    }
  }
}
