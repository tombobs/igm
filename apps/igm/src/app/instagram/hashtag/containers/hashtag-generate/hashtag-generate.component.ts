import { Component, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { ICategory, IHashtag, IHashtagSearch } from '@rly.gd/api-interfaces';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import {
  categories,
  categoriesLoading,
  clearHashtagSearchResults,
  hashtagSearchResults,
  searchHashtags
} from '../../store';

@Component({
  selector: 'igm-hashtag-generate',
  templateUrl: './hashtag-generate.component.html',
  styleUrls: ['./hashtag-generate.component.scss']
})
export class HashtagGenerateComponent {

  categories$: Observable<ICategory[]> = this.store.select(categories);
  categoriesLoading$: Observable<boolean> = this.store.select(categoriesLoading);
  hashtagSearchResults$: Observable<IHashtag[]> = this.store.select(hashtagSearchResults);

  search = new EventEmitter<IHashtagSearch>();

  selectedCategories: ICategory[] = [];

  submitted = false;

  constructor(private store: Store,
              private matDialog: MatDialog,
              private toastr: ToastrService) {
  }

  onSearch(): void {
    this.submitted = true;
    if (!this.selectedCategories.length) {
      this.toastr.error('Select at least one category');
      return;
    }
    const search: IHashtagSearch = {
      categoryIds: this.selectedCategories.map(c => c.id)
    };

    this.store.dispatch(searchHashtags({ search }));
  }

  onShowSideChange(showSide: boolean): void {
    if (!showSide) {
      this.store.dispatch(clearHashtagSearchResults());
    }
  }
}
