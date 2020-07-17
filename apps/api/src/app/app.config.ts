import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const globalPrefix = 'api';
export const port = 3333;

export const tokenExpiration = '15m';


export const swaggerOptions = {
  enable: true
};

export const typeOrmModuleOptions: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'password',
  database: 'igm',
  autoLoadEntities: true,
  synchronize: true
};
