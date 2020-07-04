import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICategory, IHashtag, IHashtagSearch } from '@rly.gd/api-interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'igm-hashtags-search',
  templateUrl: './hashtags-search.component.html',
  styleUrls: ['./hashtags-search.component.scss']
})
export class HashtagsSearchComponent implements OnInit {

  @Input()
  hashtags$: Observable<IHashtag[]>;

  @Input()
  categories$: Observable<ICategory[]>;

  @Input()
  categoryCount$: Observable<number>;

  @Output()
  search = new EventEmitter<IHashtagSearch>();

  numberOfCategories = 1;

  selectedCategories: ICategory[];

  constructor() { }

  ngOnInit(): void {
  }

  onSearch() {
    const search: IHashtagSearch = {
      limit: this.numberOfCategories,
      categoryIds: this.selectedCategories.map(c => c.id)
    };
    this.search.emit(search);
  }

}
