import { LoaderFunctionArgs } from 'react-router-dom';
import postDetailsLoader from '../postDetailsLoader';

describe('postDetailsLoader', () => {
  it('throws an error if no id is provided', () => {
    expect(() =>
      postDetailsLoader({ params: {} } as LoaderFunctionArgs),
    ).toThrowError('An ID is required');
  });
});
