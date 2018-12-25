import { Component, OnInit } from "@angular/core";
import {
  HashLocationStrategy,
  Location,
  LocationStrategy
} from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-place-info",
  templateUrl: "./place-info.component.html",
  styleUrls: ["./place-info.component.scss"]
})
export class PlaceInfoComponent implements OnInit {
  constructor(private actroute: ActivatedRoute, private route: Router) {}
  place: object = {
    province: null,
    city: null,
    region: null
  };
  ngOnInit() {}
  onSelectCity(type, option) {
    switch (type) {
      case "province":
        (this.place as any).city = null;
        (this.place as any).region = null;
        break;
      case "city":
        (this.place as any).region = null;
        break;
      case "region":
        break;
    }
    this.place[type] = option;
  }
}
