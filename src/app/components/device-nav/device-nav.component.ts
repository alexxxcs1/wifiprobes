import { Component, OnInit,ElementRef } from "@angular/core";
import { ActivatedRoute,Router } from "@angular/router";

@Component({
  selector: "app-device-nav",
  templateUrl: "./device-nav.component.html",
  styleUrls: ["./device-nav.component.scss"]
})
export class DeviceNavComponent implements OnInit {
  rid:string
  routepath:string
  regionObject:Object
  constructor(private actroute: ActivatedRoute,private route:Router,private element: ElementRef) {
    
  }
  ngOnInit() {
    this.actroute.params.forEach(params => { 
      this.setActNav();
      //call your function, like getUserInfo() 
    }) 
  }
  setActNav(){
    this.routepath = this.actroute.snapshot.routeConfig.path;
    this.rid = this.actroute.snapshot.paramMap.get("rid");
    this.getRegionList()
  }
  getRegionList(){
    this.regionObject = {
      1:'上海新博览国际会展中心',
      2:'国家会展中心（上海）',
      3:'北京首都博览中心'
    }
  }
  changeRoute(id): void {
    let path = this.actroute.snapshot.url[0].path
    
    this.route.navigateByUrl('/home/device/'+path+'/'+id);
    this.element.nativeElement.querySelector('#selectbox').blur();
  }
}
