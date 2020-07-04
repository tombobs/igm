import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IHashtag } from '@rly.gd/api-interfaces';
import { Repository } from 'typeorm';
import { Category } from '../category/category';
import { Hashtag } from './hashtag';

@Injectable()
export class HashtagService {
  constructor(@InjectRepository(Hashtag)
              private hashtagsRepository: Repository<Hashtag>) {
  }

  find(): Promise<Hashtag[]> {
    return this.hashtagsRepository.find();
  }

  findWithCategories(): Promise<Hashtag[]> {
    return this.hashtagsRepository
      .createQueryBuilder('hashtag')
      .leftJoinAndSelect('hashtag.categories', 'category')
      .getMany();
  }

  findById(id: string): Promise<Hashtag> {
    return this.hashtagsRepository.findOne(id);
  }

  addHashtag(hashtag: IHashtag): Promise<Hashtag> {
    return this.hashtagsRepository.save(hashtag);
  }
}
