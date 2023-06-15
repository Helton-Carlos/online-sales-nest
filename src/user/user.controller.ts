import { Controller, Get, Post, Body } from '@nestjs/common';
import { ICreateUserDto } from './dtos/createUser.dtos';

@Controller('user')
export class UserController {
  @Get()
  async getAllUsers() {
    return JSON.stringify({ name: 'Helton Brito' });
  }

  @Post()
  async createUsers(@Body() createUsers: ICreateUserDto) {
    const result = 'britoName';

    return {
      ...createUsers,
      password: result,
    };
  }
}
