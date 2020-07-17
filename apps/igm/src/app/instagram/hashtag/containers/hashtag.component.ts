import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ITabItem } from '../../../common/tabs/tab-item.interface';
import { getCategories, getHashtags } from '../store';

@Component({
  selector: 'igm-hashtags',
  templateUrl: './hashtag.component.html',
  styleUrls: ['./hashtag.component.scss']
})
export class HashtagComponent implements OnInit {

  tabs: ITabItem[] = [
    { label: 'Generate', route: 'generate' },
    { label: 'My Hashtags', route: 'my-hashtags' },
    { label: 'My Categories', route: 'my-categories' }
  ];

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(getHashtags({ search: {} }));
    this.store.dispatch(getCategories());
  }
}
