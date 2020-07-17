import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ILoginResponse, IUser } from '@rly.gd/api-interfaces';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService,
              private jwtService: JwtService) {
  }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: IUser): Promise<ILoginResponse> {
    const {password, ...userNoPassword} = user;
    const accessToken = this.jwtService.sign({user: userNoPassword});
    return { accessToken };
  }


}
