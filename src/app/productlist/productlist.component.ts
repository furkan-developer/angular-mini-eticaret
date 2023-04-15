import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs';
import { Product } from '../models/product';
import { HttpService } from '../services/HttpService';
import { ProductService } from '../services/product-service.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css'],
})
export class ProductlistComponent implements OnInit{

  title: String = "ShoopApp";

  products: Product[] = [];
  basket : Product[] = [];

  constructor(private route: ActivatedRoute,private http: ProductService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((param)=>{
      this.getAllProducts(param["id"]);
    });
  }

  async getAllProducts(categoryId: Number){
    this.products = await this.http.getAllProducts(categoryId);
  }

  async getOneProduct(firebaseId: string){
    return await this.http.getOneProduct(firebaseId);
  }

  addBasket(product: Product){
    console.log("Recived product in parent component : " + product.productName);
    this.basket.push(product);
  }

  onRemoveProduct(product: Product) {
    console.log("Trigger event");

    const index : number = this.basket.indexOf(product);
    if(index !== -1){
      console.log("Current product");

      this.basket.splice(index,1);
    }
    console.log(this.basket);
  }
}
