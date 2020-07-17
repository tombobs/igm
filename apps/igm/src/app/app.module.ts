import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { IgmCommonModule } from './common/common.module';
import { IgmHttpInterceptor } from './common/http-interceptor';
import { AuthEffects, authReducer } from './store';
import { WelcomeModule } from './welcome/welcome.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    StoreModule.forRoot({auth: authReducer}),
    EffectsModule.forRoot([AuthEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 50 }),
    AppRoutingModule,
    IgmCommonModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: IgmHttpInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
