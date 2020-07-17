import { createAction, props } from '@ngrx/store';
import { ICategory, IHashtag, IHashtagSearch } from '@rly.gd/api-interfaces';

export const hashtagActions = {
  getHashtags: '[Hashtags] GetHashtags',
  getHashtagsSuccess: '[Hashtags] GetHashtagsSuccess',

  selectHashtag: '[Hashtags] SelectHashtag',

  addHashtag: '[Hashtags] AddHashtag',
  addHashtagSuccess: '[Hashtags] AddHashtagSuccess',

  updateHashtag: '[Hashtags] UpdateHashtag',
  updateHashtagSuccess: '[Hashtags] UpdateHashtagSuccess',

  deleteHashtag: '[Hashtags] DeleteHashtag',
  deleteHashtagSuccess: '[Hashtags] DeleteHashtagSuccess',

  searchHashtags: '[Hashtags] SearchHashtags',
  searchHashtagsSuccess: '[Hashtags] SearchHashtagsSuccess',
  clearHashtagSearchResults: '[Hashtags] ClearHashtagsSearchResults',

  refreshHashtags: '[Hashtags] RefreshHashtags',

  getCategories: '[Hashtags] GetCategories',
  getCategoriesSuccess: '[Hashtags] GetCategoriesSuccess',

  selectCategory: '[Hashtags] SelectCategory',

  addCategory: '[Hashtags] AddCategory',
  addCategorySuccess: '[Hashtags] AddCategorySuccess',

  updateCategory: '[Hashtags] UpdateCategory',
  updateCategorySuccess: '[Hashtags] UpdateCategorySuccess',

  deleteCategory: '[Hashtags] DeleteCategory',
  deleteCategorySuccess: '[Hashtags] DeleteCategorySuccess',

  refreshCategories: '[Hashtags] RefreshCategories'
};


export const getHashtags = createAction(
  hashtagActions.getHashtags,
  props<{search: IHashtagSearch}>()
);
export const getHashtagsSuccess = createAction(
  hashtagActions.getHashtagsSuccess,
  props<{hashtags: IHashtag[]}>()
);

export const selectHashtag = createAction(
  hashtagActions.selectHashtag,
  props<{hashtag: IHashtag}>()
)

export const addHashtag = createAction(
  hashtagActions.addHashtag,
  props<{hashtag: IHashtag}>()
);
export const addHashtagSuccess = createAction(
  hashtagActions.addHashtagSuccess,
  props<{hashtag: IHashtag}>()
);

export const updateHashtag = createAction(
  hashtagActions.updateHashtag,
  props<{hashtag: IHashtag, updatedCategories?: ICategory[]}>()
);
export const updateHashtagSuccess = createAction(
  hashtagActions.updateHashtagSuccess,
  props<{hashtag: IHashtag}>()
);

export const refreshHashtags = createAction(
  hashtagActions.refreshHashtags,
  props<{hashtags: IHashtag[]}>()
);

export const deleteHashtag = createAction(
  hashtagActions.deleteHashtag,
  props<{hashtag: IHashtag}>()
);
export const deleteHashtagSuccess = createAction(
  hashtagActions.deleteHashtagSuccess,
  props<{hashtag: IHashtag}>()
);

export const searchHashtags = createAction(
  hashtagActions.searchHashtags,
  props<{search: IHashtagSearch}>()
);
export const searchHashtagsSuccess = createAction(
  hashtagActions.searchHashtagsSuccess,
  props<{hashtags: IHashtag[]}>()
);
export const clearHashtagSearchResults = createAction(
  hashtagActions.clearHashtagSearchResults
);

export const getCategories = createAction(
  hashtagActions.getCategories
);
export const getCategoriesSuccess = createAction(
  hashtagActions.getCategoriesSuccess,
  props<{categories: ICategory[]}>()
);

export const refreshCategories = createAction(
  hashtagActions.refreshCategories,
  props<{categories: ICategory[]}>()
);

export const selectCategory = createAction(
  hashtagActions.selectCategory,
  props<{category: ICategory}>()
)

export const addCategory = createAction(
  hashtagActions.addCategory,
  props<{category: ICategory}>()
);
export const addCategorySuccess = createAction(
  hashtagActions.addCategorySuccess,
  props<{category: ICategory}>()
);

export const updateCategory = createAction(
  hashtagActions.updateCategory,
  props<{category: ICategory, updatedHashtags: IHashtag[]}>()
);
export const updateCategorySuccess = createAction(
  hashtagActions.updateCategorySuccess,
  props<{category: ICategory}>()
);

export const deleteCategory = createAction(
  hashtagActions.deleteCategory,
  props<{category: ICategory}>()
);
export const deleteCategorySuccess = createAction(
  hashtagActions.deleteCategorySuccess,
  props<{category: ICategory}>()
);
