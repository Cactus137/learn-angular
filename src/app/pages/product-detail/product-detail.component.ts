import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../intefaces/iproduct';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  product!: IProduct;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    // // cach 1: tra ve 1 observable
    // this.route.paramMap.subscribe((params) => {
    //   console.log(params.get('id'));
    // });
    // cach 2: tra ve 1 object
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.productService.getProductById(id).subscribe((product) => {
        this.product = product;
      });
    });

    // // cach 3: tra ve 1 snapshot (chi chay 1 lan roi thoi)
    // this.route.snapshot.paramMap.get('id');
  }
}
