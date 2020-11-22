import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Chart} from '@antv/g2';
import {Box} from '@antv/g2plot';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {
  @ViewChild('myname', {read: ElementRef, static: true}) input: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
    const data = [
      {x: 'Голосіївський', low: 1700, q1: 7_000, median: 14_975, q3: 47_000, high: 85_000},
      {x: 'Дарницький', low: 1700, q1: 6_000, median: 12_000, q3: 30_000, high: 60_000},
      {x: 'Деснянський', low: 1_500, q1: 4_500, median: 8_123, q3: 22_000, high: 55_000},
      {x: 'Дніпровський', low: 1_500, q1: 5_000, median: 9_860, q3: 25_000, high: 65_000},
      {x: 'Оболонський', low: 1_600, q1: 6_000, median: 12_800, q3: 40_000, high: 80_000},

      {x: 'Печерський', low: 1_500, q1: 9_000, median: 21_186, q3: 60_000, high: 120_000},
      {x: 'Подільський', low: 1_500, q1: 5_000, median: 10_053, q3: 40_000, high: 65_000},
      {x: 'Святошинський', low: 1_500, q1: 5_000, median: 10_000, q3: 40_000, high: 65_000},
      {x: "Солом'янський", low: 1_600, q1: 6_000, median: 12_340, q3: 40_000, high: 80_000},
      {x: "Шевченківський", low: 1_700, q1: 8_000, median: 16_417, q3: 70_000, high: 100_000},
    ];

    const boxPlot = new Box(this.input.nativeElement, {
      width: 400,
      height: 500,
      data,
      xField: 'x',
      yField: ['low', 'q1', 'median', 'q3', 'high'],
      boxStyle: {
        stroke: '#545454',
        fill: '#1890FF',
        fillOpacity: 0.3,
      },
      animation: false,
    });

    boxPlot.render();
  }

}
