import { IProduct } from './../../intefaces/iproduct';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css',
})
export class ProductAddComponent {
  constructor(private productService: ProductService) {}
  addProduct(form: any) {
    this.productService.addProduct(form.value).subscribe((product) => {
      window.location.reload();
    });
  }
}
