import { IHashtag, IUser } from '@rly.gd/api-interfaces';
import { IHaveAnId } from './id.interface';

export interface ICategory extends IHaveAnId {
  text: string;
  hashtags?: IHashtag[];
  hashtagCount?: number;
  user?: IUser;
}
