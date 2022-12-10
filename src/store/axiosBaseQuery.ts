import { AxiosError, AxiosRequestConfig, Method } from 'axios';
import { BaseQueryFn } from '@reduxjs/toolkit/query';
import { ZodFirstPartySchemaTypes } from 'zod/lib/types';
import createApiClient from '../services/createApiClient';

const axiosBaseQuery =
  ({
    baseUrl,
  }: {
    baseUrl: string;
  }): BaseQueryFn<{
    url: string;
    method: Method;
    data?: AxiosRequestConfig['data'];
    params?: AxiosRequestConfig['params'];
    validationSchema?: ZodFirstPartySchemaTypes;
  }> =>
  async ({ url, method, data, params, validationSchema }) => {
    try {
      const apiClient = createApiClient(baseUrl);
      const result = await apiClient({
        url: baseUrl + url,
        method,
        data,
        params,
        validationSchema,
      });
      return { data: result };
    } catch (err) {
      const axiosError = err as AxiosError;
      return {
        error: {
          status: axiosError.response?.status,
          data: axiosError.response?.data || axiosError.message,
        },
      };
    }
  };

export default axiosBaseQuery;
