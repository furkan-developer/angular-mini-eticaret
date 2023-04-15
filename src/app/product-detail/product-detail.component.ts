import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { HttpService } from '../services/HttpService';
import { ProductService } from '../services/product-service.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(private route: ActivatedRoute,private http:ProductService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.getOneProducts(params["id"]);
    });
  }

  async getOneProducts(productId: string){
   this.product = await this.http.getOneProduct(productId);
  }
}
