import { Component } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {
  email!: string;

  constructor(private authService: AuthService) {}

  forgotPassword() {
    this.authService.forgotPassword(this.email);
    this.email = '';
  }
}
