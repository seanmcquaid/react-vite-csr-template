import { BaseQueryFn } from '@reduxjs/toolkit/query';
import { ZodFirstPartySchemaTypes } from 'zod/lib/types';
import { createZetchClient, ZetchError, ZetchRequestConfig } from 'zetch';
import createApiClient from '../services/createApiClient';

const zetchBaseQuery =
  <ValidationSchema extends ZodFirstPartySchemaTypes>({
    baseUrl,
  }: {
    baseUrl: string;
  }): BaseQueryFn<{
    url: string;
    method: keyof ReturnType<typeof createZetchClient>;
    body?: ZetchRequestConfig<ValidationSchema>['body'];
    validationSchema?: ValidationSchema;
  }> =>
  async ({ url, method, body, validationSchema }) => {
    try {
      const apiClient = createApiClient(baseUrl);
      const result = await apiClient[method](url, {
        body,
        validationSchema,
      });
      return { data: result };
    } catch (err) {
      const zetchError = err as ZetchError;
      return { error: zetchError.toObject() };
    }
  };

export default zetchBaseQuery;
