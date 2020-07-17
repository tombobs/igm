import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedInGuard } from '../common/auth/route-guards/logged-in.guard';
import { InstagramComponent } from './instagram.component';


const routes: Routes = [
  {
    path: '',
    component: InstagramComponent,
    canActivate: [LoggedInGuard],
    children: [
      {
        path: 'hashtag',
        loadChildren: () => import('./hashtag/hashtag.module').then(m => m.HashtagModule)
      },
      { path: '**', redirectTo: 'hashtag' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstagramRoutingModule {
}
