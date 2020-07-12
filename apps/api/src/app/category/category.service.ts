import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ICategory } from '@rly.gd/api-interfaces';
import { DeleteResult, Repository } from 'typeorm';
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

  async findWithHashtagCount(ids?: number[]): Promise<Category[]> {
    const query = this.categoryRepository
      .createQueryBuilder('category')
      .leftJoinAndSelect('category.hashtags', 'hashtag');

    console.log(ids );
    if (ids) {
      query.where('category.id IN (:...ids)', {ids});
    }

    const result = await query.getMany();
    return result.map(c => {
      c.hashtagCount = c.hashtags.length;
      return c;
    })
  }

  findById(id: string): Promise<Category> {
    return this.categoryRepository.findOne(id);
  }

  findWithHashtags(hashtagIds: string[]): Promise<Category[]> {
    return this.categoryRepository
      .createQueryBuilder('category')
      .leftJoinAndSelect('category.hashtags', 'hashtag')
      .where('hashtag.id IN (:...ids)', {ids: hashtagIds})
      .getMany();
  }

  addCategory(category: ICategory): Promise<Category> {
    return this.categoryRepository.save(category);
  }

  updateCategory(category: ICategory): Promise<Category> {
    return this.categoryRepository.save(category);
  }

  deleteCategory(categoryId: number): Promise<DeleteResult> {
    return this.categoryRepository.delete(categoryId)
  }
}
