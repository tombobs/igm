import { ICategory, IHashtag } from '@rly.gd/api-interfaces';

export class Hashtag implements IHashtag {
  text: string;
  categories: ICategory[];

  constructor(text: string, categories?: ICategory[]) {
    this.text = text;
  }
}
