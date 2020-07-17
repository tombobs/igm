
import { INestApplication, Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { globalPrefix, port, swaggerOptions } from './app/app.config';
const _port = process.env.PORT || port;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix(globalPrefix);

  if (swaggerOptions.enable) {
    enableSwagger(app);
  }

  await app.listen(_port, () => {
    Logger.log('Listening at http://localhost:' + _port + '/' + globalPrefix);
  });
}

bootstrap();

function enableSwagger(app: INestApplication) {
  const options = new DocumentBuilder()
    .setTitle('IGM')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(globalPrefix, app, document);
}
