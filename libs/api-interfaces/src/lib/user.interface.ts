import { ICategory } from './category.interface';
import { IHashtag } from './hashtag.interface';
import { IHaveAnId } from './id.interface';

export interface IUser extends IHaveAnId {
  email: string;
  password?: string;
  categories?: ICategory[];
  hashtags?: IHashtag[];
}
