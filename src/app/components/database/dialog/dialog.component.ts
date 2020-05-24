import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

import {ListingsDto} from '../../../rest/listings/listings.dto';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public listing: ListingsDto
  ) {}

  ngOnInit(): void {
    console.log(this.listing);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
