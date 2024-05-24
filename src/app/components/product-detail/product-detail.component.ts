import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../../intefaces/iproduct';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  @Input('product') data!: IProduct;
}
