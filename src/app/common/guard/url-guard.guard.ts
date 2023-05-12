import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UrlGuardGuard {

  constructor(private router : Router){}
  canActivate()
    {
      
      return true;
    }
}