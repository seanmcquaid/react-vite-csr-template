import { createZetchClient } from 'zetch';

const createApiClient = (baseUrl: string) => {
  return createZetchClient({
    baseUrl,
  });
};

export default createApiClient;
