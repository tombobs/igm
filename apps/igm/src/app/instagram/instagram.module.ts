import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IgmCommonModule } from '../common/common.module';
import { InstagramComponent } from './instagram.component';
import { InstagramRoutingModule } from './instagram.routing.module';

@NgModule({
  declarations: [InstagramComponent],
  imports: [
    CommonModule,
    InstagramRoutingModule,
    IgmCommonModule,
    MatTooltipModule
  ]
})
export class InstagramModule {
}
