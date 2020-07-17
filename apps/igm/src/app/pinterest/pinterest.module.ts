import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgmCommonModule } from '../common/common.module';
import { PinterestComponent } from './pinterest.component';
import { PinterestRoutingModule } from './pinterest.routing.module';

@NgModule({
  declarations: [PinterestComponent],
  imports: [
    CommonModule,
    IgmCommonModule,
    PinterestRoutingModule
  ]
})
export class PinterestModule { }
