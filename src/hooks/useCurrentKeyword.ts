import { SEARCH_KEYWORD } from '@/constants/api';
import { SEARCH_KEYWORD_MAX_LENGTH } from '@/constants/policy';

import { getTrimmedWord } from '@/utils/getTrimmedWord';
import { useRouter } from 'next/router';

export const useCurrentKeyword = () => {
  const router = useRouter();
  const currentKeyword =
    router.query.keyword?.toString().slice(0, SEARCH_KEYWORD_MAX_LENGTH) ?? '';

  return {
    currentKeyword:
      currentKeyword !== '' ? getTrimmedWord(currentKeyword) : currentKeyword,
  };
};
