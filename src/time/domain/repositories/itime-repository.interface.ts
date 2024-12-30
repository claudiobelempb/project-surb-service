import { IPagnation } from '@/shared/domain/repositories/interfaces/ipagnation.interface'
import { PaginationRequest as Request } from '@/shared/domain/repositories/pagination-request'
import { PaginationResponse as Response } from '@/shared/domain/repositories/pagination-response'
import { PaginationFilter } from '@/shared/domain/repositories/types/repository.type'
import { TimeEntity } from '../entities/TimeEntity'

export namespace ITimeRepository {
  export class PaginationRequest extends Request<PaginationFilter> {}

  export class PaginationResponse extends Response<
    TimeEntity,
    PaginationFilter
  > {}
  export interface IRepository
    extends IPagnation<
      TimeEntity,
      PaginationFilter,
      PaginationRequest,
      PaginationResponse
    > {}
}
