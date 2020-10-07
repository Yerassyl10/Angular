import { Component, OnInit } from '@angular/core';

import {LoginService } from '../services/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = "";
  password = "";
  logged=false;
  constructor(private loginService: LoginService,) { }

  ngOnInit(): void {
    let token = localStorage.getItem('token');
    if(token){
      this.logged=true;
    }
  } 
  login(){
  
    this.loginService.login(this.username,this.password).subscribe( res=>{
      localStorage.setItem('token', res.token);
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
