import { Controller, Get, Post, Body } from '@nestjs/common';
import { ICreateUser } from './dtos/createUser.dtos';

@Controller('user')
export class UserController {
  @Get()
  async getAllUsers() {
    return JSON.stringify({ test: 'abc' });
  }

  @Post()
  async createUsers(@Body() createUsers: ICreateUser) {
    return {
      ...createUsers,
      password: undefined,
    };
  }
}
