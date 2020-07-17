import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'igm-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.scss']
})
export class DeleteConfirmationComponent implements OnInit {

  label: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { text: string } | string,
              private matDialogRef: MatDialogRef<DeleteConfirmationComponent>) {
  }

  ngOnInit(): void {
    if (typeof this.data === 'string') {
      this.label = this.data;
    } else {
      this.label = `Are you sure you wish to delete ${this.data.text}?`
    }
  }

  onDeleteConfirm(): void {
    this.matDialogRef.close(true);
  }

  onCancel(): void {
    this.matDialogRef.close(false);
  }
}
