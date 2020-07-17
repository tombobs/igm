import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatSelectionList, MatSelectionListChange } from '@angular/material/list';
import { IHashtag } from '@rly.gd/api-interfaces';
import { Observable } from 'rxjs';
import { skip } from 'rxjs/operators';
import { Hashtag } from '../hashtag-add/hashtag';

@Component({
  selector: 'igm-hashtag-list',
  templateUrl: './hashtag-list.component.html',
  styleUrls: ['./hashtag-list.component.scss']
})
export class HashtagListComponent implements AfterViewInit {

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
  loading$: Observable<boolean>;

  searchTerm = '';

  ngAfterViewInit() {
    this.listControl.selectionChange
      .subscribe((s: MatSelectionListChange) => {
        this.selectedHashtags = s.source.selectedOptions.selected.map(o => o.value);
        this.selectedHashtagsChange.emit(this.selectedHashtags);
      });
  }

  compareWith(hashtag1: IHashtag, hashtag2: IHashtag): boolean {
    return Hashtag.compare(hashtag1, hashtag2);
  }

  isSelected(hashtag: IHashtag): boolean {
    return this.selectedHashtags && this.selectedHashtags.some(h => Hashtag.compare(h, hashtag));
  }
}
