import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmModuleOptions } from './app.config';

import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';
import { HashtagModule } from './hashtag/hashtag.module';
import { UserMiddleware } from './middleware';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmModuleOptions),
    HashtagModule,
    CategoryModule,
    AuthModule,
    UsersModule
  ],
  providers: []
})
export class AppModule {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer
  //     .apply(UserMiddleware)
  //     .forRoutes('*');
  // }
}
