import { Action } from '@ngrx/store';

export enum BlogActionTypes {
    LoadPosts = '[Blog Component] LoadPosts',
    LoadPostsfail = '[Blog Component] LoadPostsfail',
    LoadPostsSuccess = '[Blog Component] LoadPostsSuccess',
    ChangeAppCategory = '[Blog Component] ChangeAppCategory'
}

export class BlogAction implements Action {
    readonly type;
    payload: any;
}
