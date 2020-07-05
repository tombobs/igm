import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ICategory, IHashtag, IHashtagSearch } from '@rly.gd/api-interfaces';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';
import { skip, switchMap } from 'rxjs/operators';
import { Category } from './category';
import { HashtagSearchResultsComponent } from './hashtag-search-results/hashtag-search-results.component';
import { HashtagService } from './hashtag.service';

@Component({
  selector: 'igm-hashtags',
  templateUrl: './hashtag.component.html',
  styleUrls: ['./hashtag.component.css']
})
export class HashtagComponent implements OnInit {

  refreshCategories$: BehaviorSubject<ICategory>;

  hashtags$: IHashtag[];
  hashtagSearch$: BehaviorSubject<IHashtagSearch>;

  categories$: Observable<ICategory[]>;
  categoryCount$: Observable<number>;
  selectedCategories: ICategory[];

  constructor(private hashtagService: HashtagService,
              private matDialog: MatDialog,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.refreshCategories$ = new BehaviorSubject(undefined);
    this.hashtagSearch$ = new BehaviorSubject({});

    this.hashtagSearch$
      .pipe(
        skip(1),
        switchMap(search => this.hashtagService.getHashtags(search))
      ).subscribe(r => this.onHashtagSearchResults(r));

    this.categories$ = this.refreshCategories$
      .pipe(
        switchMap(() => this.hashtagService.getCategories())
      );

    this.categoryCount$ = this.hashtagService.getCategoryCount();
  }

  onAddHashtag(hashtag: IHashtag): void {
    this.hashtagService.addHashtag(hashtag)
      .subscribe(() => this.successMessage());
  }

  onAddCategory(text: string): void {
    const category: ICategory = new Category(text);
    this.hashtagService.addCategory(category).subscribe(() => {
      this.successMessage();
      this.refreshCategories$.next(category);
    });
  }

  onSearchHashtags(search: IHashtagSearch): void {
    this.hashtagSearch$.next(search);
  }

  onHashtagSearchResults(hashtags: IHashtag[]): void {
    this.matDialog.open(HashtagSearchResultsComponent, {
      data: hashtags
    });
  }

  private successMessage(message: string = 'Saved successfully') {
    this.toastr.success(message);
  }
}
