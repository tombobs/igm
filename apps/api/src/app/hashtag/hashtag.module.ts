import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from '../category/category.module';
import { Hashtag } from './hashtag';
import { HashtagController } from './hashtag.controller';
import { HashtagService } from './hashtag.service';


@Module({
  imports: [TypeOrmModule.forFeature([Hashtag]), CategoryModule],
  controllers: [HashtagController],
  providers: [HashtagService]
})
export class HashtagModule {}
