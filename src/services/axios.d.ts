import { ZodFirstPartySchemaTypes } from 'zod/lib/types';

export declare module 'axios' {
  export interface AxiosRequestConfig {
    _retry?: boolean;
    validationSchema?: ZodFirstPartySchemaTypes;
  }
}
