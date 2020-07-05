import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IHashtag } from '@rly.gd/api-interfaces';

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
              @Inject(MAT_DIALOG_DATA) private data: IHashtag[]) { }

  ngOnInit(): void {
    console.log(this.data);
  }

  close(): void {
    this.dialogRef.close();
  }
}
