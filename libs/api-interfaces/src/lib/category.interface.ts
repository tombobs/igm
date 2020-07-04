import { IHashtag } from '@rly.gd/api-interfaces';

export interface ICategory {
  id?: number;
  text: string;
  hashtags?: IHashtag[];
  hashtagCount?: number;
}
