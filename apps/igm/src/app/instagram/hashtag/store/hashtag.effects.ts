import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { ICategory, IHashtag } from '@rly.gd/api-interfaces';
import { filter, map, mergeMap, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { IgmToastr } from '../../../common/toastr.service';
import { HashtagService } from '../hashtag.service';
import {
  addCategory,
  addCategorySuccess,
  addHashtag,
  addHashtagSuccess,
  deleteCategory,
  deleteCategorySuccess,
  deleteHashtag,
  deleteHashtagSuccess,
  getCategories,
  getCategoriesSuccess,
  getHashtags,
  getHashtagsSuccess,
  refreshCategories, refreshHashtags,
  searchHashtags,
  searchHashtagsSuccess,
  updateCategory,
  updateCategorySuccess,
  updateHashtag,
  updateHashtagSuccess
} from './hashtag.actions';

import { categoriesLoaded, hashtagsLoaded } from './hashtag.selectors';

@Injectable()
export class HashtagEffects {

  getHashtags$ = createEffect(() => this.actions$.pipe(
    ofType(getHashtags),
    withLatestFrom(this.store.select(hashtagsLoaded)),
    filter(([_, _hashtagsLoaded]) => !_hashtagsLoaded),
    mergeMap(() => this.hashtagService.getHashtags().pipe(
      map(hashtags => getHashtagsSuccess({ hashtags }))
    ))
  ));

  addHashtag$ = createEffect(() => this.actions$.pipe(
    ofType(addHashtag),
    mergeMap(({ hashtag }) => this.hashtagService.addHashtag(hashtag).pipe(
      tap(() => this.toastr.created(hashtag)),
      map(updatedHashtag => addHashtagSuccess({ hashtag: updatedHashtag }))
    ))
  ));

  updateHashtag$ = createEffect(() => this.actions$.pipe(
    ofType(updateHashtag),
    mergeMap(({ hashtag, updatedCategories }) => this.hashtagService.updateHashtag(hashtag).pipe(
      tap(() => this.toastr.updated(hashtag)),
      switchMap((updatedHashtag: IHashtag) => [
        updateHashtagSuccess({ hashtag: updatedHashtag }),
        refreshCategories({ categories: updatedCategories })
      ])
    ))
  ));

  deleteHashtag$ = createEffect(() => this.actions$.pipe(
    ofType(deleteHashtag),
    mergeMap(({ hashtag }) => this.hashtagService.deleteHashtag(hashtag).pipe(
      tap(() => this.toastr.deleted(hashtag)),
      map(() => deleteHashtagSuccess({ hashtag }))
    ))
  ));

  searchHashtags$ = createEffect(() => this.actions$.pipe(
    ofType(searchHashtags),
    mergeMap(({ search }) => this.hashtagService.generateHashtags(search).pipe(
      map(hashtags => searchHashtagsSuccess({ hashtags }))
    ))
  ));

  refreshHashtags$ = createEffect(() => this.actions$.pipe(
    ofType(refreshHashtags),
    mergeMap(({ hashtags }) => this.hashtagService.getHashtags(hashtags.map(h => h.id)).pipe(
      switchMap(updatedHashtags => updatedHashtags.map(h => updateHashtagSuccess({ hashtag: h })))
    ))
  ));

  getCategories$ = createEffect(() => this.actions$.pipe(
    ofType(getCategories),
    withLatestFrom(this.store.select(categoriesLoaded)),
    filter(([_, _categoriesLoaded]) => !_categoriesLoaded),
    mergeMap(() => this.hashtagService.getCategories().pipe(
      map(categories => getCategoriesSuccess({ categories }))
    ))
  ));

  refreshCategory$ = createEffect(() => this.actions$.pipe(
    ofType(refreshCategories),
    mergeMap(({ categories }) => this.hashtagService.getCategories(categories.map(c => c.id)).pipe(
      switchMap(updateCategories => updateCategories.map(c => updateCategorySuccess({ category: c })))
    ))
  ));

  addCategory$ = createEffect(() => this.actions$.pipe(
    ofType(addCategory),
    mergeMap(({ category }) => this.hashtagService.addCategory(category).pipe(
      tap(() => this.toastr.success('Added category: ' + category.text)),
      map(addedCategory => addCategorySuccess({ category: addedCategory }))
    ))
  ));

  updateCategory$ = createEffect(() => this.actions$.pipe(
    ofType(updateCategory),
    mergeMap(({ category, updatedHashtags }) => this.hashtagService.updateCategory(category).pipe(
      tap(() => this.toastr.updated(category)),
      switchMap((updatedCategory: ICategory) => [
        updateCategorySuccess({ category: updatedCategory }),
        refreshHashtags({ hashtags: updatedHashtags })
      ])
    ))
  ));

  deleteCategory$ = createEffect(() => this.actions$.pipe(
    ofType(deleteCategory),
    mergeMap(({ category }) => this.hashtagService.deleteCategory(category).pipe(
      tap(() => this.toastr.deleted(category)),
      map(() => deleteCategorySuccess({ category }))
    ))
  ));

  constructor(private actions$: Actions,
              private toastr: IgmToastr,
              private store: Store,
              private hashtagService: HashtagService) {
  }

}
