import { EntityDefault } from '../../entities/default-entity'

export type PaginationFilter = string | null | undefined
export type PaginationDirection = 'asc' | 'desc'
export type PaginationProps<PaginationFilter> = {
  page?: number
  perPage?: number
  sort?: string | null
  sortDir?: PaginationDirection | null
  filter?: PaginationFilter | null
}

export type PaginationResponseProps<
  E extends EntityDefault,
  PaginationFilter,
> = {
  items: E[]
  currentPage: number | null | undefined
  perPage: number
  sort: string | null | undefined
  sortDir: string | null | undefined
  filter: PaginationFilter | null | undefined
  total: number
}
