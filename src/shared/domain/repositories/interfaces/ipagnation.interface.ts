import { EntityDefault } from '../../entities/default-entity'
import { IRepository } from './irepository.interface'

export interface IPagnation<
  E extends EntityDefault,
  SearchReposnse,
  SearchRequest,
> extends IRepository<E> {
  sortableFields: string[]
  pagnation(params: SearchRequest): Promise<SearchReposnse>
}
