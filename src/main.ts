import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { TransformInterceptor } from './interceptors/transform.interceptor';
import * as helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Helmet security (14 http middlewares securities)
  app.use(helmet());

  app.useGlobalInterceptors(new LoggingInterceptor());
  //app.useGlobalInterceptors(new TransformInterceptor());

  // Enabling Cross-origin resource sharing (CORS)
  app.enableCors();

  await app.listen(3000);
}
bootstrap();
