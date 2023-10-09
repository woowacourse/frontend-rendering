import { getApi } from './getApi';
import { Topic } from '@/types/Topic';

export const getTopics = () => {
  const url = `/api`;
  return getApi<Topic[]>(url);
};
