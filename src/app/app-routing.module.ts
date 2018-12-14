import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { HomeComponent } from '@route/home/home.component';
import { DeviceInfoComponent } from '@route/home/child-route/device-info/device-info.component';
import { TrendComponent } from '@route/home/child-route/device-info/child-route/trend/trend.component';
import { ThermalComponent } from '@route/home/child-route/device-info/child-route/thermal/thermal.component';
import { DatastringComponent } from '@route/home/child-route/device-info/child-route/datastring/datastring.component';
import { LoginPageComponent } from '@route/login-page/login-page.component';

const routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path:'login',
    component:LoginPageComponent,
  },
  {
    path:'home',
    component:HomeComponent,
    children:[
      { path: '', component : DeviceInfoComponent },
      { path: 'device', component : DeviceInfoComponent ,children:[
        { path: 'trend/:rid', component : TrendComponent},
        { path: 'thermal/:rid', component : ThermalComponent},
        { path: 'datastring/:rid', component : DatastringComponent},
        { path: '', pathMatch: 'full',redirectTo: 'trend'},
      ]},
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes,{useHash: true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
