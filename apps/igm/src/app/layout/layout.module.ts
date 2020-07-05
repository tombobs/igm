import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MATERIAL_IMPORTS } from '../material-imports';
import { NavComponent } from './nav/nav.component';
import { NavItemComponent } from './nav/nav-item/nav-item.component';
import { TopNavComponent } from './top-nav/top-nav.component';



@NgModule({
  declarations: [
    NavComponent,
    NavItemComponent,
    TopNavComponent
  ],
  imports: [
    CommonModule,
    MATERIAL_IMPORTS
  ],
  exports: [
    NavComponent,
    NavItemComponent,
    TopNavComponent
  ]
})
export class LayoutModule { }
