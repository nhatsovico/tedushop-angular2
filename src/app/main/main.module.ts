import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { mainRoutes } from './main.routes';
// import { UserModule } from './user/user.module';
// import { HomeModule } from './home/home.module';

@NgModule({
  imports: [
            
    CommonModule,
    RouterModule.forChild(mainRoutes),
    // UserModule,
    // HomeModule
  ],
  declarations: [MainComponent]
})
export class MainModule { }
