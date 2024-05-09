import { Component, OnInit } from '@angular/core';
import { CartService } from '../../Shared/services/cart.service';
import { Product } from '../../Shared/services/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cart: Product[] = [];
selectedCurrency: any = 'HUF';

  constructor(public cartService: CartService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }

  payment() {
    this.snackBar.open('Fejlesztés alatt', 'OK', {
      duration: 3000
    });
  }
}
