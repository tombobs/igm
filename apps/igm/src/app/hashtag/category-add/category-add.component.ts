import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'igm-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent implements OnInit {

  @Output()
  add = new EventEmitter<string>();

  form: FormGroup = new FormGroup({
    text: new FormControl('', Validators.required)
  });

  constructor() { }

  ngOnInit(): void {
  }

  addCategory(): void {
    const text: string = this.form.value.text;
    this.add.emit(text);
    this.reset();
  }

  reset(): void {
    this.form.reset();
    this.form.controls.text.markAsUntouched();
    this.form.markAsUntouched();
    this.form.updateValueAndValidity();
  }

}
