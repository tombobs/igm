import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, Output, ViewChild } from '@angular/core';
import { MatSelectionList, MatSelectionListChange } from '@angular/material/list';
import { IHashtag } from '@rly.gd/api-interfaces';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { Observable, of, Subscription, zip } from 'rxjs';
import { map } from 'rxjs/operators';

import { Hashtag } from '../hashtag-add/hashtag';

@AutoUnsubscribe()
@Component({
  selector: 'igm-hashtag-list',
  templateUrl: './hashtag-list.component.html',
  styleUrls: ['./hashtag-list.component.scss']
})
export class HashtagListComponent implements AfterViewInit, OnDestroy {

  @ViewChild(MatSelectionList)
  listControl: MatSelectionList;

  @Input()
  withCounts = true;

  @Input()
  multiple = false;

  @Input()
  hashtags$: Observable<IHashtag[]>;

  @Output()
  selectedHashtagsChange = new EventEmitter<IHashtag[]>();

  @Input()
  selectedHashtags: IHashtag[];

  @Input()
  loading$: Observable<boolean> = of(false);

  private listControlSubscription: Subscription;

  get noHashtags$(): Observable<boolean> {
    return zip(this.hashtags$, this.loading$)
      .pipe(map(([hashtags, loading]) => !hashtags?.length && !loading));
  }

  ngAfterViewInit(): void {
    this.listControlSubscription = this.listControl.selectionChange
      .subscribe((s: MatSelectionListChange) => {
        this.selectedHashtags = s.source.selectedOptions.selected.map(o => o.value);
        this.selectedHashtagsChange.emit(this.selectedHashtags);
      });
  }

  ngOnDestroy(): void {
    // required for AutoUnsubscribe
  }

  compareWith(hashtag1: IHashtag, hashtag2: IHashtag): boolean {
    return Hashtag.compare(hashtag1, hashtag2);
  }

  isSelected(hashtag: IHashtag): boolean {
    return this.selectedHashtags && this.selectedHashtags.some(h => Hashtag.compare(h, hashtag));
  }
}
