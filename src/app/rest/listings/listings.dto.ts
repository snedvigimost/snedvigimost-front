import {ImagesDto} from '../images/images.dto';

export class ListingsDto {
  id: number;
  title: string;
  address: string;
  description: string;
  price: number;
  sqft: number;
  images: ImagesDto[];

  constructor(data: ListingsDto) {
      this.id = data.id;
      this.title = data.title;
      this.address = data.address;
      this.description = data.description;
      this.images = data?.images ? data.images?.map(image => new ImagesDto(image)) : [];
      this.price = data.price;
      this.sqft = data.sqft;
  }

}
