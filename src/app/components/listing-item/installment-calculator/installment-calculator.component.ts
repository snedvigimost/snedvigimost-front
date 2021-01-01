import { Component, OnInit } from '@angular/core';
import { plannings } from '../planings-mock';

@Component({
  selector: 'app-installment-calculator',
  templateUrl: './installment-calculator.component.html',
  styleUrls: [ './installment-calculator.component.scss' ]
})
export class InstallmentCalculatorComponent implements OnInit {
  plannings = plannings;
  selectedValue = this.plannings[0].price;

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
