import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { User } from './database/model/user.entity';

@Controller()
export class AppController {
  constructor(private readonly service: AppService) {}

  @EventPattern('getlistuser')
  async procedlistuser(data: Record<string, unknown>) {
    console.log(data.text);
    return this.service.getUserList();
  }

  @EventPattern('createnewuser')
  async createnewuser(data: User) {
    return this.service.createNewUser(data);
  }
}
