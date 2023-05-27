import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonServiceService } from 'src/app/common/common-module/common-service.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout-app.component.html',
  styleUrls: ['./layout-app.component.css']
})

export class LayoutAppComponent implements OnInit {
  public layout_width = "1825vw";
  public isSlideBarVisible : boolean = true;

  constructor( public commonService: CommonServiceService, private router: Router){ }

  ngOnInit() {
    this.commonService.isSlideBarVisible.subscribe((x)=>{
      if(x == false){
        this.layout_width = "3.9%";
        this.isSlideBarVisible = false;
      } else {
        this.layout_width= "18.25vw";
        this.isSlideBarVisible = true;
      }
    })
  
}

routeToMaster(){
  this.router.navigate(['/masters/ppr']);
}
}
