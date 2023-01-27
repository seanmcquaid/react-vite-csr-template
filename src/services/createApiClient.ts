import { zetch } from 'zetch';

const createApiClient = (baseUrl: string) => {
  return zetch.create({
    baseUrl,
  });
};

export default createApiClient;
