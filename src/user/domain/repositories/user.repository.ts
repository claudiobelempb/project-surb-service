import { AppConflictException } from '@/shared/domain/exceptions/AppConflictException'
import { AppNotFoundException } from '@/shared/domain/exceptions/AppNotFoundException'
import { PrismaService } from '@/shared/infra/database/prisma/prima.service'
import { ConstantException } from '@/shared/utils/constants/ConstantException'
import { UserMapper } from '@/user/infra/mapper/user.mapper'
import { UserEntity } from '../entities/user.entity'
import { IUserRepository } from './user-repository.interface'

export class UserRepository implements IUserRepository.IRepository {
  sortableFields: string[] = ['fistName', 'createdAt']

  constructor(private readonly prisma: PrismaService) {}

  async pagination(
    params: IUserRepository.PaginationRequest,
  ): Promise<IUserRepository.PaginationResponse> {
    const sort = this.sortableFields?.includes(`${params.sort}`) || false
    const order = sort ? params.sort : 'createdAt'
    const orderDir = sort ? params.sortDir : 'desc'
    const total = await this.prisma.user.count({
      ...(params.filter && {
        where: {
          firstName: { contains: `${params.sort}`, mode: 'insensitive' },
        },
      }),
    })

    const users = this.prisma.user.findMany({
      ...(params.filter && {
        where: {
          firstName: { contains: `${params.sort}`, mode: 'insensitive' },
        },
        orderBy: {
          [`${order}`]: orderDir,
        },
        skip:
          params.page && params.page > 0
            ? (params.page - 1) * params.perPage
            : 1,
        take: params.perPage && params.perPage > 0 ? params.perPage : 15,
      }),
    })

    return new IUserRepository.PaginationResponse({
      items: (await users).map(u => UserMapper.toEntity(u)),
      total,
      currentPage: params.page,
      perPage: params.perPage,
      sort: `${order}`,
      sortDir: `${orderDir}`,
      filter: params.filter,
    })
  }

  async create(entity: UserEntity): Promise<UserEntity> {
    const data = await this.prisma.user.create({
      data: entity.toJSON(),
    })
    return UserMapper.toEntity(data)
  }

  async findByEmail(email: string): Promise<UserEntity | null> {
    try {
      const user = await this.prisma.user.findUnique({
        where: { email },
      })
      if (!user) {
        return null
      }
      return UserMapper.toEntity(user)
    } catch {
      throw new AppNotFoundException(`UserModel not found using email ${email}`)
    }
  }

  async emailAlreadyExists(email: string): Promise<boolean> {
    const user = await this.prisma.user.findUnique({
      where: { email },
    })

    if (user) {
      return true
    }
    return false
  }

  async findById(id: string): Promise<UserEntity | null> {
    try {
      const user = await this.prisma.user.findUnique({
        where: {
          id,
        },
      })

      if (user) {
        return UserMapper.toEntity(user)
      }
      return null
    } catch (error) {
      throw new AppNotFoundException(
        `${ConstantException.ENTITY_NOT_FOUND} ${id}`,
      )
    }
  }

  async update(entity: UserEntity): Promise<void> {
    this.findById(entity.id)
    await this.prisma.user.update({
      data: entity.toJSON(),
      where: {
        id: entity.id,
      },
    })
  }

  async delete(id: string): Promise<void> {
    this.findById(id)
    await this.prisma.user.delete({
      where: {
        id,
      },
    })
  }

  async show(id: string): Promise<UserEntity | null> {
    const user = await this.findById(id)
    if (user) {
      return user
    }
    return null
  }

  async findAll(): Promise<UserEntity[]> {
    const users = await this.prisma.user.findMany()
    return users.map(e => UserMapper.toEntity(e))
  }

  async enable(id: string): Promise<void> {
    this.findById(id)
    await this.prisma.user.update({
      data: { isActive: true },
      where: {
        id,
      },
    })
  }
  async disabled(id: string): Promise<void> {
    this.findById(id)
    await this.prisma.user.update({
      data: { isActive: false },
      where: {
        id,
      },
    })
  }
}
