import { Component, OnInit } from '@angular/core';
import { plannings } from '../planings-mock';


@Component({
  selector: 'app-payback-calculator',
  templateUrl: './payback-calculator.component.html',
  styleUrls: ['./payback-calculator.component.scss']
})
export class PaybackCalculatorComponent implements OnInit {
  plannings = plannings;
  selectedValue = this.plannings[0];
  repairCosts = 310_000;
  totalPrice = this.repairCosts + this.selectedValue.price;

  depreciationPercent: number = 0;
  depreciationPercentOptions = {
    floor: 0,
    ceil: 10,
    translate: (value: number): string => {
      return value + '%';
    }
  };
  rentPrice = this.selectedValue.area * 185;
  paybackPeriod =  Number.parseFloat(String(this.totalPrice / this.rentPrice / 12)).toFixed(1);


  constructor() { }

  ngOnInit(): void {
  }

  depreciationPercentChange() {

  }

  recalculate() {
    this.rentPrice = this.selectedValue.area * 185;
    this.paybackPeriod =  Number.parseFloat(String(this.totalPrice / this.rentPrice / 12)).toFixed(1);
  }

  onPlanningChange() {
   this.recalculate()
  }

  get paybackPeriodString() {
    const [years, months] =  String(this.paybackPeriod).split(".")
    return `${years} років і ${months} міс.`
  }
}
