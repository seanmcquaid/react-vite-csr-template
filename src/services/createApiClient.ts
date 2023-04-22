import ky from 'ky';

const createApiClient = (baseUrl: string) => {
  return ky.create({
    prefixUrl: baseUrl,
    hooks: {
      beforeRequest: [],
      beforeRetry: [],
      afterResponse: [
        async (_, options, response) => {
          if (options.validationSchema) {
            const data = await response.json();
            options.validationSchema.parse(data);
          }
          return response;
        },
      ],
      beforeError: [
        async (request, options, error) => {
          console.log(error);
        },
      ],
    },
  });
};

export default createApiClient;
