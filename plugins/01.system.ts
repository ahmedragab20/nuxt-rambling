import { vFetch, vSetupConfig } from 'very-good-fetch';
export default defineNuxtPlugin((nuxtApp) => {
  vSetupConfig({
    config: {
      baseUrl: 'https://dummyjson.com/',
    },
    interceptors: {
      onBeforeRequest(request) {
        console.log(request);

        return request;
      },
      onBeforeResponse(response) {
        console.log(response);

        return response;
      },
      onError(error) {
        console.error(error);

        return error;
      },
    },
  });

  return {
    provide: {
      vFetch: vFetch,
    },
  };
});
