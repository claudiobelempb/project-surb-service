import { PaginationDirection, PaginationProps } from './types/repository.type'

export class PaginationRequest<PaginationFilter> {
  protected _page: number
  protected _perPage: number
  protected _sort: string | null
  protected _sortDir: PaginationDirection | null
  protected _filter: PaginationFilter | null

  constructor(props: PaginationProps<PaginationFilter> = {}) {
    this._page = props.page = 0
    this._perPage = props.perPage = 15
    this._sort = props.sort ?? null
    this._sortDir = props.sortDir ?? null
    this._filter = props.filter ?? null
  }

  get page() {
    return this._page
  }

  private set page(value: number) {
    let _page = +value
    if (Number.isNaN(_page) || _page <= 0 || parseInt(_page as any) !== _page) {
      _page = 1
    }
    this._page = _page
  }

  get perPage() {
    return this._perPage
  }

  private set perPage(value: number) {
    let _perPage = +value
    if (
      Number.isNaN(_perPage) ||
      _perPage <= 0 ||
      parseInt(_perPage as any) !== _perPage
    ) {
      _perPage = this._perPage
    }
    this._page = _perPage
  }

  get sort(): string | null {
    return this._sort
  }

  private set sort(value: string | null) {
    this._sort =
      value === null || value === undefined || value === '' ? null : `${value}`
  }

  get sortDir(): PaginationDirection | null | undefined {
    return this._sortDir
  }

  private set sortDir(value: string | null) {
    if (!this._sort) {
      this._sortDir = null
      return
    }
    const dir = `${value}`.toLowerCase()
    this._sortDir = dir !== 'asc' && dir !== 'desc' ? 'desc' : dir
  }

  get filter(): PaginationFilter | string | null | undefined {
    return this._filter
  }

  private set filter(value: PaginationFilter | null) {
    this._filter =
      value === null || value === undefined || value === ''
        ? null
        : (`${value}` as any)
  }
}
