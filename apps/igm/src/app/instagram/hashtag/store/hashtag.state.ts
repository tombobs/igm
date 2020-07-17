import { ICategory, IHashtag, IHashtagSearch } from '@rly.gd/api-interfaces';

export interface IHashtagState {
  hashtags: IHashtag[];
  selectedHashtag: IHashtag;
  hashtagsLoaded: boolean;
  hashtagsLoading: boolean;

  categories: ICategory[];
  selectedCategory: ICategory;
  categoriesLoading: boolean;
  categoriesLoaded: boolean;

  hashtagSearch: IHashtagSearch;
  hashtagSearchLoading: boolean;
  hashtagSearchResults: IHashtag[];
}

export const initialHashtagState: IHashtagState = {
  hashtags: null,
  hashtagsLoading: false,
  hashtagsLoaded: false,
  selectedHashtag: null,

  categories: null,
  selectedCategory: null,
  categoriesLoading: false,
  categoriesLoaded: false,

  hashtagSearch: {},
  hashtagSearchLoading: false,
  hashtagSearchResults: null
};
