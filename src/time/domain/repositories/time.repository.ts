import {} from '@/shared/domain/repositories/interfaces/iparams.interface'
import { TimeEntity } from '../entities/TimeEntity'
import { ITimeRepository } from './itime-repository.interface'
import { PrismaService } from '@/shared/infra/database/prisma/prima.service'

export class TimeRepository implements ITimeRepository {
  constructor(private readonly prisma: PrismaService) {}
  show(id: string): Promise<TimeEntity> {
    throw new Error('Method not implemented.')
  }
  findByIndex(id: string): Promise<TimeEntity | undefined> {
    throw new Error('Method not implemented.')
  }
  findAll(): Promise<TimeEntity[]> {
    throw new Error('Method not implemented.')
  }
  create({ name }: TimeEntity): Promise<TimeEntity> {
    throw new Error('Method not implemented.')
  }
  findById(id: string): Promise<TimeEntity> {
    throw new Error('Method not implemented.')
  }

  update(entity: TimeEntity): Promise<void> {
    throw new Error('Method not implemented.')
  }
  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
