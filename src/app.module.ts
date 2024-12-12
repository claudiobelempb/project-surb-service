import { Module } from '@nestjs/common'
import { DatabaseModule } from './shared/infra/database/database.module'
import { AppEnvModule } from './shared/infra/env-config/app-env.module'
import { AppEnvService } from './shared/infra/env-config/app-env.service'
import { UserModule } from './user/infra/user.module'

@Module({
  imports: [AppEnvModule.forRoot(), UserModule, DatabaseModule],
  controllers: [],
  providers: [AppEnvService],
})
export class AppModule {}
