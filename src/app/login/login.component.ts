import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '../core/services/notification.service';
import { AuthenService } from '../core/services/authen.service';
import { MessageConstants } from '../core/common/message.constants';
import { UrlConstants } from '../core/common/url.constants';
import { ViewChild } from '@angular/core';
import { ReCaptchaComponent } from 'angular2-recaptcha';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild(ReCaptchaComponent) captcha: ReCaptchaComponent;
  loading = false;
  invalidCaptchar = false;
  model: any = {};
  returnUrl: string;
  constructor(private authenService: AuthenService, private notificationService: NotificationService,
    private router: Router) { }

  ngOnInit() {
  }
  login() {
    // debugger;
    // if (this.invalidCaptchar ==false){
    //   this.notificationService.printErrorMessage(MessageConstants.WRONG_CAPTCHAR);
    //   return;
    // }
    this.loading = true;
    this.authenService.login(this.model.username, this.model.password).subscribe(data => {
      this.router.navigate([UrlConstants.HOME]);

    }, error => {
      if (error.status === 400) {
        // alert(JSON.stringify(error));
        this.notificationService.printErrorMessage(JSON.parse(error._body).error_description);
      }
      else {
        this.notificationService.printErrorMessage(MessageConstants.LOGIN_AGAIN_MSG);
      }

      this.loading = false;
    });
  }
  handleCorrectCaptcha(event:any){
    this.invalidCaptchar = (event===this.captcha.getResponse())? true:false;
    // this.captcha.reset();
    // console.log(JSON.stringify(this.captcha.getResponse()));
  }

}
