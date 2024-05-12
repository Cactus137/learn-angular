import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  // template: `<h1>Hello world!</h1>`,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular FE';
  isStatus = true;
  products: Array<{ id: number; name: string; price: number }> = [
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
}
