import { Component } from '@angular/core';
import { CartService } from '../../Shared/services/cart.service';
import { AuthService } from '../../Shared/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrl: './accessories.component.css'
})
export class AccessoriesComponent {
  bracelets = [
    { id: 1, name: 'Karperec #1', imageUrl: '/assets/bracelet1.jpg', price: 15000 },
    { id: 2, name: 'Karperec #2', imageUrl: '/assets/bracelet2.jpg', price: 20000 },
    { id: 3, name: 'Karperec #3', imageUrl: '/assets/bracelet3.jpg', price: 25000 }
  ];
  earrings = [
    { id: 1, name: 'Fülbevaló #1', imageUrl: '/assets/earrings1.jpg', price: 18000 },
    { id: 2, name: 'Fülbevaló #2', imageUrl: '/assets/earrings2.jpg', price: 22000 },
    { id: 3, name: 'Fülbevaló #3', imageUrl: '/assets/earrings3.jpg', price: 28000 },
  ];
  necklaces = [
    { id: 1, name: 'Nyaklánc #1', imageUrl: '/assets/necklace1.jpg', price: 24000 },
    { id: 2, name: 'Nyaklánc #2', imageUrl: '/assets/necklace2.jpg', price: 30000 },
    { id: 3, name: 'Nyaklánc #3', imageUrl: '/assets/necklace3.jpg', price: 36000 },
  ];
  rings = [
    { id: 1, name: 'Gyűrű #1', imageUrl: '/assets/ring1.jpg', price: 21000 },
    { id: 2, name: 'Gyűrű #2', imageUrl: '/assets/ring2.jpg', price: 27000 },
    { id: 3, name: 'Gyűrű #3', imageUrl: '/assets/ring3.jpg', price: 33000 },
  ];
selectedCurrency: any = 'HUF';

  constructor(private cartService: CartService, private authService: AuthService, private snackBar: MatSnackBar) {}
  addToCart(product: any, productArray: any) {
    if(this.authService.isLoggedIn()) {
    this.cartService.addToCart(product, productArray);
    this.snackBar.open('A termék hozzáadva a kosárhoz!', 'OK', { duration: 3000 });
    } else {
      this.snackBar.open('A termék hozzáadásához jelentkezz be!', 'OK', { duration: 3000 });
    }
  }
}
