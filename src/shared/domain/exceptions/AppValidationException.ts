import { FieldErrors } from '@/shared/application/interfaces/validator.interface'

export class AppValidationException extends Error {
  constructor(public error: FieldErrors) {
    super('Entity validation Error')
    this.name = 'AppValidationException'
  }
}
