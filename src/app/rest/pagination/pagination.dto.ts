export class PaginationDto<T> {
  count: number;
  next?: number;
  links: object;
  totalPages: number;
  previous?: number;
  results: T[];
  DtoClass?: new (contentItem) => T;

  constructor(data?: PaginationDto<T>) {
    const { DtoClass } = data;
    this.results = DtoClass ? data.results?.map(contentItem => new DtoClass(contentItem)) : data.results;
    this.count = data?.count;
    this.next = data?.next;
    this.previous = data?.previous;
  }
}
