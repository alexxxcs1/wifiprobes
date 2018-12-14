import {
  Component,
  OnInit,
  Input,
  SimpleChange,
  ElementRef,
  HostListener
} from "@angular/core";
import * as d3 from "d3";

class RectData {
  value: number;
}
class LineData {
  value: number;
  color: string;
}
@Component({
  selector: "app-histogram",
  templateUrl: "./histogram.component.html",
  styleUrls: ["./histogram.component.scss"]
})
export class HistogramComponent implements OnInit {
  hoverdata:Object
  hoverdata_x:string
  hoverdata_y:string
  maxheight: number = 2500;
  @Input() linedata: Array<Array<LineData>>;
  @Input() data: Array<RectData>;
  @Input() color: string = "#00B599";
  ngOnChanges(changes: SimpleChange): void {
    for (const key in changes) {
      if (key == "data" || "linedata") {
        this.createHistogramRect();
      }
    }
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
  }
  constructor(public element: ElementRef) {}
  ngOnInit() {
    this.createHistogramRect();
  }
  createHistogramLine() {
    if (!this.linedata) return;
    let elesvg = this.element.nativeElement.querySelector("#svg-body");
    let svg = d3.select(elesvg).select('g');

    for (let z = 0; z < this.linedata.length; z++) {
      let firstPoint: number = null;

      for (let x = 0; x < this.linedata[z].length; x++) {
        let marginration = this.linedata[z].length / 31;
        let numscale = this.maxheight / 500;
        let xheight = 80;
        svg
          .append("circle")
          .attr(
            "cx",
            x * (15 / marginration + 18) + 124 + 15 / marginration / 2
          )
          .attr(
            "cy",
            500 - ((this.linedata[z][x].value / numscale) * xheight) / 100
          )
          .attr("r", 0)
          .transition(2000)
          .duration(300)
          .delay(x * 50)
          .attr("r", 5)
          .attr("fill", this.linedata[z][x].color);
        if (firstPoint == null) {
          firstPoint = this.linedata[z][x].value;
        } else {
          svg
            .append("line")
            .attr(
              "x1",
              (x - 1) * (15 / marginration + 18) + 124 + 15 / marginration / 2
            )
            .attr("y1", 500 - ((firstPoint / numscale) * xheight) / 100)
            .attr(
              "x2",
              (x - 1) * (15 / marginration + 18) + 124 + 15 / marginration / 2
            )
            .attr(
              "y2",
              500 - ((firstPoint / numscale) * xheight) / 100
            )
            .transition(2000)
            .duration(50)
            .delay(x * 50 )
            .attr(
              "x1",
              x * (15 / marginration + 18) + 124 + 15 / marginration / 2
            )
            .attr(
              "y1",
              500 - ((this.linedata[z][x].value / numscale) * xheight) / 100
            )
            .attr(
              "x2",
              (x - 1) * (15 / marginration + 18) + 124 + 15 / marginration / 2
            )
            .attr("y2", 500 - ((firstPoint / numscale) * xheight) / 100)
            .style("stroke", this.linedata[z][x].color)
            .style("stroke-width", 2)
            .style("opacity", 0.6);
          firstPoint = this.linedata[z][x].value;
        }
      }
    }
  }
  createHistogramRect() {
    let elesvg = this.element.nativeElement.querySelector("#svg-body");
    let rangeday = this.data.length;
    let linewidthratio = rangeday / 31;
    d3.select(elesvg)
      .selectAll("g")
      .remove();
    let svg = d3
      .select(elesvg)
      .attr("width", "100%")
      .attr("height", "100%")
      .append("g");
    let xheight = 80; //每个级别svg内高度
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].value > this.maxheight) {
        //如果数据大于最大高度，则更新最大高度
        this.maxheight = this.data[i].value;
      }
    }
    let numscale = this.maxheight / 500; //最大高度和固定svg高度的比率
    let xnum = this.maxheight / 5; //最大高度分为5级
    for (let i = 0; i < rangeday; i++) {
      //循环输出渲染的数据条数
      let lineheight = this.data[i].value;
      let self = this;
      svg
        .append("line")
        .attr(
          "x1",
          i * (15 / linewidthratio + 18) + 124 + 15 / linewidthratio / 2
        )
        .attr("y1", 500)
        .attr(
          "x2",
          i * (15 / linewidthratio + 18) + 124 + 15 / linewidthratio / 2
        )
        .attr("y2", 500)
        .style("stroke", this.color)
        .style("opacity", 0.6)
        .on("mouseover", function(d) {
          var nodeSelection = d3.select(this).style("opacity", 1);
          
          //外部div显示悬浮框
          
          
          self.hoverdata_x = (window as any).event.clientX;
          self.hoverdata_y = (window as any).event.clientY;
          self.hoverdata = {
            value:'我可去你的吧'
          }
          console.log(this.hoverdata_x,this.hoverdata_y);

          //svg显示悬浮框 (内容样式不好更改，不灵活)
          // svg.append('rect')
          //     .attr('id','hovertab')
          //     .attr('width','210')
          //     .attr('height','61')
          //     .attr('opacity','0.8')
          //     .attr('style','pointer-events: none')
          //     .attr('x',(window as any).event.offsetX - (210/2))
          //     .attr('y',(window as any).event.offsetY - 70)
          //     .attr('fill','#000');
          // svg.append("text")
          //     .text(i+'asdddd')
          //     .attr('id','hovertext')
          //     .attr("font-size", 12)
          //     .attr('x',(window as any).event.offsetX)
          //     .attr('y',(window as any).event.offsetY - 30)
          //     .attr("fill", 'red')

        })
        .on("mouseout", function(d) {
          ////外部div显示悬浮框
          self.hoverdata = null;
          //svg显示悬浮框 (内容样式不好更改，不灵活)
          d3.select('#hovertab').remove();
          d3.select('#hovertext').remove();


          var nodeSelection = d3.select(this).style("opacity", 0.6);
        })
        .style("stroke-width", 15 / linewidthratio)
        .transition(2000)
        .duration(300)
        .delay(i * 50)
        .attr("y2", 500 - ((lineheight / numscale) * xheight) / 100);
      svg
        .append("text")
        .text(i + 1)
        .attr("font-size", 12)
        .attr(
          "x",
          i * (15 / linewidthratio + 18) + 124 + (15 / linewidthratio / 2 - 6)
        )
        .attr("y", 500 + 25);
    }

    for (let z = 0; z < 6; z++) {
      svg
        .append("text")
        .text(Math.floor(z * xnum))
        .attr("font-size", 12)
        .attr("x", 62)
        .attr("y", 500 - Math.floor(z * xheight));
      svg
        .append("line")
        .attr("x1", 62)
        .attr("y1", 500 - Math.floor(z * xheight))
        .attr("x2", 1141)
        .attr("y2", 500 - Math.floor(z * xheight))
        .attr("stroke-dasharray", "5,5")
        .style("stroke", "#707070")
        .style("opacity", 0.4)
        .style("stroke-width", 1);
    }
    this.createHistogramLine();
  }
  getDateRange(start, end) {
    let starttime = start;
    let endtime = end;
    return Math.round((endtime - starttime) / (1000 * 60 * 60 * 24) + 1);
  }
}
