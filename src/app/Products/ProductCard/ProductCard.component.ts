import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/_Model/Product';

@Component({
  selector: 'app-ProductCard',
  templateUrl: './ProductCard.component.html',
  styleUrls: ['./ProductCard.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;

  constructor() { }

  ngOnInit() {
  }

}
