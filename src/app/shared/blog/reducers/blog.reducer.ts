import { PostCategory } from '../shared/model/post-category';
import { BlogState} from './blog.state';
import { BlogAction, BlogActionTypes} from './blog.action' 

export const initialState : BlogState = {
    category: PostCategory.animals
};

export function blogReducer(state: BlogState = initialState, action: BlogAction): BlogState {
    switch (action.type) {
        case BlogActionTypes.ChangeAppCategory:
            return {
                category: action.payload
            };
        case BlogActionTypes.LoadPosts:
            return {
                category: action.payload
            };
        case BlogActionTypes.LoadPostsSuccess:
            return {
                category: state.category
            };
        case BlogActionTypes.LoadPostsfail:
            return {
                category: state.category
            };
      default:
        return state;
    }
  }