import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtsyComponent } from './etsy.component';

const routes: Routes = [
  {
    path: '',
    component: EtsyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtsyRoutingModule {
}
