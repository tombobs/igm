import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ComponentsModule } from '../components/components.module';
import { LayoutModule } from '../layout/layout.module';
import { MATERIAL_IMPORTS } from '../material-imports';
import { HashtagGenerateComponent } from './containers/hashtag-generate/hashtag-generate.component';
import { HashtagSearchResultsComponent } from './components/hashtag-search-results/hashtag-search-results.component';
import { HashtagComponent } from './containers/hashtag.component';
import { CategoryAddComponent } from './components/category-add/category-add.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { MyCategoriesComponent } from './containers/my-categories/my-categories.component';
import { HashtagAddComponent } from './components/hashtag-add/hashtag-add.component';
import { MyHashtagsComponent } from './containers/my-hashtags/my-hashtags.component';
import { hashtagReducer } from './store';
import { HashtagEffects } from './store/hashtag.effects';
import { HashtagListComponent } from './components/hashtag-list/hashtag-list.component';
import { HashtagViewComponent } from './components/hashtag-view/hashtag-view.component';
import { CategoryViewComponent } from './components/category-view/category-view.component';

@NgModule({
  declarations: [
    HashtagComponent,
    HashtagAddComponent,
    CategoryAddComponent,
    CategoryListComponent,
    HashtagSearchResultsComponent,
    MyHashtagsComponent,
    MyCategoriesComponent,
    HashtagGenerateComponent,
    HashtagListComponent,
    HashtagViewComponent,
    CategoryViewComponent
  ],
  imports: [
    CommonModule,
    MATERIAL_IMPORTS,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('hashtag', hashtagReducer),
    EffectsModule.forFeature([HashtagEffects]),
    LayoutModule,
    ComponentsModule
  ]
})
export class HashtagModule {
}
