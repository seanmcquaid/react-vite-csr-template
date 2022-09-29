import store from '../../store';
import postsApi from '../../store/postsApi';

const postDetailsLoader = ({ params }) => {
  const { id } = params;
  if (!id) {
    return;
  }
  const { data } = postsApi.endpoints.getPostById.select(id)(store.getState());
  return data ?? store.dispatch(postsApi.endpoints.getPostById.initiate(id));
};

export default postDetailsLoader;
