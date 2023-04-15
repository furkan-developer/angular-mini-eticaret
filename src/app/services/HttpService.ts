import { HttpClient } from "@angular/common/http";
import { ReturnStatement } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Product } from "../models/product";
import { ProductInsertModel } from "../models/ProductInsertModel";
import { Model } from "../models/model";

@Injectable({
  providedIn: "root"
})
export abstract class HttpService{

  url: string = "https://ng-onlineshop-d0ec6-default-rtdb.firebaseio.com/";
  constructor(private http: HttpClient) {
  }

  protected insert(model:any,modelUrl:string){
    return this.http.post(`${this.url}/${modelUrl}`,model);
  }

  protected getAllModel<T extends Model>(categoryId: Number):Observable<T[]>{
    return this.http.get(`${this.url}/product.json`).pipe(map((data)=>{
      let products: T[] = [];

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

  protected getOneModel<T extends Model>(firebaseId:String):Observable<T>{
    return this.http.get<T>(`${this.url}/product/${firebaseId}.json`).pipe(map((data)=>{
      let model: T;

      model = data;
      model.id = firebaseId;

      return model;
    }))
  }
}
