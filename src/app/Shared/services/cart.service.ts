import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  imageUrl: string;
  amount?: number;
  arrayName?: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Product[] = JSON.parse(localStorage.getItem('cart') ?? '[]');
  private cartItemCount = new BehaviorSubject(this.cart.reduce((acc, prod) => acc + (prod.amount ?? 0), 0));
  private totalPrice = new BehaviorSubject(0);

  constructor() {
    this.updateTotalPrice();
  }

  getTotalPrice() {
    return this.totalPrice;
  }

  updateTotalPrice() {
    this.totalPrice.next(this.cart.reduce((acc, prod) => acc + (prod.price * (prod.amount ?? 0)), 0));
    localStorage.setItem('totalPrice', JSON.stringify(this.totalPrice.value));
  
  }

  getCart() {
    return this.cart;
  }

  getCartItemCount() {
    return this.cartItemCount;
  }

  addToCart(product: Product, productArray: string) {
    let added = false;
    for (let p of this.cart) {
      if (p.id === product.id && p.arrayName === productArray) {
        p.amount = (p.amount ?? 0) + 1;
        added = true;
        break;
      }
    }
    if (!added) {
      this.cart.push({...product, amount: 1, arrayName: productArray});
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.updateTotalPrice();
  }

  decreaseProduct(product: Product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id && p.arrayName === product.arrayName) {
        p.amount = (p.amount ?? 0) - 1;
        if (p.amount == 0) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.updateTotalPrice();
  }

  increaseProduct(product: Product) {
    for (let p of this.cart) {
      if (p.id === product.id && p.arrayName === product.arrayName) {
        p.amount = (p.amount ?? 0) + 1;
      }
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.updateTotalPrice();
  }

  removeProduct(product: Product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id && p.arrayName === product.arrayName) {
        if (p.amount) {
          this.cartItemCount.next(this.cartItemCount.value - p.amount);
        }
        this.cart.splice(index, 1);
      }
    }
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.updateTotalPrice();
  }
}
