import { Route } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import PostsList, { filterPostsByText } from '../PostsList';
import {
  render,
  screen,
  waitFor,
  act,
} from '../../../testUtils/reactTestingLibraryUtils';
import RouteConstants from '../../../routes/RouteConstants';
import initialRootReducerState from '../../../testUtils/initialRootReducerState';

describe('PostsList', () => {
  describe('filterPostsByText', () => {
    it('filters out posts that do not match text', () => {
      expect(
        filterPostsByText('no match', [
          { title: 'I am here', id: 1, body: 'Body', userId: 1 },
        ]),
      );
    });
  });
  it('Displays filtered posts', () => {
    render(
      <>
        <Route
          path={RouteConstants.HOME}
          element={<PostsList filterText={'I am here'} />}
        />
        <Route
          path={RouteConstants.POST_DETAILS}
          element={<div data-testid="post-details" />}
        />
      </>,
      {
        initialRoute: '/',
        preloadedState: {
          ...initialRootReducerState,
          posts: {
            ...initialRootReducerState.posts,
            posts: [
              { title: 'I am here', id: 1, body: 'Body', userId: 1 },
              { title: 'Not a match', id: 2, body: 'Body', userId: 2 },
            ],
          },
        },
      },
    );
    expect(screen.queryAllByTestId('post').length).toEqual(1);
  });

  it('Takes the user to the post details page if they click on the post', async () => {
    render(
      <>
        <Route
          path={RouteConstants.HOME}
          element={<PostsList filterText={''} />}
        />
        <Route
          path={RouteConstants.POST_DETAILS}
          element={<div data-testid="post-details" />}
        />
      </>,
      {
        initialRoute: '/',
        preloadedState: {
          ...initialRootReducerState,
          posts: {
            ...initialRootReducerState.posts,
            posts: [{ title: 'I am here', id: 1, body: 'Body', userId: 1 }],
          },
        },
      },
    );
    await act(async () => {
      await userEvent.click(screen.getByTestId('post-button'));
    });
    await waitFor(() =>
      expect(screen.queryByTestId('post-details')).toBeInTheDocument(),
    );
  });
});
