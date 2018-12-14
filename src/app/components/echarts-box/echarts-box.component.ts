import {
  Component,
  OnInit,
  ElementRef,
  Input,
  SimpleChange
} from "@angular/core";
const echarts = require("echarts");

@Component({
  selector: "app-echarts-box",
  templateUrl: "./echarts-box.component.html",
  styleUrls: ["./echarts-box.component.scss"]
})
export class EchartsBoxComponent implements OnInit {
  @Input() EcharetsOption: JSON;
  constructor(public element: ElementRef) {}
  ngOnChanges(changes: SimpleChange): void {
    for (const key in changes) {
      if (key == "EcharetsOption") {
        this.UpdataOption();
      }
    }
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
  }
  ngOnInit() {
    this.UpdataOption();
    // 绘制图表
  }
  UpdataOption() {
    let echarbody = this.element.nativeElement.querySelector("#echar-body");
    // 基于准备好的dom，初始化echarts实例
    echarts.init(echarbody, null, { renderer: "canvas" }).dispose();
    var myChart = echarts.init(echarbody, null, { renderer: "canvas" });
    myChart.clear();
    myChart.setOption(this.EcharetsOption);
  }
  ngOnDestroy(): void {
    let echarbody = this.element.nativeElement.querySelector("#echar-body");
    // 基于准备好的dom，初始化echarts实例
    echarts.init(echarbody, null, { renderer: "canvas" }).dispose();
  }
}
