import { INestApplication, Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app/app.module';

import { environment } from './environments/environment';
const _port = process.env.PORT || environment.port;

(async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix(environment.globalApiPrefix);
  app.useGlobalPipes(new ValidationPipe());

  if (!environment.production) {
    _enableSwagger(app);
  }

  await app.listen(_port, () => {
    Logger.log('Listening at http://localhost:' + _port + '/' + environment.globalApiPrefix);
  });
})();


function _enableSwagger(app: INestApplication) {
  const options = new DocumentBuilder()
    .setTitle('IGM')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(environment.globalApiPrefix, app, document);
}
