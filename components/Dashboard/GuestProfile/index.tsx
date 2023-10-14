import React from "react";

import kakaoLogin from "@/assets/kakao_login.webp";

import * as S from "./style";
import Image from "next/image";

const GuestProfile = () => {
  return (
    <S.Container role="region" aria-label="비회원 프로필">
      <div>
        <S.ImageContainer>
          <Image src={kakaoLogin} alt="카카오 로그인 페이지로 이동" />
        </S.ImageContainer>
      </div>
      <S.TextCard>로그인 후 이용할 수 있습니다</S.TextCard>
    </S.Container>
  );
};

export default GuestProfile;
