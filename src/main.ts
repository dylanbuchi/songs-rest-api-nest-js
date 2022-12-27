import { NestFactory } from '@nestjs/core';
import mongoose, { MongooseOptions } from 'mongoose';

import { AppModule } from './app.module';
import { HttpExceptionFilter } from 'filters/http.filter';
import { GenericExceptionFilter } from 'filters/generic.filter';
import { ValidationPipe } from '@nestjs/common';

const mongooseConfig: [keyof MongooseOptions, boolean][] = [
  ['returnOriginal', false],
  ['runValidators', true],
  ['sanitizeFilter', true],
];

for (const [option, bool] of mongooseConfig) mongoose.set(option, bool);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('/api');
  app.useGlobalFilters(new GenericExceptionFilter(), new HttpExceptionFilter());
  app.useGlobalPipes(new ValidationPipe({ skipMissingProperties: true }));

  const PORT = process.env.PORT;

  await app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });
}

bootstrap();
