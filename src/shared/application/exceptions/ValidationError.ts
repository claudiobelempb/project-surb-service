import { FieldMessage } from './FieldMessage'
import { StandarError } from './StandarError'

export class ValidationError extends StandarError {
  private _erros: FieldMessage[] = []

  public addErros(fieldName: string, message: string) {
    this._erros.push(new FieldMessage(fieldName, message))
  }
}
