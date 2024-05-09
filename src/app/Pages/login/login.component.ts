import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../Shared/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  hide = true;
  constructor(private fb: FormBuilder, private router: Router, private authservice: AuthService, private snackBar: MatSnackBar) {}
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  onSubmit() {
    if (this.loginForm.valid) {
      const username = this.loginForm.value.username || '';
      const password = this.loginForm.value.password || '';
      this.authservice.login(username, password).then(cred => {
        this.snackBar.open('Sikeres bejelentkezés!', 'OK', { duration: 3000 });
        this.router.navigate(['/main']);
      }).catch(err => {
        this.snackBar.open('Hibás felhasználónév vagy jelszó!', 'OK', { duration: 3000 }) ;
      });

    }
  }
}
