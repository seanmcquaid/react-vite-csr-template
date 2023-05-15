import Post from '../../../../types/responses/Post';

interface PostDetailsLoaderData {
  postInfo: Promise<Post>;
}

export default PostDetailsLoaderData;
