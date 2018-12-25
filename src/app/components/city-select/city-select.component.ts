import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChange
} from "@angular/core";
import { getPy } from "@tool/index";

declare function require(string): string;
const city = require("./CityJson.json");

@Component({
  selector: "app-city-select",
  templateUrl: "./city-select.component.html",
  styleUrls: ["./city-select.component.scss"]
})
export class CitySelectComponent implements OnInit {
  @Input() limit: Array<string> = [];
  @Input() selected: string = null;
  @Output() onSelected = new EventEmitter();
  //省province 市city 区region
  data: Array<string> = [];
  constructor() {}
  ngOnInit() {
    this.initData();
  }
  ngOnChanges(changes: SimpleChange): void {
    for (const key in changes) {
      if (key == "limit") {
        this.initData();
      }
    }
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
  }
  initData() {
    this.data = [];
    switch (this.limit.length) {
      case 0:
        for (const key in city as any) {
          this.data.push(key);
        }
        break;
      case 1:
        if (this.limit[0] == null) {
          return;
        } else {
          for (const key in city[this.limit[0]]) {
            this.data.push(key);
          }
        }
        break;
      case 2:
        if (this.limit[0] == null || this.limit[1] == null) {
          return;
        } else {
          for (const key in city[this.limit[0]][this.limit[1]]) {
            this.data.push(city[this.limit[0]][this.limit[1]][key]);
          }
        }

        break;
    }
  }
  handleSelect(option) {
    this.onSelected.emit(option);
  }
}
