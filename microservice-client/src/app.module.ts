import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Transport, ClientsModule } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'HELLO_SERVICE', 
        transport: Transport.RMQ,
        options: {
          urls: ['amqps://bkhgcrof:UYF5rHtolwzMj-8za_102G9dKyAly5y8@eagle.rmq.cloudamqp.com/bkhgcrof'],
          queue: 'user-messages',
          queueOptions: {
            durable: false
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}
