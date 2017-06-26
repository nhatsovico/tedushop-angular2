import { Component, OnInit } from '@angular/core';
import {AuthenService} from '../core/services/authen.service';
import {UtilityService} from '../core/services/utility.service';
import {UrlConstants} from '../core/common/url.constants';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private _authenService: AuthenService, private _utilityService:UtilityService) { }

  ngOnInit() {
  }
  logout(){
    this._authenService.logout();
    this._utilityService.navigate(UrlConstants.LOGIN);
  }
}
