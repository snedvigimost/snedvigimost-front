export class ImagesDto {
  id: number;
  photo: string;

  constructor(data?: ImagesDto) {
    this.id = data.id;
    this.photo = data?.photo;
  }

}
