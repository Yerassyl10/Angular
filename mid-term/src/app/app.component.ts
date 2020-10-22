import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
  userN: String;
  user:User;
import { User } from './models/user';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'MIDTERM';
    userN: String;
    user:User;
    logged=false;
    constructor(public authenticationService: AuthenticationService) {}
    ngOnInit(): void {
        let token = localStorage.getItem('token');
        if(token){
          this.logged=true;
          this.userN =   ` ${JSON.parse(localStorage.getItem( 'token' )).username}`;
        }
      } 
}
