import { Injectable, NestMiddleware } from '@nestjs/common';
import { IJWT } from '@rly.gd/api-interfaces';
import { Request, Response } from 'express';
import * as jwtDecode from 'jwt-decode';

@Injectable()
export class UserMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    const authHeader = req.header('Authorization');
    const authHeaderParts = authHeader && authHeader.split('Bearer ');
    const token = authHeaderParts && authHeaderParts[1];
    if (token) {
      const decodedToken = jwtDecode<IJWT>(token);
      req.user = decodedToken;
    }
    next();
  }
}
