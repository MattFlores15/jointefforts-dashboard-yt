// auth.service.ts
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;

  login(username: string, password: string): boolean {
    // Replace the following lines with your actual login logic
    const validUsername = 'user';
    const validPassword = 'password';

    if (username === validUsername && password === validPassword) {
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;
    }

    return this.isAuthenticated;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
