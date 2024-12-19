import { EntityDefault } from '../entities/default-entity'
import { AppNotFoundException } from '../exceptions/AppNotFoundException'
import { IRepository } from './irepository.interface'

export abstract class InMemoryRepository<E extends EntityDefault>
  implements IRepository<E>
{
  items: E[] = []

  async create(entity: E): Promise<E> {
    this.items.push(entity)
    return entity
  }

  async show(id: string): Promise<E> {
    return this.findById(id)
  }

  async findAll(): Promise<E[]> {
    return this.items
  }

  async update(entity: E): Promise<void> {
    await this.findById(entity.id)
    const index = this.items.findIndex(item => item.id === entity.id)
    this.items[index] = entity
  }

  async delete(id: string): Promise<void> {
    await this.findById(id)
    const index = this.items.findIndex(item => item.id === id)
    this.items.splice(index, 1)
  }

  async findById(id: string): Promise<E> {
    const entiry = this.items.find(item => item.id === `${id}`)
    if (!entiry) {
      throw new AppNotFoundException('Entity not found...')
    }
    return entiry
  }

  async findByIndex(id: string): Promise<E | undefined> {
    const index = this.items.findIndex(item => item.id === id)
    if (index >= 0) {
      return this.items[index]
    }
    return undefined
  }
}
