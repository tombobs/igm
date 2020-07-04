import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ICategory } from '@rly.gd/api-interfaces';
import { Repository } from 'typeorm';
import { Hashtag } from '../hashtag/hashtag';
import { Category } from './category';

@Injectable()
export class CategoryService {
  constructor(@InjectRepository(Category)
              private categoryRepository: Repository<Category>) {
  }

  find(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  async findWithHashtagCount(): Promise<Category[]> {
    const query = this.categoryRepository
      .createQueryBuilder('category')
      .leftJoinAndSelect('category.hashtags', 'hashtag');

    const result = await query.getMany();
    return result.map(c => {
      c.hashtagCount = c.hashtags.length;
      return c;
    })
  }

  findById(id: string): Promise<Category> {
    return this.categoryRepository.findOne(id);
  }

  addCategory(category: ICategory): Promise<Category> {
    return this.categoryRepository.save(category);
  }
}
