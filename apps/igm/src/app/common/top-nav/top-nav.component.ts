import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '@rly.gd/api-interfaces';
import { ITabItem } from '../tabs/tab-item.interface';

@Component({
  selector: 'igm-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent {

  @Output()
  logout = new EventEmitter<void>();

  @Input()
  loggedInUser: IUser;

  items: ITabItem[] = [
    { label: 'Instagram', route: 'instagram', icon: 'party_mode' },
    { label: 'Pinterest', route: 'pinterest', icon: 'party_mode' },
    { label: 'Etsy', route: 'etsy', icon: 'party_mode' }
  ];
}
