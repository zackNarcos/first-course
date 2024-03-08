import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
    this.authService.login(this.username, this.password).subscribe((loggedIn: boolean) => {
      if (loggedIn) {
        this.router.navigate(['/students']);
      } else {
        this.errorMessage = 'Identifiants incorrects';
      }
    });
  }
}
