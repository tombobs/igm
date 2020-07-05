import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MATERIAL_IMPORTS } from '../material-imports';
import { HashtagComponent } from './hashtag.component';
import { HashtagSearchResultsComponent } from './hashtag-search-results/hashtag-search-results.component';
import { CategoryAddComponent } from './my-categories/category-add/category-add.component';
import { CategoryListComponent } from './my-categories/category-list/category-list.component';
import { HashtagAddComponent } from './my-hashtags/hashtag-add/hashtag-add.component';
import { MyHashtagsComponent } from './my-hashtags/my-hashtags.component';
import { MyCategoriesComponent } from './my-categories/my-categories.component';
import { HashtagGenerateComponent } from './hashtag-generate/hashtag-generate.component';


@NgModule({
  declarations: [
    HashtagComponent,
    HashtagAddComponent,
    CategoryAddComponent,
    CategoryListComponent,
    HashtagSearchResultsComponent,
    MyHashtagsComponent,
    MyCategoriesComponent,
    HashtagGenerateComponent
  ],
  imports: [
    CommonModule,
    MATERIAL_IMPORTS,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HashtagModule {
}
