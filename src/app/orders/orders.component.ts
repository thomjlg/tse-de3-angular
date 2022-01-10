import { Component, OnInit } from '@angular/core';
import { ORDERS } from '../orders-list';
import { Order } from '../orders';

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders = ORDERS;
  selectedOrder?: Order;

  constructor() { }

  onSelect(order: Order): void {
    this.selectedOrder = order;
  }

  ngOnInit(): void {
  }

}
