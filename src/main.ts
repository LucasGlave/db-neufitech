import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('Starting application...', 3000);
  let main = await app.listen(3000);
  // console.log(main, 'Main');
}
bootstrap();
