import { Injectable } from '@nestjs/common';
import { ICreateUserDto } from './dtos/createUser.dtos';
import { IUser } from './interface/user.interface';

@Injectable()
export class UserService {
  private user: IUser[] = [];

  async createUser(createUserDto: ICreateUserDto): Promise<IUser> {
    return {
      ...createUserDto,
      id: 1,
    };
  }
}
