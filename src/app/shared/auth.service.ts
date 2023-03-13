import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { catchError, from, pipe, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private idToken: string | null = null;

  constructor(private fireauth: AngularFireAuth, private router: Router) {}

  getIdToken(): string | null {
    return this.idToken;
  }

  login(email: string, password: string) {
    this.fireauth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        if (userCredential.user) {
          userCredential.user.getIdToken().then((idToken) => {
            localStorage.setItem('id_token', idToken);
            this.router.navigate(['/home']);
          });
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  register(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then(
      () => {
        alert('Registration successful!');
        this.router.navigate(['/login']);
      },
      (err) => {
        alert(err.message);
        this.router.navigate(['/registration']);
      }
    );
  }

  logout() {
    this.fireauth.signOut().then(
      () => {
        localStorage.removeItem('id_token');
        this.router.navigate(['/login']);
      },
      (err) => {
        alert(err.message);
      }
    );
  }
}
