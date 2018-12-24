import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-place-device",
  templateUrl: "./place-device.component.html",
  styleUrls: ["./place-device.component.scss"]
})
export class PlaceDeviceComponent implements OnInit {
  mockdevicedata: Array<object> = [];
  newDeviceInfo:boolean = false;
  constructor() {}
  getDeviceData() {
    for (let x = 0; x < 15; x++) {
      this.mockdevicedata.push({
        name: "Device X"+(x+1),
        mac_url: "f4:0f:24:20:7f:2c",
        api_url: "http://192.168.1.14:4200/#/home/user/place/device/1",
        status: Math.round(Math.random())
      });
    }
  }
  HandleDeviceInfo(boolean){
    if (typeof(boolean)=='object') {
      this.mockdevicedata.push({
        name: boolean.DeviceName,
        mac_url: boolean.DeviceMac,
        api_url: boolean.DeviceApi,
        status: Math.round(Math.random())
      });
      this.newDeviceInfo = false;
    }else{
      this.newDeviceInfo = boolean;
    }
    
  }
  ngOnInit() {
    this.getDeviceData();
  }
}
