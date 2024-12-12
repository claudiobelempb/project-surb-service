import { DynamicModule, Global, Module } from '@nestjs/common'
import { AppEnvModule } from '../env-config/app-env.module'
import { ConfigService } from '@nestjs/config'
import { PrismaService } from './prisma/prima.service'
import { PrismaClient } from '@prisma/client'

@Global()
@Module({
  imports: [AppEnvModule.forRoot()],
  providers: [ConfigService, PrismaService],
  exports: [PrismaService],
})
export class DatabaseModule {
  static forTest(prismaClient: PrismaClient): DynamicModule {
    return {
      module: DatabaseModule,
      providers: [
        {
          provide: PrismaService,
          useFactory: () => prismaClient as PrismaService,
        },
      ],
    }
  }
}
