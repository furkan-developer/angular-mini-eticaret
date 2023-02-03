import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent {

  title: String = "ShoopApp";

  private products: any[] = [
    {id: 1, productName: "Product 1", price: 20000, imgUrl: "../../assets/phone.jpg", isActive: true, description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe incidunt est velit illum aliquid voluptatibus a officiis numquam mollitia quisquam?"},
    {id: 2, productName: "Product 2", price: 30000, imgUrl: "../../assets/phone.jpg", isActive: false, description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe incidunt est velit illum aliquid voluptatibus a officiis numquam mollitia quisquam?"},
    {id: 3, productName: "Product 3", price: 40000, imgUrl: "../../assets/phone.jpg", isActive: true, description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe incidunt est velit illum aliquid voluptatibus a officiis numquam mollitia quisquam?"},
    {id: 4, productName: "Product 4", price: 50000, imgUrl: "../../assets/phone.jpg", isActive: true, description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe incidunt est velit illum aliquid voluptatibus a officiis numquam mollitia quisquam?"},
    {id: 4, productName: "Product 4", price: 50000, imgUrl: "../../assets/phone.jpg", isActive: true, description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe incidunt est velit illum aliquid voluptatibus a officiis numquam mollitia quisquam?"},
  ]

  getProducts():any[]{
    return this.products.filter(p => p.isActive);
  }
}
