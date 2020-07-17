import { Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'igm-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent implements OnInit {

  @Input()
  route: string;

  @HostListener('click')
  onClick(): void {
    console.log(this.route);
    this.router.navigateByUrl(this.route);
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
