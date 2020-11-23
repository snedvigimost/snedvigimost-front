import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Chart} from '@antv/g2';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  @ViewChild('myname', {read: ElementRef, static: true}) input: ElementRef;

  constructor() {
  }

  ngOnInit(): void {

    const data = [
      {price: 0, percent: 0},
      {price: 1000, percent: 0},
      {price: 2000, percent: 0},
      {price: 3000, percent: 0},
      {price: 4000, percent: 0},
      {price: 5000, percent: 0},
      {price: 6000, percent: 0},
      {price: 7000, percent: 0},
      {price: 8000, percent: 0.4},
      {price: 9000, percent: 0},
      {price: 10000, percent: 0.4},
      {price: 11000, percent: 1.3},
      {price: 12000, percent: 0.6},
      {price: 12000, percent: 0.6},
      {price: 13000, percent: 1.7},
      {price: 13000, percent: 1.7},
      {price: 14000, percent: 1.5},
      {price: 15000, percent: 1.7},
      {price: 16000, percent: 4},
      {price: 17000, percent: 2.7},
      {price: 18000, percent: 4.2},
      {price: 19000, percent: 4},
      {price: 20000, percent: 6.5},
      {price: 20000, percent: 6.5},
      {price: 21000, percent: 4.9},
      {price: 22000, percent: 5.5},
      {price: 22000, percent: 5.5},
      {price: 23000, percent: 3.2},
      {price: 24000, percent: 6.5},
      {price: 25000, percent: 5.1},
      {price: 26000, percent: 2.5},
      {price: 27000, percent: 2.1},
      {price: 28000, percent: 2.1},
      {price: 29000, percent: 2.1},
      {price: 30000, percent: 2.5},
      {price: 31000, percent: 1.9},
      {price: 32000, percent: 3},
      {price: 33000, percent: 1.5},
      {price: 34000, percent: 0.9},
      {price: 35000, percent: 0.9},
      {price: 36000, percent: 0.9},
      {price: 37000, percent: 1.1},
      {price: 38000, percent: 1.3},
      {price: 39000, percent: 0.8},
      {price: 40000, percent: 2.1},
      {price: 41000, percent: 0.9},
      {price: 42000, percent: 0.8},
      {price: 43000, percent: 1.1},
      {price: 44000, percent: 0.2},
      {price: 45000, percent: 0.9},
      {price: 46000, percent: 0.8},
      {price: 47000, percent: 0.8},
      {price: 48000, percent: 0.9},
      {price: 49000, percent: 0.8},
      {price: 50000, percent: 0.6},
    ];

    // TODO: custom tooltip

    const chart = new Chart({
      container: this.input.nativeElement,
      autoFit: true,
      height: 500,
    });

    chart.data(data);
    chart.scale({
      price: {
        range: [0, 1],
      },
      percent: {
        nice: true,
      },
    });

    chart.tooltip({
      showCrosshairs: true,
      shared: true,
    });

    chart.axis('percent', {
      label: {
        formatter: (val) => {
          return val + ' %';
        },
      },
    });

    chart
      .line()
      .position('price*percent')
      .shape('smooth');

    chart.render();

  }

}
