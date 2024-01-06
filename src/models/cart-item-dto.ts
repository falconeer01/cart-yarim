import { ProductImage } from './product-image'

export interface CartItemDto{
  id:number;
  img:ProductImage;
  name:string;
  price:number;
  count:number;
}
