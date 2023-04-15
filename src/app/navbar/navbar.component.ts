import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ProductlistComponent } from '../productlist/productlist.component';
import { HttpService } from '../services/HttpService';
import { ProductService } from '../services/product-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {


  constructor(private httpSercive: ProductService) {

  }

  addProduct(){
    let product = {productName: "Product 2", price: 50000, imgUrl: "../../assets/phone.jpg", isActive: true, description: "Lorem ipsum, dolor",categoryId:1};

   this.httpSercive.insertProduct(product);
  }
}
