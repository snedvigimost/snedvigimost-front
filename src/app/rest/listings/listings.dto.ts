export class ListingsDto {
  id: number;
  title: string;
  address: string;
  description: string;
  price: number;
  sqft: number;

  constructor(data: ListingsDto) {
      this.id = data.id;
      this.title = data.title;
      this.address = data.address;
      this.description = data.description;
      this.price = data.price;
      this.sqft = data.sqft;
  }

}
