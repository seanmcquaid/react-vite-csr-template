import { LoaderFunctionArgs } from 'react-router-dom';
import { loader as postDetailsLoader } from '../PostDetails';

describe('postDetailsLoader', () => {
  it('throws an error if no id is provided', () => {
    expect(() =>
      postDetailsLoader({ params: {} } as LoaderFunctionArgs),
    ).toThrowError('An ID is required');
  });
});
