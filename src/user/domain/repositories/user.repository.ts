import { AppConflictException } from '@/shared/domain/exceptions/AppConflictException'
import { IPaginationParams } from '@/shared/domain/interfaces/pagnation-params'
import { PrismaService } from '@/shared/infra/database/prisma/prima.service'
import { ConstantException } from '@/shared/utils/constants/ConstantException'
import { UserEntity } from '../entities/user.entity'
import { IUserRepository } from './IUserRepository'

export class UserPrismaRepository implements IUserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findByEmail(email: string): Promise<UserEntity> {
    const entity = await this.prisma.user.findUnique({
      where: {
        email,
      },
    })
    return { ...entity }
  }

  async userWithSameEmail(email: string): Promise<void> {
    const entity = await this.prisma.user.findUnique({
      where: { email },
    })

    if (entity) {
      throw new AppConflictException(ConstantException.EMAIL_EXIST)
    }
  }

  async create({ firstName, lastName, email, password }: any): Promise<any> {
    return this.prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password,
      },
    })
  }

  async findById(id: string): Promise<UserEntity> {
    const entity = await this.prisma.user.findUnique({
      where: {
        id,
      },
    })
    return { ...entity }
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
