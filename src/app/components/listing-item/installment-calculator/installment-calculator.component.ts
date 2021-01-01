import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-installment-calculator',
  templateUrl: './installment-calculator.component.html',
  styleUrls: [ './installment-calculator.component.scss' ]
})
export class InstallmentCalculatorComponent implements OnInit {


  // https://ua.m2bomber.com/newbuilding/620/view/zk-parkove-misto
  panings = [
    {
      value: 'steak-0',
      rooms: 1,
      area: 31,
      price: 806_000
    },
    {
      value: 'steak-1',
      rooms: 1,
      area: 44,
      price: 1_518_000
    },
    {
      value: 'steak-2',
      rooms: 1,
      area: 58,
      price: 2_099_000
    },
    {
      value: 'steak-3',
      rooms: 2,
      area: 69,
      price: 1_794_000
    },
    {
      value: 'steak-4',
      rooms: 2,
      area: 77,
      price: 2_656_500
    },
    {
      value: 'steak-5',
      rooms: 2,
      area: 84,
      price: 3_040_800
    },
    {
      value: 'steak-6',
      rooms: 3,
      area: 92,
      price: 3_174_000
    },
    {
      value: 'steak-6',
      rooms: 3,
      area: 136,
      price: 4_923_200
    },
  ];

  selectedValue = this.panings[0].price;

  sliderValue: number = 30;
  options = {
    floor: 30,
    ceil: 100,
    translate: (value: number): string => {
      return value + '%';
    }
  };

  monthsValue: number = 12;
  monthsOptions = {
    floor: 1,
    ceil: 24,
    translate: (value: number): string => {
      return `на ${value} місяців`;
    }
  };

  first = Math.ceil(this.sliderValue / 100 * this.selectedValue);
  remainder = this.selectedValue - this.first;
  monthlyBill = Math.ceil(this.remainder / this.monthsValue);

  constructor() { }

  ngOnInit(): void {
  }

  recalculate() {
    this.first = Math.ceil(this.sliderValue / 100 * this.selectedValue);
    this.remainder = this.selectedValue - this.first;
    this.monthlyBill = Math.ceil(this.remainder / this.sliderValue);
  }

  percentChange() {
    this.recalculate();
  }

  onMonthsChange() {
    this.monthlyBill = Math.ceil(this.remainder / this.monthsValue);
  }

  onPriceChange() {
    this.recalculate();
  }

}
