import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = []; 
  constructor() {}

  getCartItems(): any[] {
    return this.cartItems;
  }


  getCartItem(productId: number): any {
    return this.cartItems.find(cartItem => cartItem.id === productId);
  }
  addToCart(item: any) {
    const existingItem = this.cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;  
    } else {
      this.cartItems.push({ ...item, quantity: 1 });  
    }
  }


  removeFromCart(itemId: number) {
    this.cartItems = this.cartItems.filter(item => item.id !== itemId);
  }


  updateQuantity(itemId: number, quantity: number) {
    const item = this.cartItems.find(cartItem => cartItem.id === itemId);
    if (item) {
      item.quantity = quantity;
    }
  }


  calculateTotal(): number {
    return this.cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  }

  clearCart() {
    this.cartItems = [];
  }


removeItem(productId: number) {
  const index = this.cartItems.findIndex(item => item.id === productId);
  if (index !== -1) {
      this.cartItems.splice(index, 1);
  }
}

}
