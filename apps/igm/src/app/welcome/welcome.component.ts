import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { registerUser } from '@igm/store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'igm-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

  form = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private store: Store) {
  }

  signUp(): void {
    this.store.dispatch(registerUser({ user: this.form.value }));
  }
}
