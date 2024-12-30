import { TimeEntity } from '@/time/domain/entities/TimeEntity'
import { Transform } from 'class-transformer'

export namespace TimeResponse {
  export class Time {
    id: string
    name: string
    isActive?: boolean
    @Transform(({ value }: { value: Date }) => value.toISOString())
    createdAt?: Date
    @Transform(({ value }: { value: Date }) => value.toISOString())
    updatedAt?: Date | null

    constructor(entity: TimeEntity) {
      this.id = entity.id
      this.name = entity.name
      this.isActive = entity.isActive
      this.createdAt = entity.createdAt
      this.updatedAt = entity.updatedAt
    }
  }
}
