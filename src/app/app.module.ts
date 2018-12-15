import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from '@route/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { TopBannerComponent } from '@components/top-banner/top-banner.component';
import { LoginPageComponent } from '@route/login-page/login-page.component';
import { DeviceInfoComponent } from './route/home/child-route/device-info/device-info.component';
import { TrendComponent } from './route/home/child-route/device-info/child-route/trend/trend.component';
import { ThermalComponent } from './route/home/child-route/device-info/child-route/thermal/thermal.component';
import { DatastringComponent } from './route/home/child-route/device-info/child-route/datastring/datastring.component';
import { DeviceNavComponent } from './components/device-nav/device-nav.component';
import { DataPickComponent } from './components/date-pick/data-pick.component';
import { HistogramComponent } from './components/histogram/histogram.component';
import { DailyDischargeComponent } from './route/home/child-route/device-info/child-route/trend/PagePlate/daily-discharge/daily-discharge.component';
import { TotalOverviewComponent } from './route/home/child-route/device-info/child-route/trend/PagePlate/total-overview/total-overview.component';
import { AverageTimeComponent } from './route/home/child-route/device-info/child-route/trend/PagePlate/average-time/average-time.component';
import { SelectOptionComponent } from './components/select-option/select-option.component';
import { DeviceDailyComponent } from './route/home/child-route/device-info/child-route/trend/PagePlate/device-daily/device-daily.component';
import { EchartsBoxComponent } from './components/echarts-box/echarts-box.component';
import { VisitorsFlowrateComponent } from './route/home/child-route/device-info/child-route/thermal/PagePlate/visitors-flowrate/visitors-flowrate.component';
import { StringDataListComponent } from './route/home/child-route/device-info/child-route/datastring/PagePlate/string-data-list/string-data-list.component';
import { UserInfoComponent } from './route/home/child-route/user-info/user-info.component';
import { UserNavComponent } from './components/user-nav/user-nav.component';
import { MyPlaceComponent } from './route/home/child-route/user-info/child-route/my-place/my-place.component';
import { UserSettingComponent } from './route/home/child-route/user-info/child-route/user-setting/user-setting.component';
import { PlaceListComponent } from './route/home/child-route/user-info/child-route/my-place/PagePlate/place-list/place-list.component';
import { PlaceInfoComponent } from './route/home/child-route/user-info/child-route/my-place/PagePlate/place-info/place-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopBannerComponent,
    LoginPageComponent,
    DeviceInfoComponent,
    TrendComponent,
    ThermalComponent,
    DatastringComponent,
    DeviceNavComponent,
    DataPickComponent,
    HistogramComponent,
    DailyDischargeComponent,
    TotalOverviewComponent,
    AverageTimeComponent,
    SelectOptionComponent,
    DeviceDailyComponent,
    EchartsBoxComponent,
    VisitorsFlowrateComponent,
    StringDataListComponent,
    UserInfoComponent,
    UserNavComponent,
    MyPlaceComponent,
    UserSettingComponent,
    PlaceListComponent,
    PlaceInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
