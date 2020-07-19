import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IUser } from '@rly.gd/api-interfaces';
import { Repository } from 'typeorm';
import { User } from './user';


@Injectable()
export class UsersService {

  constructor(@InjectRepository(User)
              private usersRepository: Repository<IUser>) {
  }

  async create(user: IUser): Promise<IUser> {
    return this.usersRepository.save(user);
  }

  async findOne(username: string): Promise<IUser> {
    return this.usersRepository.findOne({email: username});
  }

  async validate(username: string, password: string): Promise<IUser> {
    return this.usersRepository.findOne({email: username, password});
  }

  async exists(user: IUser): Promise<boolean> {
    return !!(await this.usersRepository.findOne({email: user.email}));
  }
}
