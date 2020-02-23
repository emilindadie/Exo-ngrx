import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { BlogAction } from '../reducers/blog.action';

@Injectable()
export class ChangeCategoryEffects {

    loadPosts$ = createEffect(() => this.actions$.pipe(
        ofType('[Blog Component] ChangeAppCategory'),
        switchMap((data => of(
            { type: '[Blog Component] LoadPosts', payload: data.payload }
        ))))
      );

    constructor(
        private actions$: Actions<BlogAction>,
      ) {}
}
