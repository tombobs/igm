import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ComponentsModule } from '../components/components.module';
import { MATERIAL_IMPORTS } from '../material-imports';
import { NavComponent } from './nav/nav.component';
import { NavItemComponent } from './nav/nav-item/nav-item.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { ListViewPageComponent } from './list-view-page/list-view-page.component';



@NgModule({
  declarations: [
    NavComponent,
    NavItemComponent,
    TopNavComponent,
    ListViewPageComponent
  ],
  imports: [
    CommonModule,
    MATERIAL_IMPORTS,
    ComponentsModule,
    MatSidenavModule
  ],
  exports: [
    NavComponent,
    NavItemComponent,
    TopNavComponent,
    ListViewPageComponent
  ]
})
export class LayoutModule { }
