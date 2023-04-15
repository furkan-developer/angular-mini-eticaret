import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './HttpService';
import { ProductInsertModel } from '../models/ProductInsertModel';
import { Product } from '../models/product';
import { firstValueFrom, last, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends HttpService{

  constructor(http: HttpClient) {
    super(http);
  }

  insertProduct(category: ProductInsertModel):String{
    let productId: String;

    super.insert(category,"product.json").subscribe((data)=>{
      if(data != null){
        productId = data["name"];
      }
    });

    return productId;
  }

  async getOneProduct(firebaseId:String):Promise<Product>{
    return await lastValueFrom(super.getOneModel<Product>(firebaseId));
  }

  async getAllProducts(categoryId:Number):Promise<Product[]>{

    const promiseData = lastValueFrom<Product[]>(super.getAllModel<Product>(categoryId));

    promiseData.then(()=>{
      console.log("Product listesi getirildi");
    })
    .catch((error)=>{
      console.log(`Product listesi getirilir iken bir hata oluştu. ${error}`);
    });

    return await promiseData;
  }
}
