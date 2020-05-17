import { Component } from '@angular/core';

@Component({
  selector: 'app-cascader-filter',
  templateUrl: './cascader-filter.component.html',
  styleUrls: ['./cascader-filter.component.scss']
})
export class CascaderFilterComponent {
  values: any[] | null = null;

  typeOfObject = [
    {
      value: '342342',
      label: 'Квартира',
      isLeaf: true
    },
    {
      value: '342342',
      label: 'Комната',
      isLeaf: true
    },
    {
      value: '342342',
      label: 'Койко-место',
      isLeaf: true
    },
    {
      value: '342342',
      label: 'Дом/Дача',
      isLeaf: true
    },
    {
      value: '342342',
      label: 'Коттедж',
      isLeaf: true
    },
    {
      value: '342342',
      label: 'Таунхаус',
      isLeaf: true
    }
  ];

  commercial = [
    {
      value: '3423432',
      label: 'Офис',
      isLeaf: true
    },
    {
      value: '342342',
      label: 'Здание',
      isLeaf: true
    },
    {
      value: '342342',
      label: 'Торговая площадь',
      isLeaf: true
    },
    {
      value: '342342',
      label: 'Помещение свободного назначения',
      isLeaf: true
    },
    {
      value: '342342',
      label: 'Производство',
      isLeaf: true
    },
    {
      value: '342342',
      label: 'Склад',
      isLeaf: true
    },
    {
      value: '342342',
      label: 'Гараж',
      isLeaf: true
    },
    {
      value: '342342',
      label: 'Готовый бизнес',
      isLeaf: true
    },
    {
      value: '342342',
      label: 'Коммерческая земля',
      isLeaf: true
    },
  ];

  typeOfNedv = [
    {
      value: '3423432',
      label: 'Жилая',
      children: this.typeOfObject
    },
    {
      value: '342342',
      label: 'Комерческая',
      children: this.commercial
    }
  ];

  options = [
    {
      value: 'zhejiang',
      label: 'Аренда',
      children: [
        {
          value: 'hangzhou',
          label: 'Длительно',
          children: this.typeOfNedv,
        },
        {
          value: 'ningbo',
          label: 'Несколько месяцев',
          children: this.typeOfNedv,
        },
        {
          value: '45',
          label: 'Посуточно',
          children: this.typeOfNedv,
        }
      ]
    },
    {
      value: 'jiangsu',
      label: 'Продажа',
      children: this.typeOfNedv
    }
  ];

  nzOptions = this.options;

  onChanges(values) {
    console.log(values, this.values);
  }

}
