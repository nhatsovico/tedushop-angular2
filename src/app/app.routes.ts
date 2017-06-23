import {Routes} from '@angular/router';
import {MainComponent} from './main/main.component';

export const appRoutes: Routes =[
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login', loadChildren:'./login/login.module#LoginModule'},
    {path:'main', loadChildren:'./main/main.module#MainModule'}
    
]