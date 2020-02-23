import { BlogService } from './shared/blog.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, throwError } from 'rxjs';
import { Post } from './shared/model/post';
import { switchMap, catchError } from 'rxjs/operators';
import { ChangeCategoryEffects } from './effects/change-category.effect';
import { PostCategory } from './shared/model/post-category';
import { BlogState } from './reducers/blog.state';
import { Store } from '@ngrx/store';
import { BlogActionTypes } from './reducers/blog.action';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit, OnDestroy {
  public posts: Post[];
  private postsSubscription: Subscription;
  constructor(private blogService: BlogService, private changeCategoryEffects : ChangeCategoryEffects, private store : Store<{blog : BlogState}>) { }

  ngOnInit() {
    this.loadDefaultPosts();
    this.postsSubscription = this.changeCategoryEffects.loadPosts$.pipe(switchMap(res => {
      return this.blogService.getPosts(res.payload).pipe(catchError(this.handlePostsError))
    })).subscribe(posts => {
      this.store.dispatch({type: BlogActionTypes.LoadPostsSuccess});
      this.posts = posts
    });
  }

  handlePostsError(error){
    this.store.dispatch({type: BlogActionTypes.LoadPostsfail});
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  loadDefaultPosts(){
    this.blogService.getPosts(PostCategory.animals).subscribe(posts => this.posts = posts);
  }
  ngOnDestroy(): void {
    this.postsSubscription.unsubscribe();
  }
}
