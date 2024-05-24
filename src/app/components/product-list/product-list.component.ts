import { Component, EventEmitter, Output } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../intefaces/iproduct';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  @Output() editProduct = new EventEmitter<IProduct>();
  products!: IProduct[];
  product!: IProduct[];

  constructor(private productService: ProductService) {
    this.productService.getAll().subscribe((products) => {
      this.products = products;
    });
  }

  removeItem(id: number) {
    const confirm = window.confirm('Are you sure??');
    if (confirm) {
      this.productService.deleteProduct(id).subscribe(() => {
        this.products = this.products.filter((product) => product.id !== id);
      });
    }
  }

  editItem(id: number) {
    this.productService.getOne(id).subscribe((product) => {
      this.product = product;
      // this.editProduct.emit(this.product);
    });
  }
}
