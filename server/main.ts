import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './utils/http-exception.filter';
import { ErrorFilter } from './utils/error.filter';
import { Logger } from '@nestjs/common';
import { ValidationPipe } from './utils/validation.pipe';
import * as compression from 'compression';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;
  app.useGlobalPipes(new ValidationPipe());
  app.use(compression());
  app.setGlobalPrefix('api');
  app.useGlobalFilters(new ErrorFilter(), new HttpExceptionFilter());
  await app.listen(port, () => {
    new Logger('NestApplication').log(`Listening at http://localhost:${port}`);
  });
}

bootstrap();
