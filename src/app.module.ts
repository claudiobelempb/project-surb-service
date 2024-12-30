import { Module } from '@nestjs/common'
import { DatabaseModule } from './shared/infra/database/database.module'
import { EnvModule } from './shared/infra/env-config/env.module'
import { TimeModule } from './time/infra/time.module'
import { UserModule } from './user/infra/user.module'
import { AuthModule } from './auth/infra/auth.module'

@Module({
  imports: [
    EnvModule.forRoot(),
    UserModule,
    AuthModule,
    DatabaseModule,
    TimeModule,
  ],
  controllers: [],
  providers: [EnvModule],
})
export class AppModule {}
