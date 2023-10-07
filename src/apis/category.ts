import { fetchApi } from './fetch';

export interface Category {
  id: number;
  name: string;
  image: string;
}

export const getCategories = (type: string) => {
  const endpoint = `categories/?type=${type}`;
  return fetchApi<Category[]>(endpoint);
};
