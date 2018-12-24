import { Component, OnInit } from '@angular/core';
import {User} from '@class/User'

declare function require(string): string;
const logo = require('@assets/img/logo.png');

@Component({
  selector: 'app-top-banner',
  templateUrl: './top-banner.component.html',
  styleUrls: ['./top-banner.component.scss']
})
export class TopBannerComponent implements OnInit {
  logosrc:string=logo;
  user:User = {
    id:18960605909,
    name:'hellworld',
  }
  constructor() { }

  ngOnInit() {
  }

}
