import { ICategory } from '@rly.gd/api-interfaces';

export class Category implements ICategory {

  text: string;
  id?: number

  constructor(text: string) {
    this.text = text;
  }

  static compare(category1: ICategory, category2: ICategory): boolean {
    return category1 && category2 && category1.id === category2.id;
  }

  // return all categories in source but not in target
  static arrayDiff(sourceCategories: ICategory[], targetCategories: ICategory[]): ICategory[] {
    return sourceCategories.filter(sCat => !targetCategories.some(tCat => Category.compare(sCat, tCat)));
  }
}
