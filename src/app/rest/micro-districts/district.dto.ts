
export class MicroDistrictDto {
  id: number;
  name: string;

  constructor(data: MicroDistrictDto) {
    this.id = data.id;
    this.name = data.name;
  }

}
