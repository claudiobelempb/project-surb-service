import { PrismaService } from '@/shared/infra/database/prisma/prima.service'
import { EnvModule } from '@/shared/infra/env-config/env.module'
import { Module } from '@nestjs/common'
import { UserCreateService } from '../application/services/user-create.service'
import { UserFindAllService } from '../application/services/user-findall.service'
import { UserRepository } from '../domain/repositories/user.repository'
import { UserCreateController } from './controllers/user-create.controller'
import { UserFindAllController } from './controllers/user-findall.controller'
import { HashProvider } from '@/shared/application/providers/hash-provider/hash.provider'

@Module({
  imports: [EnvModule],
  controllers: [UserCreateController, UserFindAllController],
  providers: [
    {
      provide: 'PrismaService',
      useClass: PrismaService,
    },
    {
      provide: 'UserRepository',
      useFactory: (prismaService: PrismaService) => {
        return new UserRepository(prismaService)
      },
      inject: ['PrismaService'],
    },
    {
      provide: 'HashProvider',
      useClass: HashProvider,
    },
    {
      provide: UserCreateService,
      useFactory: (
        userRepository: UserRepository,
        hashProvider: HashProvider,
      ) => {
        return new UserCreateService(userRepository, hashProvider)
      },
      inject: ['UserRepository', 'HashProvider'],
    },
    {
      provide: UserFindAllService,
      useFactory: (userRepository: UserRepository) => {
        return new UserFindAllService(userRepository)
      },
      inject: ['UserRepository'],
    },
  ],
  exports: [
    {
      provide: 'PrismaService',
      useClass: PrismaService,
    },
    {
      provide: 'UserRepository',
      useFactory: (prismaService: PrismaService) => {
        return new UserRepository(prismaService)
      },
      inject: ['PrismaService'],
    },
  ],
})
export class UserModule {}
