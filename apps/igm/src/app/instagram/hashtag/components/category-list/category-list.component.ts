import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatListOption, MatSelectionList, MatSelectionListChange } from '@angular/material/list';
import { ICategory } from '@rly.gd/api-interfaces';
import { Observable } from 'rxjs';
import { Category } from '../category-add/category';

@Component({
  selector: 'igm-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements AfterViewInit {

  @ViewChild(MatSelectionList)
  listControl: MatSelectionList;

  @Input()
  multiple = false;

  @Input()
  withCounts = true;

  @Input()
  categories$: Observable<ICategory[]>;

  @Output()
  selectedCategoriesChange = new EventEmitter<ICategory[]>();

  @Input()
  selectedCategories: ICategory[];

  @Input()
  loading$: Observable<boolean>;

  searchTerm = '';

  ngAfterViewInit(): void {
    this.listControl.selectionChange.subscribe((s: MatSelectionListChange) => {
      if (this.multiple) {
        this.handleChangeMulti(s.option);
      } else {
        this.handleChangeSingle(s.source);
      }
    });
  }

  compareWith(category1: ICategory, category2: ICategory): boolean {
    return Category.compare(category1, category2);
  }

  isSelected(category: ICategory): boolean {
    return this.selectedCategories && this.selectedCategories.some(c => Category.compare(c, category));
  }

  private handleChangeSingle(source: MatSelectionList): void {
    this.selectedCategories = source.selectedOptions.selected.map(option => option.value);
    this.selectedCategoriesChange.emit(this.selectedCategories);
  }

  private handleChangeMulti(option: MatListOption): void {
    const category: ICategory = option.value;
    const filtered = this.selectedCategories.filter(c => c.id !== category.id);
    if (filtered.length !== this.selectedCategories.length) {
      // category removed
      this.selectedCategories = filtered;
    } else {
      // category added
      this.selectedCategories = [...this.selectedCategories, category];
    }
    this.selectedCategoriesChange.emit(this.selectedCategories);
    setTimeout(() => this.listControl.focus({preventScroll: true}), 1000);
  }
}
