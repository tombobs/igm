import { createSelector } from '@ngrx/store';
import { IHashtag } from '@rly.gd/api-interfaces';
import { State } from '@igm/store';
import { IHashtagState } from './hashtag.state';

export const hashtagState = (state: State) => state.hashtag;

export const hashtags = createSelector(hashtagState, (state: IHashtagState) => state.hashtags);
export const hashtagsLoading = createSelector(hashtagState, (state: IHashtagState) => state.hashtagsLoading);
export const hashtagsLoaded = createSelector(hashtagState, (state: IHashtagState) => state.hashtagsLoaded);
export const hashtagById = createSelector(hashtags, (tags: IHashtag[], id: number) => tags && tags.find(t => t.id === id));
export const selectedHashtag = createSelector(hashtagState, (state: IHashtagState) => state.selectedHashtag);

export const hashtagSearch = createSelector(hashtagState, (state: IHashtagState) => state.hashtagSearch);
export const hashtagSearchLoading = createSelector(hashtagState, (state: IHashtagState) => state.hashtagSearchLoading);
export const hashtagSearchResults = createSelector(hashtagState, (state: IHashtagState) => state.hashtagSearchResults);

export const categories = createSelector(hashtagState, (state: IHashtagState) => state.categories);
export const categoriesLoading = createSelector(hashtagState, (state: IHashtagState) => state.categoriesLoading);
export const categoriesLoaded = createSelector(hashtagState, (state: IHashtagState) => state.categoriesLoaded);
export const selectedCategory = createSelector(hashtagState, (state: IHashtagState) => state.selectedCategory);

