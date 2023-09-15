import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {
  cart: any[] = [];
  total: number = 0;
  products: any[] = [];

  constructor(private http: HttpClient, private cartService: CartService) {}

  ngOnInit(): void {
    this.http.get('/assets/products.json').subscribe((data: any) => {
      this.products = data;
    });
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    
   
  }

  getQuantity(product: any): number {
    const item = this.cartService.getCartItem(product.id);  
    return item ? item.quantity : 0;
  }
  increment(product: any) {
    this.cartService.updateQuantity(product.id, this.getQuantity(product) + 1);
  }

  decrement(product: any) {
    this.cartService.updateQuantity(product.id, this.getQuantity(product) - 1);
  }
}
