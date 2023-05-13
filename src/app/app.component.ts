import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { CommonServiceService } from './common/common-module/common-service.service';
import { NavigationStart, Router } from '@angular/router';
import { GlobalService } from './common/globalService';
import { Collection } from './common/collection';
import { LoginService } from './shared/layout/pages/login/login.service';
import { Subscription } from 'rxjs';
export let browserRefresh = false;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'saral_ims';
  public userLastLogin : any;
  subscription : Subscription;
  constructor(public commonService : CommonServiceService, public router : Router, public globalService : GlobalService, public collection : Collection, public loginService : LoginService){
    this.userLastLogin = this.collection.localSessionData.last_login;
  }
  ngOnInit(){
    // if(this.collection.localSessionData){
    //   this.router.navigate(['/dashboard']);
    // } else {
    //   this.router.navigate(['/login']);
    // }
    this.router.navigate(['/login']);
  }

    h_navigation(){
      this.commonService.slideBarStream();
  }

  @HostListener('window:mousemove', [ '$event' ])
    isTokenExist($event: Event){
      if(!localStorage.getItem('localStorage')){
        this.router.navigate(["/login"]);
      }
    }

    logOff(){
      this.loginService.logOut({userId :this.collection.localSessionData.loginId}).subscribe((res)=>{
        if(res.success){
          localStorage.removeItem('localStorage');
          this.collection.localSessionData = {};
          this.router.navigate(['/login']);
        }

      })
    }

//     @HostListener('window:unload', ['$event'])
//       unloadHandler($event: Event) {
//       this.PostCall();
// }
//   PostCall() {
//     throw new Error('Method not implemented.');
//   }

    @HostListener('window:beforeunload', ['$event'])
      beforeUnloadHander($event: Event) {
        this.ngOnInit();
      return false;
}



}
