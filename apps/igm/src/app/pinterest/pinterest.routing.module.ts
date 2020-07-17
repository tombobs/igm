import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PinterestComponent } from './pinterest.component';

const routes: Routes = [
  {
    path: '',
    component: PinterestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PinterestRoutingModule {
}
