import { Component, OnInit } from '@angular/core';
declare function require(string): string;
const logo = require('@assets/logo.png');

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  logo:string = logo;
  customroute:string = 'login';
  passwordfocus:boolean = false;
  constructor() {}
  ngOnInit() {
    
  }
  HandleCustomRoute(routename){
    this.customroute = routename;
  }
  HandleLogo(boolean){
    this.passwordfocus = boolean;
  }
}
