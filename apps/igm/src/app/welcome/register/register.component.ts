import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { registerUser } from '../../store';

@Component({
  selector: 'igm-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private store: Store) {
  }

  signUp(): void {
    this.store.dispatch(registerUser({ user: this.form.value }));
  }
}
