export class FieldMessage {
  private _fieldName: string
  private _message: string

  constructor(fieldName: string, message: string) {
    this._fieldName = fieldName
    this._message = message
  }

  public get fieldName(): string {
    return this._fieldName
  }
  public set fieldName(value: string) {
    this._fieldName = value
  }

  public get message(): string {
    return this._message
  }
  public set message(value: string) {
    this._message = value
  }
}
