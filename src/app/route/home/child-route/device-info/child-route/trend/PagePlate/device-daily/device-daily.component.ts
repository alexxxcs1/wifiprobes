import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-device-daily",
  templateUrl: "./device-daily.component.html",
  styleUrls: ["./device-daily.component.scss"]
})
export class DeviceDailyComponent implements OnInit {
  DeviceFilter: number = 0;
  TimeRange: Array<Date> = [
    new Date(this.formatDate(new Date("2018/12/1"), "yyyy/MM/dd")),
    new Date(this.formatDate(new Date("2018/12/31"), "yyyy/MM/dd"))
  ];
  MockDevicedata: Array<Object> = [
    {
      value: "所有设备",
      id: null
    },
    {
      value: "DEVICE X1",
      id: 2
    },
    {
      value: "DEVICE X2",
      id: 3
    },
    {
      value: "DEVICE X3",
      id: 4
    },
    {
      value: "DEVICE X4",
      id: 5
    },
    {
      value: "DEVICE X5",
      id: 6
    },
    {
      value: "DEVICE X6",
      id: 7
    },
    {
      value: "DEVICE X7",
      id: 8
    }
  ];
  // Mockdata: Array<Object>;
  Mockdata: Object;
  constructor() {}
  ngOnInit() {
    this.getInitDate();
  }
  getInitDate() {
    // let dataNum = this.getDateRange(this.TimeRange[0], this.TimeRange[1]);
    // this.Mockdata = [];
    // for (let z = 0; z < dataNum; z++) {
    //   this.Mockdata.push({
    //     value: Math.random() * 553
    //   });
    // }

    let dataNum = this.getDateRange(this.TimeRange[0], this.TimeRange[1]);
    this.Mockdata = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      // legend: {
      //   data: ["设备当日访问量"]
      // },
      grid: {
        left: "6%",
        right: "6%",
        bottom: "10%",
        containLabel: true
      },
      xAxis: [
        {
          type: "category",
          data: [],
          axisTick: {
            alignWithLabel: true
          },
          axisLine: {
            lineStyle: {
              type: "solid"
            }
          }
        }
      ],
      yAxis: [
        {
          type: "value",
          axisLine: {
            lineStyle: {
              type: "solid"
            }
          },
          splitLine: {
            lineStyle: {
              type: "dashed"
            }
          }
        }
      ],
      series: [
        {
          name: "设备当日访问量",
          type: "bar",
          barWidth: "80%",
          data: [],
          itemStyle: {
            color: "#EAD093"
          }
        }
      ]
    }
    for (let z = 0; z < dataNum; z++) {
      (this.Mockdata as any).xAxis[0].data.push(z);
      (this.Mockdata as any).series[0].data.push(Math.random()*2500);
    }
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
