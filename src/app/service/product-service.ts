import { Constants } from 'src/app/util/constants';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { WebStorage } from 'src/app/util/web-storage';

@Injectable({ providedIn: 'root' })
export class ProductService {
  products: Product[] = [];

  constructor() {}

  getAll(): Product[] {
    this.products = WebStorage.get(Constants.PRODUCTS_KEY) || [];
    return this.products;
  }

  delete(id: number): boolean {
    this.products = WebStorage.get(Constants.PRODUCTS_KEY) || [];
    this.products = this.products.filter((product) => {
      return product.id !== id;
    });

    WebStorage.set(Constants.PRODUCTS_KEY, this.products);
    return true;
  }

  save(product: Product) {
    this.products = WebStorage.get(Constants.PRODUCTS_KEY) || [];
    this.products.push(product);
    WebStorage.set(Constants.PRODUCTS_KEY, this.products);
  }
}
