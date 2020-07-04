import { ICategory } from './category.interface';

export interface IHashtag {
  id?: number;
  text: string;
  categories?: ICategory[];
}

export interface IHashtagSearch {
   limit?: number;
   categoryIds?: number[];
}
