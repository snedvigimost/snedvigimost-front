import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

import DataSet from '@antv/data-set';
import {Chart} from '@antv/g2';

@Component({
  selector: 'app-stacked-bar-chart',
  templateUrl: './stacked-bar-chart.component.html',
  styleUrls: ['./stacked-bar-chart.component.scss']
})
export class StackedBarChartComponent implements OnInit {
  @ViewChild('stackedBarChart', {read: ElementRef, static: true}) input: ElementRef;

  calculateSumOfKeys(data) {
    return data.map((districtData: Record<string, any>) => {
      let sum = 0;
      for (const key in districtData) {
        if (districtData.hasOwnProperty(key)) {
          if (Number.isInteger(districtData[key])) {
            sum += districtData[key];
          }
        }
      }
      districtData.sum = sum;
      return districtData;
    });
  }

  ngOnInit(): void {
    // https://g2.antv.vision/en/examples/bar/stack#stacked

    // [Опублікований рейтинг найкомфортніших районів для проживання в Києві - БЖ - новини Києва на БЖ](https://bzh.life/ua/gorod/opublikovan-rejting-samyh-komfortnyh-rajonov-dlya-prozhivaniya-v-kieve)
    const rawData = [
      {State: 'Святошинський', Безпека: 7, Інфраструктура: 7, 'Зони відпочинку': 7, Екологія: 7},
      {State: 'Оболонський', Безпека: 7, Інфраструктура: 7, 'Зони відпочинку': 7, Екологія: 6},
      {State: 'Подільський', Безпека: 7, Інфраструктура: 7, 'Зони відпочинку': 7, Екологія: 7},
      {State: 'Шевченківський', Безпека: 9, Інфраструктура: 8, 'Зони відпочинку': 8, Екологія: 7},
      {State: 'Голосіївський', Безпека: 7, Інфраструктура: 7, 'Зони відпочинку': 7, Екологія: 6},
      {State: 'Дніпровський', Безпека: 6, Інфраструктура: 9, 'Зони відпочинку': 8, Екологія: 6},
      {State: 'Дарницький', Безпека: 7, Інфраструктура: 6, 'Зони відпочинку': 9, Екологія: 7},
      {State: 'Печерський', Безпека: 8, Інфраструктура: 6, 'Зони відпочинку': 7, Екологія: 5},
      {State: 'Деснянський', Безпека: 4, Інфраструктура: 6, 'Зони відпочинку': 7, Екологія: 8},
      {State: 'Солом\'янський', Безпека: 7, Інфраструктура: 7, 'Зони відпочинку': 8, Екологія: 7},
    ];

    const summed = this.calculateSumOfKeys(rawData);
    const data = summed.sort((a, b) => a.sum - b.sum);

    const ds = new DataSet();
    const dv = ds.createView().source(data);
    dv.transform({
      type: 'fold',
      fields: ['Безпека', 'Інфраструктура', 'Зони відпочинку', 'Екологія'],
      key: '年龄段',
      value: '人口数量',
      retains: ['State'],
    });

    const chart = new Chart({
      container: this.input.nativeElement,
      autoFit: true,
      height: 500,
    });

    chart.coordinate().transpose();

    chart.data(dv.rows);
    chart.scale('人口数量', {nice: true});

    chart.axis('State', {
      label: {
        offset: 12,
      },
    });

    chart.tooltip({
      shared: true,
      showMarkers: false,
    });

    chart
      .interval()
      .adjust('stack')
      .position('State*人口数量')
      .color('年龄段');

    chart.interaction('active-region');

    chart.render();
  }

}
