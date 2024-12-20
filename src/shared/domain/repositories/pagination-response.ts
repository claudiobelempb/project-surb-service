import { EntityDefault } from '../entities/default-entity'

export type PaginationResponseDirection = 'asc' | 'desc'
export type PaginationResponseProps<
  E extends EntityDefault,
  PaginationResponseFilter,
> = {
  items: E[]
  currentPage: number | null | undefined
  perPage: number
  sort: string | null | undefined
  sortDir: string | null | undefined
  filter: PaginationResponseFilter | null | undefined
  total: number
}

export class PaginationResponse<
  E extends EntityDefault,
  PaginationResponseFilter = string,
> {
  readonly items: E[]
  readonly currentPage: number | null | undefined
  readonly perPage: number
  readonly lastPage: number | null | undefined
  readonly sort: string | null | undefined
  readonly sortDir: string | null | undefined
  readonly filter: PaginationResponseFilter | null | undefined
  readonly total: number

  constructor(props: PaginationResponseProps<E, PaginationResponseFilter>) {
    this.items = props.items
    this.currentPage = props.currentPage
    this.perPage = props.perPage
    this.sort = props.sort
    this.sortDir = props.sortDir
    this.filter = props.filter
    this.total = props.total
    this.lastPage = Math.ceil(this.total / this.perPage)
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
