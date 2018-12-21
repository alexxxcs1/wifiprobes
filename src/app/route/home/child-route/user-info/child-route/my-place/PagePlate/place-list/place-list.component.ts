import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-place-list",
  templateUrl: "./place-list.component.html",
  styleUrls: ["./place-list.component.scss"]
})
export class PlaceListComponent implements OnInit {
  mocklistdata: Array<object> = [
    {
      placeName: "上海新国际博览中心",
      deviceNumber:Math.round(Math.random()*100),
      id:1
    },
    {
      placeName: "北京新国际博览中心",
      deviceNumber:Math.round(Math.random()*100),
      id:2
    },
    {
      placeName: "广州新国际博览中心",
      deviceNumber:Math.round(Math.random()*100),
      id:3
    },
    {
      placeName: "深圳新国际博览中心",
      deviceNumber:Math.round(Math.random()*100),
      id:4
    }
  ];

  constructor() {}

  ngOnInit() {}
}
