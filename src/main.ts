import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // Global validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // strips unrecognized fields
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

    // ✅ Static assets setup
  app.useStaticAssets(join(__dirname, '..', 'pictures'), {
    prefix: '/pictures',
  });

  app.enableCors({
    origin: 'http://localhost:4200', // your Angular app's address
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Authorization',
  });

  const config = new DocumentBuilder()
    .setTitle('Student Academic Management API')
    .setDescription('API documentation for the student system')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
