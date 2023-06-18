import { Injectable } from '@nestjs/common';
import { ICreateUserDto } from './dtos/createUser.dtos';
import { hash } from 'bcrypt';
import { IUser } from './interface/user.interface';

@Injectable()
export class UserService {
  private users: IUser[] = [];

  async createUser(createUserDto: ICreateUserDto): Promise<IUser> {
    const saltOrRounds = 10;

    const password = await hash(createUserDto.password, saltOrRounds);

    const user = {
      ...createUserDto,
      id: (this.users.length = 1),
      password,
    };

    this.users.push(user);

    return user;
  }
}
