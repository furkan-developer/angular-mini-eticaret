import { HttpClient } from "@angular/common/http";
import { ReturnStatement } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Product } from "../models/product";
import { ProductInsertModel } from "../models/ProductInsertModel";

@Injectable()
export class HttpService{

  url: string = "https://ng-onlineshop-default-rtdb.firebaseio.com";
  constructor(private http: HttpClient) {
  }

  insertProduct(product: ProductInsertModel):Observable<object>{
    return this.http.post(`${this.url}/product.json`,product);
  }

  getAllProducts(categoryId: number):Observable<Product[]>{
    return this.http.get(`${this.url}/product.json`).pipe(map((data)=>{
      let products: Product[] = [];

      for(const key in data){
        if(categoryId && data[key].categoryId != categoryId)
          continue;

        let product = {...data[key]};
        product.id = key;
        products.push(product);
      }
      return products;
    }));
  }

  getOneProducts(firebaseId: string):Observable<Product>{
    return this.http.get<Product>(`${this.url}/product/${firebaseId}.json`).pipe(map((data)=>{
      let product: Product;

      product = data;
      product.id = firebaseId;

      return product;
    }))
  }
}
