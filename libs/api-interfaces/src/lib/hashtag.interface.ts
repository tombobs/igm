import { ICategory } from './category.interface';
import { IHaveAnId } from './id.interface';
import { IUser } from './user.interface';

export interface IHashtag extends IHaveAnId {
  text: string;
  categories?: ICategory[];
  user?: IUser;
}

export interface IHashtagSearch {
   limit?: number;
   categoryIds?: number[];
}
