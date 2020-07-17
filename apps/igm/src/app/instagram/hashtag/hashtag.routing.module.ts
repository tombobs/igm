import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedInGuard } from '../../common/auth/route-guards/logged-in.guard';
import { HashtagGenerateComponent } from './containers/hashtag-generate/hashtag-generate.component';

import { HashtagComponent } from './containers/hashtag.component';
import { MyCategoriesComponent } from './containers/my-categories/my-categories.component';
import { MyHashtagsComponent } from './containers/my-hashtags/my-hashtags.component';

const routes: Routes = [
  {
    path: '',
    component: HashtagComponent,
    canActivate: [LoggedInGuard],
    children: [
      {
        path: 'generate',
        component: HashtagGenerateComponent
      },
      {
        path: 'my-hashtags',
        component: MyHashtagsComponent
      },
      {
        path: 'my-categories',
        component: MyCategoriesComponent
      },
      { path: '**', redirectTo: 'generate' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HashtagRoutingModule {
}
