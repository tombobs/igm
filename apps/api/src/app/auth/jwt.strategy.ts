import { IJWT, IUser } from '@rly.gd/api-interfaces';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { environment } from '../../environments/environment';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: environment.auth.jwtSecret,
    });
  }

  async validate(payload: IJWT): Promise<IUser> {
    return { id: payload.user.id, email: payload.user.email };
  }
}
