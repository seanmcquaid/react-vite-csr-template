import { defer, LoaderFunction } from 'react-router-dom';
import getPostQuery from '../../queries/getPostQuery.ts';
import queryClient from '../../services/queryClient.ts';

const postsDetailsLoader: LoaderFunction = ({ params }) => {
  const { id } = params;
  if (!id) {
    throw new Error('An ID is required');
  }
  const query = getPostQuery(id);

  return defer({
    postInfo:
      queryClient.getQueryData(query.queryKey) ?? queryClient.fetchQuery(query),
  });
};

export default postsDetailsLoader;
