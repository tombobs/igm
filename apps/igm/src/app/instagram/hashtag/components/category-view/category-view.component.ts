import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICategory, IHashtag } from '@rly.gd/api-interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'igm-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.scss']
})
export class CategoryViewComponent implements OnInit {

  @Input()
  category: ICategory;

  @Output()
  hashtagsChange = new EventEmitter<IHashtag[]>();

  @Input()
  hashtags$: Observable<IHashtag[]>;

  constructor() { }

  ngOnInit(): void {
  }

}
