import { IEnvironment } from './environment.interface';

export const environment: IEnvironment = {
  production: false,
  globalApiPrefix: 'api',
  auth: {
    jwtSecret: '!@£ERVET$W%TERWGETG',
    tokenExpiration: '60m'
  },
  port: 3333,
  typeOrmConfig: {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'igm',
    autoLoadEntities: true,
    synchronize: true
  }
};


