import { EntityDefault } from '../../entities/default-entity'
import { PaginationRequest } from '../pagination-request'
import { PaginationResponse } from '../pagination-response'
import { IRepository } from './irepository.interface'

export interface IPagnation<
  E extends EntityDefault,
  PaginationFilter,
  Request = PaginationRequest<PaginationFilter>,
  Response = PaginationResponse<E, PaginationFilter>,
> extends IRepository<E> {
  sortableFields: string[]
  pagination(params: Request): Promise<Response>
}
