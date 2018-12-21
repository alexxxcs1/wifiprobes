import { Component, OnInit } from '@angular/core';
import {HashLocationStrategy, Location, LocationStrategy} from '@angular/common';
import { ActivatedRoute,Router } from "@angular/router";

@Component({
  selector: 'app-place-info',
  templateUrl: './place-info.component.html',
  styleUrls: ['./place-info.component.scss']
})
export class PlaceInfoComponent implements OnInit {
  constructor(private actroute: ActivatedRoute,private route:Router) {
  }

  ngOnInit() {
  }
}
