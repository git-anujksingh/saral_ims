import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from './shared/loginClass';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { GlobalService } from 'src/app/common/globalService';
import { Collection } from 'src/app/common/collection';
import { AlertDialogComponent } from 'src/app/common/common-module/alert-dialog/alert-dialog.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  loginObject : Login[]=[];
  type = "password";
  icon ="visibility_off";
  userResponse = "";
  constructor(private fb : FormBuilder, private router : Router, private loginService : LoginService, private globalService : GlobalService, private collection : Collection, private dialog: MatDialog){}
  ngOnInit() {
    let placeHolderView = true;
    if(placeHolderView){
      let res={
        userName: "info@saral.com",
        password : "123@saral",
        rememberMe : true
      }
      this.buildLoginForm(res);
    } else {
      this.buildLoginForm(new Login);
    }

    if(localStorage.getItem('localStorage')){
      this.isLogin();
    }
  }

  buildLoginForm(login: Login) {
    this.loginForm = this.fb.group({
      userName: [login.userName, Validators.required],
      password: [login.password, Validators.required],
      rememberMe: true
    });
  }

  extractLoginForm() : Login{
    const data : Login = {
      userName : this.loginForm.value.userName,
      password : this.loginForm.value.password,
      rememberMe : this.loginForm.value.rememberMe
    }
    return data;
  }

  submitLogin() {
    let credentials = this.extractLoginForm();
    
    this.loginService.getLogin(credentials).subscribe((res) => {
      if (res.success && res.data.length > 0) {
        this.globalService.saveLogin(res.data);
        if (res.data.length > 0) {
          localStorage.setItem('localStorage', JSON.stringify({
            'token': res.data[0].token,
            'loginId': res.data[0].userName,
            "last_login": res.data[0].last_login
          }))
        }
      }
    if(res.status_code == 401) {
      const dialogRef = this.dialog.open(AlertDialogComponent, {
        width: '60%',
        height: '180px',
        disableClose: true,
        data: { labelText: res.message }
      })
      dialogRef.afterClosed().subscribe(result => {
        if (result.userResponse) {
          let modifiedCredentials: any = {};
          modifiedCredentials = credentials;
          console.log("PHASE 12 :", modifiedCredentials);
          modifiedCredentials['userResponse'] = true;
          let tempLocalStorage: any = localStorage.getItem('localStorage');
          if(tempLocalStorage ! = null){
            this.collection.localSessionData = JSON.parse(tempLocalStorage);
            modifiedCredentials['token'] = this.collection.localSessionData.token;
          }
          console.log("PHASE 2 :", modifiedCredentials['token']);
          this.loginService.getLogin(tempLocalStorage != null ? modifiedCredentials : credentials).subscribe((response) => {
            console.log("PHASE 3 :", response);
            if (response.success && response.data.length > 0) {
              this.globalService.saveLogin(response.data[0]);
              localStorage.setItem('localStorage', JSON.stringify({
                'token': response.data[0].token,
                'loginId': response.data[0].userName,
                "last_login": response.data[0].last_login
              }));
              let tempLocalStorage: any = localStorage.getItem('localStorage');
              this.collection.localSessionData = JSON.parse(tempLocalStorage);
              this.router.navigate(['/dashboard']);
            }
          })
        }
      });
    } 
    // else {
    //   let tempLocalStorage: any = localStorage.getItem('localStorage');
    //   this.collection.localSessionData = JSON.parse(tempLocalStorage);
    //   this.router.navigate(['/dashboard']);
    // }
  })
  }


  isLogin(){
      let tempLocalStorage: any = localStorage.getItem('localStorage');
      if(tempLocalStorage){
        this.collection.localSessionData = JSON.parse(tempLocalStorage);
      }
    this.loginService.isLogin({access_token: this.collection.localSessionData.token}).subscribe((res)=>{
      debugger;
      if(res.success && res.status_code == 200 && res.data.length > 0){
        this.globalService.saveLogin(res.data[0]);
        localStorage.setItem('localStorage', JSON.stringify({
          'token': res.data[0].token,
          'loginId': res.data[0].userName,
          "last_login": res.data[0].last_login
        }));
        let tempLocalStorage: any = localStorage.getItem('localStorage');
        this.collection.localSessionData = JSON.parse(tempLocalStorage);
        this.router.navigate(['/dashboard']);
      } else {
        this.router.navigate(['/login']);
      }
    })
  }

eyeView(){
  if(this.type =='password'){
    this.type = 'text';
    this.icon = 'visibility';
  } else {
    this.type = 'password';
    this.icon = 'visibility-off'
  }
}

forgetPassword(){
  this.router.navigate(['/masters']);
}

}
