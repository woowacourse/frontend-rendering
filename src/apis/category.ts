import { Category } from '@/types/common';
import { fetchApi } from '@/apis/fetch';

export const getCategory = (type: string) => {
  const query = `?type=${type}`;
  return fetchApi<Category[]>(`categories/${query}`);
};
