import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { environment } from '../environments/environment';

import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';
import { HashtagModule } from './hashtag/hashtag.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(environment.typeOrmConfig),
    HashtagModule,
    CategoryModule,
    AuthModule,
    UsersModule
  ],
  providers: []
})
export class AppModule {
}
