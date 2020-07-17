import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { IUser } from '@rly.gd/api-interfaces';
import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt.guard';
import { LocalAuthGuard } from './local.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService,
              private usersService: UsersService) {
  }

  @Post('register')
  async register(@Body() user: IUser) {
    const createdUser = await this.usersService.create(user);
    return this.authService.login(createdUser)
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
