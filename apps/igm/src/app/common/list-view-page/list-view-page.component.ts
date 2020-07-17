import { Component, EventEmitter, HostBinding, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDrawer, MatDrawerContainer } from '@angular/material/sidenav';
import { OuterSubscriber } from 'rxjs/internal-compatibility';

@Component({
  selector: 'igm-list-view-page',
  templateUrl: './list-view-page.component.html',
  styleUrls: ['./list-view-page.component.scss']
})
export class ListViewPageComponent implements OnInit {

  @ViewChild(MatDrawer)
  drawer: MatDrawer;

  private _showSide = false;

  @Input()
  @HostBinding('class.show-side')
  set showSide(showSide: boolean) {
    this._showSide = showSide;
    this.showSideChange.emit(showSide);
  }
  get showSide(): boolean {
    return this._showSide;
  }

  @Output()
  showSideChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

}
