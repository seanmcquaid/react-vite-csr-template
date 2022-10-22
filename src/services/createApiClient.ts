import axios, { AxiosError, AxiosInstance } from 'axios';

const createApiClient = (baseURL: string): AxiosInstance => {
  const axiosInstance = axios.create({
    baseURL,
  });

  axiosInstance.interceptors.request.use(
    async config => {
      const token = localStorage.getItem('token') ?? 'token';
      config.headers = {
        Authorization: `Bearer ${token}`,
      };
      return config;
    },
    error => {
      return Promise.reject(error);
    },
  );

  axiosInstance.interceptors.response.use(
    response => {
      if (response?.config?.validationSchema) {
        const validationResults = response?.config?.validationSchema?.safeParse(
          response.data,
        );
        if (!validationResults?.success) {
          console.log(
            'log this to error logging service',
            validationResults?.error,
          );
        }
      }
      return response;
    },
    async (error: AxiosError) => {
      const originalRequest = error?.config;
      if (
        error?.response?.status === 403 &&
        !originalRequest?._retry &&
        !!originalRequest
      ) {
        originalRequest._retry = true;
        try {
          const token = localStorage.getItem('token') ?? 'token';
          axiosInstance.defaults.headers.common[
            'Authorization'
          ] = `Bearer ${token};`;
          return axiosInstance(originalRequest);
        } catch (accessTokenError) {
          console.log('log this to error logging service', accessTokenError);
          return Promise.reject(accessTokenError);
        }
      }
      console.log('log this to error logging service', error);
      return Promise.reject(error);
    },
  );

  return axiosInstance;
};

export default createApiClient;
