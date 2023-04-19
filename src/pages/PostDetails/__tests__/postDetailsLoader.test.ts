import { LoaderFunctionArgs } from 'react-router-dom';
import postDetailsLoader from '../postDetailsLoader.ts';

describe('postDetailsLoader', () => {
  it('throws an error if no id is provided', () => {
    expect(() =>
      postDetailsLoader({ params: {} } as LoaderFunctionArgs),
    ).toThrowError('An ID is required');
  });
});
