import { PostCategory } from '../shared/model/post-category';
import { BlogState} from './blog.state';
import { BlogAction, BlogActionTypes} from './blog.action' 

export const initialState: BlogState = {
    category: PostCategory.animals,
    posts: null
};

export function blogReducer(state: BlogState = initialState, action: BlogAction): BlogState {
    switch (action.type) {
        case BlogActionTypes.ChangeAppCategory:
            return {
                ...state,
                category: action.payload
            };
        case BlogActionTypes.LoadPostsSuccess:
            return {
                ...state,
                posts: action.payload
            };
      default:
        return state;
    }
}