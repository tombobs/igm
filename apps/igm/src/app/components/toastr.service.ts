import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class IgmToastr {

  constructor(private toastr: ToastrService) {
  }

  success(message: string): void {
    this.toastr.success(message);
  }

  deleted({text}: {text?: string} = {}): void {
    this.success(`Deleted ${text}`);
  }

  created({text}: {text?: string} = {}): void {
    this.success(`Created ${text}`);
  }

  updated({text}: {text?: string} = {}): void {
    this.success(`Updated ${text}`);
  }
}
