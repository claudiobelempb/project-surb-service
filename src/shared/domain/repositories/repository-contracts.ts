import { IPaginationParams } from '../interfaces/pagnation-params'

export interface IRepositoryContract<E> {
  create(entity: E): Promise<void>
  show(id: string): Promise<E>
  index(params: IPaginationParams): Promise<E[]>
  update(id: string, entity: E): Promise<void>
  delete(id: string): Promise<void>
}
