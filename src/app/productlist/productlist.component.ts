import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { ProductRepository } from '../models/product.repository';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit{

  title: String = "ShoopApp";

  productRepository : ProductRepository;
  products: Product[];
  basket : Product[] = [];

  constructor(private route: ActivatedRoute) {
    this.productRepository = new ProductRepository();
    this.products = this.getAllProducts();
  }

  ngOnInit(): void {
    this.route.params.subscribe((param)=>{
      if(param["id"]){
        this.products = this.productRepository.getProducts().filter(p=> p.categoryId == param["id"]);
      }
    });
  }

  getAllProducts(){
    return this.productRepository.getProducts();
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
