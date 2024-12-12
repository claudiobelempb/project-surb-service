import { INestApplication } from '@nestjs/common';

export function AppConfig(app: INestApplication) {
  app.setGlobalPrefix('api/v1');
}
