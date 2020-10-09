import { Component, OnInit } from '@angular/core';
import {Photo} from '../models/photo';
import { Post } from '../models/post';
import { HttpService } from '../services/http.service';
import {User} from '../models/user'
import {GeneralService} from '../services/general.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {
  public posts: Post[]=[];
  public photos: Photo[]=[];
  public localPosts: LocalPost[]=[];
  public users:User[]=[];
  searchInput = "";

  
  constructor(private generalService: GeneralService) { }



  ngOnInit(): void {

    this.getPosts();
    this.getUsers();
    
  }
  getPosts(){

    this.generalService.getPosts()
    .subscribe(posts => this.posts = posts);
    
  }


  createPosts(){
    for(let post of this.posts){
      const model: LocalPost = {
        id: post.id,
        user:this.getUser(post.userId),
        title: post.title,
        body:post.body
      }
      this.localPosts.push(model);
    }
    
  }
  getUser(id):User {
    for(let user of this.users){
      if(user.id=id)
    return user;
    }
      
    
  }
  
  getUsers(){
    this.generalService.getUsers()
    .subscribe(users => this.users = users);
    this.createPosts();
  }
  
}

export interface LocalPost {
    id: number;
    user:User;
    title: string;
    body: string;
    // photo: Photo;
    // comment: Comment
}
// interface LocalPost extends User, Post {}
