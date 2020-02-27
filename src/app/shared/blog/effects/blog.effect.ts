import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import { BlogAction, BlogActionTypes } from '../reducers/blog.action';
import { BlogService } from '../shared/blog.service';

@Injectable()
export class BlogEffects {

    changeCategory$ = createEffect(() => this.actions$.pipe(
        ofType(BlogActionTypes.ChangeAppCategory),
        switchMap((data => of(
            { type: BlogActionTypes.LoadPosts, payload: data.payload }
        ))))
      );

    loadPosts$ = createEffect(() => this.actions$.pipe(
        ofType(BlogActionTypes.LoadPosts),
        switchMap((data) => this.blogService.getPosts(data.payload).pipe(
            switchMap((posts) => of({ type: BlogActionTypes.LoadPostsSuccess, payload: posts })),
            catchError(() => of({ type: BlogActionTypes.LoadPostsfail }))
        )),
    ));

    constructor(
        private actions$: Actions<BlogAction>,
        private blogService: BlogService,
      ) {}
}
