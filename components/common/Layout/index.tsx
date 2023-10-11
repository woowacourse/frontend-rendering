import { PropsWithChildren } from 'react';

import Dashboard from '@components/common/Dashboard';
import WideHeader from '@components/common/WideHeader';

import IconButton from '../IconButton';
import NarrowTemplateHeader from '../NarrowTemplateHeader';

import * as S from './style';
import { Category } from '@type/category';

interface LayoutProps extends PropsWithChildren {
  categoryList: Category[];
  isSidebarVisible: boolean;
  isChannelTalkVisible?: boolean;
  isMobileDefaultHeaderVisible?: boolean;
}

export default function Layout({
  children,
  isSidebarVisible,
  isMobileDefaultHeaderVisible = true,
  isChannelTalkVisible = true,
}: LayoutProps) {
  return (
    <S.Container>
      <S.WideHeaderWrapper>
        <WideHeader />
      </S.WideHeaderWrapper>
      <S.ContentContainer>
        {isSidebarVisible && (
          <S.DashboardWrapper>
            <Dashboard />
          </S.DashboardWrapper>
        )}
        {isMobileDefaultHeaderVisible && (
          <S.MobileHeaderWrapper>
            <NarrowTemplateHeader>
              <IconButton category="back" />
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
