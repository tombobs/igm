import { IUser } from './user.interface';

export interface IJWT {
  exp: number;
  iat: number
  user: IUser;
}

export interface ILoginRequest {
  username: string;
  password: string;
}


export interface ILoginResponse {
  accessToken: string;
}

