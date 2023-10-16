'use client';
import { Suspense } from 'react';

import { Skeleton, UpButton, PostList, NarrowMainHeader } from '@/components';

import { smoothScrollToTop } from '@/utils/scrollToTop';

import * as S from './style';
import Layout from '@/components/common/Layout';
import Drawer from '@/components/common/Drawer';
import { useDrawer } from '@/hooks';
import ErrorBoundary from './ErrorBoundary';

export default function HomePage() {
  const { drawerRef, closeDrawer, openDrawer } = useDrawer('left');

  return (
    <Layout isSidebarVisible>
      <S.Container>
        <S.HeaderWrapper>
          <NarrowMainHeader handleMenuOpenClick={openDrawer} />
        </S.HeaderWrapper>
        <S.DrawerWrapper>
          <Drawer
            handleDrawerClose={closeDrawer}
            placement='left'
            width='225px'
            ref={drawerRef}
          >
            여기에서 대시보드를 볼 수 있어요.
          </Drawer>
        </S.DrawerWrapper>
        <ErrorBoundary>
          <Suspense fallback={<Skeleton isLarge />}>
            <PostList />
          </Suspense>
        </ErrorBoundary>
        <S.ButtonContainer>
          <UpButton onClick={smoothScrollToTop} />
        </S.ButtonContainer>
      </S.Container>
    </Layout>
  );
}
