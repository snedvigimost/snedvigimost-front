
export class DistrictDto {
  id: number;
  name: string;

  constructor(data: DistrictDto) {
    this.id = data.id;
    this.name = data.name;
  }

}
