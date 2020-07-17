import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { login } from '../../store';

@Component({
  selector: 'igm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private store: Store) {
  }

  login(): void {
    if (this.form.valid) {
      this.store.dispatch(login({user: this.form.value}));
    }
  }
}
