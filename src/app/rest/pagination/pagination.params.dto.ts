export class PaginationParamsDto {
  // tslint:disable-next-line:variable-name
  page_size = 4;
  page = 1;
  // tslint:disable-next-line:variable-name
  is_published: boolean;
  // tslint:disable-next-line:variable-name
  rooms_count: string;
  // tslint:disable-next-line:variable-name
  min_price = 1000;
  // tslint:disable-next-line:variable-name
  max_price = 30000;
  // tslint:disable-next-line:variable-name
  min_area = 0;
  // tslint:disable-next-line:variable-name
  max_area = 100;
  sorting = '';
  district = '';

  constructor(paginationParamsDto?: PaginationParamsDto) {
    if (paginationParamsDto) {
      this.page = paginationParamsDto?.page;
      this.page_size = paginationParamsDto?.page_size;
      this.rooms_count = paginationParamsDto?.rooms_count;
      this.is_published = paginationParamsDto?.is_published;
      this.min_price = paginationParamsDto?.min_price;
      this.min_price = paginationParamsDto?.min_price;
      this.min_area = paginationParamsDto?.min_area;
      this.max_area = paginationParamsDto?.max_area;
      this.sorting = paginationParamsDto?.sorting;
      this.district = paginationParamsDto?.district;
    }
  }
}
