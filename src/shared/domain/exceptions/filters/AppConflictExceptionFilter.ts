import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Response } from 'express';
import { ConstantException } from 'src/shared/utils/constants/ConstantException';
import { StandarError } from 'src/shared/utils/exceptions/StandarError';
import { AppConflictException } from '../AppConflictException';

@Catch(AppConflictException)
export class AppConflictExceptionFilter implements ExceptionFilter {
  catch(exception: StandarError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const statusCode = exception.status ? exception.status : 409;

    response.status(statusCode).send({
      timestamp: new Date().toISOString(),
      statusCode,
      error: ConstantException.CONFICT,
      message: exception.message,
      path: request.url,
    });
  }
}
