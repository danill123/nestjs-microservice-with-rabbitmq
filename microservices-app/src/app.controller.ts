import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { User } from './database/model/user.entity';
/* 
  microservice using rabbitmq 
*/
let data : string = "hello";
@Controller()
export class AppController {
  constructor(private readonly service: AppService) {}

  @EventPattern('getlistuser')
  async procedlistusermicroservice(data: Record<string, unknown>) {
    console.log("endpoint procedlistuser")
    return (await this.service.getUserList()).toString;
  }

  @EventPattern('createnewuser')
  async createnewuser(data: User) {
    return this.service.createNewUser(data);
  }
}
