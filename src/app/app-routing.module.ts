import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { HomeComponent } from '@route/home/home.component';
import { DeviceInfoComponent } from '@route/home/child-route/device-info/device-info.component';
import { TrendComponent } from '@route/home/child-route/device-info/child-route/trend/trend.component';
import { ThermalComponent } from '@route/home/child-route/device-info/child-route/thermal/thermal.component';
import { DatastringComponent } from '@route/home/child-route/device-info/child-route/datastring/datastring.component';
import { LoginPageComponent } from '@route/login-page/login-page.component';
import { UserInfoComponent } from "@route/home/child-route/user-info/user-info.component";
import { MyPlaceComponent } from "@route/home/child-route/user-info/child-route/my-place/my-place.component";
import { PlaceListComponent } from '@route/home/child-route/user-info/child-route/my-place/PagePlate/place-list/place-list.component';
import { PlaceInfoComponent } from '@route/home/child-route/user-info/child-route/my-place/PagePlate/place-info/place-info.component';
import { UserSettingComponent } from '@route/home/child-route/user-info/child-route/user-setting/user-setting.component';


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
      { path: 'device', redirectTo: 'device/trend/unselect', pathMatch: 'full'},
      { path: 'device', component : DeviceInfoComponent ,children:[
        { path: 'trend', redirectTo: 'trend/unselect', pathMatch: 'full'},
        { path: 'trend/:rid', component : TrendComponent},
        { path: 'thermal/:rid', component : ThermalComponent},
        { path: 'thermal', redirectTo: 'thermal/unselect', pathMatch: 'full'},
        { path: 'datastring/:rid', component : DatastringComponent},
        { path: 'datastring', redirectTo: 'datastring/unselect', pathMatch: 'full'},
        { path: '', pathMatch: 'full',redirectTo: 'trend'},
      ]},
      { path: 'user', redirectTo: 'user/place', pathMatch: 'full'},
      { path: 'user', component : UserInfoComponent,children:[
        { path: 'place', component : MyPlaceComponent,children:[
          { path: '', component : PlaceListComponent},
          { path: 'info', component : PlaceInfoComponent},
        ]},
        { path: 'setting', component : UserSettingComponent},
      ]}
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes,{useHash: true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
