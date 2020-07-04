import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HashtagComponent } from './hashtag/hashtag.component';

const routes: Routes = [

  {path: 'hashtags', component: HashtagComponent},
  {path: '**', redirectTo: 'hashtags'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
