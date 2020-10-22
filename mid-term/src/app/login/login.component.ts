import { Component, OnInit } from '@angular/core';
import {HttpEvent, HttpHeaders, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";

import {AuthenticationService } from '../services/authentication.service'
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = "";
  password = "";
  // u="Bret";
  // p="Qwerty123#"
  logged=false;
  hide = true;
  userN: String;
  user:User;
  constructor(private authenticationService: AuthenticationService,) { }

  ngOnInit(): void {
    let token = localStorage.getItem('token');
    if(token){
      this.logged=true;
    }
  } 
  
  login(){
    this.authenticationService.login(this.username,this.password).subscribe( res=>{
      localStorage.setItem('token', JSON.stringify(res));
      this.authenticationService.signIn();
      this.logged=true;
      this.userN =   ` ${JSON.parse(localStorage.getItem( 'token' )).username}`;
      // this.getCurrentUser()
      this.username='';
      this.password='';
    })
  }

  logout(){
    localStorage.clear();
    this.authenticationService.signOut();
    this.logged = false;
  }

  getCurrentUser(){
    this.authenticationService.getUser()
    .subscribe(user => this.user = user);
    
  }
}
