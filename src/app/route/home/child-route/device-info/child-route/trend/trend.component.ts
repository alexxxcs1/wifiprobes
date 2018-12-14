import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-trend",
  templateUrl: "./trend.component.html",
  styleUrls: ["./trend.component.scss"]
})
export class TrendComponent implements OnInit {
  todayOverview = {};
  constructor() {}
  ngOnInit() {}
  ngAfterContentInit(): void {
    // d3.selectAll('div').style('background','red');
  }
}
