import { AppNotFoundException } from '@/shared/domain/exceptions/AppNotFoundException'
import {} from '@/shared/domain/repositories/interfaces/iparams.interface'
import { PrismaService } from '@/shared/infra/database/prisma/prima.service'
import { ConstantException } from '@/shared/utils/constants/ConstantException'
import { TimeMapper } from '@/time/infra/mapper/time.mapper'
import { TimeEntity } from '../entities/TimeEntity'
import { ITimeRepository } from './itime-repository.interface'

export class TimeRepository implements ITimeRepository.IRepository {
  constructor(private readonly prisma: PrismaService) {}
  sortableFields: string[] = ['name', 'createdAt']

  async pagination(
    params: ITimeRepository.PaginationRequest,
  ): Promise<ITimeRepository.PaginationResponse> {
    const sort = this.sortableFields?.includes(`${params.sort}`) || false
    const orderBy = sort ? params.sort : 'createdAt'
    const orderDir = sort ? params.sortDir : 'desc'
    const count = await this.prisma.user.count({
      ...(params.filter && {
        where: {
          firstName: { contains: `${params.sort}`, mode: 'insensitive' },
        },
      }),
    })

    const times = this.prisma.time.findMany({
      ...(params.filter && {
        where: {
          name: { contains: `${params.sort}`, mode: 'insensitive' },
        },
        orderBy: {
          [`${orderBy}`]: orderDir,
        },
        skip:
          params.page && params.page > 0
            ? (params.page - 1) * params.perPage
            : 1,
        take: params.perPage && params.page > 0 ? params.perPage : 15,
      }),
    })

    return new ITimeRepository.PaginationResponse({
      items: (await times).map(time => TimeMapper.toEntity(time)),
      total: count,
      currentPage: params.page,
      perPage: params.perPage,
      sort: `${orderBy}`,
      sortDir: `${orderDir}`,
      filter: params.filter,
    })
  }

  async enable(id: string): Promise<void> {
    this.findById(id)
    await this.prisma.time.update({
      data: { isActive: true },
      where: {
        id,
      },
    })
  }

  async disabled(id: string): Promise<void> {
    this.findById(id)
    await this.prisma.time.update({
      data: { isActive: false },
      where: {
        id,
      },
    })
  }

  async show(id: string): Promise<TimeEntity | null> {
    const time = await this.findById(id)
    if (time) {
      return time
    }
    return null
  }

  async findAll(): Promise<TimeEntity[]> {
    const times = await this.prisma.time.findMany()
    return times.map(time => TimeMapper.toEntity(time))
  }

  async create(entity: TimeEntity): Promise<TimeEntity> {
    const time = await this.prisma.time.create({
      data: {
        name: entity.name,
        userId: entity.user.id,
      },
    })
    return TimeMapper.toEntity(time)
  }

  async findById(id: string): Promise<TimeEntity | null> {
    try {
      const time = await this.prisma.time.findUnique({
        where: {
          id,
        },
      })

      if (time) {
        return TimeMapper.toEntity(time)
      }
      return null
    } catch (error) {
      throw new AppNotFoundException(
        `${ConstantException.ENTITY_NOT_FOUND} ${id}`,
      )
    }
  }

  async update(entity: TimeEntity): Promise<void> {
    this.findById(entity.id)
    await this.prisma.time.update({
      data: {
        name: entity.name,
      },
      where: {
        id: entity.id,
      },
    })
  }

  async delete(id: string): Promise<void> {
    this.findById(id)
    await this.prisma.time.delete({
      where: {
        id,
      },
    })
  }
}
