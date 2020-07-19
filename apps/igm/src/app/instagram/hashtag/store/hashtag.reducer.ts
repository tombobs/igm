import { categoriesLoaded, hashtags, hashtagsLoaded } from '@igm/instagram/hashtag/store/hashtag.selectors';
import { logout } from '@igm/store';
import { Action, createReducer, on } from '@ngrx/store';
import { add, remove, removeFromAll, replace } from '@igm/store/helpers';
import {
  addCategorySuccess,
  addHashtagSuccess,
  clearHashtagSearchResults,
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
    return { ...state, hashtagsLoading: !state.hashtagsLoaded };
  }),
  on(getHashtagsSuccess, (state, { hashtags }) => {
    return { ...state, hashtags, hashtagsLoading: false, hashtagsLoaded: true };
  }),
  on(selectHashtag, (state, { hashtag }) => {
    return { ...state, selectedHashtag: hashtag };
  }),
  on(searchHashtags, state => {
    return { ...state, hashtagsLoading: true };
  }),
  on(searchHashtagsSuccess, (state, { hashtags }) => {
    return { ...state, hashtagsLoading: false, hashtagSearchResults: hashtags };
  }),
  on(clearHashtagSearchResults, (state) => {
    return { ...state, hashtagSearchResults: null };
  }),
  on(addHashtagSuccess, (state, { hashtag }) => {
    const hashtags = add(state.hashtags, hashtag);
    return { ...state, hashtags, selectedHashtag: hashtag };
  }),
  on(deleteHashtagSuccess, (state, { hashtag }) => {
    const hashtags = remove(state.hashtags, hashtag);
    const categories = removeFromAll(state.categories, 'hashtags', hashtag);
    return { ...state, hashtags, categories, selectedHashtag: null };
  }),
  on(updateHashtagSuccess, (state, { hashtag }) => {
    const hashtags = replace(state.hashtags, hashtag);
    return { ...state, hashtags, selectedHashtag: hashtag };
  }),

  /*
  Categories
   */
  on(getCategories, state => {
    return { ...state, categoriesLoading: !state.categoriesLoaded };
  }),
  on(getCategoriesSuccess, (state, { categories }) => {
    return { ...state, categoriesLoading: false, categories: categories, categoriesLoaded: true };
  }),
  on(selectCategory, (state, { category }) => {
    return { ...state, selectedCategory: category };
  }),
  on(addCategorySuccess, ((state, { category }) => {
    const categories = add(state.categories, category);
    return { ...state, categories, selectedCategory: category };
  })),
  on(deleteCategorySuccess, (state: IHashtagState, { category }) => {
    const categories = remove(state.categories, category);
    const _hashtags = removeFromAll(state.hashtags, 'categories', category);
    return { ...state, categories, hashtags: _hashtags, selectedCategory: null };
  }),
  on(updateCategorySuccess, (state, { category }) => {
    const categories = replace(state.categories, category);
    return { ...state, categories, selectedCategory: category };
  }),

  on(logout, (state: IHashtagState) => {
    return {...state, hashtagsLoaded: false, categoriesLoaded: false, selectedCategory: null, selectedHashtag: null};
  })
);

export function hashtagReducer(state: IHashtagState | undefined, action: Action) {
  return _hashtagReducer(state, action);
}
