import { Component, Input, ViewChild } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  @Input()
  productListCom: ProductListComponent = undefined;

  product: Product;

  ngOnInit() {
    this.product = this.productListCom.selectedProduct;
  }
}
