export class PaginationParamsDto {
  // tslint:disable-next-line:variable-name
  page_size = 4;
  page = 1;
  // tslint:disable-next-line:variable-name
  is_published: boolean;

  constructor(paginationParamsDto?: PaginationParamsDto) {
    if (paginationParamsDto) {
      this.page = paginationParamsDto?.page;
      this.page_size = paginationParamsDto?.page_size;
      this.is_published = paginationParamsDto?.is_published;
    }
  }
}
