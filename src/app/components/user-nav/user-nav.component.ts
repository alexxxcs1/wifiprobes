import { Component, OnInit, ElementRef } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.scss']
})
export class UserNavComponent implements OnInit {
  routepath: string
  constructor(private actroute: ActivatedRoute, private route: Router, private element: ElementRef) { }

  ngOnInit() {
    this.setActNav()
  }
  setActNav() {
    this.routepath = this.actroute.snapshot.routeConfig.path;
  }
}
