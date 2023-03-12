import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { HttpService } from '../services/HttpService';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [HttpService]
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(private route: ActivatedRoute,private http:HttpService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.getOneProducts(params["id"]);
    });
  }

  getOneProducts(productId: string){
    this.http.getOneProducts(productId).subscribe((recievedData)=>{
      this.product = recievedData;
    });
  }
}
