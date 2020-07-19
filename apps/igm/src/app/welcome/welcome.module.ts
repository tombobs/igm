import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IgmCommonModule } from '../common/common.module';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome.component';
import { WelcomeRoutingModule } from './welcome.routing.module';

@NgModule({
  declarations: [
    LoginComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    IgmCommonModule,
    ReactiveFormsModule
  ]
})
export class WelcomeModule {
}
