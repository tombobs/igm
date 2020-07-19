import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { ICategory, IHashtag } from '@rly.gd/api-interfaces';
import { Observable } from 'rxjs';
import { DeleteConfirmationComponent } from '@igm/common/delete-confirmation/delete-confirmation.component';
import { Category } from '../../components/category-add/category';
import {
  addHashtag,
  categories, categoriesLoading,
  deleteHashtag,
  hashtags, hashtagsLoading,
  selectedHashtag,
  selectHashtag,
  updateHashtag
} from '../../store';

@Component({
  selector: 'igm-my-hashtags',
  templateUrl: './my-hashtags.component.html',
  styleUrls: ['./my-hashtags.component.scss']
})
export class MyHashtagsComponent implements OnInit {

  hashtags$: Observable<IHashtag[]> = this.store.select(hashtags);
  hashtagsLoading$: Observable<boolean> = this.store.select(hashtagsLoading);
  selectedHashtag$: Observable<IHashtag> = this.store.select(selectedHashtag);
  categories$: Observable<ICategory[]> = this.store.select(categories);

  private selectedHashtag: IHashtag;

  constructor(private store: Store,
              private matDialog: MatDialog) {
  }

  ngOnInit(): void {
    this.selectedHashtag$.subscribe(s => {
      this.selectedHashtag = s;
    });
  }

  onSelectedHashtagsChange(_selectedHashtags: IHashtag[]) {
    const _selectedHashtag = _selectedHashtags.length ? _selectedHashtags[0] : null;
    this.store.dispatch(selectHashtag({ hashtag: _selectedHashtag }));
  }

  onShowSideChange(showSide: boolean): void {
    if (!showSide) {
      this.store.dispatch(selectHashtag({ hashtag: null }));
    }
  }

  onCategoriesChange(_categories: ICategory[]): void {
    const updatedHashtag: IHashtag = {
      ...this.selectedHashtag,
      categories: _categories
    };
    const updatedCategories = this.getUpdatedCategories(_categories);
    this.store.dispatch(updateHashtag({ hashtag: updatedHashtag, updatedCategories }));
  }

  onAdd(hashtag: IHashtag) {
    this.store.dispatch(addHashtag({ hashtag }));
  }

  onDeleteClick(): void {
    const ref = this.matDialog.open(DeleteConfirmationComponent, { data: this.selectedHashtag });
    ref.afterClosed().subscribe(result => {
      if (result) {
        this.onDeleteConfirm();
      }
    });
  }

  private onDeleteConfirm(): void {
    this.store.dispatch(deleteHashtag({ hashtag: this.selectedHashtag }));
  }

  private getUpdatedCategories(newCategories: ICategory[]): ICategory[] {
    const originalCategories = [...this.selectedHashtag.categories];
    const removedCategories: ICategory[] = Category.arrayDiff(originalCategories, newCategories);
    const addedCategories: ICategory[] = Category.arrayDiff(newCategories, originalCategories);
    return [...removedCategories, ...addedCategories];
  }
}
