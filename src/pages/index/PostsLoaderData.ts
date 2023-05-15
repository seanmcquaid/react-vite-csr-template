import Post from '../../types/responses/Post';

interface PostsLoaderData {
  posts: Promise<Post[]>;
}

export default PostsLoaderData;
