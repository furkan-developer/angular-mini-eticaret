import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductRepository } from '../models/product.repository';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent {

  title: String = "ShoopApp";

  productRepository : ProductRepository;
  products: Product[];
  basket : Product[] = [];

  constructor() {
    this.productRepository = new ProductRepository();
    this.products = this.productRepository.getProducts();
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
