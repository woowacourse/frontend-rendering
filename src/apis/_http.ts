const { BASE_URL } = process.env;

export const http = {
  get: async <T>(endPoint: RequestInfo | URL): Promise<T> => {
    const response = await fetch(`${BASE_URL}/api/${endPoint}`);

    if (!response.ok) {
      throw new Error('네트워크 통신 중 에러가 발생했습니다.');
    }

    return response.json();
  },
};
