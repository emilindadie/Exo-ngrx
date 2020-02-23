import { BlogService } from './shared/blog.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, throwError } from 'rxjs';
import { Post } from './shared/model/post';
import { switchMap, catchError } from 'rxjs/operators';
import { BlogEffects } from './effects/blog.effect';
import { PostCategory } from './shared/model/post-category';
import { BlogState } from './reducers/blog.state';
import { Store, select } from '@ngrx/store';
import { BlogActionTypes } from './reducers/blog.action';
import { getPosts, getAppCategory } from './reducers/blog.selector';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit, OnDestroy {
  public posts: Post[];
  private postsSubscription: Subscription;

  constructor(private store: Store<BlogState>) { }

  ngOnInit() {
    // Initial load post
    this.store.pipe(
      select(getAppCategory),
    ).subscribe((currentCategory) => {
      this.store.dispatch({ type: BlogActionTypes.LoadPosts, payload: currentCategory});
    });
    // When app category change
    this.store.pipe(
      select(getPosts),
    ).subscribe((posts) => {
      this.posts = posts;
    });
  }

  ngOnDestroy(): void {
    this.postsSubscription.unsubscribe();
  }
}
