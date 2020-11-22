import {Component, OnInit} from '@angular/core';

import {MatDialog} from '@angular/material/dialog';
import {ColDef, FirstDataRenderedEvent, RowDoubleClickedEvent} from 'ag-grid-community';

import {ListingsDto} from '../../rest/listings/listings.dto';
import {ListingsService} from '../../rest/listings/listings.service';

import {defaultColDef, columnDefs} from './column-def';
import {DialogComponent} from './dialog/dialog.component';
import {PaginationParamsDto} from '../../rest/pagination/pagination.params.dto';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.scss']
})
export class DatabaseComponent implements OnInit {
  listings: ListingsDto[];
  columnDefs: ColDef[] = columnDefs;
  defaultColDef: ColDef = defaultColDef;
  paginationParamsDto = new PaginationParamsDto();

  constructor(
    private listingsService: ListingsService,
    public dialog: MatDialog
    ) {
    this.paginationParamsDto.is_published = false;
  }

  ngOnInit(): void {
    this.listingsService.getListings({...this.paginationParamsDto, ...{expand: 'district'}}).subscribe(listings => {
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
