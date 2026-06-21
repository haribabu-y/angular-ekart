import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class containerComponent {
  // name: string = 'iPhone 13';
  // product = {
  //   name: 'iPhone 13',
  //   price: 999,
  //   color: 'Black',
  //   discount : 8,
  //   description: 'Latest model with improved camera',
  //   inStock: 5,
  //   image: "/assets/iphone16.jpg"
  // }

  // cart_value: number = 0;

  // generateDiscountedPrice() {
  //   return this.product.price - (this.product.price * this.product.discount / 100);
  // }

  // onNameChange(event: any) { 
  //   console.log(event);
  //   this.name = event.target.value;
  // }

  // incrementCartValue() {
  //   if(this.cart_value < this.product.inStock) {
  //     this.cart_value++;
  //   }
  // }

  // decrementCartValue() {
  //   if(this.cart_value > 0) {
  //     this.cart_value--;
  //   }
  // }

  listOfString: string[] = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];


  searchText: string = '';

   @ViewChild('productListComponent') productListComponent: ProductListComponent;


  setSearchText(text: string) {
    this.searchText = text;
  }
}
