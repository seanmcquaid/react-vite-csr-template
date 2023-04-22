import ky from 'ky';

const createApiClient = (baseUrl: string) => {
  return ky.create({
    prefixUrl: baseUrl,
    retry: {
      limit: 2,
      methods: ['get', 'put', 'head', 'delete', 'options', 'trace'],
      statusCodes: [408, 413, 429, 500, 502, 503, 504, 401, 403],
    },
    hooks: {
      beforeRequest: [
        request => {
          request.headers.set('X-Requested-With', 'ky');
        },
      ],
      beforeRetry: [
        async ({ request }) => {
          const token = await ky.get('https://example.com/refresh-token');
          request.headers.set('Authorization', `token ${token}`);
        },
      ],
      afterResponse: [
        async (_, options, response) => {
          if (!options.validationSchema) {
            return response;
          }

          const data = await response.json();
          return new Response(
            JSON.stringify(options.validationSchema.parse(data)),
          );
        },
      ],
      beforeError: [
        error => {
          return error;
        },
      ],
    },
  });
};

export default createApiClient;
