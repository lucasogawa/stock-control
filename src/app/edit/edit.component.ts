import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from './../model/product';
import { ProductService } from './../service/product-service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  @ViewChild('form') form!: NgForm;

  idParam!: number;
  product!: Product;

  modal = {
    show: false,
    text: '',
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: ProductService
  ) {}

  ngOnInit(): void {
    this.idParam = +this.route.snapshot.paramMap.get('id')!;
    this.service.getById(this.idParam).subscribe((data: Product) => {
      this.product = data;
    });
  }

  reset() {
    this.form.reset();
  }

  onSubmit() {
    this.service.update(this.product!).subscribe(() => {
      this.form.reset();
      this.onOpenModal();
    });
  }

  onOpenModal() {
    this.modal.show = true;
    this.modal.text = 'PRODUCT UPDATED!';
  }

  onCloseModal() {
    this.modal.show = false;
    this.router.navigate(['/list']);
  }
}
