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

}
