import { PostCategory } from '../shared/model/post-category';
import { Post } from '../shared/model/post';

export interface BlogState {
    category: PostCategory;
    posts: Post[];
}