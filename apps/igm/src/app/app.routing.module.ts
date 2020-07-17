import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedInGuard } from './common/auth/route-guards/logged-in.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    canActivate: [LoggedInGuard]
  },
  {
    path: 'instagram',
    loadChildren: () => import('./instagram/instagram.module').then(m => m.InstagramModule),
    canActivate: [LoggedInGuard]
  },
  {
    path: 'pinterest',
    loadChildren: () => import('./pinterest/pinterest.module').then(m => m.PinterestModule),
    canActivate: [LoggedInGuard]
  },
  {
    path: 'etsy',
    loadChildren: () => import('./etsy/etsy.module').then(m => m.EtsyModule),
    canActivate: [LoggedInGuard]
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomeModule)
  },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
