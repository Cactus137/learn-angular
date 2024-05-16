import { IProduct } from './intefaces/iproduct';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ProductDetailComponent],
  templateUrl: './app.component.html',
  // template: `<h1>Hello world!</h1>`,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular FE';
  isStatus = true;
  selectedProduct: IProduct | undefined;
  products: IProduct[] = [
    {
      id: 1,
      name: 'Product 1',
      price: 10.99,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 19.99,
    },
    {
      id: 3,
      name: 'Product 3',
      price: 7.99,
    },
  ];

  onDelete(id: number) {
    this.products = this.products.filter((product) => product.id !== id);
  }

  onInfo(product: any) {
    this.selectedProduct = product;
  }

  onShowHandle(name: String) {
    console.log(name);
  }

  onAdd(product: IProduct) {
    this.products.push(product);
  }
}
