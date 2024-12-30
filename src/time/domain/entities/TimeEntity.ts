import { EntityDefault } from '@/shared/domain/entities/default-entity'
import { UserEntity } from '@/user/domain/entities/user.entity'

export type TimeProps = {
  name: string
  isActive?: boolean
  createdAt?: Date
  updatedAt?: Date
  user?: UserEntity
}

export class TimeEntity extends EntityDefault<TimeProps> {
  constructor(props: TimeProps, id?: string) {
    super(props, id)
    this.props.isActive = props.isActive ?? true
    this.props.createdAt = props.createdAt ?? new Date()
    this.props.updatedAt = props.updatedAt ?? new Date()
    this.props.user = props.user
  }

  get name() {
    return this.props.name
  }

  set name(value: string) {
    this.props.name = value
  }

  get user() {
    return this.props.user as UserEntity
  }

  set user(value: UserEntity) {
    this.props.user = value
  }

  get isActive() {
    return this.props.isActive
  }

  get createdAt() {
    return this.props.createdAt
  }

  get updatedAt() {
    return this.props.updatedAt
  }
}
