import { ICategory, IHashtag, IUser } from '@rly.gd/api-interfaces';
import { AfterLoad, Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

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

  @ManyToOne('User', 'categories')
  user: IUser;

  static create(category: ICategory): Category {
    return new Category(category);
  }
}
