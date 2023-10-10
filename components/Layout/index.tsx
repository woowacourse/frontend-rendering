import { PropsWithChildren } from "react";

import Dashboard from "@/components/Dashboard";
import WideHeader from "@/components/WideHeader";

import IconButton from "../IconButton";
import NarrowTemplateHeader from "../NarrowTemplateHeader";

import * as S from "./style";

interface LayoutProps extends PropsWithChildren {
  isSidebarVisible: boolean;
  isChannelTalkVisible?: boolean;
  isMobileDefaultHeaderVisible?: boolean;
}

export default function Layout({
  children,
  isSidebarVisible,
  isMobileDefaultHeaderVisible = true,
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
              <IconButton
                category="back"
                onClick={() => alert("현재 지원하지 않는 기능입니다.")}
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
