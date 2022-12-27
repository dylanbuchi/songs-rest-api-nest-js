import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';

import { Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const http = host.switchToHttp();

    const response: Response = http.getResponse();
    const statusCode = exception.getStatus();

    response.status(statusCode).json({
      response: exception.getResponse(),
      source: HttpExceptionFilter.name,
    });
  }
}
