import {
  MutationState,
  QueryState,
} from '@reduxjs/toolkit/dist/query/core/apiState';
import { EndpointDefinitions, QueryStatus } from '@reduxjs/toolkit/query';
import getIsApiLoading from '../getIsApiLoading';

describe('getIsApiLoading', () => {
  describe('queries', () => {
    it('returns true if the api is loading', () => {
      expect(
        getIsApiLoading({
          name: { status: QueryStatus.pending },
        } as unknown as QueryState<EndpointDefinitions>),
      ).toBeTruthy();
    });
    it('returns false if the api is not loading', () => {
      expect(
        getIsApiLoading({} as QueryState<EndpointDefinitions>),
      ).toBeFalsy();
    });
  });
  describe('mutations', () => {
    it('returns true if the mutation is loading', () => {
      expect(
        getIsApiLoading(
          {} as QueryState<EndpointDefinitions>,
          {
            name: { status: QueryStatus.pending },
          } as unknown as MutationState<EndpointDefinitions>,
        ),
      ).toBeTruthy();
    });
    it('returns false if the mutation is not loading', () => {
      expect(
        getIsApiLoading(
          {} as QueryState<EndpointDefinitions>,
          {} as MutationState<EndpointDefinitions>,
        ),
      ).toBeFalsy();
    });
  });
});
