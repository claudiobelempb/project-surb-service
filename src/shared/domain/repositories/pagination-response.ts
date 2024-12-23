import { EntityDefault } from '../entities/default-entity'
import { PaginationResponseProps } from './types/repository.type'

export class PaginationResponse<
  E extends EntityDefault,
  PaginationResponseFilter = string,
> {
  readonly items: E[]
  readonly total: number
  readonly currentPage: number
  readonly perPage: number
  readonly lastPage: number
  readonly sort: string | null
  readonly sortDir: string | null
  readonly filter: PaginationResponseFilter | null

  constructor(props: PaginationResponseProps<E, PaginationResponseFilter>) {
    this.items = props.items
    this.total = props.total
    this.currentPage = props.currentPage
    this.perPage = props.perPage
    this.lastPage = Math.ceil(this.total / this.perPage)
    this.sort = props.sort ?? null
    this.sortDir = props.sortDir ?? null
    this.filter = props.filter ?? null
  }

  toJson(forceEntity = false) {
    return {
      items: forceEntity ? this.items.map(item => item.toJSON()) : this.items,
      currentPage: this.currentPage,
      perPage: this.perPage,
      sort: this.sort,
      sortDir: this.sortDir,
      filter: this.filter,
      total: this.total,
      lastPage: this.lastPage,
    }
  }
}
