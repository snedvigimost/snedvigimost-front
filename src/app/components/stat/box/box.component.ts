import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Chart} from '@antv/g2';
import {Box} from '@antv/g2plot';
import {boxData} from "../data";

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

    const boxPlot = new Box(this.input.nativeElement, {
      width: 400,
      height: 500,
      data: boxData,
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
