import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export interface IEnvironment {
   production: boolean;
   typeOrmConfig: TypeOrmModuleOptions;
   port: number;
   globalApiPrefix: string;
   auth: {
     tokenExpiration: string;
     jwtSecret: string;
   }
}
