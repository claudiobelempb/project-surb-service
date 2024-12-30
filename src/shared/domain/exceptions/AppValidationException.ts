import { FieldErrors } from '@/shared/application/providers/valid-provider/interfaces/valid-provider.interface'

export class AppValidationException extends Error {
  constructor(public error: FieldErrors) {
    super('Entity validation Error')
    this.name = 'AppValidationException'
  }
}
