import { Category } from '@/types/common';
import { fetchApi } from '@/apis/fetch';

const useCategory = (type: string) => {
  const query = `?type=${type}`;
  return fetchApi<Category[]>(`categories/${query}`);
};

export default useCategory;
