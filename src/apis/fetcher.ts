const { BASE_URL } = process.env;
const MY_END_POINT = BASE_URL + '/api';

const fetcher = (endpoint: string) => {
  return <T>(url: string, options?: RequestInit): Promise<T> => {
    return fetch(endpoint + url, { ...options, cache: options?.cache || 'no-store' })
      .then((res) => {
        if (res.ok) return res.json();
        else {
          console.error(res.status, res.statusText);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

export const myFetcher = fetcher(MY_END_POINT);
