import { Module } from '@nestjs/common'
import { UserCreateController } from './controllers/user-create.controller'
import { UserCreateService } from '../application/services/user-create.service'

@Module({
  controllers: [UserCreateController],
  providers: [UserCreateService],
})
export class UserModule {}
