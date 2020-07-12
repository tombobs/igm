import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IHashtag } from '@rly.gd/api-interfaces';
import { IgmToastr } from '../../../components/toastr.service';

@Component({
  selector: 'igm-hashtag-search-results',
  templateUrl: './hashtag-search-results.component.html',
  styleUrls: ['./hashtag-search-results.component.scss']
})
export class HashtagSearchResultsComponent implements OnInit {

  get hashtags(): string[] {
    return this.data.map(d => '#' + d.text);
  }

  constructor(private dialogRef: MatDialogRef<HashtagSearchResultsComponent>,
              @Inject(MAT_DIALOG_DATA) private data: IHashtag[],
              private toastr: IgmToastr) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
    this.toastr.success('Hashtags copied to clipboard');
  }
}
