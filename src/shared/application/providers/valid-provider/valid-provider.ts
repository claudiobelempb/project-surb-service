import { validateSync } from 'class-validator'
import {
  FieldErrors,
  IValidProvider,
} from './interfaces/valid-provider.interface'

export abstract class ValidProvider<T> implements IValidProvider<T> {
  errors: FieldErrors = null
  validatedData: T = null as any

  validate(data: any): boolean {
    const errors = validateSync(data)
    if (errors.length) {
      this.errors = {}
      for (const error of errors) {
        const field = error.property
        this.errors[field] = Object.values(error.constraints as any)
      }
    } else {
      this.validatedData = data
    }
    return !errors.length
  }
}
