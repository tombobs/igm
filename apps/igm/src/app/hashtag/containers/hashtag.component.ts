import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { ICategory, IHashtag, IHashtagSearch } from '@rly.gd/api-interfaces';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HashtagSearchResultsComponent } from '../components/hashtag-search-results/hashtag-search-results.component';
import { HashtagService } from '../hashtag.service';
import {
  categories,
  getCategories,
  getHashtags,
  hashtags,
  hashtagSearchResults,
  searchHashtags,
  selectCategory,
  selectHashtag
} from '../store';

@Component({
  selector: 'igm-hashtags',
  templateUrl: './hashtag.component.html',
  styleUrls: ['./hashtag.component.scss']
})
export class HashtagComponent implements OnInit {

  hashtags$: Observable<IHashtag[]> = this.store.select(hashtags);
  categories$: Observable<ICategory[]> = this.store.select(categories);
  categoryCount$: Observable<number>;

  constructor(private hashtagService: HashtagService,
              private matDialog: MatDialog,
              private toastr: ToastrService,
              private store: Store,
              private actions$: Actions) {
  }

  ngOnInit(): void {
    this.store.select(hashtagSearchResults)
      .subscribe(h => this.onHashtagSearchResults(h));

    this.store.dispatch(getHashtags({ search: {} }));
    this.store.dispatch(getCategories());

    this.categoryCount$ = this.hashtagService.getCategoryCount();

    this.actions$.pipe(
      tap((action) => {
        switch (action.type) {
          // case hashtagActions.updateHashtagSuccess:
          //   return this.store.dispatch(getCategories());
          // case hashtagActions.updateCategorySuccess:
          //   return this.store.dispatch(getHashtags({search: {}}));
        }
      })
    ).subscribe();
  }

  onHashtagSearchResults(_hashtags: IHashtag[]): void {
    if (_hashtags && _hashtags.length) {
      this.matDialog.open(HashtagSearchResultsComponent, {
        data: _hashtags
      });
    }
  }
}
