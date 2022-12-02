import { Product } from './../model/product';
import { Component, OnInit } from '@angular/core';

import { ProductService } from './../service/product-service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  products?: Product[];
  id?: number;

  constructor(private service: ProductService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.service.getAll().subscribe((data: Product[]) => {
      this.products = data;
    });
  }

  modal = {
    show: false,
    text: '',
  };

  onOpenModal(product: Product) {
    this.id = product.id;
    this.modal.show = true;
    this.modal.text = `ARE YOU SURE DO YOU WANT TO DELETE THE ${product.id} - ${product.name}`;
  }

  onCloseModal(confirm: boolean) {
    if (confirm) {
      this.service.delete(this.id || 0).subscribe(() => {
        this.getAll();
      });
    }

    this.modal.show = false;
  }

  stock = {
    show: false,
    product: new Product('', '', 0),
  };

  onOpenStock(product: Product) {
    this.stock.show = true;
    this.stock.product = product;
  }

  onCloseStock(product: Product) {
    if (product) {
      this.service.update(product).subscribe(() => {
        this.getAll();
      });
    }

    this.stock.show = false;
  }
}
