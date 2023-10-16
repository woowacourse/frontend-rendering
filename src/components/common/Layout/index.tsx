'use client';

import { PropsWithChildren } from 'react';

import WideHeader from '@/components/common/WideHeader';

import IconButton from '../IconButton';
import NarrowTemplateHeader from '../NarrowTemplateHeader';

import * as S from './style';
import { useRouter } from 'next/navigation';

interface LayoutProps extends PropsWithChildren {
  isSidebarVisible: boolean;
  isMobileDefaultHeaderVisible?: boolean;
}

export default function Layout({
  children,
  isSidebarVisible,
  isMobileDefaultHeaderVisible = true,
}: LayoutProps) {
  const router = useRouter();

  return (
    <S.Container>
      <S.WideHeaderWrapper>
        <WideHeader />
      </S.WideHeaderWrapper>
      <S.ContentContainer>
        {isSidebarVisible && (
          <S.DashboardWrapper>
            여기서 대시보드를 볼 수 있어요
          </S.DashboardWrapper>
        )}
        {isMobileDefaultHeaderVisible && (
          <S.MobileHeaderWrapper>
            <NarrowTemplateHeader>
              <IconButton
                category='back'
                onClick={() => {
                  router.push('/');
                }}
              />
            </NarrowTemplateHeader>
          </S.MobileHeaderWrapper>
        )}
        <S.MainContainer $isSidebarVisible={isSidebarVisible}>
          <S.ChildrenWrapper $isSidebarVisible={isSidebarVisible}>
            {children}
          </S.ChildrenWrapper>
        </S.MainContainer>
      </S.ContentContainer>
    </S.Container>
  );
}
