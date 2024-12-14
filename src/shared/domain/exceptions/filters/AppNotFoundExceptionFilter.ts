import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Response } from 'express';
import { ConstantException } from 'src/shared/utils/constants/ConstantException';
import { AppNotFoundException } from '../AppNotFoundException';
import { StandarError } from 'src/shared/utils/exceptions/StandarError';

@Catch(AppNotFoundException)
export class AppNotFoundExceptionFilter implements ExceptionFilter {
  catch(exception: StandarError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const statusCode = exception.status ? exception.status : 404;

    response.status(statusCode).send({
      timestamp: new Date().toISOString(),
      statusCode,
      error: ConstantException.NOT_FOUND,
      message: exception.message,
      path: request.url,
    });
  }
}
