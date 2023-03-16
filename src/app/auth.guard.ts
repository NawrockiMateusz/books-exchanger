import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private fireauth: AngularFireAuth) {}

  async canActivate() {
    const token = localStorage.getItem('id_token');
    // const user = await this.fireauth.currentUser;

    if (token != null) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
