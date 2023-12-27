// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  imports: [ReactiveFormsModule, FormsModule],
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = ''; // Add this line
  password: string = ''; // Add this line

    constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    const isAuthenticated = this.authService.login(this.username, this.password);

    if (isAuthenticated) {
      this.router.navigate(['/homepage']);
    } else {
      // Handle unsuccessful login (optional)
      console.log('Login failed');
    }
  }
}
