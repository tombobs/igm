import { ICategory, IHashtag, IHashtagSearch } from '@rly.gd/api-interfaces';

export interface IHashtagState {
  hashtags: IHashtag[];
  selectedHashtag: IHashtag;
  hashtagsLoading: boolean;

  categories: ICategory[];
  selectedCategory: ICategory;
  categoriesLoading: boolean;

  hashtagSearch: IHashtagSearch;
  hashtagSearchLoading: boolean;
  hashtagSearchResults: IHashtag[];
}

export const initialHashtagState: IHashtagState = {
  hashtags: null,
  hashtagsLoading: false,
  selectedHashtag: null,

  categories: null,
  selectedCategory: null,
  categoriesLoading: false,

  hashtagSearch: {},
  hashtagSearchLoading: false,
  hashtagSearchResults: null
};
