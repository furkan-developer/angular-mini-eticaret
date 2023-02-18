import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-basket-product',
  templateUrl: './basket-product.component.html',
  styleUrls: ['./basket-product.component.css']
})
export class BasketProductComponent {
  @Input() product : Product;
  @Output() removeProductEvent = new EventEmitter<Product>();

  removeProduct(){
    console.log("Passed product"+ this.product.productName);

    this.removeProductEvent.emit(this.product);
  }
}
