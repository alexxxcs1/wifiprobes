import { Component, OnInit } from '@angular/core';
declare function require(string): string;
const logo = require('@assets/img/logo.png');

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  logo:string = logo;
  constructor() { }

  ngOnInit() {
  }

}
