import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { MainComponent } from './main.component';
import { mainRoutes } from './main.routes';
import { AuthenService } from '../core/services/authen.service';
import { UtilityService } from '../core/services/utility.service';

@NgModule({
  imports: [

    CommonModule,
    RouterModule.forChild(mainRoutes),
    HttpModule
    // UserModule,
    // HomeModule
  ],
  providers: [AuthenService, UtilityService],
  declarations: [MainComponent]
})
export class MainModule { }
