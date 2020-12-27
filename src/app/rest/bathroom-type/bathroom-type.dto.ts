export class BathroomTypeDto {
  id: number;
  title: string;

  constructor(data: BathroomTypeDto) {
    this.id = data.id;
    this.title = data.title;
  }

}
