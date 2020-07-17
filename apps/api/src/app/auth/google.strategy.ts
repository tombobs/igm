// import { IUser } from '@rly.gd/api-interfaces';
// import { ExtractJwt, Strategy } from 'passport-jwt';
// import { PassportStrategy } from '@nestjs/passport';
// import { Injectable } from '@nestjs/common';
// import { jwtConstants } from './constants';
//
// @Injectable()
// export class JwtStrategy extends PassportStrategy(Strategy) {
//   constructor() {
//     super({
//       jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//       ignoreExpiration: false,
//       secretOrKey: jwtConstants.secret,
//     });
//   }
//
//   async validate(payload: any): Promise<IUser> {
//     console.log(payload);
//     // return { id: payload.sub, username: payload.username };
//   }
// }
