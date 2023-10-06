import { SEARCH_KEYWORD } from '@/constants/api';
import { SEARCH_KEYWORD_MAX_LENGTH } from '@/constants/policy';

import { getTrimmedWord } from '@/utils/getTrimmedWord';
import { useSearchParams } from 'next/navigation';

export const useCurrentKeyword = () => {
  const searchParams = useSearchParams();
  const currentKeyword = searchParams
    ? searchParams.toString().slice(0, SEARCH_KEYWORD_MAX_LENGTH) ?? ''
    : '';

  return {
    currentKeyword:
      currentKeyword !== '' ? getTrimmedWord(currentKeyword) : currentKeyword,
  };
};
