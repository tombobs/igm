import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'igm-button',
  templateUrl: './igm-button.component.html',
  styleUrls: ['./igm-button.component.scss']
})
export class IgmButtonComponent implements OnInit {

  @Input()
  icon: string;

  @Input()
  disabled = false;

  @Input()
  type = 'submit';

  constructor() { }

  ngOnInit(): void {
  }

}
