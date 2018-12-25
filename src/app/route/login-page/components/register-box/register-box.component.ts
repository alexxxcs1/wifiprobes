import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-register-box",
  templateUrl: "./register-box.component.html",
  styleUrls: ["./register-box.component.scss"]
})
export class RegisterBoxComponent implements OnInit {
  @Output() handleRoute = new EventEmitter();
  @Output() handleLogo = new EventEmitter();
  constructor() {}
  ngOnInit() {}
  gotoLogin() {
    this.handleRoute.emit("login");
  }
  handlepwFocus(boolean) {
    console.log('basdasd');
    
    this.handleLogo.emit(boolean);
  }
}
