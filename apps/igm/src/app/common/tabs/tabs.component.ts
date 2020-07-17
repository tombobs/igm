import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router, Routes } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ITabItem } from './tab-item.interface';

@Component({
  selector: 'igm-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  @Input()
  tabs: ITabItem[];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(e => console.log(e, this.router));
  }

  // private componentIsActive(component: any): boolean {
  //   console.log(this.routerStateSnapshot);
  // }
}
