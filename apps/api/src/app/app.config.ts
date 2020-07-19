import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const globalPrefix = 'api';
export const port = 3333;

export const tokenExpiration = '60m';


export const environment = {
  production: false
};

// export const typeOrmModuleOptions: TypeOrmModuleOptions = ;
