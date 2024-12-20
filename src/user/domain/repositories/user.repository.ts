import { AppConflictException } from '@/shared/domain/exceptions/AppConflictException'
import { IParams } from '@/shared/domain/repositories/interfaces/iparams.interface'
import { PaginationRequest } from '@/shared/domain/repositories/pagination-request'
import { PaginationResponse } from '@/shared/domain/repositories/pagination-response'
import { PrismaService } from '@/shared/infra/database/prisma/prima.service'
import { ConstantException } from '@/shared/utils/constants/ConstantException'
import { UserEntity } from '../entities/user.entity'
import { IUserRepository } from './user-repository.interface'

export class UserRepository implements IUserRepository.IRepository {
  sortableFields: string[] = []
  constructor(private readonly prisma: PrismaService) {}

  pagination(
    params: PaginationRequest<string>,
  ): Promise<PaginationResponse<UserEntity, string>> {
    throw new Error('Method not implemented.')
  }

  async findByEmail(email: string): Promise<UserEntity> {
    // const entity = await this.prisma.user.findUnique({
    //   where: {
    //     email,
    //   },
    // })
    // return { ...entity }
    throw new Error('Method not implemented.')
  }

  async emailAlreadyExists(email: string): Promise<void> {
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
    // const entity = await this.prisma.user.findUnique({
    //   where: {
    //     id,
    //   },
    // })
    // return { ...entity }
    throw new Error('Method not implemented.')
  }

  async index({ page }: IParams): Promise<UserEntity[]> {
    throw new Error('Method not implemented.')
    // return await this.prisma.user.findMany({
    //   orderBy: {
    //     createdAt: 'desc',
    //   },
    //   take: 20,
    //   skip: (page - 1) * 20,
    // })
  }

  async update(entity: UserEntity): Promise<void> {
    throw new Error('Method not implemented.')
  }

  async delete(id: string): Promise<void> {
    throw new Error('Method not implemented.')
  }

  async show(id: string): Promise<UserEntity> {
    throw new Error('Method not implemented.')
  }
  async findByIndex(id: string): Promise<UserEntity | undefined> {
    throw new Error('Method not implemented.')
  }
  async findAll(): Promise<UserEntity[]> {
    throw new Error('Method not implemented.')
  }
}
