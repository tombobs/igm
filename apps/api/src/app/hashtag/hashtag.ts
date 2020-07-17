import { ICategory, IHashtag, IUser } from '@rly.gd/api-interfaces';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../users/user';

@Entity('hashtag')
export class Hashtag implements IHashtag {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @ManyToMany('Category', 'hashtags')
  @JoinTable({name: 'hashtag_categories'})
  categories: ICategory[];

  @ManyToOne(type => User, user => user.hashtags)
  user: IUser;
}
