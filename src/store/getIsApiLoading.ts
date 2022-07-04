import { EndpointDefinitions, QueryStatus } from '@reduxjs/toolkit/query';
import {
  MutationState,
  QueryState,
} from '@reduxjs/toolkit/dist/query/core/apiState';

const getIsApiLoading = (
  queries: QueryState<EndpointDefinitions>,
  mutations?: MutationState<EndpointDefinitions>,
): boolean =>
  Object.values(queries).some(entry => entry?.status === QueryStatus.pending) ||
  Object.values(mutations ?? {}).some(
    entry => entry?.status === QueryStatus.pending,
  );

export default getIsApiLoading;
