import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-login-box",
  templateUrl: "./login-box.component.html",
  styleUrls: ["./login-box.component.scss"]
})
export class LoginBoxComponent implements OnInit {
  @Output() handleRoute = new EventEmitter();
  @Output() handleLogo = new EventEmitter();
  constructor() {}

  ngOnInit() {}
  gotoRegister() {
    this.handleRoute.emit("register");
  }
  handlepwFocus(boolean){
    this.handleLogo.emit(boolean);
  }
}
