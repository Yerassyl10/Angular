import { Component, OnInit} from '@angular/core';
import { HttpService} from './services/http.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'mid-term';
  public loggedIn=false;
  
  constructor(private _httpService: HttpService) { }

  
  async ngOnInit() {
    // const users = await this._httpService.users();
    // const user = users[4];
    // console.log(await this._httpService.signIn(user));

     console.log(await this._httpService.posts())
}

}
