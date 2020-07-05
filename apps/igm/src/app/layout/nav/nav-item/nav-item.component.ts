import { Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'igm-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent implements OnInit {

  @Input()
  route: string;

  @HostListener('click', ['$event:target'])
  onClick(): void {
    console.log('click');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
