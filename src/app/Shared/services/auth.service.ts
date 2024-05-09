import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private LoggedInStatus: boolean = false;

  constructor(private auth: AngularFireAuth) { 
    const savedStatus = localStorage.getItem('isLoggedIn');
    this.LoggedInStatus = savedStatus ? JSON.parse(savedStatus) : false;
  }

  isLoggedIn(): boolean {
    return this.LoggedInStatus;
  }

  login(email: string, password: string) {
    this.LoggedInStatus = true;
    localStorage.setItem('isLoggedIn', 'true');
    return this.auth.signInWithEmailAndPassword(email, password)
  }

  logout() {
    this.LoggedInStatus = false;
    localStorage.setItem('isLoggedIn', 'false');
    return this.auth.signOut();
  }

  register(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }
}
