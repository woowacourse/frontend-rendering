import { NotEmptyArray } from '@/types/lib';

export const isNotEmptyArray = <T>(array: T[]): array is NotEmptyArray<T> => {
  return array.length > 0;
};

export const addGoogleProxyUrl = (url: string) =>
  'https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=2592000&url=' +
  encodeURIComponent(url);
