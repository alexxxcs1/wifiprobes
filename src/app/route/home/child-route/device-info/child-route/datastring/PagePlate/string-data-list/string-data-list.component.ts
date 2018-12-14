import { Component, OnInit } from "@angular/core";

class dataObject {
  mac:string
  device:string
  time:string
  total_time:string
  last_date:string
}

@Component({
  selector: "app-string-data-list",
  templateUrl: "./string-data-list.component.html",
  styleUrls: ["./string-data-list.component.scss"]
})
export class StringDataListComponent implements OnInit {
  DeviceFilter: number = 0;
  TimeRange: Array<Date> = [
    new Date(this.formatDate(new Date("2018/12/1"), "yyyy/MM/dd")),
    new Date(this.formatDate(new Date("2018/12/31"), "yyyy/MM/dd"))
  ];
  // Mockdata: Array<Object>;
  Mockdata: Array<dataObject>;
  constructor() {}
  ngOnInit() {
    this.getInitDate();
  }
  getInitDate() {
    let MockDataLength = Math.floor(Math.random()*10+ 50) ;
    let mockdata = [];
    for (let z = 0; z < MockDataLength; z++) {
      mockdata.push({
        mac:'f4:0f:24:20:7f:2a',
        device:'Device' + (z + 1) ,
        time:Math.floor(Math.random()*10+10),
        total_time:Math.floor(Math.random()*10+10),
        last_date:'2018-10-28 17:04',
      })
    }
    this.Mockdata = mockdata;
  }
  getDateRange(start, end) {
    let starttime = start;
    let endtime = end;
    return Math.round((endtime - starttime) / (1000 * 60 * 60 * 24) + 1);
  }
  upDateDatePick(e) {
    this.TimeRange[0] = e.StartDate;
    this.TimeRange[1] = e.EndDate;
    this.getInitDate();
  }
  formatDate(Date: Date, format: string = "yyyy/MM/dd"): any {
    var date = {
      "M+": Date.getMonth() + 1,
      "d+": Date.getDate(),
      "h+": Date.getHours(),
      "m+": Date.getMinutes(),
      "s+": Date.getSeconds(),
      "q+": Math.floor((Date.getMonth() + 3) / 3),
      "S+": Date.getMilliseconds()
    };
    if (/(y+)/i.test(format)) {
      format = format.replace(
        RegExp.$1,
        (Date.getFullYear() + "").substr(4 - RegExp.$1.length)
      );
    }
    for (var k in date) {
      if (new RegExp("(" + k + ")").test(format)) {
        format = format.replace(
          RegExp.$1,
          RegExp.$1.length == 1
            ? date[k]
            : ("00" + date[k]).substr(("" + date[k]).length)
        );
      }
    }
    return format;
  }
  upDateDeviceValue(device) {
    this.DeviceFilter = device.id;
    this.getInitDate();
  }
}
