import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query } from '@nestjs/common';
import { IHashtag } from '@rly.gd/api-interfaces';
import { DeleteResult } from 'typeorm';
import { Hashtag } from './hashtag';
import { HashtagService } from './hashtag.service';

@Controller('hashtag')
export class HashtagController {

  constructor(private hashtagsService: HashtagService) {
  }

  @Get('/generate')
  generate(@Query('categoryIds') categoryIds: string): Promise<IHashtag[]> {
    return this.hashtagsService.generate(categoryIds.split(','));
  }

  @Get('/with-categories')
  findWithCategories(@Query('ids') ids: string): Promise<IHashtag[]> {
    const idArray = ids ? ids.split(',').map(id => Number(id)) : null;
    return this.hashtagsService.findWithCategories(idArray);
  }


  @Post()
  @HttpCode(201)
  create(@Body() hashtag: IHashtag): Promise<Hashtag> {
    return this.hashtagsService.addHashtag(hashtag);
  }

  @Put('/:id')
  update(@Param('id') id: string,
         @Body() hashtag: IHashtag): Promise<Hashtag> {

    return this.hashtagsService.updateHashtag(hashtag);
  }

  @Delete('/:id')
  remove(@Param('id') id: string): Promise<DeleteResult> {
    return this.hashtagsService.deleteHashtag(Number(id));
  }
}
