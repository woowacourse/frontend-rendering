import { Suspense } from 'react';

import { Skeleton, UpButton, PostList } from '@/components';

import { smoothScrollToTop } from '@/utils/scrollToTop';

import * as S from './style';

export default function HomePage() {
  return (
    <S.Container>
      <Suspense fallback={<Skeleton isLarge />}>
        <PostList />
      </Suspense>
      <S.ButtonContainer>
        <UpButton onClick={smoothScrollToTop} />
      </S.ButtonContainer>
    </S.Container>
  );
}
