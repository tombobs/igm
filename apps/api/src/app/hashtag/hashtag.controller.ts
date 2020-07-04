import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { IHashtag } from '@rly.gd/api-interfaces';
import { Hashtag } from './hashtag';
import { HashtagService } from './hashtag.service';

@Controller('hashtag')
export class HashtagController {

  constructor(private hashtagsService: HashtagService) {
  }
  
  @Get('/')
  find(): Promise<IHashtag[]> {
    return this.hashtagsService.find();
  }

  @Get('/:id')
  findById(@Param('id') id: string): Promise<IHashtag> {
    return this.hashtagsService.findById(id);
  }

  @Post()
  @HttpCode(201)
  create(@Body() hashtag: IHashtag): Promise<Hashtag> {
    return this.hashtagsService.addHashtag(hashtag);
  }
}
