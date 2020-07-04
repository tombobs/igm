import { Component, OnInit } from '@angular/core';
import { ICategory, IHashtag, IHashtagSearch } from '@rly.gd/api-interfaces';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Category } from './category';
import { Hashtag } from './hashtag';
import { HashtagService } from './hashtag.service';

@Component({
  selector: 'igm-hashtags',
  templateUrl: './hashtag.component.html',
  styleUrls: ['./hashtag.component.css']
})
export class HashtagComponent implements OnInit {

  refreshCategories$: BehaviorSubject<ICategory>;

  hashtags$: Observable<IHashtag[]>;
  hashtagSearch$: BehaviorSubject<IHashtagSearch>;

  categories$: Observable<ICategory[]>;
  categoryCount$: Observable<number>;
  selectedCategories: ICategory[];

  constructor(private hashtagService: HashtagService) {
  }

  ngOnInit(): void {
    this.refreshCategories$ = new BehaviorSubject(undefined);
    this.hashtagSearch$ = new BehaviorSubject({});

    this.hashtags$ = this.hashtagSearch$
      .pipe(switchMap(search => this.hashtagService.getHashtags(search)));

    this.categories$ = this.refreshCategories$
      .pipe(switchMap(() => this.hashtagService.getCategories()));

    this.categoryCount$ = this.hashtagService.getCategoryCount();
  }

  onAddHashtag(hashtag: IHashtag) : void {
    this.hashtagService.addHashtag(hashtag)
      .subscribe(r => console.log(r));
  }

  onAddCategory(text: string): void {
    const category: ICategory = new Category(text);
    this.hashtagService.addCategory(category)
      .subscribe(() => this.refreshCategories$.next(category));
  }

  onSearchHashtags(search: IHashtagSearch): void {
    this.hashtagSearch$.next(search);
  }
}
