import { IRepositoryContract } from '@/shared/domain/repositories/repository-contracts'
import { UserEntity } from '../entities/user.entity'
import { PrismaService } from '@/shared/infra/database/prisma/prima.service'
import { IPaginationParams } from '@/shared/domain/interfaces/pagnation-params'

export class UserPrismaRepository implements IRepositoryContract<UserEntity> {
  constructor(private readonly prisma: PrismaService) {}

  async create(entity: UserEntity): Promise<void> {
    throw new Error('Method not implemented.')
  }

  async show(id: string): Promise<UserEntity> {
    return await this.prisma.user.findUnique({
      where: {
        id,
      },
    })
  }

  async index({ page }: IPaginationParams): Promise<UserEntity[]> {
    return await this.prisma.user.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      take: 20,
      skip: (page - 1) * 20,
    })
  }

  async update(id: string, entity: UserEntity): Promise<void> {
    throw new Error('Method not implemented.')
  }

  async delete(id: string): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
