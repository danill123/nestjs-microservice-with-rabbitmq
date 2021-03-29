import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqps://bkhgcrof:UYF5rHtolwzMj-8za_102G9dKyAly5y8@eagle.rmq.cloudamqp.com/bkhgcrof'],
      queue: 'user-messages',
      queueOptions: {
        durable: false
      },
    },
  });
  await app.listen(() => console.log('Microservice is listening'));
}
bootstrap();
