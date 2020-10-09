import { Component, OnInit } from '@angular/core';
import {HttpEvent, HttpHeaders, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";

import {LoginService } from '../services/login.service'

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
  constructor(private loginService: LoginService,) { }

  ngOnInit(): void {
    let token = localStorage.getItem('token');
    if(token){
      this.logged=true;
    }
  } 
  
  login(){
    this.loginService.login(this.u,this.p).subscribe( res=>{
      localStorage.setItem('token', JSON.stringify({res}));
      this.logged=true;
      this.username='';
      this.password='';
    })
  }

  logout(){
    localStorage.clear();
    this.logged = false;
  }
}
