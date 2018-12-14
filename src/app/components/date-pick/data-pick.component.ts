import { Component, OnInit,Input, Output, EventEmitter, SimpleChange, ElementRef } from "@angular/core";

@Component({
  selector: "app-data-pick",
  templateUrl: "./data-pick.component.html",
  styleUrls: ["./data-pick.component.scss"]
})
export class DataPickComponent implements OnInit {
  @Input() startdate:string;
  @Input() enddate:string;
  @Output() onValueUpdate = new EventEmitter();
  DropOnBottom:boolean = false
  NowYearMonth: Date = new Date(this.formatDate(new Date(), "yyyy/MM/dd"));
  SelectType: number = 0;
  CN: Array<string> = ["天", "一", "二", "三", "四", "五", "六"];
  DateArray: Array<number>;
  onInitDate: Date = new Date(this.formatDate(new Date(), "yyyy/MM/dd"));
  onInitEndDate: Date = new Date(this.formatDate(new Date(), "yyyy/MM/dd"));
  beforeMonthDay: Array<number>;
  beforeDate: Date;
  nowMonthDay: Array<number>;
  nowDate: Date;
  afterMonthDay: Array<number>;
  afterDate: Date;
  constructor(public element: ElementRef) {}
  ngOnInit() {
    let outbox = this.element.nativeElement.querySelector("#outbox");
    if (outbox.offsetTop<320) {
      this.DropOnBottom = true;
    }
    this.NowYearMonth = new Date(this.formatDate(new Date(this.startdate), "yyyy/MM/dd"));
    this.createDateArray();
  }
  ngOnChanges(changes: SimpleChange): void {
    for (const key in changes) {
      if (key == 'startdate') {
        this.onInitDate = changes[key].currentValue;
      }else if(key == 'enddate'){
        this.onInitEndDate = changes[key].currentValue;
      }
    }
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    
  }
  createDateArray() {
    let _FirstDay = new Date(this.NowYearMonth).setDate(1); //获得这个月一号的时间戳
    let FirstDay = new Date(_FirstDay).getDay(); //获取这个月一号的星期,
    let nowYear = new Date(_FirstDay).getFullYear();
    let nowMonth = new Date(_FirstDay).getMonth() + 1;
    //获取上个月月底的日期
    let beforemaxday = this.mGetDate(
      nowMonth - 1 == 0 ? nowYear - 1 : nowYear,
      nowMonth - 1 == 0 ? 12 : nowMonth - 1
    );
    this.beforeDate = new Date(
      nowMonth - 1 == 0 ? nowYear - 1 : nowYear,
      nowMonth - 1 == 0 ? 11 : nowMonth - 2
    );
    //获取上个月月份填充数量
    let beforeNum = FirstDay == 0 ? 7 : FirstDay;
    //填充上个月份数组
    let beforearray = [];
    for (let z = beforeNum - 1; z >= 0; z--) {
      let todaytime = new Date(this.beforeDate).setDate(beforemaxday - z);
      beforearray.push({
        day: beforemaxday - z,
        time: todaytime
      });
    }
    this.beforeMonthDay = beforearray;

    //获取这个月月底日期
    let nowmaxday = this.mGetDate(nowYear, nowMonth);
    this.nowDate = new Date(nowYear, nowMonth - 1);

    let nowarray = [];
    //填充这个月数组
    for (let x = 1; x <= nowmaxday; x++) {
      let todaytime = new Date(this.nowDate).setDate(x);
      nowarray.push({
        day: x,
        time: todaytime
      });
    }
    this.nowMonthDay = nowarray;

    //获取下个月底日期
    let aftermaxday = this.mGetDate(
      nowMonth + 1 > 12 ? nowYear + 1 : nowYear,
      nowMonth + 1 > 12 ? 1 : nowMonth + 1
    );
    this.afterDate = new Date(
      nowMonth + 1 > 12 ? nowYear + 1 : nowYear,
      nowMonth + 1 > 12 ? 0 : nowMonth
    );
    let afterNum = 42 - (this.beforeMonthDay.length + this.nowMonthDay.length);
    let afterarray = [];
    for (let c = 1; c <= afterNum; c++) {
      let todaytime = new Date(this.afterDate).setDate(c);
      afterarray.push({
        day: c,
        time: todaytime
      });
    }
    this.afterMonthDay = afterarray;
  }
  mGetDate(year, month) {
    var d = new Date(year, month, 0);
    return d.getDate();
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
  selectDay(_Date: Date, index) {
    if (this.SelectType == 0) {
      this.onInitEndDate = new Date(
        _Date.getFullYear() + "/" + (_Date.getMonth() + 1) + "/" + index
      );
    } else if (this.SelectType == 1) {
      this.onInitDate = new Date(
        _Date.getFullYear() + "/" + (_Date.getMonth() + 1) + "/" + index
      );

    }
    if (this.onInitDate.getTime()>this.onInitEndDate.getTime()) {
      this.onInitEndDate = new Date(
        _Date.getFullYear() + "/" + (_Date.getMonth() + 1) + "/" + index
      );
      this.onInitDate = new Date(
        _Date.getFullYear() + "/" + (_Date.getMonth() + 1) + "/" + index
      );
    }
    this.createDateArray();
  }
  toggleSelectTypeFun(type) {
    this.SelectType = type;
  }
  MonthHandle(type) {
    this.NowYearMonth.setMonth(this.NowYearMonth.getMonth() + type);
    this.createDateArray();
  }
  onBlurSubmit(){
    let time = {
      StartDate:this.onInitDate,
      EndDate:this.onInitEndDate,
      StartDateString:this.formatDate(this.onInitDate),
      EndDateString:this.formatDate(this.onInitEndDate),
    }
    this.onValueUpdate.emit(time);
  }
}
