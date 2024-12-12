import { NestFactory } from '@nestjs/core'
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify'
import { AppConfig } from './app-config'
import { AppModule } from './app.module'
import { AppEnvService } from './shared/infra/env-config/app-env.service'

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  )
  AppConfig(app)
  const envService = app.get(AppEnvService)
  await app.listen(envService.getAppPort(), '0.0.0.0')
}
bootstrap()
