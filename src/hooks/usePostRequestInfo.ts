import { PostRequestKind } from '@/app/types';

import { POST_TYPE } from '@/constants/api';
import { DEFAULT_CATEGORY_ID } from '@/constants/api';
import { PATH } from '@/constants/path';

import { getPathFragment } from '@/utils/getPathFragment';

import { useCurrentKeyword } from './useCurrentKeyword';
import { useRouter } from 'next/router';

const REQUEST_URL: Record<string, PostRequestKind> = {
  [PATH.HOME]: POST_TYPE.ALL,
  [PATH.POST_CATEGORY]: POST_TYPE.CATEGORY,
  [PATH.USER_POST]: POST_TYPE.MY_POST,
  [PATH.USER_VOTE]: POST_TYPE.MY_VOTE,
  [PATH.SEARCH]: POST_TYPE.SEARCH,
};

export const usePostRequestInfo = () => {
  const { currentKeyword } = useCurrentKeyword();
  const router = useRouter();

  const categoryId = Number(router.query.categoryId ?? DEFAULT_CATEGORY_ID);

  const convertedPathname = getPathFragment(router.asPath);
  const postType = REQUEST_URL[convertedPathname];

  const postOptionalOption = {
    categoryId,
    keyword: currentKeyword,
  };

  if (!postType) {
    return { postType: REQUEST_URL[PATH.HOME], postOptionalOption };
  }

  return { postType, postOptionalOption };
};
