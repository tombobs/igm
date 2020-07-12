import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'igm-input',
  templateUrl: './igm-input.component.html',
  styleUrls: ['./igm-input.component.scss'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: IgmInputComponent, multi: true}
  ]
})
export class IgmInputComponent implements OnInit, ControlValueAccessor {

  @ViewChild('inputControl')
  inputControl: ElementRef;

  private propagateChange: (value: string) => void;

  constructor() { }

  ngOnInit(): void {
  }

  onValueChange(value: string): void {
    this.propagateChange(value);
  }

  writeValue(value: string) {
    if (this.inputControl) {
      this.inputControl.nativeElement.value = value;
    }
  }

  registerOnChange(fn: (value: string) => void) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any) {
  }

}
