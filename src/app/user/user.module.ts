import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";

import { ProfileComponent } from './user-profile/user-profile.component';
import { LoginComponent } from "./login/login.component";

import { userRoutes } from './user.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [
    ProfileComponent,
    LoginComponent
  ],
  providers: [

  ]
})
export class UserModule {

}
