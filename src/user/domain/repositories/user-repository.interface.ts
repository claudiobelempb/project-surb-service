import { IPagnation } from '@/shared/domain/repositories/interfaces/ipagnation.interface'
import { PaginationRequest as Request } from '@/shared/domain/repositories/pagination-request'
import { PaginationResponse as Response } from '@/shared/domain/repositories/pagination-response'
import { PaginationFilter } from '@/shared/domain/repositories/types/repository.type'
import { UserEntity } from '../entities/user.entity'
export namespace IUserRepository {
  export class PaginationRequest extends Request<PaginationFilter> {}

  export class PaginationResponse extends Response<
    UserEntity,
    PaginationFilter
  > {}
  export interface IRepository
    extends IPagnation<
      UserEntity,
      PaginationFilter,
      PaginationRequest,
      PaginationResponse
    > {
    findByEmail(email: string): Promise<UserEntity | null>
    emailAlreadyExists(email: string): Promise<void | boolean>
  }
}
