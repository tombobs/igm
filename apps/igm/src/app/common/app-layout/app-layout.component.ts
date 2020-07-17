import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IUser } from '@rly.gd/api-interfaces';
import { Observable } from 'rxjs';
import { loggedInUser, logout } from '../../store';

@Component({
  selector: 'igm-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent {

  loggedInUser$: Observable<IUser> = this.store.select(loggedInUser);

  constructor(private store: Store) {
  }

  onLogout(): void {
    this.store.dispatch(logout());
  }
}
