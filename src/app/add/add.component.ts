import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { ProductService } from './../service/product-service';

import { Product } from './../model/product';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  @ViewChild('form') form!: NgForm;

  product!: Product;
  modal = {
    show: false,
    text: '',
  };

  constructor(private router: Router, private service: ProductService) {}

  ngOnInit(): void {
    this.product = new Product('', '', 0);
  }

  onSubmit() {
    this.service.save(this.product);
    this.form.reset();
    this.onOpenModal();
  }

  onOpenModal() {
    this.modal.show = true;
    this.modal.text = 'PRODUCT ADDED!';
  }

  onCloseModal() {
    this.modal.show = false;
    this.router.navigate(['/list']);
  }
}
