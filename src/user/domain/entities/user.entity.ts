import { EntityDefault } from '@/shared/domain/entities/default-entity'

export type Props = {
  firstName: string
  lastName: string
  email: string
  password?: string
  isActive?: boolean
  createdAt?: Date
  updatedAt?: Date | null
}
export class UserEntity extends EntityDefault<Props> {
  constructor(props: Props, id?: string) {
    super(props, id)
    this.props.isActive = this.props.isActive ?? true
    this.props.createdAt = this.props.createdAt ?? new Date()
    this.props.updatedAt = this.props.createdAt ?? new Date()
  }

  get firstName() {
    return this.props.firstName
  }

  private set firstName(value: string) {
    this.props.firstName = value
  }

  get lastName() {
    return this.props.lastName
  }

  private set lastName(value: string) {
    this.props.lastName = value
  }

  get email() {
    return this.props.email
  }

  private set email(value: string) {
    this.props.email = value
  }

  get password(): string | undefined {
    return this.props.password
  }

  private set password(value: string) {
    this.props.password = value
  }

  get isActive(): boolean | undefined {
    return this.props.isActive
  }

  private set isActive(value: boolean) {
    this.props.isActive = value
  }

  get createdAt() {
    return this.props.createdAt
  }

  get updatedAt() {
    return this.props.updatedAt
  }
}
