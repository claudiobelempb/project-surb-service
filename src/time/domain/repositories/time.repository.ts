import { IPaginationParams } from '@/shared/domain/interfaces/pagnation-params'
import { TimeEntity } from '../entities/TimeEntity'
import { ITimeRepository } from './itime-repository.interface'
import { PrismaService } from '@/shared/infra/database/prisma/prima.service'

export class TimeRepository implements ITimeRepository {
  constructor(private readonly prisma: PrismaService) {}
  create({ name }: TimeEntity): Promise<TimeEntity> {
    throw new Error('Method not implemented.')
  }
  findById(id: string): Promise<TimeEntity> {
    throw new Error('Method not implemented.')
  }
  findAll(params: IPaginationParams): Promise<TimeEntity[]> {
    throw new Error('Method not implemented.')
  }
  update(entity: TimeEntity): Promise<void> {
    throw new Error('Method not implemented.')
  }
  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
