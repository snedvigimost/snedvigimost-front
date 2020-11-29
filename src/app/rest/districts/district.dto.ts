import {MicroDistrictDto} from '../micro-districts/district.dto';

export class DistrictDto {
  id: number;
  name: string;
  microDistricts: MicroDistrictDto[];
  translations: any;

  constructor(data: DistrictDto) {
    this.id = data.id;
    this.name = data.name;
    this.microDistricts = data.microDistricts;
    this.translations = data.translations;
  }

}
