import { Component, EventEmitter, HostBinding, Input, Output, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'igm-list-view-page',
  templateUrl: './list-view-page.component.html',
  styleUrls: ['./list-view-page.component.scss']
})
export class ListViewPageComponent {

  @ViewChild(MatDrawer)
  drawer: MatDrawer;

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

  private _showSide = false;

  constructor() {
  }
}
