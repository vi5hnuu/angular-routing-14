export interface IProduct{
  "id": number|null,
  "productName": string,
  "productCode": string,
  "releaseDate": string,
  "description": string,
  "price": number,
  "starRating": number,
  "imageUrl": string,
  category:string,
  tags:string[]
}

export interface ProductResolved {
  product:IProduct|null;
  error?:any;
}
