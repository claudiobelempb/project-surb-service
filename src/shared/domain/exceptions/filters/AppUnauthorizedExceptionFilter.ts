import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common'
import { Response } from 'express'
import { ConstantException } from 'src/shared/utils/constants/ConstantException'
import { StandarError } from '@/shared/application/exceptions/StandarError'
import { AppConflictException } from '../AppConflictException'
import { AppUnauthorizedException } from '../AppUnauthorizedException'

@Catch(AppUnauthorizedException)
export class AppUnauthorizedExceptionFilter implements ExceptionFilter {
  catch(exception: StandarError, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>()
    const request = ctx.getRequest<Request>()
    const statusCode = exception.status ? exception.status : 401

    response.status(statusCode).send({
      timestamp: new Date().toISOString(),
      statusCode,
      error: ConstantException.UNAUTHORIZED,
      message: exception.message,
      path: request.url,
    })
  }
}
