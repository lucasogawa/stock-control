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

  constructor(private service: ProductService) {}

  ngOnInit(): void {
    this.products = this.service.getAll();
  }

  modal = {
    show: false,
    text: '',
  };

  onOpenModal() {
    this.modal.show = true;
    this.modal.text = 'ARE YOU SURE DO YOU WANT TO DELETE THE 100 - PRODUCT 1?';
  }

  onCloseModal(confirm: boolean) {
    this.modal.show = false;
  }
}
