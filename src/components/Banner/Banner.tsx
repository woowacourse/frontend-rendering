import React from "react";
import * as S from "./BannerStyled";

const Banner = () => {
  return (
    <S.BannerBackground>
      <S.BannerContents src="/event_banner.webp" />
    </S.BannerBackground>
  );
};

export default Banner;
