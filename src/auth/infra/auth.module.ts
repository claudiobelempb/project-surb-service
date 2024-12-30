import { HashProvider } from '@/shared/application/providers/hash-provider/hash.provider'
import { EnvModule } from '@/shared/infra/env-config/env.module'
import { EnvService } from '@/shared/infra/env-config/env.service'
import { UserRepository } from '@/user/domain/repositories/user.repository'
import { UserModule } from '@/user/infra/user.module'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { SigninAuthService } from '../application/services/signin-auth.service'
import { JwtStrategy } from '../application/strategies/jwt.strategy'
import { SigninAuthController } from './controllers/signin-auth.controller'
import { JwtProvider } from '@/shared/application/providers/jwt-provider/jwt.provider'

@Module({
  imports: [
    EnvModule,
    UserModule,
    PassportModule,
    ConfigModule,
    JwtModule.registerAsync({
      imports: [EnvModule],
      inject: [EnvService],
      useFactory: async (env: EnvService) => {
        const privateKey = env.getJwtPrivateKey()
        const publicKey = env.getJwtPublicKey()
        return {
          global: true,
          privateKey: Buffer.from(privateKey, 'base64'),
          publicKey: Buffer.from(publicKey, 'base64'),
          signOptions: {
            algorithm: 'RS256',
            expiresIn: env.getJwtExpiresInSeconds(),
          },
        }
      },
    }),
  ],
  controllers: [SigninAuthController],
  providers: [
    JwtProvider,
    {
      provide: 'EnvService',
      useClass: EnvService,
    },
    {
      provide: 'HashProvider',
      useClass: HashProvider,
    },
    {
      provide: JwtStrategy,
      useFactory: (env: EnvService) => {
        return new JwtStrategy(env)
      },
      inject: ['EnvService'],
    },
    // {
    //   provide: JwtProvider,
    //   useFactory: (jwt: JwtService, env: EnvService) => {
    //     return new JwtProvider(jwt, env)
    //   },
    //   inject: ['EnvService'],
    // },
    {
      provide: SigninAuthService,
      useFactory: (userRepository: UserRepository, hash: HashProvider) => {
        return new SigninAuthService(userRepository, hash)
      },
      inject: ['UserRepository', 'HashProvider'],
    },
  ],

  exports: [],
})
export class AuthModule {}
