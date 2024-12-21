import { PaginationDirection, PaginationProps } from './types/repository.type'

export class PaginationRequest<PaginationFilter> {
  protected _page: number | null | undefined
  protected _perPage = 15
  protected _sort: string | null | undefined
  protected _sortDir: PaginationDirection | null | undefined
  protected _filter?: PaginationFilter | string | null | undefined

  constructor(props: PaginationProps<PaginationFilter> = {}) {
    this.page = props.page ? props.page : 0
    this.perPage = props.perPage ? props.perPage : 0
    this.sort = props.sort ? props.sort : null
    this.sortDir = props.sortDir ? props.sortDir : null
    this.filter = props.filter ? props.filter : null
  }

  get page(): number | null | undefined {
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

  get sort(): string | null | undefined {
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

  private set filter(value: PaginationFilter | null | string | undefined) {
    this._filter =
      value === null || value === undefined || value === '' ? null : `${value}`
  }
}
