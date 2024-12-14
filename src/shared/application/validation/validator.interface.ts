export type FieldErrors = {
  [field: string]: string[]
} | null

export interface IValidatorFields<T = null> {
  errors: FieldErrors
  validatedData: T
  validate(data: null): boolean
}
