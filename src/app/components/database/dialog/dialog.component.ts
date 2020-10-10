import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Component, Inject, OnInit, NgZone} from '@angular/core';

import {AnimationItem} from 'lottie-web';
import {AnimationOptions} from 'ngx-lottie';

import {ListingsDto} from '../../../rest/listings/listings.dto';
import {ListingsService} from '../../../rest/listings/listings.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  options: AnimationOptions = {
    path: '/assets/1818-success-animation.json',
    loop: false,
  };
  private animationItem: AnimationItem;
  loading = false;
  loaded = false;
  buttonIsDisabled = false;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    public listingsService: ListingsService,
    private ngZone: NgZone,
    @Inject(MAT_DIALOG_DATA) public listing: ListingsDto
  ) {
  }

  animationCreated(animationItem: AnimationItem) {
    this.animationItem = animationItem;
  }

  ngOnInit() {
    console.log(this.listing);
  }

  onNoClick() {
    this.dialogRef.close();
  }

  publish() {
    this.loading = true;
    this.listingsService.publish(this.listing.id).subscribe(() => {
      this.loading = false;
      this.loaded = true;
    });
  }

  onComplete() {
    this.ngZone.run(() => {
      this.animationItem.stop();
      this.buttonIsDisabled = true;
    });
  }
}
