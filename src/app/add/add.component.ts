import { Component, OnInit, ViewChild } from '@angular/core';

import { NgForm } from '@angular/forms';

import { Product } from './../model/product';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  @ViewChild('form') form!: NgForm;

  product!: Product;

  constructor() {}

  ngOnInit(): void {
    this.product = new Product('', '', 0);
  }
}
