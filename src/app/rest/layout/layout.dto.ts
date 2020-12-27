export class LayoutDto {
  id: number;
  title: string;

  constructor(data: LayoutDto) {
    this.id = data.id;
    this.title = data.title;
  }

}
