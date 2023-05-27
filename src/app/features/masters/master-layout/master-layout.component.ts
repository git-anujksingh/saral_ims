import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-master-layout',
  templateUrl: './master-layout.component.html',
  styleUrls: ['./master-layout.component.css']
})
export class MasterLayoutComponent implements OnInit {

  constructor(private router : Router){}
  ngOnInit() {
    
  }

  RouteToList(){
    debugger;
    this.router.navigate(['masters/productCategory']);
  }

}
