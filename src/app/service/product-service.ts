import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Constants } from 'src/app/util/constants';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { WebStorage } from 'src/app/util/web-storage';

@Injectable({ providedIn: 'root' })
export class ProductService {
  products: Product[] = [];

  URL = 'http://localhost:3000/products';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  getById(id: number): Promise<Product | undefined> {
    return this.httpClient.get<Product>(`${this.URL}/${id}`).toPromise();
  }

  getAll(): Promise<Product[] | undefined> {
    return this.httpClient.get<Product[]>(this.URL).toPromise();
  }

  delete(id: number): Promise<Product | undefined> {
    return this.httpClient.delete<Product>(`${this.URL}/${id}`).toPromise();
  }

  save(product: Product): Promise<Product | undefined> {
    return this.httpClient
      .post<Product>(this.URL, JSON.stringify(product), this.httpOptions)
      .toPromise();
  }

  update(product: Product): Promise<Product | undefined> {
    return this.httpClient
      .put<Product>(
        `${this.URL}/${product.id}`,
        JSON.stringify(product),
        this.httpOptions
      )
      .toPromise();
  }
}
