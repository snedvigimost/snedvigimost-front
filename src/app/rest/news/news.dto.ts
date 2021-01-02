export class NewsDto {
  id?: number;
  title: string;
  subtitle: string;
  imageUrl: string;
  body: string;
  slug: string;
  createdAt?: string;

  constructor(data: NewsDto) {
    this.id = data.id;
    this.title = data.title;
    this.subtitle = data.subtitle;
    this.imageUrl = data.imageUrl;
    this.body = data.body;
    this.slug = data.slug;
    this.createdAt = data.createdAt;
  }

}
