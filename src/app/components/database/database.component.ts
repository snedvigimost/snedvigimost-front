import {Component, OnInit} from '@angular/core';

import {MatDialog} from '@angular/material/dialog';
import {ColDef, FirstDataRenderedEvent, RowDoubleClickedEvent} from 'ag-grid-community';

import {ListingsDto} from '../../rest/listings/listings.dto';
import {ListingsService} from '../../rest/listings/listings.service';

import {defaultColDef, columnDefs} from './column-def';
import {DialogComponent} from './dialog/dialog.component';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.scss']
})
export class DatabaseComponent implements OnInit {
  listings: ListingsDto[];
  columnDefs: ColDef[] = columnDefs;
  defaultColDef: ColDef = defaultColDef;

  constructor(
    private listingsService: ListingsService,
    public dialog: MatDialog
    ) {}

  ngOnInit(): void {
    this.listingsService.getListings().subscribe(listings => {
      this.listings = listings.results;
    });
  }

  onFirstDataRendered(params: FirstDataRenderedEvent) {
    params.api.sizeColumnsToFit();
  }

  onRowDoubleClicked($event: RowDoubleClickedEvent) {
    console.log($event.data);
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '850px',
      data: $event.data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
