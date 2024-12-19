import { v4 as uuidv4 } from 'uuid'

export abstract class EntityDefault<T = any> {
  public readonly _id: string
  public readonly _props: T

  constructor(props: T, id?: string) {
    this._props = props
    this._id = id || uuidv4()
  }

  get id() {
    return this._id
  }

  toJSON(): Required<{ id: string } & T> {
    return {
      id: this._id,
      ...this._props,
    } as Required<{ id: string } & T>
  }
}
