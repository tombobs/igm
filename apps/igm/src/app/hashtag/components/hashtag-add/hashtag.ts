import { ICategory, IHashtag } from '@rly.gd/api-interfaces';

export class Hashtag implements IHashtag {
  text: string;
  categories: ICategory[];

  constructor(text: string, categories?: ICategory[]) {
    this.text = text;
  }

  static compare(hashtag1: IHashtag, hashtag2: IHashtag): boolean {
    return hashtag1 && hashtag2 && hashtag1.id === hashtag2.id;
  }

  // return all hashtags in source but not in target
  static arrayDiff(sourceHashtags: IHashtag[], targetHashtags: IHashtag[]): IHashtag[] {
    return sourceHashtags.filter(sHash => !targetHashtags.some(tHash => Hashtag.compare(sHash, tHash)));
  }


}
