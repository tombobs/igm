import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { ICategory, IHashtag, IHashtagSearch } from '@rly.gd/api-interfaces';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { categories, categoriesLoading, hashtags, searchHashtags } from '../../store';

@Component({
  selector: 'igm-hashtag-generate',
  templateUrl: './hashtag-generate.component.html',
  styleUrls: ['./hashtag-generate.component.scss']
})
export class HashtagGenerateComponent {

  hashtags$: Observable<IHashtag[]> = this.store.select(hashtags);
  categories$: Observable<ICategory[]> = this.store.select(categories);

  categoriesLoading$: Observable<boolean> = this.store.select(categoriesLoading);

  // @Input()
  // categoryCount$: Observable<number>;


  search = new EventEmitter<IHashtagSearch>();



  selectedCategories: ICategory[] = [];

  submitted = false;

  constructor(private store: Store,
              private toastr: ToastrService) {
  }

  onSearch(): void  {
    this.submitted = true;
    if (!this.selectedCategories.length) {
      this.toastr.error('Select at least one category');
      return;
    }
    const search: IHashtagSearch = {
      categoryIds: this.selectedCategories.map(c => c.id)
    };
    this.store.dispatch(searchHashtags({search}));
  }
}
