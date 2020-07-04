import { ICategory } from '@rly.gd/api-interfaces';

export class Category implements ICategory {
  text: string;

  constructor(text: string) {
    this.text = text;
  }
}
