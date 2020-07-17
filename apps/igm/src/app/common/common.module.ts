import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { MATERIAL_IMPORTS } from './material-imports';
import { DeleteConfirmationComponent } from './delete-confirmation/delete-confirmation.component';
import { IgmButtonComponent } from './igm-button/igm-button.component';
import { IgmInputComponent } from './igm-input/igm-input.component';
import { ListViewPageComponent } from './list-view-page/list-view-page.component';
import { NavItemComponent } from './nav/nav-item/nav-item.component';
import { NavComponent } from './nav/nav.component';
import { IgmTextFilterPipe } from './text-filter.pipe';
import { TopNavComponent } from './top-nav/top-nav.component';
import { TabsComponent } from './tabs/tabs.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';

@NgModule({
  declarations: [
    IgmButtonComponent,
    DeleteConfirmationComponent,
    IgmInputComponent,
    IgmTextFilterPipe,
    ListViewPageComponent,
    NavComponent,
    NavItemComponent,
    TopNavComponent,
    TabsComponent,
    AppLayoutComponent
  ],
  imports: [
    CommonModule,
    MATERIAL_IMPORTS,
    RouterModule,
    MatMenuModule
  ],
  exports: [
    IgmButtonComponent,
    IgmInputComponent,
    IgmTextFilterPipe,
    ListViewPageComponent,
    NavComponent,
    NavItemComponent,
    TopNavComponent,
    TabsComponent,
    AppLayoutComponent
  ]
})
export class IgmCommonModule {
}
