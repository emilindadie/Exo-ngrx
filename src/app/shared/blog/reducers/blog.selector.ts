import { createFeatureSelector, createSelector, State } from '@ngrx/store';
import { BlogState } from './blog.state';

export const getBlogState = createFeatureSelector<BlogState>('blog');

export const getPosts = createSelector(
    getBlogState,
  (state: BlogState) => state.posts
);

export const getAppCategory = createSelector(
    getBlogState,
  (state: BlogState) => state.category
);
