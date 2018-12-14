import { Component, OnInit, Input, Output ,EventEmitter} from "@angular/core";

@Component({
  selector: "app-select-option",
  templateUrl: "./select-option.component.html",
  styleUrls: ["./select-option.component.scss"]
})
export class SelectOptionComponent implements OnInit {
  @Input() ActiveIndex: any = 0;
  @Input() Options: Array<Object>
  @Output() onValueUpdate = new EventEmitter();
  selectedIndex: any = 0;
  constructor() {}
  ngOnInit() {}
  selectOption(index) {
    this.selectedIndex = index;
  }
  blurSubmit(){
    this.onValueUpdate.emit(this.Options[this.selectedIndex]);
  }
}
