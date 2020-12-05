import {ColDef} from 'ag-grid-community';
import {ValueGetterParams} from 'ag-grid-community/dist/lib/entities/colDef';

export const defaultColDef: ColDef = {
  sortable: true,
  filter: true,
  resizable: true,
};

export const columnDefs: ColDef[] = [
  {
    headerName: 'Адрес',
    field: 'address',
    checkboxSelection: true,
    minWidth: 200
  },
  {
    headerName: 'Подпись',
    field: 'title',
    minWidth: 300
  },
  {
    headerName: 'Район',
    field: 'district.name'
  },
  {
    headerName: 'Источник',
    field: 'source'
  },
  {
    headerName: 'Тип',
    field: 'type.type'
  },
  {
    headerName: 'Комнат',
    field: 'roomsCount'
  },
  {
    headerName: 'Етаж',
    valueGetter: renderFloor,
  },
  {
    headerName: 'Площа',
    valueGetter: renderArea,
  },
  {
    headerName: 'Цена',
    valueGetter: renderPrice,
  },
  {
    headerName: 'Телефон',
    field: 'phoneNumber'
  },
  {
    headerName: 'Дата',
    field: 'publicationDate'
  }
];

const fieldOrEmpty = (field) => field ? field : '-';

function renderFloor(params: ValueGetterParams): string {
  return `${fieldOrEmpty(params.data.floor)} / ${fieldOrEmpty(params.data.floorInHouse)}`;
}

function renderArea(params: ValueGetterParams): string {
  return `${fieldOrEmpty(params.data.totalArea)} / ${fieldOrEmpty(params.data.livingArea)} / ${fieldOrEmpty(params.data.kitchenArea)} `;
}

function renderPrice(params: ValueGetterParams): string {
  return `${params.data.price ? `${params.data.price} грн` : '-'} `;
}
