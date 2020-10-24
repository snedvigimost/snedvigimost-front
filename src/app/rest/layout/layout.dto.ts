export class LayoutDto {
  id: number;
  name: string;

  constructor(data: LayoutDto) {
    this.id = data.id;
    this.name = data.name;
  }

}
