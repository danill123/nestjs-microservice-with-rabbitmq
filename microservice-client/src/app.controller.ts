import { Body, Controller, Get, HttpException, HttpStatus, Inject, Post, Put } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { UsersDto } from './dto/user.dto';
import { Message } from './message.event';
// import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(@Inject('HELLO_SERVICE') private readonly client: ClientProxy) { }

  async onApplicationBootstrap() {
    //await this.client.connect();
  }

  @Get()
  async getListUser() {
    try {
      let data = await this.client.send<any>('getlistuser', new Message('Hello World'));
      return data;
    } catch (error) {
      throw new HttpException('Error Internal', HttpStatus.INTERNAL_SERVER_ERROR); 
    }
  }

  @Post()
  async updateUser(@Body() userData: UsersDto) {
    try {
      let data = await this.client.send<any>('createnewuser', userData);
      return data;
    } catch (error) {
      throw new HttpException('Error Internal', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
