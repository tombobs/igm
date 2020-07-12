import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICategory, IHashtag } from '@rly.gd/api-interfaces';
import { Observable } from 'rxjs';
import { Hashtag } from './hashtag';

@Component({
  selector: 'igm-hashtags-add',
  templateUrl: './hashtag-add.component.html',
  styleUrls: ['./hashtag-add.component.scss']
})
export class HashtagAddComponent {

  selectedCategories: ICategory[] = [];

  @Input()
  categories$: Observable<ICategory[]>;

  @Output()
  add = new EventEmitter<IHashtag>();

  formGroup: FormGroup = new FormGroup({
    text: new FormControl('', Validators.required)
  });

  addHashtag(): void {
    const hashtag: IHashtag = new Hashtag(this.formGroup.value.text);
    hashtag.categories = this.selectedCategories;
    this.add.emit(hashtag);
  }

  reset(): void {
    this.formGroup.reset();
  }
}
