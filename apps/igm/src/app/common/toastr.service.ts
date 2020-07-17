import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IgmToastr {

  constructor(private toastr: ToastrService) {
  }

  success(message: string): void {
    this.toastr.success(message);
  }

  error(message: string): void {
    this.toastr.error(message);
  }

  error$<T extends Error>(error: T): Observable<T> {
    this.error(error.message);
    return of(error);
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
