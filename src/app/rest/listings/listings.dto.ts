import {ImagesDto} from '../images/images.dto';
import {HouseTypeDto} from '../types/house-type.dto';

export class ListingsDto {
  id: number;
  title: string;
  address: string;
  year: number;
  roomsCount: number;
  description: string;
  price: number;
  sqft: number;
  totalArea: number;
  livingArea: number;
  kitchenArea: number;
  floor: number;
  floorInHouse: number;
  phoneNumber: string;
  publicationDate: string;
  images: ImagesDto[];
  type: HouseTypeDto;

  constructor(data: ListingsDto) {
    this.id = data.id;
    this.title = data.title;
    this.address = data.address;
    this.year = data.year;
    this.roomsCount = data.roomsCount;
    this.description = data.description;
    this.images = data?.images ? data.images?.map(image => new ImagesDto(image)) : [];
    this.price = data.price;
    this.sqft = data.sqft;
    this.phoneNumber = data.phoneNumber;
    this.totalArea = data.totalArea;
    this.livingArea = data.livingArea;
    this.publicationDate = data.publicationDate;
    this.kitchenArea = data.kitchenArea;
    this.floor = data.floor;
    this.floorInHouse = data.floorInHouse;
    this.type = new HouseTypeDto(data.type);
  }

}
