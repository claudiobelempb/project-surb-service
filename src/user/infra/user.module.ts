import { HashProvider } from '@/shared/application/providers/hash.provider'
import { PrismaService } from '@/shared/infra/database/prisma/prima.service'
import { Module } from '@nestjs/common'
import { UserCreateService } from '../application/services/user-create.service'
import { UserPrismaRepository } from '../domain/repositories/user.repository'
import { UserCreateController } from './controllers/user-create.controller'
import { UserAuthController } from './controllers/user-auth.controller'
import { AuthModule } from '@/auth/infra/auth.module'
import { UserAuthService } from '../application/services/user-auth.service'
import { UserIndexController } from './controllers/user-index.controller'

@Module({
  imports: [AuthModule],
  controllers: [UserCreateController, UserAuthController, UserIndexController],
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
    {
      provide: UserAuthService,
      useFactory: (
        userRepository: UserPrismaRepository,
        hash: HashProvider,
      ) => {
        return new UserAuthService(userRepository, hash)
      },
      inject: ['UserRepository', 'HashProvider'],
    },
  ],
})
export class UserModule {}
