import React from "react";
import Header from "./Header";
import * as S from "./LayoutStyled";

interface Props {
  children: React.ReactNode;
  maxWidth?: string;
}

const Layout = ({ children, maxWidth }: Props) => {
  return (
    <S.LayoutContainer>
      <Header />
      <S.ChildrenWrapper $maxWidth={maxWidth}>{children}</S.ChildrenWrapper>
    </S.LayoutContainer>
  );
};

export default Layout;
