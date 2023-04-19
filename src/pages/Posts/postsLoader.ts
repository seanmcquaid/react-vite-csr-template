import { defer, LoaderFunction } from 'react-router-dom';
import getPostsQuery from '../../queries/getPostsQuery.ts';
import queryClient from '../../services/queryClient.ts';

const postsLoader: LoaderFunction = () => {
  const query = getPostsQuery();
  return defer({
    posts:
      queryClient.getQueryData(query.queryKey) ?? queryClient.fetchQuery(query),
  });
};

export default postsLoader;
