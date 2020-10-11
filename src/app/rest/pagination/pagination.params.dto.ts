export class PaginationParamsDto {
  // tslint:disable-next-line:variable-name
  page_size = 4;
  page = 1;
  // tslint:disable-next-line:variable-name
  is_published: boolean;
  // tslint:disable-next-line:variable-name
  rooms_count: string;

  constructor(paginationParamsDto?: PaginationParamsDto) {
    if (paginationParamsDto) {
      this.page = paginationParamsDto?.page;
      this.page_size = paginationParamsDto?.page_size;
      this.rooms_count = paginationParamsDto?.rooms_count;
      this.is_published = paginationParamsDto?.is_published;
    }
  }
}
