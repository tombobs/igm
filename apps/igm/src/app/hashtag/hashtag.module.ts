import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MATERIAL_IMPORTS } from '../material-imports';
import { CategoryAddComponent } from './category-add/category-add.component';
import { HashtagAddComponent } from './hashtag-add/hashtag-add.component';
import { HashtagsSearchComponent } from './hashtag-search/hashtags-search.component';
import { HashtagComponent } from './hashtag.component';
import { CategoryListComponent } from './category-list/category-list.component';


@NgModule({
  declarations: [
    HashtagComponent,
    HashtagsSearchComponent,
    HashtagAddComponent,
    CategoryAddComponent,
    CategoryListComponent
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
