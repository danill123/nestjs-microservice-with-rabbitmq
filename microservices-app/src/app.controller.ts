import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { User } from './database/model/user.entity';
/* 
  microservice using rabbitmq 
  structure : client -> microservice-client
              provider -> microservice-app
*/
@Controller()
export class AppController {
  constructor(private readonly service: AppService) {}

  @EventPattern('getlistuser')
  async procedlistuser(data: Record<string, unknown>) {
    console.log("semula")
    return this.service.getUserList();
  }

  @EventPattern('createnewuser')
  async createnewuser(data: User) {
    return this.service.createNewUser(data);
  }
}
