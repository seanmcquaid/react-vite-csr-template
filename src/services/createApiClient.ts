import ky from 'ky';

const createApiClient = (baseUrl: string) => {
  return ky.create({
    prefixUrl: baseUrl,
    hooks: {
      beforeRequest: [
        request => {
          request.headers.set('X-Requested-With', 'ky');
        },
      ],
      beforeRetry: [
        async ({ request }) => {
          const token = await ky('https://example.com/refresh-token');
          request.headers.set('Authorization', `token ${token}`);
        },
      ],
      afterResponse: [
        async (_, options, response) => {
          if (options.validationSchema) {
            const data = await response.json();
            return new Response(
              JSON.stringify(options.validationSchema.parse(data)),
            );
          }
          return response;
        },
      ],
      beforeError: [
        error => {
          console.error(error);
          return error;
        },
      ],
    },
  });
};

export default createApiClient;
