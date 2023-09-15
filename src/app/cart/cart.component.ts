import { Component ,OnInit} from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: any[] = [];
  total: number = 0;


  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cart = this.cartService.getCartItems()
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = this.cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  }
  removeFromCart(productId: number) {
    this.cartService.removeItem(productId);
    this.cart = this.cartService.getCartItems(); // Refresh cart items after removal
    this.calculateTotal();
}

}


