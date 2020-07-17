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

  async find(userId: number, ids?: number[]): Promise<Category[]> {
    const query = this.categoryRepository
      .createQueryBuilder('category')
      .leftJoinAndSelect('category.hashtags', 'hashtag')
      .leftJoinAndSelect('category.user', 'user')
      .where('user.id = :userId', {userId});

    if (ids) {
      query.where('category.id IN (:...ids)', { ids });
    }

    const result = await query.getMany();

    return result;
  }

  // findWithHashtags(userId: number, hashtagIds: string[]): Promise<Category[]> {
  //   return this.categoryRepository
  //     .createQueryBuilder('category')
  //     .leftJoinAndSelect('category.hashtags', 'hashtag')
  //     .where('hashtag.id IN (:...ids)', {ids: hashtagIds})
  //     .leftJoinAndSelect('category.user', 'user')
  //     .where('user.id = :userId', {userId})
  //     .getMany();
  // }

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
