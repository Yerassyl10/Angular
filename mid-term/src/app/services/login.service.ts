import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LoginResponse} from '../models/loginResponse'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import {User} from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  BASE_URL = 'http://localhost:3000'
  loggedIn=false;
  USERS=[];
  constructor( private http: HttpClient) { }

  login(username, password): Observable<LoginResponse>{
    return this.http.post<LoginResponse>(`${this.BASE_URL}/sign-in`, {
      username: username,
      password: password
    })
  }
  // register(user: User){
  //   this.USERS.push(user);
  // }
  register(user: User): Observable<User>{
    return this.http.post<User>(`${this.BASE_URL}/users`, user)
  }
}
