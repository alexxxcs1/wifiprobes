import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-new-device",
  templateUrl: "./new-device.component.html",
  styleUrls: ["./new-device.component.scss"]
})
export class NewDeviceComponent implements OnInit {
  @Output() handleDisplay = new EventEmitter();
  DeviceName: string = "";
  DevicePlace: string = "";
  DeviceBelong: string = "";
  DeviceMac: string = "";
  DeviceApi: string = "";
  constructor() {}
  ngOnInit() {}
  HandleDisplay(boolean) {
    if (typeof boolean == "undefined") {

      if (
        this.DeviceName &&
        this.DevicePlace &&
        this.DeviceBelong &&
        this.DeviceMac &&
        this.DeviceApi
      ) {
        let data = {
          DeviceName: this.DeviceName,
          DevicePlace: this.DevicePlace,
          DeviceBelong: this.DeviceBelong,
          DeviceMac: this.DeviceMac,
          DeviceApi: this.DeviceApi
        };
        this.handleDisplay.emit(data);
      }else{
        alert('请输入完整信息')
      }
      
    } else {
      this.handleDisplay.emit(boolean);
    }
  }
  onInputChange(type){
    this[type] = (event as any).target.value;
  }
}
