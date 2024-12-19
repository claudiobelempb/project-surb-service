import { InMemoryRepository } from '@/shared/domain/repositories/in-memory.repository'
import { TimeEntity } from '../entities/TimeEntity'

export class TimeInMemoryRepository extends InMemoryRepository<TimeEntity> {}
