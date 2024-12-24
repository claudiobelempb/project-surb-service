import { EntityDefault } from '../../entities/default-entity'

export interface IRepository<E extends EntityDefault> {
  create(entity: E): Promise<E>
  show(id: string): Promise<E | null>
  findById(id: string): Promise<E | null>
  findAll(): Promise<E[]>
  update(entity: E): Promise<void>
  delete(id: string): Promise<void>
  enable(id: string): Promise<void>
  disabled(id: string): Promise<void>
}
