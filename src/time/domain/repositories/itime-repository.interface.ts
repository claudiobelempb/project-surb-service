import { IRepository } from '@/shared/domain/repositories/irepository.interface'
import { TimeEntity } from '../entities/TimeEntity'

export interface ITimeRepository extends IRepository<TimeEntity> {}
