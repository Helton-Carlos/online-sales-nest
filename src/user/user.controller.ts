import { Controller, Get, Post, Body } from '@nestjs/common';
import { ICreateUserDto } from './dtos/createUser.dtos';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUsers() {
    return JSON.stringify({ name: 'Helton Brito' });
  }

  @Post()
  async createUsers(@Body() createUsers: ICreateUserDto) {
    return this.userService.createUser(createUsers);
  }
}
