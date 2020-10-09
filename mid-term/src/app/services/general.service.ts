import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { Photo } from '../models/photo';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  BASE_URL = 'http://localhost:3000'
  token: string = 'Basic QnJldDpRd2VydHkxMjMj';
  constructor(private http: HttpClient) { }
  async posts() {
    const posts = await this.http
        .get<any[]>(`http://localhost:3000/posts`, {
            headers: {
                Authorization: this.token,
            },
        })
        .toPromise();

    return posts;
}

  getPosts(): Observable<Post[]> {
    
    return this.http.get<Post[]>( `${this.BASE_URL}/posts`, {
      headers: {
          Authorization: this.token,
      },
  })
  }
  getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>( `${this.BASE_URL}/photos`)
 }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.BASE_URL}/users`)
  }
  pushPost(post: Post): Observable<Post>{
    return this.http.post<Post>(`${this.BASE_URL}/posts`, post)
  }
}
