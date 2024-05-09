import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map((result: any) => result.matches),
    shareReplay()
  );

  

  constructor(private router: Router, private authservice: AuthService, private breakpointObserver:BreakpointObserver ) {}
  get menuItems() {
    const items = ['Főoldal', 'Ékszerek', 'Rólunk', 'Kosár', 'Regisztráció'];
    if (this.authservice.isLoggedIn()) {
      items.push('Kijelentkezés');
    } else {
      items.push('Bejelentkezés');
    }
    return items;
  }

  navigate(item: string) {
    if(item === 'Főoldal') {
      this.router.navigate(['/main']);
    } else if(item === 'Ékszerek') {
      this.router.navigate(['/accessories']);
    } else if(item === 'Rólunk') {
      this.router.navigate(['/aboutus']);
    } else if(item === 'Bejelentkezés') {
      this.router.navigate(['/login']);
    } else if(item === 'Kijelentkezés') {
      this.authservice.logout(); 
      this.router.navigate(['/login']);
    } else if(item === 'Regisztráció') {
      this.router.navigate(['/register']);
    } else if(item === 'Kosár') {
      this.router.navigate(['/cart']);
    }
  }
}

