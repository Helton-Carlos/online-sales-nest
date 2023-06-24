import { Controller, Get, Post, Body } from '@nestjs/common';
import { ICreateUserDto } from './dtos/createUser.dtos';
import { UserEntity } from './interface/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUsers(@Body() createUsers: ICreateUserDto): Promise<UserEntity> {
    return this.userService.createUser(createUsers);
  }

  @Get()
  async getAllUsers(): Promise<UserEntity[]> {
    return this.userService.getAllUsers();
  }
}
