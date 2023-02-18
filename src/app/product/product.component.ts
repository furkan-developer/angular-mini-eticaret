import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: any;
  @Output() selectedProduct = new EventEmitter<Product>();

  addBasket(product: Product) {
    console.log("Passed product to emitter. That name of product : "+product.productName);
    this.selectedProduct.emit(product);
  }

}
