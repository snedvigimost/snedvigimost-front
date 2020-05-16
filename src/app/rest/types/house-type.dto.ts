export class HouseTypeDto {
  id: number;
  type: string;

  constructor(data?: HouseTypeDto) {
    if (data) {
       this.id = data.id;
       this.type = data.type;
    }
  }
}
