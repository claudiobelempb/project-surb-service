import { EntityDefault } from '../../entities/default-entity'
import { IParams } from './iparams.interface'

export interface IRepository<E extends EntityDefault> {
  create(entity: E): Promise<E>
  show(id: string): Promise<E>
  findById(id: string): Promise<E>
  findByIndex(id: string): Promise<E | undefined>
  findAll(): Promise<E[]>
  // findAll(params: IParams): Promise<E[]>
  update(entity: E): Promise<void>
  delete(id: string): Promise<void>
}
