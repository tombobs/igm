import { ICategory, IHashtag } from '@rly.gd/api-interfaces';
import { AfterLoad, Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('category')
export class Category implements ICategory {

  constructor(category: ICategory) {
    this.text = category && category.text;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @ManyToMany('Hashtag', 'categories')
  hashtags: IHashtag[];

  hashtagCount: number;

  static create(category: ICategory): Category {
    return new Category(category);
  }
}
