import { EntityDefault } from '@/shared/domain/entities/default-entity'

export type TimeProps = {
  name: string
  isActive?: boolean
  createdAt?: Date
  updatedAt?: Date
}

export class TimeEntity extends EntityDefault<TimeProps> {
  constructor(props: TimeProps, id?: string) {
    super(props, id)
    this.props.isActive = props.isActive ?? true
    this.props.createdAt = props.createdAt ?? new Date()
    this.props.updatedAt = props.updatedAt ?? new Date()
  }

  get name() {
    return this.props.name
  }

  set name(value: string) {
    this.props.name = value
  }

  get isActive() {
    return this.props.isActive
  }

  updateActive(value: boolean) {
    this.props.isActive = value
  }

  get createdAt() {
    return this.props.createdAt
  }

  get updatedAt() {
    return this.props.updatedAt
  }
}
