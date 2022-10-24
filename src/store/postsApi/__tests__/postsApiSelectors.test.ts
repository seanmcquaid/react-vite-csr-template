import { EndpointDefinitions, QueryStatus } from '@reduxjs/toolkit/query';
import { QueryState } from '@reduxjs/toolkit/dist/query/core/apiState';
import { RootState } from '../../index';
import { selectIsPostsApiLoading } from '../postsApiSelectors';

describe('postsApiSelectors', () => {
  it('returns true if the posts api is loading', () => {
    const state = {
      postsApi: {
        queries: {
          name: { status: QueryStatus.pending },
        } as unknown as QueryState<EndpointDefinitions>,
      },
    } as RootState;
    expect(selectIsPostsApiLoading(state)).toBeTruthy();
  });
});
