import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.css']
})
export class AlertDialogComponent implements OnInit {
  alertDialogData : any;
  constructor(private dialogRef : MatDialogRef<AlertDialogComponent>, @Inject(MAT_DIALOG_DATA) data : any, private router : Router){
    this.alertDialogData = data;
  }

  ngOnInit(){
  }

  goToDashboard(){
    this.dialogRef.close({userResponse: true});
  }

  goToLogin(){
    this.router.navigate(['/login']);
  }
}