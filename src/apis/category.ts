import { fetchApi } from './fetch';

export type CategoryType = 'food' | 'store';

export interface Category {
  id: number;
  name: string;
  image: string;
}

export const fetchCategory = (categoryType: CategoryType) => {
  return fetchApi<Category[]>(`/categories?type=${categoryType}`, {
    method: 'GET',
  });
};
