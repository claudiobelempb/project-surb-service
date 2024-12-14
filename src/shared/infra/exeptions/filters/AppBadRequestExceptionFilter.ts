import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common'
import { Request, Response } from 'express'
import { ConstantException } from 'src/shared/utils/constants/ConstantException'
import { AppBadRequestException } from '../AppBadRequestException'
import { StandarError } from 'src/shared/utils/exceptions/StandarError'

@Catch(AppBadRequestException)
export class AppBadRequestExceptionFilter implements ExceptionFilter {
  catch(exception: StandarError, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>()
    const request = ctx.getRequest<Request>()

    const statusCode = exception.status ? exception.status : 400
    // const exceptionResponse = exception.getResponse();

    // const error =
    //   typeof response === 'string'
    //     ? { message: exceptionResponse }
    //     : (exceptionResponse as object);

    response.status(statusCode).send({
      timestamp: new Date().toISOString(),
      statusCode,
      error: ConstantException.BAD_REQUEST,
      message: exception.message,
      path: request.url,
    })
  }
}
