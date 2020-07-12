import { Action, createReducer, on } from '@ngrx/store';
import { add, remove, replace } from '../../store/helpers';
import {
  addCategorySuccess,
  addHashtagSuccess,
  deleteCategorySuccess,
  deleteHashtagSuccess,
  getCategories,
  getCategoriesSuccess,
  getHashtags,
  getHashtagsSuccess,
  searchHashtags,
  searchHashtagsSuccess,
  selectCategory,
  selectHashtag,
  updateCategorySuccess,
  updateHashtagSuccess
} from './hashtag.actions';
import { IHashtagState, initialHashtagState } from './hashtag.state';

const _hashtagReducer = createReducer(
  initialHashtagState,
  on(getHashtags, state => {
    return { ...state, hashtagsLoading: true };
  }),
  on(getHashtagsSuccess, (state, { hashtags }) => {
    return { ...state, hashtags, hashtagsLoading: false };
  }),
  on(selectHashtag, (state, { hashtag }) => {
    return { ...state, selectedHashtag: hashtag };
  }),
  on(searchHashtags, state => {
    return { ...state, hashtagsLoading: true, hashtagSearchResults: [] };
  }),
  on(searchHashtagsSuccess, (state, { hashtags }) => {
    return { ...state, hashtagsLoading: false, hashtagSearchResults: hashtags };
  }),
  on(addHashtagSuccess, (state, { hashtag }) => {
    const hashtags = add(state.hashtags, hashtag);
    return { ...state, hashtags, selectedHashtag: hashtag };
  }),
  on(deleteHashtagSuccess, (state, { hashtag }) => {
    const hashtags = remove(state.hashtags, hashtag);
    return { ...state, hashtags, selectedHashtag: null };
  }),
  on(updateHashtagSuccess, (state, { hashtag }) => {
    const hashtags = replace(state.hashtags, hashtag);
    return { ...state, hashtags, selectedHashtag: hashtag };
  }),

  /*
  Categories
   */
  on(getCategories, state => {
    return { ...state, categoriesLoading: true, categories: [] };
  }),
  on(getCategoriesSuccess, (state, { categories }) => {
    return { ...state, categoriesLoading: false, categories: categories };
  }),
  on(selectCategory, (state, { category }) => {
    return { ...state, selectedCategory: category };
  }),
  on(addCategorySuccess, ((state, { category }) => {
    const categories = add(state.categories, category);
    return { ...state, categories, selectedCategory: category };
  })),
  on(deleteCategorySuccess, (state, { category }) => {
    const categories = remove(state.categories, category);
    return { ...state, categories, selectedCategory: null };
  }),
  on(updateCategorySuccess, (state, { category }) => {
    const categories = replace(state.categories, category);
    return { ...state, categories, selectedCategory: category };
  })
);

export function hashtagReducer(state: IHashtagState | undefined, action: Action) {
  return _hashtagReducer(state, action);
}
