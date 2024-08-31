import { Component } from '@angular/core';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html'
})
export class OrderFormComponent {
  petId: number;
  amount: number;

  constructor(private orderService: OrderService) {}

  placeOrder() {
    const orderData = { petId: this.petId, amount: this.amount };
    this.orderService.createOrder(orderData).subscribe(response => {
      console.log('Order placed successfully', response);
      // Handle Razorpay payment...
    });
  }
}
