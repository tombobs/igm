import { Component, HostBinding, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { ISnackBarData } from '@igm/common/snack-bar/snack-bar-data.interface';

@Component({
  selector: 'igm-toastr',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss']
})
export class SnackBarComponent {

  get message(): string {
    return this.data?.message;
  }

  @HostBinding('class.success')
  isSuccess(): boolean {
    return this.data?.type !== 'error';
  }

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: ISnackBarData) {
  }

}
