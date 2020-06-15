export class PaginationParamsDto {
  // tslint:disable-next-line:variable-name
  is_published: boolean;

  constructor(paginationParamsDto?: PaginationParamsDto) {
    this.is_published = paginationParamsDto?.is_published;
  }
}
