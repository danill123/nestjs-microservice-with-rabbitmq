import { Inject, Injectable } from '@nestjs/common';
import { User } from './database/model/user.entity';

@Injectable()
export class AppService {
  constructor(
    @Inject('USERS_REPOSITORY') private usersRepository: typeof User
  ){}

  getHello(): string {
    return 'Hello World!';
  }

  async getUserList(): Promise<User[]> {
    return this.usersRepository.findAll<User>();
  }

  async createNewUser(user: User): Promise<User> {
    return this.usersRepository.create<User>(user);
  }
}
