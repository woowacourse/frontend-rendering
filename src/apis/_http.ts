const BASE_URL = 'http://localhost:3000';

export const http = {
  get: async <T>(url: RequestInfo | URL): Promise<T> => {
    const response = await fetch(BASE_URL + url);

    if (!response.ok) {
      throw new Error('네트워크 통신 중 에러가 발생했습니다.');
    }

    return response.json();
  },
};
