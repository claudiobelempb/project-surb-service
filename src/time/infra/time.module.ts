import { PrismaService } from '@/shared/infra/database/prisma/prima.service'
import { Module } from '@nestjs/common'
import { TimeRepository } from '../domain/repositories/time.repository'
import { TimeFindAllService } from '../application/services/time-findall.service'
import { TimeFindAllController } from './controllers/time-findall.controller'

@Module({
  controllers: [TimeFindAllController],
  providers: [
    {
      provide: 'PrismaService',
      useClass: PrismaService,
    },
    {
      provide: 'TimeRepository',
      useFactory: (prismaService: PrismaService) => {
        return new TimeRepository(prismaService)
      },
      inject: ['PrismaService'],
    },
    {
      provide: TimeFindAllService,
      useFactory: (timeRepository: TimeRepository) => {
        return new TimeFindAllService(timeRepository)
      },
      inject: ['TimeRepository'],
    },
  ],
})
export class TimeModule {}
