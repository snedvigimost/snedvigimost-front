import { Component, OnInit } from '@angular/core';
import { boxData } from '../data';

@Component({
  selector: 'app-price-stat',
  templateUrl: './price-stat.component.html',
  styleUrls: ['./price-stat.component.scss']
})
export class PriceStatComponent implements OnInit {
  boxData = boxData;

  constructor() { }

  ngOnInit(): void {
  }

}
