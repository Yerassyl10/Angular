import { Component, OnInit } from '@angular/core';
import {Photo} from '../models/photo';
import { Post } from '../models/post';
import {User} from '../models/user'
import {GeneralService} from '../services/general.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {
  [x: string]: any;
  public posts: Post[]=[];
  public photos: Photo[]=[];

  public users:User[]=[];
  searchInput = "";
  user:User;
  
  constructor(private generalService: GeneralService) { }



  ngOnInit(): void {

    this.getPosts();
    this.getUsers();
    this.getCurrentUser()
  }
  getPosts(){

    this.generalService.getPosts()
    .subscribe(posts => this.posts = posts); 
  }
  
  getUsers(){
    this.generalService.getUsers()
    .subscribe(users => this.users = users);

  }
  getCurrentUser(){
    this.authenticationService.getUser()
    .subscribe(user => this.user = user);
  }
  
}

