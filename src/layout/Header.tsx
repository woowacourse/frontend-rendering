"use client";

import React from "react";
import Button from "@/components/common/Button/Button";
import * as S from "./HeaderStyled";
import { useRouter } from "next/navigation";

const Header = () => {
  const { replace } = useRouter();

  return (
    <S.HeaderWrapper>
      <S.HeaderContainer>
        <S.Logo
          onClick={() => {
            replace("/");
          }}
        />
        <S.MenuContainer>
          <Button fontSize="14px" width="76px" height="35px" colorTheme="RED">
            로그인
          </Button>
        </S.MenuContainer>
      </S.HeaderContainer>
    </S.HeaderWrapper>
  );
};

export default Header;
