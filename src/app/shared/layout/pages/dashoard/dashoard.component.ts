import { Component, AfterContentInit } from '@angular/core';
import { GlobalService } from 'src/app/common/globalService';

@Component({
  selector: 'app-dashoard',
  templateUrl: './dashoard.component.html',
  styleUrls: ['./dashoard.component.css']
})
export class DashoardComponent implements AfterContentInit {
  userInfo: any;
  welcomeData : any;
  constructor(private globalService : GlobalService){}

  ngAfterContentInit() {
    this.userInfo = this.globalService.loginInfo;
    this.welcomeData = this.globalService.getWelcomeZone()
  }
}
