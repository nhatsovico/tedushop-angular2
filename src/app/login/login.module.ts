import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { Routes,RouterModule } from '@angular/router';
import { NotificationService } from '../core/services/notification.service';
import { AuthenService } from '../core/services/authen.service';
import { LoginComponent } from './login.component';

const loginRoutes:Routes = [
  {path:'',component: LoginComponent}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(loginRoutes),
    FormsModule, HttpModule
  ],
  providers:[AuthenService,NotificationService],
  declarations: [LoginComponent]
})
export class LoginModule { }
