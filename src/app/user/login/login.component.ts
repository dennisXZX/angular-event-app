import { Component } from '@angular/core';
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  constructor(private authService: AuthService,
              private router: Router) {

  }

  login(formValues) {
    // call the authService to authenticate user
    this.authService.loginUser(formValues.userName, formValues.password);

    // redirect user to all event page after successfully login
    this.router.navigate(['events']);
  }

  cancel() {
    // redirect user to all event page if user clicks cancel
    this.router.navigate(['events']);
  }
}
