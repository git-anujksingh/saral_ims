import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Collection {
    public collectionArray= {
        "login":"c_login",
        "logger": "c_loger"
    }

    // public localSessionData ={
    //   last_login:"",
    //   userId : "",
    //   token :""
    // }

    public localSessionData : any ={};

    


}