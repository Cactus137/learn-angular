import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    ProductDetailComponent,
    ProductAddComponent,
    ProductListComponent,
    ProductEditComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  // isSpecial = true;
  // selectedProduct!: IProduct;
  // removeItem(id: number) {
  //   const confirm = window.confirm('Are you sure??');
  //   if (confirm) {
  //     this.products = this.products.filter(product => product.id !== id);
  //   }
  // }
  // onHandleAdd(product: any) {
  //   this.products.push({
  //     name: product.name,
  //     price: product.price,
  //     description: product.description,
  //     imageUrl: product.image,
  //   });
  // }
  // setItem(product: IProduct) {
  //   this.selectedProduct = product;
  // }
  // onHandleRemove(name: string) {
  //   console.log(name);
  // }
  selectedItemId!: number;

  handleEditItemId(id: number) {
    this.selectedItemId = id;
  }
}
