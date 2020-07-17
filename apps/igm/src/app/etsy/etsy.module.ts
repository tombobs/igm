import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgmCommonModule } from '../common/common.module';
import { EtsyComponent } from './etsy.component';
import { EtsyRoutingModule } from './etsy.routing.module';

@NgModule({
  declarations: [EtsyComponent],
  imports: [
    CommonModule,
    IgmCommonModule,
    EtsyRoutingModule
  ]
})
export class EtsyModule { }
