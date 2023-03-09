import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../models/product";

@Injectable()
export class HttpService{

  url: string = "https://ng-onlineshop-default-rtdb.firebaseio.com/product.json";
  constructor(private http: HttpClient) {
  }

  insertProduct(product: Product):Observable<object>{
    return this.http.post(this.url,product);
  }
}
