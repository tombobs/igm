import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICategory, IHashtag } from '@rly.gd/api-interfaces';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'igm-hashtag-view',
  templateUrl: './hashtag-view.component.html',
  styleUrls: ['./hashtag-view.component.scss']
})
export class HashtagViewComponent implements OnInit {

  @Input()
  hashtag: IHashtag;

  @Output()
  categoriesChange = new EventEmitter<ICategory[]>();

  @Input()
  categories$: Observable<ICategory[]>;

  categoriesLoading$: Observable<boolean> = of(false);

  constructor() { }

  ngOnInit(): void {
  }

}
