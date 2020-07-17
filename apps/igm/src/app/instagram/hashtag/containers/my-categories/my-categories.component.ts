import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { ICategory, IHashtag } from '@rly.gd/api-interfaces';
import { Observable } from 'rxjs';
import { DeleteConfirmationComponent } from '../../../../common/delete-confirmation/delete-confirmation.component';
import { Hashtag } from '../../components/hashtag-add/hashtag';
import {
  addCategory,
  categories,
  deleteCategory,
  hashtags,
  selectCategory,
  selectedCategory,
  updateCategory
} from '../../store';

@Component({
  selector: 'igm-my-categories',
  templateUrl: './my-categories.component.html',
  styleUrls: ['./my-categories.component.scss']
})
export class MyCategoriesComponent implements OnInit {

  categories$: Observable<ICategory[]> = this.store.select(categories);
  selectedCategory$: Observable<ICategory> = this.store.select(selectedCategory);
  hashtags$: Observable<IHashtag[]> = this.store.select(hashtags);

  private selectedCategory: ICategory;

  constructor(private store: Store,
              private matDialog: MatDialog) {
  }

  ngOnInit(): void {
    this.store.select(selectedCategory).subscribe(s => this.selectedCategory = s);
  }

  onSelectedCategoriesChange(_categories: ICategory[]): void {
    const category = _categories.length ? _categories[0] : null;
    this.store.dispatch(selectCategory({ category }));
  }

  onShowSideChange(showSide: boolean): void {
    if (!showSide) {
      this.store.dispatch(selectCategory({ category: null }));
    }
  }

  onHashtagsChange(_hashtags: IHashtag[]): void {
    const updatedCategory: ICategory = {
      ...this.selectedCategory,
      hashtags: _hashtags
    };
    const updatedHashtags = this.getUpdatedHashtags(_hashtags);
    this.store.dispatch(updateCategory({ category: updatedCategory, updatedHashtags }));
  }

  onAdd(category: ICategory) {
    this.store.dispatch(addCategory({ category }));
  }

  onDeleteClick(): void {
    const ref = this.matDialog.open(DeleteConfirmationComponent, { data: this.selectedCategory });
    ref.afterClosed().subscribe(result => {
      if (result) {
        this.onDeleteConfirm();
      }
    });
  }

  private onDeleteConfirm(): void {
    this.store.dispatch(deleteCategory({ category: this.selectedCategory }));
  }

  private getUpdatedHashtags(newHashtags: IHashtag[]): IHashtag[] {
    if (!Array.isArray(this.selectedCategory.hashtags)) {
      return [...newHashtags];
    }
    const originalHashtags = [...this.selectedCategory.hashtags];
    const removedHashtags: IHashtag[] = Hashtag.arrayDiff(originalHashtags, newHashtags);
    const addedHashtags: IHashtag[] = Hashtag.arrayDiff(newHashtags, originalHashtags);
    return [
      ...removedHashtags,
      ...addedHashtags
    ];
  }
}
