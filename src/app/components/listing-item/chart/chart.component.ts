import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Chart} from '@antv/g2';

@Component({
  selector: 'app-chart-stat',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartStatComponent implements OnInit {
  @ViewChild('myname', {read: ElementRef, static: true}) input: ElementRef;

  constructor() {
  }

  ngOnInit(): void {

    const data = [
      {month: 'Jan', city: 'Місто Київ', temperature: 10000},
      {month: 'Jan', city: 'Оболонский район', temperature: 10500},
      // {month: 'Jan', city: 'Це оголошення', temperature: 10500},

      {month: 'Feb', city: 'Місто Київ', temperature: 10000},
      {month: 'Feb', city: 'Оболонский район', temperature: 10500},
      // {month: 'Feb', city: 'Це оголошення', temperature: 10500},

      {month: 'Mar', city: 'Місто Київ', temperature: 10000},
      {month: 'Mar', city: 'Оболонский район', temperature: 10500},
      // {month: 'Mar', city: 'Це оголошення', temperature: 10500},

      {month: 'Apr', city: 'Місто Київ', temperature: 10000},
      {month: 'Apr', city: 'Оболонский район', temperature: 10500},
      // {month: 'Apr', city: 'Це оголошення', temperature: 10500},

      {month: 'May', city: 'Місто Київ', temperature: 10000},
      {month: 'May', city: 'Оболонский район', temperature: 10500},
      // {month: 'May', city: 'Це оголошення', temperature: 10500},

      {month: 'Jun', city: 'Місто Київ', temperature: 10000},
      {month: 'Jun', city: 'Оболонский район', temperature: 10500},
      // {month: 'Jun', city: 'Це оголошення', temperature: 10500},

      {month: 'Jul', city: 'Місто Київ', temperature: 10000},
      {month: 'Jul', city: 'Оболонский район', temperature: 10500},
      // {month: 'Jul', city: 'Це оголошення', temperature: 10500},

      {month: 'Aug', city: 'Місто Київ', temperature: 10500},
      {month: 'Aug', city: 'Оболонский район', temperature: 11100},
      // {month: 'Aug', city: 'Це оголошення', temperature: 10700},

      {month: 'Sep', city: 'Місто Київ', temperature: 11100},
      {month: 'Sep', city: 'Оболонский район', temperature: 11500},
      {month: 'Sep', city: 'Це оголошення', temperature: 11300},

      {month: 'Oct', city: 'Місто Київ', temperature: 11300},
      {month: 'Oct', city: 'Оболонский район', temperature: 11500},
      {month: 'Oct', city: 'Це оголошення', temperature: 11600},

      {month: 'Nov', city: 'Місто Київ', temperature: 11300},
      {month: 'Nov', city: 'Оболонский район', temperature: 11500},
      {month: 'Nov', city: 'Це оголошення', temperature: 11700},

      {month: 'Dec', city: 'Місто Київ', temperature: 11400},
      {month: 'Dec', city: 'Оболонский район', temperature: 11800},
      {month: 'Dec', city: 'Це оголошення', temperature: 11700},
    ];

    const chart = new Chart({
      container: this.input.nativeElement,
      autoFit: false,
      height: 500,
      width: 1000
    });

    chart.data(data);
    chart.scale({
      month: {
        range: [0, 1],
      },
      temperature: {
        min: 9000,
        max: 13000,
      },
    });


    chart.tooltip({
      showCrosshairs: true,
      shared: true,
    });

    chart.axis('temperature', {
      label: {
        formatter: (val) => {
          return val + ' ₴';
        },
      },
    });

    chart
      .line()
      .position('month*temperature')
      .color('city')
      .shape('smooth');

    chart
      .point()
      .position('month*temperature')
      .color('city')
      .shape('circle');

    chart.render();

  }

}
