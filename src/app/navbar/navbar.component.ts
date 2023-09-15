import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cartItemCount: number = 0; 

  ngOnInit(): void {
    this.updateCartCount(); 
  }

  updateCartCount(): void {
    this.cartItemCount = parseInt(localStorage.getItem("cartitemLength") || "0");
  }
}
