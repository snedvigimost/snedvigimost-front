import {Component, OnInit} from '@angular/core';

import {ColDef} from 'ag-grid-community';

import {ListingsDto} from '../../rest/listings/listings.dto';
import {ListingsService} from '../../rest/listings/listings.service';
import {defaultColDef, columnDefs} from './column-def';


@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.scss']
})
export class DatabaseComponent implements OnInit {
  listings: ListingsDto[];
  columnDefs: ColDef[] = columnDefs;
  defaultColDef: ColDef = defaultColDef;

  constructor(private listingsService: ListingsService) {}

  ngOnInit(): void {
    this.listingsService.getListings().subscribe(listings => {
      this.listings = listings.results;
    });
  }

  onFirstDataRendered(params) {
    params.api.sizeColumnsToFit();
  }
}
