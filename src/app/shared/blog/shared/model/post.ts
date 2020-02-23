import { PostImage } from './post-image';
import { PostCategory } from './post-category';
export interface Post {
  body: string;
  subtitle: string;
  title: string;
  publicationDate: Date;
  image: PostImage;
  userId: 1;
  id: 1;
  category: PostCategory;
}
