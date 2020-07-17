import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { IHashtag, IUser } from '@rly.gd/api-interfaces';
import { DeleteResult } from 'typeorm';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { User } from '../users/user.decorator';
import { Hashtag } from './hashtag';
import { HashtagService } from './hashtag.service';

@Controller('hashtag')
@UseGuards(JwtAuthGuard)
export class HashtagController {

  constructor(private hashtagsService: HashtagService) {
  }

  @Get('/generate')
  generate(@Query('categoryIds') categoryIds: string,
           @User() user: IUser): Promise<IHashtag[]> {
    return this.hashtagsService.generate(categoryIds.split(','), user.id);
  }

  @Get('/with-categories')
  findWithCategories(@Query() {ids}: {ids?: number[]} = {},
                     @User() user: IUser): Promise<IHashtag[]> {
    return this.hashtagsService.findWithCategories(ids, user.id);
  }

  @Post()
  @HttpCode(201)
  create(@Body() hashtag: IHashtag,
         @User() user: IUser): Promise<Hashtag> {
    hashtag.user = user;
    return this.hashtagsService.addHashtag(hashtag);
  }

  @Put('/:id')
  update(@Body() hashtag: IHashtag,
         @User() user: IUser): Promise<Hashtag> {
    hashtag.user = user;
    return this.hashtagsService.updateHashtag(hashtag);
  }

  @Delete('/:id')
  remove(@Param('id') id: number,
         @User() user: IUser): Promise<DeleteResult> {
    return this.hashtagsService.deleteHashtag(id);
  }
}
