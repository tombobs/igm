import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { AuthService } from './common/auth/auth.service';
import { loginSuccess } from './store';

@Component({
  selector: 'igm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService,
              private store: Store,
              private iconRegistry: MatIconRegistry,
              private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.iconRegistry.addSvgIcon(
      'rly-gd',
      this.sanitizer.bypassSecurityTrustResourceUrl('./assets/rly-gd-logo.svg'));

    const {decodedAccessToken} = this.authService;
    if (decodedAccessToken) {
      this.store.dispatch(loginSuccess({user: decodedAccessToken.user}));
    }
  }
}
