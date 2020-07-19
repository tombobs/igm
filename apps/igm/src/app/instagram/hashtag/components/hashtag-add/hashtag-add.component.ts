import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IgmInputComponent } from '@igm/common/igm-input/igm-input.component';
import { ICategory, IHashtag } from '@rly.gd/api-interfaces';
import { Observable } from 'rxjs';
import { Hashtag } from './hashtag';

@Component({
  selector: 'igm-hashtags-add',
  templateUrl: './hashtag-add.component.html',
  styleUrls: ['./hashtag-add.component.scss']
})
export class HashtagAddComponent {

  @ViewChild(IgmInputComponent)
  searchInput: IgmInputComponent;

  @Input()
  categories$: Observable<ICategory[]>;

  @Output()
  add = new EventEmitter<IHashtag>();

  selectedCategories: ICategory[] = [];

  form: FormGroup = new FormGroup({
    text: new FormControl('', Validators.required)
  });

  addHashtag(): void {
    if (this.form.valid) {
      const hashtag: IHashtag = new Hashtag(this.form.value.text);
      hashtag.categories = this.selectedCategories;
      this.add.emit(hashtag);
      this.reset();
    }
  }

  reset(): void {
    this.form.reset();
    this.form.controls.text.markAsUntouched();
    this.form.markAsUntouched();
    this.form.updateValueAndValidity();
    this.searchInput.defocus();
  }
}
