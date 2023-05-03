import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(public datepipe: DatePipe){}
  loginInfo= {};


saveLogin(data: any){
  this.loginInfo = data;
}


getWelcomeZone(){
  debugger;
  let welcomeData ={};
  var datePipe = new DatePipe("en-US");
  //let todays_date  = datePipe.transform(new Date(), 'dd/MM/yyyy');
  //let current_time = datePipe.transform(new Date(), 'hh : mm');
  let current_hour = Number(datePipe.transform(new Date(), 'hh'));
  let welcomeNote = "Hi  "

  if(current_hour < 6){
    welcomeNote = "Hello";
  } else if( current_hour >= 6 && current_hour < 12){
    welcomeNote = "Good Morning";
  } else if( current_hour >= 12 && current_hour < 18){
    welcomeNote = "Good Afternoon";
  } else if( current_hour >= 18 && current_hour <= 23){
    welcomeNote = "Good Evening";
  }

  welcomeData = {
    //date : todays_date,
    //time : current_time,
    welcomeNote : welcomeNote
  }
  return welcomeData;  

}
}