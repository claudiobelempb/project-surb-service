import { INestApplication } from '@nestjs/common'
import { AppConflictExceptionFilter } from './shared/domain/exceptions/filters/AppConflictExceptionFilter'
import { AppNotFoundExceptionFilter } from './shared/domain/exceptions/filters/AppNotFoundExceptionFilter'
import { AppValidationExceptionFilter } from './shared/domain/exceptions/filters/AppValidationExceptionFilter'
import { AppBadRequestExceptionFilter } from './shared/infra/exeptions/filters/AppBadRequestExceptionFilter'
import { InvalidCredentialsExeptionFilter } from './shared/infra/exeptions/filters/AppInvalidCredentialsExceptioFilter'
import { InvalidPasswordExceptionFilter } from './shared/infra/exeptions/filters/AppInvalidPasswordExceptionFilter'

export function AppConfig(app: INestApplication) {
  app.setGlobalPrefix('api/v1')
  app.useGlobalFilters(
    new AppConflictExceptionFilter(),
    new AppNotFoundExceptionFilter(),
    new InvalidPasswordExceptionFilter(),
    new InvalidCredentialsExeptionFilter(),
    new AppValidationExceptionFilter(),
    new AppBadRequestExceptionFilter(),
  )
}
