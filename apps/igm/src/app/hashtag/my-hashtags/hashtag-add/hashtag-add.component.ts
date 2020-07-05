import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICategory, IHashtag } from '@rly.gd/api-interfaces';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Hashtag } from '../../hashtag';

@Component({
  selector: 'igm-hashtags-add',
  templateUrl: './hashtag-add.component.html',
  styleUrls: ['./hashtag-add.component.scss']
})
export class HashtagAddComponent implements OnInit {

  selectedCategories: ICategory[] = [];

  @Input()
  categories$: Observable<ICategory[]>;

  @Output()
  add = new EventEmitter<IHashtag>();

  formGroup: FormGroup = new FormGroup({
    text: new FormControl('', Validators.required)
  });

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  addHashtag(): void {
    if (!this.selectedCategories.length) {
      this.toastr.error('Select at least one category');
      return;
    }
    const hashtag: IHashtag = new Hashtag(this.formGroup.value.text);
    hashtag.categories = this.selectedCategories;
    this.add.emit(hashtag);
  }

  reset(): void {
    this.formGroup.reset();
  }
}
