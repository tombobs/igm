import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ISnackBarData } from '@igm/common/snack-bar/snack-bar-data.interface';
import { SnackBarComponent } from '@igm/common/snack-bar/snack-bar.component';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IgmSnackBar {

  constructor(private snackBar: MatSnackBar) {
  }

  success(message: string): void {
    this.openSnackBar({message});
  }

  error(message: string): void {
    this.openSnackBar({message, type: 'error'});
  }

  error$<T extends Error>(error: T): Observable<T> {
    this.error(error.message);
    return of(error);
  }

  deleted({ text }: { text?: string } = {}): void {
    this.success(`Deleted ${ text }`);
  }

  created({ text }: { text?: string } = {}): void {
    this.success(`Created ${ text }`);
  }

  updated({ text }: { text?: string } = {}): void {
    this.success(`Updated ${ text }`);
  }

  private openSnackBar({message, type}: ISnackBarData) {
    this.snackBar.open(message, null, {
      duration: 2000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      data: {
        message,
        type
      },
      panelClass: ['mat-toolbar', 'mat-accent']
    });
  }
}
