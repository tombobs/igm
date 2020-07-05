import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatSelectionList } from '@angular/material/list';
import { ICategory } from '@rly.gd/api-interfaces';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'igm-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements AfterViewInit {

  @Input()
  categories$: Observable<ICategory[]>;

  @ViewChild(MatSelectionList)
  categoryControl: MatSelectionList;

  @Input()
  selectedCategories: ICategory[];

  @Output()
  selectedCategoriesChange = new EventEmitter<ICategory[]>();

  constructor() {
  }

  ngAfterViewInit(): void {
    this.categoryControl.selectedOptions.changed
      .pipe(tap(() => {
        this.selectedCategories = this.categoryControl.selectedOptions.selected.map(s => s.value);
        this.selectedCategoriesChange.emit(this.selectedCategories);
      })).subscribe();
  }
}
