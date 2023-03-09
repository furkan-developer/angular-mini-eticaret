import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  constructor(private http: HttpClient) {

  }

  addProduct(){
    let product = {id: 9, productName: "Product 9", price: 50000, imgUrl: "../../assets/phone.jpg", isActive: true, description: "Lorem ipsum, dolor",categoryId:3};

    this.http.post("https://ng-onlineshop-default-rtdb.firebaseio.com/product.json",product).subscribe(
      (recievedData)=>{
        console.log(recievedData);
      }
    );
  }
}
