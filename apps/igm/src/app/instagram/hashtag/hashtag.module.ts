import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { IgmCommonModule } from '../../common/common.module';
import { MATERIAL_IMPORTS } from '../../common/material-imports';
import { CategoryAddComponent } from './components/category-add/category-add.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryViewComponent } from './components/category-view/category-view.component';
import { HashtagAddComponent } from './components/hashtag-add/hashtag-add.component';
import { HashtagListComponent } from './components/hashtag-list/hashtag-list.component';
import { HashtagSearchResultsComponent } from './components/hashtag-search-results/hashtag-search-results.component';
import { HashtagViewComponent } from './components/hashtag-view/hashtag-view.component';
import { HashtagGenerateComponent } from './containers/hashtag-generate/hashtag-generate.component';
import { HashtagComponent } from './containers/hashtag.component';
import { MyCategoriesComponent } from './containers/my-categories/my-categories.component';
import { MyHashtagsComponent } from './containers/my-hashtags/my-hashtags.component';
import { HashtagRoutingModule } from './hashtag.routing.module';
import { hashtagReducer } from './store';
import { HashtagEffects } from './store/hashtag.effects';

@NgModule({
  declarations: [
    CategoryAddComponent,
    CategoryListComponent,
    CategoryViewComponent,
    HashtagAddComponent,
    HashtagComponent,
    HashtagGenerateComponent,
    HashtagListComponent,
    HashtagSearchResultsComponent,
    HashtagViewComponent,
    MyCategoriesComponent,
    MyHashtagsComponent
  ],
  imports: [
    CommonModule,
    MATERIAL_IMPORTS,
    FormsModule,
    ReactiveFormsModule,

    StoreModule.forFeature('hashtag', hashtagReducer),
    EffectsModule.forFeature([HashtagEffects]),
    HashtagRoutingModule,
    IgmCommonModule
  ]
})
export class HashtagModule {
}
