import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(username: string, password: string): Observable<boolean> {
    // Implémentez la logique d'authentification ici
    // Par exemple, vérifiez les informations d'identification et renvoyez true si elles sont valides, sinon false
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('currentUser', 'admin');
      return of(true);
    } else {
      return of(false);
    }
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('currentUser');
  }
}
