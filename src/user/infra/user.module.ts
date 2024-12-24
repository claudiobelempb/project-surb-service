import { HashProvider } from '@/shared/application/providers/hash.provider'
import { PrismaService } from '@/shared/infra/database/prisma/prima.service'
import { Module } from '@nestjs/common'
import { UserCreateService } from '../application/services/user-create.service'
import { UserRepository } from '../domain/repositories/user.repository'
import { UserCreateController } from './controllers/user-create.controller'
import { UserAuthController } from './controllers/user-auth.controller'
import { AuthModule } from '@/auth/infra/auth.module'
import { UserAuthService } from '../application/services/user-auth.service'
import { UserFindAllController } from './controllers/user-findall.controller'
import { UserFindAllService } from '../application/services/user-findall.service'

@Module({
  imports: [AuthModule],
  controllers: [
    UserCreateController,
    UserAuthController,
    UserFindAllController,
  ],
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
      provide: UserAuthService,
      useFactory: (userRepository: UserRepository, hash: HashProvider) => {
        return new UserAuthService(userRepository, hash)
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
})
export class UserModule {}
