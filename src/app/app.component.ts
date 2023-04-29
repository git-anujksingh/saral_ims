import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from './common/common-module/common-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'saral_ims';
  constructor(public commonService : CommonServiceService){}

    h_navigation(){
      this.commonService.slideBarStream();
  }


}
