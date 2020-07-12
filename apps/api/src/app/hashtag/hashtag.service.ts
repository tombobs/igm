import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IHashtag } from '@rly.gd/api-interfaces';
import { DeleteResult, Repository } from 'typeorm';
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

  findWithCategories(ids: number[]): Promise<Hashtag[]> {
    const query = this.hashtagsRepository
      .createQueryBuilder('hashtag')
      .leftJoinAndSelect('hashtag.categories', 'category');

    if (ids) {
      query.where('hashtag.id IN (:...ids)', {ids});
    }

    return query.getMany();
  }

  async generate(categoryIds: string[]): Promise<Hashtag[]> {
    const hashtags = await this.hashtagsRepository
      .createQueryBuilder('hashtag')
      .leftJoinAndSelect('hashtag.categories', 'category')
      .where('category.id IN (:...ids)', {ids: categoryIds})
      .getMany();

    this.shuffleHashtags(hashtags);
    return hashtags;
  }

  addHashtag(hashtag: IHashtag): Promise<Hashtag> {
    return this.hashtagsRepository.save(hashtag);
  }

  updateHashtag(hashtag: IHashtag): Promise<Hashtag> {
    return this.hashtagsRepository.save(hashtag);
  }

  deleteHashtag(hashtagId: number): Promise<DeleteResult> {
    return this.hashtagsRepository.delete(hashtagId);
  }

  private shuffleHashtags(hashtags: IHashtag[]): void {
    for (let i = hashtags.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [hashtags[i], hashtags[j]] = [hashtags[j], hashtags[i]];
    }
  }
}
