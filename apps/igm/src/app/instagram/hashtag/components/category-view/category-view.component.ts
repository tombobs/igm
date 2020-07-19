import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICategory, IHashtag } from '@rly.gd/api-interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'igm-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.scss']
})
export class CategoryViewComponent {

  @Input()
  category: ICategory;

  @Output()
  hashtagsChange = new EventEmitter<IHashtag[]>();

  @Input()
  hashtags$: Observable<IHashtag[]>;
}
