import { Component, OnInit } from '@angular/core';
import {HttpEvent, HttpHeaders, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";

import {AuthenticationService } from '../services/authentication.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = "";
  password = "";
  u="Bret";
  p="Qwerty123#"
  logged=false;
  hide = true;
  constructor(private authenticationService: AuthenticationService,) { }

  ngOnInit(): void {
    let token = localStorage.getItem('token');
    if(token){
      this.logged=true;
    }
  } 
  
  login(){
    this.authenticationService.login(this.u,this.p).subscribe( res=>{
      localStorage.setItem('token', res.token);
      this.authenticationService.signIn();
      this.logged=true;
      this.username='';
      this.password='';
    })
  }

  logout(){
    localStorage.clear();
    this.authenticationService.signOut();
    this.logged = false;
  }
}
