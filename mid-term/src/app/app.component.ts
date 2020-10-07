import { Component, OnInit} from '@angular/core';
import { LoginService} from './services/login.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'mid-term';
  public loggedIn=false;
  
  constructor(private loginService: LoginService,) { }

  ngOnInit(): void {
  
  } 
}
