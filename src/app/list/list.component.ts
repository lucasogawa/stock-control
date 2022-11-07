import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  modal = {
    show: false,
    text: '',
  };

  onOpenModal() {
    this.modal.show = true;
    this.modal.text = 'ARE YOU SURE DO YOU WANT TO DELETE THE 100 - PRODUCT 1?';
  }

  onCloseModal() {
    this.modal.show = false;
  }
}
