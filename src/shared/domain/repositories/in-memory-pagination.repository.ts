import { EntityDefault } from '../entities/default-entity'
import { InMemoryRepository } from './in-memory.repository'
import { IPagnation } from './interfaces/ipagnation.interface'
import { PaginationRequest } from './pagination-request'
import { PaginationResponse } from './pagination-response'
import { PaginationFilter } from './types/repository.type'

export abstract class InMemoryPagnationRepository<E extends EntityDefault>
  extends InMemoryRepository<E>
  implements IPagnation<E, any, any>
{
  sortableFields: string[] = []
  async pagination(
    request: PaginationRequest<PaginationFilter>,
  ): Promise<PaginationResponse<E, string | undefined>> {
    const itemsFiltered = await this.applyFilter(
      this.items,
      request.filter as string,
    )
    const itemsSorted = await this.applySort(
      itemsFiltered,
      request.sort as string,
      request.sortDir as string,
    )
    const itemsPaginated = await this.applyPagination(
      itemsSorted,
      request.page,
      request.perPage,
    )
    return new PaginationResponse({
      items: itemsPaginated,
      currentPage: request.page,
      perPage: request.perPage,
      sort: request.sort,
      sortDir: request.sortDir,
      filter: request.filter,
      total: itemsFiltered.length,
    })
  }

  protected abstract applyFilter(
    items: E[],
    filter: string | null,
  ): Promise<E[]>

  protected async applySort(
    items: E[],
    sort: string | null,
    sortDir: string | null,
  ): Promise<E[]> {
    if (!sort || !this.sortableFields.includes(sort)) {
      return items
    }
    return [...items].sort((a, b) => {
      if (a.props[sort] < b.props[sort]) {
        return sortDir === 'asc' ? -1 : 1
      }
      if (a.props[sort] > b.props[sort]) {
        return sortDir === 'asc' ? 1 : -1
      }
      return 0
    })
  }

  protected async applyPagination(
    items: E[],
    page: PaginationRequest<PaginationFilter>['page'],
    perPage: PaginationRequest<PaginationFilter>['perPage'],
  ): Promise<E[]> {
    const start = ((page as number) - 1) * perPage
    const limit = start + perPage
    return items.slice(start, limit)
  }
}
