import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from './shared/loginClass';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  loginObject : Login[]=[];
  type = "password";
  icon ="visibility_off"
  constructor(private fb : FormBuilder, private router : Router, private loginService : LoginService){}
  ngOnInit() {
    let loggedIn = true;
    if(loggedIn){
      let res={
        userName: "info@saral.com",
        password : "123@saral",
        rememberMe : true
      }
      this.buildLoginForm(res);
    } else {
      this.buildLoginForm(new Login);
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

  submitLogin(){
    const credentials = this.extractLoginForm();

    this.loginService.getLogin(credentials).subscribe((res)=>{
        console.log(res);
        if(res.success){
          this.router.navigate(['/dashboard']);
        }
    })
    // this.router.navigate(['/masters']);
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

}
