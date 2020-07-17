import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate, CanActivateChild {

  async canActivateChild(): Promise<boolean> {
    return this._canActivate();
  }

  async canActivate(): Promise<boolean> {
    return this._canActivate();
  }

  private async _canActivate(): Promise<boolean> {
    if (!this.authService.isLoggedIn) {
      return this.router.navigateByUrl('/welcome');
    }
    return true;
  }

  constructor(private authService: AuthService,
              private router: Router) {
  }
}
