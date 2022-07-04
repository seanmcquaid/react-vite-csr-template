import axios, { AxiosInstance } from 'axios';

const createApiClient = (baseURL: string): AxiosInstance => {
  const axiosInstance = axios.create({
    baseURL,
  });

  // Injects headers into every request. We can easily use our session info from redux for the value
  // axiosInstance.interceptors.request.use(
  //   async config => {
  //     const value = await redisClient.get(rediskey);
  //     const keys = JSON.parse(value);
  //     config.headers = {
  //       Authorization: `Bearer ${keys.access_token}`,
  //       Accept: 'application/json',
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //     };
  //     return config;
  //   },
  //   error => {
  //     return Promise.reject(error);
  //   },
  // );
  //
  // Response interceptor for API calls, this will trigger a retry if there is a 403 token error but will first fetch a fresh token
  // axiosInstance.interceptors.response.use(
  //   response => {
  //     return response;
  //   },
  //   async function (error) {
  //     const originalRequest = error.config;
  //     if (error.response.status === 403 && !originalRequest._retry) {
  //       originalRequest._retry = true;
  //       try {
  //         const access_token = await refreshAccessToken();
  //         axios.defaults.headers.common['Authorization'] =
  //           'Bearer ' + access_token;
  //         return axiosInstance(originalRequest);
  //       } catch (error) {
  //         return Promise.reject(error);
  //       }
  //     }
  //     return Promise.reject(error);
  //   },
  // );

  return axiosInstance;
};

export default createApiClient;
