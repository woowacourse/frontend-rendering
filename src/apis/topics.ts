import { getApi } from './getApi';
import { Topic } from '@/types/Topic';

export const getBestTopics = () => {
  const url = `/api/bestTopics`;
  return getApi<Topic[]>(url);
};

export const getNewestTopics = () => {
  const url = `/api/newestTopics`;
  return getApi<Topic[]>(url);
};

export const getTopics = () => {
  const url = `/api/allTopics`;
  return getApi<Topic[]>(url);
};
