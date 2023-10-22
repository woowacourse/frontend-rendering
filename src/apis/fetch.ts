import { BATON_BASE_URL } from "@/constants";
import { Method } from "@/types/api";

const fetchJson = async <T>(url: string, options?: RequestInit): Promise<T> => {
  const response = await fetch(`${BATON_BASE_URL}${url}`, options);

  try {
    if (!response.ok) throw new Error("잘못된 요청입니다.");

    return response.json();
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "알 수 없는 에러");
  }
};

const fetchApi = <T>(url: string, method: Method, isAuth: boolean, body?: BodyInit) => {
  return fetchJson<T>(url, {
    method,
    cache: "no-cache",
  });
};

export const request = {
  get: <T>(url: string, isAuth: boolean) => fetchApi<T>(url, "GET", isAuth),

  post: <T>(url: string, body?: BodyInit) => fetchApi<T>(url, "POST", true, body),

  put: <T>(url: string, body?: BodyInit) => fetchApi<T>(url, "PUT", true, body),

  patch: <T>(url: string, body?: BodyInit) => fetchApi<T>(url, "PATCH", true, body),

  delete: <T>(url: string) => fetchApi<T>(url, "DELETE", true),
};
