import { Module } from '@nestjs/common'
import { UserCreateService } from '../application/services/user-create.service'
import { UserCreateController } from './controllers/user-create.controller'
import { UserPrismaRepository } from '../domain/repositories/user.repository'
import { PrismaService } from '@/shared/infra/database/prisma/prima.service'
import { HashProvider } from '@/shared/application/providers/hash.provider'

@Module({
  imports: [],
  controllers: [UserCreateController],
  providers: [
    {
      provide: 'PrismaService',
      useClass: PrismaService,
    },
    {
      provide: 'UserRepository',
      useFactory: (prismaService: PrismaService) => {
        return new UserPrismaRepository(prismaService)
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
        userRepository: UserPrismaRepository,
        hashProvider: HashProvider,
      ) => {
        return new UserCreateService(userRepository, hashProvider)
      },
      inject: ['UserRepository', 'HashProvider'],
    },
  ],
})
export class UserModule {}
