import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';
import { SystemContants } from '../common/system.constants';
import { AuthenService } from './authen.service';
import { NotificationService } from './notification.service';
import { UtilityService } from './utility.service';
import { Observable } from 'rxjs/observable';
import {MessageConstants} from '../common/message.constants';

@Injectable()
export class DataService {
  private headers: Headers;
  constructor(private _http: Http, private _router: Router, private _authenService: AuthenService,
    private _notificationService: NotificationService, private _utilityService: UtilityService) { }

  get(uri: string) {
    this.headers.delete('Authorization');
    this.headers.append('Authorization', 'bearer ' + this._authenService.getLoggedInUser().access_token);
    return this._http.get(SystemContants.BASE_API + uri, { headers: this.headers }).map(this.extractData);
  }
  post(uri: string, data?: any) {
    this.headers.delete('Authorization');
    this.headers.append('Authorization', 'bearer ' + this._authenService.getLoggedInUser().access_token);
    return this._http.post(SystemContants.BASE_API + uri, data, { headers: this.headers }).map(this.extractData);
  }
  put(uri: string, data?: any) {
    this.headers.delete('Authorization');
    this.headers.append('Authorization', 'bearer ' + this._authenService.getLoggedInUser().access_token);
    return this._http.put(SystemContants.BASE_API + uri, data, { headers: this.headers }).map(this.extractData);
  }
  delete(uri: string, key: string, id: string) {
    this.headers.delete('Authorization');
    this.headers.append('Authorization', 'bearer ' + this._authenService.getLoggedInUser().access_token);
    return this._http.delete(SystemContants.BASE_API + uri + '/?' + key + '=' + id, { headers: this.headers }).map(this.extractData);
  }
  postFile(uri: string, data?: string) {
    let newHeader = new Headers();
    newHeader.append('Authorization', 'bearer ' + this._authenService.getLoggedInUser().access_token);
    return this._http.post(SystemContants.BASE_API + uri, data, { headers: newHeader }).map(this.extractData);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  public handleError(error: any) {
    if (error.status = 401) {
      localStorage.removeItem(SystemContants.CURRENT_USER);
      this._notificationService.printErrorMessage(MessageConstants.LOGIN_AGAIN_MSG);
      this._utilityService.navigateToLogin();
    }
    else{
      let errMessage = (error.message)? error.message:
        (error.status)? `$(error.status)-$(error.statusText)`: 'Lỗi hệ thống';
        this._notificationService.printErrorMessage(errMessage);
        return Observable.throw(errMessage);
    }
  }
}
