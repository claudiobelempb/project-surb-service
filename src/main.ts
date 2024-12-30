import { NestFactory } from '@nestjs/core'
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify'
import { AppConfig } from './app-config'
import { AppModule } from './app.module'
import { EnvService } from './shared/infra/env-config/env.service'

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  )
  AppConfig(app)
  const env = app.get(EnvService)
  await app.listen(env.getAppPort(), '0.0.0.0')
}
bootstrap()
