import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../products-list';
import { Product } from '../product';


@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = PRODUCTS;
  selectedProduct?: Product;

  constructor() { }

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

  ngOnInit(): void {
  }

}
