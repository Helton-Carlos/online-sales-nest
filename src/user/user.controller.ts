import { Controller, Get, Post, Body } from '@nestjs/common';
import { ICreateUserDto } from './dtos/createUser.dtos';
import { IUser } from './interface/user.interface';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUsers(@Body() createUsers: ICreateUserDto): Promise<IUser> {
    return this.userService.createUser(createUsers);
  }

  @Get()
  async getAllUsers(): Promise<IUser[]> {
    return this.userService.getAllUsers();
  }
}
