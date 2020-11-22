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
      {month: 0,  temperature: 0},
      {month: 1000,  temperature: 0},
      {month: 2000,  temperature: 0},
      {month: 3000,  temperature: 0},
      {month: 4000,  temperature: 0},
      {month: 5000,  temperature: 0},
      {month: 6000,  temperature: 0},
      {month: 7000,  temperature: 0},
      {month: 8000,  temperature: 0.4},
      {month: 9000,  temperature: 0},
      {month: 10000,  temperature: 0.4},
      {month: 11000,  temperature: 1.3},
      {month: 12000,  temperature: 0.6},
      {month: 12000,  temperature: 0.6},
      {month: 13000,  temperature: 1.7},
      {month: 13000,  temperature: 1.7},
      {month: 14000,  temperature: 1.5},
      {month: 15000,  temperature: 1.7},
      {month: 16000,  temperature: 4},
      {month: 17000,  temperature: 2.7},
      {month: 18000,  temperature: 4.2},
      {month: 19000,  temperature: 4},
      {month: 20000,  temperature: 6.5},
      {month: 20000,  temperature: 6.5},
      {month: 21000,  temperature: 4.9},
      {month: 22000,  temperature: 5.5},
      {month: 22000,  temperature: 5.5},
      {month: 23000,  temperature: 3.2},
      {month: 24000,  temperature: 6.5},
      {month: 25000,  temperature: 5.1},
      {month: 26000,  temperature: 2.5},
      {month: 27000,  temperature: 2.1},
      {month: 28000,  temperature: 2.1},
      {month: 29000,  temperature: 2.1},
      {month: 30000,  temperature: 2.5},
      {month: 31000,  temperature: 1.9},
      {month: 32000,  temperature: 3},
      {month: 33000,  temperature: 1.5},
      {month: 34000,  temperature: 0.9},
      {month: 35000,  temperature: 0.9},
      {month: 36000,  temperature: 0.9},
      {month: 37000,  temperature: 1.1},
      {month: 38000,  temperature: 1.3},
      {month: 39000,  temperature: 0.8},
      {month: 40000,  temperature: 2.1},
      {month: 41000,  temperature: 0.9},
      {month: 42000,  temperature: 0.8},
      {month: 43000,  temperature: 1.1},
      {month: 44000,  temperature: 0.2},
      {month: 45000,  temperature: 0.9},
      {month: 46000,  temperature: 0.8},
      {month: 47000,  temperature: 0.8},
      {month: 48000,  temperature: 0.9},
      {month: 49000,  temperature: 0.8},
      {month: 50000,  temperature: 0.6},
    ];

    const chart = new Chart({
      container: this.input.nativeElement,
      autoFit: true,
      height: 500,
    });

    chart.data(data);
    chart.scale({
      month: {
        range: [0, 1],
      },
      temperature: {
        nice: true,
      },
    });

    chart.tooltip({
      showCrosshairs: true,
      shared: true,
    });

    chart.axis('temperature', {
      label: {
        formatter: (val) => {
          return val + ' %';
        },
      },
    });

    chart
      .line()
      .position('month*temperature')
      .shape('smooth');

    chart.render();

  }

}
