import { Injectable } from '@angular/core';
import { IProduct } from '../intefaces/iproduct';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('http://localhost:3000/products');
  }
  getProductById(id: number | string): Observable<IProduct> {
    return this.http.get<IProduct>('http://localhost:3000/products/' + id);
  }
  addProduct(product: IProduct) {
    return this.http.post<IProduct>('http://localhost:3000/products', product);
  }
}
