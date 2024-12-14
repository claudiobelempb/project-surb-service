export type SorDirection = 'asc' | 'desc'
export type SearchProps<Filter = string> = {
  page?: number
  perPage?: number
  sort?: string | null
  sortDir?: SorDirection | null
  filter?: Filter | null
}

export class SearchParams<Filter = string> {
  protected _page: number | undefined
  protected _perPage = 15
  protected _sort: string | null | undefined
  protected _sortDir: SorDirection | null | undefined
  protected _filter?: Filter | null

  constructor(props: SearchProps<Filter> = {}) {
    this.page = props.page ? props.page : 0
    this.perPage = props.perPage ? props.perPage : 0
    this.sort = props.sort ? props.sort : null
    this.sortDir = props.sortDir ? props.sortDir : null
    this.filter = props.filter ? props.filter : null
  }

  get page(): number | undefined {
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
    let _perPage = value === (true as any) ? this._perPage : +value
    if (
      Number.isNaN(_perPage) ||
      _perPage <= 0 ||
      parseInt(_perPage as any) !== _perPage
    ) {
      _perPage = this._perPage
    }
    this._perPage = _perPage
  }

  get sort(): string | null | undefined {
    return this._sort
  }

  private set sort(value: string | null) {
    this._sort =
      value === null || value === undefined || value === '' ? null : `${value}`
  }

  get sortDir(): SorDirection | null | undefined {
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

  get filter(): Filter | null | undefined {
    return this._filter
  }

  private set filter(value: Filter | null) {
    this._filter =
      value === null || value === undefined || value === ''
        ? null
        : (`${value}` as any)
  }
}
