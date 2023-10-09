import { getApi } from './getApi';

export interface TopicCardProps {
  id: number;
  name: string;
  image: string;
  creator: string;
  pinCount: number;
  bookmarkCount: number;
  updatedAt: string;
}

export const getTopics = () => {
  const url = `/api`;
  return getApi<TopicCardProps[]>(url);
};
