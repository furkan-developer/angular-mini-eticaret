import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { ProductRepository } from '../models/product.repository';
import { HttpService } from '../services/HttpService';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css'],
  providers: [HttpService]
})
export class ProductlistComponent implements OnInit{

  title: String = "ShoopApp";

  productRepository : ProductRepository;
  products: Product[] = [];
  basket : Product[] = [];

  constructor(private route: ActivatedRoute,private http: HttpService) {
    this.productRepository = new ProductRepository();
  }

  ngOnInit(): void {
    this.route.params.subscribe((param)=>{
      if(param["id"]){
        this.products = this.productRepository.getProducts().filter(p=> p.categoryId == param["id"]);
      }
    });
    this.getAllProducts();
  }

  getAllProducts(){
    this.http.getAllProducts().subscribe((recivedData)=>{
      for(const key in recivedData){
        this.products.push(recivedData[key]);
        console.log(recivedData[key]);
      }
    });
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
