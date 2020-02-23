import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostCategory } from './model/post-category';
import { Post } from './model/post';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../constants/blog.constant';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  public getPosts(category: PostCategory): Observable<Post[]> {
    return this.http.get<Post[]>(`${API_URL}?category=${category}`);
  }
}
