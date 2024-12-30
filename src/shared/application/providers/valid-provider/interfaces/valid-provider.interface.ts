export type FieldErrors = {
  [field: string]: string[]
} | null

export interface IValidProvider<T = null> {
  errors: FieldErrors
  validatedData: T
  validate(data: null): boolean
}
