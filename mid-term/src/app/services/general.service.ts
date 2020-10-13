import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { Photo } from '../models/photo';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { User } from '../models/user';
import {Album} from '../models/album'
import {Comment} from '../models/comment'

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  BASE_URL = 'http://localhost:3000'
  token: string = 'Basic QnJldDpRd2VydHkxMjMj';
  constructor(private http: HttpClient) { }
  

  getPosts(): Observable<Post[]> {
    
    return this.http.get<Post[]>( `${this.BASE_URL}/posts`, 
  //   {
  //     headers: {
  //         Authorization: this.token,
  //     },
  // }
  )
  }
  getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>( `${this.BASE_URL}/photos`, 
    // {
    
    //   headers: {
    //       Authorization: this.token,
    //   },
    // }
    )
    }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.BASE_URL}/users`)
  }
  
  getAlbumsofU(): Observable<Album[]>{
    return this.http.get<Album[]>(`${this.BASE_URL}/albums`,  
  //   {
  //     headers: {
  //         Authorization: this.token,
  //     },
  // }
  )
  
    
  
  }
  pushPost(post: Post): Observable<Post>{
    return this.http.post<Post>(`${this.BASE_URL}/posts`, post,  {
      headers: {
          Authorization: this.token,
      },
  })
  }
  register(user: User): Observable<User>{
    return this.http.post<User>(`${this.BASE_URL}/users`, user)
  }
  getCommentsofP(id: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.BASE_URL}/posts/${id}/comments`, {
      headers: {
          Authorization: this.token,
      },
  });
  }

  addComment(comment: Comment){
    return this.http.post<Comment>(`${this.BASE_URL}/comments`, comment, {
      headers: {
          Authorization: this.token,
      },
  })
  }
}

