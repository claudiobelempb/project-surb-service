import { JwtGuard } from '@/auth/application/guards/jwt.guard'
import { TimeResponse } from '@/time/application/response/time.response'
import { TimeFindAllService } from '@/time/application/services/time-findall.service'
import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common'
import { TimeMapper } from '../mapper/time.mapper'

@Controller('admin/times')
@UseGuards(JwtGuard)
export class TimeFindAllController {
  constructor(private readonly timeFindAllService: TimeFindAllService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async handle(): Promise<TimeResponse.Time[]> {
    const times = await this.timeFindAllService.execute()
    return times.map(time => TimeMapper.toResponse(time))
  }
}
