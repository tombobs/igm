import { ICategory, IHashtag } from '@rly.gd/api-interfaces';
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('hashtag')
export class Hashtag implements IHashtag {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @ManyToMany('Category', 'hashtags')
  @JoinTable({name: 'hashtag_categories'})
  categories: ICategory[];

  // static create(hashtag: IHashtag): Hashtag {
  //   const h = new Hashtag();
  //   h.text = hashtag.text;
  //   h.categories = hashtag.categories.map(c => Category.create(c));
  //   return h;
  // }
}
