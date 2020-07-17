import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from '../category/category.module';
import { UserMiddleware } from '../middleware';
import { Hashtag } from './hashtag';
import { HashtagController } from './hashtag.controller';
import { HashtagService } from './hashtag.service';


@Module({
  imports: [
    TypeOrmModule.forFeature([Hashtag]),
    // CategoryModule
  ],
  controllers: [HashtagController],
  providers: [HashtagService]
})
export class HashtagModule  {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer
  //     .apply(UserMiddleware)
  //     .forRoutes('*');
  // }
}
