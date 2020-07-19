import { ICategory, IHashtag, IUser } from '@rly.gd/api-interfaces';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User implements IUser {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany('Category', 'user')
  categories: ICategory[];

  @OneToMany('Hashtag', 'user')
  hashtags: IHashtag[];
}
