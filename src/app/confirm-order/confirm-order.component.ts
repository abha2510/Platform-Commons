import { Component ,OnInit} from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.css']
})

  export class ConfirmOrderComponent implements OnInit {
    cart: any[] = [];
    total: number = 0;

    constructor(private cartService: CartService) {}

    ngOnInit() {
        this.cart = this.cartService.getCartItems();
        this.total = this.cartService.calculateTotal();
    }
}


