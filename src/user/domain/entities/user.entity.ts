import { EntityDefault } from '@/shared/domain/entities/default-entity'
import { UserType } from '@/user/types/user-type'

export class UserEntity extends EntityDefault<UserType.Props> {
  constructor(props: UserType.Props, id?: string) {
    super(props, id)
    this.props.isActive = this.props.isActive ?? true
    this.props.createdAt = this.props.createdAt ?? new Date()
    this.props.updatedAt = this.props.createdAt ?? new Date()
  }

  // update(value: UserType.UpdateProps) {
  //   // UserEntiry.validate({
  //   //   ...this.props,
  //   //   firstName: value.firstName,
  //   //   lastName: value.lastName,
  //   // })
  //   this.props.firstName = value.firstName
  //   this.props.lastName = value.lastName
  // }

  // updatePassword(value: string) {
  //   // UserEntiry.validate({
  //   //   ...this.props,
  //   //   password: value,
  //   // })
  //   this.props.password = value
  // }

  // updateIsActive(value: boolean) {
  //   // UserEntiry.validate({
  //   //   ...this.props,
  //   //   active: value,
  //   // })
  //   this.props.isActive = value
  // }

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

  get password() {
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
