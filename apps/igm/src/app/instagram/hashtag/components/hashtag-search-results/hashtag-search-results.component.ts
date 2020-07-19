import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IHashtag } from '@rly.gd/api-interfaces';
import { IgmSnackBar } from '../../../../common/snack-bar/snack-bar.service';

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

  hashtagPrefix = '.\n.\n.\n.\n.\n';

  constructor(private toastr: IgmSnackBar) { }

  onCopy(): void {
    this.toastr.success('Hashtags copied to clipboard');
  }
}
