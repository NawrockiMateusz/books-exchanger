import { Component } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  email!: string;
  password!: string;

  constructor(private auth: AuthService) {}

  register() {
    if (this.email === '') {
      alert('Please enter email');
      return;
    }
    if (this.password === '') {
      alert('Please enter password');
      return;
    }

    this.auth.register(this.email, this.password);
    this.email = '';
    this.password = '';
  }
}
