import { Injectable } from '@angular/core';
import { LoginResponse} from '../models/loginResponse'
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class AuthenticationService {
    BASE_URL = 'http://localhost:3000'
    private _isAuthenticated: boolean;
    public get isAuthenticated(): boolean {
        return this._isAuthenticated;
    }
    constructor( private http: HttpClient) { }

    signIn() {
        this._isAuthenticated = true;
    }

    signOut() {
        this._isAuthenticated = false;
    }

    login(username, password): Observable<LoginResponse>{
    
        return this.http.post<LoginResponse>(`${this.BASE_URL}/sign-in`, {
          username: username,
          password: password
        })
      }
}
