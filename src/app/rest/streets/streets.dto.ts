
export class StreetDto {
  id: number;
  name: string;
  district: number;

  constructor(data: StreetDto) {
    this.id = data.id;
    this.name = data.name;
    this.district = data.district;
  }

}
