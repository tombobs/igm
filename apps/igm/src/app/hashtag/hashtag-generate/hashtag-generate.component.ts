import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICategory, IHashtag, IHashtagSearch } from '@rly.gd/api-interfaces';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Component({
  selector: 'igm-hashtag-generate',
  templateUrl: './hashtag-generate.component.html',
  styleUrls: ['./hashtag-generate.component.scss']
})
export class HashtagGenerateComponent implements OnInit {

  @Input()
  hashtags$: Observable<IHashtag[]>;

  @Input()
  categories$: Observable<ICategory[]>;

  @Input()
  categoryCount$: Observable<number>;

  @Output()
  search = new EventEmitter<IHashtagSearch>();

  numberOfCategories = 1;

  selectedCategories: ICategory[] = [];

  submitted = false;

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSearch(): void  {
    this.submitted = true;
    if (!this.selectedCategories.length) {
      this.toastr.error('Select at least one category');
      return;
    }
    const search: IHashtagSearch = {
      limit: this.numberOfCategories,
      categoryIds: this.selectedCategories.map(c => c.id)
    };
    this.search.emit(search);
  }
}
