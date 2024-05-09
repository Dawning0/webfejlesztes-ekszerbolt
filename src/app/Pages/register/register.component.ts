import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../Shared/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../../Shared/data/User';
import { UserService } from '../../Shared/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService, private snackBar: MatSnackBar, private userService: UserService) {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const email = this.registerForm.value.email || '';
      const password = this.registerForm.value.password || '';
      const confirmPassword = this.registerForm.value.confirmPassword || '';
      if (password !== confirmPassword) {
        this.snackBar.open('A két jelszó nem egyezik!', 'OK', { duration: 3000 });
        return;
      }
      this.authService.register(email, password).then(cred => {
        this.snackBar.open('Sikeres regisztráció!', 'OK', { duration: 3000 });
        this.router.navigate(['/login']);
        const user: User = {
          id: cred.user?.uid as string,
          email: this.registerForm.get('email')?.value as string,
          username: this.registerForm.get('email')?.value.split('@')[0] as string
        };
        this.userService.createUser(user).then(() => {}).catch(err => {console.log(err);});
      }).catch(err => {
        this.snackBar.open('Hiba a regisztráció során!', 'OK', { duration: 3000 });
      });
    }
  }

}
