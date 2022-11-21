import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from '../model/product';

@Injectable({ providedIn: 'root' })
export class ProductService {
  URL = 'http://localhost:3000/products';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  getById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.URL}/${id}`);
  }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.URL);
  }

  delete(id: number): Observable<Product> {
    return this.httpClient.delete<Product>(`${this.URL}/${id}`);
  }

  save(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(
      this.URL,
      JSON.stringify(product),
      this.httpOptions
    );
  }

  update(product: Product): Observable<Product> {
    return this.httpClient.put<Product>(
      `${this.URL}/${product.id}`,
      JSON.stringify(product),
      this.httpOptions
    );
  }
}
