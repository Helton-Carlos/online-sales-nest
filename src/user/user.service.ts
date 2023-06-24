import { Injectable } from '@nestjs/common';
import { ICreateUserDto } from './dtos/createUser.dtos';
import { hash } from 'bcrypt';
import { UserEntity } from './interface/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {}

  async createUser(createUserDto: ICreateUserDto): Promise<UserEntity> {
    const saltOrRounds = 10;

    const password = await hash(createUserDto.password, saltOrRounds);

    return this.userRepository.save({
      ...createUserDto,
      password,
    });
  }

  async getAllUsers(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }
}
