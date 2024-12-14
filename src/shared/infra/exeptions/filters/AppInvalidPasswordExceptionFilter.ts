import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';
import { ConstantException } from 'src/shared/utils/constants/ConstantException';
import { AppInvalidPasswordException } from '../AppInvalidPasswordException';
import { StandarError } from 'src/shared/utils/exceptions/StandarError';

@Catch(AppInvalidPasswordException)
export class InvalidPasswordExceptionFilter implements ExceptionFilter {
  catch(exception: StandarError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const statusCode = exception.status ? exception.status : 422;

    response.status(statusCode).send({
      timestamp: new Date().toISOString(),
      statusCode,
      error: ConstantException.UNPROCESSABLE_ENTITY,
      message: exception.message,
      path: request.url,
    });
  }
}
