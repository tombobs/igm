import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICategory } from '@rly.gd/api-interfaces';
import { ToastrService } from 'ngx-toastr';
import { Category } from './category';

@Component({
  selector: 'igm-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent implements OnInit {

  @Output()
  add = new EventEmitter<ICategory>();

  form: FormGroup = new FormGroup({
    text: new FormControl('', Validators.required)
  });

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  addCategory(): void {
    const text: string = this.form.value.text;
    if (!text) {
      this.toastr.error('Category name is required');
      return;
    }
    this.add.emit(new Category(text));
    this.reset();
  }

  reset(): void {
    this.form.reset();
    this.form.controls.text.markAsUntouched();
    this.form.markAsUntouched();
    this.form.updateValueAndValidity();
  }

}
