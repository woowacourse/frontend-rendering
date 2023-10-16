import APIError from "./errors/APIError";
import NetworkError from "./errors/NetworkError";
import type { SearchedCafe } from "./types";

class Client {
  async fetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response> {
    const fetchFn: () => Promise<Response> = () =>
      fetch(`https://yozm.cafe/api${input}`, init);
    let response: Response;

    try {
      response = await fetchFn();
    } catch (error) {
      throw new NetworkError();
    }

    if (!response.ok) {
      let body: unknown;
      try {
        body = await response.json();
      } catch (error) {
        body = await response.text();
      }
      throw new APIError(response, body);
    }
    return response;
  }

  async fetchJson<TData>(
    input: RequestInfo | URL,
    init?: RequestInit
  ): Promise<TData> {
    return this.fetch(input, init).then((response) => response.json());
  }

  searchCafes(searchParams: { name: string; menu?: string; address?: string }) {
    const sanitizedSearchParams = Object.fromEntries(
      Object.entries({
        cafeName: searchParams.name.trim(),
        menu: searchParams.menu?.trim() ?? "",
        address: searchParams.address?.trim() ?? "",
      }).filter(([, value]) => (value?.length ?? 0) >= 2)
    );
    if (Object.keys(sanitizedSearchParams).length === 0) {
      return Promise.resolve([]);
    }
    return this.fetchJson<SearchedCafe[]>(
      `/cafes/search?${new URLSearchParams(sanitizedSearchParams).toString()}`
    );
  }
}

const client = new Client();

export default client;
