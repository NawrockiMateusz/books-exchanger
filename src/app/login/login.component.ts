import { Component } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email!: string;
  password!: string;

  constructor(private auth: AuthService) {}

  login() {
    if (this.email && this.password) {
      this.auth.login(this.email, this.password);
      this.email = '';
      this.password = '';
    } else {
      alert('Please check email or password.');
    }
  }
}
