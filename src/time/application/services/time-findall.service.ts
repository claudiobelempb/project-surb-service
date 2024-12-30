import { TimeRepository } from '@/time/domain/repositories/time.repository'
import { TimeResponse } from '../response/time.response'
import { TimeEntity } from '@/time/domain/entities/TimeEntity'

export class TimeFindAllService {
  constructor(private readonly timeRepository: TimeRepository) {}
  async execute(): Promise<TimeEntity[]> {
    return await this.timeRepository.findAll()
  }
}
