import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { HttpService } from '../services/HttpService';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [HttpService]
})
export class NavbarComponent {


  constructor(private httpSercive: HttpService) {

  }

  addProduct(){
    let product = {id: 11, productName: "Product 11", price: 50000, imgUrl: "../../assets/phone.jpg", isActive: true, description: "Lorem ipsum, dolor",categoryId:3};

   this.httpSercive.insertProduct(product).subscribe(
      (recievedData)=>{
        console.log(recievedData);
      }
    );
  }
}
