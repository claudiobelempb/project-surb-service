export namespace UserType {
  export type Props = {
    firstName: string
    lastName: string
    email: string
    password: string
    isActive?: boolean
    createdAt?: Date
    updatedAt?: Date | null
  }

  export type Request = {
    firstName: string
    lastName: string
    email: string
    password: string
  }

  export type Response = {
    id: string
    firstName: string
    lastName: string
    email: string
    password: string
    isActive?: boolean
    createdAt?: Date
    updatedAt?: Date | null
  }

  export type UpdateProps = Omit<
    Props,
    'email' | 'password' | 'createdAt' | 'updatedAt' | 'active'
  >
}
