import { getApi } from './getApi';
import { Topic } from '../types/topic';

export const getTopics = () => {
  const url = `/api`;
  return getApi<Topic[]>(url);
};
