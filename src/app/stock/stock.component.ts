import { Product } from './../model/product';
import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  SimpleChanges,
} from '@angular/core';

interface StockContent {
  product: Product;
  show: boolean;
}

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css'],
})
export class StockComponent implements OnInit {
  @Input() content: StockContent = {
    product: new Product('', '', 0),
    show: false,
  };
  @Input() show: boolean = false;
  @Output() closeEvent = new EventEmitter<Product>();

  @ViewChild('stock') stock?: ElementRef;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.show) {
      M.Modal.init(this.stock?.nativeElement, {})?.open();
    }
  }

  onClose() {
    this.closeEvent.emit(new Product('', '', 0));
  }

  onSubmit() {
    this.closeEvent.emit(this.content.product);
  }

  ngOnInit(): void {}
}
