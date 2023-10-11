import { Method } from "@/types/api";

export const BATON_BASE_URL = "https://baton-dev.n-e.kr/api/v1";

const parseJson = async (response: Response): Promise<any> => {
  try {
    return await response.json();
  } catch (error) {
    return;
  }
};

const fetchJson = async <T>(url: string, options?: RequestInit): Promise<T> => {
  return await fetch(`${BATON_BASE_URL}${url}`, options).then(async (response) =>
    parseJson(response)
  );
};

const fetchApi = async <T>(url: string, method: Method, isAuth: boolean, body?: BodyInit) => {
  return fetchJson<T>(url, {
    method,
    body,
  });
};

export const request = {
  get: <T>(url: string, isAuth: boolean) => fetchApi<T>(url, "GET", isAuth),

  post: <T>(url: string, body?: BodyInit) => fetchApi<T>(url, "POST", true, body),

  put: <T>(url: string, body?: BodyInit) => fetchApi<T>(url, "PUT", true, body),

  patch: <T>(url: string, body?: BodyInit) => fetchApi<T>(url, "PATCH", true, body),

  delete: <T>(url: string) => fetchApi<T>(url, "DELETE", true),
};
