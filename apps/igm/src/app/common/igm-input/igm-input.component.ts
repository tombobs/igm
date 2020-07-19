import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { DefaultValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'igm-input',
  templateUrl: './igm-input.component.html',
  styleUrls: ['./igm-input.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: IgmInputComponent, multi: true }
  ]
})
export class IgmInputComponent extends DefaultValueAccessor {

  @ViewChild('inputControl')
  inputControl: ElementRef;

  @Input()
  type: 'text' | 'email' | 'password' = 'text';

  @Input()
  color: 'primary' | 'accent' | 'warn' = 'primary';

  value: string | number;

  @HostListener('document:keydown.enter', ['$event'])
  onEnter(event: KeyboardEvent): void {
    console.log(event);
  }

  onValueChange(value: string): void {
    if (this.onChange) {
      this.onChange(value);
    }
  }

  writeValue(value: string | number) {
    this.value = value;
    if (this.inputControl) {
      this.inputControl.nativeElement.value = value;
    }
  }

  defocus(): void {
    window.document.body.focus();
  }
}
