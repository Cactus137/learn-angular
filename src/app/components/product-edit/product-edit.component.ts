import { Component, Input } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../intefaces/iproduct';

@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css',
})
export class ProductEditComponent {
  @Input() itemId!: number;
  product!: IProduct[];
  constructor(private productService: ProductService) {
    
  }
  editProduct(form: any) {
    this.productService.getOne(this.itemId).subscribe((product) => {
      this.product = product;
    });
  }
}
