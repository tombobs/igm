import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IgmCommonModule } from '../common/common.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';

@NgModule({
  declarations: [
    HomeComponent

  ],
  imports: [
    CommonModule,
    IgmCommonModule,
    RouterModule,
    HomeRoutingModule
  ]
})
export class HomeModule {
}
