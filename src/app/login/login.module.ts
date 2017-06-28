import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NotificationService } from '../core/services/notification.service';
import { AuthenService } from '../core/services/authen.service';
import { UtilityService } from '../core/services/utility.service';
import { LoginComponent } from './login.component';
import { ReCaptchaModule } from 'angular2-recaptcha';

const loginRoutes: Routes = [
  { path: '', component: LoginComponent }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(loginRoutes),
    FormsModule,
    ReCaptchaModule
  ],
  providers: [AuthenService, NotificationService, UtilityService],
  declarations: [LoginComponent]
})
export class LoginModule { }
