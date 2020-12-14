import { Component, OnInit} from '@angular/core';
import { ProductService} from './product.service';
import { ProductModel, CategoryModel, User} from './models'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WATCH STORE';
  logged=false;
  public user: User;
  isadmin=false;
  constructor(public productService: ProductService){}

  ngOnInit(): void {
    this.getUser();
  }
   
  getUser(){
    this.productService.getUser()
      .subscribe(user =>this.user = user);
  }
}
