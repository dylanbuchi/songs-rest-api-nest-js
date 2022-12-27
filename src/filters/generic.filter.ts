import { ArgumentsHost, ExceptionFilter, HttpStatus } from '@nestjs/common';
import { Response } from 'express';

export class GenericExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const http = host.switchToHttp();
    const response = http.getResponse<Response>();

    return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      errorMessage: exception?.message || 'An unexpected error occurred!',
      source: 'GenericExceptionFilter',
    });
  }
}
