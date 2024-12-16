import { NestFactory } from '@nestjs/core'
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify'
import { AppConfig } from './app-config'
import { AppModule } from './app.module'
import { AppEnvService } from './shared/infra/env-config/app-env.service'
import { ConfigService } from '@nestjs/config'
import { AppValidationEnvType } from './shared/infra/env-config/app-validation-env'

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  )
  AppConfig(app)
  const env = app.get(AppEnvService)
  await app.listen(env.getAppPort(), '0.0.0.0')
}
bootstrap()
