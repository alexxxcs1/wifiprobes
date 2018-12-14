import { Component, OnInit } from "@angular/core";

class CustumerType {
  value: number;
}

@Component({
  selector: "app-daily-discharge",
  templateUrl: "./daily-discharge.component.html",
  styleUrls: ["./daily-discharge.component.scss"]
})
export class DailyDischargeComponent implements OnInit {
  // Mockdata: Array<Object> = [];
  Mockdata: Object;
  MockCustomerType: Array<Array<Object>>;
  TimeRange: Array<Date> = [
    new Date(this.formatDate(new Date("2018/12/1"), "yyyy/MM/dd")),
    new Date(this.formatDate(new Date("2018/12/31"), "yyyy/MM/dd"))
  ];
  constructor() {}
  ngOnInit() {
    this.getInitDate();
  }
  getInitDate() {
    // let dataNum = this.getDateRange(this.TimeRange[0],this.TimeRange[1]);
    // this.Mockdata = [];
    // for (let z = 0; z < dataNum; z++) {
    //   this.Mockdata.push({
    //     value:Math.random()*2500
    //   })
    // }
    // let tmparr = [];
    // for (let c = 0; c < 2; c++) {
    //   tmparr.push([]);
    //   let color = c?'#36B2FF':'#707070'
    //   for (let x = 0; x < dataNum; x++) {
    //     tmparr[c].push({
    //       value:Math.random()*2000,
    //       color:color
    //     })
    //   }
    // }
    // this.MockCustomerType = tmparr;

    let dataNum = this.getDateRange(this.TimeRange[0], this.TimeRange[1]);
    this.Mockdata = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          label: {
            formatter: function(params) {
              return (
                params.value + "日" + 
                (params.seriesData.length
                  ? "：" + params.seriesData[0].data
                  : "")
              );
            }
          },
          // 坐标轴指示器，坐标轴触发有效
          type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      legend: {
        data: ["当日访问量", "新用户占比", "老用户占比"]
      },
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
          name: "当日访问量",
          type: "bar",
          barWidth: "80%",
          data: [],
          itemStyle: {
            color: "#00B599",
            opacity: 0.6
          }
        },
        {
          name: "新用户占比",
          data: [],
          type: "line",
          itemStyle: {
            color: "#36B2FF"
          }
        },
        {
          name: "老用户占比",
          data: [],
          type: "line",
          itemStyle: {
            color: "#333"
          }
        }
      ]
    };
    for (let z = 0; z < dataNum; z++) {
      (this.Mockdata as any).xAxis[0].data.push(z);
      let mocktotal = Math.random() * 1000 + 1500;
      (this.Mockdata as any).series[0].data.push(mocktotal);
      let old = Math.random() * mocktotal;
      let news = mocktotal - old;
      (this.Mockdata as any).series[1].data.push(old);
      (this.Mockdata as any).series[2].data.push(news);
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
}
