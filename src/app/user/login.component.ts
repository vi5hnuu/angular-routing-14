import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from './auth.service';
import {Router} from "@angular/router";

@Component({
  selector:'vi-login',
  templateUrl: './login.component.html',
  styleUrls:['login.component.scss']
})
export class LoginComponent {
  errorMessage = '';
  pageTitle = 'Log In';

  constructor(private authService: AuthService,private router:Router) { }

  login(loginForm: NgForm): void {
    if (loginForm && loginForm.valid) {
      const userName = loginForm.form.value.userName;
      const password = loginForm.form.value.password;
      this.authService.login(userName, password);

      this.router.navigate(['/products'])
    } else {
      this.errorMessage = 'Please enter a user name and password.';
    }
  }
}
