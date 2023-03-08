import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { ProductRepository } from '../models/product.repository';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  productRepository: ProductRepository;
  productId: number;

  constructor(private route: ActivatedRoute) {
    this.productRepository = new ProductRepository();
    console.log("constructor");

  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productId = params["id"];
    })
    console.log("product id: " + this.productId);

    this.product = this.productRepository.getProducts().filter(p => p.id == this.productId).pop();
    console.log("product: " + this.product);
  }

}
