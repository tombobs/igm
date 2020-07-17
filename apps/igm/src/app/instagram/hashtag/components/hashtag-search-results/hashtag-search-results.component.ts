import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IHashtag } from '@rly.gd/api-interfaces';
import { IgmToastr } from '../../../../common/toastr.service';

@Component({
  selector: 'igm-hashtag-search-results',
  templateUrl: './hashtag-search-results.component.html',
  styleUrls: ['./hashtag-search-results.component.scss']
})
export class HashtagSearchResultsComponent {

  @Input()
  searchResults: IHashtag[];

  get hashtags(): string[] {
    return this.searchResults && this.searchResults.map(d => '#' + d.text);
  }

  constructor(private toastr: IgmToastr) { }

  onCopy(): void {
    this.toastr.success('Hashtags copied to clipboard');
  }
}
