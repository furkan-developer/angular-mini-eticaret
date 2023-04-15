import { Model } from "./model";

export interface Product extends Model{
  productName: string,
  price: number,
  imgUrl: string,
  isActive: boolean,
  description: string,
  categoryId: number
}
